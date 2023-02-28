
import { Inter } from 'next/font/google'
import JumboTron from '../common/components/jumbotron'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className=' h-full'>
        <JumboTron />
      </div>
    </>
  )
}
