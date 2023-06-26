import React from "react";
import PropTypes from 'prop-types';
import PostHeader from "./PostHeader";

function Post(props) {
  return (
    <>
      <article>
        <PostHeader
          theme={props.theme}
          onRead={props.onRead}
          onRemove={props.onRemove}
          post={{
            title: props.post.title,
            read: props.post.read,
            id: props.post.id
          }}
        />
        <br />

        <small>{props.post?.subtitle}</small>

        <br />

        Likes: {props.post?.likes / 2}
        <br />
        
      </article>
      <br />
    </>
  );
}

export default Post;

Post.propTypes = {
  theme: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
}