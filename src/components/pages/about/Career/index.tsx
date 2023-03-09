// styles
import * as S from "./styles";

interface CareerProps {
  title: string;
  company: string;
  companyLink: string;
  date: string;
  skills: string;
}

export const Career = ({
  title,
  company,
  companyLink,
  date,
  skills,
}: CareerProps) => {
  return (
    <S.Container>
      {!!title && <p className="title">{title}</p>}

      {!!company && !!date && !!companyLink && (
        <S.CompanyAndDate>
          <a href={companyLink} target="_blank" rel="noreferrer">
            {company}
          </a>
          <span>∙</span>
          <span>{date}</span>
        </S.CompanyAndDate>
      )}

      {!!skills && (
        <S.Skills>
          <p>Skills:</p>
          <span>{skills}</span>
        </S.Skills>
      )}
    </S.Container>
  );
};
