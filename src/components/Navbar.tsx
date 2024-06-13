import { CiDark, CiLight } from "react-icons/ci";
import useAppStore from "../store/store";

const Navbar = () => {
  const { switchTheme, theme } = useAppStore((state) => state.theme);
  const { locale, setLocale } = useAppStore((state) => state.locale);

  return (
    <div className="navbar bg-base-100 h-fit">
      <div className="navbar-start">
        <label className="input input-sm input-bordered flex items-center w-full sm:min-w-80 gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className="navbar-end gap-4">
        <button className="btn btn-sm btn-square" onClick={switchTheme}>
          {theme === "dark" ? (
            <CiLight className="text-2xl" />
          ) : (
            <CiDark className="text-2xl" />
          )}
        </button>
        <div className="hidden sm:flex items-center gap-1">
          <button onClick={() => setLocale("en")}>
            <span
              className={`badge ${locale === "en" ? "badge-success" : "badge-ghost badge-neutral"}`}
            >
              🏴󠁧󠁢󠁥󠁮󠁧󠁿 English
            </span>
          </button>

          <button onClick={() => setLocale("fr")}>
            <span
              className={`badge ${locale === "fr" ? "badge-success" : "badge-ghost badge-neutral"}`}
            >
              🇫🇷 French
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
