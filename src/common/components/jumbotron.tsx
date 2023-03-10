import React, { FC, ReactNode } from "react";
import { JsxElement } from "typescript";


type JumboStyle = {
    centerRelativeTo: 'screen' | 'wrapper'
}

type JumboTronProps = {
    title: string
    subTitle?: string
    buttons?: ReactNode[]
    bannerIcon?: JSX.Element // TODO Skal tilføjes en eller til next js image type
    style: JumboStyle
}

const JumboTron: FC<JumboTronProps> = ({ title, subTitle, buttons, bannerIcon, style }) => {
    return (
        <div className="w-full h-full bg-white shadow-2xl rounded-lg mx-auto text-center flex">

            <div className=" mx-auto my-auto ">
                <div className=" flex w-full justify-center">
                    <div className=" my-3">
                        {bannerIcon}
                    </div>
                </div>
                <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
                    {title}
                </h2>
                <h4>
                    {subTitle}
                </h4>
                <div className="mt-4 mb-4 flex justify-center space-x-3">
                    {buttons?.map((item, i)  => <div key={i}>{item}</div>)}
                </div>
            </div>
        </div>
    )
}

export default JumboTron;
