import { ModalInitialStateType, ModalActionType } from "./type";

export function modalReducer(
  state: ModalInitialStateType,
  action: ModalActionType
) {
  switch (action.type) {
    case "getName":
      return { ...state, name: action.payload };

    case "setRouteAndError":
      return { ...state, error: action.payload };

    default:
      throw new Error();
  }
}
