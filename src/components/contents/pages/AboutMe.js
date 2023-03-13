import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from '../../../styles/aboutMeStyles';

function AboutMe() {
  return (
    <Box sx={styles}>
      <Typography sx={styles.h2} variant="h2">
        About Me
      </Typography>
      <br />
      <Box sx={styles.paraContainer}>
        <Typography sx={styles.p} variant="body1">
          Hello, I&apos;m Stanley!
          <br />
          <br />
          I&apos;m a&nbsp;
          <span>
            full-stack web developer&nbsp;
          </span>
          from Nigeria.
          <br />
          <br />
          I found my passion for programming at the end of 2021, and in
          2022 I joined an online software program at&nbsp;
          <span>
            Microverse
          </span>
          , where I studied full-stack web development.
          {' '}
          <br />
          <br />
          During my time in the program, I gained essential technical and soft
          skills, for example, in&nbsp;
          <span>
            HTML
          </span>
          ,&nbsp;
          <span>
            CSS/SCSS
          </span>
          ,&nbsp;
          {' '}
          <span>
            JavaScript
          </span>
          ,&nbsp;
          <span>
            React
          </span>
          ,&nbsp;
          <span>
            Redux
          </span>
          ,&nbsp;
          {' '}
          <span>PostgreSQL Database</span>
          ,&nbsp;
          <span>Ruby</span>
          ,&nbsp;
          {' '}
          <span>Ruby on Rails</span>
          ,&nbsp;
          <span>mobile-first approach</span>
          ,&nbsp;
          {' '}
          <span>test-driven development</span>
          , collaborated with other students
          from different cultures using the&nbsp;
          <span>pair programming</span>
          {' '}
          (driver/navigator) method with the industry-standard&nbsp;
          {' '}
          <span>gitflow</span>
          ,&nbsp;
          <span>mentored</span>
          {' '}
          new students, provided
          {' '}
          <span>code reviews</span>
          {' '}
          and gave constructive feedback, worked in a
          team to build interactive apps using the
          <span>&nbsp;kanban method</span>
          ,
          managed my time efficiently, attended
          <span>&nbsp;daily stand-ups</span>
          {' '}
          to
          communicate with my peers, and delivered projects before the deadline.
          <br />
          <br />
          {' '}
          I enjoy building anything, from small apps to interactive
          websites. I also love learning new skills and am able to take on new
          ones quickly and efficiently.
          <br />
          <br />
          {' '}
          My everyday consists of building web apps or maintaining my
          existing projects, learning new skills, reading documentation and
          articles, solving problems and networking. Currently, I&apos;m learning
          {' '}
          <span>NodeJS</span>
          {' '}
          and
          <span>&nbsp;MongoDB</span>
          {' '}
          for the backend part and
          looking for my first web developer job where I can build amazing
          things, grow my knowledge and improve my skills.
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutMe;
