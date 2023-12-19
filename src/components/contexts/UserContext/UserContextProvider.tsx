import React, { useState } from "react";
import { UserContextProviderProps, token } from "./types";
import { UserContext } from "./UserContext";

function UserContextProvider({ children }: UserContextProviderProps) {
  const [token, setToken] = useState<token>(null);
  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
