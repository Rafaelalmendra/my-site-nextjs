import Skeleton from "react-loading-skeleton";

//styles
import * as S from "./styles";

export const CardsProjectsSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, index) => (
      <S.Container key={index}>
        <Skeleton className="card-image" />

        <S.Infos>
          <Skeleton className="info-title" />

          <div>
            <Skeleton className="info-text" />
          </div>
        </S.Infos>

        <S.Details>
          <S.TechsContainer>
            <Skeleton className="techs" count={5} inline />
          </S.TechsContainer>

          <div>
            <Skeleton className="links" circle count={3} inline />
          </div>
        </S.Details>
      </S.Container>
    ));
};
