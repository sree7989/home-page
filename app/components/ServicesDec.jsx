"use client";
import React from "react";

const services = [
  {
    title: "Immigration Services",
    desc: "We offer fast-track PR and permanent residency solutions with expert support.",
    icon: "🌐",
  },
  {
    title: "Dependant Visa",
    desc: "Reunite with your family through our carefully managed dependent visa process.",
    icon: "👥",
  },
  {
    title: "Study Abroad",
    desc: "From choosing the right university to securing your student visa, we guide you through it all.",
    icon: "🎓",
  },
  {
    title: "Tourist Visa",
    desc: "With our quick and reliable tourist visa services, you can travel stress-free.",
    icon: "✈️",
  },
  {
    title: "Business Visa",
    desc: "We help business owners and investors expand globally with expert consultancy.",
    icon: "💼",
  },
  {
    title: "Other Services",
    desc: "We assist with documentation, translation, and complete visa services.",
    icon: "⚙️",
  },
];

export default function ServicesDec() {
  return (
    <section style={styles.section}>

      {/* 🔥 HEADING */}
      <h2 style={styles.heading}>
        Our Comprehensive <br />
        Immigration Services
      </h2>

      <div style={styles.grid}>
        {services.map((item, i) => (
          <div key={i} style={styles.card} className="card">

            <div style={styles.header}>
              <div style={styles.iconBox}>{item.icon}</div>
              <h3 style={styles.title}>{item.title}</h3>
            </div>

            <p style={styles.desc}>{item.desc}</p>

            <div style={styles.arrowBox} className="arrow">→</div>

          </div>
        ))}
      </div>

      {/* 🔥 HOVER STYLES */}
      <style jsx>{`
        .card {
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }

        .card:hover .arrow {
          transform: translateX(5px);
        }

        .arrow {
          transition: all 0.3s ease;
        }
      `}</style>

    </section>
  );
}

/* ===== STYLES ===== */

const styles = {
  section: {
    background: "#e9eff5",
    padding:"40px 40px 60px 40px",
  },

  heading: {
    fontSize: "52px",
    fontWeight: "400",
    color: "#5b2a86",
    textAlign: "center",
    lineHeight: "1.2",
    marginBottom: "60px",
    fontFamily: "'Poppins', sans-serif",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px",
  },

  card: {
    background: "#ffffff", // 🔥 CHANGED (premium look)
    borderRadius: "12px",
    padding: "35px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    position: "relative",
    minHeight: "260px",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    marginBottom: "20px",
  },

  iconBox: {
    background: "#c1121f",
    color: "#fff",
    width: "55px",
    height: "55px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    fontSize: "24px",
  },

  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#222",
  },

  desc: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.8",
    marginTop: "10px",
  },

  arrowBox: {
    position: "absolute",
    bottom: "25px",
    right: "25px",
    border: "2px solid #c1121f",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#c1121f",
    fontSize: "18px",
    cursor: "pointer",
  },
};