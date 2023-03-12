import React from 'react';
import { Typography, Box } from '@mui/material';
import { styles } from '../../../styles/IntroStyles';

function Intro() {
  return (
    <Box sx={styles.introContainer} className="pages">
      <Typography sx={styles.h4} variant="h4">
        Hello! Welcome,
      </Typography>
      <Typography sx={styles.h1} variant="h1">
        I`&apos;m Ezeoke Stanley Ifeanyi
      </Typography>
      <Typography sx={styles.h3} variant="h3">
        Full-Stack Web Developer
      </Typography>
    </Box>
  );
}

export default Intro;
