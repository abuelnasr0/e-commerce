import React, { useState } from "react";
import { DarkModeContextProviderProps } from "./types";
import { DarkModeContext } from "./DarkModeContext";

function DarkModeContextProvider({ children }: DarkModeContextProviderProps) {
  const [Dark, setDark] = useState<boolean>(false);
  return (
    <div className={Dark ? "dark" : "light"}>
      <DarkModeContext.Provider value={{ Dark, setDark }}>
        {children}
      </DarkModeContext.Provider>
    </div>
  );
}

export default DarkModeContextProvider;
