import { createContext, useCallback, useContext, useReducer, useRef, useState } from "react";

// Helper functions
const makeId = () => Math.random().toString(36).substring(2, 7);

// Reducer Function
const commentsReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "add": {
            const comment = {
                id: makeId(),
                comment: payload.comment,
                parentId: payload.parentId ?? null,
                replyIds: []
            };

            if (!payload.parentId) return {
                ...state,
                [comment.id]: comment
            };

            return {
                ...state,
                [comment.id]: comment,
                [payload.parentId]: {
                    ...state[payload.parentId],
                    replyIds: [
                        ...state[payload.parentId].replyIds,
                        comment.id
                    ]
                }
            }
        }
        case "remove": {
            const set = new Set();
            function buildSet(id) {
                if (!state[id]) return;
                set.add(id);

                if (!state[id].replyIds?.length) return;
                for (let rId of state[id].replyIds) {
                    buildSet(rId);
                }
            }

            buildSet(payload.commentId);
            const newState = Object.entries(state)
                .filter(([id, c]) => !set.has(id))
                .map(([id, c]) => ({
                    ...c,
                    replyIds: c.replyIds.filter(rId => !set.has(rId))
                }))
                .reduce((obj, curr) => {
                    obj[curr.id] = curr;
                    return obj;
                }, {});

            return newState;
        }
        default:
            return state;
    }
}

// Comments Context
const CommentsContext = createContext(null);

// Context Provider
const CommentsProvider = ({ children }) => {
    const inputRef = useRef(null);
    const [parentId, setParentId] = useState(null);
    const [comments, dispatch] = useReducer(commentsReducer, {});

    return (
        <CommentsContext.Provider value={{
            inputRef,
            parentId,
            setParentId,
            comments,
            dispatch
        }}>
            {children}
        </CommentsContext.Provider>
    )
}

export default CommentsProvider;

// Custom Hook for using Context
export const useComments = () => {
    const context = useContext(CommentsContext);
    if (!context) {
        throw Error("Please use this context inside CommentsProvider");
    }
    return context;
}