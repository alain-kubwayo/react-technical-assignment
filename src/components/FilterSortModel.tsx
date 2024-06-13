export default function FilterSortModel() {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
            Filter & Sort
        </h3>
        <p className="py-4">
            Please select the filter and sort options below.
        </p>
        <div className="flex flex-col gap-2">
          <label className="input input-bordered flex items-center gap-2">
            Keyword
            <input type="text" className="grow" placeholder="search using any keyword" />
          </label>
            <label className="input input-bordered flex items-center gap-2">
                Form
                <input type="date" className="grow" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                To
                <input type="date" className="grow" />
            </label>

        </div>

     
        <div className="modal-action">
          <form method="dialog">
            <div className="flex items-center gap-2">
              <button className="btn">Close</button>
              <button type="submit" className="btn btn-primary">
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  )
}
