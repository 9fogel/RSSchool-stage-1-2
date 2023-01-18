import Model from '../model/model';
import View from '../view/appView';
import { Path, Tbuttons } from '../types.ts/types';

class Controller {
  private readonly view: View;

  private readonly model: Model;

  constructor() {
    this.view = new View();
    this.model = new Model();
    console.log('constructor', this.model);
  }

  private changeView(event: Event): void {
    if (event.target instanceof HTMLLIElement) {
      console.log(event.target);
      if (event.target.innerText.toLowerCase() === 'garage') {
        this.view.garage.render();
      } else {
        this.view.winners.render();
      }

      // const garageWrap: HTMLElement | null = document.querySelector('.garage-wrapper');
      // const winnersWrap: HTMLElement | null = document.querySelector('.winners-wrapper');
      // if (garageWrap && winnersWrap) {
      //   if (event.target instanceof HTMLLIElement) {
      //     console.log(event.target);
      //     if (event.target.innerText.toLowerCase() === 'garage') {
      //       winnersWrap.classList.add('hidden');
      //       garageWrap.classList.remove('hidden');
      //     } else {
      //       garageWrap.classList.add('hidden');
      //       winnersWrap.classList.remove('hidden');
      //     }
      //   }
    }
  }

  public listenNav(): void {
    const navBtns: NodeListOf<HTMLElement> = document.querySelectorAll('.nav-item');
    navBtns.forEach((link: HTMLElement) => {
      link.addEventListener('click', (event: MouseEvent) => {
        this.changeView(event);
        document.querySelector('.nav-item-active')?.classList.remove('nav-item-active');
        link.classList.add('nav-item-active');
      });
    });
  }

  public listenButtons() {
    const buttons: Tbuttons = {
      createBtn: document.querySelector('.create-btn'),
      updateBtn: document.querySelector('.update-btn'),
      raceBtn: document.querySelector('.race-btn'),
      resetBtn: document.querySelector('.reset-btn'),
      generateBtn: document.querySelector('.generate-btn'),
    };

    buttons.createBtn?.addEventListener('click', this.model.createCar);
  }

  public getCars = async () => {
    const baseUrl = 'http://127.0.0.1:3000';
    const path = Path.Garage;

    const limit = 7;
    let currentPage = 1;
    const page: HTMLSpanElement | null = document.querySelector('.current-page');
    if (HTMLSpanElement && page?.textContent) {
      currentPage = +page.textContent;
    }

    const { cars, total } = await this.model.getGarage(baseUrl, path, currentPage, limit);
    console.log(cars);
    console.log(total);

    return total;
  };

  public createCar = () => {
    this.model.createCar();
  };

  public updateCar = () => {
    this.model.updateCar();
  };

  public async run() {
    this.view.render();
    this.listenNav();
    this.listenButtons();
  }
}

export default Controller;
