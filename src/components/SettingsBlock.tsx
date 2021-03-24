import React from "react";

type SettingsPropsType = {
    startValue: number
    newStartValue: (value: number) => void
    maxValue: number
    newMaxValue: (value: number) => void
    setValues: () => void
    disableSet: boolean
    error: boolean
}

export function SettingsBlock(props: SettingsPropsType) {

    const onChangeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.newMaxValue(e.currentTarget.valueAsNumber)
    }

    const onChangeStartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.newStartValue(e.currentTarget.valueAsNumber)
    }


    return <div className={'board'}>
        <div className={'inputs-wrapper'}>

                        <span className='input-value'>max value
                            <input type='number'
                                   value={props.maxValue}
                                   onChange={onChangeMaxValue}
                                   className={!props.error ? '' : 'error'}/>
                        </span>

                         <span className='input-value'>start value
                            <input value={props.startValue}
                                   onChange={onChangeStartValue}
                                   type='number'
                            className={!props.error ? '' : 'error'}/>
                         </span>
        </div>
        <div className={'buttons-wrapper'}>
            <button onClick={() => {props.setValues()}} disabled={props.disableSet}>Set</button>
        </div>
    </div>
}