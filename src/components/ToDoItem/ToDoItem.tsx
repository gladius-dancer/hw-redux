import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckIcon from '@mui/icons-material/Check';
import "./ToDoItem.scss";
import {ToDoStateType} from "../../store/redusers/toDoReducer";

function ToDoItem({task, status, edit, deleteTask }: ToDoStateType | any) {
    return (
        <li>
            <RadioButtonUncheckedIcon className={status?"hide":"show"}/>
            <CheckIcon className={!status?"hide":"show"}/>
            <input value={task} onChange={edit}/>
            <CloseIcon onClick={deleteTask}/>
        </li>
    );
}

export default ToDoItem;