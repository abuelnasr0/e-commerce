export type DarkModeContextProviderProps = {
  children: React.ReactNode;
};

export type DarkModeContextProviderValue = {
  Dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};
