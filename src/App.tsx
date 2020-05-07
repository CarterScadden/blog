import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Routes from './routes';
import Fetch from './Helper/Fetch';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      flex: '1',
      backgroundColor: 'rgba(33,33,33,1)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'roboto, arial',
      color: '#fff'
    },
  })
);

export const footerHeight = 0;

function App() {
  const classes = useStyles();

  React.useEffect(() => {
    // console.log('App mounted');
  
    // const search = window.location.search;
    // console.log('SEARCH: ', search);
  }, []);

  return (
    <div className={classes.app}>
      <Routes />
    </div>
  );
}

export default App;
