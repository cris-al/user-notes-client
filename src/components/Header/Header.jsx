import Button from "../common/Button";
import { publicRoutes } from "routes/routes";
import { LinkStyledButton,
  HeaderContainer,
  LinkStyled,
  LinksContainer,
  Paragraph,
  Image,
} from "./headerStyled/HeaderStyled";
import NotesIcon from "assets/notes-icon.svg";
import { Colors } from "themes/themes";

export default function Header({ show, setShow }) {
  function handleShow(e) {
    e.preventDefault();
    setShow(!show);
  }

  return (
    <HeaderContainer>
      <Image src={NotesIcon} alt="imagen" />
      {/* <div className="d-flex gap-3">
        <LinkStyledButton to={publicRoutes.LOGIN}>Iniciar Sesión</LinkStyledButton>
        <LinkStyledButton to={publicRoutes.REGISTER}>Registrarme</LinkStyledButton>
      </div> */}
      {/* <LinksContainer>
        <LinkStyled to={privateRoutes.NOTES}>
          <Paragraph>Notas</Paragraph>
        </LinkStyled>
        <LinkStyled to={privateRoutes.IMAGES}>
          <Paragraph>Imagenes</Paragraph>
        </LinkStyled>
      </LinksContainer> */}
    </HeaderContainer>
  );
}
