import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import { styles } from '../../styles/contentStyles';
import Navbar from '../Navbar/Navbar';
import ToggleButton from '../Navbar/ToggleButton';

function Content(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const container = window !== undefined ? () => window().document.body : undefined;

  Content.propTypes = {
    window: PropTypes.isRequired,
  };

  return (
    <Box>
      <Box sx={styles.boxContainer}>
        <CssBaseline />
        <Box sx={styles.navContainer} component="nav" aria-label="nav icons">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={styles.navDrawer.mobile}
          >
            <Navbar />
          </Drawer>
          <Drawer variant="permanent" sx={styles.navDrawer.desktop} open>
            <Navbar />
          </Drawer>
        </Box>
        <ToggleButton handleDrawerToggle={handleDrawerToggle} />
      </Box>
    </Box>
  );
}

export default Content;
