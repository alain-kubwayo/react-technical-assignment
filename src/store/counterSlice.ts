import { lens } from "@dhmk/zustand-lens";

type State = {
  value: number;
};

type Action = {
  increment: () => void;
  decrement: () => void;
};

const initialState: State = {
  value: 0,
};

export type TCounterSlice = State & Action;

const createCounterSlice = lens<TCounterSlice>((set) => ({
  ...initialState,
  increment: () => set((state) => ({ ...state, value: state.value + 1 })),
  decrement: () => set((state) => ({ ...state, value: state.value - 1 })),
}));

export default createCounterSlice;
