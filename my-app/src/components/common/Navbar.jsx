import React, { useState } from "react";
import styled from "styled-components";
import { FaRegBell } from "react-icons/fa";


import SignInModal from "../authentication/SignIn";
import SignUpModal from "../authentication/SignUp";

// Styled Components
const NavbarContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isDarkMode",
})`
  display: flex;
  height: 7vh;
  width: auto;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #eaecee;
  color:#000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const Heading = styled.div`
  font-size: 22px;
  font-weight: bold;
  font-family: Calibri;
  color: 
#2633c7
;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 19px;
  color: inherit;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: inherit;
`;

const AuthButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  background-color: #333;
   &:hover {
    color:#fff;
    background-color:#131b6b;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  cursor: pointer;
  color:#fff;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Line = styled.div`
  height: 3px;
  width: 100%;
  background-color: #000;
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 7vh;
  right: 0;
  width: 100%;
  background-color:#eaecee;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  padding: 1rem;
  gap: 10px;

  @media (max-width: 768px) {
    position: absolute;
    top: 7vh;
    right: 0;
    width: 100%;
    background-color: #eaecee;
    color:#000;
    display: ${(props) => (props.show ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 10px;
  }
`;

function Navbar() {
 
  const [showMenu, setShowMenu] = useState(false);

  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  // Functions to open/close modals
  const openSignInModal = () => setShowSignInModal(true);
  const closeSignInModal = () => setShowSignInModal(false);

  const openSignUpModal = () => setShowSignUpModal(true);
  const closeSignUpModal = () => setShowSignUpModal(false);

  // Toggle the mobile menu
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      {/* Navbar Component */}
      <NavbarContainer >
        <Heading>USER MANAGEMENT</Heading>
        <ButtonContainer>
         

          {/* Notification Button */}
          <IconButton  aria-label="Notifications">
            <FaRegBell />
          </IconButton>

          {/* Auth Buttons */}
          <AuthButton  onClick={openSignInModal}>
            SignIn
          </AuthButton>
          <AuthButton  onClick={openSignUpModal}>
            SignUp
          </AuthButton>
        </ButtonContainer>

        {/* Hamburger Icon */}
        <HamburgerMenu onClick={toggleMenu}>
          <Line  />
          <Line  />
          <Line  />
        </HamburgerMenu>
      </NavbarContainer>

      {/* Mobile Menu */}
      <MobileMenu  show={showMenu}>
        
        <IconButton aria-label="Notifications">
          <FaRegBell />
        </IconButton>
        <AuthButton  onClick={openSignInModal}>
          SignIn
        </AuthButton>
        <AuthButton  onClick={openSignUpModal}>
          SignUp
        </AuthButton>
      </MobileMenu>

      {/* Modals */}
      <SignInModal show={showSignInModal} closeSignInModal={closeSignInModal} />
      <SignUpModal show={showSignUpModal} closeSignUpModal={closeSignUpModal} />
    </>
  );
}

export default Navbar;
