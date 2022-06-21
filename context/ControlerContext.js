import { createContext, useContext, useReducer } from "react";
import { controlerReducer } from "./Reducer";

const Controler = createContext();

const ControlerState = ({ children }) => {
  const [state, dispatch] = useReducer(controlerReducer, {
    sides: 2,
    divSize: 500,
    verticeDiv: 4,
    color: "#712B75",
    fadeInAnim: false,
    bigDivRotationAnim: false,
    smallDivRotationAnim: false,
  });
  return (
    <Controler.Provider value={{ state, dispatch }}>
      {children}
    </Controler.Provider>
  );
};

export const useControlerContext = () => {
  return useContext(Controler);
};

export default ControlerState;
