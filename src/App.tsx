import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Header from './components/Header';
import Routes from './routes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      height: '100vh',
      width: '100vw',
      backgroundColor: 'rgba(33,33,33,1)',
      display: 'flex',
      fontFamily: 'roboto, arial',
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
