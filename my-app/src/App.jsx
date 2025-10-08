import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const App = () => {
  const [count, setCount] = useState(() => {
    // Load count from localStorage
    const saved = localStorage.getItem("count");
    return saved ? parseInt(saved) : 0;
  });
  const [darkMode, setDarkMode] = useState(false);
  const [color, setColor] = useState("#4CAF50");
  const [message, setMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const randomColor = () => {
    const colors = ["#4CAF50", "#2196F3", "#FF9800", "#E91E63", "#9C27B0", "#00BCD4"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Save count persistently
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const playClickSound = () => {
    const audio = new Audio(
      "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg"
    );
    audio.volume = 0.3;
    audio.play();
  };

  const increment = () => {
    playClickSound();
    const newCount = count + 1;
    setCount(newCount);
    setColor(randomColor());

    if (newCount === 5) {
      setMessage("🎉 You reached 5!");
      triggerConfetti();
    } else if (newCount === 10) {
      setMessage("🔥 You reached 10! Amazing!");
      triggerConfetti();
    } else if (newCount === 20) {
      setMessage("🚀 Level Up! You’re unstoppable!");
      triggerConfetti();
    } else setMessage("");
  };

  const decrement = () => {
    if (count > 0) {
      playClickSound();
      setCount(count - 1);
      setMessage("");
    }
  };

  const reset = () => {
    playClickSound();
    setCount(0);
    setMessage("");
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  // Emoji changes with count mood
  const getMoodEmoji = () => {
    if (count < 5) return "🙂";
    if (count < 10) return "😎";
    if (count < 20) return "🔥";
    return "🤯";
  };

  return (
    <div
      style={{
        ...styles.container,
        background: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#f1f1f1" : "#333",
        transition: "all 0.5s ease",
      }}
    >
      {showConfetti && <Confetti />}

      <h1 style={{ ...styles.heading, color }}>
        Hello World {getMoodEmoji()}
      </h1>
      <p style={styles.text}>This is an upgraded interactive React app ⚡</p>

      <h2 style={{ ...styles.counter, color: color, transition: "0.3s" }}>
        Count: {count}
      </h2>

      {/* Progress Bar */}
      <div style={styles.progressBarContainer}>
        <div
          style={{
            ...styles.progressBar,
            width: `${(count / 20) * 100}%`,
            background: color,
          }}
        ></div>
      </div>

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

      <footer style={{ marginTop: "30px", opacity: 0.8 }}>
        Made with ❤️ using React
      </footer>
    </div>
  );
};

// Styling
const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Poppins, sans-serif",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.8rem",
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
  progressBarContainer: {
    width: "80%",
    height: "12px",
    background: "#ddd",
    borderRadius: "6px",
    margin: "15px auto",
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: "6px",
    transition: "width 0.4s ease",
  },
};

export default App;
