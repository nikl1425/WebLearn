import React, { FC } from 'react';
import UseRipple from '../hooks/useRipple';

type btnStyleProps = {
    bgColor: string,
    hoverColor?: string,
    textColor?: 'black' | 'white',
    size?: 'sm' | 'md',
}

export type ButtonProps = {
    type?: 'submit' | 'reset' | 'button',
    onclick: () => void,
    style: btnStyleProps,
    buttonText: string
}

const getTextColor = (val : string | undefined) => val === 'black' || val === undefined ? 'text-black' : 'text-white';

const bgHoverColorMap = new Map<string, string>([
    ['success', 'hover:bg-green-600'],
    ['danger', 'hover:bg-red-600'],
    ['alert', 'hover:bg-yellow-400'],
    ['info', 'hover:bg-sky-600']
])

const bgColorMap = new Map<string, string>([
    ['success', 'bg-green-400'],
    ['danger', 'bg-red-500'],
    ['alert', 'bg-yellow-300'],
    ['info', 'bg-sky-500']
])

const btnSize = new Map<string, string>([
    ['sm', 'text-sm px-1 py-0.5'],
    ['md', 'text-base py-2 px-4']
])

const btnStyle = (input: btnStyleProps) => {
    let bg = bgColorMap.get(input.bgColor);
    let hover = input.hoverColor != undefined ? bgHoverColorMap.get(input.hoverColor) : '';
    let btnTxtCol = getTextColor(input.textColor);
    let btnTextSize = input.size != undefined ? btnSize.get(input.size) : btnSize.get('md');
    return [bg, hover, btnTxtCol, btnTextSize ].join(' ') + ' ';
}


const Button: FC<ButtonProps> = (props) => {

    const ripple = UseRipple();

    return (
        <>
            <button
            type={props.type}
            ref={ripple}
            onClick={props.onclick}
            className={`${btnStyle(props.style)}  font-semibold rounded border-black border-2 relative overflow-hidden ripple`}>
                {props.buttonText}
            </button>
        </>
    )
}

export default Button;