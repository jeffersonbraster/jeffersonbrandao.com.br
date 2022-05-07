import Image from "next/image";

import * as S from "./styled";

const Project = ({ title, description, link, image }) => {
  return (
    <S.ProjectLink href={link}>
      <S.ProjectWrapper>
        <S.ImageWrapper>
          <Image
            src={`/assets/img/projetos/${image}`}
            alt={title}
            height={120}
            width={120}
            objectFit="cover"
          />
        </S.ImageWrapper>
        <S.ProjectInfo>
          <S.ProjectTitle>{title}</S.ProjectTitle>
          <S.ProjectDescription>{description}</S.ProjectDescription>
        </S.ProjectInfo>
      </S.ProjectWrapper>
    </S.ProjectLink>
  );
};

export default Project;
