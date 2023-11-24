import { useState } from "react";

function Navbar() {
  const [isIconClicked, setIsIconClicked] = useState(true);

  let iconStatus = isIconClicked ? "menu" : "close";
  let addClassOrNot = isIconClicked ? null : " top-[50px] opacity-100";

  function handleMenu() {
    setIsIconClicked((prevState) => !prevState);
  }
  return (
    <nav className="md:flex md:items-center md:justify-between  p-5 shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold flex items-center jutify-center gap-x-2">
          <h1 className="text-[#1C7C54]">John Doe</h1>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>
          </span>
        </span>
        <span className="cursor-pointer text-3xl md:hidden block flex items-center justify-center">
          <ion-icon name={iconStatus} onClick={handleMenu}></ion-icon>
        </span>
      </div>

      <ul
        className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500${addClassOrNot}`}
      >
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-lg hover:text-[#1C7C54] duration-500">
            HOME
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-lg hover:text-[#1C7C54] duration-500">
            ABOUT
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-lg hover:text-[#1C7C54] duration-500">
            PORTFOLIO
          </a>
        </li>

        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-lg hover:text-[#1C7C54] duration-500">
            BLOG'S
          </a>
        </li>

        <button className="bg-[#1C7C54] text-white font-medium duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded shadow shadow-gray-400 flex items-center justify-between gap-x-2">
          <h3 className="tracking-wide">Contact me</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
