import React, { FC } from "react";


type JumboButtonProps = {
    text: string,
    color?: string
    func: () => void
}

type JumboStyle = {
    centerRelativeTo: 'screen' | 'wrapper'
}

type JumboTronProps = {
    title: string
    subTitle?: string 
    buttons?: JumboButtonProps[]
    bannerIcon?: string
    bannerImg?: string
    style: JumboStyle
}

const JumboTron: FC<JumboTronProps> = ({title, subTitle, buttons, bannerIcon, bannerImg, style}) => {
    return (
        <div className="w-full h-full bg-white shadow-2xl rounded-lg mx-auto text-center flex">
            <div>

            </div>
            <div className=" mx-auto my-auto ">
                <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
                    {title}
                    Start studying with us
                </h2>
                <h4>
                    {subTitle}
                </h4>
                <div className="mt-4 mb-4 flex justify-center">
                    <div className="inline-flex rounded-md bg-blue-500 shadow">
                        <a href="#" className="text-gray-200 font-bold py-2 px-6">
                            Start
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JumboTron;
