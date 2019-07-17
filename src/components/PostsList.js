import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/postActions";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  console.log(posts);
  return (
    <div>
      {posts.map((post, i) => {
        return <div key={i}>{post.title}</div>;
      })}
    </div>
  );
};

export default PostsList;
