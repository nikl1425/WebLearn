import React, { FC } from "react";

type JumboTronProps = {

}

const JumboTron : FC<JumboTronProps>= () => {
    return (
        <div className="max-w-screen-lg bg-white shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
        <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
          Start studying with us
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md bg-blue-500 shadow">
            <a href="#" className="text-gray-200 font-bold py-2 px-6">
              Start
            </a>
          </div>
        </div>
      </div>
    )
}

export default JumboTron;
