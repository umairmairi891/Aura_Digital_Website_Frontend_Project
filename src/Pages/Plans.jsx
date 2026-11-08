import React from 'react'
import { ArrowUpLeftFromCircleIcon, Check, Code2, ShieldCheck } from 'lucide-react'
import Button from '../Components/Button'
function Plans() {
  return (
    <div className='py-20'>
         <section className='w-[80%] mx-auto mt-30'>
                <div className="flex flex-col mt-10 items-center text-center">
                    <span className=' bg-orange-100 px-4 py-1 rounded-2xl text-orange-500 font-mono uppercase font-semibold'>Investment Blueprint
                    </span>
                    <h1 className='text-3xl md:text-7xl my-4 max-w-180  font-bold'>Predictable, Value-Driven <span className='text-orange-500'>Investment</span>.
                    </h1>
                    <p className='text-gray-500 max-w-180'>No hourly pricing traps or ambiguous invoices. Just high-fidelity, world-class software and luxury branding priced with absolute predictability.</p>
                </div>
            </section>

            <section className='bg-blue-100/40 my-20'>
                <div className="mt-5 w-[90%] md:w-[80%] mx-auto py-20 grid  grid-cols-1 md:grid-cols-3 gap-10">
                                      <div className="px-8 py-5 hover:bg-black hover:text-white duration-200 hover:border-2 hover:border-orange-500 bg-white hover:-translate-y-2 shadow-2xl border border-gray-300 rounded-2xl">
                                          <h1 className='font-semibold text-2xl'>Brand Launchpad</h1>
                                          <p className='text-xs py-3 text-gray-600'>Perfect for ambitious startups looking to launch a high-impact, premium online presence.</p>
                                          <div className="flex my-5  items-end"><h1 className='text-4xl font-bold'>$4,999</h1><span className='text-gray-600 text-sm'>/ Single Project</span></div>
                                          <ul className='py-5 space-y-5 h-80 font-[Poppins] text-gray-600'>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Bespoke Single-Page / 5-Section Landing</li>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Custom SVG Illustrations & Micro-animations</li>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Figma Hand-off Files</li>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>100% Core Web Vitals Speed Score</li>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Basic SEO Schema Markup</li>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>14 Days Post-launch Care</li>
                                          </ul>
                                          <Button style={'text-center bg-gray-100 py-2 rounded font-semibold cursor-pointer hover:bg-gray-200 w-full'} label={'Initiate Strategic Sync'}/>
                                      </div>
                                      <div className="px-8 py-5 hover:-translate-y-2 shadow-2xl bg-black text-white border-2 border-orange-500 rounded-2xl">
                                       
                                          <h1 className='font-semibold text-2xl'>Scale & Accelerate</h1>
                                          <p className='text-xs py-3 text-gray-300'>The gold standard for established corporate entities seeking Awwwards-grade digital transformations.</p>
                                          <div className="flex  items-end my-5"><h1 className='text-3xl font-bold '>$12,500</h1><span className='text-gray-300 text-sm'>/ Single Project</span></div>
                                          <ul className='py-5 space-y-5 h-80 font-[Poppins] text-gray-200'>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Full Multi-page Custom Frontend (up to 8 Pages)</li>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>High-Fidelity Animations via Framer/Motion</li>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Durable Firestore/Database System Integrations</li>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Advanced Custom Contact Forms with Server Filters</li>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Complete Semantic SEO & Page Metadata Optimization</li>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>30 Days Dedicated Engineering Priority Support</li>
                                          </ul>
                                          <Button style={'text-center bg-orange-500 py-2 rounded font-semibold cursor-pointer hover:bg-orange-600 w-full'} label={'Initiate Strategic Sync'}/>
                                      </div>
                                      <div className="px-8 py-5 hover:bg-black hover:text-white duration-200 hover:border-2 hover:border-orange-500 bg-white hover:-translate-y-2 shadow-2xl border border-gray-300 rounded-2xl">
                                       <h1 className='font-semibold text-2xl'>Enterprise Retainer</h1>
                                          <p className='text-xs py-3 text-gray-600'>Continuous dedicated design and engineering squad acting as your integrated digital innovation arm.</p>
                                          <div className="flex  items-end my-5"><h1 className='text-3xl font-bold'>$7,500</h1><span className='text-gray-600 text-sm'>/ per month</span></div>
                                          <ul className='py-5 space-y-5 h-80 font-[Poppins] text-gray-600'>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>40 Dedicated Design & Coding Hours/Week</li>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Real-time Slack Sync & Bi-weekly Sprints</li>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Continuous Conversion & Performance Tuning</li>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Unlimited Revisions & Dynamic Feature Requests</li>
                                           <li className='flex gap-3 text-sm'><Check className='w-5 h-5 text-orange-500'/>Custom Database, API and Gemini Integrations</li>
                                          </ul>
                                          <Button style={'text-center bg-gray-100 py-2 rounded font-semibold cursor-pointer hover:bg-gray-200 w-full'} label={'Initiate Strategic Sync'}/>
                                      </div>
                                   </div>
            </section>

            <section className='py-10 w-[95%] md:w-[80%] mx-auto'>
               <div className="">
                  <div className="">
                    <h1 className='text-2xl font-bold my-4'>Detailed Capabilities Comparison</h1>
                  </div>
                  <div className="w-full    ">
                    <table className='w-full mt-10   overflow-hidden  rounded-xl   border  border-gray-800 '>
                        <thead className='grid   rounded-xl  text-xs md:text-sm  uppercase  bg-blue-50 py-5  font-mono grid-cols-4'>
                            <th className='truncate'>Scope Capability</th>
                            <th className='truncate'>Launchpad</th>
                            <th className='truncate'>Scale & Accelerate</th>
                            <th className='truncate'>Enterprise Retainer</th>
                        </thead>
                        <tbody className='text-xs md:text-sm'>
                            <tr className='grid rounded-xl   border  border-gray-400 grid-cols-4 py-5 items-center  text-center cursor-pointer hover:bg-blue-50/30'>
                                <td>Figma Layout Wireframes</td>
                                <td className=' flex items-center justify-center'><Check className='w-5 h-5 text-green-500'/></td>
                                <td className='flex items-center justify-center'><Check className='w-5 h-5 text-green-500'/></td>
                                <td className='flex items-center justify-center'><Check className='w-5 h-5 text-green-500'/></td>
                            </tr>
                            <tr className='grid   border rounded-xl  border-gray-400 grid-cols-4 py-5 items-center cursor-pointer hover:bg-blue-50/30 text-center'>
                                <td>Bespoke Custom Visuals</td>
                                <td className=' flex items-center justify-center'><Check className='w-5 h-5 text-green-500'/></td>
                                <td className='flex items-center justify-center'><Check className='w-5 h-5 text-green-500'/></td>
                                <td className='flex items-center justify-center'><Check className='w-5 h-5 text-green-500'/></td>
                            </tr>
                            <tr className='grid  rounded-xl border  border-gray-400 grid-cols-4 py-5 items-center  cursor-pointer hover:bg-blue-50/30 text-center'>
                                <td>Responsive 8-Page System</td>
                                <td className=' flex items-center justify-center'>Single Page Only</td>
                                <td className='flex items-center justify-center'><Check className='w-5 h-5 text-green-500'/></td>
                                <td className='flex items-center justify-center'><Check className='w-5 h-5 text-green-500'/></td>
                            </tr>
                            <tr className='grid rounded-xl  border  border-gray-400 grid-cols-4 py-5 items-center cursor-pointer hover:bg-blue-50/30 text-center'>
                                <td>Framer / Motion Animations</td>
                                <td className=' flex items-center justify-center'>Basic Fades</td>
                                <td className='flex items-center justify-center'>Premium Animations</td>
                                <td className='flex items-center justify-center'>Custom WebGL / Canvas</td>
                            </tr>
                            <tr className='grid rounded-xl  border  border-gray-400 grid-cols-4 py-5 items-center cursor-pointer hover:bg-blue-50/30  text-center'>
                                <td>Durable Cloud Database integrations</td>
                                <td className=' flex items-center justify-center'>Contact Form Static</td>
                                <td className='flex items-center justify-center'>Firebase / SQLite</td>
                                <td className='flex items-center justify-center'>PostgreSQL / Cloud SQL</td>
                            </tr>
                            <tr className='grid   border rounded-xl border-gray-400 grid-cols-4 py-5 items-center cursor-pointer hover:bg-blue-50/30  text-center'>
                                <td>Ongoing Sprints Revisions</td>
                                <td className=' flex items-center justify-center'>2 Rounds Only</td>
                                <td className='flex items-center justify-center'>1 Month Included</td>
                                <td className='flex items-center justify-center'>Unlimited / Weekly Retainers</td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
               </div>
            </section>

            <section className=' w-full bg-black'>
               <div className="w-[80%] py-20 grid grid-cols-1 gap-10 md:grid-cols-3 mx-auto">
                <div className="bg-slate-900 rounded-2xl border border-gray-600 px-10 py-5">
                         <ShieldCheck className='my-2 text-orange-500 w-10 h-10 font-bold'/>
                         <h1 className='text-white font-bold text-xl'>100% Value Protection</h1>
                         <p className='text-gray-400 text-xs my-4'>We operate on clear performance sprints. If we do not pass the visual prototype goals agreed upon in Figma during sprint 1, we issue a full protection refund. Zero hassle.</p>
                </div>
                <div className="bg-slate-900 rounded-2xl border border-gray-600 px-10 py-5">
                    <ArrowUpLeftFromCircleIcon className='my-2 text-orange-500 w-10 h-10 font-bold'/>
                    <h1 className='text-white font-bold text-xl'>Smooth Onboarding</h1>
                    <p className='text-gray-400 text-xs my-4'>We provide complete video recordings of all visual assets hand-offs, walk students and clients through code layouts, and share clean storybook structures.</p>
                </div>
                <div className="bg-slate-900 rounded-2xl border border-gray-600 px-10 py-5">
                  <Code2 className='my-2 text-orange-500 w-10 h-10 font-bold'/>
                  <h1 className='text-white font-bold text-xl'>Predictable Milestones</h1>
                  <p className='text-gray-400 text-xs my-4'>
                    Every client gets access to an private Notion workspace detailing delivery deadlines, active coding sprints, and live staging URLs updated daily.
                  </p>
                </div>
               </div>
            </section>
    </div>
  )
}

export default Plans