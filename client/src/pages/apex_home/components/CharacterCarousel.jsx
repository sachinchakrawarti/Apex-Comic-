import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import characters from "../../../data/CharacterData/characterdata.js";
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";

export default function CharacterCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const theme = useTheme();

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="relative px-4 sm:px-8 lg:px-20 py-8 bg-gradient-to-b from-gray-900 to-gray-800 h-fit">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Meet the Characters
        </h2>

        <div className="relative group">
          {/* Navigation Buttons - Add these before Swiper */}
          <button
            ref={prevRef}
            className="custom-nav-arrow absolute left-0 top-1/2 z-10 transform -translate-y-1/2 -translate-x-4"
          >
            &lt;
          </button>
          
          <button
            ref={nextRef}
            className="custom-nav-arrow absolute right-0 top-1/2 z-10 transform -translate-y-1/2 translate-x-4"
          >
            &gt;
          </button>

          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            onInit={(swiper) => {
              // Override prevEl & nextEl after init
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {characters.map((character, index) => (
              <SwiperSlide key={index} className="pb-12">
                <div className="h-full flex flex-col rounded-xl overflow-hidden shadow-2xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-pink-500/30">
                  <div className="relative h-[400px] overflow-hidden">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-full h-[130%] object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-4 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-1">{character.name}</h3>
                    <p className="text-sm text-pink-400 italic mb-3">{character.alias}</p>
                    <p className="text-gray-300 text-sm mb-6 line-clamp-3">{character.bio}</p>
                    <Link to={`/character/${character.id}`}>
                      <button className="w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-lg py-3 px-6 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                        View Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* View All Button */}
          <div>
            <Box sx={{ mt: -1, textAlign: 'center' }}>
              <Link to="/characters" style={{ textDecoration: 'none' }}>
                <Button variant="contained" sx={{ background: 'linear-gradient(to right, #9333ea, #EC4899)', '&:hover': { background: 'linear-gradient(to right, #a743f0, #f05da3)' }, color: 'white', py: 1.5, px: 4, borderRadius: 2, fontWeight: 600, transition: 'all 0.3s ease', boxShadow: `0 4px 15px ${theme.palette.primary.purple}40` }}>
                  View All Characters
                </Button>
              </Link>
            </Box>
          </div>

          {/* Styles */}
          <style jsx global>{`
            .swiper-pagination {
              position: relative;
              display: flex;
              justify-content: center;
              margin-top: 2rem;
            }

            .custom-nav-arrow {
              width: 48px;
              height: 48px;
              border-radius: 9999px;
              background: rgba(30, 41, 59, 0.8);
              border: 2px solid rgba(236, 72, 153, 0.5);
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.3s ease;
              cursor: pointer;
              backdrop-filter: blur(4px);
            }

            .custom-nav-arrow:hover {
              background: rgba(236, 72, 153, 0.8);
              transform: scale(1.1);
            }

            @media (max-width: 640px) {
              .custom-nav-arrow {
                width: 40px;
                height: 40px;
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}