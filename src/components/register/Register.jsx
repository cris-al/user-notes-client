import { Form, InputContainer, RegisterContainer, ButtonContainer, Paragraph,
  LinkStyle, Label } from "./registerStyled/RegisterStyled";
import Input from "components/common/Input";
import Button from "components/common/Button";
import Title from "components/common/Title";
import { publicRoutes } from "routes/routes";
import { useRegister } from "./hook/useRegister";
import Error from "components/common/Error";
import { Spinner } from "react-bootstrap";

export default function Register() {
  const { formik, loading } = useRegister();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

  return (
    <RegisterContainer>
      <Title text="Registrate" />
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Email: </Label>
          <Input type="email" name="email" placeholder="Email..." value={values.email} 
            handleBlur={handleBlur} handleChange={handleChange} />
          <Error error={errors.email} touched={touched.email} />
        </InputContainer>
        <InputContainer>
          <Label>Contraseña: </Label>
          <Input type="password" name="password" placeholder="Contraseña..." value={values.password}
            handleBlur={handleBlur} handleChange={handleChange} />
          <Error error={errors.password} touched={touched.password} />
        </InputContainer>
        <InputContainer>
          <Label>Repetir contraseña: </Label>
          <Input type="password" name="repeatPassword" placeholder="Contraseña..." value={values.repeatPassword}
            handleBlur={handleBlur} handleChange={handleChange} />
          <Error error={errors.repeatPassword} touched={touched.repeatPassword} />
        </InputContainer>
        <ButtonContainer>
          { loading ? <Spinner /> : <Button text="Registrarme" type="submit" /> }
        </ButtonContainer>
      </Form>
      <Paragraph>
        ¿Ya tienes una cuenta?{" "}<LinkStyle to={publicRoutes.LOGIN}>Inicia Sesión.</LinkStyle>
      </Paragraph>
    </RegisterContainer>
  );
};