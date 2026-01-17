import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { BsRobot } from "react-icons/bs";

import NavItem_Desktop, { finalDesktopNavItems } from "./NavItem_Desktop";
import Searchbar from "./Searchbar";

const Navbar_Desktop = ({ onSearchSubmit }) => {
  return (
    <div className="hidden md:block">
      {/* ROW 1: LOGO + SEARCH + BUTTONS */}
      <div className="flex items-center justify-between px-4 lg:px-8 py-4">
        <Link
          to="/"
          className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent hover:animate-pulse"
        >
          APEX COMIC
        </Link>

        {/* SEARCH BAR */}
        <Searchbar
          onSearchSubmit={onSearchSubmit}
          placeholder="| EXPLORE THE APEX UNIVERSE..."
        />

        {/* RIGHT BUTTONS */}
        <div className="flex gap-4 flex-shrink-0">
          <Link
            to="/new-apex-ai"
            className="flex items-center gap-2 text-pink-400 hover:text-blue-400 transition-all"
          >
            <BsRobot className="text-lg" /> APEX AI
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-2 text-pink-400 hover:text-blue-400 transition-all"
          >
            <FaUser className="text-lg" /> LOGIN
          </Link>

          <Link
            to="/join"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-1 rounded-full hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all"
          >
            <IoRocket className="text-lg" /> JOIN
          </Link>
        </div>
      </div>

      {/* ROW 2: SINGLE NAVIGATION ROW (6 essential items + More) */}
      <div className="flex justify-center px-4 lg:px-8 py-3 bg-gray-800/30 border-t border-gray-700/50">
        <nav className="flex gap-6">
          {finalDesktopNavItems.map((item) => (
            <NavItem_Desktop key={item.name} item={item} />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar_Desktop;
