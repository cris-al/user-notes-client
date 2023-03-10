import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/routes";
import Home from "./components/Home/Home";
import Layout from "components/Layout/Layout";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import NotesForm from "components/NotesForm/NotesForm";
import Notes from "components/Notes/Notes";
import Register from "./components/register/Register";
import WindowsSize from "components/common/WindowsSize";
import Auth from "auth/Auth";

function App() {
  return (
    <Layout>
      <div className="app">
        <WindowsSize>
          <Routes>
            <Route exact path={publicRoutes.MAIN} element={<Main />} />
            <Route path={publicRoutes.REGISTER} element={<Register />} />
            <Route path={publicRoutes.LOGIN} element={<Login />} />
            <Route element={<Auth />}>
              <Route path={privateRoutes.HOME} element={<Home />} />
              <Route path={privateRoutes.NOTES} element={<Notes />} />
              <Route path={privateRoutes.CREATEFORM} element={<NotesForm />} />
              <Route path={privateRoutes.EDITFORMWITHID} element={<NotesForm />} />
            </Route>
          </Routes>
        </WindowsSize>
      </div>
    </Layout>
  );
}

export default App;
