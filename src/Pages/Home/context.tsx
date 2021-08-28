import { createContext, useReducer, useContext, ReactNode} from "react";
import { homeReducer } from "./reducer";
import { HomeContextType, HomeInitialStateType} from "./type";


export const HomeContext = createContext<HomeContextType | undefined>(
  undefined
);


export function HomeProvider({ children }: { children: ReactNode }) {
  const homeInitialState:HomeInitialStateType={
    selectedCategory:"",
    modalToggle:false,
  };

  const[homeState, homeDispatch]= useReducer(homeReducer,homeInitialState);
  return (
    <HomeContext.Provider value={{ homeState, homeDispatch }}>
      {children}
    </HomeContext.Provider>
  );

}

export function useHome() {
  return useContext(HomeContext);
}