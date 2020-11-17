import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  // console.log(getState().posts); // fetch한 데이터가 보임
  const userIds = _.uniq(_.map(getState().posts, 'userId')); // unique한 userId만 추출
  // console.log(userIds);
  userIds.forEach((id) => dispatch(fetchUser(id)));
  // 추후에 더 만들어야 할 로직이 없기 때문에 await를 할 필요가 없음

  // refactor
  // _.chain(getState().posts)
  //   .map('userId')
  //   .uniq()
  //   .forEach(id => dispatch(fetchUser(id)))
  //   .value(); // 실행
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   // 같은 id를 한 번만 호출
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
