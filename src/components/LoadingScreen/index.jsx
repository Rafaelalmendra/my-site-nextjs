import { Container, SpinnerContainer } from './style'

export default function LoadingScreen() {
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
  )
}