import Styles from "./Work.module.css"

export default function Work({ work, functions, data }) {
  return (
    <>
      <div className={Styles.Box_work}>
        <p>{work || "{Insira o trabalho}"}</p>
        <div>
          <span>{functions || "{Insira a função}"}</span>
          <span>{data || "{Insira a Data}"}</span>
        </div>
      </div>
    </>
  );
}
