import React, { FC } from 'react'

type ButtonProps = {
    type: 'button',
    onclick: () => void
    bgColor: string,
    hoverColor?: string,
    textColor: 'black' | 'white'
    
}

const Button: FC = () => {
    return (
        <>
            <button>

            </button>
        </>
    )
}

export default Button;