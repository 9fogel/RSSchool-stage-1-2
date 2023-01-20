import Model from '../model/model';
import Garage from '../view/garage';
import State from '../state/state';
import Animation from '../utils/animation';
import { Path, TButtons, TDisabled } from '../types.ts/types';

class GarageController {
  private readonly garage: Garage;

  private readonly model: Model;

  constructor() {
    this.garage = new Garage();
    this.model = new Model();
  }

  public async run(): Promise<void> {
    await this.getCars();
    this.garage.render();
    this.disableUpdate();
    this.disableBtns();
    this.listenButtons();
  }

  private disableUpdate(): void {
    const disabledElems: TDisabled = {
      updateBtn: document.querySelector('.update-btn'),
      updateInput: document.querySelector('#update-name'),
      updateColor: document.querySelector('#update-color'),
    };

    Object.values(disabledElems).forEach((elem) => elem?.setAttribute('disabled', 'disabled'));
  }

  private enableUpdate(): void {
    const disabledElems: TDisabled = {
      updateBtn: document.querySelector('.update-btn'),
      updateInput: document.querySelector('#update-name'),
      updateColor: document.querySelector('#update-color'),
    };

    const carData = State.savedState.cars.filter((car) => car?.id === +State.savedState.id)[0];
    if (carData) {
      const { name, color } = carData;
      if (disabledElems.updateInput instanceof HTMLInputElement) {
        disabledElems.updateInput.value = name;
      }
      if (disabledElems.updateColor instanceof HTMLInputElement) {
        disabledElems.updateColor.value = color;
      }
    }

    Object.values(disabledElems).forEach((elem) => elem?.removeAttribute('disabled'));
  }

  private disableBtns(): void {
    const resetBtn = document.querySelector('.reset-btn');
    resetBtn?.setAttribute('disabled', 'disabled');

    const stopBtns: NodeListOf<HTMLElement> | null = document.querySelectorAll('.stop-btn');
    stopBtns?.forEach((button: HTMLElement) => button?.setAttribute('disabled', 'disabled'));
  }

  private handleStopBtn(id: string, action: string): void {
    const stopBtn: HTMLElement | null = document.getElementById(`stop-btn-${id}`);

    if (action === 'enable') {
      stopBtn?.removeAttribute('disabled');
    }
    if (action === 'disable') {
      stopBtn?.setAttribute('disabled', 'disabled');
    }
  }

  private handleDriveBtn(id: string, action: string): void {
    const driveBtn: HTMLElement | null = document.getElementById(`drive-btn-${id}`);

    if (action === 'enable') {
      driveBtn?.removeAttribute('disabled');
    }
    if (action === 'disable') {
      driveBtn?.setAttribute('disabled', 'disabled');
    }
  }

  private listenEditBtns(): void {
    const buttons: TButtons = {
      createBtn: document.querySelector('.create-btn'),
      updateBtn: document.querySelector('.update-btn'),
    };

    buttons.createBtn?.addEventListener('click', this.createCar);
    buttons.updateBtn?.addEventListener('click', this.updateCar);
  }

  // private listenRaceBtns(): void {
  //   const buttons: TButtons = {
  //     raceBtn: document.querySelector('.race-btn'),
  //     resetBtn: document.querySelector('.reset-btn'),
  //     generateBtn: document.querySelector('.generate-btn'),
  //   };

  //   console.log(buttons);
  // }

  private listenDriveControls(): void {
    const driveBtns: NodeListOf<HTMLElement> | null = document.querySelectorAll('.drive-btn');
    driveBtns?.forEach((button: HTMLElement) => {
      button?.addEventListener('click', (event) => {
        this.startCar(event);
      });
    });

    const stopBtns: NodeListOf<HTMLElement> | null = document.querySelectorAll('.stop-btn');
    stopBtns?.forEach((button: HTMLElement) => {
      button?.addEventListener('click', (event) => {
        this.stopCar(event);
      });
    });
  }

  private listenButtons(): void {
    this.listenEditBtns();
    // this.listenRaceBtns();
    this.listenDriveControls();

    const selectBtns: NodeListOf<HTMLElement> | null = document.querySelectorAll('.select-btn');
    selectBtns?.forEach((button: HTMLElement) => {
      button?.addEventListener('click', (event) => {
        this.rememberId(event);
        this.enableUpdate();
      });
    });

    const removeBtns: NodeListOf<HTMLElement> | null = document.querySelectorAll('.remove-btn');
    removeBtns?.forEach((button: HTMLElement) => {
      button?.addEventListener('click', (event) => {
        this.deleteCar(event);
      });
    });
  }

