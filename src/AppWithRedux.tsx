import React, {useEffect, useState} from 'react';
import './App.css';
import {SettingsBlock} from "./components/SettingsBlock";
import {WorkBoard} from "./components/WorkBoard";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {
    changeMaxValueAC,
    changeStartValueAC,
    increment,
    initialStateType,
    reset,
    setValue
} from "./store/counterReducer";

export const AppWithRedux = React.memo(() => {


    let dispatch = useDispatch();
    let {red,
        count,
        startValue,
        maxValue,
        error,
        disableInc,
        disableReset,
        disableSet} = useSelector<AppRootStateType, initialStateType>(state => state.counter);

    // useEffect(() => {
    //     getValuesFromLocalStorage()
    // }, [])

    //
    // useEffect(() => {
    //     setToLocalStorage()
    // }, [count, startValue, maxValue])

    //
    // const setToLocalStorage = () => {
    //     let counter = {
    //         count,
    //         startValue,
    //         maxValue
    //     }
    //     localStorage.setItem('counter', JSON.stringify(counter));
    // }

    // const getValuesFromLocalStorage = () => {
    //     let counterValuesAsSting = localStorage.getItem('counter');
    //     if(counterValuesAsSting) {
    //         let counterValue  = JSON.parse(counterValuesAsSting)
    //         setCount(counterValue.count)
    //         setStartValue(counterValue.startValue)
    //         setMaxValue(counterValue.maxValue)
    //         setDisableSet(false)
    //     }
    // }
    //
    const incButtonClick = () => {
        dispatch(increment());
    };

    const resetCount = () => {
        dispatch(reset());
    };

    const changeStartValue = (newStartValue: number) => {
        dispatch(changeStartValueAC(newStartValue))
    };

    const changeMaxValue = (newMaxValue: number) => {
        dispatch(changeMaxValueAC(newMaxValue))
    };

    const setValues = () => {
        dispatch(setValue())
    }


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
                increment={incButtonClick}
                reset={resetCount}
                disableInc={disableInc}
                disableReset={disableReset}
                count={count}
                startValue={startValue}
                maxValue={maxValue}
            />
        </div>
    );
})


