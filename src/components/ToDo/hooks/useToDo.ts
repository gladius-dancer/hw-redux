import {useAppDispatch, useAppSelector} from "../../../store/store";
import {addTask, clearDone, deleteTask, doneTask, editTask, todoTask} from "../../../store/reducers/toDoReducer";
import {v4 as uuid} from "uuid";

export default function UseToDo() {
    const dispatch = useAppDispatch();

    const handleAdd = ()=>{
        dispatch(addTask({id: uuid(), task: "", status: false}))
    }

    const handleEdit = (id: string, value: string)=>{
        dispatch(editTask({id, value}));
    }

    const handleDone = (id: string)=>{
        dispatch(doneTask(id));
    }

    const handleToDo = (id: string)=>{
        dispatch(todoTask(id));
    }

    const handleDelete = (id: string)=>{
        dispatch(deleteTask(id));
    }

    const handleClear = ()=>{
        dispatch(clearDone());
    }

    return {
        handleAdd,
        handleEdit,
        handleDone,
        handleToDo,
        handleDelete,
        handleClear
    }
}