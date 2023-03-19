import React, { FC } from 'react';
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
    alt: string
}> = ({ src, alt }) => {
    return (
        <>
            <Image layout='fill'  objectFit='scale-down' alt={alt} src={'/courses/js.png'}/>
        </>
    )
}

const Card: FC<CardProps> = ({ title, imgPath, description }) => {
    return (
        <>
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
        </>
    )
}

export default Card;