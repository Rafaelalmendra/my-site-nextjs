import Skeleton from "react-loading-skeleton";

// styles
import * as S from "./styles";

interface CardPostSkeletonProps {
  cards: number;
}

export const CardPostSkeleton = ({ cards }: CardPostSkeletonProps) => {
  return (
    <S.Container>
      {Array(cards)
        .fill(0)
        .map((_, index) => (
          <Skeleton className="card" />
        ))}
    </S.Container>
  );
};
