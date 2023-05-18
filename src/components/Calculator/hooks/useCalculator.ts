import {RootState, useAppDispatch, useAppSelector} from "../../../store/store";
import {calculate, clear, setCurrentAction, setInputValue} from "../../../store/reducers/calculatorReducer";

export default function useCalculator() {

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
                dispatch(calculate(String(parseFloat(first) + parseFloat(second || "0"))));
                break
            case "-":
                dispatch(calculate(String(parseFloat(first) - parseFloat(second || "0"))));
                break
            case "*":
                dispatch(calculate(String(parseFloat(first) * parseFloat(second || "0"))));
                break
            case "/":
                dispatch(calculate(String(parseFloat(first) / parseFloat(second || "0"))));
                break
        }
    }

    const clearValue = () => {
        dispatch(clear())
    }

    return {
        onChangeInput,
        onChangeAction,
        clearValue,
        calculateValues,
        inputValue
    }
}



