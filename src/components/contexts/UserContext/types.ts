export type token = string | null;

export type UserContextProviderProps = {
  children: React.ReactNode;
};

export type UserContextProviderValue = {
  token: token;
  setToken: React.Dispatch<React.SetStateAction<token>>;
};
