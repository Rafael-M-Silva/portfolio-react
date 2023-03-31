import Styles from "./Project.module.css"

export default function Project({ tittle, description, image, link }) {
  return (
    <div className={Styles.Container_card}>
      <h2>{tittle || "{Insira um Titulo}"}</h2>
      <img src={image} alt="" />
      <p>{description || "{Insira uma descrição}"}</p>
      <a href={link} target="_blank">{tittle || "{insira um tituto btn}"}</a>
    </div>
  );
}
