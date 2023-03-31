import Tools from "../tools/Tools"
import Styles from "./Section.module.css"
export default function Section () {

  const tools = [
    {
      title : "HTML5",
      img : "https://cdn-icons-png.flaticon.com/512/1216/1216733.png",
    },
    {
      title : "CSS3",
      img : "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      title : "JavaScript",
      img : "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      title : "Figma",
      img : "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    },
    {
      title : "Bootstrap",
      img : "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    },
    {
      title : "React",
      img : "https://cdn-icons-png.flaticon.com/512/753/753244.png",
    },
    {
      title : "Sass",
      img : "https://cdn-icons-png.flaticon.com/512/919/919831.png",
    },
    {
      title : "Git",
      img : "https://cdn-icons-png.flaticon.com/512/7182/7182235.png",
    },
    {
      title : "GitHub",
      img : "https://cdn-icons-png.flaticon.com/512/733/733609.png",
    },
    {
      title : "PHP",
      img : "https://cdn-icons-png.flaticon.com/512/919/919830.png",
    },
    {
      title : "FileZilla",
      img : "https://cdn2.iconfinder.com/data/icons/pack2-baco-flurry-icons-style/512/Filezilla2.png",
    },    
  ]

  return (
    <section className={Styles.Section}>
      <h1>Tools</h1>
      <div className={Styles.Tools}>
        {
          tools.map((tool) => {
            return(
              <>
                <Tools
                tools={tool.title}
                img = {tool.img}/>
              </>
            )
          })
        }
      </div>
    </section>
  )
}