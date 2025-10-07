import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [color, setColor] = useState("#4CAF50");
  const [message, setMessage] = useState("");

  const randomColor = () => {
    const colors = ["#4CAF50", "#2196F3", "#FF9800", "#E91E63", "#9C27B0", "#00BCD4"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setColor(randomColor());
    if (newCount === 5) setMessage("🎉 You reached 5!");
    else if (newCount === 10) setMessage("🔥 You reached 10! Amazing!");
    else setMessage("");
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
    setMessage("");
  };

  const reset = () => {
    setCount(0);
    setMessage("");
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      style={{
        ...styles.container,
        background: darkMode ? "#222" : "#f5f5f5",
        color: darkMode ? "#fff" : "#333",
        transition: "all 0.5s ease",
      }}
    >
      <h1 style={{ ...styles.heading, color }}>Hello World 🌍</h1>
      <p style={styles.text}>This is an interactive React example.</p>

      <h2 style={{ ...styles.counter, color: color, transition: "0.3s" }}>
        Count: {count}
      </h2>

      {message && <p style={styles.message}>{message}</p>}

      <div style={styles.buttonGroup}>
        <button
          style={{ ...styles.button, background: "#28a745" }}
          onClick={increment}
        >
          ➕ Increment
        </button>
        <button
          style={{ ...styles.button, background: "#dc3545" }}
          onClick={decrement}
        >
          ➖ Decrement
        </button>
        <button
          style={{ ...styles.button, background: "#6c757d" }}
          onClick={reset}
        >
          🔁 Reset
        </button>
      </div>

      <button
        onClick={toggleTheme}
        style={{
          ...styles.themeButton,
          background: darkMode ? "#FFC107" : "#333",
          color: darkMode ? "#333" : "#fff",
        }}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
};

// Styling
const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.5rem",
  },
  text: {
    fontSize: "18px",
    margin: "10px 0",
  },
  counter: {
    fontSize: "28px",
    margin: "20px 0",
    fontWeight: "bold",
  },
  message: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#FF9800",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px",
    flexWrap: "wrap",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "transform 0.2s, background 0.3s",
  },
  themeButton: {
    marginTop: "30px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default App;
