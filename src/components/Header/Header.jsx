import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  HeaderContainer,
  Nav,
  Logo,
  NavLinks,
  NavLink,
  MobileMenuButton,
  MobileMenu,
  MobileNavLink,
} from './Header.styles';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const navLinkVariants = {
  hover: {
    y: -2,
    transition: {
      duration: 0.2,
    },
  },
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check scroll position immediately
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <HeaderContainer
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav>
        <Logo href="#" whileHover={{ scale: 1.05 }}>
          Portfolio
        </Logo>
        <NavLinks>
          {navItems.map(item => (
            <NavLink
              key={item.name}
              href={item.href}
              variants={navLinkVariants}
              whileHover="hover"
              $scrolled={scrolled}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>
        <MobileMenuButton onClick={toggleMenu} $scrolled={scrolled}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Nav>
      <AnimatePresence>
        {isOpen && (
          <MobileMenu 
            variants={mobileMenuVariants} 
            initial="closed" 
            animate="open" 
            exit="closed"
            $scrolled={scrolled}
          >
            {navItems.map(item => (
              <MobileNavLink
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                $scrolled={scrolled}
              >
                {item.name}
              </MobileNavLink>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
}

export default Header; 
