import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GlobalStyles from './styles/GlobalStyles';

const AppContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled(motion.main)`
  flex: 1;
`;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

function App() {
  return (
    <>
      <GlobalStyles />
      <AnimatePresence>
        <AppContainer initial="initial" animate="animate" variants={pageVariants}>
          <Header />
          <Main>
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Main>
          <Footer />
        </AppContainer>
      </AnimatePresence>
    </>
  );
}

export default App;
