import './List.scss';
import React from 'react'
import PropTypes from 'prop-types'
import Video from '../Video/Video';
import Article from '../Article/Article';
import withViews from '../ViewsPretty/ViewsPretty';

export default function List(props) {
  return props.list.map(item => {
    console.log(item);
    switch (item.type) {
      default:
        return null;
      case 'video':
        const VideoComponent = withViews(Video, item);
          return (
            <VideoComponent />
          );
      case 'article':
        const ArticleComponent = withViews(Article, item);
          return (
            <ArticleComponent />
          );
    }
});
}

List.propTypes = {

}