// import React, { useContext, useState } from "react";

// import "../../css/PostDetails.css";
// import axios from "axios";
// import { Context } from "../../provider/Context";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";

// function Comment({ id }) {
//   const [data, setData] = useState({});
//   const { user } = useContext(Context);
//   const [commentValue, setCommentValue] = useState("");
//   const [editCommentValue, setEditValueComment] = useState("");

//   const post = async () => {
//     try {
//       const post = await axios.get(`http://localhost:8000/post/${id}`);
//       setData(post.data.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const editComment = async (commentId) => {
//     try {
//       await axios.put(`http://localhost:8000/comment/${commentId}`, {
//         text: commentValue,
//         post: id,
//         writerId: user._id,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const deleteComment = async (commentId) => {
//     try {
//       await axios.delete(`http://localhost:8000/comment/${commentId}`);
//       post();
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       {data?.comments?.map((item, index) => {
//         return (
//           <div className="commentLoad" key={index}>
//             <img
//               src={item?.writerId?.profileImage}
//               alt="writerPP"
//               className="profilePictureStyle"
//             />
//             <div className="commentStyle">
//               <div className="writerNameDate">
//                 <div className="writerName">
//                   {item?.writerId?.firstName}
//                   <div>{item?.publishedDate.slice(0, 10)}</div>
//                 </div>
//                 {user?._id === item?.writerId?._id && (
//                   <div
//                     onClick={() => {
//                       editComment(item?._id);
//                     }}
//                   >
//                     <EditIcon />
//                   </div>
//                 )}
//                 {user?._id === item?.writerId?._id ||
//                 user?._id === data?.user?._id ? (
//                   <div onClick={() => deleteComment(item?._id)}>
//                     <DeleteIcon className="deleteButton" />
//                   </div>
//                 ) : (
//                   <></>
//                 )}
//               </div>
//               <div>{item?.text}</div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Comment;
