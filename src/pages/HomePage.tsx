import { useQuery } from "@tanstack/react-query";
import { default as classNames, default as classnames } from "classnames";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiSparkles } from "react-icons/hi";
import AddTaskForm from "../components/AddTaskForm";
import TaskCard from "../components/TaskCard";
import BreadCrumb from "../core/components/BreadCrumb";
import Button from "../core/components/Button";
import { TApiTodo } from "../core/types";
import { sampleTasksQuery } from "../querries/task";
import useAppStore from "../store/store";
import { Task } from "../store/taskSlice";

const mapTodosToTasks = (todos: TApiTodo[]): Omit<Task, "id">[] => {
  return todos.map((todo) => ({
    coverImageId: null,
    description: todo.todo,
    dueDate: dayjs().format("YYYY MMM DD"),
    status: "pending",
    title: todo.todo,
  }));
};

const HomePage = () => {
  const { theme } = useAppStore((state) => state.theme);
  const { addTask, tasks } = useAppStore((state) => state.tasks);
  const [tasksViewMode, setTasksViewMode] = useState<"list" | "grid">("grid");
  const { t } = useTranslation();

  const { refetch: getSampleTask, data, isLoading } = useQuery(sampleTasksQuery());

  const addTaskDialogRef = useRef<HTMLDialogElement>(null);

  const openAddTodoForm = () => {
    addTaskDialogRef.current?.showModal();
  };

  useEffect(() => {
    if (data) {
      const todos = data.todos as TApiTodo[];
      const newTasks = mapTodosToTasks(todos);
      newTasks.forEach((task) => {
        addTask(task);
      });
    }
  }, [data, addTask]);

  const taskMenus = [
    {
      name: "All tasks",
      count: tasks.length,
    },
    {
      name: "To do",
      count: tasks.filter((task) => task.status === "pending").length,
    },
    {
      name: "In progress",
      count: tasks.filter((task) => task.status === "in-progress").length,
    },
    {
      name: "Completed",
      count: tasks.filter((task) => task.status === "completed").length,
    },
  ];

  const [selectedMenu, setSelectedMenu] = useState(taskMenus[0].name);

  const visibleTasks = tasks.filter((task) => {
    if (selectedMenu === "All tasks") return true;
    if (selectedMenu === "To do") return task.status === "pending";
    if (selectedMenu === "In progress") return task.status === "in-progress";
    if (selectedMenu === "Completed") return task.status === "completed";
  });

  return (
    <main className="px-4">
      <div className="flex justify-between">
        <BreadCrumb />
        <div className="hidden sm:flex flex-col gap-2 items-end justify-end">
          <span className="text-sm font-medium">From 23 April</span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
            <span className="text-[15px]">Updated 12 min ago</span>
          </div>
        </div>
      </div>
      <p className="text-3xl font-semibold mt-2">{t("mainTitle")}</p>
      <div className="flex items-center justify-between">
        <div className="hidden sm:flex gap-2 items-center mt-2">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="flex items-center gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-lock"
                    >
                      <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  </span>
                  <span>Limited access</span>
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
          <div className="flex gap-4 items-center">
            <div className="avatar-group -space-x-2.5 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-8">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            <button className="btn btn-sm rounded-full px-1 m-0 flex items-center justify-center btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus"
              >
                <path d="M12 5L12 19" />
                <path d="M5 12L19 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 overflow-auto">
          <button className="text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-link"
            >
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
            </svg>
          </button>
          <span className="w-0.5 h-8 bg-gray-200" />
          <button
            onClick={() => setTasksViewMode("list")}
            className={classnames({
              "btn btn-sm rounded-xl px-2 m-0 flex items-center justify-center border-none": true,
              "bg-transparent": tasksViewMode !== "list",
              "bg-primary text-white shadow-lg": tasksViewMode === "list",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-layers"
            >
              <path d="M12 2L2 7 12 12 22 7 12 2z" />
              <path d="M2 17L12 22 22 17" />
              <path d="M2 12L12 17 22 12" />
            </svg>
          </button>
          <button
            onClick={() => setTasksViewMode("grid")}
            className={classnames({
              "btn btn-sm rounded-xl px-2 m-0 flex items-center justify-center border-none": true,
              "bg-transparent": tasksViewMode !== "grid",
              "bg-primary text-white shadow-lg": tasksViewMode === "grid",
            })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-grid"
            >
              <path d="M3 3H10V10H3z" />
              <path d="M14 3H21V10H14z" />
              <path d="M14 14H21V21H14z" />
              <path d="M3 14H10V21H3z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={classnames({
          "bg-[#F2F2F2]": theme === "light",
          "bg-[#2A3138]": theme === "dark",
          "px-2 sm:px-8 animated rounded-3xl mt-10 flex items-center justify-between": true,
        })}
      >
        <div className="flex items-center gap-4">
          {taskMenus.map((menu) => {
            return (
              <div className="relative w-full sm:w-auto" key={menu.name}>
                <button
                  onClick={() => setSelectedMenu(menu.name)}
                  className={classnames({
                    "btn btn-sm outline-none relative my-3 sm:my-6 shadow-none bg-transparent hover:bg-transparent px-2 m-0 flex items-center justify-center border-none":
                      true,
                    "text-current": selectedMenu !== menu.name,
                    "bg-primary text-primary shadow-lg": selectedMenu === menu.name,
                  })}
                >
                  <span className="">{menu.name}</span>
                  <span
                    className={classNames({
                      "badge px-1 rounded-md py-1 text-xs sm:flex hidden": true,
                      "badge-[#F2F2F2]": selectedMenu !== menu.name,
                      "badge-primary": selectedMenu === menu.name,
                    })}
                  >
                    {menu.count}
                  </span>
                </button>
                <span
                  className={classNames({
                    "w-full h-1.5 rounded-t-full bg-primary absolute bottom-0 hidden sm:block":
                      true,
                    "bg-transparent": selectedMenu !== menu.name,
                    "bg-primary": selectedMenu === menu.name,
                  })}
                />
              </div>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => {
              openAddTodoForm();
            }}
            className="btn btn-sm gap-2 border rounded-xl border-gray-200 px-4 flex items-center justify-center bg-transparent"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus"
              >
                <path d="M12 5L12 19" />
                <path d="M5 12L19 12" />
              </svg>
            </span>
            <span>New Task</span>
          </button>
        </div>
      </div>

      {tasks.length > 0 && visibleTasks.length === 0 && (
        <div className="w-full flex flex-col items-center mt-20 gap-4 justify-center">
          <p>No tasks found in the current category</p>
        </div>
      )}

      {tasks.length === 0 && (
        <div className="w-full flex flex-col items-center mt-20 gap-4 justify-center">
          <p>Looks like you don't have any task created yet</p>
          <div className="flex gap-4 flex-col md:flex-row items-center justify-center">
            <Button className="btn-primary w-fit" onClick={openAddTodoForm}>
              Create new task
            </Button>
            <Button
              loading={isLoading}
              onClick={() => {
                // If data is already cached by the query, we don't need to refetch
                if (data) {
                  const todos = data.todos as TApiTodo[];
                  const newTasks = mapTodosToTasks(todos);
                  newTasks.forEach((task) => {
                    addTask(task);
                  });
                } else getSampleTask();
              }}
            >
              Inspire me for today
              <HiSparkles />
            </Button>
          </div>
        </div>
      )}
      <div
        className={classNames({
          " mt-10": true,
          "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4": tasksViewMode === "grid",
          "grid grid-cols-1 gap-4": tasksViewMode === "list",
        })}
      >
        {visibleTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <dialog className="modal" ref={addTaskDialogRef}>
        <AddTaskForm
          handleClose={() => {
            addTaskDialogRef.current?.close();
          }}
          mode="add"
        />
      </dialog>
    </main>
  );
};
export default HomePage;
