import { LineProps } from '../Components/index'

export const START_SORTING = "START_SORTING"
export const PAUSE_SORTING = "PAUSE_SORTING"
export const RESUME_SORTING = "RESUME_SORTING"
export const END_SORTING = "END_SORTING"
export const RESTART_SORTING = "RESTART_SORTING"
export const INIT_LINES = "INIT_LINES"

export interface CanvasState {
    isStarted: boolean;
    isEnded: boolean;
    isPaused: boolean,
    strokeWeight: number;
    lines: LineProps[];
}

interface UpdateCanvas {
    type: string
    payload: any
}

export type CanvasActionTypes = UpdateCanvas 