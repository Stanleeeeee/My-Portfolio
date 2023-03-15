/* eslint-disable import/prefer-default-export */
export const styles = {
  introContainer: {
    width: '80vw',
    '@media (max-width: 1200px)': {
      height: '100vh',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    color: '#fff',
  },

  h1: {
    fontSize: '5rem',
    flexGrow: 1,
    textAlign: 'center',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '3.5rem',
      textAlign: 'center',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem',
    },
  },

  h3: {
    color: 'rgba(250, 250, 250, 0.7)',
    marginTop: '20px',
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '2.1rem',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.6rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },

  h4: {
    marginBottom: '100px',
    textAlign: 'center',
  },

  h2: {
    marginBottom: '100px',
    textAlign: 'center',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '2.6rem',
      marginTop: '70px',
    },
    '@media (max-width: 600px)': {
      fontSize: '2.5rem',
    },
  },
};
