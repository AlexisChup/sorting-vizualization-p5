import { 
    CanvasState, 
    CanvasActionTypes, 
    START_SORTING, 
    INIT_LINES, 
    PAUSE_SORTING, 
    RESUME_SORTING, 
    END_SORTING 
} from './types'
import { initLines } from '../utils/lines'

const initialState: CanvasState = {
    isStarted: false,
    isEnded: false,
    isPaused: false,
    strokeWeight: 10,
    lines: []
}

export function rootReducer (state = initialState, action: CanvasActionTypes): CanvasState {
    switch(action.type) {
        // case UPDATE_CANVAS: {
        //     return {
        //         ...state,
        //         ...action.payload
        //     }
        // }
        case START_SORTING: {
            return {
                ...state,
                isStarted: true,
                isEnded: false,
                isPaused: false
            }
        }
        case INIT_LINES: {
            return {
                ...state,
                isStarted: false,
                isEnded: false,
                isPaused: false,
                lines: action.payload
            }
        }
        case PAUSE_SORTING: {
            return {
                ...state,
                isPaused: true,
            }
        }
        case RESUME_SORTING: {
            return {
                ...state,
                isPaused: false,
            }
        }
        case END_SORTING: {
            return {
                ...state,
                isEnded: true,
            }
        }

        default: 
            return state
    }
}