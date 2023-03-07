import { notes } from "./utilities/utilities";
import { HomeContainer, NoteContainer } from "./homeStyled/HomeStyled";
import { useState } from "react";
import Button from "../common/Button";
import Header from "components/Header/Header";
import SubTitle from "components/common/SubTitle";
import ImageTest from "assets/tree-736885__480.jpg";
import SideBar from "components/SideBar/SideBar";
import Title from "components/common/Title";

export default function Home() {
  const [show, setShow] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleClick(e, el) {
    e.preventDefault();
    setNote({
      title: el.title,
      content: el.content,
    });
  }

  return (
    <HomeContainer>
      <Title text="Mis Notas"/>
      <NoteContainer>
        Hola
      </NoteContainer>
    </HomeContainer>
  );
}
