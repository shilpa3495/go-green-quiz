export type HomeInitialStateType = {
  selectedCategory: string;
  modalToggle: boolean;
};

export type HomeActionType =
  | { type: "getSelectedCategory"; payload: string }
  | { type: "setModalToggle"; payload:boolean};

export type HomeContextType = {
  homeState: HomeInitialStateType;
  homeDispatch: React.Dispatch<HomeActionType>;
};
