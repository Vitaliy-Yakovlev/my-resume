import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button/Button';
import {
  ProjectsSection,
  Container,
  Title,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  ProjectLinks,
  ProjectLink,
} from './Projects.styles';

const projects = [
  {
    id: 1,
    title: 'NFT Battle Miners',
    description:
      'NFT Battle Miners (NBM) is a P2E game on WAX blockchain with a collection of NFT cards used for mining tokens like Fusium, Minium, Actium & Constructium, WAX, NBM NFTs and Partnership pool NFTs.',
    image: '/images/projects/nft-battle-miners.jpg',
    techStack: ['React.js', 'Redux', 'HTML5', 'React Router', 'Redux Persist'],
    liveUrl: 'https://www.nftbattleminers.com/',
    githubUrl: 'https://github.com/Vitaliy-Yakovlev/nft-battle-miners',
  },
  {
    id: 2,
    title: 'Ice Cream',
    description:
      'A mobile-first website for selling ice cream, featuring responsive design and smooth animations.',
    image: '/images/projects/ice-cream.jpg',
    techStack: ['HTML5', 'CSS3', 'SASS', 'JavaScript'],
    liveUrl: 'https://vitaliy-yakovlev.github.io/teamwork-project-HTML-CSS/',
    githubUrl: 'https://github.com/Vitaliy-Yakovlev/teamwork-project-HTML-CSS',
  },
  {
    id: 3,
    title: 'Filmoteka',
    description:
      'A mobile-first adaptive web application with authorization, profile page, and ability to add movies to your personal library for future viewing.',
    image: '/images/projects/filmoteka.jpg',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Parcel', 'SASS'],
    liveUrl: 'https://vladtravel.github.io/project-02/',
    githubUrl: 'https://github.com/vladtravel/project-02',
  },
  {
    id: 4,
    title: 'GoIT Project Tasks',
    description:
      'A mobile-first application for planning projects, sprints, and tasks with lead time tracking functionality.',
    image: '/images/projects/goit-tasks.jpg',
    techStack: ['React.js', 'Redux', 'HTML5', 'CSS3', 'Axios', 'React Router', 'Redux Persist'],
    liveUrl: 'https://goitapp.netlify.app/projects',
    githubUrl: 'https://github.com/Vitaliy-Yakovlev/goit-project-tasks',
  },
  {
    id: 5,
    title: 'Trending Today Movies',
    description:
      'A mobile-first application for viewing current films and watching their trailers.',
    image: '/images/projects/trending-movies.jpg',
    techStack: ['React.js', 'Redux', 'HTML5', 'CSS3', 'React Router'],
    liveUrl: 'https://trending-today-movies.netlify.app/',
    githubUrl: 'https://github.com/Vitaliy-Yakovlev/trending-today-movies',
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

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function Projects() {
  return (
    <ProjectsSection id="projects">
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </Title>
        <ProjectsGrid variants={containerVariants} initial="hidden" animate="visible">
          {projects.map(project => (
            <ProjectCard key={project.id} variants={cardVariants}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.techStack.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink
                    as={motion.a}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </ProjectLink>
                  <Button
                    variant="github"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View on GitHub
                  </Button>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}

export default Projects;
