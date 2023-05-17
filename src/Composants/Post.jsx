import "./Post.css";

const Post = ({
  title,
  content,
  author,
  likes,
  loves,
  hate,
  addLike,
  addLoves,
  addHate,
}) => {
  return (
    <div className="postContainer">
      <h3>Title : {title}</h3>
      <p>Content : {content}</p>
      <p>Author: {author}</p>
      <div className="btn">
        <button onClick={addLike}>Like That! 👍</button> {likes}
        <button onClick={addLoves}>I Love it! 💖 </button> {loves}
        <button onClick={addHate}>I hate that! 🤮 </button> {hate}
      </div>
    </div>
  );
};

export default Post;
