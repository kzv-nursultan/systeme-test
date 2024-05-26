import { NAVIGATION } from "../../shared/constants/navigation";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-slate-200 p-3">
      <div
        className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1 p-3"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          {NAVIGATION.map((nav) => (
            <li key={nav.href} className="border-gray-300 max-lg:py-3 px-3">
              <button
                onClick={() => navigate(nav.href)}
                className={`hover:text-[#007bff] text-gray-500 block font-semibold text-[15px] active:text-black ${
                  window.location.pathname === nav.href && "text-orange-500"
                }`}
              >
                {nav.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
