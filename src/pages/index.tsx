
import { Inter } from 'next/font/google'
import JumboTron from '../common/components/jumbotron'
const inter = Inter({ subsets: ['latin'] })
import { FaBookReader } from "react-icons/fa";
import Button from '../common/components/button';
import { Dispatch, FC, useState } from 'react';
import VideoPlayer from '../common/components/VideoPlayer';


const IntroVodModal: FC<{ show: boolean, onClose: Dispatch<boolean> }> = ({ show, onClose }) => {
  const closeModal = () => { return onClose(false) };
  return (
    <>
      {show &&
        <div id="defaultModal" aria-hidden="true" className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:inset-x-24 md:inset-y-20 lg:inset-x-1/3 lg:inset-y-20">
          <div className="relative w-auto h-full max-w-2xl md:h-auto">
            <div className="relative bg-white rounded-lg shadow-2xl dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Introduction Video
                </h3>
                <button onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <VideoPlayer source='youtube'/>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default function Home() {
  const [introState, setIntroState] = useState(false);
  console.log(introState)

  return (
    <>
      <div className=' h-full'>
        <div className={introState ? 'backdrop' : 'h-full'}>
          <JumboTron
            title='Start studying with us'
            style={{ centerRelativeTo: 'screen' }}
            buttons={
              [
                <Button onclick={() => console.log('hi')} style={{ bgColor: 'success', hoverColor: 'success' }} buttonText='Explore' />,
                <Button onclick={() => setIntroState(true)} style={{ bgColor: 'alert', hoverColor: 'alert' }} buttonText='Intro Video' />
              ]
            }
            bannerIcon={<FaBookReader size={50} className=" text-green-400" />}
          />
        </div>


        <IntroVodModal show={introState} onClose={setIntroState} />
      </div>
    </>
  )
}
