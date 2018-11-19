import React from 'react'
import ProductListItem from "../productList/ProductListItem";
import PropTypes from "prop-types";
import { commentType } from "../../types";

const NewCommentInput = ({onSubmit}) => {
  const inputRef = React.createRef();

  const onCommentSubmit = () => {
    onSubmit(inputRef.current.value)
    inputRef.current.value = ''
  }

  return (<div className="new-comment-group">
    <input ref={inputRef} type="text" className="new-comment-input" />
    <button className="new-comment-submit" type="submit" onClick={onCommentSubmit}>Add comment</button>
  </div>)
}

const SingleComment = ({content}) => (
  <div className='comment'>{content}</div>
)

const ProductComments = ({addComment, comments}) => (
  <div className='commentList'>
    <NewCommentInput onSubmit={addComment} />
    { comments.map(content => <SingleComment content={content}/>) }
  </div>
)

ProductListItem.propTypes = {
  comments: PropTypes.arrayOf(commentType),
  addComment: PropTypes.func.isRequired,
};

export default ProductComments;
