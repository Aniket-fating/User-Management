import React, { useState } from "react";
import styled from "styled-components";


//Styled Components
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  padding: 20px;
  margin:10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ModalHeader = styled.h2`
  text-align: center;
  color: #5460e3;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #000;
  cursor: pointer;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 20px;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
  margin: 4px 2px;
  color: #333;
`;

const InputField = styled.input`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #fff;
  color: #000;
  width: calc(100% - 25px);
`;

const Button = styled.button`
  padding: 12px 25px;
  background-color: #5460e3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: calc(100% - 40px);
  margin: 0 auto;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    background-color: #1e6e99;
  }
`;

const ErrorMessage = styled.div`
  width: calc(100% - 60px);
  margin: auto;
  text-align: center;
  padding: 10px;
  background-color:#f5b7b1;
  color: #000;
  font-size: 14px;
`;

const AddPermissionModal = ({ isOpen, onClose, onSave }) => {
 
  const [permissionName, setPermissionName] = useState("");
  const [error, setError] = useState("");

  const validateFields = () => {
    if (permissionName.length < 4) {
      setError("Permission name must be greater than 3 characters.");
      return false;
    }
    if (!/^[A-Za-z\s]+$/.test(permissionName)) {
      setError("Permission name should contain only letters and spaces.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      onSave({ id: Date.now(), permission: permissionName });
      setPermissionName("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContainer >
        <CloseButton  onClick={onClose}>
          &times;
        </CloseButton>
        <ModalHeader>Add New Permission</ModalHeader>
        {error && <ErrorMessage >{error}</ErrorMessage>}
        <FormContainer onSubmit={handleSubmit}>
          <FormField>
            <Label >Permission Name:</Label>
            <InputField
              
              type="text"
              placeholder="Enter Permission Name"
              value={permissionName}
              onChange={(e) => setPermissionName(e.target.value)}
            />
          </FormField>
          <Button type="submit">Add Permission</Button>
        </FormContainer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default AddPermissionModal;
