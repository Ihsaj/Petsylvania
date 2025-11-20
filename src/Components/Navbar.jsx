import React from "react";


export default function Navbar() {
const styles = {
nav: {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "20px 40px",
background: "#ffffff",
boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
},
logo: {
fontSize: "22px",
fontWeight: "bold",
},
links: {
display: "flex",
gap: "30px",
listStyle: "none",
},
bookBtn: {
background: "#0d6efd",
color: "white",
padding: "10px 20px",
borderRadius: "8px",
border: "none",
cursor: "pointer",
}
};


return (
<nav style={styles.nav}>
<div style={styles.logo}>PETSYLVANIA</div>


<ul style={styles.links}>
<li>Home</li>
<li>About Us</li>
<li>Testimonials</li>
<li>Contact Us</li>
</ul>


<button style={styles.bookBtn}>Book Now</button>
</nav>
);
}


// =============================
// src/Components/Button.jsx
// =============================
import React from 'react'