import Styles from "./Sociais.module.css"
export default function Sociais({ icon, link }) {
  return (
    <>
      <li className = {Styles.Social_card}>
        <a href={link} target="_blank">
          {icon}
        </a>
      </li>
    </>
  );
}
