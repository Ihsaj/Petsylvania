import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <div id="app">
      <Navbar /> {/* stays at the top */}
      <div className="register-page"> {/* only for the register form */}
        <Register />
      </div>
    </div>
  );
}

export default App;
