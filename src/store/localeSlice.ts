import { lens } from "@dhmk/zustand-lens";

type State = {
  locale: "en" | "fr";
};

type Action = {
  setLocale: (selectedLocale: State["locale"]) => void;
};

const initialState: State = {
  locale: "en",
};

export type TLocaleSlice = State & Action;

const createLocaleSlice = lens<TLocaleSlice>((set) => ({
  ...initialState,
  setLocale: (selectedLocale) => set((state) => ({ ...state, locale: selectedLocale })),
}));

export default createLocaleSlice;
