import Image from "next/image";

//styles
import {
  Text,
  Techs,
  Details,
  ProjectImage,
  ProjectContainer,
  LinkAndRepository,
  NameAndDescription,
} from "./styles";

const ProjectCard = ({ data }) => (
  <>
    {data?.allProjects.map((project) => (
      <ProjectContainer data-aos="zoom-in" id={project?.title}>
        <ProjectImage>
          <Image
            src={project?.image.url}
            alt={project?.image.alt}
            width={1124}
            height={431}
          />
        </ProjectImage>

        <NameAndDescription>
          <h3>{project?.title}</h3>
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
