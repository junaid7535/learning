import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello World 🌍</h1>
      <p style={styles.text}>This is a simple React frontend example.</p>
      
      <h2 style={styles.counter}>Count: {count}</h2>

      <div style={styles.buttonGroup}>
        <button style={{ ...styles.button, background: "#28a745" }} onClick={increment}>
          ➕ Increment
        </button>
        <button style={{ ...styles.button, background: "#dc3545" }} onClick={decrement}>
          ➖ Decrement
        </button>
        <button style={{ ...styles.button, background: "#6c757d" }} onClick={reset}>
          🔁 Reset
        </button>
      </div>
    </div>
  );
};

// Inline styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif"
  },
  heading: {
    color: "#4CAF50",
    fontSize: "2.5rem"
  },
  text: {
    fontSize: "18px",
    margin: "10px 0"
  },
  counter: {
    fontSize: "24px",
    margin: "20px 0",
    color: "#333"
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px"
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s"
  }
};

export default App;
