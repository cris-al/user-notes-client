import { useFormik } from 'formik';
import { validationSchema, initialValues } from '../utilities/utilities';
import { useState } from 'react';
import { Login } from 'services';
import { AlertFeedback } from 'alerts';
import { useNavigate } from 'react-router-dom';
import { privateRoutes } from 'routes/routes';

export const useLoginHook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function onSubmit(){
        setLoading(true);
        Login(formik.values.email, formik.values.password)
        .then(() => {
            AlertFeedback.fire({icon: "success", text: "Bienvenido"})
            .then(() => navigate(privateRoutes.HOME));
        })
        .catch(err => {
            if(err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
                AlertFeedback.fire({icon: "error", text: "Email y/o contraseña invalidos"})
            } else AlertFeedback.fire({icon: "error", text: "Ha ocurrido un error, intente más tarde"});
            console.log(err.code)
        })
        .finally(() => setLoading(false));
    }

    const formik = useFormik({initialValues, onSubmit, validationSchema});

    return { formik, loading };
};