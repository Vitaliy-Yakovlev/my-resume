import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(180deg, var(--background-light) 0%, var(--background-dark) 100%);
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

export const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

export const ProjectCard = styled(motion.article)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #e9ecef;
`;

export const ProjectContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProjectTitle = styled.h3`
  font-size: 24px;
  color: var(--text-primary);
  margin-bottom: 8px;
  font-weight: 600;
`;

export const ProjectDescription = styled.p`
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 16px;
  flex-grow: 1;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;

  span {
    background: #e9ecef;
    color: #495057;
    padding: 4px 12px;
    border-radius: 5px;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: auto;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  background: var(--primary-color);
  color: white;
  border: 1px solid var(--primary-color);
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

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
`;

export const ProjectTags = styled.div`
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: 8px;
`;
 