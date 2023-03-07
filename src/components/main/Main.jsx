import { MainContainer, Container2, Title, Container1, Image, Paragraph,
  ButtonContainer, SubTitle } from "./mainStyled/MainsStyled";
import NotesIcon from "assets/notes-icon.svg";
import Button from "components/common/Button";
import { Colors } from "themes/themes";
import { useMain } from "./hook/useMain";
import { title, subTitle, paragraph, textButtonRegister, textButtonSession } from "./text/index";

export default function Main() {
  const { toLogin, toRegister } = useMain();

  return (
    <MainContainer>
      <Title>{title}</Title>
      <Container1>
        <div>
          <Image src={NotesIcon} alt="icono de notas" />
        </div>
        <Container2>
          <SubTitle>{subTitle}</SubTitle>
          <Paragraph>{paragraph}</Paragraph>
          <ButtonContainer>
            <Button
              text={textButtonSession}
              onClick={toLogin}
              backgroundColor={Colors.background.blue}
              backgroundHover={Colors.hover.blue}
            />
            <Button text={textButtonRegister} onClick={toRegister} />
          </ButtonContainer>
        </Container2>
      </Container1>
    </MainContainer>
  );
}
