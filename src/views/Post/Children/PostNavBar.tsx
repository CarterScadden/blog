import React, { useImperativeHandle } from 'react';
import { Button } from '@material-ui/core';
import { AdjacentPostInfo } from '../Post';

interface Props {
  previous: AdjacentPostInfo;
  next: AdjacentPostInfo;
  handleClick: (n: number) => void;
};

const PostNavBar: React.FC<Props> = ({
  children,
  previous,
  next,
  handleClick,
}) => (
  <div
    style={{
      flex: '1 1 100%',
      height: '2em',
      maxHeight: '2em',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    {previous.title.Valid ? (
      <Button
        onClick={() => handleClick(previous.ID.Int32)}
        style={{
          color: '#fff',
        }}
      >
        {previous.title.String}
      </Button>
    ): (
      <button style={{ padding: '0px', border: '0px'}}></button>
    )}
    {next.title.Valid ? (
      <Button
        onClick={() => handleClick(next.ID.Int32)}
        style={{
          color: '#fff',
        }}
      >
        {next.title.String}
      </Button>
    ): (
      <button style={{ padding: '0px', border: '0px'}}></button>
    )}
  </div>
);

export default PostNavBar;