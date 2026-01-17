import { useState, useEffect } from "react";

const sliderTexts = [
  {
    title: "🔥 Samar Chakrawarti: Scientist. Sorcerer. Sovereign.",
    subtitle: "He bends quantum realms like strings of a violin.",
  },
  {
    title: "💫 Shivangi Sharma: Beauty meets Brilliance.",
    subtitle: "Her words charm hearts, her mind breaks dimensions.",
  },
  {
    title: "⚔️ Destiny collides in love, betrayal, and cosmic war.",
    subtitle: "A tale scripted in equations and poetry.",
  },
];

const HeroSection_1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderTexts.length);
    }, 4000); // every 4s

    return () => clearInterval(timer);
  }, []);

  const { title, subtitle } = sliderTexts[currentIndex];

  return (
    <section className="w-full bg-gradient-to-br from-black via-gray-900 to-black min-h-[60vh] flex flex-col justify-center items-center text-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-blue-500/10 to-purple-500/5 blur-2xl opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 transition-all duration-500">
          {title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 tracking-wide font-mono transition-opacity duration-500">
          {subtitle}
        </p>
      </div>

      <div className="mt-10 flex space-x-2">
        {sliderTexts.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full transition-all ${
              idx === currentIndex ? "bg-pink-400 scale-125" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection_1;
