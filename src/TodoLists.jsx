import React from "react";
const TodoLists =(props)=>{




  return  (
  <>
<div className="todo_style">
<i className="fa-sharp fa-regular fa-circle-xmark"  
onClick = {() =>{
    props.onSelect(props.id);
}}>

</i>
  <li>{ props.text}</li>
  </div>
  </>
  );
};
export default TodoLists;