import React from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";

const List = ({data,onDelete,onToggleProps}) => {
const elements=data.map((item)=>{
    const{id,...props}=item;
    return <ListItem
        onDelete={()=>onDelete(id)}
        onToggleProps={(e)=>onToggleProps(id,e.currentTarget.getAttribute('data-toggle'))}
    key={id}
        {...props}
    />
});
    return (
        <div className="list-group">
            {elements}
        </div>
    );
};
export default List;