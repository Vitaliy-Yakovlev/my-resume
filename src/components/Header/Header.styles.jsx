import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => (props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent')};
  backdrop-filter: ${props => (props.scrolled ? 'blur(10px)' : 'none')};
  box-shadow: ${props => (props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: all 0.3s ease;
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(motion.a)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(motion.a)`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: var(--text-primary);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.5rem;
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
  background: rgba(255, 255, 255, 0.98);
  padding: 5rem 2rem;
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const MobileNavLink = styled(motion.a)`
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.5rem;
`;
