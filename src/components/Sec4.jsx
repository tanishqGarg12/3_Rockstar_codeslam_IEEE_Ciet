import React from 'react'
import main_img from '../assets/sec4-img.png'
import first from '../assets/yoga-1.jpg'
import second from '../assets/yoga-2.jpg'
import third from '../assets/yoga-3.jpg'
import play from '../assets/play.png'

const Sec4 = () => {
    return (
        <div className='relative w-screen flex h-[1050px] justify-center gap-24 items-center'>
            <img src={main_img} alt="" className='absolute z-[-1] h-full w-full'/>
            <div className=' w-[210px] gap-3 flex flex-col justify-center text-center mt-[4rem]'>
                <h1 className='text-lg text-[#49c9d4]'>FIRST CLASS <br /> FREE</h1>
                <img src={first} alt="" className='w-full'/>
                <p className='text-[0.7rem] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, obcaecati et minus iure placeat corporis eveniet facere impedit itaque. Officia officiis laboriosam eius accusamus molestias?</p>
                <div className='flex gap-2 w-full justify-center'>
                    <img src={play} alt="" className='w-[20px]'/>
                    <button className='w-[90px] rounded-sm text-white bg-[#49c9d4]'>Read More</button>
                </div>
            </div>
            <div className=' w-[210px] gap-3 flex flex-col justify-center text-center mb-12'>
                <h1 className='text-lg text-[#49c9d4]'>HARMONY <br /> YOUR BODY</h1>
                <img src={second} alt="" className='w-full'/>
                <p className='text-[0.7rem] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, obcaecati et minus iure placeat corporis eveniet facere impedit itaque. Officia officiis laboriosam eius accusamus molestias?</p>
                <div className='flex gap-2 w-full justify-center'>
                    <img src={play} alt="" className='w-[20px]'/>
                    <button className='w-[90px] rounded-sm text-white bg-[#49c9d4]'>Read More</button>
                </div>
            </div>
            <div className=' w-[210px] gap-3 flex flex-col justify-center text-center mb-[9rem]'>
                <h1 className='text-lg text-[#49c9d4]'>YOGA FOR <br /> BEGINNERS</h1> 
                <img src={third} alt="" className='w-full'/>
                <p className='text-[0.7rem] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, obcaecati et minus iure placeat corporis eveniet facere impedit itaque. Officia officiis laboriosam eius accusamus molestias?</p>
                <div className='flex gap-2 w-full justify-center'>
                    <img src={play} alt="" className='w-[20px]'/>
                    <button className='w-[90px] rounded-sm text-white bg-[#49c9d4]'>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Sec4
