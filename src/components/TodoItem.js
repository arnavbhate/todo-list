import React from "react";

function TodoItem({ todoItem, todoItems, setTodoItems }) {
    // Handlers
    function completeItemHandler() {
        setTodoItems(todoItems.map(item => {
            if (item.id === todoItem.id) {
                return {
                    ...item, completed: true
                }
            }
            return item;
        }));
    }
    function deleteItemHandler() {
        setTodoItems(todoItems.filter(item => item.id !== todoItem.id));
    }

    return (
        <div className={`list-item ${todoItem.completed ? 'list-item-complete' : ''}`}>
            <span className="list-item-text">{todoItem.text}</span>
            <button className="list-complete-button icon-button" onClick={completeItemHandler}>&#xe73e;</button>
            <button className="list-delete-button icon-button" onClick={deleteItemHandler}>&#xe74d;</button>
        </div>
    );
}

export default TodoItem;
