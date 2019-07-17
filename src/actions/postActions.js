import axios from "axios";

import { GET_POST, GET_POSTS } from "./";

// Get Posts
export const getPosts = () => dispatch => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};

// Get a Post
export const getPost = id => dispatch => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
};
