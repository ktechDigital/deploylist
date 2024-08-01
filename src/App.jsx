import React, { useState, useEffect } from "react";
import "./App.css";
import Checklist from "./components/ChecklistItem";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100vw;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  &:focus {
    outline-color: purple;
  }
`;

const AddButton = styled.button`
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
  &:hover {
    scale: 1.04;
  }
`;

const Title = styled.h1`
  font-family: sans-serif;
  padding: 5px;
  border-bottom: 2px solid purple;
  strong {
    color: purple;
  }
`;

const App = () => {
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
    "Adicioanr tabulações as filas",
    "Definir tempo de tabulação automática",
    "Adicionar HSM",
    "Definir permissões/funçoes",
    "Homologação externa",
    "Homologação interna",
  ];

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("checklistItems"));
    if (savedItems) {
      setItems(savedItems);
    } else {
      setItems(initialItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("checklistItems", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <Container className="App">
      <Title>Checklist Implantação ☑</Title>
      <Checklist items={items} deleteItem={deleteItem} />
      <NewItemContainer style={{ marginTop: "16px" }}>
        <NewItemInput
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="New item"
        />
        <AddButton onClick={addItem} style={{ marginLeft: "8px" }}>
          +
        </AddButton>
      </NewItemContainer>
    </Container>
  );
};

export default App;
