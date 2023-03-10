import { useFormik } from 'formik';
import { validationSchema, initialValues } from "../utilities/utilities";
import { useEffect, useState } from 'react';
import { Register } from 'services';
import { AlertFeedback } from 'utilities/alerts';
import { useNavigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from 'routes/routes';
import { getLocalStorageItem } from 'utilities/localStorage';

export const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const token = getLocalStorageItem("token");

    function onSubmit() {
        setLoading(true);
        Register(formik.values.email, formik.values.password)
        .then(() => {
            AlertFeedback.fire({icon: "success", text: "Registrado con éxito"})
            .then(() => navigate(publicRoutes.LOGIN));
        })
        .catch(err => {
            if(err.code === "auth/email-already-in-use") {
                AlertFeedback.fire({icon: "error", text: "El email ya esta registrado"});
            } else AlertFeedback.fire({icon: "error", text: "Ha ocurrido un error, intente más tarde"});
            console.log(err.code);
        })
        .finally(() => setLoading(false));
    };

    const formik = useFormik({initialValues, onSubmit, validationSchema});

    useEffect(() => {
        token ? navigate(privateRoutes.HOME) : false
    }, []);

    return { formik, loading };
};