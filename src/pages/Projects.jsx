import Project from "../components/projects/Project";

import Theblog from '../img/projeto-the-blog.png'
import Netbook from '../img/projeto-netbook.png'
import Burger from '../img/projeto-burguer.png'
import Dados from '../img/projeto-dados-rpg.png'
import Watch from '../img/projeto-watch.png'
import Tabuada from '../img/tabuada.png'
import Age from '../img/verificador-idade.png'
import DarkMode from '../img/projeto-noturno.png'
import Rocketpay from '../img/rocketpay.png'
import Nlw from '../img/projeto-nlw.png'
import ABC from '../img/abc-tec.png'



export default function Projects() {
  const imagens = [Theblog, Netbook, Burger, Dados, Watch, Tabuada, Age, DarkMode, Rocketpay, Nlw, ABC]

  const projects = [
    {
      tittle : "The Blog",
      description : "Projeto desenvolvido pela rocketseat, pra desenvolver os alunos e gerar desafios... Desafio inicial não tinha o protótipo responsivo, então usei minha criatividade e criei o responsivo.",
      link : 'https://rafael-m-silva.github.io/the-blog/',
    },
    {
      tittle : "Netbook",
      description : "Netbook foi o primeiro projeto Grande que fiquei feliz em desenvolver, olhei pra trás e visualizei todos os meus esforços e dedicação aos estudos.",
      link : 'https://rafael-m-silva.github.io/netbook/'
    },
    {
      tittle : "Burger Slash",
      description : "Projeto finalizado com interações keyframe.",
      link : 'https://rafael-m-silva.github.io/burger-slash/'
    },
    {
      tittle : "Dados RPG",
      description : "Site para amantes de RPG de mesa, aqui você consegue gerar dados e fazer modificações.",
      link : 'https://rafael-m-silva.github.io/dados-rpg/'
    },
    {
      tittle : "Relógio Digital",
      description : "Relógio em tempo real.",
      link : 'rafael-m-silva.github.io/watch/'
    },
    {
      tittle : "Tabuada",
      description : "Primeiras interações com JavaScript.",
      link : 'rafael-m-silva.github.io/Tabuada/'
    },
    {
      tittle : "Verificador de idade",
      description : "Ao estudar o JavaScript consegui desenvolver um verificador de idade e sexo.",
      link : 'https://rafael-m-silva.github.io/Verificador-de-Idade/'
    },
    {
      tittle : "Modo noturno",
      description : "O famoso modo noturno das páginas web.",
      link : 'https://rafael-m-silva.github.io/theme-dark/'
    },
    {
      tittle : "Rocketpay",
      description : "O Rocketpay é um componente que simula o formulário de preenchimento de cartão de crédito, onde é possível adicionar máscara aos inputs e atualizar elementos HTML via DOM.",
      link : 'https://rocketpay-tan.vercel.app'
    },
    {
      tittle : "NLW #10 Copa",
      description : "Projeto desenvolvido pela rocketseat, pra desenvolver os alunos e gerar desafios... Desafio inicial não tinha o protótipo responsivo, então usei minha criatividade e criei o responsivo.",
      link : 'https://rafael-m-silva.github.io/NLW-Copa/'
    },
    {
      tittle : "ABC Tecnologia",
      description : "Curso da faculdade Impacta, que me proporcionou um conhecimento incrivel a respeito de atalhos no IDE VSCode, Flex-Box, Float e Display-flex.",
      link : 'https://rafael-m-silva.github.io/Abc-Tecnologia/'
    },
  ]

  return (
    <main>
      {
        projects.map((project, index) => {
          return (
            <Project
            key={index}
            tittle={project.tittle}
            description = {project.description}
            image = {imagens[index]}
            link = {project.link}
            />
          )
        })
      }
    </main>
  );
}
