import Styles from "./Tools.module.css"
export default function Tools({ tools, img }) {
  return (
    <>
      <div className={Styles.Card}>
        <img src= {img} alt="ferrametas do desenvolvedor" />
        <p>{tools || "{Insira a ferramenta}"}</p>
      </div>
    </>
  );
}
