import React from 'react';
import Fetch from '../../Helper/Fetch';

const List = () => {
  React.useEffect(() => {
    console.log('LIST!!!');

    const postType = 'React';
    const start = '0';
    Fetch({
      url: `postlist?post-type=${postType}?start=${start}`,
      data: '',
      method: 'GET',
    }).then(res => {

      console.log('[POSTS] res: ', res);

      const search = window.location.search;
      console.log(search);
      // setContent(search);
    });
  }, []);
};

export default List;