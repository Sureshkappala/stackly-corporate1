import React from "react";

import servicesImage from "./images/services.jpg";
import uxImage from "./images/ux.jpg";
import reactImage from "./images/react.jpg";
import corporateImage from "./images/corporate.jpg";

function Navbar() {
  return (
    <div>

      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>STACKLY</div>

        <ul style={styles.menu}>
          <li style={styles.menuItem}>Home</li>
          <li style={styles.menuItem}>About</li>
          <li style={styles.menuItem}>Services</li>
          <li style={styles.menuItem}>Contact</li>
        </ul>
      </nav>

      {/* Home Section */}
      <section style={styles.section}>
        <div style={styles.textSection}>
          <h1>Welcome to Stackly</h1>

          <p>
            Stackly provides modern software solutions
            for startups and enterprises.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section style={styles.sectionLight}>
        <div style={styles.textSection}>
          <h1>About Us</h1>

          <p>
            We specialize in creating scalable web
            applications and digital experiences.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section style={styles.section}>
        <div style={styles.textSection}>
          <h1>Our Services</h1>

          <p>• Web Development</p>
          <p>• UI/UX Design</p>
          <p>• React Development</p>
          <p>• Corporate IT Solutions</p>
        </div>

        <img
          src={servicesImage}
          alt="services"
          style={styles.image}
        />
      </section>

      {/* UX Section */}
      <section style={styles.sectionLight}>
        <img
          src={uxImage}
          alt="ux"
          style={styles.image}
        />

        <div style={styles.textSection}>
          <h1>UI/UX Design</h1>

          <p>
            We design user-friendly and modern interfaces
            for better user experience.
          </p>
        </div>
      </section>

      {/* React Section */}
      <section style={styles.section}>
        <div style={styles.textSection}>
          <h1>React Development</h1>

          <p>
            High-performance frontend applications built
            using React JS technology.
          </p>
        </div>

        <img
          src={reactImage}
          alt="react"
          style={styles.image}
        />
      </section>

      {/* Corporate IT Section */}
      <section style={styles.sectionLight}>
        <img
          src={corporateImage}
          alt="corporate"
          style={styles.image}
        />

        <div style={styles.textSection}>
          <h1>Corporate IT Solutions</h1>

          <p>
            Enterprise-grade IT services and software
            solutions for modern businesses.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={styles.contact}>
        <h1>Contact Us</h1>

        <p>Email: info@stackly.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Location: Hyderabad</p>
      </section>

    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0f172a",
    padding: "20px 40px",
    color: "white",
    position: "sticky",
    top: 0,
  },

  logo: {
    fontSize: "28px",
    fontWeight: "bold",
  },

  menu: {
    display: "flex",
    gap: "25px",
    listStyle: "none",
    fontSize: "18px",
  },

  menuItem: {
    cursor: "pointer",
  },

  section: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "70px 40px",
    backgroundColor: "#f8fafc",
  },

  sectionLight: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "70px 40px",
    backgroundColor: "#e2e8f0",
  },

  textSection: {
    width: "40%",
  },

  image: {
    width: "400px",
    borderRadius: "10px",
  },

  contact: {
    textAlign: "center",
    padding: "60px",
    backgroundColor: "#0f172a",
    color: "white",
  },
};

export default Navbar;