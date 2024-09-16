import React from 'react'
import Navbar from './Navbar'
import mainimg from '../assets/main-img.png'
import logo from '../assets/logo.png'

const Sec1 = () => {
    return (
        <div className=' relative h-[660px] w-screen'>
            <img src={mainimg} alt="" className=" absolute z-[-1] h-full w-full"/>
            <Navbar/>
            <div className='w-full flex flex-col justify-center items-center h-[80%] gap-1'>
                <img src={logo} alt="" className='w-[220px]' />
                <h1 className='text-[6rem] text-white underline'><span className='font-bold'>YOGA</span>CLASSES</h1>
                <div className=' w-[45%] text-center text-[#49c9d4] flex flex-col justify-center items-center gap-3'>
                    <h2 className='text-[1.5rem]'>BODY HARMONY</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    <button className='w-[100px] h-[30px] rounded-sm bg-white'>More</button>
                </div>
            </div>

        </div>
    )
}

export default Sec1
