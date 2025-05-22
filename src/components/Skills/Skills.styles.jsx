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
  font-size: 40px;
  text-align: center;
  margin-bottom: 48px;
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

export const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 48px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
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
  border-radius: 15px;
  padding: 32px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s ease;

  div {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 29px;
    color: var(--primary-color);
    margin-bottom: 24px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
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

export const SkillTitle = styled.h3`
  font-size: 29px;
  color: var(--primary-color);
  margin-bottom: 24px;
  font-weight: 600;
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SkillItem = styled(motion.li)`
  padding: 13px 0;
  border-bottom: 1px solid #eee;
  font-size: 18px;
  color: var(--text-primary);
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
    color: var(--primary-color);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const SkillLevel = styled(motion.div)`
  background: white;
  padding: 24px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  text-align: center;

  h3 {
    font-size: 40px;
    margin-bottom: 16px;
    color: var(--primary-color);
  }

  h4 {
    font-size: 19px;
    color: var(--text-primary);
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
    color: var(--text-secondary);
  }
`;
