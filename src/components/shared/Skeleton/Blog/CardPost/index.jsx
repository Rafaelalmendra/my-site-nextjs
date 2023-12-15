import Skeleton from "react-loading-skeleton";

// styles
import * as S from "./styles";

export const CardPostSkeleton = ({ cards }) => {
  return (
    <S.Container>
      {Array(cards)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} className="card" />
        ))}
    </S.Container>
  );
};
