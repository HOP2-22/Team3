import React, { useState } from "react";
import ResponsiveGrid from "../components/products/GridSystem";
import Text from "../components/products/BlogText";
import { height } from "@mui/system";
import axios from "axios";
const Products = () => {
  const [createPost, setCreatePost] = useState(false);
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const makePost = async () => {
    try {
      const data = await axios.post("http://localhost:8000/post", {
        title: title,
        text: text,
      });
      console.log(data);
    } catch (error) {}
  };
  return (
    <>
      <div style={{ marginTop: "69px" }}>
        <Text setCreatePost={setCreatePost} createPost={createPost} />
        <ResponsiveGrid />
      </div>
      <div
        style={{
          display: createPost ? "flex" : "none",
          position: "absolute",
          margin: 0,
          width: "100%",
          height: "100%",
          zIndex: 100,
        }}
        className="bg-black/60 flex items-center justify-center"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="w-[320px] h-[500px] bg-white rounded-[10px]"
        >
          <input
            style={{
              height: "50px",
              width: "260px",
              border: "black solid 1px",
              marginTop: "40px",
              textAlign: "center",
              borderRadius: "10px",
              fontSize: "25px",
            }}
            placeholder="Title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <input
            style={{
              height: "270px",
              border: "black solid 1px",
              marginTop: "40px",
              width: "258px",
              borderRadius: "15px",
            }}
            placeholder="Text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
          <button
            style={{
              backgroundColor: "cyan",
              marginTop: "28px",
              color: "white",
              width: "258px",
              height: "40px",
              fontSize: "23px",
              borderRadius: "10px",
            }}
            onClick={makePost}
          >
            create
          </button>
        </div>
      </div>
    </>
  );
};
export default Products;
