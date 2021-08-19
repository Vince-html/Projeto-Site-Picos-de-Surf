import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Logo da pagina" />
    <S.Title>React hello</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS n Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="um desenvolverdor em frente a tela com codigo"
    />
  </S.Wrapper>
)

export default Main
