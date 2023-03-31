import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css"



export default function Navbar() {


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
    </header>
  );
}
