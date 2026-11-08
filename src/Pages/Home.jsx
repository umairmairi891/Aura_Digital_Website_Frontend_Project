import React, { useState, useEffect } from 'react'
import Button from '../Components/Button'
import { ArrowRight, BadgeCheck, Leaf, Microchip, Code, Database, Eye, ArrowRightLeft, UserCheck, Play, Cloudy, Star, Check, ArrowDown, ChevronDown, ChevronUp } from 'lucide-react'
import { questions } from '../data'
import '../index.css'

function Home() {
    const [expandedId, setExpandedID]=useState(null)
    const filteredopen=(id)=>{
        setExpandedID(expandedId==id?null:id)
    }





    return (
        <div className='py-10' >
            <section className='py-10 w-[90%] md:w-[80%] mx-auto'>
                <div className="flex flex-col md:flex-row mt-10 h-auto items-center gap-10">
                    <div className="">
                        <div className="border max-w-40 rounded-2xl bg-white uppercase  text-orange-500 text-sm flex items-center justify-center font-semibold border-orange-500 p-1 shadow-2xl shadow-orange-500">Aura Design Atelier</div>
                        <h1 className='py-5  text-4xl md:text-6xl max-w-140 font-bold'>We Shape <span className='text-orange-500'>Digital</span> Masterpieces</h1>
                        <p className='py-5  max-w-150 text-gray-400'>A top-tier creative digital studio built for ambitious brands. We merge premium visual storytelling with high-fidelity semantic code, delivering experiences that captivate clients and capture markets.</p>
                        <div className='flex items-center gap-4 py-5 '>
                            <Button style={'px-4 py-2 text-xs md:text-sm text-white font-semibold bg-orange-500 flex rounded items-center gap-2'} label={'Commision Our Studio'} icon={<ArrowRight className='w-4 h-4' />} />
                            <Button style={'bg-gray-300 text-xs md:text-sm px-4 py-2 rounded font-semibold'} label={'View Selected Work'} />
                        </div>
                        <div className="w-[90%] h-1 border-b border-gray-300"></div>
                        <div className="my-10 flex gap-10 md:gap-20">
                            <div className="">
                                <h1 className='font-bold text-2xl'>100%</h1>
                                <p className='text-sm  text-gray-400'>CORE WEB VITALS</p>
                            </div>
                            <div className="">
                                <h1 className='font-bold text-2xl'>42%</h1>
                                <p className='text-sm  text-gray-400'>Avg Client Lift</p>
                            </div>
                            <div className="">
                                <h1 className='font-bold text-2xl'>18+</h1>
                                <p className='text-sm  text-gray-400'>Awwwards & Honors</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className=" flex items-center justify-center">
                            <div className="bg-gray-100 flex rounded-2xl shadow-2xl border border-white justify-center items-center p-10 h-auto">
                                <div className="px-5 py-20 rounded-2xl bg-black text-white">
                                    <h1 className='uppercase text-orange-500'>Core Infrastructure</h1>
                                    <p className='font-serif max-w-80 my-4 font-semibold'>Optimizing performance loops dynamically...</p>
                                    <div className="bg-gray-800 rounded-2xl h-2  my-5"><div className="w-[80%] bg-orange-500 h-2 rounded-2xl line"></div></div>
                                    <p className='w-15 flex items-center justify-center text-orange-500 bg-orange-500/40 px-3 rounded-2xl '>Live</p>
                                </div>
                            </div>
                            <div className="bg-white p-3 flex items-center gap-5 rounded-2xl absolute top-[-30px] left-[65%]">
                                <BadgeCheck className='text-orange-500' />
                                <div className="">
                                    <h1 className='text-xs text-gray-400'>AGENCY RANK</h1>
                                    <p className='text-xs md:text-sm font-semibold'>#1 Studio</p>
                                </div>
                            </div>
                            <div className="bg-white p-3 flex items-center gap-5 rounded-2xl absolute top-87 left-5">
                                <Microchip className='text-blue-500' />
                                <div className="">
                                    <h1 className='text-xs text-gray-400'>VITALS</h1>
                                    <p className='text-sm font-semibold'>99.8% Perfect</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full my-10 bg-gray-100'>
                <div className="py-5 px-10 md:px-0 flex flex-col items-center justify-center">
                    <h1 className='uppercase text-sm text-gray-600'>Collaborating with global pioneers to build industry-shifting digital projects</h1>
                    <div className="">
                        <ul className='flex flex-wrap md:flex-nowrap  my-5 gap-20 text-2xl font-semibold text-gray-600'>
                            <li   className='w-20 md:w-auto' >Google</li>
                            <li  className='w-20 md:w-auto' >Microsoft</li>
                            <li className='w-20 md:w-auto'  >Spotify</li>
                            <li className='w-20 md:w-auto'  >Stripe</li>
                            <li className='w-20 md:w-auto'  >Slack</li>
                            <li  className='w-20 md:w-auto' >Dropbox</li>
                            <li  className='w-20 md:w-auto' >Airbnb</li>
                            <li className='w-20 md:w-auto'  >Notion</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='py-20 w-[80%] mx-auto'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="py-10">
                        <div className="flex my-5 flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
                                <div className="bg-gray-200 p-5 rounded-xl">
                                    <Leaf className='text-orange-500' />
                                    <h1 className='py-3 font-semibold'>Artistic Purity</h1>
                                    <p className='text-sm text-gray-700'>Designing clean, modern compositions without superficial visual clutter.</p>
                                </div>
                                <div className="bg-gray-200 p-5 rounded-xl">
                                    <Code className='text-orange-500' />
                                    <h1 className='py-3 font-semibold'>Valid Code</h1>
                                    <p className='text-sm text-gray-700'>Hand-written semantic structure optimized for speed, access and SEO ranking.</p>
                                </div>
                            </div>
                            <div className="bg-black px-10 py-5 rounded-2xl text-white">
                                <p className='uppercase text-xs text-orange-500'>Our Strategic Philosophy</p>
                                <h1 className='font-bold py-3 max-w-100'>"Aesthetic values are worthless if the page doesn't respond in sub-seconds."</h1>
                                <div className="flex items-center gap-5">
                                    <h1 className='bg-orange-500 p-2 rounded-2xl text-sm font-semibold'>ER</h1>
                                    <div className="text-sm ">
                                        <h1>Elena Rostova</h1>
                                        <p className='text-gray-400'>Founder, Aura</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <span className='bg-gray-200 px-4 py-1 rounded-2xl uppercase font-mono'>Our Core Manifesto</span>
                        <h1 className='my-4 font-bold text-2xl md:text-5xl'>Crafting Elite Digital Assets with Symmetrical Precision</h1>
                        <p className='text-sm my-5 text-gray-500'>Founded as an experimental boutique laboratory in San Francisco, Aura has matured into a premier global studio. We specialize in building custom high-performance web products, full brand systems, and intelligent digital platforms. We reject cookie-cutter templates, instead approaching every client project with custom design research and logical coding structure.</p>
                        <div className="grid grid-cols-2 gap-5 mt-10">
                            <div className="flex gap-3">
                                <Leaf className='text-orange-500 bg-yellow-100 p-3 rounded-xl w-15 h-10' />
                                <div className="">
                                    <h1 className='text-sm font-semibold'>Aesthetic Purity</h1>
                                    <p className='text-xs py-1 text-gray-400'>Every pixel serves a visual and functional purpose, minimizing friction.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Code className='text-orange-500 bg-yellow-100 p-3 rounded-xl w-15 h-10' />
                                <div className="">
                                    <h1 className='text-sm font-semibold'>Semantic Engineering</h1>
                                    <p className='text-xs py-1 text-gray-400'>Clean, accessible, valid HTML5 structure forms the foundation of all code.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Database className='text-orange-500 bg-yellow-100 p-3 rounded-xl w-15 h-10' />
                                <div className="">
                                    <h1 className='text-sm font-semibold'>Responsive Dynamism</h1>
                                    <p className='text-xs py-1 text-gray-400'>Interfaces that flex fluidly, offering high-fidelity across desktop to mobile.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Eye className='text-orange-500 bg-yellow-100 p-3 rounded-xl w-15 h-10' />
                                <div className="">
                                    <h1 className='text-sm font-semibold'>Radical Transparency</h1>
                                    <p className='text-xs py-1 text-gray-400'>Open workflow documentation, sprint logs, and budget utilization reports.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <p className='text-orange-500 font-semibold items-center gap-3 hover:gap-5 duration-200 flex'>Learn More About Our Team<ArrowRight className='w-5 h-5' /></p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full h-auto bg-linear-to-r from-10% from-orange-500   via-80% via-slate-950 to-80% to-slate-950'>
                <div className="py-20  md:px-0 flex flex-col items-center">
                    <h1 className='text-orange-500 font-bold'>Aura Superiority</h1>
                    <h1 className='text-2xl md:text-5xl text-white  font-bold py-4'>An Architectural Leap Forward</h1>
                    <p className='max-w-180 px-5 md:px-0 text-sm text-white text-center'>Unlike generic web templates that bloat rendering budgets, we approach each project with artisanal code structure and advanced performance strategies.</p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 w-[90%] md:w-[80%] mx-auto">
                        <div className="bg-slate-950 px-8 py-5 border border-gray-400 hover:-translate-y-2 duration-200 hover:border-orange-500 rounded-xl ">
                            <BadgeCheck className='w-10 h-10 p-3 text-orange-500 rounded bg-slate-800' />
                            <h1 className='py-2  text-white font-bold text-lg font-[Poppins]'>Awwwards-Grade UI</h1>
                            <p className='text-gray-400  font-[poppins]'>Bespoke interfaces designed from scratch to evoke deep consumer emotion and luxury branding.</p>
                        </div>
                        <div className="bg-slate-950 px-8 py-5 border border-gray-400 hover:-translate-y-2 duration-200 hover:border-orange-500 rounded-xl ">
                            <Microchip className='w-10 h-10 p-3 text-orange-500 rounded bg-slate-800' />
                            <h1 className='py-2  text-white font-bold text-lg font-[Poppins]'>Performance First</h1>
                            <p className='text-gray-400  font-[poppins]'>Guaranteed 95+ Core Web Vitals score. Jamstack architecture with instant server-side page responses.</p>
                        </div>
                        <div className="bg-slate-950 px-8 py-5 border border-gray-400 hover:-translate-y-2 duration-200 hover:border-orange-500 rounded-xl ">
                            <ArrowRightLeft className='w-10 h-10 p-3 text-orange-500 rounded bg-slate-800' />
                            <h1 className='py-2  text-white font-bold text-lg font-[Poppins]'>SEO Architecture</h1>
                            <p className='text-gray-400  font-[poppins]'>Semantic semantic microdata, schema.org integration, and perfectly optimized meta hierarchies.</p>
                        </div>
                        <div className="bg-slate-950 px-8 py-5 border border-gray-400 hover:-translate-y-2 duration-200 hover:border-orange-500 rounded-xl ">
                            <UserCheck className='w-10 h-10 p-3 text-orange-500 rounded bg-slate-800' />
                            <h1 className='py-2  text-white font-bold text-lg font-[Poppins]'>Accessible Designs</h1>
                            <p className='text-gray-400  font-[poppins]'>Strict compliance with WCAG 2.1 AA contrast, ARIA landmarks, and robust keyboard navigation.</p>
                        </div>
                        <div className="bg-slate-950 px-8 py-5 border border-gray-400 hover:-translate-y-2 duration-200 hover:border-orange-500 rounded-xl ">
                            <Play className='w-10 h-10 p-3 text-orange-500 rounded bg-slate-800' />
                            <h1 className='py-2  text-white font-bold text-lg font-[Poppins]'>Dynamic Prototyping</h1>
                            <p className='text-gray-400  font-[poppins]'>Interact with interactive clickable prototypes built in Figma and Framer before coding starts.</p>
                        </div>
                        <div className="bg-slate-950 px-8 py-5 border border-gray-400 hover:-translate-y-2 duration-200 hover:border-orange-500 rounded-xl ">
                            <Cloudy className='w-10 h-10 p-3 text-orange-500 rounded bg-slate-800' />
                            <h1 className='py-2  text-white font-bold text-lg font-[Poppins]'>Cloud Infrastructure</h1>
                            <p className='text-gray-400  font-[poppins]'>Dockerized deployments, global CDN multi-region routing, and scale-to-zero server efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-[80%] mx-auto py-20'>
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                        <div className="">
                            <span className='uppercase text-orange-600'>Our Engineering Specialties</span>
                            <h1 className='py-4 text-2xl md:text-5xl max-w-180 font-bold'>Our Design & Development Disciplines</h1>
                        </div>
                        <div className="">
                            <Button style={'px-4 py-2 bg-black flex items-center gap-4 cursor-pointer text-white rounded font-semibold'} label={'View Full Service Catalog'} icon={<ArrowRight className='w-5 h-5' />} />
                        </div>
                    </div>
                    <div className="mt-10">
                        <ul>
                            <li className='flex flex-col md:flex-row gap-10 group cursor-pointer border-b border-t border-gray-200 py-5'><span className='text-gray-400 font-bold'>01</span>
                                <h1 className='w-80 font-serif font-bold group-hover:text-orange-500'>Full Stack Web Development</h1>
                                <p className='text-gray-500  text-sm w-80'>Custom structural coding utilizing React, Next.js and robust cloud data layers</p>
                                <p className='font-mono w-80 text-gray-400 text-sm'>Typescript, Tailwind v4 and Drizzle</p>
                                <ArrowRight className='border group-hover:text-white group-hover:border-none group-hover:bg-orange-500 hover:text-white border-gray-300 w-10 h-10 p-3 rounded-3xl' />
                            </li>

                            <li className='flex flex-col md:flex-row group gap-10 cursor-pointer border-b border-t border-gray-200 py-5'><span className='text-gray-400 font-bold'>02</span>
                                <h1 className='w-80  font-serif font-bold group-hover:text-orange-500'>Luxury UI/UX Product Design</h1>
                                <p className='text-gray-500  text-sm w-80'>Interactive visual frame works focusing on high-contrast Accessibility, flow and user psychology</p>
                                <p className='font-mono w-80 text-gray-400 text-sm'>Figma Pro, Interaction, Wireframes</p>
                                <ArrowRight className='border group-hover:text-white group-hover:border-none group-hover:bg-orange-500  border-gray-300 w-10 h-10 p-3 rounded-3xl' />
                            </li>
                            <li className='flex flex-col md:flex-row gap-10 group cursor-pointer border-b border-t border-gray-200 py-5'><span className='text-gray-400 font-bold'>03</span>
                                <h1 className='w-80  font-serif font-bold group-hover:text-orange-500'>Unified Brand System Architecture</h1>
                                <p className='text-gray-500 text-sm w-80'>Crafting luxury logo identifies, corporate assests and global color guides</p>
                                <p className='font-mono w-80 text-gray-400 text-sm'>Vectors, Brands Manuals, Strategy</p>
                                <ArrowRight className='border group-hover:text-white group-hover:border-none group-hover:bg-orange-500 border-gray-300 w-10 h-10 p-3 rounded-3xl' />
                            </li>
                            <li className='flex flex-col md:flex-row group gap-10 cursor-pointer border-b border-t border-gray-200 py-5'><span className='text-gray-400 font-bold'>04</span>
                                <h1 className='w-80  font-serif font-bold group-hover:text-orange-500'>Enterprise SEO & Search Dominance </h1>
                                <p className='text-gray-500 text-sm w-80'>Valid structure semantic mapping, metadata schemas, and speed indexing strategies</p>
                                <p className='font-mono w-80 text-gray-400 text-sm'>JSON-LD, Semantic HTML5, Schema</p>
                                <ArrowRight className='border group-hover:text-white group-hover:border-none group-hover:bg-orange-500 border-gray-300 w-10 h-10 p-3 rounded-3xl' />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='w-full py-10 bg-gray-100'>
                <div className="flex flex-col py-10 items-center">
                    <div className="flex w-[80%] mx-auto     items-start  flex-col">
                        <span className='text-orange-500 font-semibold uppercase font-mono'>Our Method</span>
                        <h1 className='text-4xl font-bold'>The Interactive Blueprint Process</h1>
                        <p className='py-2 text-sm'>Our structured step-by-step methodology keeps design concepts aligned directly with semantic development goals, ensuring a pixel-perfect, secure rollout.</p>
                    </div>
                    <div className="w-[80%]  mt-5 mx-auto gap-5 grid space-y-5 md:space-y-0 grid-cols-1 md:grid-cols-7">
                        <div className="bg-white parent_card shadow-2xl p-5 rounded">
                            <span className='text-gray-600 font-semibold'>01</span>
                            <h1 className='font-semibold py-2'>Discover</h1>
                            <p className='text-sm h-30'>In-depth strategy workshops and target audience immersion to align goals.</p>
                            <div className="bg-gray-100 rounded-2xl h-1 my-3"><div className={`group-hover:w-full transition-all child_card group-hover:bg-orange-500 h-1 rounded-2xl `}></div></div>
                        </div>
                        <div className="bg-white  parent_card shadow-2xl p-5 rounded">
                            <span className='text-gray-600  font-semibold'>02</span>
                            <h1 className='font-semibold py-2'>Research</h1>
                            <p className='text-sm h-30'>Competitive intelligence, user journey mapping, and usability reports.</p>

                            <div className="bg-gray-100  rounded-2xl h-1 my-3"><div className="group-hover:w-[100%] child_card group-hover:bg-orange-500 h-1 rounded-2xl "></div></div>
                        </div>
                        <div className="bg-white parent_card shadow-2xl p-5 rounded">
                            <span className='text-gray-600 font-semibold'>03</span>
                            <h1 className='font-semibold py-2'>Design</h1>
                            <p className='text-sm h-30'>Wireframes, visual systems, high-fidelity prototypes, and interactive micro-flows.</p>

                            <div className="bg-gray-100 rounded-2xl h-1 my-3"><div className="group-hover:w-[100%] child_card group-hover:bg-orange-500 h-1 rounded-2xl "></div></div>
                        </div>
                        <div className="bg-white shadow-2xl parent_card  p-5 rounded">
                            <span className='text-gray-600  font-semibold'>04</span>
                            <h1 className='font-semibold py-2'>Development</h1>
                            <p className='text-sm h-30'>Semantic, highly optimized clean code incorporating state management and security.</p>

                            <div className="bg-gray-100 rounded-2xl h-1 my-3"><div className="group-hover:w-[100%] child_card group-hover:bg-orange-500 h-1 rounded-2xl "></div></div>
                        </div>
                        <div className="bg-white parent_card shadow-2xl p-5 rounded">
                            <span className='text-gray-600 font-semibold'>05</span>
                            <h1 className='font-semibold py-2'>Testing</h1>
                            <p className='text-sm h-30'>Multi-device responsive audits, accessibility criteria compliance, and load testing.</p>

                            <div className="bg-gray-100 rounded-2xl h-1 my-3"><div className="group-hover:w-[100%] child_card group-hover:bg-orange-500 h-1 rounded-2xl "></div></div>
                        </div>
                        <div className="bg-white shadow-2xl parent_card p-5 rounded">
                            <span className='text-gray-600 font-semibold' >06</span>
                            <h1 className='font-semibold py-2'>Launch</h1>
                            <p className='text-sm h-30'>Automated CI/CD build pipelining, cloud server deployment, and CDN optimization.</p>

                            <div className="bg-gray-100 rounded-2xl h-1 my-3"><div className="group-hover:w-[100%] child_card group-hover:bg-orange-500 h-1 rounded-2xl "></div></div>
                        </div>
                        <div className="bg-white parent_card shadow-2xl p-5 rounded">
                            <span className='text-gray-600 font-semibold'>07</span>
                            <h1 className='font-semibold py-2'>Support</h1>
                            <p className='text-sm h-30'>Continuous performance fine-tuning, core updates, and ongoing analytics monitoring.</p>

                            <div className="bg-gray-100 rounded-2xl h-1 my-3"><div className="group-hover:w-[100%] child_card group-hover:bg-orange-500 h-1 rounded-2xl "></div></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-[90%] md:w-[80%] mx-auto py-20'>
                <div className="flex flex-col">
                    <div className="flex flex-col  md:flex-row justify-between md:items-center">
                        <div className="">
                            <span className='text-orange-500 uppercase font-semibold py-3'>Selected Works</span>
                            <h1 className='text-3xl md:text-5xl font-bold py-4'>Case Studies in Excellence</h1>
                        </div>
                        <div className="flex  items-center gap-4 font-semibold text-orange-500">
                            Explore All Selected Case Studies <ArrowRight className='w-5 h-5' />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                        <div className="h-auto shadow-2xl overflow-hidden rounded-2xl ">
                            <div className="bg-black overflow-hidden flex flex-col items-center text-white justify-center w-full h-100">
                                <span className='border border-orange-500 px-2  rounded uppercase text-sm text-orange-500'>E-Commerce</span>
                                <h1 className='font-bold my-2 text-2xl'>Aether Luxury Chrono </h1>
                            </div>
                            <p className='px-8 py-5 text-gray-500'>Bespoke digital boutique for a high-end Swiss horology atelier, generating 42% lift in conversion</p>
                            <div className="px-4 md:px-8 flex gap-5  py-5">
                                <span className='text-gray-500 text-xs md:text-sm rounded border border-gray-400 px-5 py-1'>Next.js</span>
                                <span className='text-gray-500 text-xs md:text-sm rounded border border-gray-400 px-5 py-1'>Tailwind</span>
                                <span className='text-gray-500 border text-xs md:text-sm rounded border-gray-400 px-5 py-1 truncate'>Stripe API</span>
                            </div>
                            <div className="w-full mx-auto border-b border-gray-300"></div>
                            <div className="flex px-4 md:px-8  justify-between py-10">
                                <div className="">
                                    <span className='text-gray-600'>Value Lift</span>
                                    <p className='text-green-500 font-semibold'>+42%</p>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-gray-500'>Award Merit</span>
                                    <span>Awwards SOTD</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-auto shadow-2xl overflow-hidden rounded-2xl ">
                            <div className="bg-black overflow-hidden flex flex-col items-center text-white justify-center w-full h-100">
                                <span className='border border-orange-500 px-2  rounded uppercase text-sm text-orange-500'>
                                    Web Developer
                                </span>
                                <h1 className='font-bold my-2 text-2xl'>Pulse Web Platform </h1>
                            </div>
                            <p className='px-8 py-5 text-gray-500'>Real time Financial analytics dashboard handling millions of visual updates per second with zero lah.</p>
                            <div className="px-4 md:px-8 flex gap-5  py-5">
                                <span className='text-gray-500 text-xs md:text-sm rounded border border-gray-400 px-5 py-1'>REACT </span>
                                <span className='text-gray-500 text-xs md:text-sm rounded border border-gray-400 px-5 py-1'>D3.js </span>
                                <span className='text-gray-500 border text-xs md:text-sm rounded border-gray-400 px-5 py-1'>WebSockets</span>
                            </div>
                            <div className="w-full mx-auto border-b border-gray-300"></div>
                            <div className="flex px-4 md:px-8  justify-between py-10">
                                <div className="">
                                    <span className='text-gray-600'>Value Lift</span>
                                    <p className='text-green-500 font-semibold'>+99.9% Uptime</p>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-gray-500'>Award Merit</span>
                                    <span>CSS Design Awards</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-auto shadow-2xl overflow-hidden rounded-2xl ">
                            <div className="bg-black overflow-hidden flex flex-col items-center text-white justify-center w-full h-100">
                                <span className='border border-orange-500 px-2  rounded uppercase text-sm text-orange-500'>Mobile Apps</span>
                                <h1 className='font-bold my-2 text-2xl'>Scribe AI Assistant </h1>
                            </div>
                            <p className='px-8 py-5 text-gray-500'>A voice first personal transcription and AI action item summarizing app styled in deep cosmic glassmorphis,</p>
                            <div className="px-4 md:px-8 flex gap-5  py-5">
                                <span className='text-gray-500 text-xs md:text-sm rounded border border-gray-400 px-5 truncate py-1'>React Native</span>
                                <span className='text-gray-500 text-xs md:text-sm rounded border border-gray-400 px-5 truncate py-1'>Gemni SDK</span>
                                <span className='text-gray-500 border text-xs md:text-sm rounded border-gray-400 px-5 py-1'>EXPO</span>
                            </div>
                            <div className="w-full mx-auto border-b border-gray-300"></div>
                            <div className="flex px-4 md:px-8  justify-between py-10">
                                <div className="">
                                    <span className='text-gray-600'>Value Lift</span>
                                    <p className='text-green-500 font-semibold'>4.9 App Store</p>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-gray-500'>Award Merit</span>
                                    <span>App of the Day</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-auto shadow-2xl overflow-hidden rounded-2xl ">
                            <div className="bg-black overflow-hidden flex flex-col items-center text-white justify-center w-full h-100">
                                <span className='border border-orange-500 px-2  rounded uppercase text-sm text-orange-500'>UI UX DESIGN</span>
                                <h1 className='font-bold my-2 text-2xl'>Omni Design System</h1>
                            </div>
                            <p className='px-8 py-5 text-gray-500'>A Complete Multi-Platform unified visual Components systems powering a Fortune 500 Saas empire </p>
                            <div className="px-4 md:px-8 flex gap-5  py-5">
                                <span className='text-gray-500  text-xs md:text-sm rounded border border-gray-400 px-5 py-1'>Figma</span>
                                <span className='text-gray-500 text-xs md:text-sm rounded border border-gray-400 px-5 py-1'>Stitches</span>
                                <span className='text-gray-500 border text-xs md:text-sm rounded border-gray-400 px-5 py-1'>StroyBook</span>
                            </div>
                            <div className="w-full mx-auto border-b border-gray-300"></div>
                            <div className="flex px-4  md:px-8  justify-between py-10">
                                <div className="">
                                    <span className='text-gray-600'>Value Lift</span>
                                    <p className='text-green-500 font-semibold'>300+ Components</p>
                                </div>
                                <div className="flex flex-col">
                                    <span className='text-gray-500'>Award Merit</span>
                                    <span>Behanced Featured</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='w-full bg-slate-950 h-auto'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-white py-10 w-[80%] mx-auto">
                    <div className="text-center">
                        <h1 className='text-4xl  font-semibold '>350+</h1>
                        <span className='text-gray-500 text-xs md:text-sm uppercase py-2'>Projects Launched</span>
                    </div>
                    <div className="text-center">
                        <h1 className='text-4xl  font-semibold '>99.8%</h1>
                        <span className='text-gray-500 text-xs md:text-sm py-2'>CLIENT SATISFACTION</span>
                    </div>
                    <div className="text-center">
                        <h1 className='text-4xl  font-semibold '>24+</h1>
                        <span className='text-gray-500 text-xs md:text-sm py-2'>COUNTRIES SERVED</span>
                    </div>
                    <div className="text-center">
                        <h1 className='text-4xl  font-semibold '>18</h1>
                        <span className='text-gray-500 text-xs md:text-sm py-2'>CREATIVE DESIGN AWARDS</span>
                    </div>
                </div>
            </section>

            <section className='w-[80%] mx-auto py-20'>
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row gap-10  justify-between md:items-center">
                        <div className="">
                            <span className='text-orange-500 font-semibold  uppercase text-xl md:text-2xl'>Visionaries</span>
                            <h1 className='text-2xl md:text-4xl font-bold py-2'>Meet the Team Minds</h1>
                        </div>
                        <div className="">
                            <Button style={'px-4 hover:bg-orange-500 cursor-pointer text-white rounded-xl font-semibold py-2 bg-black'} label={'See Full Roster'} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
                        <div className="bg-white rounded-xl border border-gray-300 shadow-2xl p-5">
                            <div className="bg-black rounded-2xl flex items-center flex-col justify-center w-full h-50 ">
                                <h1 className='text-white font-bold'>ER</h1>
                                <p className='text-orange-600'>LEADERSHIP</p>
                            </div>
                            <h1 className='mt-3 font-semibold text-xl'>Elena Rostova</h1>
                            <span className='text-sm  text-orange-500'>Founder & Creative Director</span>
                            <p className='text-sm  text-gray-500'>Former Principal Designer at Apple. 15+ years crafting global luxury design systems.</p>
                        </div>
                        <div className="bg-white rounded-xl border border-gray-300 shadow-2xl p-5">
                            <div className="bg-black rounded-2xl flex items-center flex-col justify-center w-full h-50 ">
                                <h1 className='text-white font-bold'>JV</h1>
                                <p className='text-orange-600'>Development Team</p>
                            </div>
                            <h1 className='mt-3 font-semibold text-xl'>Julian Vance</h1>
                            <span className='text-sm  text-orange-500'>Head of Engineering</span>
                            <p className='text-sm  text-gray-500'>Ex-Google Staff Engineer. Specialized in semantic DOM architecture and micro-interactions.</p>
                        </div>
                        <div className="bg-white rounded-xl border border-gray-300 shadow-2xl p-5">
                            <div className="bg-black rounded-2xl flex items-center flex-col justify-center w-full h-50 ">
                                <h1 className='text-white font-bold'>SC</h1>
                                <p className='text-orange-600'>Design Team</p>
                            </div>
                            <h1 className='mt-3 font-semibold text-xl'>Sophia Chen</h1>
                            <span className='text-sm  text-orange-500'>Lead UI/UX Architect</span>
                            <p className='text-sm  text-gray-500'>Award-winning visual storyteller. Passionate about 60-30-10 color rules and spacious design rhythm.</p>
                        </div>
                        <div className="bg-white rounded-xl border border-gray-300 shadow-2xl p-5">
                            <div className="bg-black rounded-2xl flex items-center flex-col justify-center w-full h-50 ">
                                <h1 className='text-white font-bold'>MK</h1>
                                <p className='text-orange-600'>Marketing Team</p>
                            </div>
                            <h1 className='mt-3 font-semibold text-xl'>Marcus Kael</h1>
                            <span className='text-sm  text-orange-500'>Director of Growth</span>
                            <p className='text-sm  text-gray-500'>Obsessed with search algorithms and data-driven marketing copy that converts readers into brand evangelists.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full bg-gray-100 py-10 text-center'>
                <div className="flex flex-col">
                    <div className="text-center flex flex-col items-center">
                        <span className='text-orange-500 font-semibold uppercase'>Social Proof</span>
                        <h1 className='font-bold py-2 text-2xl md:text-4xl'>Testimonial Endorsements</h1>
                        <p className='text-gray-600 px-5 md:px-0 max-w-150 my-5'>Read real-world testimonials from growth-oriented corporate partners and founders who transformed their operations using Aura.</p>
                    </div>
                    <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="bg-white p-5 rounded-2xl border border-gray-200">
                            <span className='flex gap-2'><Star className='w-5 h-5 fill-yellow-400 text-yellow-400' /><Star className='w-5 h-5 fill-yellow-400 text-yellow-400' /><Star className='w-5 h-5 fill-yellow-400 text-yellow-400' /><Star className='w-5 h-5 fill-yellow-400 text-yellow-400' /><Star className='w-5 h-5 fill-yellow-400 text-yellow-400' /></span>
                            <p className='py-3 text-start italic text-gray-500'>"Aura built our global horology platform from scratch. The visual design is magnificent, but the performance is unbelievable. Our page load speed dropped under 300ms, immediately driving a 42% lift in checkout completions."</p>
                            <div className=" w-full border border-gray-200 my-5"></div>
                            <div className="text-start flex gap-5 items-center">
                                <h1 className='bg-black px-3 py-1 text-white rounded-[50%]'>S</h1>
                                <div className="">
                                    <p className='font-semibold'>Sarah Miller</p>
                                    <p className='text-sm text-gray-500'>VP of Digital, Swiss Chrono Co.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-2xl border border-gray-200">
                            <span className='flex gap-2'><Star className='w-5 h-5 fill-yellow-400 text-yellow-400' /><Star className='w-5 h-5 fill-yellow-400 text-yellow-400' /><Star className='w-5 h-5 fill-yellow-400 text-yellow-400' /><Star className='w-5 h-5 fill-yellow-400 text-yellow-400' /><Star className='w-5 h-5 fill-yellow-400 text-yellow-400' /></span>
                            <p className='py-3 text-start italic text-gray-500'>"Our financial dashboard had extreme rendering lag due to real-time data visualizers. Aura refactored the entire semantic DOM tree and integrated high-speed web socket state management. Excellent software craftsmanship."</p>
                            <div className=" w-full border border-gray-200 my-5"></div>
                            <div className="text-start flex gap-5 items-center">
                                <h1 className='bg-black px-3 py-1 text-white rounded-[50%]'>M</h1>
                                <div className="">
                                    <p className='font-semibold'>Marcus Kael</p>
                                    <p className='text-sm text-gray-500'>Director of Product, Pulse FinTech</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-[80%] mx-auto py-20'>
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between md:items-center">
                        <div className="">
                            <span className='uppercase text-orange-500 font-semibold'>Investment Plans</span>
                            <h1 className='text-2xl md:text-4xl font-bold py-3 '>Transparent Engagement Models</h1>
                        </div>
                        <div className="">
                            <Button style={'px-4 py-2 bg-black text-white rounded font-semibold cursor-pointer'} label={'View Full Packages Comparison'} />
                        </div>
                    </div>
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-10">
                       <div className="px-8 py-5 hover:bg-black hover:text-white duration-200 hover:border-2 hover:border-orange-500 hover:-translate-y-2 shadow-2xl border border-gray-300 rounded-2xl">
                           <h1 className='font-semibold'>Brand Launchpad</h1>
                           <p className='text-xs py-3 text-gray-600'>Perfect for ambitious startups looking to launch a high-impact, premium online presence.</p>
                           <div className="flex  items-end"><h1 className='text-3xl font-bold'>$4,999</h1><span className='text-gray-600 text-sm'>/ Single Project</span></div>
                           <ul className='py-5 space-y-1 h-60 font-[Poppins] text-gray-600'>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Bespoke Single-Page / 5-Section Landing</li>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Custom SVG Illustrations & Micro-animations</li>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Figma Hand-off Files</li>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>100% Core Web Vitals Speed Score</li>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Basic SEO Schema Markup</li>
                           </ul>
                           <Button style={'text-center bg-gray-100 py-2 rounded font-semibold cursor-pointer hover:bg-gray-200 w-full'} label={'Initiate Consultation'}/>
                       </div>
                       <div className="px-8 py-5 hover:-translate-y-2 shadow-2xl bg-black text-white border-2 border-orange-500 rounded-2xl">
                        
                           <h1 className='font-semibold'>Scale & Accelerate</h1>
                           <p className='text-xs py-3 text-gray-300'>The gold standard for established corporate entities seeking Awwwards-grade digital transformations.</p>
                           <div className="flex  items-end"><h1 className='text-3xl font-bold'>$12,500</h1><span className='text-gray-300 text-sm'>/ Single Project</span></div>
                           <ul className='py-5 space-y-1 h-60 font-[Poppins] text-gray-600'>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Full Multi-page Custom Frontend (up to 8 Pages)</li>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>High-Fidelity Animations via Framer/Motion</li>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Durable Firestore/Database System Integrations</li>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Advanced Custom Contact Forms with Server Filters</li>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Complete Semantic SEO & Page Metadata Optimization</li>
                           </ul>
                           <Button style={'text-center bg-orange-500 py-2 rounded font-semibold cursor-pointer hover:bg-orange-600 w-full'} label={'Initiate Consultation'}/>
                       </div>
                       <div className="px-8 py-5 hover:bg-black hover:text-white duration-200 hover:border-2 hover:border-orange-500 hover:-translate-y-2 shadow-2xl border border-gray-300 rounded-2xl">
                        <h1 className='font-semibold'>Enterprise Retainer</h1>
                           <p className='text-xs py-3 text-gray-600'>Continuous dedicated design and engineering squad acting as your integrated digital innovation arm.</p>
                           <div className="flex  items-end"><h1 className='text-3xl font-bold'>$7,500</h1><span className='text-gray-600 text-sm'>/ per month</span></div>
                           <ul className='py-5 space-y-1 h-60 font-[Poppins] text-gray-600'>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>40 Dedicated Design & Coding Hours/Week</li>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Real-time Slack Sync & Bi-weekly Sprints</li>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Continuous Conversion & Performance Tuning</li>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Unlimited Revisions & Dynamic Feature Requests</li>
                            <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Custom Database, API and Gemini Integrations</li>
                           </ul>
                           <Button style={'text-center bg-gray-100 py-2 rounded font-semibold cursor-pointer hover:bg-gray-200 w-full'} label={'Initiate Consultation'}/>
                       </div>
                    </div>
                </div>
            </section>


            <section className='w-full text-center py-20'>
               <div className="flex flex-col w-[90%] md:w-[60%] mx-auto">
                <div className="">
                    <span className='uppercase text-orange-500 font-semibold'>Inquiries</span>
                    <h1 className='py-3 text-4xl font-bold'>Frequently Asked Questions</h1>
                </div>
                <div className="mt-5  ">
                   {questions.map((q)=>{
                    const isOpen=expandedId===q.id
                     return <div onClick={()=>filteredopen(q.id)} className="my-5 py-3 bg-gray-300 rounded cursor-pointer">
                        <div className="flex justify-between px-5">
                        <h1 className='font-semibold'>{q.question}</h1>
                        {isOpen ? (<ChevronUp className='text-orange-500'/>):(<ChevronDown className='text-orange-500'/>)}
                        
                        </div >
                          {isOpen && (
                            <p className='my-4 px-5 text-sm text-gray-800'>{q.answer}</p>
                          )}

                     </div>
                   })}
                </div>
               </div>
            </section>

        </div>
    )
}

export default Home