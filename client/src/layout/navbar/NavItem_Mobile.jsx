// ================= IMPORTS ==================
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import {
  IoHome,
  IoPeople,
  IoBook,
  IoCalendar,
  IoNewspaper,
  IoHardwareChip,
  IoLibrarySharp,
  IoPlanetSharp,
  IoFlashSharp,
  IoShirtSharp,
  IoPeopleSharp,
  IoGameControllerSharp,
  IoColorPaletteSharp,
  IoCodeWorkingSharp,
  IoConstructSharp,
} from "react-icons/io5";

import { FaDna, FaExclamationCircle, FaBoxOpen } from "react-icons/fa";
import { MdContactless } from "react-icons/md";

const iconStyle = "text-lg";

/* =======================================================
   MOBILE NAV ITEMS (All items expanded, no "More" dropdown)
==========================================================*/
const mobileNavItems = [
  { name: "Home", icon: <IoHome className={iconStyle} />, path: "/" },

  // Characters with dropdown expanded
  {
    name: "Characters",
    path: "/characters",
    icon: <IoPeople className={iconStyle} />,
    dropdown: [
      { name: "Species", path: "/species" },
      { name: "Homo Sapiens", path: "/homo_sapiens" },
      { name: "Groups", path: "/groups" },
    ],
  },

  {
    name: "Entities",
    path: "/entities",
    icon: <FaDna className={iconStyle} />,
  },

  {
    name: "Weapons",
    path: "/weapons",
    icon: <IoHardwareChip className={iconStyle} />,
  },

  // Comics with dropdown expanded
  {
    name: "Comics",
    path: "/comics",
    icon: <IoBook className={iconStyle} />,
    dropdown: [
      { name: "Comic Series", path: "/comic_series" },
      { name: "Sub Comics", path: "/subcomicpage" },
    ],
  },

  // Stories with dropdown expanded
  {
    name: "Stories",
    path: "/stories",
    icon: <IoNewspaper className={iconStyle} />,
    dropdown: [{ name: "Epic Stories", path: "/epic_stories" }],
  },

  // Library with dropdown expanded
  {
    name: "Library",
    path: "/library",
    icon: <IoLibrarySharp className={iconStyle} />,
    dropdown: [
      { name: "Books", path: "/books" },
      { name: "Concepts", path: "/concepts" },
      { name: "Apex Dictionary", path: "/apexdictionary" },
    ],
  },

  {
    name: "Events",
    path: "/events",
    icon: <IoCalendar className={iconStyle} />,
  },

  // Apex Platforms with dropdown expanded
  {
    name: "Apex Platforms",
    path: "/platforms",
    icon: <IoPlanetSharp className={iconStyle} />,
    dropdown: [
      { name: "Apex AI", path: "/apexai" },
      { name: "Apex Gaming", path: "/apexgaming" },
      { name: "Apex AR", path: "/apexar" },
      { name: "Apex VR", path: "/apexvr" },
      { name: "Apex Web3.0", path: "/apexwebthree" },
      { name: "Apex Blockchain", path: "/apexblockchain" },
      { name: "Apex Quantum", path: "/apexquantum" },
    ],
  },

  // Apex Nexus with dropdown expanded

  {
    name: "Contact",
    path: "/contact",
    icon: <MdContactless className={iconStyle} />,
  },

  {
    name: "About",
    path: "/about",
    icon: <FaExclamationCircle className={iconStyle} />,
  },
];

/* =======================================================
   SINGLE NAV ITEM COMPONENT FOR MOBILE
==========================================================*/
const NavItem_Mobile = ({ item, setIsMobileMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  if (item.dropdown) {
    return (
      <div className="relative">
        {/* Main visible button */}
        <div className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-all py-2">
          <Link
            to={item.path}
            className="flex items-center gap-2 flex-1"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.icon}
            <span className="font-medium text-base">{item.name}</span>
          </Link>

          <button
            onClick={toggleDropdown}
            className="p-1 hover:bg-gray-700 rounded"
          >
            {isOpen ? (
              <FaChevronUp className="text-xs" />
            ) : (
              <FaChevronDown className="text-xs" />
            )}
          </button>
        </div>

        {/* Dropdown Panel */}
        {isOpen && (
          <div className="ml-4 mt-1 border-l-2 border-gray-600 pl-2">
            {item.dropdown.map((sub) => (
              <div key={sub.name}>
                {sub.dropdown ? (
                  <NestedDropdownItem_Mobile
                    item={sub}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    setIsOpen={setIsOpen}
                  />
                ) : (
                  <Link
                    to={sub.path}
                    className="flex items-center px-4 py-3 text-gray-300 hover:text-pink-400 text-base border-b border-gray-700"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    {sub.icon && <span className="mr-3">{sub.icon}</span>}
                    {sub.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Normal nav item
  return (
    <Link
      to={item.path}
      className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-all py-3 border-b border-gray-700"
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {item.icon}
      <span className="font-medium text-base">{item.name}</span>
    </Link>
  );
};

/* =======================================================
   NESTED DROPDOWN FOR MOBILE (SECOND LEVEL)
==========================================================*/
const NestedDropdownItem_Mobile = ({
  item,
  setIsMobileMenuOpen,
  setIsOpen,
}) => {
  const [isNestedOpen, setIsNestedOpen] = useState(false);

  return (
    <div className="relative">
      {/* Parent */}
      <div
        className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-pink-400 text-base cursor-pointer border-b border-gray-700"
        onClick={() => setIsNestedOpen(!isNestedOpen)}
      >
        <div className="flex items-center">
          {item.icon && <span className="mr-3">{item.icon}</span>}
          {item.name}
        </div>

        {isNestedOpen ? (
          <FaChevronUp className="text-xs" />
        ) : (
          <FaChevronDown className="text-xs" />
        )}
      </div>

      {/* Nested dropdown list */}
      {isNestedOpen && (
        <div className="ml-4 mt-1 border-l-2 border-gray-600 pl-2">
          {item.dropdown.map((nestedSub) => (
            <Link
              key={nestedSub.name}
              to={nestedSub.path}
              className="flex items-center px-4 py-3 text-gray-300 hover:text-pink-400 text-base border-b border-gray-700"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsOpen(false);
              }}
            >
              {nestedSub.icon && <span className="mr-3">{nestedSub.icon}</span>}
              {nestedSub.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Export both the component and the mobile nav items
export { mobileNavItems };
export default NavItem_Mobile;
