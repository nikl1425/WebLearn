import React, { FC } from "react";
import { JsxElement } from "typescript";

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
                    <button className="hover:bg-blue-700 inline-flex rounded-md bg-blue-500 shadow">
                        <a href="#" className="text-gray-200 font-bold py-2 px-6">
                            Explore
                        </a>
                    </button>
                    <button className="hover:bg-yellow-600 inline-flex rounded-md bg-yellow-400 hover:shadow-lg transition duration-150 ease-in-out focus:bg-white-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white-800 active:shadow-lg">
                        <a href="#" className="text-gray-200 font-bold py-2 px-6">
                            Explore
                        </a>
                    </button>
                    

                </div>
            </div>
        </div>
    )
}

export default JumboTron;
