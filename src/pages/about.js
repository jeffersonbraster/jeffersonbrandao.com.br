import { NextSeo } from "next-seo";

import Layout from "../components/Layout";
import { MainContent } from "styles/base";

const AboutPage = () => (
  <Layout>
    <NextSeo
      title="Sobre mim | Jefferson Brandao"
      description="Saiba um pouco mais sobre o desenvolvedor por trás deste blog."
      openGraph={{
        type: "website",
        locale: "en_US",
        url: "https://jeffersonbrandao.com.br",
        site_name: "Jefferson Brandao",
        title: "Jefferson Brandao",
        images: [
          {
            url: "https://jeffersonbrandao.com.br/assets/img/blog-cover.png",
            width: 1200,
            height: 630,
            alt: "Jefferson Brandao Blog",
          },
        ],
      }}
    />
    <MainContent>
      <h1>Sobre min</h1>
      <p>
        Meu nome é Jefferso Brandão, nasci e resido em Fortaleza/CE, formado em
        Administração de Empresas e Analise e Desenvolvimento de Sistemas.
      </p>

      <p>
        Atualmente estou trabalhando como Analista de Sistemas no Grupo Edson
        Queiroz, onde tive o primeiro contato profissional com TI. Amo estudar
        novas tecnologias e sou apaixonado pelo javascript. Acho que o trabalho
        em equipe e o compartilhamento de aprendizados e novas ideias é
        fundamental em qualquer ambiente profissional. Nas horas livres procuro
        sempre conhecer novas tecnologias e estudar javascript haha.
      </p>
      <p>
        Criei esse blog, para estudar e praticar Gatsby junto com Graphql, e
        também como estou sempre atrás de noticias sobre o mundo da tecnologia,
        irei compartilhar um pouco com vocês por aqui, tá?
      </p>
      <p>
        Por fim, não deixem de me seguir nas redes sociais para compartilharmos
        conhecimentos e qualquer coisa que eu puder ajudar podem contar comigo.
      </p>
    </MainContent>
  </Layout>
);

export default AboutPage;
