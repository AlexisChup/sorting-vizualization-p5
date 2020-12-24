export interface LineProps {
    color: {
        r: number;
        g: number;
        b: number;
    }
    value: number;
}
export interface CanvasProps {
    canvasHeight: number;
    canvasWidth: number;
    ref?: any;
}