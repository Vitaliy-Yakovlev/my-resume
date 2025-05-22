import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactSection = styled.section`
  padding: 60px 0;
  background: linear-gradient(135deg, var(--background-light) 0%, var(--background-dark) 100%);
  scroll-margin-top: 70px;

  @media (min-width: 768px) {
    padding: 80px 0;
  }
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

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const ContactInfo = styled(motion.div)`
  h3 {
    font-size: 29px;
    color: var(--text-primary);
    margin-bottom: 24px;
  }

  p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 32px;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContactItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 18px;
  padding: 12px;
  border-radius: 8px;
  transition: all var(--transition);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  svg {
    font-size: 24px;
    color: var(--primary-color);
  }

  .messenger-icons {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
  }

  .telegram-icon {
    font-size: 20px;
    color: #0088cc;
    transition: transform var(--transition);

    &:hover {
      transform: scale(1.1);
    }
  }

  .viber-icon {
    font-size: 20px;
    color: #7360f2;
    transition: transform var(--transition);

    &:hover {
      transform: scale(1.1);
    }
  }

  .whatsapp-icon {
    font-size: 20px;
    color: #25d366;
    transition: transform var(--transition);

    &:hover {
      transform: scale(1.1);
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: white;
  padding: 32px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: var(--text-primary);
    font-weight: 500;
  }

  input,
  textarea {
    padding: 13px;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    font-size: 16px;
    transition: all var(--transition);

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(41, 151, 255, 0.1);
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  small {
    color: var(--text-secondary);
    font-size: 14px;
  }
`;

export const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  color: white;
  padding: 8px 20px;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition);
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

  &:disabled {
    background: var(--text-secondary);
    cursor: not-allowed;
    transform: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(41, 151, 255, 0.2);
  }
`;

export const SuccessMessage = styled.div`
  margin-top: 16px;
  padding: 16px;
  background-color: #d4edda;
  color: #155724;
  border-radius: 4px;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  margin-top: 16px;
  padding: 16px;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 4px;
  text-align: center;
`; 
