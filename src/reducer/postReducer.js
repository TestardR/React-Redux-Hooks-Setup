import { GET_POSTS, GET_POST } from "../actions/";

const initialState = {
  posts: [],
  post: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    }
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
