import Styles from "./Sociais.module.css"
export default function Sociais({ icon }) {
  return (
    <>
      <li className = {Styles.Social_card}>
        <a href="#" target="_blank">
          {icon}
        </a>
      </li>
    </>
  );
}
