import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => 
    props.scrolled 
      ? 'linear-gradient(135deg, var(--text-primary) 0%, #2c3338 100%)'
      : 'transparent'
  };
  backdrop-filter: ${props => (props.scrolled ? 'blur(10px)' : 'none')};
  box-shadow: ${props => (props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none')};
  transition: all var(--transition);
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(motion.a)`
  font-size: 29px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const NavLinks = styled(motion.div)`
  display: flex;
  gap: 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(motion.a)`
  color: ${({ $scrolled }) => ($scrolled ? 'white' : 'var(--text-primary)')};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 8px 0;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: ${({ $scrolled }) => ($scrolled ? 'white' : 'var(--primary-color)')};
    transition: width var(--transition);
  }

  &:hover {
    color: ${({ $scrolled }) => ($scrolled ? 'rgba(255, 255, 255, 0.8)' : 'var(--primary-color)')};
  }

  &:hover:after {
    width: 100%;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  font-size: 24px;
  color: ${({ $scrolled }) => ($scrolled ? 'white' : 'var(--text-primary)')};
  cursor: pointer;
  background: none;
  border: none;
  padding: 8px;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--background-dark);
  padding: 80px 32px;
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

export const MobileNavLink = styled(motion.a)`
  color: ${({ $scrolled }) => ($scrolled ? 'white' : 'var(--text-primary)')};
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  padding: 8px;

  &:hover {
    color: var(--primary-color);
  }
`;
