import React, { useEffect, useRef, useState } from 'react'
import { BubbleSort } from '../BubbleSort/BubbleSort'

interface Props {
    
}
interface State {
    
}

export const ContainerSketch = (props: Props) => {
    const parentRef   = useRef<HTMLDivElement>(null);
    const childrenRef = useRef<HTMLDivElement>(null);

    const [canvasWidth, setCanvasWidh] = useState(0)

    let parentWidth = 300;

    useEffect ( () => {
        if(parentRef.current){   
            // let parentHeight = parentRef.current.offsetHeight;
            parentWidth  = parentRef.current.offsetWidth;
            // console.log("parent width : ", parentWidth)

            setCanvasWidh(parentWidth * 0.9)
        }    
        // if(childrenRef.current){
            
        //     let childrenHeight = childrenRef.current.offsetHeight;
        //     let childrenWidth  = childrenRef.current.offsetWidth;
            
        // }
        
    }, [parentRef, childrenRef]);


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
                    {parentRef ? 
                    <BubbleSort
                        ref = { childrenRef }
                        canvasWidth={ canvasWidth }
                        canvasHeight={300}
                    />
                    : null}
                </div>
            </div>
        </div>
    )
}
