import { createContext, useContext } from "react";

interface GlobalContextType {
  uuid: string;
  setUuid: () => void;
}
export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a global context");
  }
  return context;
};
