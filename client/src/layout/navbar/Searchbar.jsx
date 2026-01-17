import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({
  isMobile = false,
  onSearchSubmit,
  placeholder = "| EXPLORE THE APEX UNIVERSE...",
  className = "",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      // Call the callback if provided
      if (onSearchSubmit) {
        onSearchSubmit();
      }
    }
  };

  // Mobile version
  if (isMobile) {
    return (
      <div className={`px-4 py-3 ${className}`}>
        <form onSubmit={handleSearch} className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-lg blur-sm"></div>

          <div className="relative flex items-center bg-gray-800/50 rounded-lg px-4 py-2 border border-pink-500/30">
            <FaSearch className="text-pink-400/80 mr-2 text-lg" />
            <input
              type="text"
              placeholder="| SEARCH UNIVERSE..."
              className="bg-transparent w-full text-gray-200 placeholder-pink-400/60 tracking-wider outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
      </div>
    );
  }

  // Desktop version
  return (
    <div className={`flex-1 mx-8 max-w-2xl ${className}`}>
      <form onSubmit={handleSearch} className="relative group w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 blur-sm rounded-lg"></div>

        <div className="relative flex items-center bg-gray-800/50 rounded-lg px-4 py-3 border border-pink-500/30">
          <FaSearch className="text-pink-400/80 mr-3 text-xl" />
          <input
            type="text"
            placeholder={placeholder}
            className="bg-transparent w-full text-gray-200 placeholder-pink-400/60 tracking-wider outline-none text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
