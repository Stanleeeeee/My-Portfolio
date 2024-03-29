import React from 'react';
import { Typography, Box } from '@mui/material';
import { styles } from '../../../styles/IntroStyles';

function Intro() {
  return (
    <Box sx={styles.introContainer} className="pages">
      <Typography sx={styles.h2} variant="h2">
        Hello! Welcome,
      </Typography>
      <Typography sx={styles.h4} variant="h4">
        I&apos;m
      </Typography>
      <Typography sx={styles.h1} variant="h1">
        Ezeoke Stanley Ifeanyi
      </Typography>
      <Typography sx={styles.h3} variant="h3">
        Full-Stack Web Developer
      </Typography>
    </Box>
  );
}

export default Intro;
