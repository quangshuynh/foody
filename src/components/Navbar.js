import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext'; 

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(38, 38, 38, 0.95);
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.button`
  background: transparent;
  border: none;
  color: #f5f5f5;
  font-size: 1.1rem;
  margin: 0 10px;
  cursor: pointer;
  padding: 10px 15px;
  border-bottom: ${(props) =>
    props.$active ? '3px solid #00bcd4' : '3px solid transparent'};
  transition: color 0.3s ease, transform 0.3s ease, border-bottom 0.3s ease;

  &:hover {
    color: #00bcd4;
    transform: translateY(-2px);
    border-bottom: 3px solid #00bcd4;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px; 
  
  @media (max-width: 600px) {
    margin-right: 0;
    margin-top: 10px;
  }
`;

const AuthButton = styled.button`
  background: #00bcd4;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  transition: background 0.3s ease;

  &:hover {
    background: #00a1b5;
  }
`;

const Navbar = ({ selectedSection, setSelectedSection, onShowLogin, onShowRegister, onLogout }) => {
  const { isGuest } = useAuth();

  return (
    <NavContainer>
      <NavItems>
        <NavItem
          $active={selectedSection === 'visited'}
          onClick={() => setSelectedSection('visited')}
        >
          Visited
        </NavItem>
        <NavItem
          $active={selectedSection === 'toVisit'}
          onClick={() => setSelectedSection('toVisit')}
        >
          To Visit
        </NavItem>
        <NavItem
          $active={selectedSection === 'recommended'}
          onClick={() => setSelectedSection('recommended')}
        >
          Recommended
        </NavItem>
      </NavItems>
      <AuthButtons>
        {isGuest ? (
          <>
            <AuthButton onClick={onShowLogin}>Login</AuthButton>
            <AuthButton onClick={onShowRegister}>Register</AuthButton>
          </>
        ) : (
          <AuthButton onClick={onLogout}>Logout</AuthButton>
        )}
      </AuthButtons>
    </NavContainer>
  );
};

export default Navbar;
