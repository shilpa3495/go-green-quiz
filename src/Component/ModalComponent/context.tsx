import { createContext, ReactNode, useContext, useReducer } from "react";
import { ModalContextType, ModalInitialStateType } from "./type";
import { modalReducer } from "./reducer";

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const modalInitialState: ModalInitialStateType = {
    name: "",
    error: false
  };

  const [modalState, modalDispatch] = useReducer(modalReducer, modalInitialState);

  return (
    <ModalContext.Provider value={{ modalState, modalDispatch }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
