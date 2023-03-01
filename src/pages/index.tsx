
import { Inter } from 'next/font/google'
import JumboTron from '../common/components/jumbotron'
const inter = Inter({ subsets: ['latin'] })
import { FaBookReader } from "react-icons/fa";

export default function Home() {



  return (
    <>
      <div className=' h-full'>
        <JumboTron 
        title='Start studying with us' 
        style={{centerRelativeTo: 'screen'}}
        buttons={
          [
            { text: 'Explore', func: () => {}, color: 'green'},
            { text: 'Intro Video', func: () => {}, color: 'yellow'}
          ]
        }
        bannerIcon={<FaBookReader size={50} className=" text-green-400"/>}
        />
      </div>
    </>
  )
}
