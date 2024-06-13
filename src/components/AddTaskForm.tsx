import dayjs from "dayjs";
import { FC, useState } from "react";
import { COVER_IMAGES } from "../core/constants";
import useAppStore from "../store/store";
import { Task } from "../store/taskSlice";

type AddTaskFormProps = {
  handleClose: () => void;
  mode: "add" | "edit";
  selectedTask?: Task;
};

const initialFormData: Omit<Task, "id" | "coverImageId"> = {
  title: "",
  description: "",
  dueDate: "",
  status: "pending",
};

const AddTaskForm: FC<AddTaskFormProps> = ({ handleClose, selectedTask, mode }) => {
  const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
  const { addTask, updateTask } = useAppStore((state) => state.tasks);
  const [todoFormData, setTodoFormData] = useState(
    selectedTask
      ? {
          title: selectedTask.title,
          description: selectedTask.description,
          dueDate: selectedTask.dueDate,
          status: selectedTask.status,
        }
      : initialFormData
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTodoFormData({ ...todoFormData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setTodoFormData(initialFormData);
    setSelectedImageId(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskData: Omit<Task, "id"> = {
      title: todoFormData.title,
      description: todoFormData.description,
      dueDate: dayjs(todoFormData.dueDate).format("YYYY MMM DD"),
      coverImageId: selectedImageId,
      status: todoFormData.status,
    };
    if (mode === "edit" && selectedTask) {
      updateTask(selectedTask.id, taskData);
    } else {
      addTask(taskData);
      resetForm();
    }
    handleClose();
  };

  return (
    <form className="modal-box lg:w-[900px] max-w-5xl" onSubmit={handleSubmit}>
      <button
        type="button"
        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        onClick={() => {
          resetForm();
          handleClose();
        }}
      >
        ✕
      </button>
      <h3 className="font-bold text-lg">{mode === "add" ? "Add a new task" : "Edit task"}</h3>
      <p className="py-4">Fill the form to {mode === "add" ? "add a new" : "edit task the"} task</p>
      <fieldset>
        <div className="label">
          <span className="label-text">
            Title <span className="text-red-400">*</span>
          </span>
        </div>
        <input
          name="title"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          value={todoFormData.title}
          required
          onChange={handleInputChange}
        />
      </fieldset>
      <fieldset>
        <div className="label">
          <span className="label-text">
            Description <span className="text-red-400">*</span>
          </span>
        </div>
        <textarea
          placeholder="Enter description of the task"
          className="textarea textarea-bordered w-full"
          onChange={handleInputChange}
          name="description"
          value={todoFormData.description}
        ></textarea>
      </fieldset>
      <fieldset>
        <div className="label">
          <span className="label-text">
            Due Date <span className="text-red-400">*</span>
          </span>
        </div>
        <input
          type="date"
          name="dueDate"
          className="input input-bordered w-full"
          onChange={handleInputChange}
          value={dayjs(todoFormData.dueDate).format("YYYY-MM-DD")}
        />
      </fieldset>
      <fieldset>
        <div className="label">
          <span className="label-text">Choose a cover image (optional)</span>
        </div>
        <div className="flex gap-5">
          {COVER_IMAGES.map((image) => (
            <div className="avatar" key={image.id} onClick={() => setSelectedImageId(image.id)}>
              <div
                className={`w-24 rounded-xl ${
                  image.id === selectedImageId
                    ? "ring ring-primary ring-offset-base-100 ring-offset-2"
                    : ""
                }`}
              >
                <img src={image.src} alt="cover image" />
              </div>
            </div>
          ))}

          <div className="avatar" onClick={() => setSelectedImageId(null)}>
            <div className="w-24 rounded-xl">
              <img
                src={"https://dummyjson.com/image/400x200/gray/ffffff?text=No+cover&fontSize=38"}
                alt="cover image"
              />
            </div>
          </div>
        </div>
      </fieldset>

      <div className="modal-action">
        <button type="submit" className="btn btn-primary">
          Save task
        </button>
      </div>
    </form>
  );
};
export default AddTaskForm;
