import { lens } from "@dhmk/zustand-lens";

export type TaskStatus = "pending" | "in-progress" | "completed";

export type Task = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  coverImageId: number | null;
  status: TaskStatus;
};

type State = {
  tasks: Task[];
};

type Action = {
  addTask: (newTask: Omit<Task, "id">) => void;
  removeTask: (taskId: Task["id"]) => void;
  changeTaskStatus: (taskId: Task["id"], newStatus: TaskStatus) => void;
  updateTask: (taskId: Task["id"], updatedTaskData: Partial<Omit<Task, "id">>) => void;
};

const initialState: State = {
  tasks: [],
};

export type TTaskSlice = State & Action;

const createTaskSlice = lens<TTaskSlice>((set) => ({
  ...initialState,
  addTask: (newTask) =>
    set((state) => {
      const latestId = state.tasks.length ? state.tasks.length + 1 : 1;
      return { ...state, tasks: [...state.tasks, { ...newTask, id: latestId }] };
    }),
  removeTask: (taskId) =>
    set((state) => ({ ...state, tasks: state.tasks.filter((task) => task.id !== taskId) })),
  changeTaskStatus(taskId, newStatus) {
    set((state) => ({
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      ),
    }));
  },
  updateTask: (taskId, updatedTaskData) => {
    console.log("updatedTaskData", updatedTaskData);
    set((state) => ({
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTaskData } : task
      ),
    }));
  },
}));

export default createTaskSlice;
