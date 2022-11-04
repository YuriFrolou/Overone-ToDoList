import React from "react";
import "./Filter.css";

const Filter = ({filter,setFilter}) => {
    const buttonsData = [
        {
            name: 'all',
            label: 'Все задачи'
        },
        {
            name: 'current',
            label: 'Текущие'
        },
        {
            name: 'done',
            label: 'Выполненные'
        }
    ];
    const buttons=buttonsData.map(({name,label})=>{
        const isActive=filter===name;
        const addedClass=isActive?'btn-light':'btn-dark';
        return <button
            type="button"
            className={`btn ${addedClass}`}
            key={name}
            onClick={()=>{setFilter(name)}}
            >{label}</button>
    });
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};
export default Filter;