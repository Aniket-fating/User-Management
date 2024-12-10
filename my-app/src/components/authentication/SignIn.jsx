import React, { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContainer = styled.div`
  background: #fff;
  width: 100%;
  max-width: 380px;
  margin: 10px;
  padding: 2rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #aaa;
  &:hover {
    color:#000;
  }
`;

const Heading = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem;
  margin-bottom: ${(props) => (props.error ? "0.25rem" : "1rem")};
  border: 1px solid ${(props) => (props.error ? "red" : "#ccc")};
  background:#fff;
  color: #000;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color:#0056b3;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.9rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: background-color 0.3s;

  ${(props) =>
    props.primary
      ? `
    background-color: #007bff;
    color: #fff;
    &:hover {
      background-color: #0056b3;
    }
  `
      : `
    background-color: #f5f5f5;
    color: #000;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color:#eaeaea;
    }
  `}
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  color: #aaa;
`;

const Line = styled.span`
  flex: 1;
  height: 1px;
  background: #ddd;
`;

const OrText = styled.span`
  margin: 0 1rem;
  font-size: 0.9rem;
`;

const SignInModal = ({ show, closeSignInModal }) => {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSignIn = () => {
    let isValid = true;

    if (!email) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Enter a valid email (e.g., shivipandey993@gmail.com).");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required.");
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      alert("Sign In Successful!");
      // can include backend api
    }
  };

  return (
    <ModalOverlay show={show}>
      <ModalContainer >
        <CloseButton onClick={closeSignInModal} >
          &times;
        </CloseButton>
        <Heading >Sign In</Heading>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
          error={emailError}
        />
        {emailError && <ErrorText>{emailError}</ErrorText>}
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
          error={passwordError}
        />
        {passwordError && <ErrorText>{passwordError}</ErrorText>}
        <Button primary onClick={handleSignIn}>
          Sign In
        </Button>
        <Divider >
          <Line  />
          <OrText>Or sign in with</OrText>
          <Line  />
        </Divider>
        <Button >
          <FcGoogle size={20} style={{ marginRight: "8px" }} />
          Sign in with Google
        </Button>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SignInModal;
