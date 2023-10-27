import React from "react";

function NewItemForm() {
    return (
        <form className="new-item-input">
            <input type="text" className="" placeholder="Add new item" />
            <button type="submit" className="new-item-button icon-button">&#xe710;</button>
        </form>
    );
}

export default NewItemForm;
