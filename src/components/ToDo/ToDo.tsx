import React from 'react';
import { v4 as uuid } from 'uuid';
import {Button} from "@mui/material";
import ToDoItem from "../ToDoItem/ToDoItem";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {addTask, ToDoStateType} from "../../store/redusers/toDoReducer";
import "./ToDo.scss";

function ToDo() {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(state => state.todo);


    const handleAdd = ()=>{
        dispatch(addTask({id: uuid(), task: "", status: false}))
    }

    const handleEdit = ()=>{

    }

    const handleDelete = ()=>{

    }

    return (
        <div className="container">
            <div className="todo">
                <div className="todo-inner">
                    <div className="todo-inner-header">
                        <h3>Tasks</h3>
                        <Button variant="text" onClick={()=>handleAdd()}>New task</Button>
                    </div>
                    <ul className="todo-tasks">
                        {tasks.filter((item)=>item.status === false).map((item: ToDoStateType)=>(
                            <ToDoItem
                                status={item.status}
                                task={item.task}
                                addTask={handleEdit}
                                deleteTask={handleDelete}
                            />
                        ))}
                    </ul>
                    <ul className="done-tasks">
                        {tasks.filter((item)=>item.status === true).map((item: ToDoStateType)=>(
                            <ToDoItem
                                status={item.status}
                                task={item.task}
                                addTask={handleEdit}
                                deleteTask={handleDelete}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ToDo;