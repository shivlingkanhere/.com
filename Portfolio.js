import React, { useState } from "react";
import PrivateForm from "./PrivateForm";

const Portfolio = () => {
  const [showForm, setShowForm] = useState(false);
  const [showPrivate, setShowPrivate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const secretPassword = "YourSecret123";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === secretPassword) {
      setShowPrivate(true);
      setShowForm(false);
    } else {
      alert("Incorrect password. Access denied.");
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });
  };

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: "100vh",
      width: "100vw",
      backgroundColor: "#0f1c2f",
      color: "#e0e6f0",
      padding: "40px 20px",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    innerWrapper: {
      width: "100%",
      maxWidth: "1200px",
    },
    headerSection: {
      display: "flex",
      alignItems: "center",
      gap: "25px",
      flexWrap: "wrap",
      justifyContent: "space-between",
      marginBottom: "40px",
    },
    leftHeader: {
      display: "flex",
      alignItems: "center",
      gap: "25px",
      flexWrap: "wrap",
      // Added to vertically center items
      flexGrow: 1,
      minWidth: 0,
    },
    photo: {
      width: "140px",
      height: "140px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid #2a9df4",
      flexShrink: 0,
    },
    name: {
      fontFamily: "'Courier New', Courier, monospace",
      fontSize: "3rem",
      fontWeight: "900",
      color: "#f39c12",
      letterSpacing: "4px",
      textShadow: "2px 2px 5px #d35400",
      whiteSpace: "nowrap",
      minWidth: 0,
    },
    contactSection: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "6px",
      color: "#aab8d3",
      minWidth: 180,
    },
    contactTitle: {
      color: "#5dade2",
      fontWeight: "700",
      fontSize: "1.1rem",
      marginBottom: "6px",
    },
    socialLinks: {
      display: "flex",
      gap: "15px",
      fontSize: "1rem",
    },
    socialLink: {
      color: "#2a9df4",
      textDecoration: "none",
      fontWeight: "600",
    },
    sectionRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "40px",
      justifyContent: "space-between",
      marginBottom: "40px",
    },
    sectionBox: {
      flex: "1 1 280px",
      backgroundColor: "#182842",
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 4px 15px rgba(42,157,244,0.35)",
      minWidth: "280px",
    },
    sectionTitle: {
      fontWeight: "700",
      fontSize: "1.4rem",
      marginBottom: "15px",
      color: "#5dade2",
      borderBottom: "1px solid #2a9df4",
      paddingBottom: "6px",
    },
    list: {
      listStyleType: "square",
      paddingLeft: "20px",
      color: "#aab8d3",
      lineHeight: "1.6",
      margin: 0,
    },
    addressText: {
      color: "#aab8d3",
      margin: 0,
      fontSize: "1rem",
    },
    button: {
      backgroundColor: "#2a9df4",
      border: "none",
      borderRadius: "6px",
      color: "#fff",
      padding: "12px 20px",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      minWidth: "180px",
      flexShrink: 0,
    },
    buttonHover: {
      backgroundColor: "#1b7cd6",
    },
    buttonIcon: {
      width: "20px",
      height: "20px",
    },
    privateDetails: {
      backgroundColor: "#182842",
      borderRadius: "8px",
      padding: "25px",
      boxShadow: "0 4px 15px rgba(42,157,244,0.35)",
      fontSize: "1.1rem",
      lineHeight: "1.6",
      marginTop: "25px",
      maxWidth: "900px",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "left",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(15, 28, 47, 0.85)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modalContent: {
      backgroundColor: "#182842",
      borderRadius: "12px",
      padding: "30px 25px",
      boxShadow: "0 8px 25px rgba(42, 157, 244, 0.5)",
      maxWidth: "500px",
      width: "90%",
      maxHeight: "90vh",
      overflowY: "auto",
      position: "relative",
      animation: "slideDown 0.3s ease forwards",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        {/* Header with photo, name, contact, and button */}
        <div style={styles.headerSection}>
          <div style={styles.leftHeader}>
            <img
              style={styles.photo}
              src="https://i.pravatar.cc/140"
              alt="Profile"
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
              <div style={styles.name}>Shivling Kanhere</div>
              {/* Contact/Social Links on left side under name */}
              <div style={styles.contactSection}>
                <div style={styles.contactTitle}>Connect with me</div>
                <div style={styles.socialLinks}>
                  <a
                    href="https://www.linkedin.com/in/shivling-kanhere-788680288/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialLink}
                    title="LinkedIn"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/shivling.kanhere"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialLink}
                    title="Instagram"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Button on the right */}
          {!showForm && !showPrivate && (
            <button
              style={styles.button}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)
              }
              onClick={() => setShowForm(true)}
              title="Access Private Details"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/lock--v1.png"
                alt="Lock icon"
                style={styles.buttonIcon}
              />
              Show Private Details
            </button>
          )}
        </div>

        {/* Skills, Education, Address, Hobbies sections */}
        <div style={styles.sectionRow}>
          <div style={styles.sectionBox}>
            <h3 style={styles.sectionTitle}>Skills</h3>
            <ul style={styles.list}>
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>Node.js & Express</li>
              <li>SQL & Databases</li>
              <li>Linux & Shell Scripting</li>
            </ul>
          </div>

          <div style={styles.sectionBox}>
            <h3 style={styles.sectionTitle}>Education</h3>
            <ul style={styles.list}>
              <li>BSc Computer Science (2024)</li>
              <li>Various IT certifications</li>
            </ul>
          </div>

          <div style={styles.sectionBox}>
            <h3 style={styles.sectionTitle}>Address</h3>
            <p style={styles.addressText}>India, Maharashtra</p>
          </div>

          <div style={styles.sectionBox}>
            <h3 style={styles.sectionTitle}>Hobbies</h3>
            <ul style={styles.list}>
              <li>Watching Movies</li>
              <li>Playing Chess & Carrom</li>
              <li>Listening to Songs</li>
              <li>Video & Photo Editing</li>
            </ul>
          </div>
        </div>

        {/* Modal popup for PrivateForm */}
        {showForm && (
          <div
            style={styles.modalOverlay}
            onClick={handleCancel}
            role="dialog"
            aria-modal="true"
          >
            <div
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside form
            >
              <PrivateForm
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
              />
            </div>
          </div>
        )}

        {/* Private details */}
        {showPrivate && (
          <div style={styles.privateDetails}>
            <h2 style={{ color: "#2a9df4" }}>Private Details</h2>
            <p>This is the private content only visible after login.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
