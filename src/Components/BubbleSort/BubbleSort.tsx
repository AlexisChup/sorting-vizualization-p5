import React from 'react'

import Sketch from "react-p5";
import p5Types from "p5"; 

interface Props {
    canvasHeight: number;
    canvasWidth: number;
    ref?: any;
}
interface State {
    
}

export const BubbleSort = (props: Props) => {
    let strokeWeight = 10;
    let values = initValues(props.canvasWidth, props.canvasHeight, strokeWeight);

    let i = 0;

	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(props.canvasWidth, props.canvasHeight).parent(canvasParentRef);
        p5.strokeCap(p5.SQUARE);

        p5.noLoop()
	};

	const draw = (p5: p5Types) => {
        p5.background(0);
        
        // Iterate over array & swap values when i > i+1
        if (i < values.length) {
            for (let index = 0; index < 30 - 1 - i; index++) {
                let a = values[index]
                let b = values[index + 1]

                if (a > b) {
                    swap(values, index)
                }
            }
        } else {
            console.log("Bubble sorting finished")
            p5.noLoop()
        }

        i++;

        // draw
        for (let index = 0; index < values.length; index++) {
            // line color
            p5.stroke(255);
            p5.strokeWeight(strokeWeight);

            p5.line(index*strokeWeight, props.canvasHeight, index*strokeWeight, props.canvasHeight - values[index])            
        }
	};

    return(
            <Sketch 
                setup={setup} 
                draw={draw}
                className="margin-auto"
            />
    );
}

const initValues = (canvasWidth: number, canvasHeight: number, strokeWeight: number) => {
    let values = []

    for (let index = 0; index < Math.trunc(canvasWidth / strokeWeight); index++) {
        values[index] = Math.random() * canvasHeight;
    }

    return values;
}

const swap = (values: number[], index: number) => {
    let temp:number = values[index];

    // swap values
    values[index] = values[index + 1];
    values[index + 1] = temp;
}



