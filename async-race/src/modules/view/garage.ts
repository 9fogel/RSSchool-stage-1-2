import { ICar } from '../types.ts/types';
import { ISavedState } from '../state/state-i';
import State from '../state/state';

class Garage {
  public render(): void {
    const main: HTMLElement | null = document.querySelector('.main');
    if (main) {
      main.innerHTML += this.renderMain(State.savedState);
    }
  }

  public clearGaragePage(): void {
    const main: HTMLElement | null = document.querySelector('.main');
    const garageWrap: HTMLElement | null = document.querySelector('.garage-wrapper');
    if (main && garageWrap) {
      main.removeChild(garageWrap);
    }
  }

  public setCarInitialPosition(id: string) {
    const initialPosition = 0;
    const stoppedCar: HTMLElement | null = document.getElementById(`car-image-${id}`);
    if (stoppedCar) {
      stoppedCar.style.transform = `translateX(${initialPosition})`;
    }
  }

  private renderCarEditControls(action: string): string {
    const editControl = `<div class="edit-car">
    <input class="garage-input" type="text" name="${action}-input" id="${action}-name">
    <input class="garage-input color-input" type="color" name="color-input" id="${action}-color" value="#55ff5c">
    <button class="edit-btn ${action}-btn">${action}</button>
  </div>`;

    return editControl;
  }

  private renderHeader(): string {
    const headerContent = `<div class="edit-wrapper">
    ${this.renderCarEditControls('create')}
    ${this.renderCarEditControls('update')}
  </div>`;

    return headerContent;
  }

  private renderButton(action: string, id?: number): string {
    const raceControl = `<button class="${action}-btn" id="${action}-btn-${id}">${action}</button>`;

    return raceControl;
  }

