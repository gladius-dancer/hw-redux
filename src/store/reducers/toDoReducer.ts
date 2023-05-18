export type ToDoStateType = {
    id: string,
    task: string,
    status: boolean
}

const initialState: ToDoStateType[] = []

const ADD_TASK = "ADD_TASK";
const EDIT_TASK = "EDIT_TASK";
const DELETE_TASK = "DELETE_TASK";
const DONE_TASK = "DONE_TASK";
const TODO_TASK = "TODO_TASK";
const CLEAR_DONE = "CLEAR_DONE";

export const toDoReducer = (state = initialState, action: any): ToDoStateType[] => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, {id: action.payload.id, task: action.payload.text, status: action.payload.status}];
        case EDIT_TASK:
            return [...state.map(item => {
                if (item.id == action.payload.id) return {...item, task: action.payload.value};
                else return item;
            })];
        case DELETE_TASK: {
            return [...state.filter(item => item.id != action.payload)];
        }
        case DONE_TASK: {
            return [...state.map(item => {
                if (item.id == action.payload) return {...item, status: true};
                else return item;
            })];
        }
        case TODO_TASK: {
            return [...state.map(item => {
                if (item.id == action.payload) return {...item, status: false};
                else return item;
            })];
        }
        case CLEAR_DONE: {
            return [...state.filter(item => item.status === false)];
        }
        default:
            return state;
    }
}

export const addTask = (payload: any) => ({type: ADD_TASK, payload});
export const editTask = (payload: any) => ({type: EDIT_TASK, payload});
export const deleteTask = (payload: any) => ({type: DELETE_TASK, payload});
export const doneTask = (payload: any) => ({type: DONE_TASK, payload});
export const todoTask = (payload: any) => ({type: TODO_TASK, payload});
export const clearDone = () => ({type: CLEAR_DONE});
