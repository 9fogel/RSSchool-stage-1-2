import { IWinners } from './view-i';
import { ISavedState } from '../state/state-i';
import State from '../state/state';
import { IWinner } from '../types.ts/types';

class Winners implements IWinners {
  public render(): void {
    const main: HTMLElement | null = document.querySelector('.main');
    if (main) {
      main.innerHTML += this.renderMain(State.savedState);
    }
  }

  public clearWinners(): void {
    const main: HTMLElement | null = document.querySelector('.main');
    const winnersWrap: HTMLElement | null = document.querySelector('.winners-wrapper');
    if (main && winnersWrap) {
      main.removeChild(winnersWrap);
    }
  }

  private renderMain(savedState: ISavedState): string {
    const mainContent = `<div class="winners-wrapper hidden">
    <h2 class="page-title">Winners</h2>
    ${this.renderTable(savedState)}
  </div>`;

    return mainContent;
  }

  private renderCarImage(color: string | undefined, id?: number): string {
    const carImage = `<svg class="winners-car-image" id="winners-car-image-${id}" xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="none">
    <path fill=${color} d="M46.673 15.304c.506 0 .914.483.938 1.087-.465-.323-1.016-.555-1.614-.743a.879.879 0 0 1 .676-.344ZM21.189 22.23c1.488 0 2.697 1.2 2.697 2.672 0 1.474-1.209 2.672-2.697 2.672-1.497 0-2.714-1.198-2.714-2.672.001-1.472 1.217-2.672 2.714-2.672Zm-.005 3.8a1.128 1.128 0 1 0 0-2.258c-.63 0-1.139.501-1.139 1.13 0 .619.509 1.128 1.139 1.128ZM41.277 22.482c1.485 0 2.695 1.2 2.695 2.672 0 1.474-1.21 2.672-2.695 2.672-.732 0-1.417-.28-1.929-.792a2.632 2.632 0 0 1-.788-1.88c0-.713.279-1.382.786-1.883a2.713 2.713 0 0 1 1.931-.79Zm-.006 3.8a1.127 1.127 0 1 0 0-2.253c-.631-.001-1.138.5-1.138 1.125 0 .62.507 1.127 1.138 1.127Z" />
      <path fill=${color} d="M41.277 21.427a3.729 3.729 0 1 1-2.642 6.366 3.694 3.694 0 0 1-1.1-2.64c0-1.006.391-1.944 1.1-2.648a3.752 3.752 0 0 1 2.642-1.078Zm-1.928 5.607a2.707 2.707 0 0 0 1.929.792c1.485 0 2.695-1.198 2.695-2.672 0-1.472-1.21-2.672-2.695-2.672-.735 0-1.42.279-1.93.79a2.628 2.628 0 0 0-.787 1.882c0 .71.28 1.375.788 1.88Z" />
      <path fill=${color} d="M41.271 24.028a1.126 1.126 0 1 1 0 2.253 1.133 1.133 0 0 1-1.138-1.127c0-.624.507-1.126 1.138-1.126ZM10.251 17.287H4.568v.872h5.683v-.872ZM10.317 22.655H4.632v.872h5.685v-.872ZM10.317 19.792H.728V20.8h9.589v-1.007ZM21.19 21.173a3.731 3.731 0 0 1 3.723 3.729 3.73 3.73 0 0 1-7.463 0 3.74 3.74 0 0 1 3.74-3.729Zm0 6.401c1.487 0 2.696-1.198 2.696-2.672 0-1.472-1.209-2.672-2.697-2.672-1.497 0-2.714 1.2-2.714 2.672.001 1.474 1.217 2.672 2.714 2.672Z" />
      <path fill=${color} d="M21.184 23.772c.626 0 1.132.501 1.132 1.13a1.136 1.136 0 0 1-2.27 0c-.001-.628.508-1.13 1.138-1.13ZM30.484 6.37v8.543h-1.359V6.292c.47.002.92.032 1.359.078Z" />
      <path fill=${color} d="M29.125 5.799h1.359v.572a13.42 13.42 0 0 0-1.359-.078v-.494ZM30.484 15.874h-1.359v-.961h1.359v.96ZM47.61 16.391c-.023-.604-.432-1.087-.938-1.087a.882.882 0 0 0-.677.344 9.6 9.6 0 0 0-1.063-.262c.342-.684.987-1.155 1.74-1.155 1.095 0 1.986.99 1.986 2.209 0 .293-.055.578-.149.834a3.804 3.804 0 0 0-.899-.883Z" />
      <path fill=${color} d="M46.673 18.649c-1.098 0-1.987-.99-1.987-2.21 0-.384.097-.739.248-1.052a9.65 9.65 0 0 1 1.063.262 1.245 1.245 0 0 0-.271.792c0 .623.423 1.136.947 1.136.52 0 .946-.512.946-1.136 0-.019-.008-.032-.01-.049.35.241.647.541.9.882-.297.807-1.006 1.375-1.836 1.375Z" />
      <path fill=${color} d="M11.709 16.243c.276.27.658.435 1.076.435.847 0 1.531-.668 1.531-1.494 0-.68-.469-1.25-1.111-1.428.835-.805 1.95-1.297 3.378-1.278-1.299-3.868.546-6.598 5.558-8.165 3.21-.668 6.401-.872 9.59 0 5.596.985 9.35 4.407 10.845 10.76.818.07 1.614.168 2.358.315-.15.315-.248.668-.248 1.053 0 1.218.89 2.209 1.987 2.209.83 0 1.54-.568 1.838-1.375.06.08.13.15.186.237.253.578.433 1.13.575 1.669h-1.477v3.737h1.447c-.44 1.252-1.342 2.323-2.76 3.181h-.588c.023-.157.023-.336.023-.494 0-2.974-2.128-5.388-4.754-5.388-2.645 0-4.77 2.414-4.77 5.388 0 .157 0 .336.02.494H25.958c0-.157.02-.336.02-.494 0-2.974-2.146-5.388-4.77-5.388-2.626 0-4.753 2.414-4.753 5.388 0 .157 0 .336.021.494h-.998c-3.444.102-5.12-5.791-3.769-9.856Zm10.432-1.33h6.984v.96h1.359v-.96h8.903c-1.353-5.207-4.318-8.062-8.903-8.543v-.572h-1.359v.494c-.374 0-.756.01-1.148.036-4.451.268-6.488 3.423-5.836 8.585Z" />
    </svg>`;

    return carImage;
  }

  private renderRows(winners: Array<IWinner | undefined>): string {
    const rows = winners
      .map((winner, index) => {
        let name;
        let color;
        let winsCount;
        let timeSec;
        if (winner) {
          const fullInfo: Array<string | number> = State.savedState.winnersFullDetails[winner.id];
          if (fullInfo) {
            [name, color, winsCount, timeSec] = fullInfo;
          }
        }
        return `<tr>
        <th>${index + 1}</th>
        <th>${this.renderCarImage(color?.toString(), winner?.id)}</th>
        <th>${name}, (id ${winner?.id})</th>
        <th>${winsCount}</th>
        <th>${Number(timeSec).toFixed(2)}</th>
      </tr>`;
      })
      .join('');

    return rows;
  }

  private renderTable(savedState: ISavedState): string {
    const table = `<table class="winners-table">
    <thead>
      <th>№</th>
      <th>Car</th>
      <th>Name</th>
      <th>Wins</th>
      <th>Time, sec</th>
    </thead>
    <tbody>
    ${this.renderRows(savedState.winners)}
    </tbody>
  </table>`;

    return table;
  }
}

export default Winners;
