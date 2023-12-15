import Skeleton from "react-loading-skeleton";

// styles
import * as S from "./styles";

export const HeaderProjectsSkeleton = () => {
  return (
    <S.Container>
      <div>
        <Skeleton className="title" />
      </div>

      <div className="links-container">
        <Skeleton className="links" inline count={5} />
      </div>
    </S.Container>
  );
};
