import Card from '../card/Card'


export default function Destaque() {
  return (
    <section>
      <h2>Notícias</h2>
        <Card tittle="React" description="Meus futuros projetos, vai ter implementação da biblioteca React."
        img = "https://cdn-icons-png.flaticon.com/512/753/753244.png" />
        <Card tittle="Trabalhando na nova seção na página de projects" description="Seção especial para projetos Reactjs e React Native"
        img= "https://cdn-icons-png.flaticon.com/512/1857/1857069.png" />
    </section>
  )
}