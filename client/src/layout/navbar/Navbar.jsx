import { useState, useEffect, useRef } from "react";

import Navbar_Mobile from "./Navbar_Mobile";
import Navbar_Desktop from "./Navbar_Desktop";

const FuturisticNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navbarRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearchSubmit = () => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  };

  /* Close mobile search + menu when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    if (isMobileMenuOpen || isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, isSearchOpen]);

  return (
    <div
      ref={navbarRef}
      className="font-mono bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-50"
    >
      {/* MOBILE SECTION */}
      <Navbar_Mobile
        isMobileMenuOpen={isMobileMenuOpen}
        isSearchOpen={isSearchOpen}
        toggleMobileMenu={toggleMobileMenu}
        toggleSearch={toggleSearch}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* DESKTOP SECTION */}
      <Navbar_Desktop onSearchSubmit={handleSearchSubmit} />
    </div>
  );
};

export default FuturisticNavbar;
