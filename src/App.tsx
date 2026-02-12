
import './App.css'
import Photo1 from "./../public/IMG_2686.jpg"
import Photo2 from "./../public/IMG_6981.jpg"
import Photo3 from "./../public/IMG_8607.jpg"
import Photo4 from "./../public/IMG_9777.jpg"

import Photo5 from "./../public/photo_2026-02-03_16-58-38.jpg"
import Photo6 from "./../public/photo_2026-02-03_16-58-55.jpg"
import Photo7 from "./../public/photo_2026-02-03_16-59-00.jpg"
import Photo8 from "./../public/photo_2026-02-03_16-59-06.jpg"
import Photo9 from "./../public/photo_2026-02-03_16-59-14.jpg"
import { DecorationHearts } from './components/decoration-hearts'
import { Carousel } from './components/carousel'
import { Container } from './components/container'





function App() {
  const photos1 = [
    Photo1, Photo2, Photo3, Photo4
  ]
  const photos2 = [
    Photo5, Photo6, Photo7, Photo8, Photo9
  ]

  return (
    <div className='bg-[#ffeef2] max-w-[100vw] max-h-[100vh] flex items-center justify-center  min-h-[100vh] relative overflow-hidden'>
      <Carousel photos={photos1} className='top-10' />
      <Container />
      <Carousel photos={photos2} className='bottom-10'/>
      <DecorationHearts />
    </div>
  )
}

export default App
