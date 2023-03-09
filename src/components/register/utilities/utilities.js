import * as Yup from 'yup';

const message = "campo obligatorio";

export const validationSchema = Yup.object().shape({
    email: Yup.string().email("Debe ingresar un email valido")
    .required(message),
    password: Yup.string().min(8, "Debe contener almenos 8 caracteres").required(message),
    repeatPassword: Yup.string().oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
    .required(message)
});

export const initialValues = {
    email: "",
    password: "",
    repeatPassword: "",
};