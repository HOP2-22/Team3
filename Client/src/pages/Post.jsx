import React, { useEffect, useState } from "react";
import PostDetails from "../components/post/PostDetails";
import { useParams } from "react-router-dom";
import axios from "axios";
function Post() {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const post = async () => {
      try {
        const post = await axios.get(`http://localhost:8000/post/${id}`);
        setData(post.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    post();
  }, []);

  return (
    <div style={{ paddingTop: "60px", flexGrow: 1 }}>
      <PostDetails data={data} />
    </div>
  );
}

export default Post;
