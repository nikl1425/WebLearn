import { Html } from 'next/document';
import { userAgent } from 'next/server'
import { type } from 'os';
import React, { useRef, useState, useEffect } from 'react'


const UseRipple = () => {
    const ref = useRef<HTMLButtonElement>(null)
    const [coords, setCoords] = useState({x: -1, y: -1});
    const [isRippling, setIsRippling] = useState(false);

    useEffect(() => {
        ref.current?.addEventListener('click', (e) => {
            const rect = ref.current?.getBoundingClientRect();
            if(rect != null){
                setCoords({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                })
            }
        })
    }, [])

    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
        setIsRippling(true);
        setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords]);

    React.useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
      }, [isRippling]);

    ref.current?.classList.add('ripple-button');
   
    if(isRippling){
        let child2 = document.createElement('span');
        child2.className = 'ripple';
        ref.current?.appendChild(child2)
    }

    return ref;
}

export default UseRipple;