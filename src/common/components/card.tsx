import React, { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type CardProps = {
    title: string,
    imgPath?: string,
    description: string,
}

enum CardPosterColor {

}

const CardPoster: FC<{
    src: string,
    alt: string,
    sizeObj: {width: number, height: number}
}> = ({ src, alt, sizeObj }) => {

    return (
        <>
            <div className='relative w-full h-fit'>
                <Image layout="responsive" width={sizeObj.width / 1.2} height={sizeObj.height % 3} alt={alt} src={'/courses/js.png'} />
            </div>
            
        </>
    )
}

/**
<div className="w-96 h-72 rounded overflow-hidden border border-black">
                <div className='relative h-1/3 w-full'>
                    <CardPoster src={'/courses/JavaScript.png'} alt={title}/>
                </div>
            
                <div className="px-6 py-4">
                    
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
 */

const Card: FC<CardProps> = ({ title, imgPath, description }) => {
    const [posterSize, SetPosterSize] = useState({width: 0, height: 0})
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let posterHeight = ref.current?.clientHeight;
        let posterWidth = ref.current?.clientWidth;
        
        if(posterWidth && posterHeight){
            let sizeObj = {width: posterWidth, height: posterHeight};
            SetPosterSize(sizeObj);
        }
    }, [])


    return (
        <>
            <div ref={ref} className="w-72 rounded overflow-hidden shadow-lg">
                <CardPoster sizeObj={posterSize} src={'/courses/JavaScript.png'} alt={title}/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-500 text-sm font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-2 pb-2 text-sm">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>
        </>
    )
}

export default Card;