export enum Path {
  Garage = '/garage',
  Engine = '/engine',
  Winners = '/winners',
}

export type TButtons = { [key: string]: HTMLButtonElement | null };

export type TDisabled = { [key: string]: HTMLElement | null };

export interface ICar {
  name: string;
  color: string;
  id: number;
}

export interface ISavedState {
  pageNum: number;
  cars: Array<ICar | undefined>;
  totalCars: number;
  page: string;
  id: string;
}

export type ISwitch = { [key: string]: boolean };
