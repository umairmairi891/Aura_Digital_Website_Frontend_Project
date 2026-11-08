import React, { useState } from 'react'
import { team } from '../data'
import { ArrowRight, Link2, MessageCircle, ShoppingCartPlusIcon } from 'lucide-react'
function Team() {
    const [filter, setFilter]=useState('All')
    const teamcat=['All','LeaderShip','Design Team','Development Team','Marketing Team']

    const filteredTeam=team.filter((t)=>{
       let teamCategory= filter.toLowerCase()===t.category.toLowerCase() || filter ==='All'
       return teamCategory
        })
    return (
        <div className='py-10'>
            <section className='w-[80%] mx-auto mt-30'>
                <div className="flex flex-col mt-10 items-center text-center">
                    <span className=' bg-gray-100 px-4 py-1 rounded-2xl text-black font-mono uppercase font-semibold'>Aura Roster
                    </span>
                    <h1 className='text-3xl md:text-7xl my-4 max-w-180  font-bold'>Meet the <span className='text-orange-500'>Visionaries</span>
                    </h1>
                    <p className='text-gray-500 max-w-180'>We are a unified squad of 14 designers, semantic programmers, and digital growth strategists who reject visual compromises and value sub-second page performance.</p>
                </div>
            </section>

            <section className='w-full py-10'>
                <div className="">
                    <div className="w-[90%] md:w-[50%] overflow-x-auto mx-auto flex flex-col md:items-center">
                        <ul className='flex space-x-5'>
                            {teamcat.map((cat) => (
                                <li onClick={() => setFilter(cat)} className={`border border-gray-500 px-5 py-1 text-xs md:text-sm flex items-center justify-center cursor-pointer rounded-xl font-mono ${cat===filter ?'bg-orange-500 text-white border-none':'bg-white'}`}>{cat}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full bg-blue-100/40 py-10 mt-10">
                         <div className="w-[80%] mx-auto gap-10 grid grid-cols-1 md:grid-cols-4">
                            {filteredTeam.map((t)=>(
                                <div className="bg-white hover:shadow-2xl duration-200 rounded-xl border group border-gray-300  p-5">
                            <div className="bg-black group rounded-2xl flex items-center flex-col justify-center w-full h-60 relative">
                                <div className="absolute opacity-0 group-hover:opacity-100 duration-200 bg-black/50 rounded-2xl w-full h-full flex gap-5 items-center justify-center ">
                                    <Link2 className='bg-white w-10 h-10 rounded-2xl p-2'/>
                                    <ShoppingCartPlusIcon className='bg-white w-10 h-10 rounded-2xl p-2'/>
                                </div>
                                <h1 className='text-white font-bold'>{t.heading}</h1>
                                <p className='text-orange-600'>{t.category}</p>
                            </div>
                            <h1 className='mt-3 font-semibold group-hover:text-orange-500  text-xl'>{t.name}</h1>
                            <span className='text-sm  text-orange-500'>{t.position}</span>
                            <p className='text-sm  text-gray-500'>{t.description}</p>
                        </div>
                            ))}
                         </div>
                    </div>
                </div>
            </section>

            <section className='w-full py-10'>
                <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-15">
                    <div className="">
                        <span className='uppercase text-orange-500 font-mono font-semibold'>Careers</span>
                        <h1 className='text-2xl md:text-4xl font-bold'>Join Our Engineering & Design Tribe</h1>
                        <p className='py-4 text-gray-500'>We are always looking for meticulous, craft-oriented programmers who value clean markup, semantic structure, and visual accuracy.</p>
                        <ul className='space-y-5 '>
                            <li className='bg-blue-50/80 rounded-2xl items-center flex justify-between px-5 py-3 group cursor-pointer  '>
                                <div className="">
                                    <span className='font-semibold group-hover:text-orange-500 text-sm md:text-lg py-2'>Senior UX Designer (Figma systems)</span>
                                    <p className='text-sm  text-gray-500'>San Francisco, CA / Remote</p>
                                </div>
                                <div className="flex items-center text-orange-500 font-semibold gap-1 font-mono">
                                    <span>Apply</span>
                                    <ArrowRight className='w-3 h-3'/>
                                </div>
                            </li>
                            <li className='bg-blue-50/80 rounded-2xl items-center flex justify-between px-5 py-3 group cursor-pointer '>
                                <div className="">
                                    <span className='font-semibold group-hover:text-orange-500  text-sm md:text-lg'>Semantic Frontend Engineer (Next.js)</span>
                                    <p className='text-sm text-gray-500'>San Francisco, CA / Hybrid</p>
                                </div>
                                <div className="flex items-center text-orange-500 font-semibold gap-1 font-mono">
                                    <span>Apply</span>
                                    <ArrowRight className='w-3 h-3'/>
                                </div>
                            </li>
                            <li className='bg-blue-50/80 rounded-2xl items-center flex justify-between px-5 py-3 group cursor-pointer '>
                                <div className="">
                                    <span className='font-semibold group-hover:text-orange-500 text-sm md:text-lg'>Client Growth Strategist (Enterprise)</span>
                                    <p className='text-sm text-gray-500'>Remote / Global</p>
                                </div>
                                <div className="flex items-center text-orange-500 font-semibold gap-1 font-mono">
                                    <span>Apply</span>
                                    <ArrowRight className='w-3 h-3'/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                    <div className="bg-black p-5 md:p-10 rounded-2xl">
                        <MessageCircle className='text-orange-500 font-bold w-10 h-10'/>
                        <h1 className='py-3 mt-4 text-2xl font-semibold text-white'>"We value deep work over meeting chatter."</h1>
                         <p className='text-gray-500 text-sm'>We operate under asynchronous workflow rules. We document our sprints publicly, run code audits regularly, and protect quiet thinking time.</p>
                         <div className="text-gray-500 text-xs md:text-sm font-mono mt-5 flex gap-5 md:gap-10">
                            <span>• Async First</span>
                            <span>• Peer Reviewed Code</span>
                            <span>• Weekly Workshops</span>
                         </div>
                    </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Team