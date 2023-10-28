import React from "react";
import TodoItem from "./TodoItem";

function List({ todoItems, setTodoItems }) {
    return (
        <div className="list-wrapper">
            <select className="list-select">
                <option value="all">All</option>
                <option value="incomplete">Incomplete</option>
                <option value="completed">Completed</option>
            </select>
            <div className="list" />
        </div>
    );
}

export default List;
