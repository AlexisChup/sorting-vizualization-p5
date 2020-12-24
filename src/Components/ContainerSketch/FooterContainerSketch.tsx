import React, {useEffect} from 'react'

import { Button } from 'react-bootstrap'

import { CanvasState, UPDATE_CANVAS } from '../../redux/types'
import {useDispatch, useSelector} from 'react-redux'


interface Props {
    
}

export const FooterContainerSketch = (props: Props) => {
    const reduxState: CanvasState = useSelector((state: CanvasState) => state)
    const dispatch = useDispatch()
    
    const setIsSortingRedux = () => {
        dispatch({
            payload: {
                ...reduxState,
                isSorting: !reduxState.isSorting
            },
            type: UPDATE_CANVAS
        })  
    }

    return (
        <div>
            <Button size="sm" variant={reduxState.isSorting ? "outline-danger" : "outline-primary"} onClick={() => setIsSortingRedux()}>
                {reduxState.isSorting ? "Pause" : "Start"} sorting
            </Button>
        </div>
    )
}
