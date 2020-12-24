import React, {useEffect} from 'react'

import { Button } from 'react-bootstrap'

import { CanvasState, INIT_LINES, PAUSE_SORTING, START_SORTING, RESUME_SORTING } from '../../redux/types'
import {useDispatch, useSelector} from 'react-redux'
import {initLines} from '../../utils/lines'

import {LineProps} from '../index'


interface Props {
    canvasWidth: number;
    canvasHeight: number;
}

export const FooterContainerSketch = (props: Props) => {
    const reduxState: CanvasState = useSelector((state: CanvasState) => state)
    const dispatch = useDispatch()

    const {isStarted, isEnded, isPaused, strokeWeight} = reduxState
    const {canvasWidth, canvasHeight} = props
    
    const setisStartedRedux = () => {
        let type;
        let payload: any;
        let action;
        
        if(!isStarted && !isEnded){
            action = {
                type: START_SORTING,
                payload: {}
            }
        } else if (isStarted && !isPaused && !isEnded) {
            action = {
                type: PAUSE_SORTING,
                payload: {}
            }
        } else if (isStarted && isPaused && !isEnded) {
            action = {
                type: RESUME_SORTING,
                payload: {}
            }
        } else if (isEnded) {
            action = {
                type: INIT_LINES,
                payload: initLines(canvasWidth, canvasHeight, strokeWeight)
            }
        } 
        dispatch(action)  
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
