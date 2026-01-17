import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import characters from "../../../data/CharacterData/characterdata.js";
import theme from "../../../config/theme.js";

const CharacterDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [shareNotification, setShareNotification] = useState(false);

  useEffect(() => {
    const foundCharacter = characters.find(
      (char) => char.slug === slug || char.id.toString() === slug,
    );

    if (foundCharacter) {
      setCharacter(foundCharacter);
    } else {
      // Redirect to characters list if not found
      navigate("/characters");
    }
    window.scrollTo(0, 0); // Scroll to the top on page load
    setLoading(false);
  }, [slug, navigate]);

  const handleShare = async () => {
    const shareUrl = window.location.href;
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
        setShareNotification(true);
        setTimeout(() => setShareNotification(false), 3000);
      } catch (err) {
        console.log("Failed to copy: ", err);
        alert(`Share this character: ${shareUrl}`);
      }
    } else {
      alert(`Share this character: ${shareUrl}`);
    }
  };

  const getRelatedCharacters = () => {
    if (!character) return [];

    const related = [];
    character.relations?.forEach((relation) => {
      const relatedChar = characters.find(
        (char) =>
          char.name.includes(relation.name.split(" ")[0]) ||
          relation.name.includes(char.name.split(" ")[0]),
      );
      if (relatedChar && relatedChar.id !== character.id) {
        related.push({
          ...relatedChar,
          relationType: relation.relation,
        });
      }
    });

    return related.slice(0, 4); // Limit to 4 related characters
  };

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: theme.colors.background.dark }}
      >
        <div className="text-white text-xl">Loading character...</div>
      </div>
    );
  }

  if (!character) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: theme.colors.background.dark }}
      >
        <div className="text-white text-xl text-center">
          <p>Character not found</p>
          <Link
            to="/characters"
            className="mt-4 inline-block px-6 py-2 rounded-lg"
            style={{
              backgroundColor: theme.colors.primary.pink,
              color: theme.colors.text.dark,
            }}
          >
            Back to Characters
          </Link>
        </div>
      </div>
    );
  }

  const relatedCharacters = getRelatedCharacters();

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: theme.colors.background.dark }}
    >
      {/* Share Notification */}
      {shareNotification && (
        <div
          className="fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg animate-fade-in"
          style={{
            backgroundColor: theme.colors.primary.green,
            color: theme.colors.text.dark,
          }}
        >
          ✓ Link copied to clipboard!
        </div>
      )}

      {/* Header Navigation */}
      <div
        className="p-4 border-b"
        style={{ borderColor: theme.colors.border.pink }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/characters"
            className="flex items-center gap-2 text-lg font-semibold hover:opacity-80 transition"
            style={{ color: theme.colors.text.light }}
          >
            ← Back to Characters
          </Link>

          <div className="flex gap-3">
            <button
              onClick={handleShare}
              className="px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105"
              style={{
                backgroundColor: theme.colors.primary.blueLight,
                color: theme.colors.text.dark,
                border: `2px solid ${theme.colors.border.blue}`,
              }}
            >
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Character Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <img
                src={character.image}
                alt={character.name}
                className="w-full max-w-md rounded-2xl shadow-2xl"
                style={{
                  border: `4px solid ${theme.colors.primary.pink}`,
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/fallback-character-image.jpg";
                }}
              />
            </div>
          </div>

          {/* Character Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1
                className="text-5xl font-bold mb-2"
                style={{ color: theme.colors.text.light }}
              >
                {character.name}
              </h1>
              {character.alias && (
                <p
                  className="text-xl mb-4"
                  style={{ color: theme.colors.primary.pink }}
                >
                  "{character.alias}"
                </p>
              )}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {character.age && (
                <div className="p-4 rounded-lg bg-gray-800">
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    Age
                  </p>
                  <p
                    className="text-lg font-semibold"
                    style={{ color: theme.colors.text.light }}
                  >
                    {character.age}
                  </p>
                </div>
              )}
              {character.birthplace && (
                <div className="p-4 rounded-lg bg-gray-800">
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    Birthplace
                  </p>
                  <p
                    className="text-lg font-semibold"
                    style={{ color: theme.colors.text.light }}
                  >
                    {character.birthplace}
                  </p>
                </div>
              )}
              {character.occupation && (
                <div className="p-4 rounded-lg bg-gray-800">
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    Occupation
                  </p>
                  <p
                    className="text-lg font-semibold"
                    style={{ color: theme.colors.text.light }}
                  >
                    {character.occupation}
                  </p>
                </div>
              )}
              {character.affiliation && (
                <div className="p-4 rounded-lg bg-gray-800">
                  <p
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    Affiliation
                  </p>
                  <p
                    className="text-lg font-semibold"
                    style={{ color: theme.colors.text.light }}
                  >
                    {character.affiliation}
                  </p>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {character.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: theme.colors.primary.blueLight,
                    color: theme.colors.text.dark,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div
          className="border-b mb-6"
          style={{ borderColor: theme.colors.border.blue }}
        >
          <nav className="flex space-x-8">
            {["overview", "biography", "relations", "gallery"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition ${
                  activeTab === tab
                    ? "border-pink-500"
                    : "border-transparent hover:border-gray-400"
                }`}
                style={{
                  color:
                    activeTab === tab
                      ? theme.colors.primary.pink
                      : theme.colors.text.secondary,
                  borderColor:
                    activeTab === tab
                      ? theme.colors.primary.pink
                      : "transparent",
                }}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: theme.colors.text.light }}
                >
                  {character.bio}
                </p>
              </div>

              {/* Key Facts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl bg-gray-800">
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: theme.colors.text.light }}
                  >
                    Character Details
                  </h3>
                  <div className="space-y-3">
                    {character.createdBy && (
                      <div className="flex justify-between">
                        <span style={{ color: theme.colors.text.secondary }}>
                          Created By:
                        </span>
                        <span style={{ color: theme.colors.text.light }}>
                          {character.createdBy}
                        </span>
                      </div>
                    )}
                    {character.species && (
                      <div className="flex justify-between">
                        <span style={{ color: theme.colors.text.secondary }}>
                          Species:
                        </span>
                        <span style={{ color: theme.colors.text.light }}>
                          {character.species}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {character.relations && character.relations.length > 0 && (
                  <div className="p-6 rounded-xl bg-gray-800">
                    <h3
                      className="text-xl font-semibold mb-4"
                      style={{ color: theme.colors.text.light }}
                    >
                      Key Relationships
                    </h3>
                    <div className="space-y-2">
                      {character.relations
                        .slice(0, 3)
                        .map((relation, index) => (
                          <div key={index} className="flex justify-between">
                            <span
                              style={{ color: theme.colors.text.secondary }}
                            >
                              {relation.name}:
                            </span>
                            <span style={{ color: theme.colors.text.light }}>
                              {relation.relation}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Biography Tab */}
          {activeTab === "biography" && (
            <div className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <div
                  className="text-lg leading-relaxed"
                  style={{ color: theme.colors.text.light }}
                >
                  {character.bio.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Additional Biography Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl bg-gray-800">
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: theme.colors.primary.pink }}
                  >
                    Background
                  </h3>
                  <p style={{ color: theme.colors.text.light }}>
                    {character.bio.split(".")[0]}.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-gray-800">
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: theme.colors.primary.pink }}
                  >
                    Significance
                  </h3>
                  <p style={{ color: theme.colors.text.light }}>
                    {character.bio.split(".").slice(-2).join(".")}.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Relations Tab */}
          {activeTab === "relations" && (
            <div className="space-y-6">
              {character.relations && character.relations.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {character.relations.map((relation, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
                    >
                      <h3
                        className="text-xl font-semibold mb-2"
                        style={{ color: theme.colors.text.light }}
                      >
                        {relation.name}
                      </h3>
                      <p
                        className="mb-4"
                        style={{ color: theme.colors.text.secondary }}
                      >
                        {relation.relation}
                      </p>
                      <button
                        onClick={() => {
                          const relatedChar = characters.find(
                            (char) =>
                              char.name.includes(relation.name.split(" ")[0]) ||
                              relation.name.includes(char.name.split(" ")[0]),
                          );
                          if (relatedChar) {
                            navigate(
                              `/character/${relatedChar.slug || relatedChar.id}`,
                            );
                          }
                        }}
                        className="text-sm px-4 py-2 rounded-lg transition hover:scale-105"
                        style={{
                          backgroundColor: theme.colors.primary.pink,
                          color: theme.colors.text.dark,
                        }}
                      >
                        View Character
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className="text-center py-8"
                  style={{ color: theme.colors.text.secondary }}
                >
                  No relationship data available for this character.
                </div>
              )}

              {/* Related Characters Grid */}
              {relatedCharacters.length > 0 && (
                <div className="mt-12">
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{ color: theme.colors.text.light }}
                  >
                    Related Characters
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {relatedCharacters.map((relatedChar) => (
                      <div
                        key={relatedChar.id}
                        className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition cursor-pointer"
                        onClick={() =>
                          navigate(
                            `/character/${relatedChar.slug || relatedChar.id}`,
                          )
                        }
                      >
                        <img
                          src={relatedChar.image}
                          alt={relatedChar.name}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/fallback-character-image.jpg";
                          }}
                        />
                        <h3
                          className="font-semibold mb-1"
                          style={{ color: theme.colors.text.light }}
                        >
                          {relatedChar.name}
                        </h3>
                        <p
                          className="text-sm"
                          style={{ color: theme.colors.text.secondary }}
                        >
                          {relatedChar.relationType}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              <div
                className="text-center py-8"
                style={{ color: theme.colors.text.secondary }}
              >
                <p className="text-lg mb-4">Character gallery coming soon!</p>
                <p>
                  Additional images, concept art, and media will be available
                  here.
                </p>
              </div>

              {/* Placeholder for future gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center"
                  >
                    <span style={{ color: theme.colors.text.secondary }}>
                      Image {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
