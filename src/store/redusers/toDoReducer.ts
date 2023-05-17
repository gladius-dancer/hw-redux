
export type ToDoStateType = {
    id: string,
    task: string,
    status: boolean
}

const initialState: ToDoStateType[] = []

const ADD_TASK = "ADD_TASK";



export const toDoReducer = (state = initialState, action: any): ToDoStateType[] => {
    switch (action.type) {
        case ADD_TASK:
            return [...state, {id: action.payload.id, task: action.payload.text, status: action.payload.status}];

        default:
            return state;
    }
}

export const addTask = (payload: any) => ({type: ADD_TASK, payload});
