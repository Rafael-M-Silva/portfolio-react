import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Destaque from "../components/destaque/Destaque";
import Container from "../components/container/Container";
import Sociais from "../components/social/Sociais";
import Line from "../components/line/Line";

export default function Home() {
  return (
    <main>
      <Container img="" tittle="Rafael Mauricio, Desenvolvedor Front-End." description1="Estudante de análise e Desenvolvimento de Sistemas, nesse ano descobri
          que sou apaixonado por tecnologia, depois que tive curiosidade de como
          funcionava tudo isso. Resolvi então começar meus estudos e atualmente
          ingressei na faculdade e iniciei varios cursos online para me
          aprofundar na área." description2="Hoje em dia ando estudando, treinando e praticando bastante para
          conseguir entrar nesse mundo. Assim atuo fazendo
          projetos fictício, para
          treinar e desenvolver minhas habilidades."/>
          <ul>
            <Sociais icon={<FaFacebook />} link='https://www.facebook.com/rafael.mauricio532/' />
            <Sociais icon={<FaInstagram />} link='https://www.instagram.com/rafamauricio_s/' />
            <Sociais icon={<FaTwitter />} link='https://twitter.com/BigodonX' />
            <Sociais icon={<FaGithub />} link='https://github.com/Rafael-M-Silva' />
          </ul>
          <Line/>
          <Destaque/>
    </main>
  );
}
