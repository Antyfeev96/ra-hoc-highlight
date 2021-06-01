import './List.scss';
import { nanoid } from 'nanoid';
import React from 'react'
import PropTypes from 'prop-types'
import Video from '../Video/Video';
import Article from '../Article/Article';
import withViews from '../ViewsPretty/ViewsPretty';

export default function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      default:
        return null;
      case 'video':
        const VideoComponent = withViews(Video, item);
          return (
            <VideoComponent key={nanoid(5)} />
          );
      case 'article':
        const ArticleComponent = withViews(Article, item);
          return (
            <ArticleComponent key={nanoid(5)} />
          );
    }
});
}

List.propTypes = {

}