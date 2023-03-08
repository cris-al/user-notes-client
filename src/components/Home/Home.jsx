import { notes } from "./utilities/utilities";
import { HomeContainer, NoteContainer, Note, NoteDescription,
  NoteTitle, ButtonContainer } from "./homeStyled/HomeStyled";
import Title from "components/common/Title";
import Button from "components/common/Button";
import { Colors } from "themes/themes";

export default function Home() {

  return (
    <HomeContainer>
      <Title text="Mis Notas"/>
      <ButtonContainer>
        <Button text="Nueva Nota"/>
      </ButtonContainer>
      <NoteContainer>
        { notes.map(note =>
            <Note key={note.title}>
              <NoteTitle>{note.title}</NoteTitle>
              <NoteDescription>{note.content}</NoteDescription>
              <ButtonContainer>
                <Button text="Editar" backgroundColor={Colors.background.blue}
                  backgroundHover={Colors.hover.blue}/>
                <Button text="Eliminar" backgroundColor={Colors.background.red}
                  backgroundHover={Colors.hover.red}/>
              </ButtonContainer>
            </Note>) }
      </NoteContainer>
    </HomeContainer>
  );
};
