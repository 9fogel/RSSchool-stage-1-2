import Model from '../model/model';
import Garage from '../view/garage';
import State from '../state/state';
import Animation from '../utils/animation';
import { TButtons, TElements } from './controller-i';
import { Path } from '../types.ts/types';
import View from '../view/appView';

class GarageController {
  private readonly garage: Garage;

  private readonly model: Model;

  private readonly view: View;

  constructor() {
    this.garage = new Garage();
    this.model = new Model();
    this.view = new View();
  }

  public async run(): Promise<void> {
    this.garage.clearGaragePage();
    await this.getCars();
    this.garage.render();
    this.disableUpdate();
    this.disableBtns();
    this.listenButtons();
  }

  private disableUpdate(): void {
    const disabledElems: TElements = {
      updateBtn: document.querySelector('.update-btn'),
      updateInput: document.querySelector('#update-name'),
      updateColor: document.querySelector('#update-color'),
    };

    Object.values(disabledElems).forEach((elem) => elem?.setAttribute('disabled', 'disabled'));
  }

  private enableUpdate(): void {
    const disabledElems: TElements = {
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

  private disableBtn(action: string): void {
    const btn = document.querySelector(`.${action}-btn`);
    btn?.setAttribute('disabled', 'disabled');
  }

  private enableBtn(action: string) {
    const btn = document.querySelector(`.${action}-btn`);
    btn?.removeAttribute('disabled');
  }

  private disableBtns(): void {
    this.disableBtn('reset');

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

  private listenRaceBtns(): void {
    const buttons: TButtons = {
      raceBtn: document.querySelector('.race-btn'),
      resetBtn: document.querySelector('.reset-btn'),
      generateBtn: document.querySelector('.generate-btn'),
    };

    buttons.raceBtn?.addEventListener('click', this.raceAll);
    buttons.resetBtn?.addEventListener('click', this.resetRace);
  }

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
    this.listenRaceBtns();
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

  // private async updatePagination() {
  //   const pagination: TElements = {
  //     previousBtn: document.querySelector('.previous-btn'),
  //     curPage: document.querySelector('.current-page'),
  //     totalPages: document.querySelector('.total-pages'),
  //     nextBtn: document.querySelector('.next-btn'),
  //   };

  //   if (pagination.curPage?.textContent && pagination.totalPages?.textContent) {
  //     const maxItems = +pagination.curPage.textContent * State.savedState.pageLimitGarage;
  //     console.log('maxItems', maxItems);
  //     console.log('State.savedState.totalCars', State.savedState.totalCars);
  //     if (maxItems < State.savedState.totalCars) {
  //       pagination.nextBtn?.removeAttribute('disabled');
  //     }
  //     // if (maxItems === State.savedState.totalCars) {
  //     //   pagination.nextBtn?.setAttribute('disabled', 'disabled');
  //     // }
  //     if (maxItems > State.savedState.totalCars) {
  //       const newPageNum = Math.ceil(maxItems / State.savedState.totalCars);
  //       pagination.curPage.textContent = newPageNum.toString();
  //       State.savedState.pageNumGarage = newPageNum;
  //       pagination.totalPages.textContent = newPageNum.toString();
  //       await this.getCars();
  //     }
  //   }
  // }

  private rememberId(event?: Event): string {
    let id = '';
    if (event?.target instanceof HTMLElement) {
      const idArr = event.target.id.split('-');
      id = idArr[idArr.length - 1];
    }

    State.savedState.id = id;

    return id;
  }

  public getCars = async (): Promise<void> => {
    const baseUrl = 'http://127.0.0.1:3000';
    const path = Path.Garage;

    const limit = State.savedState.pageLimitGarage;
    const currentPage = State.savedState.pageNumGarage;

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
    // this.view.renderFooter('garage');
    this.run();
    // await this.run();
    // this.updatePagination();
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
    // this.updatePagination();
    // await this.run();
    this.run();
  };

  private startCar = async (event?: Event, carId?: number): Promise<void> => {
    // const id = event ? this.rememberId(event) : carId?.toString();
    const id = this.rememberId(event) ?? carId?.toString();
    if (id) {
      this.handleStopBtn(id, 'enable');
      this.handleDriveBtn(id, 'disable');

      const baseUrl = 'http://127.0.0.1:3000';
      const path = Path.Engine;
      const status = 'started';
      const method = 'PATCH';

      const { velocity, distance } = await this.model.startStopCar(
        baseUrl,
        path,
        id,
        status,
        method,
      );

      const duration = distance / velocity;
      // Animation.start(id, duration);
      // await this.switchEngine(id);
      this.switchEngine(id).catch(console.log);
      Animation.start(id, duration);
    }
  };

  private switchEngine = async (id: string): Promise<void> => {
    const baseUrl = 'http://127.0.0.1:3000';
    const path = Path.Engine;
    const status = 'drive';
    const method = 'PATCH';

    const controller = new AbortController();
    const { signal } = controller;
    State.savedState.controller[id] = controller;

    const result = await this.model.switchEngine(baseUrl, path, id, status, method, signal);
    console.log(result.success);
    if (!result.success) {
      cancelAnimationFrame(State.savedState.animation[id]);
    }
    if (result.success && State.savedState.race && !State.savedState.winnerFound) {
      const winnerCar = State.savedState.cars.filter((car) => car?.id === +id)[0];
      if (winnerCar) {
        this.showWinnerPopup(winnerCar.name, id);
        setTimeout(() => this.hideWinnerPopup(), 5000);
      }
      State.savedState.winnerFound = true;
    }
  };

  private stopCar = async (event: Event): Promise<void> => {
    const id = this.rememberId(event);
    const baseUrl = 'http://127.0.0.1:3000';
    const path = Path.Engine;
    const status = 'stopped';
    const method = 'PATCH';

    await this.model.startStopCar(baseUrl, path, id, status, method);
    State.savedState.controller[id].abort();

    this.handleDriveBtn(id, 'enable');
    this.handleStopBtn(id, 'disable');
    cancelAnimationFrame(State.savedState.animation[id]);
    this.garage.setCarInitialPosition(id);
  };

  private raceAll = async (): Promise<void> => {
    State.savedState.race = true;
    this.disableBtn('race');
    this.enableBtn('reset');

    const baseUrl = 'http://127.0.0.1:3000';
    const path = Path.Engine;
    const status = 'started';
    const method = 'PATCH';

    const raceIDs = State.savedState.cars.map((car) => car?.id.toString());
    const startPromises = raceIDs.map(async (id) => {
      if (!id) {
        throw new Error('no id');
      }
      const { velocity, distance } = await this.model.startStopCar(
        baseUrl,
        path,
        id,
        status,
        method,
      );
      return { velocity, distance };
    });

    const durationArr = (await Promise.all(startPromises)).map((el) => el.distance / el.velocity);
    console.log(durationArr);

    raceIDs.forEach((id, index) => {
      if (id) {
        this.handleDriveBtn(id, 'disable');
        this.switchEngine(id).catch(console.log);
        Animation.start(id, durationArr[index]);
      }
    });
  };

  private resetRace = async (): Promise<void> => {
    this.disableBtn('reset');
    this.enableBtn('race');
    const raceIDs = State.savedState.cars.map((car) => car?.id.toString());
    raceIDs.forEach(async (id) => {
      if (id) {
        if (State.savedState.race) {
          const baseUrl = 'http://127.0.0.1:3000';
          const path = Path.Engine;
          const status = 'stopped';
          const method = 'PATCH';

          await this.model.startStopCar(baseUrl, path, id, status, method);
          State.savedState.controller[id].abort();
          cancelAnimationFrame(State.savedState.animation[id]);
        }
        this.garage.setCarInitialPosition(id);
        this.handleDriveBtn(id, 'enable');
      }
    });
    State.savedState.race = false;
    State.savedState.winnerFound = false;
  };

  private showWinnerPopup(name: string, id: string): void {
    const winnerPopup = document.querySelector('.winner-popup');
    const winnerText = document.querySelector('.winner-text');

    if (winnerPopup && winnerText) {
      winnerPopup.classList.remove('hidden');
      winnerText.textContent = `Car ${name} (id ${id}) won the race!`;
    }
  }

  private hideWinnerPopup(): void {
    const winnerPopup = document.querySelector('.winner-popup');
    const winnerText = document.querySelector('.winner-text');

    if (winnerPopup && winnerText) {
      winnerPopup.classList.add('hidden');
      winnerText.textContent = '';
    }
  }
}

export default GarageController;
