import React, {useState} from 'react';
import './App.css';
import {SettingsBlock} from "./components/SettingsBlock";
import {WorkBoard} from "./components/WorkBoard";

function App() {

    const [message, setMessage] = useState<string>('Enter valid value and press "set"')
    const [count, setCount] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [disableInc, setDisableInc] = useState<boolean>(true);
    const [disableReset, setDisableReset] = useState<boolean>(true)
    const [disableSet, setDisableSet] = useState<boolean>(true)


    const [error, setError] = useState<boolean>(false);
    const[red, setRed] = useState<boolean>(false)

    const incButtonClick = () => {
        setCount(count + 1);
        setRed(false)
        if (count === maxValue - 1) {
            setDisableInc(true)
            setRed(true)
        }
    }

    const resetCount = () => {
        setCount(startValue);
        setDisableInc(false);
        setRed(false)
    }

    const changeStartValue = (newStartValue: number) => {
        setStartValue(newStartValue);
        if (newStartValue < 0) {
            setDisableSet(true)
            setError(true)
        }  else if(newStartValue >= maxValue){
            setDisableSet(true)
            setError(true)
        }else {
            setDisableSet(false);
            setError(false)
        }
    }

    const changeMaxValue = (newMaxValue: number) => {
        setMaxValue(newMaxValue)
        if (newMaxValue < 0 ) {
            setDisableSet(true)
            setError(true)
        } else if(newMaxValue <= startValue){
            setDisableSet(true)
            setError(true)
        }
        else {
            setDisableSet(false);
            setError(false)
        }
    }

    const setValues = () => {
        setCount(startValue);
        setDisableInc(false);
        setDisableReset(false);
        setDisableSet(true);
        setRed(false);
        table = count
    }

    let table: number | string = message
    if (maxValue <= startValue) {
        table = message
    } else if (maxValue < 0 || startValue < 0) {
        table = message
    } else table = count

    return (
        <div className="App">

            <SettingsBlock

                error={error}
                startValue={startValue}
                maxValue={maxValue}
                newStartValue={changeStartValue}
                newMaxValue={changeMaxValue}
                setValues={setValues}
                disableSet={disableSet}
            />

            <WorkBoard
                red={red}
                table={table}
                increment={incButtonClick}
                reset={resetCount}
                disableInc={disableInc}
                disableReset={disableReset}
            />
        </div>
    );
}

export default App;
