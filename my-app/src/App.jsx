import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello World 🌍</h1>
      <p style={styles.text}>This is a simple React frontend example.</p>
      
      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
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
    color: "#4CAF50"
  },
  text: {
    fontSize: "18px",
    margin: "10px 0"
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    background: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default App;
