import { useNavigate } from "react-router-dom";
import { privateRoutes } from "routes/routes";
import {
  MainContainer,
  Container2,
  Title,
  Container1,
  Image,
  Paragraph,
  ButtonContainer,
  SubTitle,
} from "./mainStyled/MainsStyled";
import NotesIcon from "assets/notes-icon.svg";
import Button from "components/common/Button";
import { Colors } from "themes/themes";

export default function Main() {
  const navigate = useNavigate();

  function toLogin() {
    navigate(privateRoutes.LOGIN);
  }

  function toRegister() {
    navigate(privateRoutes.REGISTER);
  }
  return (
    <MainContainer className="my-4 my-sm-5">
      <div className="d-flex text-center">
        <Title>Notas de Usuario</Title>
      </div>
      <Container1>
        <div>
          <Image src={NotesIcon} alt="icono de notas" />
        </div>
        <Container2>
          <SubTitle>Bienvenidos</SubTitle>
          <Paragraph>
            Notas de Usuario es una aplicación en la que podrás tomar notas
            sobre lo que desees y quedarán guardadas para que las veas cuando
            gustes.
          </Paragraph>
          <ButtonContainer>
            <Button
              text="Iniciar Sesión"
              onClick={toLogin}
              backgroundColor={Colors.background.blue}
              backgroundHover={Colors.hover.blue}
            />

            <Button text="Registrarme" onClick={toRegister} />
          </ButtonContainer>
        </Container2>
      </Container1>
    </MainContainer>
  );
}
