export const ADD_COMMENT_TYPE = 'POST_COMMENT';

export const postComment = (productId, text) => ({
  type: ADD_COMMENT_TYPE,
  payload: { productId, text },
});
