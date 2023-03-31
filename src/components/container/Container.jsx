import Styles from "./Container.module.css"
export default function Container({
  tittle,
  description1,
  description2,
  description3,
  image,
}) {
  return (
    <section className={Styles.Container}>
      <img src={image} alt="" />
      <h1>{tittle}</h1>
      <p>{description1 || "{Insira a Descrição}"}</p>
      <p>{description2 || "{Insira a Descrição}"}</p>
      <p>{description3}</p>
    </section>
  );
}
