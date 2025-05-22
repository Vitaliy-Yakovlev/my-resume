import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--background-dark) 100%);
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
  margin-bottom: 3rem;
  text-align: center;
  background: linear-gradient(120deg, var(--text-primary) 0%, var(--primary-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

export const SoftSkills = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.8rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 0.8rem 0;
    color: var(--text-primary);
    font-size: 1.1rem;
    display: flex;
    align-items: center;

    &:before {
      content: '•';
      color: var(--primary-color);
      font-weight: bold;
      margin-right: 1rem;
    }
  }
`;

export const SkillCard = styled(motion.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s ease;

  div {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;
