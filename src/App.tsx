import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Routes from './routes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      height: '100vh',
      width: '100vw',
      backgroundColor: 'rgba(33,33,33,1)',
      display: 'flex',
      fontFamily: 'roboto, arial',
      color: '#fff'
    },
  })
);

React.useEffect(() => {
  console.log('App mounted');
  // Fetch({
  //   url: '',
  //   data: '',
  //   method: 'GET',
  // });

  const search = window.location.search;
  console.log('SEARCH: ', search);
}, []);

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Routes />
    </div>
  );
}

export default App;
