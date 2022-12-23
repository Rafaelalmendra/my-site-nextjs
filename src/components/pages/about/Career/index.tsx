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
      <p className="title">{title}</p>

      <S.CompanyAndDate>
        <a href={companyLink} target="_blank" rel="noreferrer">
          {company}
        </a>
        <span>∙</span>
        <span>{date}</span>
      </S.CompanyAndDate>

      <S.Skills>
        <p>Skills:</p>
        <span>{skills}</span>
      </S.Skills>
    </S.Container>
  );
};
