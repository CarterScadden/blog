import React from 'react';
// import Fetch from '../../Helper/Fetch';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '3em',
    },
  })
);

const Posts = () => {
  const classes = useStyles();
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    console.log('mounted');
    // Fetch({
    //   url: '',
    //   data: '',
    //   method: 'GET',
    // });

    const search = window.location.search;
    console.log(search);
    setContent(search);
  }, []);

  return (
    <main className={classes.main}>
      <div>
        Content: {content}
      </div>
    </main>
  );
}

export default Posts;