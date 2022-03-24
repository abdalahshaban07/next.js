import { useState } from "react";
const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateComment, setUpdateComment] = useState({ id: "", text: "" });

  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };

  const submitComments = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
    });
    const data = await response.json();
    setComments([...comments, data]);
    setComment("");
  };

  const deleteComment = async (id) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const changeUpdateFlag = (id, text) => {
    setIsUpdate(true);
    setUpdateComment({ id, text });
  };

  const update = async () => {
    console.log(updateComment);
    const response = await fetch(`/api/comments/${updateComment.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: updateComment.text }),
    });
    const data = await response.json();
    setComments(
      comments.map((comment) =>
        comment.id === updateComment.id ? data : comment
      )
    );
    setIsUpdate(false);
  };

  return (
    <div>
      <input
        type="text"
        value={isUpdate ? updateComment.text : comment}
        onChange={(e) =>
          isUpdate
            ? setUpdateComment({ ...updateComment, text: e.target.value })
            : setComment(e.target.value)
        }
      />
      <button onClick={isUpdate ? update : submitComments}>
        {isUpdate ? "update" : "Submit"} Comments
      </button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
            <button onClick={() => deleteComment(comment.id)}>DELETE</button>
            <button onClick={() => changeUpdateFlag(comment.id, comment.text)}>
              UPDATE
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CommentsPage;
