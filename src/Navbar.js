import React from "react";

import servicesImage from "./images/services.jpg";
import uxImage from "./images/ux.jpg";
import reactImage from "./images/react.jpg";
import corporateImage from "./images/corporate.jpg";
import webImage from "./images/web.jpg";

function Navbar() {
  return (
    <div>

      {/* Navbar */}
<nav style={styles.navbar}>

  <div style={styles.logoSection}>
    <h2 style={styles.logo}>STACKLY</h2>
  </div>

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
      Stackly is a modern technology company focused
      on delivering innovative software solutions
      and digital experiences for businesses.
    </p>

    <p>
      Our team specializes in frontend development,
      responsive web applications, UI/UX design,
      and scalable corporate solutions using
      modern technologies like React JS.
    </p>

    <p>
      We help startups and enterprises build
      fast, secure, and user-friendly applications
      that improve business performance and
      customer engagement.
    </p>

    <p>
      Our mission is to provide high-quality
      digital products with modern design,
      seamless functionality, and excellent
      user experience.
    </p>

    <p>
      • Modern Web Applications <br />
      • Frontend Development <br />
      • Responsive Website Design <br />
      • UI/UX Solutions <br />
      • Corporate IT Services
    </p>
  </div>
</section>
    {/* Services Section */}
<section style={styles.section}>
  <div style={styles.textSection}>
    <h1>Our Services</h1>

    <p>
      We provide innovative and scalable
      digital solutions for businesses,
      startups, and enterprises.
    </p>

    <p>
      Our team focuses on delivering
      high-quality applications with
      modern technologies and responsive
      user experiences.
    </p>

    <p>• Web Development</p>
    <p>• Responsive Website Design</p>
    <p>• UI/UX Design</p>
    <p>• React Development</p>
    <p>• Frontend Development</p>
    <p>• Corporate IT Solutions</p>
    <p>• Dashboard Development</p>
    <p>• Business Web Applications</p>

    <button style={styles.button}>
      Explore Services
    </button>
  </div>

  <img
    src={servicesImage}
    alt="services"
    style={styles.image}
  />
</section>
{/* Web Development Section */}
<section style={styles.sectionLight}>
  <img
    src={webImage}
    alt="web"
    style={styles.image}
  />

  <div style={styles.textSection}>
    <h1>Web Development</h1>

    <p>
      We create responsive and modern websites
      using the latest frontend technologies.
    </p>

    <p>
      Our web development solutions focus on
      performance, scalability, and user experience.
    </p>

    <p>
      • Responsive Websites <br />
      • Corporate Web Applications <br />
      • Frontend Development <br />
      • Modern UI Design
    </p>
  </div>
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
      We create visually appealing and user-friendly
      interfaces that improve customer engagement
      and digital experiences.
    </p>

    <p>
      Our UI/UX design services focus on modern layouts,
      responsive designs, interactive user experiences,
      mobile-friendly interfaces, and seamless navigation.
    </p>

    <p>
      We use industry-standard design practices to build
      attractive and high-performance applications for
      businesses and startups.
    </p>

    <p>
      • Responsive Website Design <br />
      • Mobile App UI Design <br />
      • Wireframing & Prototyping <br />
      • User Experience Optimization <br />
      • Modern Dashboard Design
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