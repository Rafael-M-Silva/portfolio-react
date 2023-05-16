import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Styles from "./Navbar.module.css"

export default function Navbar() {
  const [menu, setMenu] = useState("fa-solid fa-bars");
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShow(false); // Oculta o menu ao mudar de página
    setMenu("fa-solid fa-bars")
  }, [location]);

  let handleClick = () => {
    if (menu === "fa-solid fa-bars") {
      setMenu("fa-solid fa-xmark");
      setShow(true);
    } else {
      setMenu("fa-solid fa-bars");
      setShow(false);
    }
  }

  let handleScroll = () => {
      setMenu("fa-solid fa-bars");
      setShow(false);
  }

  window.addEventListener("scroll", handleScroll)

  return (
    <header className={Styles.header}>
      <h1>
        <Link to="/">Rafael</Link>
      </h1>
      <nav>
        <ul className={show ? Styles.show : Styles.none}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <i onClick={handleClick} className={menu}></i>
    </header>
  );
}
