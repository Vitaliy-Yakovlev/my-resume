import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  FooterSection,
  Container,
  FooterContent,
  FooterColumn,
  SocialLinks,
  SocialLink,
  Copyright,
} from './Footer.styles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Footer() {
  return (
    <FooterSection>
      <Container>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <FooterContent>
            <FooterColumn variants={itemVariants}>
              <h3>About Me</h3>
              <p>
                Since 2015, I have been working independently, and in 2021, I started my career at
                United IT Development Corporation, where I continue to work to this day.
              </p>
              <SocialLinks>
                <SocialLink
                  href="https://github.com/Vitaliy-Yakovlev"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                >
                  <FaGithub />
                </SocialLink>
                <SocialLink
                  href="https://linkedin.com/in/vitaliy-yakovlev"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                >
                  <FaLinkedin />
                </SocialLink>
              </SocialLinks>
            </FooterColumn>
            <FooterColumn variants={itemVariants}>
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>GoIT - FullStack Developer</strong>
                  <br />
                  2020 – 2021 | Ukraine
                </li>
              </ul>
            </FooterColumn>
            <FooterColumn variants={itemVariants}>
              <h3>Contact Info</h3>
              <ul>
                <li>Email: vitaliy-yakovlev@ukr.net</li>
                <li>Phone 1: +38 050 909 06 60</li>
                <li>Phone 2: +39 333 578 74 65</li>
              </ul>
            </FooterColumn>
          </FooterContent>
        </motion.div>
        <Copyright>© {new Date().getFullYear()} Vitaliy Yakovlev. All rights reserved.</Copyright>
      </Container>
    </FooterSection>
  );
}

export default Footer;
