import React, { useState } from "react";
import "./CommentBox.css";
import { useComments } from "./CommentsContext";

const CommentBox = React.memo(({ id }) => {
    const [showReplies, setShowReplies] = useState(true);
    const { comments, searchComment, setParentId, inputRef, dispatch } = useComments();

    const comment = comments[id];

    const toggleReplies = () => setShowReplies(prev => !prev);
    const replyOnComment = () => {
        setParentId(id);
        inputRef.current?.focus();
    }

    const deleteComment = () => dispatch({
        type: "remove",
        payload: { commentId: id }
    });

    if (!comment) return null;

    return (
        <div className="comment-box">
            <div className="comment">
                <h6>{comment.comment}</h6>
                <span className="spacer" />
                {comment.replyIds?.length > 0 &&
                    <p className="font-10" onClick={toggleReplies}>{showReplies ? "Hide" : "Show"} Replies</p>
                }
                <p className="font-10 reply" onClick={replyOnComment}>Reply</p>
                <p className="font-10 delete" onClick={deleteComment}>Delete</p>
            </div>

            {showReplies && comment.replyIds?.length > 0 && <div style={{ marginTop: 8 }}>
                {comment.replyIds.map((rId) => (
                    <CommentBox key={rId} id={rId} />
                ))}
            </div>}
        </div>
    )
})

export default CommentBox