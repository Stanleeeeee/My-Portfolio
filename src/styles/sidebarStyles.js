/* eslint-disable import/prefer-default-export */
export const styles = {
  drawer: {
    width: 120,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 220,
      boxSizing: 'border-box',
      backgroundColor: '#C0C0C0',
      color: 'rgba(255, 255, 255, 0.7)',
    },
    '& .Mui-selected': {
      color: '#8b0000',
    },
  },

  icon: {
    color: '#8b0000',
    fontWeight: '700',
    fontSize: '2.6rem',
    minWidth: 'unset',
  },
  listItem: {
    padding: '10px 20px',
    transition: '0.8s',
    marginBottom: '20px',
    '@media (max-height: 900px)': {
      marginBottom: '0',
    },
    '&:hover': { background: '#4169e1' },
  },

  listItemButton: {
    display: 'flex',
    color: '#8b0000',
    justifyContent: 'space-between',
    '@media (max-width: 600px)': {
      justifyContent: 'center',
    },
  },

  avatar: {
    width: { lg: '80px', sm: '50px' },
    height: 'auto',
  },

  toolbar: {
    padding: '50px 20px',
  },

  toggleContainer: {
    display: 'flex',
    position: 'absolute',
    paddingLeft: '20px',
  },

  toggleButton: {
    mr: 2,
    display: { lg: 'none' },
    position: 'fixed',
  },
};
