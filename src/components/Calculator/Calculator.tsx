import React from 'react';
import "./Calculator.scss";
import useCalculator from "./hooks/useCalculator";

function Calculator() {

    const {
        onChangeInput,
        onChangeAction,
        clearValue,
        calculateValues,
        inputValue
    } = useCalculator()

        return (
        <div className="calculator">
            <div className="calculator-inner">
                <input type="text" value={String(inputValue)}/>
                <div className="calculator-btns">
                    <button onClick={() => onChangeInput("1")}>1</button>
                    <button onClick={() => onChangeInput("2")}>2</button>
                    <button onClick={() => onChangeInput("3")}>3</button>
                    <button onClick={() => onChangeAction("+")} disabled={inputValue.length > 0 ? false : true}>+</button>
                    <button onClick={() => onChangeInput("4")}>4</button>
                    <button onClick={() => onChangeInput("5")}>5</button>
                    <button onClick={() => onChangeInput("6")}>6</button>
                    <button onClick={() => onChangeAction("-")} disabled={inputValue.length > 0 ? false : true}>-</button>
                    <button onClick={() => onChangeInput("7")}>7</button>
                    <button onClick={() => onChangeInput("8")}>8</button>
                    <button onClick={() => onChangeInput("9")}>9</button>
                    <button onClick={() => onChangeAction("*")} disabled={inputValue.length > 0 ? false : true}>*</button>
                    <button onClick={() => onChangeInput("0")}>0</button>
                    <button onClick={() => onChangeInput(
                        inputValue.length > 0 && inputValue.slice(-1).match(/[+\-*/]/) == null ? "." : "0.")}
                            disabled={inputValue.slice(-1) ==="." ? true : false
                    }>.</button>
                    <button onClick={() => calculateValues()}>=</button>
                    <button onClick={() => onChangeAction("/")} disabled={inputValue.length > 0 ? false : true}>/</button>
                </div>
                <button onClick={()=>clearValue()} className="clear">Clear</button>
            </div>

        </div>
    );
}

export default Calculator;