import React from 'react';
import './article.css';
interface Props {
  content: string;
  title: string;
  date: string;
  type: string;
}

const Article: React.FC<Props> = ({
  children,
  content,
}) => {

  const createMarkup = () => ({__html: content})

  return (
    <div id="article">
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  );
};

export default Article;
