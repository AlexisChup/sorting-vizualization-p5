import React, {useEffect} from 'react'

import Sketch from "react-p5";
import p5Types from "p5"; 

import { LineProps, CanvasProps } from '../index.d'

import {initLines, swap} from '../../utils/lines'

import {useDispatch, useSelector} from 'react-redux'

import { CanvasState, END_SORTING, INIT_LINES } from '../../redux/types'

export const BubbleSort = (props: CanvasProps) => {
    const {canvasHeight, canvasWidth} = props
    const reduxState: CanvasState = useSelector((state: CanvasState) => state)
    const {isStarted, isPaused, isEnded, strokeWeight, lines} = reduxState
    const dispatch = useDispatch()

    useEffect(() => {
        
    }, [])

    useEffect(() => {
        setLinesRedux()
    }, [props.canvasWidth])

    const setLinesRedux = () => {
        dispatch({
            payload: initLines(canvasWidth, canvasHeight, strokeWeight),
            type: INIT_LINES
        })
    }

    let i = 0; 

	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
        p5.strokeCap(p5.SQUARE);
        p5.frameRate(30)

        // p5.noLoop()
	};

	const draw = (p5: p5Types) => {
        p5.background(0);
        
        if(isStarted && !isPaused  && !isEnded) {
            // p5.loop()
            // Iterate over array & swap values when i > i+1
            if (i < lines.length) {
                for (let index = 0; index < lines.length - 1 - i; index++) {
                    let a = lines[index].value
                    let b = lines[index + 1].value
    
                    if (a > b) {
                        swap(lines, index)
                        // drawLines(p5, props, strokeWeight, lines)
                    }
                }
            } else {
                console.log("Bubble sorting finished")
                // p5.noLoop()
                dispatch({
                    payload: {},
                    type: END_SORTING
                })
            }
    
            // if(!isStarted) {
            i++;
                // setColorEndedLine(lines, i);
            // }
    
            // draw
        } else {
            // p5.noLoop()
        }

        drawLines(p5, props, strokeWeight, lines)
    };
    
    const windowResized = (p5: p5Types) => {
        p5.resizeCanvas(canvasWidth, canvasHeight);
    }

    return(
        <>
            <Sketch 
                setup={setup} 
                draw={draw}
                windowResized={windowResized}
                className="margin-auto"
            />
        </>
    );
}

export const drawLines = (p5: p5Types, props: CanvasProps, strokeWeight: number, lines: LineProps[]) => {
    for (let index = 0; index < lines.length; index++) {
        // line color
        const {r, b, g} = lines[index].color;

        p5.stroke(r, g, b);
        p5.strokeWeight(strokeWeight);

        p5.line(index*strokeWeight, props.canvasHeight, index*strokeWeight, props.canvasHeight - lines[index].value)            
    }  
}







