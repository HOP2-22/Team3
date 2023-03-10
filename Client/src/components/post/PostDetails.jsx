import React, { useContext, useEffect, useState } from "react";

import "../../css/PostDetails.css";
import axios from "axios";
import { Context } from "../../provider/Context";
import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";

function PostDetails({ id }) {
  const { user } = useContext(Context);

  const [commentValue, setCommentValue] = useState("");

  // const [editCommentValue, setEditValueComment] = useState("");

  // const [commentView, setCommentView] = useState(false);

  const [data, setData] = useState({});

  const post = async () => {
    try {
      const post = await axios.get(`http://localhost:8000/post/${id}`);
      setData(post.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    post();
  }, [id]);

  const createComment = async () => {
    try {
      await axios.post("http://localhost:8000/comment", {
        text: commentValue,
        post: id,
        writerId: user._id,
      });
      post();
    } catch (error) {
      console.log(error);
    }
  };

  // const editComment = async (commentId) => {
  //   try {
  //     await axios.put(`http://localhost:8000/comment/${commentId}`, {
  //       text: commentValue,
  //       post: id,
  //       writerId: user._id,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:8000/comment/${commentId}`);
      post();
    } catch (error) {
      console.log(error);
    }
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
                  setCommentValue("");
                }
              }}
            ></textarea>
          </div>
        </div>
        <div className="commentContainer">
          <div className="comments">
            {data?.comments?.map((item, index) => {
              return (
                <div className="commentLoad" key={index}>
                  <img
                    src={item?.writerId?.profileImage}
                    alt="writerPP"
                    className="profilePictureStyle"
                  />
                  <div className="commentStyle">
                    <div className="writerNameDate">
                      <div className="writerName">
                        {item?.writerId?.firstName}
                        <div>{item?.publishedDate.slice(0, 10)}</div>
                      </div>
                      {/* {user?._id === item?.writerId?._id && (
                        <div
                          onClick={() => {
                            editComment(item?._id);
                          }}
                        >
                          <EditIcon />
                        </div>
                      )} */}
                      {user?._id === item?.writerId?._id ||
                      user?._id === data?.user?._id ? (
                        <div onClick={() => deleteComment(item?._id)}>
                          <DeleteIcon className="deleteButton" />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <div>{item?.text}</div>
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
