import { useMutation } from "@tanstack/react-query";
import classNames from "classnames";
import { FC, useRef } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import Button from "../core/components/Button";
import { COVER_IMAGES } from "../core/constants";
import { deleteTaskMutation } from "../querries/task";
import useAppStore from "../store/store";
import { Task } from "../store/taskSlice";
import AddTaskForm from "./AddTaskForm";

type TaskCardProps = {
  task: Task;
};

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  const { theme } = useAppStore((state) => state.theme);
  const { removeTask, changeTaskStatus } = useAppStore((state) => state.tasks);
  const { mutateAsync: deleteTask, isPending } = useMutation({
    mutationFn: deleteTaskMutation,
    onSuccess: () => {
      removeTask(task.id);
    },
  });

  const editTaskFormRef = useRef<HTMLDialogElement>(null);

  const openEditFormModal = () => {
    editTaskFormRef.current?.showModal();
  };

  return (
    <div
      key={task.id}
      className={classNames({
        "bg-[#F2F2F2]": theme === "light",
        "bg-[#2A3138]": theme === "dark",
        " px-4 py-3 animated rounded-xl items-start flex-col w-full justify-between mb-10 break-inside-avoid-column":
          true,
      })}
    >
      {task.coverImageId && (
        <img
          src={COVER_IMAGES.find((image) => image.id === task.coverImageId)?.src}
          alt="cover image"
          className="h-[200px] w-full object-cover rounded-lg mb-4"
        />
      )}
      <div className="flex items-center justify-between w-full">
        <span
          className={classNames({
            "text-xs px-2 py-1 rounded-[10px]": true,
            "bg-[#fff1da] text-[#CC7821]": task.status === "pending",
            "bg-[#EDFEFA] text-[#3298DE]": task.status === "in-progress",
            "bg-[#EDF9F6] text-[#66B89E]": task.status === "completed",
          })}
        >
          {task.status}
        </span>
        <span className="text-xs text-[#6B7280]">{task.dueDate}</span>
      </div>

      <div className="py-4">
        <p className="text-xl font-semibold mt-2">{task.title}</p>
        <p className="text-sm text-[#6B7280]">{task.description}</p>
      </div>
      <hr className="w-full border-[0.4px]" />
      <div className="flex gap-4 items-center my-2 justify-between">
        <div className="avatar-group -space-x-2.5 rtl:space-x-reverse">
          <div className="avatar">
            <div className="w-8">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="avatar"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered select-xs w-full max-w-xs"
              value={task.status}
              onChange={(e) => {
                const value = e.target.value as "pending" | "in-progress" | "completed";
                changeTaskStatus(task.id, value);
              }}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In progress</option>
              <option value="completed">Completed</option>
            </select>
          </label>

          <div className="lg:tooltip" data-tip="Edit task">
            <Button className="btn-xs btn-outline" onClick={openEditFormModal}>
              {isPending ? <span className="loading loading-spinner loading-xs" /> : <MdEdit />}
            </Button>
          </div>

          <div className="lg:tooltip" data-tip="Delete task">
            <Button className="btn-xs btn-error text-white/80" onClick={() => deleteTask(task.id)}>
              {isPending ? (
                <span className="loading loading-spinner loading-xs" />
              ) : (
                <MdDeleteForever className="text-lg" />
              )}
            </Button>
          </div>
        </div>
      </div>
      <dialog className="modal" ref={editTaskFormRef}>
        <AddTaskForm
          handleClose={() => {
            editTaskFormRef.current?.close();
          }}
          mode="edit"
          selectedTask={task}
        />
      </dialog>
    </div>
  );
};
export default TaskCard;
