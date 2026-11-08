import React, { useState } from 'react'
import { portfolio } from '../data';
import Button from '../Components/Button'
import { Check,X } from 'lucide-react';
function Portfolio() {
    const [filter, setFilter] = useState('All');


    const filteredItems = portfolio.filter((p) => {
        let cat = filter.toLowerCase() === p.category.toLowerCase() || filter === 'All'
        return cat
    })

    const category = ['All', 'E-Commerce', 'Web Development', 'UI UX Design', 'Mobile Apps']
    return (
        <div className='py-10'>
            <section className='w-[80%] mx-auto mt-20'>
                <div className="flex flex-col mt-10 items-center text-center">
                    <span className='border border-orange-700 bg-pink-100/50 px-4 py-1 rounded-2xl text-orange-500 font-mono uppercase font-semibold'>Our Creative Archive</span>
                    <h1 className='text-3xl md:text-7xl my-4 max-w-180  font-bold'>Crafting Digital <span className='text-orange-500'>Masterpiece</span></h1>
                    <p className='text-gray-500 max-w-180'>We provide complete, end-to-end design and software development capabilities. From custom visual design systems to secure multi-region databases, we write the code that fuels your conversion growth.</p>
                </div>
            </section>


            <section className='w-full py-10'>
                <div className="">
                    <div className="w-[90%] md:w-[50%] overflow-x-auto mx-auto flex flex-col md:items-center">
                        <ul className='flex space-x-5'>
                            {category.map((cat) => (
                                <li onClick={() => setFilter(cat)} className={`border border-gray-500 px-5 text-xs md:text-sm flex items-center justify-center py-1 cursor-pointer rounded-xl font-mono ${cat===filter ?'bg-orange-500 text-white border-none':'bg-white'}`}>{cat}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full bg-blue-100 py-10 mt-10">
                        <div className="w-[90%] md:w-[80%] mx-auto gap-10  grid grid-cols-1 md:grid-cols-2">
                            {filteredItems.map((item) => (
                                <div className="h-auto shadow-2xl bg-white overflow-hidden rounded-2xl ">
                                    <div className="bg-black overflow-hidden flex flex-col items-center text-white justify-center w-full h-100">
                                        <span className='border border-orange-500 px-2  rounded uppercase text-sm text-orange-500'>{item.category}</span>
                                        <h1 className='font-bold my-2 text-2xl'>{item.heading} </h1>
                                    </div>
                                    <p className='px-8 py-5 text-gray-500'>{item.title}</p>
                                    <div className="px-4 md:px-8 flex gap-5  py-5">
                                        {item.languages.map((arr) =>(
                                               <span className='text-gray-500 text-xs md:text-sm truncate rounded border border-gray-400 px-5 py-1'>{arr}</span>
                                        )
                                        )}
                                    </div>
                                    <div className="w-full mx-auto border-b border-gray-300"></div>
                                    <div className="flex px-4 md:px-8  justify-between py-10">
                                        <div className="">
                                            <span className='text-gray-600'>Metrics Achieved
                                            </span>
                                            <p className='text-green-500 font-semibold'>{item.time}</p>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className='text-gray-500'>Recognition Merit
                                            </span>
                                            <span>{item.awards}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <section className='py-10'>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 w-[80%] mx-auto">
                <div className="">
                    <span className='uppercase text-orange-400 font-mono font-semibold'>Our Refactoring Strategy</span>
                    <h1 className='text-4xl max-w-100 font-bold py-2'>Before and After Audits</h1>
                    <p className='py-5 text-gray-600 '>We replace heavy, bloated, nested-div systems with semantic, streamlined layouts. This reduces layout calculations, increases loading response times, and drives conversions.</p>
                    <Button style={'px-4 py-2 text-white bg-orange-500 rounded-xl font-semibold cursor-pointer'} label={'Request Custom Site Review'}/>
                </div>
                <div className="bg-pink-100/40 rounded-xl border border-orange-500 p-5">
                    <span className='bg-pink-200 px-4 py-1 rounded-2xl uppercase font-semibold text-red-800 text-sm'>Before: Bloated System</span>
                    <ul className='py-4 space-y-2'>
                        <li className='flex text-red-700 gap-4'><X className='w-5 h-5 mt-1'/><span>Heavy nesting divs making document tree parsing slow.</span></li>
                        <li className='flex text-red-700 gap-4'><X className='w-5 h-5 mt-1'/><span>4.2s Initial Page Loading speed. High customer friction.</span></li>
                        <li className='flex text-red-700 gap-4'><X className='w-5 h-5 mt-1'/><span>Poor layout contrast. High cart abandonment rates.</span></li>
                        <li className='flex text-red-700 gap-4'><X className='w-5 h-5 mt-1'/><span>Choppy, unoptimized CSS layout animations.</span></li>
                    </ul>
                </div>
                <div className="bg-green-100/40 p-5 border border-green-200 rounded-xl">
                 <span className='bg-green-200 px-4 py-1 rounded-2xl uppercase font-semibold text-green-800 text-sm'>After: Aura Architecture</span>
                 <ul className='py-4 space-y-2'>
                    <li className='flex text-green-700 gap-4'><Check className='w-5 h-5 mt-1'/><span>Valid HTML5 elements. Maximum search crawler indexing.</span></li>
                    <li className='flex text-green-700 gap-4'><Check className='w-5 h-5 mt-1'/><span>240ms Server responses. Blazing-fast page load speeds.</span></li>
                    <li className='flex text-green-700 gap-4'><Check className='w-5 h-5 mt-1'/><span>High-contrast text hierarchy. Smooth visual flows.</span></li>
                    <li className='flex text-green-700 gap-4'><Check className='w-5 h-5 mt-1'/><span>Fluid, high-performance interactive layout transitions.</span></li>
                 </ul>
                </div>
              </div>
            </section>

        </div>
    )
}

export default Portfolio