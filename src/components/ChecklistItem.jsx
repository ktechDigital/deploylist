import React, { useState } from "react";
import styled from "styled-components";

const CheckboxItem = styled.input`
  border-radius: 50%;
  min-width: 20px;
  max-width: 20px;
  min-height: 20px;
  max-height: 20px;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 10px;
`;

const ChecklistItem = ({ text, onDelete }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "8px",
        minWidth: "100%",
        justifyContent: "space-between",
      }}
    >
      <span
        style={{
          fontFamily: "sans-serif",
          textDecoration: isChecked ? "line-through" : "none",
        }}
      >
        {text}
      </span>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CheckboxItem
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <DeleteButton onClick={onDelete}>Delete</DeleteButton>
      </div>
    </div>
  );
};

const Checklist = ({ items, deleteItem }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: "350px",
        maxWidth: "350px",
      }}
    >
      {items.map((item, index) => (
        <ChecklistItem
          key={index}
          text={item}
          onDelete={() => deleteItem(index)}
        />
      ))}
    </div>
  );
};

export default Checklist;
