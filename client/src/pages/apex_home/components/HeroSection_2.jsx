import React from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Enhanced Apex theme colors with fallbacks
const apexTheme = {
  primary: {
    pink: "#EC4899",
    blue: "#3B82F6",
    purple: "#9333ea",
    teal: "#0d9488",
  },
  secondary: {
    green: "#16a34a",
    orange: "#ea580c",
    indigo: "#4f46e5",
  },
  background: {
    dark: "#0f172a", // Dark blue-gray
    darker: "#020617", // Almost black
    gradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
  },
  text: {
    light: "#f8fafc", // Very light gray
    lighter: "#ffffff",
    secondary: "#94a3b8", // Light gray-blue
  },
  border: {
    glow: `0 0 10px rgba(236, 72, 153, 0.5)`,
  },
};

const HeroSection_2 = () => {
  const theme = useTheme();

  // Enhanced theme color getter with Apex defaults
  const getColor = (path) => {
    try {
      const themeColor = path
        .split(".")
        .reduce((obj, key) => obj?.[key], theme);
      return (
        themeColor || path.split(".").reduce((obj, key) => obj[key], apexTheme)
      );
    } catch {
      return path.split(".").reduce((obj, key) => obj[key], apexTheme);
    }
  };

  // Modern slider settings with responsive breakpoints
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          fade: false,
        },
      },
    ],
  };

  // Enhanced slides with Apex theme colors
  const slides = [
    {
      id: 1,
      title: "Apex Universe Comic",
      subtitle: "India's First Web Comic Universe",
      description:
        "Immerse yourself in a multiverse of interconnected stories and characters",
      color: getColor("primary.pink"),
      bgImage:
        "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.9) 100%)",
      buttonText: "Explore Universe",
      buttonVariant: "contained",
      icon: "🌌",
    },
    {
      id: 2,
      title: "1500+ Characters",
      subtitle: "Diverse and Unique Personalities",
      description:
        "From cosmic warriors to street-level heroes, discover characters for every reader",
      color: getColor("primary.blue"),
      bgImage:
        "linear-gradient(135deg, rgba(2,6,23,0.9) 0%, rgba(15,23,42,0.9) 100%)",
      buttonText: "Meet Characters",
      buttonVariant: "outlined",
      icon: "🦸",
    },
    {
      id: 3,
      title: "Epic Storytelling",
      subtitle: "Across Multiple Dimensions",
      description:
        "Experience narratives that span time, space, and alternate realities",
      color: getColor("secondary.green"),
      bgImage:
        "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.9) 100%)",
      buttonText: "Read Stories",
      buttonVariant: "contained",
      icon: "📖",
    },
    {
      id: 4,
      title: "Immersive Art",
      subtitle: "Cutting Edge Visual Style",
      description: "Vibrant artwork that brings the Apex Universe to life",
      color: getColor("secondary.indigo"),
      bgImage:
        "linear-gradient(135deg, rgba(2,6,23,0.9) 0%, rgba(15,23,42,0.9) 100%)",
      buttonText: "View Gallery",
      buttonVariant: "outlined",
      icon: "🎨",
    },
    {
      id: 5,
      title: "Community Driven",
      subtitle: "Join the Apex Collective",
      description:
        "Your feedback shapes the universe. Become part of the creative process!",
      color: getColor("primary.teal"),
      bgImage:
        "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(30,41,59,0.9) 100%)",
      buttonText: "Join Now",
      buttonVariant: "contained",
      icon: "👥",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: { xs: 0, md: "1rem" },
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        mx: { xs: 0, md: 4 },
        my: { xs: 0, md: 4 },
        border: "1px solid",
        borderColor: getColor("background.darker"),
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background: getColor("background.gradient"),
          zIndex: -1,
        },
        "& .slick-dots": {
          bottom: { xs: "1rem", md: "2rem" },
          "& li": {
            margin: "0 4px",
            "& button:before": {
              fontSize: "0.75rem",
              color: getColor("text.secondary"),
              opacity: 0.6,
              transition: "all 0.3s ease",
            },
            "&.slick-active button:before": {
              color: getColor("primary.pink"),
              opacity: 1,
              transform: "scale(1.2)",
            },
          },
        },
        "& .slick-slide": {
          transition: "all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)",
        },
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 20% 30%, ${getColor("primary.pink")}20 0%, transparent 40%)`,
            opacity: 0.3,
          },
        }}
      >
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${getColor("primary.blue")}20 0%, transparent 70%)`,
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(40px)",
              opacity: 0.1,
              animation: "float 15s infinite alternate",
              animationDelay: `${i * 3}s`,
              "@keyframes float": {
                "0%": { transform: "translate(0, 0)" },
                "100%": {
                  transform: `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`,
                },
              },
            }}
          />
        ))}
      </Box>

      <Slider {...sliderSettings}>
        {slides.map((slide) => (
          <Box
            key={slide.id}
            sx={{
              position: "relative",
              textAlign: "center",
              p: { xs: 3, sm: 4, md: 6, lg: 8 },
              minHeight: { xs: "80vh", sm: "500px", md: "600px" },
              display: "flex!important",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: slide.bgImage,
              "&:after": {
                content: '""',
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at 70% 30%, ${slide.color}10 0%, transparent 50%)`,
                zIndex: 0,
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                maxWidth: "800px",
                mx: "auto",
                px: { xs: 1, sm: 2 },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "2.5rem",
                    sm: "3rem",
                    md: "4rem",
                    lg: "4.5rem",
                  },
                  fontWeight: 800,
                  mb: 2,
                  lineHeight: 1.1,
                  color: slide.color,
                  textShadow: `0 2px 10px rgba(0,0,0,0.5)`,
                  letterSpacing: "0.03em",
                  "&:before": {
                    content: `"${slide.icon}"`,
                    display: "block",
                    fontSize: "3rem",
                    mb: 2,
                  },
                }}
              >
                {slide.title}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                  fontWeight: 600,
                  mb: 3,
                  color: getColor("text.light"),
                  textShadow: "0 1px 3px rgba(0,0,0,0.5)",
                  lineHeight: 1.3,
                }}
              >
                {slide.subtitle}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                  mb: 4,
                  color: getColor("text.light"),
                  maxWidth: "600px",
                  mx: "auto",
                  lineHeight: 1.6,
                  opacity: 0.9,
                }}
              >
                {slide.description}
              </Typography>

              <Button
                variant={slide.buttonVariant}
                href="#"
                sx={{
                  px: { xs: 3, md: 4 },
                  py: { xs: 1.25, md: 1.5 },
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  fontWeight: 700,
                  borderRadius: "9999px",
                  color:
                    slide.buttonVariant === "contained"
                      ? getColor("text.lighter")
                      : slide.color,
                  backgroundColor:
                    slide.buttonVariant === "contained"
                      ? slide.color
                      : "transparent",
                  border: `2px solid ${slide.color}`,
                  textTransform: "none",
                  letterSpacing: "0.05em",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: `0 5px 20px ${slide.color}80`,
                    backgroundColor:
                      slide.buttonVariant === "contained"
                        ? `${slide.color}e6`
                        : `${slide.color}10`,
                    borderColor: `${slide.color}`,
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                {slide.buttonText}
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection_2;
