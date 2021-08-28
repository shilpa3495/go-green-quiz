export type ModalInitialStateType = {
  name: string;
  error: boolean;
};

export type ModalType = {
  title: string;
  inputField: string;
};

export type ModalActionType =
  | { type: "getName"; payload: string}
  | { type: "setRouteAndError"; payload:boolean };

export type ModalContextType = {
  modalState: ModalInitialStateType;
  modalDispatch: React.Dispatch<ModalActionType>;
};
