 import React from 'react';
import { CommentStruct } from '../../Post';
import Comment from './children/Comment';
interface Props {
  comments: CommentStruct[],
}

const CommentsContainer: React.FC<Props> = ({ comments }) => (
  <div
    style={{
      margin: '2em 0em 0em 0em',
      padding: '0em 1em',
      backgroundColor: '#fff',
      boxShadow: '0px 1px 7px rgba(211, 211, 211, 0.76)',
    }}
  >
    {comments.map(({ content, date, username }, i) => (
      <Comment
        key={i}
        content={content}
        date={date}
        username={username}
      />
    ))}
  </div>
);

export default CommentsContainer;