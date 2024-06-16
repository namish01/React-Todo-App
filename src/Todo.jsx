import { useState } from "react";

function Todo(){
    const [tasks,settasks]=useState(["Get up Early","Take shower","Go to mandir"]);
    const [newTask,setnewTask]=useState("");
    function HandelInputChange(event){
        setnewTask(event.target.value);
    }

    function HandelAddEvent(){
      if(newTask.trim() !==""){
        settasks( t=>[...t,newTask]);
        setnewTask("");
      }
    }

    function DeleteTask(index){
        const updatedTask=tasks.filter((_,i) => i!==index);
        settasks(updatedTask);
    }

    function MoveTaskUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [ updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]];
            settasks(updatedTasks);
        }
    }

    function MoveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [ updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]];
            settasks(updatedTasks);
        }
    }
return(
<div className="ToDo-List">
    <h1>ToDo-List</h1>
    <div>
        <input 
        type="text"
        placeholder="Enter the tasks..."
        value={newTask} 
        onChange={HandelInputChange}/>
        <button className="addButton" onClick={HandelAddEvent}>
                   Add
        </button>
    </div>
    <ol>
   {tasks.map((task,index)=>
              <li key={index}>
                <span className="text">{task}</span>
                <button className="DeleteButton" onClick={()=>DeleteTask(index)}>
                    Delete
                </button>
                <button className="MoveButton" onClick={()=>MoveTaskUp(index)}>
                    👆
                </button>
                <button className="MoveButton" onClick={()=>MoveTaskDown(index)}>
                    👇
                </button>
              </li> )}
    </ol>
</div>    

)
}
export default Todo;