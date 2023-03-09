import { useFormik } from 'formik';
import { validationSchema, initialValues } from "../utilities/utilities";
import { useState } from 'react';
import { Register } from 'services';
import { AlertFeedback } from 'alerts';
import { useNavigate } from 'react-router-dom';
import { publicRoutes } from 'routes/routes';

export const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function onSubmit() {
        setLoading(true);
        Register(formik.values.email, formik.values.password)
        .then(() => {
            AlertFeedback.fire({icon: "success", text: "Registrado con éxito"})
            .then(() => navigate(publicRoutes.LOGIN));
        })
        .catch(err => {
            if(err.code === "auth/email-already-in-use") {
                AlertFeedback.fire({icon: "error", text: "El email ya esta registrado"})
            } else AlertFeedback.fire({icon: "error", text: "Ha ocurrido un error, intente más tarde"})
            console.log(err.code);
        })
        .finally(() => setLoading(false));
    };

    const formik = useFormik({initialValues, onSubmit, validationSchema});
    return { formik, loading };
};