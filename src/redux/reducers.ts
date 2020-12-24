import { CanvasState, CanvasActionTypes, UPDATE_CANVAS } from './types'

const initialState: CanvasState = {
    isSorting: false,
    strokeWeight: 10,
    lines: []
}

export function rootReducer (state = initialState, action: CanvasActionTypes): CanvasState {
    switch(action.type) {
        case UPDATE_CANVAS: {
            return {
                ...state,
                ...action.payload
            }
        }

        default: 
            return state
    }
}