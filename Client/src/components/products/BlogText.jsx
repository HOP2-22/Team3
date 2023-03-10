import React from "react";
import "../../css/Products.css";

export default function Text({ setCreatePost, createPost }) {
  return (
    <div className="Text flex justify-between">
      <div className="">
        <div style={{ fontSize: "xx-large", color: "black" }}>Blog posts</div>
        <div style={{ color: "grey" }}>
          Our latest updates and blogs about managing your team
        </div>
      </div>
      <div
        className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center"
        onClick={() => {
          setCreatePost(!createPost);
          console.log(createPost);
        }}
      >
        X
      </div>
    </div>
  );
}
