import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled.section`
  padding: 100px 0 60px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  scroll-margin-top: 70px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(120deg, var(--text-primary) 0%, var(--primary-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const ImageContainer = styled(motion.div)`
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    aspect-ratio: 1;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media (max-width: 768px) {
    order: -1;
    display: flex;
    justify-content: center;
  }
`;

export const TextContent = styled(motion.div)`
  h3 {
    font-size: 1.8rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
    color: var(--text-primary);
    line-height: 1.8;
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }
`;

export const LanguageSkills = styled.div`
  margin-top: 2rem;

  h4 {
    font-size: 1.2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
    color: var(--text-primary);
    font-size: 1.1rem;
  }
`;

export const CertificateButton = styled(motion.button)`
  background: var(--primary-color);
  color: white;
  border: 1px solid var(--primary-color);
  padding: 8px 20px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background: white;
    color: var(--primary-color);
    border-color: var(--primary-color);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(41, 151, 255, 0.2);
  }

  svg {
    font-size: 1.2rem;
  }
`;