  private rememberId(event: Event): string {
    let id = '';
    if (event.target instanceof HTMLElement) {
      const idArr = event.target.id.split('-');
      id = idArr[idArr.length - 1];
    }

    State.savedState.id = id;

    return id;
  }

  private getCars = async (): Promise<void> => {
    const baseUrl = 'http://127.0.0.1:3000';
    const path = Path.Garage;

    const limit = 7;
    const currentPage = State.savedState.pageNum;
    // const page: HTMLSpanElement | null = document.querySelector('.current-page');
    // if (HTMLSpanElement && page?.textContent) {
    //   currentPage = +page.textContent;
    // }

    const { cars, total } = await this.model.getGarage(baseUrl, path, currentPage, limit);

    const carsArr = [...(await cars)];
    State.savedState.cars = carsArr;
    if (total) {
      State.savedState.totalCars = +total;
    }
  };

  private createCar = async (): Promise<void> => {
    const nameInput: HTMLInputElement | null = document.querySelector('#create-name');
    let carName = '';
    if (nameInput) {
      carName = nameInput.value;
    }

    const colorInput: HTMLInputElement | null = document.querySelector('#create-color');
    let carColor = '#55ff5c';
    if (colorInput) {
      carColor = colorInput.value;
    }

    const bodyData = { name: carName, color: carColor };

    const baseUrl = 'http://127.0.0.1:3000';
    const path = Path.Garage;
    const body = JSON.stringify(bodyData);
    const method = 'POST';
    const headers = { 'Content-Type': 'application/json' };

    await this.model.createCar(baseUrl, path, method, body, headers);
    this.garage.clearGaragePage();
    this.run();
  };

  private updateCar = async (): Promise<void> => {
    const { id } = State.savedState;

    const nameInput: HTMLInputElement | null = document.querySelector('#update-name');
    let carName = '';
    if (nameInput) {
      carName = nameInput.value;
    }

    const colorInput: HTMLInputElement | null = document.querySelector('#update-color');
    let carColor = '#55ff5c';
    if (colorInput) {
      carColor = colorInput.value;
    }

    const bodyData = { name: carName, color: carColor };

    const baseUrl = 'http://127.0.0.1:3000';
    const path = Path.Garage;
    const body = JSON.stringify(bodyData);
    const method = 'PUT';
    const headers = { 'Content-Type': 'application/json' };

    await this.model.updateCar(baseUrl, path, id, method, body, headers);
    this.garage.clearGaragePage();
    this.run();
  };

  private deleteCar = async (event: Event): Promise<void> => {
    const id = this.rememberId(event);

    const baseUrl = 'http://127.0.0.1:3000';
    const path = Path.Garage;
    const method = 'DELETE';

    await this.model.deleteCar(baseUrl, path, id, method);
    this.garage.clearGaragePage();
    this.run();
  };

  private startCar = async (event: Event): Promise<void> => {
    const id = this.rememberId(event);
    this.handleStopBtn(id, 'enable');
    this.handleDriveBtn(id, 'disable');

    const baseUrl = 'http://127.0.0.1:3000';
    const path = Path.Engine;
    const status = 'started';
    const method = 'PATCH';

    const { velocity, distance } = await this.model.startStopCar(baseUrl, path, id, status, method);

    const duration = distance / velocity;
    // Animation.start(id, duration);
    // await this.switchEngine(id);
    this.switchEngine(id);
    Animation.start(id, duration);
  };

  private switchEngine = async (id: string): Promise<void> => {
    const baseUrl = 'http://127.0.0.1:3000';
    const path = Path.Engine;
    const status = 'drive';
    const method = 'PATCH';

    const result = await this.model.switchEngine(baseUrl, path, id, status, method);
    console.log(result.success);
    if (!result.success) {
      cancelAnimationFrame(State.savedState.animation[id]);
    }
  };

  private stopCar = async (event: Event): Promise<void> => {
    const id = this.rememberId(event);
    const baseUrl = 'http://127.0.0.1:3000';
    const path = Path.Engine;
    const status = 'stopped';
    const method = 'PATCH';

    await this.model.startStopCar(baseUrl, path, id, status, method);

    this.handleDriveBtn(id, 'enable');
    this.handleStopBtn(id, 'disable');
    cancelAnimationFrame(State.savedState.animation[id]);
    this.garage.setCarInitialPosition(id);
  };
}

export default GarageController;
