import React from 'react';
import "./Calculator.scss";
import type {RootState} from '../../store/store';
import {useAppDispatch} from "../../store/store";
import {useAppSelector} from "../../store/store";
import {setCurrentAction, setInputValue, calculate, clear} from "../../store/redusers/calculatorReducer";

function Calculator() {
    const dispatch = useAppDispatch();
    const inputValue = useAppSelector((state: RootState) => state.calculator.inputValue);
    const currentAction = useAppSelector((state: RootState) => state.calculator.currentAction);

    const onChangeInput = (value: string) => {
        dispatch(setInputValue(value));
    }

    const onChangeAction = (value: string) => {
        calculateValues()
        dispatch(setCurrentAction(value));
    }

    const calculateValues = () => {
        let [first, second] = inputValue?.length != undefined ? inputValue?.split(/[+\-*/]/) : ["0", "0"];
        switch (currentAction) {
            case "+":
                dispatch(calculate(String(parseFloat(first) + parseFloat(second))));
                break
            case "-":
                dispatch(calculate(String(parseFloat(first) - parseFloat(second))));
                break
            case "*":
                dispatch(calculate(String(parseFloat(first) * parseFloat(second))));
                break
            case "/":
                dispatch(calculate(String(parseFloat(first) / parseFloat(second))));
                break
        }
    }

    const clearValue = ()=>{
        dispatch(clear())
    }

    return (
        <div className="calculator">
            <div className="calculator-inner">
                <input type="text" value={String(inputValue)}/>
                <div className="calculator-btns">
                    <button onClick={() => onChangeInput("1")}>1</button>
                    <button onClick={() => onChangeInput("2")}>2</button>
                    <button onClick={() => onChangeInput("3")}>3</button>
                    <button onClick={() => onChangeAction("+")}>+</button>
                    <button onClick={() => onChangeInput("4")}>4</button>
                    <button onClick={() => onChangeInput("5")}>5</button>
                    <button onClick={() => onChangeInput("6")}>6</button>
                    <button onClick={() => onChangeAction("-")}>-</button>
                    <button onClick={() => onChangeInput("7")}>7</button>
                    <button onClick={() => onChangeInput("8")}>8</button>
                    <button onClick={() => onChangeInput("9")}>9</button>
                    <button onClick={() => onChangeAction("*")}>*</button>
                    <button onClick={() => onChangeInput("0")}>0</button>
                    <button onClick={() => onChangeInput(".")}>.</button>
                    <button onClick={() => calculateValues()}>=</button>
                    <button onClick={() => onChangeAction("/")}>/</button>
                </div>
                <button onClick={()=>clearValue()} className="clear">Clear</button>
            </div>

        </div>
    );
}

export default Calculator;