import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import SECONDARY_COLOR from '../../styles/secondarycolor'
import { Link } from 'react-router-dom';

export const headerHeight = 60;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bar: {
      height: `${headerHeight}px`,
      backgroundColor: SECONDARY_COLOR,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      padding: '0em 1em',
      position: 'relative',
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
      
      <nav>
        <Link to="/post" >post</Link>
      </nav>
    </AppBar>
  );
};

export default CustomAppBar