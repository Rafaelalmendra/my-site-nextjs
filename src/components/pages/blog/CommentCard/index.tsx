// styles
import { BigHead } from "@bigheads/core";

// styles
import * as S from "./styles";

export const CommentCard = () => {
  return (
    <S.Container>
      <S.Header>
        <S.UserInfos>
          <BigHead />

          <p>Rafael Almendra</p>
        </S.UserInfos>

        <p className="comment-date">14/04/2023</p>
      </S.Header>

      <S.Content>
        <p>
          Essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages.
        </p>
      </S.Content>
    </S.Container>
  );
};
