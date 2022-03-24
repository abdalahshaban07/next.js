import { comments } from "../../../data/comments";

export default (req, res) => {
  const { commentId } = req.query;
  if (req.method === "GET") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).json({ message: "Comment not found" });
    }
  } else if (req.method === "DELETE") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    if (comment) {
      comments.splice(comments.indexOf(comment), 1);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Comment not found" });
    }
  } else if (req.method === "PUT") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );
    if (comment) {
      const { text } = req.body;
      comment.text = text;
      res.status(200).json(comment);
    } else {
      res.status(404).json({ message: "Comment not found" });
    }
  }
};
