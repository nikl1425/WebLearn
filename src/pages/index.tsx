
import { Inter } from 'next/font/google'
import JumboTron from '../common/components/jumbotron'
const inter = Inter({ subsets: ['latin'] })
import { FaBookReader } from "react-icons/fa";
import Button from '../common/components/button';


export default function Home() {



  return (
    <>
      <div className=' h-full'>
        <JumboTron 
        title='Start studying with us' 
        style={{centerRelativeTo: 'screen'}}
        buttons={
          [
            <Button onclick={() => console.log('hi')} style={{bgColor: 'success', hoverColor: 'success'}} buttonText='Explore' />,
            <Button onclick={() => console.log('hi')} style={{bgColor: 'alert', hoverColor: 'alert'}} buttonText='Intro Video' />
          ]
        }
        bannerIcon={<FaBookReader size={50} className=" text-green-400"/>}
        />
      </div>
    </>
  )
}
