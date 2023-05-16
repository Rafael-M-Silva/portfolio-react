import { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css"


export default function Navbar() {
const [menu, setMenu] = useState("fa-solid fa-bars")

 let handleClick = () => {
  menu !== "fa-solid fa-xmark" ? setMenu("fa-solid fa-xmark") : setMenu("fa-solid fa-bars");
 }

  return (
    <header className={Styles.header}>
      <h1>
        <Link to="/">Rafael</Link>
      </h1>
      <nav className={Styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <i onClick={handleClick} className={menu}></i>
    </header>
  );
}
