import { lens } from "@dhmk/zustand-lens";

type State = {
  theme: "light" | "dark";
};

type Action = {
  switchTheme: () => void;
};

const initialState: State = {
  theme: "light",
};

export type TThemeSlice = State & Action;

const createThemeSlice = lens<TThemeSlice>((set) => ({
  ...initialState,
  switchTheme: () =>
    set((state) => ({ ...state, theme: state.theme === "light" ? "dark" : "light" })),
}));

export default createThemeSlice;
