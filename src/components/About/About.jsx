import React, { useState } from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../../assets/photo.jpg';
import Modal from '../Modal/Modal';
import {
  AboutSection,
  Container,
  Title,
  Content,
  ImageContainer,
  TextContent,
  LanguageSkills,
  CertificateButton,
} from './About.styles';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AboutSection id="about">
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </Title>
        <Content>
          <TextContent
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Front-End Developer</h3>
            <p>
              I am a Frontend developer with experience in creating, improving, and bringing
              websites to life. I specialize in making websites convenient, easy, and accessible for
              users.
            </p>
            <p>
              My strong point is work with React JS, and I would like to continue advancing in this
              direction. I am constantly developing my knowledge, skills, and abilities, as it's
              impossible to know the whole Frontend. I am always open to new knowledge and quick to
              learn.
            </p>
            <LanguageSkills>
              <h4>Language Skills:</h4>
              <ul>
                <li>Ukrainian - Native</li>
                <li>English - Pre-Intermediate</li>
              </ul>
            </LanguageSkills>
            <CertificateButton
              onClick={() => setIsModalOpen(true)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View GoIT Certificate
            </CertificateButton>
          </TextContent>
          <ImageContainer
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src={myPhoto} alt="Vitaliy Yakovlev" />
          </ImageContainer>
        </Content>
      </Container>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        certificateUrl="/images/certificate/goit-certificate.jpg"
      />
    </AboutSection>
  );
};

export default About;
