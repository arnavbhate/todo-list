import React from "react";
import TodoItem from "./TodoItem";

function List({ todoItems, setTodoItems, filteredItems, setFilter }) {
    // Handlers
    function filterHandler(e) {
        setFilter(e.target.value);
    }

    return (
        <div className="list-wrapper">
            <select onChange={filterHandler}>
                <option value="all">All</option>
                <option value="incomplete">Incomplete</option>
                <option value="completed">Completed</option>
            </select>
            <div>
                {filteredItems.map(item => (
                    <TodoItem key={item.id} todoItem={item} todoItems={todoItems} setTodoItems={setTodoItems} />
                ))}
            </div>
        </div >
    );
}

export default List;
