import "./App.scss";
import { useState, useEffect } from "react";

function App() {
  return (
    <>
      <Nav></Nav>
    </>
  );
}

export default App;

const Nav = () => {
  const [navActive, setNavActive] = useState(false);
  const [navLink, setNavlink] = useState(null);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-links > li");
    setNavlink(navLinks);
    console.log(navLink);
  }, []);

  const toggleNav = () => {
    setNavActive(!navActive);
    navLink.forEach((link, index) => {
      link.style.animation = "";
      link.style.animation = `navLinkFade 0.3s ease forwards ${
        index / 7 + 0.5
      }s`;
    });
  };

  return (
    <nav>
      <div className="Logo">
        <h4>The Nav</h4>
      </div>
      <ul className={navActive ? "nav-links nav-active" : "nav-links"}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>

      <div
        className={navActive ? "burger toggle" : "burger"}
        onClick={toggleNav}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};
