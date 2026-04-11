"use client";
import React from "react";

const services = [
  {
    title: "Immigration Services",
    desc: "We offer fast-track PR and permanent residency solutions with expert support.",
    icon: "/icons/immigration.png",
  },
  {
    title: "Dependant Visa",
    desc: "Reunite with your family through our carefully managed dependent visa process.",
    icon: "/icons/dependant.png",
  },
  {
    title: "Study Abroad",
    desc: "From choosing the right university to securing your student visa, we guide you through it all.",
    icon: "/icons/study.png",
  },
  {
    title: "Tourist Visa",
    desc: "With our quick and reliable tourist visa services, you can travel stress-free.",
    icon: "/icons/tourist.png",
  },
  {
    title: "Business Visa",
    desc: "We help business owners and investors expand globally with expert consultancy.",
    icon: "/icons/business.png",
  },
  {
    title: "Other Services",
    desc: "We assist with documentation, translation, and complete visa services.",
    icon: "/icons/other.png",
  },
];

export default function ServicesDec() {
  return (
    <section style={styles.section}>

      {/* 🔥 TOP HEADER ROW */}
      <div style={styles.topRow}>
        
        {/* LEFT SIDE */}
        <div>
          <p style={styles.subHeading}>OUR SERVICES</p>

          <h2 style={styles.heading}>
            Our Comprehensive <br />
            Immigration Services
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div style={styles.rightText}>
         VJC Overseas offers trusted and efficient visa consultancy services,
          making us the best visa agent in India. We cater to students, families, tourists,
          and business professionals with personalized guidance for every visa types.
        </div>

      </div>

      <div style={styles.grid}>
        {services.map((item, i) => (
          <div key={i} style={styles.card} className="card">

            <div style={styles.header}>
              
              {/* 🔥 ICON WITHOUT BOX */}
              <img src={item.icon} alt={item.title} style={styles.iconImg} />

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
    background: "#eef3f8",
    padding:"40px 80px 60px 100px",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems:"flex-start",
    marginBottom: "60px",
    gap: "40px",
  },

  subHeading: {
    color: "#f77f00",
    fontSize: "18px",
    letterSpacing: "2px",
    fontWeight: "600",
    paddingLeft: "140px",
  },

  heading: {
    fontSize: "52px",
    fontWeight: "400",
    color: "#5b2a86",
    lineHeight: "1.2",
    fontFamily: "'Poppins', sans-serif",
  },

 rightText: {
  maxWidth: "480px",
  fontSize: "20px",
  color: "#666",
  lineHeight: "1.9",
},

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px",
  },

  card: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "35px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    position: "relative",
    minHeight: "260px",
     borderTop: "3px solid #c1121f",
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    marginBottom: "20px",
  },

  /* 🔥 ONLY ICON SIZE */
  iconImg: {
    width: "55px",
    height: "55px",
    objectFit: "contain",
    marginTop: "5px",
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