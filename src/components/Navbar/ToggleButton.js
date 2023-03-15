import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styles } from '../../styles/sidebarStyles';

function ToggleButton({ handleDrawerToggle }) {
  return (
    <Box sx={styles.toggleContainer}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={styles.toggleButton}
      >
        <MenuIcon sx={styles.menuIcon} />
      </IconButton>
    </Box>
  );
}

export default ToggleButton;
