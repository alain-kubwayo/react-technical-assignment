import { withLenses } from "@dhmk/zustand-lens";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import createCounterSlice from "./counterSlice";
import createLocaleSlice from "./localeSlice";
import createTaskSlice from "./taskSlice";
import createThemeSlice from "./themeSlice";

const useAppStore = create(
  immer(
    withLenses({
      counter: createCounterSlice,
      theme: createThemeSlice,
      locale: createLocaleSlice,
      tasks: createTaskSlice,
    })
  )
);

export default useAppStore;
