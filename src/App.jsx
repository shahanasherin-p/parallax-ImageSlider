import { useLayoutEffect } from 'react'
import './App.css'
import bg from './assets/image1.avif'
import img2 from './assets/image2.avif'
import img3 from './assets/image3.avif'
import img4 from './assets/image4.avif'
import img5 from './assets/image5.avif'
import { gsap } from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import CardSlider from './CardSlider'
gsap.registerPlugin(ScrollTrigger)


function App() {

const bg1=useRef(null) 
const img_container=useRef(null) 
const img=useRef(null) 
const text1=useRef(null) 
const text2=useRef(null) 
const container=useRef(null)
useLayoutEffect(()=>{
  let ctx=gsap.context(()=>{
    ScrollTrigger.create({
      trigger:bg1.current,
      pin:bg1.current,
      pinSpacing:false,
      start:"top top",
      endTrigger:".last",
      end:"bottom bottom"
    })
    gsap.set(container.current,{marginTop:-(container.current.offsetHeight)})
    gsap.timeline({
      scrollTrigger:{
        trigger:img_container.current,
        pin:img_container.current,
        scrub:1,
        start:"0% 0%",
      }
    })
    .to(img.current,{transform: "translateZ(3000px)"},0)
    .to(text1.current,{y:-800},0.05,"<")
    .to(text2.current,{y:-800},0.08,"<")
    .fromTo(container.current,{yPercent:100,scaleY:2},{yPercent:0,scaleY:1})

  })

  return ()=>ctx.revert()
},[])



  return (
    <>
      <nav class="bg-black p-4 flex justify-between items-center"> 
        <a href='' class="text-white text-2xl tracking-widest hover:text-red-400 "> Ħ Aerial Photography Ħ </a>
        <div class="flex space-x-4"> 
        <a href="#home" class="text-white hover:bg-white hover:text-black px-3 py-2 rounded">Home</a> 
        <a href="#more-photos" class="text-white hover:bg-white hover:text-black px-3 py-2 rounded">More Photos</a> 
        </div> 
      </nav>
      <div className='relative'> 
        <div ref={bg1} className='bg bg-[#141414] absolute h-screen w-screen z-[-1]'></div>
        <section>
        <div ref={img_container} className='img-container perspective flex items-center justify-center h-screen w-screen'>
        <img ref={img} className='image' src={bg} alt="" width={'500px'} />
        <div className=' text-white absolute flex flex-col items-center justify-center  '>
          <h1 ref={text1} className='text-[120px] text-stroke' style={{letterSpacing:'10px'}}>
            <span>
            Aerial
            </span> Lens
            </h1>
            <p ref={text2} className='opacity-50 w-48 text-[13px] text-center'>
              {""}
              A Showcase of the world's best aerial photograhy</p>
           </div>
           </div>
           <div ref={container} className="container py-12 flex flex-wrap items-center justify-around">
            <div className="col-1 flex flex-col gap-16 translate-y-[30%] pb-8">
              <img className='w-[450px] h-[350px] ' src={img2} alt="" />
              <img  className='w-[400px] h-[400px]' src={img3} alt="" />
            </div>
            <div className="col-2 flex flex-col gap-16 ">
            <img src={img4} alt=""  className='w-[600px] h-[400px]' />
            <img src={img5} alt=""  className='w-[400px] h-[400px] last'/>
            </div>
           </div>
        </section>
      </div>
      <CardSlider/>
      <footer class="bg-black p-4"> 
        <div class="container mx-auto flex justify-between items-center">  
          <div class="text-white text-2xl tracking-widest hover:text-red-400"> Ħ Aerial Photography  Ħ </div> 
           <div class="flex flex-col "> 
          <a href="#home" class="text-white hover:text-gray-400">Home</a> 
          <a href="#about" class="text-white hover:text-gray-400">About</a>
          <a href="#contact" class="text-white hover:text-gray-400">Contact</a> </div>
       </div>
       <div className="text-white text-center">&copy; 2024 Ħ Aerial Photography  Ħ. All rights reserved.</div> 
      </footer>   
   
    </>
  )
}

export default App
