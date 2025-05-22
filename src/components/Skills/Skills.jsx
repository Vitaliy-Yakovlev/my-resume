import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaNode, FaSass } from 'react-icons/fa';
import { SiRedux, SiExpress } from 'react-icons/si';
import {
  SkillsSection,
  Container,
  Title,
  SkillsContainer,
  SkillsGrid,
  SkillCard,
} from './Skills.styles';

const skills = [
  {
    icon: <FaHtml5 />,
    title: 'HTML5',
    description: 'Semantic markup, responsive design, and modern layouts',
    color: '#E34F26',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    icon: <FaCss3Alt />,
    title: 'CSS3',
    description: 'Modern CSS features, Flexbox, Grid, and animations',
    color: '#1572B6',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    icon: <FaSass />,
    title: 'SCSS',
    description: 'Advanced styling with variables, mixins, and nesting',
    color: '#CC6699',
    url: 'https://sass-lang.com',
  },
  {
    icon: <FaJs />,
    title: 'JavaScript',
    description: 'Modern JavaScript features and DOM manipulation',
    color: '#F7DF1E',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    icon: <FaReact />,
    title: 'React',
    description: 'Building user interfaces with React and its ecosystem',
    color: '#61DAFB',
    url: 'https://react.dev',
  },
  {
    icon: <SiRedux />,
    title: 'Redux',
    description: 'State management with Redux and Redux Toolkit',
    color: '#764ABC',
    url: 'https://redux.js.org',
  },
  {
    icon: <FaNode />,
    title: 'Node.js',
    description: 'Server-side JavaScript with Node.js',
    color: '#339933',
    url: 'https://nodejs.org',
  },
  {
    icon: <SiExpress />,
    title: 'Express',
    description: 'Fast, unopinionated web framework for Node.js',
    color: '#000000',
    url: 'https://expressjs.com',
  },
  {
    icon: <FaGit />,
    title: 'Git',
    description: 'Version control and collaboration',
    color: '#F05032',
    url: 'https://git-scm.com',
  },
];

const softSkills = [
  {
    icon: '👥',
    title: 'Teamwork',
    description: 'Effective collaboration and communication within teams',
    color: '#4CAF50',
  },
  {
    icon: '✓',
    title: 'Responsible',
    description: 'Reliable and accountable in all tasks and commitments',
    color: '#2196F3',
  },
  {
    icon: '🚀',
    title: 'Quick Learning',
    description: 'Rapidly adapting to new technologies and concepts',
    color: '#9C27B0',
  },
  {
    icon: '💡',
    title: 'Problem Solving',
    description: 'Creative and analytical approach to challenges',
    color: '#FF9800',
  },
  {
    icon: '🎯',
    title: 'Attention to Detail',
    description: 'Meticulous focus on quality and precision',
    color: '#F44336',
  },
];

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

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technologies
        </Title>
        <SkillsContainer>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                as="a"
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                }}
                style={{
                  borderTop: `3px solid ${skill.color}`,
                }}
              >
                <div style={{ color: skill.color }}>{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </SkillCard>
            ))}
          </SkillsGrid>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: '32px', marginTop: '48px' }}
          >
            Soft Skills
          </Title>
          <SkillsGrid>
            {softSkills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                }}
                style={{
                  borderTop: `3px solid ${skill.color}`,
                }}
              >
                <div style={{ color: skill.color, fontSize: '32px' }}>{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsContainer>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
