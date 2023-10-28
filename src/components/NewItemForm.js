import React from "react";

function NewItemForm({ inputText, setInputText, todoItems, setTodoItems }) {
    // Handlers
    function inputTextHandler(e) {
        setInputText(e.target.value);
    }
    function submitItemHandler(e) {
        e.preventDefault();
        if (inputText !== '') {
            setTodoItems([...todoItems, { id: Date.now(), text: inputText, completed: false }]);
            setInputText('');
        }
    }

    return (
        <form className="new-item-input">
            <input type="text" placeholder="Add new item" onChange={inputTextHandler} value={inputText} />
            <button type="submit" className="new-item-button icon-button" onClick={submitItemHandler}>&#xe710;</button>
        </form>
    );
}

export default NewItemForm;
