import React, { useState } from "react";
import styled from "styled-components";
import victor from "../assets/trashcan.png";

const CheckboxItem = styled.input`
  border-radius: 50%;
  min-width: 20px;
  max-width: 20px;
  min-height: 20px;
  max-height: 20px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  border: none;
  background-color: #e74a4a;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  padding: 5px;
  min-width: 30px;
  max-width: 30px;
  min-height: 30px;
  max-height: 30px;
  margin-left: 5px;
  transition: 0.4s;
  &:hover {
    scale: 1.1;
  }
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
      <div>
        <span
          style={{
            borderLeft: "2px solid purple",
            marginLeft: "4px",
            paddingLeft: "4px",
            fontFamily: "sans-serif",
            textDecoration: isChecked ? "line-through" : "none",
            maxWidth: "200px",
          }}
        >
          {text}
        </span>
      </div>
      <div>
        <CheckboxItem
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <DeleteButton onClick={onDelete}>
          <img style={{ width: "100%" }} src={victor} alt="" />
        </DeleteButton>
      </div>
    </div>
  );
};

const Checklist = ({ items, onDeleteItem }) => {
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
          onDelete={() => onDeleteItem(index)}
        />
      ))}
    </div>
  );
};

export default Checklist;
