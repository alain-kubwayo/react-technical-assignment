export default function AddTaskModel() {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Add New Task</h3>
        <p className="py-4">
            Please fill in the form below to add a new task.
        </p>
        <div className="flex flex-col gap-2">
          <label className="input input-bordered flex items-center gap-2">
            Title
            <input type="text" className="grow" placeholder="title" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Sub Title
            <input type="text" className="grow" placeholder="sub title" />
          </label>
          <textarea className="textarea input-bordered" placeholder="Description"></textarea>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <div className="flex items-center gap-4">
              <button className="btn">Close</button>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
