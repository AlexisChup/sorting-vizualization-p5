import React, { useEffect, useRef, useState } from 'react'
import { BubbleSort } from '../BubbleSort/BubbleSort'
import {FooterContainerSketch} from './FooterContainerSketch'



export const ContainerSketch = () => {
    console.log('ContainerSketch')
    const parentRef   = useRef<HTMLDivElement>(null);
    const [canvasWidth, setCanvasWidth] = useState(0)

    useEffect ( () => {
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas()   
        
        // destructor
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        }
    }, []);

    const resizeCanvas = () => {
        if(parentRef.current){
            setCanvasWidth(parentRef.current.offsetWidth * 0.9)  
        } 
    }

    return (
        <div className="container text-center shadow-lg my-4">
            <div className="row">
                <div className="col-lg-12 py-3 font-weight-bold">
                    Bubble Sort
                </div>
            </div>
            <div className="row">
                <div 
                    className="col-lg-12 d-flex flex-column justify-content-center bg-secondary py-3"
                    ref = { parentRef }
                >
                    <BubbleSort
                        canvasWidth={ canvasWidth }
                        canvasHeight={300}
                    />
                </div>
            </div>
            <div className="row py-2 justify-content-center">
                <FooterContainerSketch />
            </div>
        </div>
    )
}
