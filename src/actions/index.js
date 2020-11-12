import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
  // Bad approach
  const response = await jsonPlaceholder.get('/posts');
  // Error: Actions must be plain objects. Use custom middleware for async actions.

  return {
    type: 'FETCH_POSTS',
    payload: response,
  };
};
