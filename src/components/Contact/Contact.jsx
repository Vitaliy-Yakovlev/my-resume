import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import {
  ContactSection,
  Container,
  Title,
  ContactContent,
  ContactInfo,
  ContactDetails,
  ContactItem,
  ContactForm,
  FormGroup,
  SubmitButton,
  SuccessMessage,
  ErrorMessage,
} from './Contact.styles';

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

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current
      )
      .then(() => {
        setStatus({
          submitting: false,
          submitted: true,
          error: null,
        });
        form.current.reset();
        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: null });
        }, 5000);
      })
      .catch(err => {
        setStatus({
          submitting: false,
          submitted: false,
          error: err.text || 'Failed to send message. Please try again.',
        });
      });
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </Title>
        <ContactContent>
          <ContactInfo variants={containerVariants} initial="hidden" animate="visible">
            <h3>Let's Talk</h3>
            <p>
              I'm always open to new opportunities and interesting projects. Feel free to reach out
              through any of the following channels:
            </p>
            <ContactDetails>
              <ContactItem href="tel:+380509090660" variants={itemVariants}>
                <FaPhone />
                +38 050 909 06 60
              </ContactItem>
              <ContactItem href="tel:+393335787465" variants={itemVariants}>
                <FaPhone />
                +39 333 578 74 65
              </ContactItem>
              <ContactItem href="mailto:vitaliy-yakovlev@ukr.net" variants={itemVariants}>
                <FaEnvelope />
                vitaliy-yakovlev@ukr.net
              </ContactItem>
              <ContactItem
                href="https://github.com/Vitaliy-Yakovlev"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
              >
                <FaGithub />
                GitHub
              </ContactItem>
              <ContactItem
                href="https://linkedin.com/in/vitaliy-yakovlev"
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
              >
                <FaLinkedin />
                LinkedIn
              </ContactItem>
            </ContactDetails>
          </ContactInfo>
          <ContactForm
            ref={form}
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <FormGroup>
              <label htmlFor="from_name">Your Full Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="e.g., John Smith"
                required
              />
              <small>Please provide your real name so I know how to address you</small>
            </FormGroup>
            <FormGroup>
              <label htmlFor="from_email">Your Contact Email</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                placeholder="example@email.com"
                required
              />
              <small>I'll send my response to this email address</small>
            </FormGroup>
            <FormGroup>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or ask any questions..."
                required
              ></textarea>
              <small>Share details about your project or any questions you have</small>
            </FormGroup>
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {status.submitted && (
              <SuccessMessage>Message sent successfully! I'll get back to you soon.</SuccessMessage>
            )}
            {status.error && (
              <ErrorMessage>
                {status.error || 'Failed to send message. Please try again.'}
              </ErrorMessage>
            )}
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
}

export default Contact;
