import React from "react";
import PropTypes from 'prop-types';

function Post(props) {
  return (
    <>
    {props.post.read ? <h4>{props.post.title} ✅</h4> 
    : <>
      <article>
        <strong>
          {props.post.read ? <s>{props.post.title}</s> : <b>{props.post.title}</b>}
        </strong>

        <br />

        <small>{props.post?.subtitle}</small>

        <br />

        Likes: {props.post?.likes / 2}
        <button onClick={()=> props.onRemove(props.post.id)}>
           Remover 
        </button>
      </article>
      <br />
    </>
    }
    </>
  );
}

export default Post;

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
  
    
  
}