  private renderCarImage(color: string | undefined, id?: number): string {
    const carImage = `<div class="car-image" id="car-image-${id}">
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" fill="none">
      <path fill=${color} d="M93.346 30.607c1.012 0 1.828.967 1.876 2.175-.93-.647-2.032-1.11-3.228-1.486.34-.419.822-.689 1.352-.689ZM42.378 44.46c2.976 0 5.394 2.4 5.394 5.344 0 2.948-2.418 5.344-5.394 5.344-2.994 0-5.428-2.396-5.428-5.344.002-2.944 2.434-5.344 5.428-5.344Zm-.01 7.6a2.264 2.264 0 0 0 2.264-2.256 2.256 2.256 0 0 0-2.264-2.26 2.261 2.261 0 0 0-2.278 2.26c0 1.237 1.018 2.256 2.278 2.256ZM82.554 44.963c2.97 0 5.39 2.4 5.39 5.344 0 2.948-2.42 5.344-5.39 5.344a5.408 5.408 0 0 1-3.858-1.583 5.264 5.264 0 0 1-1.576-3.761c0-1.425.558-2.763 1.572-3.765a5.426 5.426 0 0 1 3.862-1.579Zm-.012 7.6a2.261 2.261 0 0 0 2.262-2.256 2.254 2.254 0 0 0-2.262-2.251 2.257 2.257 0 0 0-2.276 2.251 2.266 2.266 0 0 0 2.276 2.256Z"/>
      <path fill=${color} d="M82.554 42.854c4.106 0 7.442 3.342 7.442 7.453 0 4.115-3.336 7.461-7.442 7.461a7.418 7.418 0 0 1-5.284-2.183 7.388 7.388 0 0 1-2.202-5.28c0-2.01.784-3.887 2.202-5.294a7.505 7.505 0 0 1 5.284-2.157Zm-3.856 11.214a5.413 5.413 0 0 0 3.858 1.583c2.97 0 5.39-2.395 5.39-5.344 0-2.944-2.42-5.344-5.39-5.344-1.47 0-2.84.56-3.862 1.58a5.256 5.256 0 0 0-1.572 3.764c0 1.423.56 2.75 1.576 3.761Z"/>
      <path fill=${color} d="M82.542 48.056a2.252 2.252 0 1 1 0 4.507 2.265 2.265 0 0 1-2.276-2.256 2.258 2.258 0 0 1 2.276-2.251ZM20.502 34.574H9.136v1.744h11.366v-1.744ZM20.634 45.31H9.264v1.744h11.37V45.31ZM20.634 39.584H1.456v2.014h19.178v-2.014ZM42.378 42.347c4.106 0 7.448 3.346 7.448 7.457 0 4.107-3.342 7.453-7.448 7.453-4.122 0-7.478-3.346-7.478-7.453 0-4.111 3.358-7.457 7.478-7.457Zm0 12.801c2.976 0 5.394-2.396 5.394-5.344 0-2.944-2.418-5.344-5.394-5.344-2.994 0-5.428 2.4-5.428 5.344.002 2.948 2.434 5.344 5.428 5.344Z"/>
      <path fill=${color} d="M42.368 47.544a2.254 2.254 0 0 1 2.264 2.26 2.264 2.264 0 0 1-2.264 2.255c-1.26 0-2.278-1.018-2.278-2.255a2.263 2.263 0 0 1 2.278-2.26ZM60.968 12.74v17.086H58.25V12.584c.94.004 1.84.063 2.718.156Z"/>
      <path fill=${color} d="M58.25 11.598h2.718v1.144a26.805 26.805 0 0 0-2.718-.157v-.987ZM60.968 31.747H58.25v-1.921h2.718v1.921ZM95.22 32.782c-.046-1.208-.864-2.175-1.876-2.175-.53 0-1.012.27-1.354.689a19.2 19.2 0 0 0-2.126-.524c.684-1.369 1.974-2.311 3.478-2.311 2.192 0 3.974 1.981 3.974 4.418 0 .588-.11 1.157-.298 1.668a7.61 7.61 0 0 0-1.798-1.764Z"/>
      <path fill=${color} d="M93.346 37.298c-2.196 0-3.974-1.982-3.974-4.419 0-.769.194-1.478.496-2.105.736.145 1.452.31 2.126.524a2.491 2.491 0 0 0-.542 1.583c0 1.248.846 2.272 1.894 2.272 1.042 0 1.892-1.023 1.892-2.272 0-.037-.016-.064-.018-.097a7.725 7.725 0 0 1 1.8 1.763c-.596 1.614-2.014 2.75-3.674 2.75Z"/>
      <path fill=${color} d="M23.418 32.486a3.07 3.07 0 0 0 2.152.87c1.694 0 3.062-1.337 3.062-2.988 0-1.36-.938-2.5-2.222-2.856 1.67-1.61 3.9-2.593 6.756-2.556-2.598-7.736 1.092-13.195 11.116-16.33 6.42-1.335 12.802-1.743 19.178 0 11.194 1.97 18.7 8.815 21.692 21.521 1.636.14 3.228.334 4.716.63a4.841 4.841 0 0 0-.496 2.104c0 2.437 1.78 4.419 3.974 4.419 1.66 0 3.078-1.136 3.676-2.75.12.16.26.3.372.474.506 1.156.866 2.26 1.15 3.337H95.59v7.474h2.894c-.88 2.505-2.683 4.648-5.52 6.363H91.79c.046-.313.046-.672.046-.988 0-5.948-4.256-10.776-9.508-10.776-5.29 0-9.543 4.828-9.543 10.776 0 .314 0 .672.042.988h-20.91c0-.313.04-.672.04-.988 0-5.948-4.291-10.776-9.541-10.776S32.91 45.262 32.91 51.21c0 .314 0 .672.043.988h-1.996c-6.889.204-10.24-11.583-7.538-19.712h-.001Zm20.864-2.66H58.25v1.921h2.718v-1.921h17.806c-2.706-10.414-8.636-16.123-17.806-17.086v-1.144H58.25v.988c-.748 0-1.512.02-2.296.072-8.902.535-12.976 6.847-11.672 17.17Z"/></svg>
  </div>`;

    return carImage;
  }

