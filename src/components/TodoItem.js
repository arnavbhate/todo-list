import React from "react";

function TodoItem() {
    return (
        <div className="list-item">
            <span className="list-item-text" />
            <button className="list-complete-button icon-button">&#xe73e;</button>
            <button className="list-delete-button icon-button">&#xe74d;</button>
        </div>
    );
}

export default TodoItem;
