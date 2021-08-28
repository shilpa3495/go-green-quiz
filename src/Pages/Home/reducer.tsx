import { HomeInitialStateType, HomeActionType } from "./type";

export function homeReducer(
  state: HomeInitialStateType,
  action: HomeActionType
) {
  switch (action.type) {
    case "getSelectedCategory":
      return { ...state, selectedCategory: action.payload };

    case "setModalToggle":
      return { ...state, modalToggle: !state.modalToggle};

    default:
      throw new Error();
  }
}
