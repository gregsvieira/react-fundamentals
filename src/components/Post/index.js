import React from "react";
import PropTypes from 'prop-types';
import PostHeader from "./PostHeader";
import styles from './Post.scss';
import { Subtitle, Rate } from './styles';

function Post(props) {
  return (
      <article 
        className={
          props.post.removed 
          ? styles.postDeleted : styles.post
        }
        >
        <PostHeader
          onRead={props.onRead}
          onRemove={props.onRemove}
          post={{
            title: props.post.title,
            read: props.post.read,
            id: props.post.id
          }}
        />
        <br />

        <Subtitle>{props.post?.subtitle}</Subtitle>

        <br />

        <Rate>Likes: {props.post?.likes / 2}</Rate>
        <br />
        
      </article>
  );
}

export default Post;

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired,
}