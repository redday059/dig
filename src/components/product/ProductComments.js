import React from 'react'
import ProductListItem from "../productList/ProductListItem";
import PropTypes from "prop-types";
import { commentType } from "../../types";
import styles from "./ProductComments.module.css"

const NewCommentInput = ({onSubmit}) => {
  const inputRef = React.createRef();

  const onCommentSubmit = () => {
    onSubmit(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (<div className={styles['new-comment-group']}>
    <input ref={inputRef} type="text" className={styles['new-comment-input']} placeholder="Write a comment..." />
    <button className={styles['new-comment-submit']} type="submit" onClick={onCommentSubmit}>Add comment</button>
  </div>)
};

const SingleComment = ({content}) => (
  <div className={styles.comment}>{content}</div>
);

const ProductComments = ({addComment, comments}) => (
  <>
    <NewCommentInput onSubmit={addComment} />
    <div className={styles['comment-list']}>
      { comments.map((content, index) => <SingleComment key={index} content={content}/>) }
    </div>
  </>
);

ProductListItem.propTypes = {
  comments: PropTypes.arrayOf(commentType),
  addComment: PropTypes.func.isRequired,
};

export default ProductComments;
