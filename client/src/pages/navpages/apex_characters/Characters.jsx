import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import characters from "../../../data/CharacterData/characterdata.js";
import theme from "../../../config/theme.js";

const Characters = () => {
  const [viewMode, setViewMode] = useState("rectangle");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [isMobile, setIsMobile] = useState(false);
  const [shareNotification, setShareNotification] = useState({
    show: false,
    character: "",
  });
  const [imageErrors, setImageErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);

    // Handle window resize for mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allTags = [...new Set(characters.flatMap((char) => char.tags || []))];

  useEffect(() => {
    const filtered = characters.filter((char) => {
      const matchesSearch =
        char.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        char.alias?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTags =
        selectedTags.length === 0 ||
        (char.tags && selectedTags.every((tag) => char.tags.includes(tag)));
      return matchesSearch && matchesTags;
    });
    setFilteredCharacters(filtered);
  }, [searchTerm, selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "rectangle" ? "square" : "rectangle"));
  };

  const handleViewProfile = (character) => {
    navigate(`/character/${character.slug}`);
  };

  const handleShare = async (character) => {
    const shareUrl = `${window.location.origin}/character/${character.slug}`;
    const shareText = `Check out ${character.name} from Apex Comic! ${character.alias ? `Also known as: ${character.alias}` : ""}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${character.name} - Apex Comic`,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShareNotification({ show: true, character: character.name });
        setTimeout(
          () => setShareNotification({ show: false, character: "" }),
          3000,
        );
      } catch (err) {
        console.log("Failed to copy: ", err);
        alert(`Share this character: ${shareUrl}`);
      }
    } else {
      alert(`Share this character: ${shareUrl}`);
    }
  };

  const handleImageError = (characterId) => {
    setImageErrors((prev) => ({
      ...prev,
      [characterId]: true,
    }));
  };

  const getImageUrl = (character) => {
    if (imageErrors[character.id]) {
      return "/fallback-character-image.jpg";
    }
    return character.image;
  };

  const displayViewMode = isMobile ? "mobile" : viewMode;

  // Action Buttons Component
  const ActionButtons = ({ character, compact = false }) => (
    <div className={`flex ${compact ? "gap-2" : "gap-3"} mt-3`}>
      <button
        onClick={() => handleViewProfile(character)}
        className={`${compact ? "px-3 py-1.5 text-sm" : "px-4 py-2"} rounded-lg font-semibold transition-all hover:scale-105 active:scale-95`}
        style={{
          backgroundColor: theme.colors.primary.pink,
          color: theme.colors.text.dark,
          border: `2px solid ${theme.colors.border.pink}`,
        }}
      >
        {compact ? "View" : "View Profile"}
      </button>
      <button
        onClick={() => handleShare(character)}
        className={`${compact ? "px-3 py-1.5 text-sm" : "px-4 py-2"} rounded-lg font-semibold transition-all hover:scale-105 active:scale-95`}
        style={{
          backgroundColor: theme.colors.primary.blueLight,
          color: theme.colors.text.dark,
          border: `2px solid ${theme.colors.border.blue}`,
        }}
      >
        {compact ? "Share" : "Share"}
      </button>
    </div>
  );

  return (
    <div
      style={{ backgroundColor: theme.colors.background.dark }}
      className="min-h-screen p-4"
    >
      {/* Share Notification */}
      {shareNotification.show && (
        <div
          className="fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg animate-fade-in"
          style={{
            backgroundColor: theme.colors.primary.green,
            color: theme.colors.text.dark,
          }}
        >
          ✓ Link for {shareNotification.character} copied to clipboard!
        </div>
      )}

      <h1
        className="text-3xl md:text-4xl font-bold text-center mb-6"
        style={{ color: theme.colors.text.light }}
      >
        Apex Comic Characters
      </h1>

      {/* Controls Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search characters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            style={{ color: theme.colors.text.light }}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        {!isMobile && (
          <div className="flex gap-3">
            <button
              onClick={toggleViewMode}
              className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition"
              style={{ border: `1px solid ${theme.colors.border.pink}` }}
            >
              {viewMode === "rectangle"
                ? "Show Square Cards"
                : "Show Rectangle Cards"}
            </button>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition"
              style={{ border: `1px solid ${theme.colors.border.blue}` }}
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>
        )}

        {/* Mobile Controls */}
        {isMobile && (
          <div className="flex gap-3 w-full justify-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition flex-1"
              style={{ border: `1px solid ${theme.colors.border.blue}` }}
            >
              {showFilters ? "Hide Filters" : "Filters"}
            </button>
          </div>
        )}
      </div>

      {/* Tag Filters */}
      {showFilters && (
        <div className="mb-8 p-4 rounded-lg bg-gray-900">
          <h3
            className="text-lg font-semibold mb-3"
            style={{ color: theme.colors.text.light }}
          >
            Filter by Tags:
          </h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  selectedTags.includes(tag)
                    ? "bg-pink-500 text-white scale-105"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {tag}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="px-3 py-1 rounded-full text-sm bg-gray-600 text-gray-300 hover:bg-gray-500 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      )}

      {/* Results Count */}
      <div
        className="mb-4 text-center md:text-left"
        style={{ color: theme.colors.text.secondary }}
      >
        Showing {filteredCharacters.length} of {characters.length} characters
      </div>

      {/* Rectangle Cards View (Desktop) */}
      {displayViewMode === "rectangle" && (
        <div className="grid grid-cols-1 gap-6 mb-12">
          {filteredCharacters.map((char) => (
            <div
              key={`rect-${char.id}`}
              className="w-[90%] mx-auto bg-gray-800 rounded-2xl shadow-lg p-4 flex hover:shadow-xl transition duration-300"
              style={{
                borderColor: theme.colors.border.pink,
                borderWidth: "1px",
                maxWidth: "900px",
                height: "500px",
              }}
            >
              <div className="w-[40%] h-full flex items-center justify-center p-4">
                <img
                  src={getImageUrl(char)}
                  alt={char.name}
                  className="h-full w-auto object-contain rounded-xl"
                  style={{
                    border: `4px solid ${theme.colors.primary.pink}`,
                    maxWidth: "100%",
                  }}
                  onError={() => handleImageError(char.id)}
                />
              </div>
              <div className="w-[60%] h-full p-4 flex flex-col">
                <h2
                  className="text-2xl font-semibold mb-2"
                  style={{ color: theme.colors.text.light }}
                >
                  {char.name}
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    <span
                      className="font-medium"
                      style={{ color: theme.colors.text.light }}
                    >
                      Alias:
                    </span>{" "}
                    {char.alias || "N/A"}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    <span
                      className="font-medium"
                      style={{ color: theme.colors.text.light }}
                    >
                      Age:
                    </span>{" "}
                    {char.age || "Unknown"}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    <span
                      className="font-medium"
                      style={{ color: theme.colors.text.light }}
                    >
                      Birthplace:
                    </span>{" "}
                    {char.birthplace || "Unknown"}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    <span
                      className="font-medium"
                      style={{ color: theme.colors.text.light }}
                    >
                      Occupation:
                    </span>{" "}
                    {char.occupation || "Unknown"}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    <span
                      className="font-medium"
                      style={{ color: theme.colors.text.light }}
                    >
                      Affiliation:
                    </span>{" "}
                    {char.affiliation || "Unknown"}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    <span
                      className="font-medium"
                      style={{ color: theme.colors.text.light }}
                    >
                      Known For:
                    </span>{" "}
                    {char.knownFor || "Unknown"}
                  </p>
                  {char.relationship && (
                    <p
                      className="text-sm"
                      style={{ color: theme.colors.text.secondary }}
                    >
                      <span
                        className="font-medium"
                        style={{ color: theme.colors.text.light }}
                      >
                        Relationship:
                      </span>{" "}
                      {char.relationship}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <ActionButtons character={char} />

                {/* Tags - Only show on desktop */}
                {!isMobile && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {(char.tags || []).map((tag) => (
                      <span
                        key={`${char.id}-${tag}`}
                        className="text-xs px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: selectedTags.includes(tag)
                            ? theme.colors.primary.pink
                            : theme.colors.primary.blueLight,
                          color: theme.colors.text.dark,
                          fontWeight: theme.typography.fontWeight.medium,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mobile View - Like Previous Version */}
      {displayViewMode === "mobile" && (
        <div className="grid grid-cols-1 gap-6">
          {filteredCharacters.map((char) => (
            <div
              key={`mobile-${char.id}`}
              className="w-full bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              style={{
                borderColor: theme.colors.border.pink,
                borderWidth: "1px",
              }}
            >
              {/* Full-width image for mobile - Like previous version */}
              <div className="w-full h-90%">
                <img
                  src={getImageUrl(char)}
                  alt={char.name}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(char.id)}
                />
              </div>

              <div className="w-full p-4">
                <h2
                  className="text-2xl font-semibold mb-2"
                  style={{ color: theme.colors.text.light }}
                >
                  {char.name}
                </h2>
                {char.alias && (
                  <p
                    className="text-lg mb-3"
                    style={{ color: theme.colors.primary.pink }}
                  >
                    "{char.alias}"
                  </p>
                )}
                <div className="grid grid-cols-1 gap-3 mb-4">
                  {[
                    ["Age", char.age || "Unknown"],
                    ["Birthplace", char.birthplace || "Unknown"],
                    ["Occupation", char.occupation || "Unknown"],
                    ["Affiliation", char.affiliation || "Unknown"],
                    ...(char.relationship
                      ? [["Relationship", char.relationship]]
                      : []),
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between border-b border-gray-700 pb-2"
                    >
                      <span
                        className="font-medium"
                        style={{ color: theme.colors.text.light }}
                      >
                        {label}:
                      </span>
                      <span style={{ color: theme.colors.text.secondary }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons - Centered on mobile */}
                <div className="flex justify-center gap-3 mt-4">
                  <ActionButtons character={char} />
                </div>

                {/* Tags COMPLETELY REMOVED from mobile view */}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Square Cards View */}
      {displayViewMode === "square" && (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredCharacters.map((char) => (
            <div
              key={`square-${char.id}`}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
              style={{
                borderColor: theme.colors.border.pink,
                borderWidth: "1px",
                aspectRatio: "1/1",
              }}
            >
              <div className="h-[60%] w-full relative overflow-hidden">
                <img
                  src={getImageUrl(char)}
                  alt={char.name}
                  className="absolute h-full w-full object-cover"
                  onError={() => handleImageError(char.id)}
                />
              </div>
              <div className="h-[40%] p-2 flex flex-col">
                <h2
                  className="text-sm font-semibold text-center mb-1 truncate"
                  style={{ color: theme.colors.text.light }}
                >
                  {char.name}
                </h2>
                <div className="grid grid-cols-2 gap-x-1 gap-y-0 mb-1">
                  <p
                    className="text-[10px] xs:text-xs truncate"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    <span
                      className="font-medium"
                      style={{ color: theme.colors.text.light }}
                    >
                      Alias:
                    </span>{" "}
                    {char.alias || "N/A"}
                  </p>
                  <p
                    className="text-[10px] xs:text-xs truncate"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    <span
                      className="font-medium"
                      style={{ color: theme.colors.text.light }}
                    >
                      Age:
                    </span>{" "}
                    {char.age || "Unknown"}
                  </p>
                </div>
                <p
                  className="text-[10px] xs:text-xs truncate mb-0.5"
                  style={{ color: theme.colors.text.secondary }}
                >
                  <span
                    className="font-medium"
                    style={{ color: theme.colors.text.light }}
                  >
                    Role:
                  </span>{" "}
                  {char.occupation || "Unknown"}
                </p>

                {/* Compact Action Buttons for Square Cards */}
                <ActionButtons character={char} compact={true} />

                {/* Tags removed from square cards for mobile, but keep for desktop */}
                {!isMobile && (
                  <div className="flex flex-wrap gap-1 mt-1 justify-center">
                    {(char.tags || []).slice(0, 3).map((tag) => (
                      <span
                        key={`${char.id}-${tag}`}
                        className="text-[8px] xs:text-[10px] px-1.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: selectedTags.includes(tag)
                            ? theme.colors.primary.pink
                            : theme.colors.primary.blueLight,
                          color: theme.colors.text.dark,
                          fontWeight: theme.typography.fontWeight.medium,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredCharacters.length === 0 && (
        <div
          className="text-center py-12"
          style={{ color: theme.colors.text.secondary }}
        >
          No characters found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default Characters;
