import React, { useEffect, useState } from "react";

import "../../css/PostDetails.css";
import axios from "axios";

function PostDetails({ id }) {
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

  return (
    <div className="fatherDiv">
      <div className="widthContainer">
        <div className="postView">
          <div className="title">{data?.title}</div>
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
          <img src={data?.image} alt="postImage" className="postImage" />
          <div className="postText">{data?.text}</div>
          <div className="line"></div>
        </div>
        <div>
          <div className="joinDaConv">Join the conversation</div>
          <div className="commentSection">
            <img
              src="data:image/jpeg;base64,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"
              alt="loggedUserPP"
              className="loggedUserPP"
            />
            <textarea
              placeholder="Comment"
              rows="3"
              className="commentingArea"
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
