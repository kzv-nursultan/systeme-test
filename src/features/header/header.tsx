import { useMemo } from "react";
import { NAVIGATION } from "../../app/constants/navigation";

export default function Header() {
  const currentPath = useMemo(() => window.location.pathname, []);
  return (
    <header className="bg-slate-200 p-3">
      <div
        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 p-3"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          {NAVIGATION.map((nav) => (
            <li
              key={nav.href}
              className="max-lg:border-b border-gray-300 max-lg:py-3 px-3"
            >
              <a
                href={nav.href}
                className={`hover:text-[#007bff] text-gray-500 block font-semibold text-[15px] active:text-black ${
                  currentPath === nav.href && "text-orange-500"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
