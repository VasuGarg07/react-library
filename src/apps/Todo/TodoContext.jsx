import {  createContext, useContext, useReducer } from "react";

const randomId = () => Math.random().toString(36).substring(2, 15);

const reducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case "ADD":
            return [...state, {
                id: randomId(),
                task: payload,
                completed: false
            }];
        case "REMOVE":
            return state.filter(item => item.id  !== payload);
        case "MARK":
            return state.map(item => {
                if (item.id !== payload.id) return item;
                return {
                    ...item,
                    completed: payload.completed
                }
            });
        default:
            return state;
    }
}

const TodoContext = createContext(null);

export const TodoProvider = ({children}) => {
    const [todos, dispatch] = useReducer(reducer, []);

    const addTodo= (task) => {
        dispatch({
            type: "ADD",
            payload: task
        });
    }

    const removeTodo = (id) => {
        dispatch({
            type: "REMOVE",
            payload: id
        });
    }

    const markStatus = (id, status) => {
        dispatch({
            type: "MARK",
            payload: {id, completed: status}
        });
    }

    return <TodoContext.Provider value={{todos, addTodo, removeTodo, markStatus}}>
        {children}
    </TodoContext.Provider>
}


export const useTodos = () => {
    const context = useContext(TodoContext);
    if(!context) {
        throw Error("Use context inside TodoContext Provider");
    }
    return context;
}