import Styles from './Card.module.css'
export default function Card({ tittle, description, img }) {
  return (
    <div className={Styles.Card}>
      <img src={img} alt="" />
      <div>
        <h1>{tittle || "{Insira o Titúlo}"}</h1>
        <p>{description || "{Insira a Descrição}"}</p>
      </div>  
    </div>
  );
}
