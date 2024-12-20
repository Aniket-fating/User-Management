import React from "react";
import styled from "styled-components";
import { FaUsers, FaUserCog, FaUserLock } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import { Link } from "react-router-dom"; 

// Styled Components
const SidebarContainer = styled.div`
  height: 84.5vh;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
`;

const Menu = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin-top: 20px;
`;

const MenuItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  color:#333;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ddd;
    color:#000;
  }

  & svg {
    margin-right: 10px;
    font-size: 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  width: 100%;
`;

function Sidebar() {


  return (
    <SidebarContainer >
     
      <Menu>
        <MenuItem >
          <StyledLink  to="/">
            <MdDashboard />
            Dashboard
          </StyledLink>
        </MenuItem>
        <MenuItem >
          <StyledLink  to="/manageuser">
            <FaUsers />
            Users
          </StyledLink>
        </MenuItem>
        <MenuItem >
          <StyledLink  to="/managerole">
            <FaUserCog />
            Roles
          </StyledLink>
        </MenuItem>
        <MenuItem >
          <StyledLink  to="/managepermission">
            <FaUserLock />
            Permissions
          </StyledLink>
        </MenuItem>
      </Menu>
    </SidebarContainer>
  );
}

export default Sidebar;
