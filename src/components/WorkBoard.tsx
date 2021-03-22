import React from "react";

type WorkBoardPropsType = {
    table: string | number
    increment: () => void
    reset: () => void
    disableInc: boolean
    disableReset: boolean
    red: boolean
}

export function WorkBoard(props: WorkBoardPropsType) {

    const increment = () => {
        props.increment();
    }

    const reset = () => {
        props.reset();
    }



    return <div className={'work-board'}>
        <div className={'board-wrapper'}>
            <div>
                <p className={!props.red? '' : 'red'}>{props.table}</p>
            </div>
        </div>
        <div className={'buttons-wrapper'}>
            <button onClick={increment} disabled={props.disableInc}>Inc</button>
            <button onClick={reset} disabled={props.disableReset}>Reset</button>
        </div>
    </div>
}