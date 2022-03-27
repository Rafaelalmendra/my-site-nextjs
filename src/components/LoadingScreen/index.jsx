import { Container, SpinnerContainer } from "./style";

const LoadingScreen = () => {
  return (
    <Container>
      <SpinnerContainer className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </SpinnerContainer>
    </Container>
  );
};

export default LoadingScreen();
