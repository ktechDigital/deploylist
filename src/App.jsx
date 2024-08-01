import React, { useEffect, useState } from "react";
import "./App.css";
import Checklist from "./components/ChecklistItem";
import styled from "styled-components";
import ResetImg from "./assets/reset.png";
import Ktechlogo from "./assets/ktechlogo.png";

const Container = styled.div`
  max-width: 100vw;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background: rgb(208, 208, 208);
  background: rgb(228, 228, 228);
  background: linear-gradient(
    -90deg,
    rgba(228, 228, 228, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const NewItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewItemInput = styled.input`
  padding: 10px;
  border: 2px solid #da2dda;
  border-radius: 10px;
  width: 240px;
  &:focus {
    outline-color: purple;
  }
`;
const AddButton = styled.button`
  /* padding: 10px; */
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  background-color: #b424b4;
  color: white;
  font-size: 30px;
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
  font-weight: 600;
  margin-left: 20px;
  &:hover {
    scale: 1.04;
  }
`;

const Klogo = styled.img`
  width: 200px;
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: rgba(62, 62, 70, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  padding: 10px;
`;

const Title = styled.h1`
  font-family: sans-serif;
  padding: 5px;
  border-bottom: 2px solid purple;
  strong {
    color: purple;
  }
`;
const ResetButton = styled.div`
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
  background-color: purple;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease; /* Usando 'all' para incluir a rotação */
  margin-top: 10px;

  img {
    width: 100%;
    transition: transform 0.3s ease; /* Transição suave para a transformação */
  }

  &:hover {
    scale: 1.04;

    img {
      transform: rotate(360deg); /* Rotação de 360 graus */
    }
  }
`;

function App() {
  const initialItems = [
    "Criar organização",
    "Definir local",
    "Criar division",
    "Criar Filas",
    "Criar usuários",
    "Criar telefones",
    "Definir telefones padrão dos usuários",
    "Atribuir divisions aos usuários",
    "Atribuir scripts de tela as filas",
    "Criar tabulações",
    "Adicionar tabulações as filas",
    "Definir tempo de tabulação automática",
    "Adicionar HSM",
    "Definir permissões/funçoes",
    "Homologação externa",
    "Homologação interna",
  ];

  const [items, setItems] = useState(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    return items.length == 0 ? initialItems : items;
  });
  const [newItem, setNewItem] = useState("");
  const [vazio, setVazio] = useState(false);

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    } else {
      setVazio(true);
      setTimeout(() => {
        setVazio(false);
      }, 1600);
    }
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <Container className="App">
      <ContainerContent>
        <Klogo src={Ktechlogo}></Klogo>
        <Title>
          Checklist Implantação <strong>☑</strong>
        </Title>
        <Checklist items={items} onDeleteItem={deleteItem} />
        <NewItemContainer>
          <NewItemInput
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Novo item"
          />

          <AddButton onClick={addItem}>+</AddButton>
        </NewItemContainer>
        <span
          style={{ height: "10px", fontFamily: "sans-serif", fontSize: "15px" }}
        >
          {vazio ? "Digite o nome do item!" : " "}
        </span>
        <ResetButton
          onClick={() => {
            setItems(initialItems);
          }}
        >
          <img src={ResetImg} alt="" />
        </ResetButton>
      </ContainerContent>
    </Container>
  );
}

export default App;
