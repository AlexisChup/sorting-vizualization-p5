import { LineProps } from '../Components/index'

export const UPDATE_CANVAS = "UPDATE_CANVAS"

export interface CanvasState {
    isSorting: boolean;
    strokeWeight: number;
    lines: LineProps[];
}

interface UpdateCanvas {
    type: typeof UPDATE_CANVAS
    payload: CanvasState
}

export type CanvasActionTypes = UpdateCanvas 