import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import "../../css/PostDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetails() {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const post = async () => {
      try {
        const post = await axios.get(`http://localhost:8000/post/${id}`);
        setData(post.data.data);
        console.log(post.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    post();
  }, []);

  return (
    <Container>
      <div style={{ paddingTop: "60px", flexGrow: 1 }}>{id}</div>
    </Container>
  );
}

export default PostDetails;
