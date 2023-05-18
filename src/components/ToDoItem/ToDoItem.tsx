import React from 'react';
import cn from "classnames";
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckIcon from '@mui/icons-material/Check';
import "./ToDoItem.scss";

type Props = {
    id: string,
    task: string,
    status: boolean,
    edit: (id: string, value: string)=> void,
    deleteTask: ()=> void,
    done: ()=> void,
    todo: ()=> void,
}

function ToDoItem({ id, task, deleteTask, status, edit, done, todo}: Props) {

    const onChange = (event: any) => {
        edit(id, event.target.value)
    }

    return (
        <li className="task-item">
            <span className={cn(status?"hide":"show")} onClick={done}><RadioButtonUncheckedIcon /></span>
            <span className={cn(!status?"hide":"show")} onClick={todo}><CheckIcon/></span>
            <input value={task} className={status? "strike" : ""} onChange={onChange}/>
            <span className="delete"><CloseIcon onClick={deleteTask}/></span>
        </li>
    );
}

export default ToDoItem;