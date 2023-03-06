import React, { useContext, useEffect, useState } from "react";

import "../../css/PostDetails.css";
import axios from "axios";
import { Context } from "../../provider/Context";

function PostDetails({ id }) {
  const { user } = useContext(Context);

  const [commentValue, setCommentValue] = useState("");

  useEffect(() => {
    console.log(user);
  }, [user]);

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
  }, [id]);

  const createComment = async () => {
    try {
      await axios.post("http://localhost:8000/comment", {
        text: commentValue,
        post: id,
        writerId: user._id,
      });
    } catch (error) {}
  };

  return (
    <div className="fatherDiv">
      <div className="widthContainer">
        <div className="postView">
          <div className="title">{data?.title}</div>
          <div className="userForward">
            <div className="userDetails">
              <img
                src={data?.user?.profileImage}
                alt="profilePicture"
                className="profilePictureStyle"
              />
              <div className="nameDate">
                {data?.user?.firstName} | {data?.user?.createdAt.slice(0, 10)}
              </div>
            </div>
          </div>
          <img src={data?.image} alt="postImage" className="postImage" />
          <div className="postText">{data?.text}</div>
          <div className="line"></div>
        </div>
        <div>
          <div className="joinDaConv">Join the conversation</div>
          <div className="commentSection">
            <img
              src={data?.user?.profileImage}
              alt="loggedUserPP"
              className="loggedUserPP"
            />
            <textarea
              placeholder="Comment"
              rows="3"
              className="commentingArea"
              value={commentValue}
              onChange={(event) => {
                setCommentValue(event.target.value);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  createComment();
                }
              }}
            ></textarea>
          </div>
        </div>
        <div className="commentContainer">
          <div className="comments">
            {data?.comments?.map((item, index) => {
              return (
                <div className="commentLoad">
                  <img
                    src={item?.writerId?.profileImage}
                    alt="writerPP"
                    className="profilePictureStyle"
                  />
                  <div>
                    {item?.writerId?.firstName}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {item?.publishedDate.slice(0, 10)}
                    <br />
                    {item?.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
