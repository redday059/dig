import React from 'react'

const NewCommentInput = ({post}) => {
  const inputRef = React.createRef();
  const onCommentSubmit = () => {
    post(inputRef.current.value)
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
    <NewCommentInput post={addComment} />
    { comments.map(content => <SingleComment content={content}/>) }
  </div>
)

export default ProductComments;
