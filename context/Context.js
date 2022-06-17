import { createContext, useContext, useReducer } from "react";
import { controlerReducer } from "./Reducer";

const Controler = createContext();

const useControlerContext = ({ children }) => {
  const [state, dispatch] = useReducer(controlerReducer, {
    sides: 2,
    divSize: 400,
  });
  return (
    <Controler.Provider value={{ state, dispatch }}>
      {children}
    </Controler.Provider>
  );
};

export const ControlerState = () => {
  return useContext(Controler);
};

export default useControlerContext;
