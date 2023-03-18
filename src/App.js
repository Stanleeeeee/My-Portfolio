import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { styles } from './styles/mainContainerStyles';
import Content from './components/contents/Content';

function App() {
  return (
    <Box id="App">
      <Content />
      <Box sx={styles}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
