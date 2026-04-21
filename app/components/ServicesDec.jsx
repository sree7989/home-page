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
      <div style={styles.container} className="container">

        {/* TOP */}
        <div style={styles.topRow} className="topRow">

          <div>
            <p style={styles.subHeading}>DREAM COUNTRIES</p>

            <h2 style={styles.heading}>
              Expert Services Tailored To <br />
              Your Immigration Needs
            </h2>
          </div>

        <div style={styles.rightText} className="rightText">
  Recognized widely as the best visa agent for countries such as Canada,
  Australia, the USA, the UK, Germany, and more.  

  We have helped thousands of clients successfully achieve their global dreams
  with expert guidance and personalized support at every step.  

</div>
        </div>

        {/* GRID */}
        <div style={styles.grid} className="grid">
          {countries.map((country, i) => (
            <div key={i} style={styles.card} className="card">

              <div style={styles.flagWrap}>
                <img
                  src={country.flag}
                  style={{
                    ...styles.flag,
                    transform:
                      country.name === "Germany"
                        ? "scale(1.95)"
                        : "scale(1.65)",
                  }}
                />
              </div>

              <h3 style={styles.countryName}>{country.name}</h3>

              <ul style={styles.list}>
                {country.items.map((item, idx) => (
                  <li key={idx} style={styles.listItem}>
                    <span style={styles.tick}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* BUTTON */}
      <div className="btnWrap">
  <button
    onClick={() => {
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }}
    className="ctaBtn"
  >
    Talk to an Expert →
  </button>
</div>

      </div>

      {/* ✅ RESPONSIVE CSS */}
      <style jsx>{`

        /* TABLET */
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .topRow {
            flex-direction: column !important;
            gap: 20px !important;
          }

          .rightText {
            max-width: 100% !important;
            font-size: 16px !important;
          }

          .grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          .card {
            padding: 20px !important;
          }

          h2 {
            font-size: 26px !important;
            line-height: 1.3 !important;
          }

          .btnWrap {
            margin-top: 30px !important;
          }

          .ctaBtn {
            width: 100% !important;
            padding: 14px !important;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px) {
          section {
            padding: 10px !important;
          }

          h2 {
            font-size: 22px !important;
          }
        }

        /* HOVER */
        .card {
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }

        .btnWrap {
          text-align: center;
          margin-top: 50px;
        }

        .ctaBtn {
          padding: 14px 32px;
          border-radius: 50px;
          border: none;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          background: linear-gradient(to right, #ff7a18, #2563eb);
        }

      `}</style>
    </section>
  );
}

/* STYLES (UNCHANGED DESKTOP) */

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
    gap: "60px",
    marginBottom: "70px",
  },

  subHeading: {
    color: "#c1121f",
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "2px",
  },

  heading: {
    color: "#1d3557",
    fontSize: "44px",
    fontWeight: "700",
  },

  rightText: {
    maxWidth: "560px",
    fontSize: "20px",
    color: "#555",
    lineHeight: "1.9",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)", // ✅ desktop same
    gap: "25px",
  },

  card: {
    background: "#fff",
    borderRadius: "10px",
    padding: "30px 20px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },

  flagWrap: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    overflow: "hidden",
    margin: "0 auto 20px",
  },

  flag: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  countryName: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "15px",
  },

  list: {
    listStyle: "none",
    padding: 0,
  },

  listItem: {
    fontSize: "16px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  tick: {
    backgroundColor: "#16a34a",
    color: "#fff",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};