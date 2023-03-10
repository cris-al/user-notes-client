import { MainContainer, Form, Label, InputContainer, TextArea,
  ButtonContainer } from "./NotesFormStyles/NotesFormStyles";
import Title from "components/common/Title";
import Input from "components/common/Input";
import Button from "components/common/Button";
import Error from "components/common/Error";
import { useNotes } from "./hook/useNotes";

export default function NotesForm() {
  const { id, handleChange, handleBlur, handleSubmit, values, errors,
    touched } = useNotes();

  return (
    <MainContainer>
      <Title text={id ? "Editar Nota" : "Crear Nota"} />
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Titulo:</Label>
          <Input
            value={values.title}
            name="title"
            placeholder="Ingresa un titulo..."
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <Error error={errors.title} touched={touched.title}/>
        </InputContainer>
        <InputContainer>
          <Label>Descripción:</Label>
          <TextArea
            value={values.description}
            name="description"
            rows={10}
            placeholder="Ingresa una descripción..."
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Error error={errors.description} touched={touched.description}/>
        </InputContainer>
        <ButtonContainer>
          <Button text={id ? "Editar" : "Crear"} type="submit" />
        </ButtonContainer>
      </Form>
    </MainContainer>
  );
}
