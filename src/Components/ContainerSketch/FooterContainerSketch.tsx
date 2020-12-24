import React, {useEffect} from 'react'

import { Button } from 'react-bootstrap'

import { CanvasState, INIT_LINES, PAUSE_SORTING, START_SORTING, RESUME_SORTING } from '../../redux/types'
import {useDispatch, useSelector} from 'react-redux'


interface Props {
    
}

export const FooterContainerSketch = (props: Props) => {
    const reduxState: CanvasState = useSelector((state: CanvasState) => state)
    const dispatch = useDispatch()

    const {isStarted, isEnded, isPaused} = reduxState
    
    const setisStartedRedux = () => {
        let type;
        
        if(!isStarted && !isEnded){
            type = START_SORTING
        } else if (isStarted && !isPaused && !isEnded) {
            type = PAUSE_SORTING
        } else if (isStarted && isPaused && !isEnded) {
            type = RESUME_SORTING
        }

        dispatch({
            payload: {
                ...reduxState,
            },
            type
        })  
    }

    let buttonName, buttonColor;

    if(!isStarted && !isEnded) {
        buttonName = "Start"
        buttonColor = "outline-primary"
    } else if (isStarted && !isPaused && !isEnded) {
        buttonName = "Pause"
        buttonColor = "outline-danger"
    } else if (isStarted && isPaused && !isEnded) {
        buttonName = "Resume"
        buttonColor = "outline-primary"
    } else if (isEnded) {
        buttonName = "Restart"
        buttonColor = "outline-primary"
    } 

    return (
        <div>
            <Button size="sm" variant={buttonColor} onClick={() => setisStartedRedux()}>
                {buttonName} sorting
            </Button>
        </div>
    )
}
