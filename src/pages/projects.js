import Project from "components/Project";
import { NextSeo } from "next-seo";

const projectsList = [
  {
    title: "My-Trips com Next",
    image: "mytrips.png",
    link: "https://my-trips.jeffersonbrandao.com.br/",
    description:
      "Um projeto bem legal com next, leaflet e graphcms. O projeto é sobre as praias do nordeste em que já conheci.",
  },
];

const ProjectsPage = () => (
  <>
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
    {projectsList.map(({ title, description, link, image }, i) => (
      <Project
        key={i}
        title={title}
        description={description}
        link={link}
        image={image}
      />
    ))}
  </>
);

export default ProjectsPage;
