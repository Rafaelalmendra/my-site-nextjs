import Image from "next/image";
import { projects } from "../projects";
import {
  ProjectContainer,
  ProjectImage,
  Details,
  Techs,
  Text,
  NameAndDescription,
  LinkAndRepository,
} from "./style";

const ProjectCard = () => (
  <>
    {projects.map((item) => (
      <ProjectContainer
        className="margins-nav"
        data-aos="zoom-in"
        id={item.section}
      >
        <ProjectImage>
          <Image src={item.image} alt={item.alt} width={1124} height={431} />
        </ProjectImage>
        <NameAndDescription>
          <h3>{item.name}</h3>
          <Text>
            <p>{item.description}</p>
          </Text>
        </NameAndDescription>
        <Details>
          <Techs>
            {item.techs.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </Techs>
          <LinkAndRepository>
            <a href={item.deploy} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-globe"></i>
            </a>
            <a href={item.github} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
          </LinkAndRepository>
        </Details>
      </ProjectContainer>
    ))}
  </>
);

export default ProjectCard;
