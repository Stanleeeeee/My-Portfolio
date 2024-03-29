import {
  IconButton,
  Typography,
  Box,
  Button,
  TextareaAutosize,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from '@mui/material/Link';
import { styles } from '../../../styles/ContactStyles';

function ContactMe() {
  const [success, setSuccessMessage] = useState(false);

  const SocialLinks = [
    {
      id: 0,
      icon: <GitHubIcon sx={{ fontSize: { lg: '35px', xs: '22px' } }} />,
      link: 'https://github.com/Stanleeeeee',
    },
    {
      id: 1,
      icon: <TwitterIcon sx={{ fontSize: { lg: '35px', xs: '22px' } }} />,
      link: 'https://twitter.com/Stanmega89',
    },
    {
      id: 2,
      icon: <LinkedInIcon sx={{ fontSize: { lg: '35px', xs: '22px' } }} />,
      link: 'https://www.linkedin.com/in/stanley-ezeoke/',
    },
  ];

  const schema = yup.object({
    name: yup
      .string()
      .trim()
      .matches(/[A-Za-z]+/, 'Name can only contain letters')
      .max(20, 'Name is too long, maximum 20 characters')
      .required('Name is required'),
    email: yup
      .string()
      .trim()
      .email('Email must be valid')
      .required('Email is required'),
    message: yup
      .string()
      .trim()
      .max(300, 'Message is too long, maximum 300 characters')
      .required('Please, leave a message'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { name, email, message } = data;
    const obj = {
      name,
      email,
      message,
    };

    fetch('https://formspree.io/f/mqkoqvzd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    setSuccessMessage(true);
  };

  return (
    <Box sx={styles}>
      <Typography sx={styles.h2} variant="h2">
        Contact
      </Typography>
      {success ? (
        <Typography sx={styles.successMessage} variant="body1">
          Thank you for your message, Stanley will respond ASAP!
        </Typography>
      ) : (
        <Box
          component="form"
          sx={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box sx={styles.container}>
            <Typography sx={styles.para} variant="body1">
              If you have any questions or would like to have a coffee chat,
              feel free to contact me!
            </Typography>
            <Box sx={styles.socialLinksContainer}>
              {SocialLinks.map((link) => (
                <Link key={link.id} href={link.link} target="_blank">
                  <IconButton sx={styles.iconButton}>{link.icon}</IconButton>
                </Link>
              ))}
            </Box>
          </Box>
          <Box sx={styles.inputsContainer}>
            <Box sx={styles.inputs}>
              <Box sx={styles.inputColumn}>
                <label style={{ marginBottom: '5px' }} htmlFor="name">
                  Name
                </label>
                <input
                  style={{
                    width: '100%',
                    borderRadius: '5px',
                    outline: 'none',
                    padding: '10px',
                  }}
                  id="name"
                  /* eslint-disable react/jsx-props-no-spreading */
                  {...register('name')}
                />
                <Typography sx={styles.errorMessage} variant="body2">
                  {errors.name?.message}
                </Typography>
              </Box>
              <Box sx={styles.inputColumn}>
                <label style={{ marginBottom: '5px' }} htmlFor="email" id="Email">
                  Email
                </label>
                <input
                  style={{
                    width: '100%',
                    borderRadius: '5px',
                    outline: 'none',
                    padding: '10px',
                  }}
                  id="email"
                  {...register('email')}
                />
                <Typography sx={styles.errorMessage} variant="body2">
                  {errors.email?.message}
                </Typography>
              </Box>
            </Box>
            <label
              htmlFor="Message"
              id="message"
              style={{ marginBottom: '5px' }}
            >
              Message
            </label>
            <TextareaAutosize
              minRows={10}
              {...register('message')}
              id="message"
            />
            <Typography sx={styles.errorMessage} variant="body2">
              {errors.message?.message}
            </Typography>
            <Button sx={styles.submit} type="submit">
              Send Message
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default ContactMe;
