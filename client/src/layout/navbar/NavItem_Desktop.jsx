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

// Desktop navigation items
const desktopNavItems = [
  { name: "Home", icon: <IoHome className={iconStyle} />, path: "/" },
  {
    name: "Characters",
    path: "/characters",
    icon: <IoPeople className={iconStyle} />,
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
  {
    name: "Comics",
    path: "/comics",
    icon: <IoBook className={iconStyle} />,
  },
  {
    name: "Stories",
    path: "/stories",
    icon: <IoNewspaper className={iconStyle} />,
  },

  {
    name: "About",
    path: "/about",
    icon: <FaExclamationCircle className={iconStyle} />,
  },
];

// More dropdown items
const moreDropdownItems = [
  {
    name: "Characters",
    icon: <IoPeople className={iconStyle} />,
    dropdown: [
      { name: "Species", path: "/species" },
      { name: "Homo Sapiens", path: "/homo_sapiens" },
      { name: "Groups", path: "/groups" },
    ],
  },
  {
    name: "Comics",
    icon: <IoBook className={iconStyle} />,
    dropdown: [
      { name: "Comic Series", path: "/comic_series" },
      { name: "Sub Comics", path: "/subcomicpage" },
    ],
  },
  {
    name: "Stories",
    icon: <IoNewspaper className={iconStyle} />,
    dropdown: [{ name: "Epic Stories", path: "/epic_stories" }],
  },
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
  {
    name: "Apex Nexus",
    path: "/nexus",
    icon: <IoFlashSharp className={iconStyle} />,
    dropdown: [
      { name: "Merch Hub", path: "/merch", icon: <IoShirtSharp /> },
      { name: "Cosplay Portal", path: "/cosplay", icon: <IoPeopleSharp /> },
      {
        name: "Collectible Vault",
        path: "/collectibles",
        icon: <IoGameControllerSharp />,
      },
      { name: "Fan Art Zone", path: "/fan-art", icon: <IoColorPaletteSharp /> },
      {
        name: "Creator Sync",
        path: "/creator-hub",
        icon: <IoConstructSharp />,
      },
      { name: "Apex Community", path: "/community", icon: <IoPeopleSharp /> },
    ],
  },
  {
    name: "Apex Foundation",
    path: "/foundation",
    icon: <IoCodeWorkingSharp className={iconStyle} />,
  },
  {
    name: "Apex Terminal",
    path: "/terminal",
    icon: <FaBoxOpen className={iconStyle} />,
    dropdown: [
      { name: "Open Source", path: "/terminal/opensource" },
      { name: "API Access", path: "/terminal/api-access" },
      { name: "AI Tools", path: "/ai-tools" },
      { name: "Developer Console", path: "/terminal/console" },
      { name: "Bug Report", path: "/terminal/bug-report" },
      { name: "Careers", path: "/terminal/careers" },
      { name: "Internships", path: "/terminal/internships" },
      { name: "Freelancer Portal", path: "/terminal/freelancers" },
      { name: "Join Apex Creators", path: "/terminal/join-creators" },
    ],
  },
  {
    name: "Apex Labs & Innovation",
    path: "/apex_labs_innovation",
    icon: <FaDna className={iconStyle} />,
    dropdown: [
      {
        name: "Unreleased Characters & comic",
        path: "/unreleased_characters_and_comic",
      },
      { name: "User Feedback Sandbox", path: "/labs/feedback" },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <MdContactless className={iconStyle} />,
  },
];

// Final desktop nav items
export const finalDesktopNavItems = [
  ...desktopNavItems,
  {
    name: "More",
    path: "#",

    dropdown: moreDropdownItems,
  },
];

const NavItem_Desktop = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const isMoreDropdown = item.name === "More" && item.dropdown;

  if (item.dropdown) {
    return (
      <div className="relative group">
        {/* Main button */}
        <div className="flex items-center gap-1 lg:gap-2 text-gray-300 hover:text-pink-400 transition-all py-1">
          <Link to={item.path} className="flex items-center gap-1">
            {item.icon}
            <span className="font-medium text-sm lg:text-base">
              {item.name}
            </span>
          </Link>

          <button
            onClick={toggleDropdown}
            className="hover:bg-gray-700 rounded p-1 transition-colors"
          >
            {isOpen ? (
              <FaChevronUp className="text-xs" />
            ) : (
              <FaChevronDown className="text-xs" />
            )}
          </button>
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div
            className={`fixed left-0 right-0 mt-2 z-50 bg-gray-800 shadow-lg border border-gray-700 ${
              isMoreDropdown
                ? "w-full max-h-96 overflow-y-auto py-6"
                : "absolute w-48 py-2 rounded-lg"
            }`}
          >
            {isMoreDropdown ? (
              // Full-screen mega menu for More
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-4 gap-8">
                  {item.dropdown.map((section, index) => (
                    <div key={index} className="space-y-3">
                      {/* Section header */}
                      <div className="flex items-center gap-2 text-pink-400 font-semibold text-sm border-b border-gray-600 pb-2">
                        {section.icon}
                        <span>{section.name}</span>
                      </div>

                      {/* Section items */}
                      <div className="space-y-2">
                        {section.dropdown ? (
                          section.dropdown.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="block text-gray-300 hover:text-pink-400 text-sm transition-colors py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))
                        ) : (
                          <Link
                            to={section.path}
                            className="block text-gray-300 hover:text-pink-400 text-sm transition-colors py-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {section.name}
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // Regular dropdown for other items
              <div className="rounded-lg">
                {item.dropdown.map((sub) => (
                  <div key={sub.name}>
                    {sub.dropdown ? (
                      <NestedDropdown item={sub} setIsOpen={setIsOpen} />
                    ) : (
                      <Link
                        to={sub.path}
                        className="flex items-center px-4 py-2 text-gray-300 hover:text-pink-400 text-sm hover:bg-gray-700 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.icon && <span className="mr-2">{sub.icon}</span>}
                        {sub.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Normal nav item
  return (
    <Link
      to={item.path}
      className="flex items-center gap-1 lg:gap-2 text-gray-300 hover:text-pink-400 transition-all py-1"
    >
      {item.icon}
      <span className="font-medium text-sm lg:text-base">{item.name}</span>
    </Link>
  );
};

// Nested dropdown component
const NestedDropdown = ({ item, setIsOpen }) => {
  const [isNestedOpen, setIsNestedOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex items-center justify-between px-4 py-2 text-gray-300 hover:text-pink-400 text-sm cursor-pointer hover:bg-gray-700 transition-colors"
        onClick={() => setIsNestedOpen(!isNestedOpen)}
      >
        <div className="flex items-center">
          {item.icon && <span className="mr-2">{item.icon}</span>}
          {item.name}
        </div>
        {isNestedOpen ? (
          <FaChevronUp className="text-xs" />
        ) : (
          <FaChevronDown className="text-xs" />
        )}
      </div>

      {isNestedOpen && (
        <div className="ml-2 mt-1 border-l-2 border-gray-600 pl-2">
          {item.dropdown.map((nestedSub) => (
            <Link
              key={nestedSub.name}
              to={nestedSub.path}
              className="flex items-center px-4 py-2 text-gray-300 hover:text-pink-400 text-sm hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {nestedSub.icon && <span className="mr-2">{nestedSub.icon}</span>}
              {nestedSub.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem_Desktop;
