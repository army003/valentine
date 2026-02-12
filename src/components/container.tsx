
import { useEffect, useRef, useState } from "react"
import Cat from "./../../public/cat_white.png"
import Arrow from "./../../public/free-icon-right-drawn-arrow-64818.png"
export const Container = () =>{
    const [isArrowVisible, setIsArrowVisible] = useState(true);
    const ref = useRef(null)
    const pointerRef = useRef<boolean>(false);

    const onPointerDown = () =>{
        setIsArrowVisible(false)
    }
    useEffect(()=>{
    const el = ref.current;
    console.log('el', el);
    
       if(el){
         el.addEventListener("pointerenter", onPointerDown);
       }
    },[])

    console.log("pointerRef", pointerRef)
    return(
        <div ref={ref} className='group hover:bg-[#c9184a] transition-all duration-400 bg-white p-[30px] rounded-[30px] absolute flex md:flex-row flex-col items-center  w-[35vw] h-[300px] relative z-30'>
            {isArrowVisible && <img src={Arrow} alt="" className="absolute -top-10 -right-0 w-[100px] rotate-120" /> }
            <p className=' group-hover:text-white transition-all md:text-[40px] ml-[45px]'>Will you <br />be my <br/><span className='font-bold text-white'>valentine? <br/>
            <span className="text-[20px] text-white font-normal">(resond in dm)</span>
            </span></p>
            <img src={Cat} width={200} className='absolute bottom-0 right-8'/>
          </div>
    )
}