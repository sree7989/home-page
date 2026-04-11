"use client";
import React from "react";
// ❌ Icons removed

export default function WhyChoose() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>

        {/* LEFT */}
        <div>
          <p style={styles.topText}>
            WHY CHOOSE VJC OVERSEAS?
          </p>

          <h2 style={styles.heading}>
            Professional Guidance For <br />
            Global Opportunities
          </h2>

          <p style={styles.desc}>
            VJC Overseas delivers trusted and result-driven visa consultancy services.
            With strong expertise and a proven success record, we help individuals
            achieve their dream of studying, working, or settling abroad.
          </p>

          <div style={styles.features}>

            <div style={styles.feature}>
              {/* ✅ Image added */}
              <img
                src="/images/expertise.png"
                alt="expertise"
                style={styles.iconImage}
              />

              <div>
                <h4 style={styles.featureTitle}>Professional Expertise</h4>
                <p style={styles.featureDesc}>
                  Over a decade of experience in visa services.
                </p>
              </div>
            </div>

            <div style={styles.feature}>
              {/* ✅ Image added */}
              <img
                src="/images/success.png"
                alt="success"
                style={styles.iconImage}
              />

              <div>
                <h4 style={styles.featureTitle}>High Success Rate</h4>
                <p style={styles.featureDesc}>
                  Thousands trust us as the best visa consultants.
                </p>
              </div>
            </div>

            <div style={styles.feature}>
              {/* ✅ Image added */}
              <img
                src="/images/service.png"
                alt="support"
                style={styles.iconImage}
              />

              <div>
                <h4 style={styles.featureTitle}>Personalized Support</h4>
                <p style={styles.featureDesc}>
                  Dedicated guidance from start to finish.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <div style={styles.imageWrapper}>

            {/* ✈️ Flight Path */}
            <svg style={styles.flightPath} viewBox="0 0 220 220">
              <path
                d="M42 52 C58 88, 88 120, 132 155 C150 170, 166 182, 178 198"
                stroke="#d6d6d6"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="7,9"
                strokeLinecap="round"
              />

              <text
                x="42"
                y="52"
                fontSize="40"
                fill="#bfbfbf"
                transform="rotate(-90 34 48)"
              >
                ✈
              </text>
            </svg>

            <img
              src="/images/vjc-team.jpg"
              alt="team"
              style={styles.image}
            />

          </div>
        </div>

      </div>
    </section>
  );
}

/* ===== STYLES ===== */

const styles = {
  section: {
    background: "#fff",
    padding: "55px 90px",
  },

  container: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: "50px",
    alignItems: "center",
  },

  topText: {
    color: "#c1121f",
    fontSize: "17px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  heading: {
    fontSize: "42px",
    fontWeight: "900",
    color: "#1f3c73",
    lineHeight: "1.25",
    marginBottom: "18px",
  },

  desc: {
    fontSize: "20px",
    fontWeight: "500",
    color: "#444",
    lineHeight: "1.75",
    marginBottom: "26px",
    maxWidth: "540px",
  },

  features: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },

  feature: {
    display: "flex",
    gap: "16px",
    alignItems: "flex-start",
  },

  iconImage: {
    width: "40px",
    height: "40px",
    objectFit: "contain",
    marginTop: "4px",
    flexShrink: 0,
  },

  featureTitle: {
    fontSize: "22px",
    fontWeight: "800",
    color: "#1f3c73",
    marginBottom: "6px",
  },

  featureDesc: {
    fontSize: "20px",
    color: "#333",
    lineHeight: "1.65",
  },

  right: {
    display: "flex",
    justifyContent: "flex-end",
  },

  imageWrapper: {
    position: "relative",
    display: "inline-block",
  },

  flightPath: {
    position: "absolute",
    right: "300px",
    top: "90px",
    width: "205px",
    height: "220px",
    pointerEvents: "none",
    overflow: "visible",
    zIndex: 2,
  },

  image: {
    width: "370px",
    height: "470px",
    objectFit: "cover",
    borderRadius: "8px",
    display: "block",
  },
};