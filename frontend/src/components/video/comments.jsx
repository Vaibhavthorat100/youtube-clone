import { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const addComment = () => {
    if (!text.trim()) return;

    setComments([
      ...comments,
      { id: Date.now(), message: text },
    ]);

    setText("");
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">
        Comments
      </h2>

      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 px-3 py-2 bg-black text-white border border-gray-700 rounded"
        />

        <button
          onClick={addComment}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Comment
        </button>
      </div>

      <div className="mt-4 space-y-2">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="px-3 py-2 bg-gray-900 text-white rounded"
          >
            {comment.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
