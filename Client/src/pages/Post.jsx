import React from "react";
import PostDetails from "../components/post/PostDetails";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  return (
    <div
      className="grow h-full w-full py-20"
      style={{
        flexGrow: 1,
      }}
    >
      <PostDetails id={id} />
    </div>
  );
}

export default Post;
