import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import { styles } from './styles/mainContainerStyles';

function App() {
  return (
    <Box id="App">
      <Navbar />
      <Box sx={styles}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
