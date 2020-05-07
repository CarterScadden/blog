import React from 'react';

interface Props {
  content: string;
  date: string;
  username: string;
}
const Comment:React.FC<Props> = ({
  children,
  content,
  date,
  username,
}) => (
  <aside
    style={{
      border: '1px solid black',
      margin: '1em 0em',
      padding: '0.5em'
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid black',
        marginBottom: '0.5em'
      }}
    >
      <header><h5 style={{ marginBlock: '0em', margin: '0em 0em 0.25em 0em'}}>{username}</h5></header>
      <header><h5 style={{ marginBlock: '0em', margin: '0em 0em 0.25em 0em'}}>{date}</h5></header>
    </div>
    {content}
  </aside>
);

export default Comment;