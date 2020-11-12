import jsonPlaceholder from '../apis/jsonPlaceholder';

// it's a function that return function
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response });
};
