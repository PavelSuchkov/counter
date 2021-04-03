import React from "react";

type WorkBoardPropsType = {
    increment: () => void
    reset: () => void
    disableInc: boolean
    disableReset: boolean
    red: boolean
    count: number
    startValue: number
    maxValue: number
}

export function WorkBoard(props: WorkBoardPropsType) {

    const increment = () => {
        props.increment();
    }

    const reset = () => {
        props.reset();
    }


    return <div className={'board'}>
        <div className={'inputs-wrapper'}>
            <h1 className={!props.red ? '' : 'red'}>
                {props.maxValue <= props.startValue || (props.maxValue < 0 || props.startValue < 0)
                    ? "Error"
                    : props.count
                }
            </h1>
        </div>
        <div className={'buttons-wrapper'}>
            <button onClick={increment} disabled={props.disableInc}>Inc</button>
            <button onClick={reset} disabled={props.disableReset}>Reset</button>
        </div>
    </div>
}