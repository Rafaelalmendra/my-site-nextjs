import Image from "next/image";

//components
import Tag from "src/components/Tag";

//styles
import {
  Text,
  Techs,
  Details,
  TagContainer,
  ProjectImage,
  ProjectContainer,
  LinkAndRepository,
  NameAndDescription,
} from "./styles";

//images
import FigmaIcon from "../../../assets/icons/figma.svg";

const ProjectCard = ({ data }) => (
  <>
    {data?.allProjects.map((project) => (
      <ProjectContainer data-aos="zoom-in" id={project?.title}>
        <ProjectImage>
          <TagContainer>
            <Tag
              text={project.ismyproject ? "Autoral" : "Curso"}
              color={project.ismyproject ? "var(--blue)" : "var(--yellow)"}
            />
          </TagContainer>

          <Image
            src={project?.image.url}
            alt={project?.image.alt}
            width={1124}
            height={431}
          />
        </ProjectImage>

        <NameAndDescription>
          <div>
            <h3>{project?.title}</h3>
          </div>
          <Text>
            <p>{project?.description}</p>
          </Text>
        </NameAndDescription>

        <Details>
          <Techs>
            {project?.technologies?.map((tech) => (
              <span>{tech.technologie}</span>
            ))}
          </Techs>
          <LinkAndRepository>
            <a href={project?.figma} target="_blank" rel="noopener noreferrer">
              <FigmaIcon />
            </a>

            <a href={project?.deploy} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-globe"></i>
            </a>

            <a href={project?.github} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </LinkAndRepository>
        </Details>
      </ProjectContainer>
    ))}
  </>
);

export default ProjectCard;
