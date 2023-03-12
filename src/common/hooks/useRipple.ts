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

    ref.current?.classList.add('ripple-button');
   
    if(isRippling){
        const child = document.createElement('span');
        child.className = 'ripple';
        ref.current?.appendChild(child)
    }

    if(!isRippling){
        const ripples = ref.current?.getElementsByClassName('ripple');

        if(ripples != undefined){
            while(ripples[0]){
                ripples[0].parentNode?.removeChild(ripples[0])
            }
        }
    }

    return ref;
}

export default UseRipple;