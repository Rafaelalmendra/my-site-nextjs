import Image from "next/image";

//components
import { Tag } from "src/components/Tag";

//styles
import * as S from "./styles";

//images-and-icons
import FigmaIcon from "../../../assets/icons/figma.svg";

export const ProjectCard = ({ project }) => {
  return (
    <S.ProjectContainer id={project?.title}>
      <S.ProjectImage>
        <a href={project?.deploy} target="_blank" rel="noopener noreferrer">
          <S.TagContainer>
            <Tag
              text={project.ismyproject ? "Autoral" : "Curso"}
              color={project.ismyproject ? "var(--blue)" : "var(--yellow)"}
            />
          </S.TagContainer>

          <div className="imageLink">
            <p>
              Acessar deploy <i className="bi bi-globe" />
            </p>
          </div>

          <Image
            src={project?.image.url}
            alt={project?.image.alt}
            layout="fill"
          />
        </a>
      </S.ProjectImage>

      <S.NameAndDescription>
        <div>
          <h3>{project?.title}</h3>
        </div>
        <S.Description
          dangerouslySetInnerHTML={{ __html: project?.description }}
        />
      </S.NameAndDescription>

      <S.Details>
        <S.Techs>
          {project?.technologies?.map((tech, index) => (
            <span key={index}>{tech.technologie}</span>
          ))}
        </S.Techs>
        <S.LinkAndRepository>
          <a href={project?.deploy} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-globe" />
          </a>

          <a href={project?.github} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github" />
          </a>

          <a href={project?.figma} target="_blank" rel="noopener noreferrer">
            <FigmaIcon />
          </a>
        </S.LinkAndRepository>
      </S.Details>
    </S.ProjectContainer>
  );
};
