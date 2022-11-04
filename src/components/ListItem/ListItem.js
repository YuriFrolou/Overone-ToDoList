import React from "react";
import "./ListItem.css";
import {FaCheck, FaTrash, FaStar} from "react-icons/fa";

const ListItem = ({task, done,onDelete,onToggleProps}) => {
    let classNameCheck='icon icon_check';
    let classNameItem = 'list-item';
    if (done) {
        classNameItem += ' done';
        classNameCheck+=' opacity';
    }
    return (
        <li className={classNameItem}>
            <span className="list-item__label" data-toggle="rise">{task}</span>
            <div className="list-item__buttons">
                <button
                    onClick={onToggleProps}
                    type="button"
                    className="btn-cookie"
                    data-toggle="done"
                >
                    <FaCheck className={classNameCheck} />
                </button>
                <button
                    onClick={onDelete}
                    type="button"
                    className="btn-trash"
                >
                    <FaTrash className="icon icon_trash"/>
                </button>
                <FaStar className="icon icon_star" onClick={(e)=>{e.currentTarget.classList.toggle('opacity')}} />
            </div>

        </li>
    );
};
export default ListItem;