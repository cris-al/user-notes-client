import { FormLogin, InputContainer, ButtonContainer, MainContainer, Paragraph,
  Label, LinkStyle } from "./loginStyled/LoginStyled";
import { useLoginHook } from "./hook/useLoginHook";
import Button from "components/common/Button";
import Title from "components/common/Title";
import Input from "components/common/Input";
import { publicRoutes } from "routes/routes";
import Error from "components/common/Error";
import { Spinner } from "react-bootstrap";

export default function Login() {
  const { formik, loading } = useLoginHook();
  const { values, touched, handleChange, errors, handleSubmit, handleBlur } = formik;

  return (
    <MainContainer>
      <Title text="Inicia Sesión" />
      <FormLogin onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Email: </Label>
          <Input type="email" value={values.email} name="email" placeholder="Ingresa un email..."
            handleBlur={handleBlur} handleChange={handleChange} />
          <Error error={errors.email} touched={touched.email} />
        </InputContainer>
        <InputContainer>
          <Label>Contraseña: </Label>
          <Input type="password" value={values.password} name="password" placeholder="Ingresa una contraseña..."
            handleBlur={handleBlur} handleChange={handleChange} />
          <Error error={errors.password} touched={touched.password} />
        </InputContainer>
        <ButtonContainer>
          { loading ? <Spinner /> : <Button type="submit" text="Iniciar Sesión" /> }
        </ButtonContainer>
      </FormLogin>
      <Paragraph>
        ¿Aún no tienes cuenta?{" "}<LinkStyle to={publicRoutes.REGISTER}>Registrate.</LinkStyle>
      </Paragraph>
    </MainContainer>
  );
}
