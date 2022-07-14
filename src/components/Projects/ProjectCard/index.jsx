import Image from "next/image";

//components
import { Tag } from "src/components/Tag";

//styles
import * as S from "./styles";

//images-and-icons
import FigmaIcon from "../../../assets/icons/figma.svg";

export const ProjectCard = ({ data }) => (
  <>
    {data?.allProjects.map((project) => (
      <S.ProjectContainer data-aos="zoom-in" id={project?.title}>
        <S.ProjectImage>
          <S.TagContainer>
            <Tag
              text={project.ismyproject ? "Autoral" : "Curso"}
              color={project.ismyproject ? "var(--blue)" : "var(--yellow)"}
            />
          </S.TagContainer>

          <Image
            src={project?.image.url}
            alt={project?.image.alt}
            width={1124}
            height={431}
          />
        </S.ProjectImage>

        <S.NameAndDescription>
          <div>
            <h3>{project?.title}</h3>
          </div>
          <S.Text>
            <p>{project?.description}</p>
          </S.Text>
        </S.NameAndDescription>

        <S.Details>
          <S.Techs>
            {project?.technologies?.map((tech) => (
              <span>{tech.technologie}</span>
            ))}
          </S.Techs>
          <S.LinkAndRepository>
            <a href={project?.deploy} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-globe"></i>
            </a>

            <a href={project?.github} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>

            <a href={project?.figma} target="_blank" rel="noopener noreferrer">
              <FigmaIcon />
            </a>
          </S.LinkAndRepository>
        </S.Details>
      </S.ProjectContainer>
    ))}
  </>
);
