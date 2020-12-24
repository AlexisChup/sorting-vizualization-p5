import { CanvasState, UPDATE_CANVAS, CanvasActionTypes } from './types'

export function updateCanvas(newCanvas: CanvasState): CanvasActionTypes {
    return {
        type: UPDATE_CANVAS,
        payload: newCanvas
    }
}

