export enum ACTIONS_TYPES {
  INITIAL = "INITIAL",
}

export interface IInitialAction {
  type: ACTIONS_TYPES.INITIAL;
}

export const initialAction = (): IInitialAction => ({
  type: ACTIONS_TYPES.INITIAL,
});
