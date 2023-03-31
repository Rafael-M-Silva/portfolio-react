import Styles from "./SiteAbout.module.css"
export default function SiteAbout() {
  return (
    <section className={Styles.Footer}>
        <h1>Sobre este site</h1>
        <p>Caso você esteja se perguntando este site é:</p>
        <ul>
          <li>Projetado e contruído usando Figma e Visual Studio Code</li>
          <li>Hospedado no Github</li>
          <li>Desenvolvido por Rafael Mauricio</li>
          <li>Font usada no site: Noto Sans Mono</li>
        </ul>
      </section>
  )
}