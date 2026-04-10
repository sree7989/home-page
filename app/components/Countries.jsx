import React, { useEffect, useRef } from "react";
import countriesData from "./countriesdata";

const Countries = () => {
  const scrollRef = useRef(null);

  const loopData = [...countriesData, ...countriesData];

  useEffect(() => {
    const container = scrollRef.current;

    const slide = () => {
      if (!container) return;

      const cardWidth =
        container.children[0].offsetWidth + 30;

      container.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });

      setTimeout(() => {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft =
            container.scrollWidth / 2 - container.clientWidth;
        }
      }, 600);
    };

    const interval = setInterval(slide, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    const container = scrollRef.current;
    const cardWidth = container.children[0].offsetWidth + 30;

    container.scrollBy({
      left: -cardWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const container = scrollRef.current;
    const cardWidth = container.children[0].offsetWidth + 30;

    container.scrollBy({
      left: cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section style={styles.section}>

      {/* 🔥 HEADING ADDED */}
      <h2 style={styles.heading}>
        Choose Your Favourite <br />
        Study Destination
      </h2>

      <div style={styles.wrapper}>
        
        <button style={styles.navLeft} onClick={scrollLeft}>
          &#10094;
        </button>

        <div style={styles.container} ref={scrollRef}>
          {loopData.map((country, index) => (
            <div key={index} style={styles.card}>
              <img
                src={country.image}
                alt={country.name}
                style={styles.image}
              />

              <div style={styles.content}>
                <h3 style={styles.title}>{country.name}</h3>
                <p style={styles.desc}>{country.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button style={styles.navRight} onClick={scrollRight}>
          &#10095;
        </button>

      </div>
    </section>
  );
};

export default Countries;

/* ===== STYLES ===== */

const styles = {
  section: {
    background: "#ffffff",
    padding: "60px 40px",
  },

  /* 🔥 HEADING STYLE */
  heading: {
    fontSize: "56px",
    fontWeight: "400",
    color: "#5b2a86",
    textAlign: "center",
    lineHeight: "1.2",
    marginBottom: "50px",
    fontFamily: "'Poppins', sans-serif",
  },

  wrapper: {
    position: "relative",
    overflow: "hidden",
  },

  container: {
    display: "flex",
    gap: "30px",
    overflow: "hidden",
    paddingLeft: "15px",
    paddingRight: "15px",
    boxSizing: "border-box",
    scrollBehavior: "smooth",
  },

  card: {
    minWidth: "calc((100% - 90px) / 4)",
    background: "#ffffff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
  },

  image: {
    width: "100%",
    height: "280px",
    objectFit: "cover",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },

  content: {
    padding: "40px 25px 30px",
    textAlign: "center",
    background: "#f3f4f6",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  title: {
    fontSize: "26px",
    fontWeight: "800",   // ✅ FIXED (was 1100 ❌)
    marginBottom: "18px",
    color: "#111",
    letterSpacing: "0.5px",
  },

  desc: {
    fontSize: "17px",
    color: "#333",
    lineHeight: "2",
    fontWeight: "500",   // ✅ FIXED (800 too heavy ❌)
    maxWidth: "260px",
    margin: "0 auto",
  },

  navLeft: {
    position: "absolute",
    top: "40%",
    left: "-10px",
    zIndex: 10,
    background: "#fff",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "50%",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  },

  navRight: {
    position: "absolute",
    top: "40%",
    right: "-10px",
    zIndex: 10,
    background: "#fff",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "50%",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
  },
};