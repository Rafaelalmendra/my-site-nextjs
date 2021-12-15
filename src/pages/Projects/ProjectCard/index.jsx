import Image from 'next/image';

import {
  ProjectContainer,
  ProjectImage,
  Details,
  Techs,
  Text,
  NameAndLink
} from '../../../styles/projectCard';

export default function ProjectCard(props) {
  return (
    <ProjectContainer>
      <ProjectImage>
        <Image 
          src={props.image}
          alt={props.alt}
          width={1124}
          height={431}
        />
      </ProjectImage>

      <Details>
        <Techs>
          <span>{props.spanOne}</span>
          <span>{props.spanTwo}</span>
          <span>{props.spanThree}</span>
          <span>{props.spanFour}</span>
        </Techs>

        <Text><p>{props.description}</p></Text>
      </Details>

      <NameAndLink>
        <div><h3>{props.name}</h3></div>

        <div>
          <a href={props.link} target='_blank' rel='noopener noreferrer'>
            acesse aqui
          </a>
        </div>
      </NameAndLink>
    </ProjectContainer>
  );
};