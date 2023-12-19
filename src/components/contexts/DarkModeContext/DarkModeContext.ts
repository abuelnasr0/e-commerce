import { createContext } from "react";
import { DarkModeContextProviderValue } from "./types";

export const DarkModeContext = createContext(
  {} as DarkModeContextProviderValue
);
