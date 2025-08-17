import React from "react";

const PrivateForm = ({ formData, onChange, onSubmit, onCancel }) => {
  const styles = {
    formContainer: {
      backgroundColor: "#182842",
      padding: "30px",
      borderRadius: "8px",
      maxWidth: "400px",
      margin: "0 auto",
      color: "#e0e6f0",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      boxShadow: "0 4px 15px rgba(42,157,244,0.35)",
    },
    formGroup: {
      marginBottom: "20px",
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    },
    label: {
      marginBottom: "6px",
      fontWeight: "600",
      fontSize: "1rem",
      color: "#aab8d3",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      border: "1.5px solid #2a9df4",
      fontSize: "1rem",
      outline: "none",
      color: "#0f1c2f",
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "25px",
    },
    submitButton: {
      backgroundColor: "#2a9df4",
      border: "none",
      borderRadius: "6px",
      color: "#fff",
      padding: "12px 25px",
      fontSize: "1rem",
      cursor: "pointer",
      fontWeight: "600",
      transition: "background-color 0.3s ease",
    },
    cancelButton: {
      backgroundColor: "#aab8d3",
      border: "none",
      borderRadius: "6px",
      color: "#0f1c2f",
      padding: "12px 25px",
      fontSize: "1rem",
      cursor: "pointer",
      fontWeight: "600",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <form style={styles.formContainer} onSubmit={onSubmit}>
      <div style={styles.formGroup}>
        <label htmlFor="name" style={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="mobile" style={styles.label}>
          Mobile No:
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={onChange}
          style={styles.input}
          required
          pattern="[0-9]{10}"
          title="Enter a 10-digit mobile number"
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="password" style={styles.label}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.buttonGroup}>
        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
        <button type="button" style={styles.cancelButton} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PrivateForm;
