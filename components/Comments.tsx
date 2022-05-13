import { Comment, Comments } from "../typings";
const Comments = ({ comments }: Comments) => {
  return (
    <div className="flex flex-col p-10 my-10 container max-w-2xl mx-auto space-y-2 shadow-yellow-500 shadow-md">
      <h3 className="text-4xl">Comments</h3>
      <hr className="pb-2" />
      {comments.map((comment: Comment) => (
        <div key={comment._id}>
          <p className="text-xl">
            <span className="text-yellow-600">{comment.name}</span>:
            {comment.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
