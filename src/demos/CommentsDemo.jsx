import { useState } from "react";
import CommentBox from "../components/CommentBox";
import { useComments } from "../components/CommentsContext";
import "./CommentsDemo.css";

const CommentsDemo = () => {
    const [input, setInput] = useState("");
    const { comments, inputRef, dispatch, parentId, setParentId } = useComments();

    const handleSend = () => {
        dispatch({
            type: "add",
            payload: {
                comment: input,
                parentId
            }
        });
        setParentId(null);
        setInput("");
    }

    const commentIds = Object.keys(comments).filter(id => !comments[id].parentId);

    return (
        <div className="container comments-main-container">
            {commentIds.map((id) => (
                <CommentBox key={id} id={id} />
            ))}
            <span className="spacer" />
            <div className="comment-input-container">
                {parentId && (
                    <span className="reply-to">Replying to: <span style={{ fontWeight: 600 }}>#{parentId}</span></span>
                )}
                <input
                    type="text"
                    placeholder="Enter Comment"
                    value={input}
                    ref={inputRef}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSend();
                        }
                    }}
                />
                <button onClick={handleSend} disabled={!input}>
                    Send
                </button>
            </div>
        </div>
    )
}

export default CommentsDemo