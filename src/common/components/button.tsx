import React, { FC } from 'react'

type btnStyleProps = {
    bgColor: string,
    hoverColor?: string,
    textColor?: 'black' | 'white'
}

type ButtonProps = {
    type?: 'submit' | 'reset' | 'button',
    onclick: () => void,
    style: btnStyleProps,
    buttonText: string
}

const getTextColor = (val : string | undefined) => val === 'black' || val === undefined ? 'text-black' : 'text-white';

const bgHoverColorMap = new Map<string, string>([
    ['success', 'bg-green-600'],
    ['danger', 'bg-red-600'],
    ['alert', 'bg-yellow-400'],
    ['info', 'bg-sky-600']
])

const bgColorMap = new Map<string, string>([
    ['success', 'bg-green-400'],
    ['danger', 'bg-red-500'],
    ['alert', 'bg-yellow-300'],
    ['info', 'bg-sky-500']
])

const btnStyle = (input: btnStyleProps) => {
    let bg = bgColorMap.get(input.bgColor);
    let hover = input.hoverColor != undefined ? bgHoverColorMap.get(input.hoverColor) : '';
    let btnTxtCol = getTextColor(input.textColor)
    return [bg, hover, btnTxtCol ].join(' ') + ' ';
}

const Button: FC<ButtonProps> = (props) => {
    return (
        <>
            <button
            type={props.type}
            onClick={props.onclick}
            className={btnStyle(props.style) + ''}>
                {props.buttonText}
            </button>
        </>
    )
}

export default Button;