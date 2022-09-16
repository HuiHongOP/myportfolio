import {useEffect, useRef} from 'react';

export const Cursor = () =>{
    
    const cursorRefer = useRef(null);
    useEffect(()=>{
        document.addEventListener('mousemove',(e) =>{
            const {clientX, clientY} = e;
            const mouseX = clientX - cursorRefer.current.clientWidth/2;
            const mouseY = clientY - cursorRefer.current.clientHeight/2;
            cursorRefer.current.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
        })
    })

    return(
        <div className = "cursor" ref={cursorRefer}></div>
    )
}