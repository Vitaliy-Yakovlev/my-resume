import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterSection = styled.footer`
  background: linear-gradient(135deg, var(--text-primary) 0%, #2c3338 100%);
  color: white;
  padding: 40px 0 20px;

  @media (max-width: 768px) {
    padding: 32px 0 16px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    gap: 2rem;
    margin-bottom: 1.5rem;
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 48px;
  margin-bottom: 32px;
`;

export const FooterColumn = styled(motion.div)`
  h3 {
    font-size: 21px;
    color: var(--primary-color);
    margin-bottom: 24px;
    font-weight: 600;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--primary-color);
    display: inline-block;

    @media (max-width: 768px) {
      font-size: 18px;
      margin-bottom: 16px;
      padding-bottom: 6px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
      margin-bottom: 12px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 13px;
    color: var(--text-secondary);

    @media (max-width: 768px) {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color var(--transition);

    &:hover {
      color: var(--accent-color);
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 12px;
  }
`;

export const SocialLink = styled(motion.a)`
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition);

  svg {
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  &:hover {
    color: var(--primary-color);
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  font-size: 14px;

  @media (max-width: 768px) {
    padding-top: 16px;
    font-size: 12px;
  }
`;
