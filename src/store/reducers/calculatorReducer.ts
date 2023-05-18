import {Nullable} from "../../type/NullableType";

export type CalculatorStateType = {
    inputValue: string,
    currentAction: Nullable<string>
}

const initialState: CalculatorStateType = {
    inputValue: "",
    currentAction: ""
}

const SET_INPUT_VALUE = "SET_FIRST_VALUE";
const SET_CURRENT_ACTION = "SET_CURRENT_ACTION";
const CALCULATE = "CALCULATE";
const CLEAR = "CLEAR";


export const calculatorReducer = (state = initialState, action: any): CalculatorStateType => {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return {...state, inputValue: state.inputValue + action.payload};
        case SET_CURRENT_ACTION:
            return {
                inputValue: state.currentAction !== "" ? state.inputValue?.slice(0, state.inputValue.length - 1) + action.payload : state.inputValue + action.payload,
                currentAction: action.payload
            };
        case CALCULATE:
            return {inputValue: action.payload, currentAction: ""};
        case CLEAR:
            return {inputValue: "", currentAction: ""};
        default:
            return state;
    }
}

export const setInputValue = (payload: any) => ({type: SET_INPUT_VALUE, payload});
export const setCurrentAction = (payload: any) => ({type: SET_CURRENT_ACTION, payload});
export const calculate = (payload: any) => ({type: CALCULATE, payload});
export const clear = () => ({type: CLEAR});