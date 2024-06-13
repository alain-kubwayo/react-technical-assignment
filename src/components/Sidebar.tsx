const Sidebar = () => {

  return (
    <aside
      className={`sticky top-0 h-screen py-5 border-r border-base-content/20 transition-all ease-in-out duration-100 hidden lg:block`}
    >
      <div className="flex flex-col h-full min-h-screen- items-center justify-between">
        <div className="flex flex-col gap-4">
          <div className="text-center text-lg font-bold text-gray-800">TD</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 cursor-pointer"
              viewBox="0 0 12 12"
            >
              <path
                fill="currentColor"
                d="M5.37 1.222a1 1 0 0 1 1.26 0l3.814 3.09A1.5 1.5 0 0 1 11 5.476V10a1 1 0 0 1-1 1H8.5a1 1 0 0 1-1-1V7.5A.5.5 0 0 0 7 7H5a.5.5 0 0 0-.5.5V10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5.477a1.5 1.5 0 0 1 .556-1.166z"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 cursor-pointer"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.25 10.745V16.5a4 4 0 0 1-4 4H6.75a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4h7.151"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.75 7.59L10 11.72a3.94 3.94 0 0 0 4 0l2.219-1.257"
                ></path>
                <circle cx={19} cy={5} r={2.5}></circle>
              </g>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 cursor-pointer"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M14.25 2.5a.25.25 0 0 0-.25-.25H7A2.75 2.75 0 0 0 4.25 5v14A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V9.147a.25.25 0 0 0-.25-.25H15a.75.75 0 0 1-.75-.75zm.75 9.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zm0 4a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z"
                clipRule="evenodd"
              ></path>
              <path
                fill="currentColor"
                d="M15.75 2.824c0-.184.193-.301.336-.186c.121.098.23.212.323.342l3.013 4.197c.068.096-.006.22-.124.22H16a.25.25 0 0 1-.25-.25z"
              ></path>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 cursor-pointer"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" d="M22 11H2" opacity={0.5}></path>
                <path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77c.079.07.154.145.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14z"></path>
              </g>
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 cursor-pointer"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <circle cx={12} cy={12} r={2} stroke="currentColor"></circle>
                <path
                  fill="currentColor"
                  d="m5.399 5.88l.25-.434a.5.5 0 0 0-.617.093zM3.4 9.344l-.478-.148a.5.5 0 0 0 .228.58zm-.002 5.311l-.25-.433a.5.5 0 0 0-.228.581zm2 3.464l-.367.34a.5.5 0 0 0 .617.093zm4.6 2.655h-.5a.5.5 0 0 0 .39.488zm4.001.002l.111.488a.5.5 0 0 0 .389-.488zM18.6 18.12l-.25.433a.5.5 0 0 0 .617-.093zm1.998-3.466l.478.148a.5.5 0 0 0-.228-.58zm.002-5.311l.25.433a.5.5 0 0 0 .228-.581zm-2-3.465l.367-.34a.5.5 0 0 0-.617-.093zM14 3.225h.5a.5.5 0 0 0-.389-.487zm-4-.002l-.111-.488a.5.5 0 0 0-.39.488zm4 1.849h-.5zm5 8.66l-.25.433zm-2 3.464l-.25.433zM5 13.732l.25.433zm2-6.928l-.25.433zM3.878 9.492a8.49 8.49 0 0 1 1.887-3.273l-.733-.68a9.49 9.49 0 0 0-2.11 3.658zm.76 6.758a8.527 8.527 0 0 1-.761-1.742l-.956.296a9.54 9.54 0 0 0 .852 1.946zm1.128 1.53a8.53 8.53 0 0 1-1.127-1.53l-.866.5a9.528 9.528 0 0 0 1.259 1.71zm8.123 2.51a8.49 8.49 0 0 1-3.778-.002l-.222.974a9.491 9.491 0 0 0 4.222.003zm6.233-5.782a8.49 8.49 0 0 1-1.887 3.273l.733.68a9.491 9.491 0 0 0 2.11-3.658zm-.76-6.758c.324.563.577 1.147.762 1.742l.955-.296a9.529 9.529 0 0 0-.852-1.946zm-1.128-1.53a8.48 8.48 0 0 1 1.127 1.53l.866-.5a9.524 9.524 0 0 0-1.259-1.71zm-8.123-2.51a8.49 8.49 0 0 1 3.778.002l.222-.974a9.49 9.49 0 0 0-4.222-.003zm.389 1.362v-1.85h-1v1.85zM7.25 6.37l-1.601-.925l-.5.866l1.6.925zm-2.5 6.928l-1.601.924l.5.866l1.6-.924zm.5-3.464l-1.6-.923l-.5.866l1.6.923zm5.25 10.94v-1.847h-1v1.847zm-3.75-4.012l-1.601.924l.5.866l1.6-.924zm12.101.925l-1.601-.925l-.5.866l1.601.925zm-4.351 3.09v-1.85h-1v1.85zM20.351 8.91l-1.601.924l.5.866l1.601-.924zm.498 5.311L19.25 13.3l-.5.866l1.6.923zM14.5 5.072V3.225h-1v1.847zm3.851.374l-1.601.925l.5.866l1.601-.925zM13.5 5.072c0 1.924 2.083 3.127 3.75 2.165l-.5-.866a1.5 1.5 0 0 1-2.25-1.3zm5.25 4.763c-1.667.962-1.667 3.368 0 4.33l.5-.866a1.5 1.5 0 0 1 0-2.598zm-1.5 6.928c-1.667-.962-3.75.24-3.75 2.165h1a1.5 1.5 0 0 1 2.25-1.299zm-6.75 2.165c0-1.924-2.083-3.127-3.75-2.165l.5.866a1.5 1.5 0 0 1 2.25 1.3zm-5.25-4.763c1.667-.962 1.667-3.368 0-4.33l-.5.866c1 .577 1 2.02 0 2.598zM9.5 5.072A1.5 1.5 0 0 1 7.25 6.37l-.5.866c1.667.962 3.75-.24 3.75-2.165z"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 cursor-pointer"
              viewBox="0 0 24 24"
            >
              <circle cx={12} cy={6} r={4} fill="currentColor"></circle>
              <path
                fill="currentColor"
                d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4 mt-10">
        <div className="flex items-center gap-4 px-4 py-[10px] text-base-content/60"></div>
      </div>
      <button className="relative flex items-center gap-4 px-4 mx-4 mt-auto overflow-hidden rounded group py-[10px] hover:bg-error/30 text-error hover:text-base">
        <div className="absolute left-0 hidden w-1 h-full bg-error group-hover:block"></div>
      </button>
    </aside>
  );
};
export default Sidebar;
