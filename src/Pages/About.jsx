import { Calendar, Heart, Lightbulb, ShieldCheck } from 'lucide-react'
import React from 'react'
import Button from '../Components/Button'

function About() {
  return (
    <div className='py-20 '>
       <section className='mt-10 w-[80%] mx-auto'>
          <div className="py-10">
            <div className="">
                <span className='px-2 py-1 shadow-2xl shadow-red-600  rounded-xl  uppercase font-mono bg-blue-100/60'>Our Strategic Identity</span>
                <h1 className='my-5 text-3xl md:text-6xl font-bold max-w-160'>Built on Aesthetic Purity & <span className='text-orange-500'>Logical</span> Code.</h1>
                <p className='text-gray-600 max-w-160'>We started Aura with a simple yet radical thesis: exceptional design should never be held back by low-quality development, and fast, semantic coding should never compromise on visual luxury.</p>
            </div>
          </div>
       </section>

       <section className='w-full bg-blue-50/40 py-20 my-10'>
           <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-15 ">
            <div className="">
                <span className='font-bold text-2xl py-5'>Why We Started</span>
                <p className='text-gray-600 my-5 text-sm'>Most agencies suffer from a structural disconnect. Designers build high-fidelity interactive compositions that look magnificent in design software. However, once passed to engineers, those compositions are compromised. Layout grids collapse, animations become choppy, and the performance overhead spikes.</p>
                <p className='text-gray-600 my-5 text-sm'>Aura structures our product team around visual and logical systems simultaneously. Our designers write clean layout classes, and our engineers understand typography rhythm, line-height proportions, and micro-interaction curves. The result is a seamless digital output.</p>
            </div>
            <div className="flex flex-col gap-5">
                <h1 className='text-2xl font-bold'>Our Symmetrical Vision</h1>
                <div className="flex bg-white  rounded-xl p-4 gap-5">
                        <ShieldCheck className='w-15 h-10 rounded p-2 text-orange-500 bg-pink-200/40'/>
                        <div className="">
                            <h1 className='font-[Poppins]  font-semibold'>Empower Global Innovators</h1>
                            <p className='text-xs  text-gray-600'>We equip forward-looking brands with visual and performance architectures that command absolute respect and convert visitors.</p>
                        </div>
                    
                </div>
                <div className="flex bg-white  rounded-xl p-4 gap-5">
                     <Lightbulb className='w-15 h-10 rounded p-2 text-orange-500 bg-pink-200/40'/>
                        <div className="">
                            <h1 className='font-[Poppins]  font-semibold'>Champion Semantic Code</h1>
                            <p className='text-xs  text-gray-600'>We construct valid HTML5 landmarks and layouts, ensuring maximum indexing access, crawl ratios, and screen-reader accessibility.</p>
                        </div>

                </div>
                <div className="flex bg-white  rounded-xl p-4 gap-5">
                     <Heart className='w-15 h-10 rounded p-2 text-orange-500 bg-pink-200/40'/>
                        <div className="">
                            <h1 className='font-[Poppins]  font-semibold'>Nurture Design Craftsmanship</h1>
                            <p className='text-xs  text-gray-600'>We run strategic laboratories teaching the golden ratio rules, tracking principles, and layout rhythms to students globally.</p>
                        </div>

                </div>
            </div>
           </div>
       </section>

       <section className='py-10 w-[80%] mx-auto'>
          <div className="mt-10">
            <div className="text-center">
                <span className='uppercase font-mono font-semibold text-orange-500'>Our Progress</span>
                <h1 className='font-bold text-2xl md:text-3xl'>A History of Innovation</h1>
                <p className='text-gray-500 py-4'>Tracing our key operational shifts, major client launches, and technical milestones.</p>
            </div>


            <div className=" md:justify-center w-[90%]  mx-auto   h-auto md:h-240 flex flex-col md:flex-row  gap-5 items-center md:items-start">
                <div className="flex flex-col  gap-10 md:gap-1 h-auto   md:h-150 md:justify-between  items-center md:items-end">
                  <div className="bg-gray-300/30 w-90 md:w-100 p-5 rounded-xl">
                    <div className="flex items-center font-semibold my-2 text-sm gap-4 text-orange-500">
                    <Calendar className='w-5 h-5'/>
                    <span>2020</span>
                    </div>
                     <h1 className='font-bold text-xl'>Engineering Integration</h1>
                     <span className='text-sm my-3 h-20'>Ex-Google engineers join as partners. We pioneer our 'System Sync' workflow where engineers program designs directly in utility layout code.</span>
                  </div>
                  <div className="bg-gray-300/30 w-90 md:w-100 p-5 rounded-xl">
                    <div className="flex items-center font-semibold my-2 text-sm gap-4 text-orange-500">
                        <Calendar className='w-5 h-5'/>
                        <span>2025</span>
                    </div>
                    <h1 className='font-bold text-xl' >The Design Academy Launch</h1>
                    <span  className='text-sm my-3'>We launch the Aura Interactive Specification platform, helping thousands of frontend students inspect and learn raw HTML5 and CSS3 craftsmanship.</span>
                  </div>
                </div>
                <div className="hidden md:block">
                    <div className="w-[1px] h-200 flex flex-col items-center justify-around  rounded-xl bg-orange-300">
                     <div className="w-5 h-5 border-4 border-pink-100 bg-orange-500 rounded-2xl"></div>
                     <div className="w-5 h-5 border-4 border-pink-100  bg-orange-500 rounded-2xl"></div>
                     <div className="w-5 h-5 border-4 border-pink-100  bg-orange-500 rounded-2xl"></div>
                     <div className="w-5 h-5 border-4 border-pink-100 bg-orange-500 rounded-2xl"></div>
                    </div>
                </div>
                <div className="flex flex-col h-auto md:h-250 py-2 md:py-20 md:justify-around   gap-10 md:gap-1 items-center md:items-end">
                    <div className="bg-gray-300/30 w-90 md:w-100 p-5 rounded-xl">
                        <div className="flex items-center font-semibold my-2 text-sm gap-4 text-orange-500">
                            <Calendar className='w-5 h-5'/>
                            <span>2018</span>
                        </div>
                        <h1 className='font-bold text-xl'>Founding & Vision</h1>
                        <p  className='text-sm my-3'>Aura is founded in San Francisco as an experimental 3-person design atelier focusing on luxury Swiss horology interfaces.</p>
                    </div>
                    <div className="bg-gray-300/30 w-90 md:w-100 p-5 rounded-xl">
                        <div className="flex items-center font-semibold my-2 text-sm gap-4 text-orange-500">
                            <Calendar className='w-5 h-5'/>
                            <span>2022</span>
                        </div>
                        <h1 className='font-bold text-xl'>Awwwards SOTD Recognition</h1>
                        <p  className='text-sm my-3'>Our pulse financial platform design wins prestigious CSSDA and Awwwards Developer Site of the Day honors. Operations expand to Europe.</p>
                    </div>
                </div>
            </div>
          </div>
       </section>

       <section className='bg-slate-950 w-full  h-auto'>
        <div className="py-10 text-center">
            <div className="">
                <span className='uppercase font-mono font-semibold text-orange-700'>Office Life</span>
                <h1 className='font-bold text-2xl md:text-4xl my-2 text-white'>The Radical Culture of Aura</h1>
                <p className='text-gray-700   text-sm'>We work in open collaborative sprints, value design system rules, and operate under absolute transparency.</p>
            </div>
            <div className="w-[80%] mx-auto grid grid-cols-1  md:grid-cols-4 mt-10 gap-5">
                <div className="bg-slate-900 flex flex-col items-start border col-span-1 md:col-span-3 border-gray-400 rounded-2xl p-10">
                    <span className='text-orange-500 uppercase font-mono'>Team Rituals</span>
                    <h1 className='text-2xl font-bold text-white'>Daily Standups & Espresso Sprints</h1>
                    <p className='text-start text-sm  text-gray-400 my-3'>Every morning starts with a brief 10-minute visual sync. We open up our Figma prototypes and check performance benchmarks side-by-side. We believe that continuous visual alignment eliminates late-stage coding issues.</p>
                    <div className="flex gap-10 mt-5 text-gray-400 font-mono text-sm">
                        <span>Espresso Bar</span>
                        <span>Sprints Logs</span>
                    </div>
                </div>
                <div className="bg-slate-900 flex text-start flex-col items-start border  border-gray-400 rounded-2xl p-5">
                    <span className='text-orange-500 text-start uppercase font-mono'>Workspace</span>
                    <h1 className='text-xl font-bold text-white'>Creative Loft Workspace</h1>
                    <p className='text-start text-sm  text-gray-400 my-3'>Our studio workspace is located in San Francisco's historic Sutter Street, featuring open layout tables, visual moodboards, and private focus chambers.</p>
                    <p className='font-mono text-gray-500 text-sm'>SF Studio Loft</p>
                </div>
                <div className="bg-slate-900 flex flex-col items-start border  border-gray-400 rounded-2xl p-5">
                    <span className='text-orange-500 text-start uppercase font-mono'>Accreditations</span>
                    <h1 className='text-xl font-bold text-white'>Awwwards Member</h1>
                    <p className='text-start text-sm  text-gray-400 my-3'>We actively contribute to design system discussions, act as site-of-the-day judges, and share our code.</p>
                    <p className='font-mono text-gray-500 text-sm'>Certified Judge</p>
                </div>
                <div className="bg-slate-900 flex flex-col items-start border col-span-1 md:col-span-3 border-gray-400 rounded-2xl p-10">
                    <span className='text-orange-500 text-start uppercase font-mono'>Workflow Rule</span>
                    <h1 className='text-xl font-bold text-white'>The Golden Ratio Alignment</h1>
                    <p className='text-start text-sm  text-gray-400 my-3'>Every page visual outline corresponds strictly to mathematical typography rules. We map font-sizes and line heights to the fibonacci sequence to create natural, elegant read-paths that make reading effortless for human eyes.</p>
                    <p className='font-mono text-gray-500 text-sm'>Symmetrical Rhythm</p>
                </div>
            </div>
        </div>
       </section>

       <section className='w-[90%] md:w-[70%] my-20 mx-auto bg-linear-to-r from-orange-500 from-10% via-orange-400 via-50% to-orange-400 to-40%  p-10 rounded-xl '>
           <div className="p-10 justify-center  flex flex-col items-center ">
            <h1 className='text-2xl md:text-5xl font-bold  text-white'>Want to Collaborate on a Project?</h1>
            <p className='text-white my-4 text-start md:text-center max-w-180 '>Book a free visual audit. Our Lead UX Architect and Senior Engineer will review your digital presence, identifying speed bottle-necks and layout gaps.</p>
            <Button style={'px-4 py-2 text-xs md:text-sm bg-slate-900 rounded-xl text-white font-semibold cursor-pointer'} label={'Claim Free Digital Audit'}/>
           </div>
       </section>
    </div>
  )
}

export default About