import { applyMiddleware, createStore, combineReducers, Reducer } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {calculatorReducer, CalculatorStateType} from "./redusers/calculatorReducer";
import {toDoReducer, ToDoStateType} from "./redusers/toDoReducer"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

type RootReducerType = {
    calculator: CalculatorStateType
    todo: ToDoStateType[]
}

const rootReducer = combineReducers<RootReducerType>({
    calculator: calculatorReducer,
    todo: toDoReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;