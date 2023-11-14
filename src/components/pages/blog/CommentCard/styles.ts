import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  border-radius: 4px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4px 16px;
  background: #182030;

  .comment-date {
    font-size: 16px;
    color: var(--white);
    opacity: 0.9;
  }
`;

export const UserInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    width: 60px;
    height: 60px;
  }

  p {
    font-size: 18px;
    color: var(--white);
    opacity: 0.9;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 18px 16px;
  background: #14171c;
`;
