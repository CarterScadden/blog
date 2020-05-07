import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fetch from '../../Helper/Fetch';
import PostNavBar from './Children/PostNavBar';
import Article from './Children/Article';
import CommentsContainer from './Children/CommentsContainer';
import { headerHeight } from '../../components/Header/Header';
import { footerHeight } from '../../App';

interface PostStruct {
  comments: CommentStruct[];
  content: string;
  title: string;
  type: string;
  date: string;
  next: AdjacentPostInfo;
  prev: AdjacentPostInfo;
}

export interface CommentStruct {
  content: string;
  date: string;
  username: string;
}

export interface AdjacentPostInfo {
  title: { Valid: boolean, String: string;};
  ID: { Valid: boolean, Int32: number;};
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      padding: '0em 19vw',
      display: 'flex',
      height: `calc(100vh - ${headerHeight + footerHeight}px)`,
      flexDirection: 'column',
      alignItems: 'center',
      overflowX: 'hidden',
    },
    contentContainer: {
      margin: '4em 0em',
      width: '100%',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }
  })
);

const Post = () => {
  const classes = useStyles();
  const [data, setData] = React.useState<PostStruct>({
    comments: [],
    content: '',
    title: '',
    type: '',
    date: '',
    next: {
      ID: { Valid: false, Int32: 0},
      title: { Valid: false, String: ''}
    },
    prev: {
      ID: { Valid: false, Int32: 0},
      title: { Valid: false, String: ''}
    },
  });
  React.useEffect(() => {
    console.log('mounted');
    const ID = 1;
    Fetch({
      url: `api/post?id=${ID}`,
      data: '',
      method: 'GET',
    }).then(res => {
      if (res && res.data.data) {
        const data: PostStruct = res.data.data as PostStruct;
        setData(data);
      }
    });
  }, []);

  const handleNewPost = (ID: number) => {
    console.log('ID of post: ', ID);
  }

  return (
    <main className={classes.main}>
      <div className={classes.contentContainer}>
        <Article 
          content={data.content}
          title={data.title}
          date={data.date}
          type={data.type}
        />

        <PostNavBar
          next={data.next}
          previous={data.prev}
          handleClick={handleNewPost}
        />

        <CommentsContainer
          comments={data.comments}
        />
      </div>
    </main>
  );
}

export default Post;

//        