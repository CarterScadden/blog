import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SECONDARY_COLOR from '../../styles/secondarycolor'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bar: {
      height: '60px',
      backgroundColor: SECONDARY_COLOR,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'space-between',
      padding: '0em 1em',
    },
  })
);

const CustomAppBar:React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.bar}>
      <header>
        <h1>Carter Scadden</h1>
      </header>
    </AppBar>
  );
};

export default CustomAppBar