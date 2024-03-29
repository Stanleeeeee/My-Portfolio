import React from 'react';
import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { sectionNames, listItems } from './skillsData';
import { styles } from '../../../../styles/skillStyles';
import '../../../../styles/icons.css';

function Skills() {
  return (
    <Box sx={styles}>
      <Typography sx={styles.h2} variant="h2">
        Skills
      </Typography>
      <Grid sx={styles.container} container spacing={2}>
        {sectionNames.map((title, id) => (
          <Grid md={3} sm={4} xs={12} key={title} item>
            <Typography sx={styles.h6} variant="h6">
              {title}
            </Typography>
            <List>
              {listItems[id].map((item) => (
                <ListItem key={item.name}>
                  <ListItemIcon>
                    <img alt="icon" src={item.icon} />
                  </ListItemIcon>
                  <Divider sx={{ mx: 1 }} />
                  <ListItemText>
                    <Typography variant="body2">{item.name}</Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
