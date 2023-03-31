import Container from "../components/container/Container";
import Work from "../components/work/Work";
import Line from "../components/line/Line";

import Dev from "../img/foto-rafael.png";
import Section from "../components/section/Section";
import SiteAbout from "../components/footer-about/SiteAbout";

export default function About() {
  return (
    <main>
      <img src="" alt="" />
      <Container
        image={Dev}
        tittle=""
        description1="Olá, me chamo Rafael Mauricio e vou contar um pouco da minha história de como entrei nesse mundo."
        description2="Bom, vamos começar no ano de 2022, para ser exato no dia 04/03/2022. Fiquei bastante curioso e resolvi
                pesquisar algumas linguagens e encontrei a linguagem de programação Python. Foi onde tive meu primeiro
                contato com esse mundo, baixei o IDE PyCharm e comecei a praticar, depois procurei alguns cursos e acabei encontrando o curso do professor
                Gustavo Guanabara, suas aulas são fantásticas, aprendi lógica de programação no Visualg e depois comecei a
                desenvolver em python."
        description3="Depois de alguns meses eu recebi uma oportunidade de estudo, para mim isso foi como um desafio, comecei
                meu processo de aprendizagem em Desenvolvimento WEB e ingressei na faculdade. Agora faço sites fictícios para treinar e desenvolver minhas habilidades. Atualmente sou criador de conteúdo... Apresento meus projetos e ajudo futuros desenvolvedores web com aulas e dicas. Participo de comunidades para desenvolver meus conhecimentos com Tecnologia e colocar em prática tudo que estou aprendendo."
      />

      <Line />
      <h1>Works</h1> {/* Arrumar essa linha, criar um componente works e colocar os work dentro */}
      
      <Work
        work="Aranda Editora"
        functions="Estágio/Desenvolvedor front-end"
        data="- Atual"
      />
      <Work
        work="Casas Bahia"
        functions="Auxiliar de Estoque"
        data="2018 - 2021"
      />

      <Line />

      <Section/>

      <Line />

      <SiteAbout/>
      
    </main>
  );
}
