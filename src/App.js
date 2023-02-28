import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { privateRoutes } from "./routes/routes";
import Home from "./components/Home/Home";
import Layout from "components/Layout/Layout";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import NotesForm from "components/NotesForm/NotesForm";
import Notes from "components/Notes/Notes";
import Register from "./components/register/Register";
import WindowsSize from "components/common/WindowsSize";

function App() {
  return (
    <Layout>
      <div className="app">
        <WindowsSize>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path={privateRoutes.HOME} element={<Home />} />
            <Route path={privateRoutes.LOGIN} element={<Login />} />
            <Route path={privateRoutes.REGISTER} element={<Register />} />
            <Route path={privateRoutes.NOTES} element={<Notes />} />
            <Route path={privateRoutes.CREATEFORM} element={<NotesForm />} />
            <Route
              path={privateRoutes.EDITFORMWITHID}
              element={<NotesForm />}
            />
          </Routes>
        </WindowsSize>
      </div>
    </Layout>
  );
}

export default App;
