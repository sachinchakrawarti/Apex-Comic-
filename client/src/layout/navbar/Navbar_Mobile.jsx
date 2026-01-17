import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaTimes, FaBars } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";

import NavItem_Mobile, { mobileNavItems } from "./NavItem_Mobile"; // Import mobile-specific component
import Searchbar from "./Searchbar";

const Navbar_Mobile = ({
  isMobileMenuOpen,
  isSearchOpen,
  toggleMobileMenu,
  toggleSearch,
  onSearchSubmit,
}) => {
  return (
    <>
      {/* MOBILE HEADER */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
        >
          APEX COMIC
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/new-apex-ai"
            className="text-pink-400 hover:text-blue-400 transition-all"
          >
            <BsRobot className="text-lg" />
          </Link>

          <button
            onClick={toggleSearch}
            className="text-pink-400 hover:text-blue-400 transition-all"
          >
            <FaSearch className="text-lg" />
          </button>

          <Link
            to="/login"
            className="text-pink-400 hover:text-blue-400 transition-all"
          >
            <FaUser className="text-lg" />
          </Link>

          <button
            onClick={toggleMobileMenu}
            className="text-pink-400 hover:text-blue-400 transition-all"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="text-lg" />
            ) : (
              <FaBars className="text-lg" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE SEARCH BAR */}
      {isSearchOpen && (
        <Searchbar isMobile={true} onSearchSubmit={onSearchSubmit} />
      )}

      {/* MOBILE NAVIGATION LIST */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-gray-800/30 border-t border-gray-700/50">
          <nav className="flex flex-col">
            {mobileNavItems.map((item) => (
              <NavItem_Mobile
                key={item.name}
                item={item}
                setIsMobileMenuOpen={toggleMobileMenu}
              />
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar_Mobile;
