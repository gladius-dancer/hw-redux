import React from 'react';
import {Button} from "@mui/material";
import ToDoItem from "../ToDoItem/ToDoItem";
import "./ToDo.scss";
import useToDo from "./hooks/useToDo";
import {useAppSelector} from "../../store/store";

export default function ToDo() {
    const tasks = useAppSelector(state => state.todo);
    const {handleEdit, handleDone, handleToDo, handleDelete, handleAdd, handleClear} = useToDo()

    return (
        <div className="container">
            <div className="todo">
                <div className="todo-inner">
                    <div className="todo-inner-header">
                        <h3>Tasks</h3>
                        <Button variant="text" onClick={() => handleAdd()}>New task</Button>
                    </div>
                    <ul className="todo-tasks">
                        {tasks.filter((item) => item.status === false).map((item) => (
                            <ToDoItem
                                key={item.id}
                                id={item.id}
                                status={item.status}
                                task={item.task}
                                deleteTask={() => handleDelete(item.id)}
                                edit={handleEdit}
                                done={() => handleDone(item.id)}
                                todo={() => handleToDo(item.id)}
                            />
                        ))}
                    </ul>
                    {tasks.filter((item) => item.status === true).length > 0 &&
                        (
                            <div className="todo-inner-header">
                                <h3>Done</h3>
                                <Button variant="text" onClick={() => handleClear()}>Clear</Button>
                            </div>
                        )}

                    <ul className="done-tasks">
                        {tasks.filter((item) => item.status === true).map((item) => (
                            <ToDoItem
                                key={item.id}
                                id={item.id}
                                status={item.status}
                                task={item.task}
                                deleteTask={() => handleDelete(item.id)}
                                edit={handleEdit}
                                done={() => handleDone(item.id)}
                                todo={() => handleToDo(item.id)}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}