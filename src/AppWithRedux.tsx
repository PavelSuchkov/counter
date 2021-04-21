import React, {useCallback} from 'react';
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


    const incButtonClick = useCallback(() => {
        dispatch(increment());
    }, [dispatch]);

    const resetCount = useCallback(() => {
        dispatch(reset());
    }, [dispatch]);

    const changeStartValue = useCallback((newStartValue: number) => {
        dispatch(changeStartValueAC(newStartValue))
    }, [dispatch]);

    const changeMaxValue = useCallback((newMaxValue: number) => {
        dispatch(changeMaxValueAC(newMaxValue))
    }, [dispatch]);

    const setValues = useCallback(() => {
        dispatch(setValue())
    }, [dispatch]);


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


