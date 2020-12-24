import {LineProps} from '../Components/index'

export const setColorEndedLine = (lines: LineProps[], index: number) => {
    let colorEnded = {
        r: 255,
        g: 0,
        b: 0,
    }

    if(lines.length - index >= 0) {
        lines[lines.length - index].color = colorEnded
    }
}

export const swap = (lines: LineProps[], index: number) => {
    let tempLine:LineProps = lines[index];

    // swap lines
    lines[index] = lines[index + 1];
    lines[index + 1] = tempLine;
}

export const initLines = (canvasWidth: number, canvasHeight: number, strokeWeight: number): LineProps [] => {
    console.log("initLines, canvasW + H", canvasWidth, canvasHeight, " st", strokeWeight);
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