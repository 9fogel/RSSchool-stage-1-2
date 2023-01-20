import { ISavedState } from '../types.ts/types';

class State {
  static savedState: ISavedState = {
    pageNum: 1,
    cars: [],
    totalCars: 0,
    page: 'garage',
    id: '',
    animation: {},
    race: false,
    winnerFound: false,
  };
}

export default State;
