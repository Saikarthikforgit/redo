import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <button className="toggle-btn">Sidebar</button>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;
