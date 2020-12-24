import React, {useState} from 'react'

import Sketch from "react-p5";
import p5Types from "p5"; 

import { LineProps, CanvasProps } from '../index.d'

import {
    useSelector,
} from 'react-redux'

import { CanvasState } from '../../redux/types'

export const BubbleSort = (props: CanvasProps) => {
    const [isSortingEnded, setIsSortingEnded] = useState(false)
    const [isSortingStarted, setIsSortingStarted] = useState(false)

    const isSorting: boolean = useSelector((state: CanvasState) => state.isSorting)
    console.log("isSorting : ", isSorting)

    let strokeWeight = 10;
    let lines = initLines(props.canvasWidth, props.canvasHeight, strokeWeight);

    let i = 0;

	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(props.canvasWidth, props.canvasHeight).parent(canvasParentRef);
        p5.strokeCap(p5.SQUARE);
        p5.frameRate(60)

        p5.noLoop()
	};

	const draw = (p5: p5Types) => {
        p5.background(0);
        
        if(isSortingStarted) {
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
                setIsSortingEnded(true)
                p5.noLoop()
            }
    
            if(!isSortingEnded) {
                i++;
                setColorEndedLine(lines, i);
            }
    
            // draw
        }
        drawLines(p5, props, strokeWeight, lines)
    };
    
    const windowResized = (p5: p5Types) => {
        p5.resizeCanvas(props.canvasWidth, props.canvasHeight);
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

const initLines = (canvasWidth: number, canvasHeight: number, strokeWeight: number) => {
    let lines: LineProps [] = [];
    let LineProps: LineProps;

    let r: number, g: number, b: number, value: number;

    for (let index = 0; index < Math.trunc(canvasWidth / strokeWeight) + 1; index++) {
        r = Math.random() * 155 + 100;
        g = Math.random() * 155 + 100;
        b = Math.random() * 155 + 100;
        value = Math.random() * canvasHeight;
        
        LineProps = {
            color: {r, g, b},
            value,
        }

        lines[index] = LineProps;
    }

    return lines;
}

const swap = (lines: LineProps[], index: number) => {
    let tempLine:LineProps = lines[index];

    // swap lines
    lines[index] = lines[index + 1];
    lines[index + 1] = tempLine;
}

const drawLines = (p5: p5Types, props: CanvasProps, strokeWeight: number, lines: LineProps[]) => {
    for (let index = 0; index < lines.length; index++) {
        // line color
        const {r, b, g} = lines[index].color;

        p5.stroke(r, g, b);
        p5.strokeWeight(strokeWeight);

        p5.line(index*strokeWeight, props.canvasHeight, index*strokeWeight, props.canvasHeight - lines[index].value)            
    }  
}

const setColorEndedLine = (lines: LineProps[], index: number) => {
    let colorEnded = {
        r: 255,
        g: 0,
        b: 0,
    }

    if(lines.length - index >= 0) {
        lines[lines.length - index].color = colorEnded
    }
}