  private renderCarTracks(cars: Array<ICar | undefined>): string {
    const tracks = cars
      .map(
        (car) => `<li class="car-item" id="car-item-${car?.id}">
    <div class="car-header">
      <div class="car-selection">
        ${this.renderButton('select', car?.id)}
        ${this.renderButton('remove', car?.id)}
      </div>
      <p class="car-name">${car?.name}</p>
    </div>
    <div class="car-body">
      <div class="car-drive-controls">
        <button class="drive-btn" id="drive-btn-${car?.id}">D</button>
        <button class="stop-btn" id="stop-btn-${car?.id}">S</button>
      </div>
      ${this.renderCarImage(car?.color, car?.id)}
      <div class="finish" id="car-finish-${car?.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none"><path fill="currentColor" d="M23.39.672c-5.794.432-11.455 2.543-15.966 5.962-.995.743-1.187.851-1.235.671-.036-.12-.228-.648-.444-1.175-.48-1.176-.851-1.476-1.631-1.26-.576.156-.852.504-.852 1.092 0 .6-.42-.588 15.534 43.877 1.679 4.702 3.142 8.708 3.25 8.9.564 1.103 2.207.744 2.207-.48 0-.312-.971-3.179-2.927-8.637L18.4 41.454l.624-.564c2.015-1.823 5.277-3.802 7.557-4.594 1.715-.6 2.89-.756 4.99-.684 2.183.084 4.21.408 6.465 1.043 4.078 1.152 5.134 1.344 7.509 1.332 2.615 0 4.714-.36 7.437-1.284 1.667-.552 3.167-1.247 3.478-1.607.24-.264.24-.456.276-16.853.012-10.46-.012-16.709-.084-16.9-.276-.708-1.295-.924-1.98-.409-1.835 1.38-4.546 2.891-6.512 3.646-1.368.516-3.131.888-4.535.96-2.338.132-4.09-.384-8.696-2.543C30.611.984 27.564.372 23.389.672Zm3.79 2.495c.06.108 2.47 9.116 2.47 9.248 0 .036-.72.06-1.583.036a24.751 24.751 0 0 0-5.385.456c-1.224.24-3.802.912-4.054 1.068-.108.072.372 1.439 1.895 5.35 1.127 2.878 2.051 5.3 2.051 5.385-.012.072-.647.444-1.427.815-1.631.792-3.49 1.992-5.278 3.431-.684.552-1.308 1.031-1.38 1.055-.084.036-.947-2.219-2.146-5.553l-2.016-5.614.396-.336c1.404-1.187 3.97-2.759 6.238-3.814.78-.36 1.415-.707 1.415-.78 0-.071-.755-2.063-1.68-4.426-.923-2.374-1.643-4.342-1.583-4.39.132-.12 1.716-.672 2.915-1.007 1.296-.372 2.639-.636 4.186-.84 1.296-.168 4.87-.228 4.966-.084Zm9.92 3.515c1.38.564 2.59.935 3.695 1.127 1.271.228 3.502.228 4.75 0 .528-.096 1.02-.18 1.091-.18.072 0 .252 1.595.468 4.402.192 2.435.36 4.438.372 4.462.024.024.54-.132 1.152-.348 1.247-.432 3.442-1.499 4.714-2.278.468-.276.875-.528.935-.564.048-.024.084 2.326.084 5.23v5.29l-.564.287c-.875.432-3.083 1.224-4.342 1.56-.612.168-1.14.324-1.175.348-.024.024.12 2.087.324 4.57.204 2.495.336 4.57.3 4.618-.192.312-4.595.456-5.818.18-.288-.06-.336-.216-1.355-4.69-.576-2.543-1.02-4.654-.996-4.69.036-.036.732.036 1.536.144.815.108 1.907.192 2.434.192.9 0 3.37-.276 3.479-.384.048-.048-.672-9.236-.732-9.308-.012-.024-.576.048-1.247.168-2.315.384-4.69.096-7.065-.84-.432-.167-.78-.3-.804-.275-.012.012.492 2.278 1.115 5.037.636 2.759 1.116 5.038 1.092 5.074-.036.024-1.056-.204-2.268-.528a126.247 126.247 0 0 0-3.646-.924c-.792-.168-1.547-.36-1.68-.42-.203-.072-.48-.971-1.715-5.65-.804-3.058-1.463-5.613-1.463-5.673.012-.396 3.095.576 6.273 1.968 1.2.528 2.183.935 2.195.923.024-.024-1.848-8.264-2.04-8.996-.024-.108-.036-.204-.012-.204.013 0 .421.168.913.372Zm-5.41 17.152c.552.072 1.02.132 1.044.144.012.012.563 2.076 1.235 4.583.66 2.506 1.235 4.63 1.26 4.726.06.132-.06.156-.625.084-3.118-.36-5.565-.3-7.437.18-.552.144-1.031.228-1.067.192-.18-.18-3.395-8.9-3.323-8.973.144-.144 3.299-.935 4.222-1.055.877-.12 3.096-.06 4.691.12Z"/></svg>
      </div>
    </div>
  </li>`,
      )
      .join('');

    return tracks;
  }

  private renderPagination(pageNum: number): string {
    const pagination = `<div class="pagination">
    ${this.renderButton('previous')}
    <p>Page <span class="current-page">${pageNum}</span></p>
    ${this.renderButton('next')}
  </div>`;

    return pagination;
  }

  private renderWinnerPopUp(): string {
    const winnerPopup = `<div class="winner-popup hidden">
    <div class="winner-text"></div>
  </div>`;

    return winnerPopup;
  }

  private renderMain(savedState: ISavedState): string {
    const mainContent = `<div class="garage-wrapper">
    ${this.renderHeader()}
    <div class="race-wrapper">
      ${this.renderButton('race')}
      ${this.renderButton('reset')}
      <button class="generate-btn" disabled>Generate cars</button>
    </div>

    ${this.renderWinnerPopUp()}
    <div class="cars-wrapper">
      <h2 class="page-title">Garage<span class="total-cars"> (${savedState.totalCars})</span></h2>
      <ul class="cars-list">
        ${this.renderCarTracks(savedState.cars)}
      </ul>
    </div>

    ${this.renderPagination(savedState.pageNum)}

  </div>`;
    return mainContent;
  }
}

export default Garage;
