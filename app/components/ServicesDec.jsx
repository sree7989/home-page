"use client";
import React from "react";

const countries = [
  {
    name: "Canada",
    flag: "/flags/canada.png",
    items: [
      "PR Visa - Express Entry",
      "PR Visa - PNP",
      "Student Visa",
      "Open Work Permit",
      "Spouse Visa",
      "Visitor Visa",
    ],
  },
  {
    name: "Australia",
    flag: "/flags/australia.png",
    items: [
      "PR Visa - Express Entry",
      "PR Visa - PNP",
      "Student Visa",
      "Open Work Permit",
      "Spouse Visa",
      "Visitor Visa",
    ],
  },
  {
    name: "Germany",
    flag: "/flags/germany.png",
    items: [
      "Opportunity Card",
      "Blue Card Visa",
      "Employment Visa",
      "Student Visa",
      "Family Reunion Visa",
      "Visitor Visa",
    ],
  },
  {
    name: "USA",
    flag: "/flags/usa.png",
    items: [
      "Work Visa – H1B",
      "Study Visa - F1, J1, M1",
      "Dependent Visa",
      "B1/B2 Visa",
      "L1 Visa",
      "Finance Visa",
    ],
  },
  {
    name: "UK",
    flag: "/flags/uk.png",
    items: [
      "Skilled Worker Visa",
      "Student Visa – Tier 4",
      "Visitor Visa",
      "Spouse Visa",
      "Business Visa",
      "Finance Visa",
    ],
  },
];

export default function ServicesDec() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>

        {/* 🔥 TOP SECTION */}
        <div style={styles.topRow}>
          
          {/* LEFT */}
          <div>
            <p style={styles.subHeading}>DREAM COUNTRIES</p>

            <h2 style={styles.heading}>
              Expert Services Tailored To <br />
              Your Immigration Needs
            </h2>
          </div>

          {/* RIGHT */}
          <div style={styles.rightText}>
            Recognized widely as the best visa agent for countries such as Canada,
            Australia, the USA, the UK, Germany, and more. Whether you are applying
            for a student visa or permanent residency, our visa consultancy services
            are always up-to-date with evolving immigration policies.
          </div>

        </div>

        {/* 🔥 COUNTRY CARDS */}
        <div style={styles.grid}>
          {countries.map((country, i) => (
            <div key={i} style={styles.card} className="card">

              <div style={styles.flagWrap}>
                <img
  src={country.flag}
  style={{
    ...styles.flag,
    transform:
      country.name === "Germany"
        ? "scale(1.95)"   // 🔥 Germany ki
        : "scale(1.65)",  // others ki
  }}
/>
              </div>

              <h3 style={styles.countryName}>{country.name}</h3>

              <ul style={styles.list}>
                {country.items.map((item, idx) => (
                  <li key={idx} style={styles.listItem}>
                    <span style={styles.tick}>
  ✓
</span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
  <button
    onClick={() => {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        document.querySelector("#contact-form input")?.focus();
      }, 500);
    }}
    style={{
      padding: "14px 32px",
      border: "none",
      borderRadius: "50px",
      color: "#fff",
      fontWeight: "600",
      cursor: "pointer",
      background: "linear-gradient(to right, #ff7a18, #2563eb)",
      transition: "0.3s",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(to right, #2563eb, #ff7a18)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.background =
        "linear-gradient(to right, #ff7a18, #2563eb)")
    }
  >
    Talk to an Expert →
  </button>
</div>

      </div>

      {/* HOVER */}
      <style jsx>{`
        .card {
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }
      `}</style>
    </section>
  );
}

/* 🔥 STYLES */

const styles = {
 section: {
  background: "#eef1f5",
  padding: "15px 0 40px",
  marginTop: "-70px",
},

  container: {
    maxWidth: "1250px",
    margin: "0 auto",
    padding: "0 20px",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "60px",
    marginBottom: "70px",
  },

  subHeading: {
    color: "#c1121f",
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "2px",
    marginBottom: "10px",
  },

  heading: {
    color: "#1d3557",
    fontSize: "44px",
    fontWeight: "700",
    lineHeight: "1.2",
  },

  rightText: {
    maxWidth: "560px",
    fontSize: "20px",
    color: "#555",
    lineHeight: "1.9",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "25px",
  },

  card: {
    background: "#ffffff",
    borderRadius: "10px",
    padding: "30px 20px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
flagWrap: {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  overflow: "hidden",      // 👈 IMPORTANT (cuts extra)
  margin: "0 auto 20px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
},

 flag: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transform: "scale(1.25)", // 👈 FINAL FIX
},

  countryName: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#1d3557",
    marginBottom: "15px",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    textAlign: "left",
  },
listItem: {
  fontSize: "16.5px",        // normal size
  color: "#444",           // normal text (not dark, not dull)
  marginBottom: "12px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontWeight: "400",       // 👈 NORMAL (not bold)
  lineHeight: "1.5",
},

  tick: {
  backgroundColor: "#16a34a",
  color: "#fff",
  width: "22px",
  height: "22px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "13px",
  fontWeight: "bold",
  flexShrink: 0,
},
};