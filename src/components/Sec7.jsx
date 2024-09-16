import React from 'react'
import bg from '../assets/meth.png'
const Sec7 = () => {
    return (
        <div className='w-screen h-[300px] relative flex justify-center items-center flex-col gap-5'>
            <img src={bg} alt="" className='absolute z-[-1]'/>
            <h1 className="flex text-[3rem] justify-center items-center text-[#49c9d4] underline">OUR METHODOLOGY</h1>
            <div className='flex gap-10 justify-center text-white'>
                <p className=" w-[40%] ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, unde? Ullam tempora magnam aliquid. Ratione velit alias quos incidunt illum eveniet assumenda omnis quis? Praesentium hic voluptatibus, harum, nobis eum fuga veniam quis veritatis quae sapiente earum mollitia et alias esse. Esse sunt laborum repudiandae voluptatibus sequi voluptatum ea. Praesentium possimus voluptas temporibus a voluptate odit sed eaque quasi voluptatibus et quisquam ipsa facere eveniet, at, dignissimos facilis aliquam error doloribus? Possimus fugit commodi aut voluptas ex, architecto veniam esse.</p>
                <p className=" w-[40%] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id error impedit saepe esse voluptates totam sint deleniti hic inventore commodi a quibusdam provident ipsum laboriosam cum aut sit eligendi animi, dolorem odio repellendus eaque? Incidunt delectus architecto laborum odit assumenda veniam fuga ullam eveniet cum accusantium commodi, dolores aspernatur, ipsa, iusto rerum laudantium doloremque aut voluptates ab illum dolorum doloribus. Aliquam, dolor, deleniti doloremque quos corrupti error ducimus, illum reprehenderit atque minima repellat! Voluptatibus illo porro esse quod! Animi, repellat.</p>
            </div>
            <button className='w-[100px] py-1 text-center h-[80px] rounded-sm text-black bg-white'>Read More</button>
        </div>
    )
}

export default Sec7
