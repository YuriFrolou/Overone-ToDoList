import React from "react";
import "./Info.css";


const Info = ({total, done}) => {

    return (
        <div className="info">
            <h2>Количество задач: {total}</h2>
            <h2>Количество выполненных задач: {done}</h2>
        </div>
    );
};
export default Info;