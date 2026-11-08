import React, { useState } from 'react'
import { blog } from '../data'
import { BookOpen, Calendar, Clock, Mail } from 'lucide-react'
import Button from '../Components/Button'
function Blog() {
  const [blogFilter, setBlogFilter] = useState('All')
  const blogcategory = ['All', 'Design Systems', 'Development', 'Brand Strategy']
  const blogFilteredItem = blog.filter((b) => {
    let cat = b.category.toLowerCase() === blogFilter.toLowerCase() || blogFilter === 'All'
    return cat
  })
  return (
    <div className='py-20'>
      <section className='w-[80%] mx-auto mt-30'>
        <div className="flex flex-col mt-10 items-center text-center">
          <span className=' bg-gray-100 px-4 py-1 rounded-2xl text-black font-mono uppercase font-semibold'>Atelier Publications
          </span>
          <h1 className='text-3xl md:text-7xl my-4 max-w-180  font-bold'>Atelier <span className='text-orange-500'>Insights</span>
          </h1>
          <p className='text-gray-500 max-w-180'>Deep dives into visual layout theory, golden ratio typography scales, accessible semantic HTML5 outlines, and dark-theme color psychology.</p>
        </div>
      </section>
      <section className='py-10 w-full'>
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="">
            <ul className='flex overflow-x-auto  gap-4 md:gap-10 md:items-center md:justify-center'>
              {blogcategory.map((b) => (
                <li onClick={() => setBlogFilter(b)} className={`font-mono border border-gray-400 px-4 py-1 text-xs md:text-sm flex justify-center items-center rounded-2xl cursor-pointer ${b === blogFilter ? 'bg-orange-500 border-none text-white' : 'bg-white'}`}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="mt-15 grid grid-cols-1 md:grid-cols-3 gap-10">
            {
              blogFilteredItem.map((b) => (
                <div className="bg-white border border-gray-300 px-5 py-8 rounded-2xl shadow-2xl">
                  <span className='bg-pink-100/50 px-4 py-1 rounded-xl uppercase text-orange-500 font-mono font-semibold'>{b.category}</span>
                  <h1 className='py-3 font-semibold text-xl '>{b.title}</h1>
                  <p className='text-gray-600 text-sm py-3'>{b.description}</p>
                  <div className="my-3 w-full border border-y-gray-100"></div>
                  <div className="flex justify-between mt-5">
                    <p className='font-semibold'>{b.name}</p>
                    <span className='flex text-gray-400 items-center gap-3'><Clock className='w-5 h-5' />{b.time}  min read</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section className='w-full py-10'>
        <div className='w-[90%] md:w-[80%] px-5 md:px-20 mx-auto items-center grid grid-cols-1 md:grid-cols-4 py-10 bg-slate-900 rounded-2xl'>
          <div className="col-span-3">
            <span className='bg-slate-800 border border-orange-500 text-sm text-orange-500 px-4 py-1 rounded-2xl'>FEATURED PUBLICATION</span>
            <h1 className='text-white font-bold text-2xl md:text-4xl max-w-150 my-4'>The Architecture of Awwwards-Grade Web Animations</h1>
            <p className='text-gray-400 max-w-150'>Animations should never look cheap. We discuss why frame-budgeting, easing curves, and GPU layer isolation are the true hallmarks of professional high-end interactions. Learn how to code smooth floating card lifts without dropping frame-rates.</p>
            <div className="flex gap-5 md:gap-10 text-gray-400 font-mono mt-5">
              <span className='flex gap-3 items-center'><Calendar className='w-4 h-4' />July 11, 2026</span>
              <p className='flex gap-3 items-center'><Clock className='w-4 h-4' />12 min read</p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="bg-slate-800 rounded-2xl  p-5">
              <p className='text-xs mb-5 text-gray-400'>easing-curves.css</p>
              <div className="w-full bg-gray-700 h-[1px] border-gray-700"></div>
              <div className="flex flex-col h-30 my-5 justify-center">   
                <span className='text-orange-500 text-xs'>@keyframes card-lift</span>
                <p className='text-xs text-gray-300 mt-2 font-mono'>transform: translateY(-8px);</p>
                <p className='text-xs text-gray-300 mt-2 font-mono'>transition: transform 0.4s cubic-bezier(0.16, 1,0.3,1)</p>
              </div>

              <div className="w-full h-[1px] bg-gray-700 border-gray-700"></div>
              <p className='text-xs text-gray-400 my-3'>GPU isolated composite rendering</p>
            </div>
          </div>
        </div>
      </section>


      <section className='py-10 w-full'>
        <div className="bg-slate-900 rounded-2xl flex flex-col items-center w-[90%] md:w-[50%] p-10 text-start md:text-center mx-auto">
          <BookOpen className='w-10 h-10 text-orange-500 font-bold'/>
          <h1 className='text-2xl md:text-4xl font-bold my-3 text-white'>The Design System Academy</h1>
          <p className='text-gray-500 text-sm max-w-130 my-3'>Get our complete, detailed interactive HTML5 & CSS3 layout handbook containing spacing, typography grids, and color rules. Over 12,000 developers read our newsletters monthly.</p>
          <div className="flex flex-col md:flex-row gap-5 mt-4">
            <input type="text" className='bg-slate-950 text-white border border-gray-500 px-5 md:px-10 py-1 rounded-2xl  focus:border-none' placeholder='Enter Your Email'/>
            <Button style={'flex bg-orange-500 gap-5 text-white items-center px-4 py-2 font-bold cursor-pointer hover:bg-orange-600 rounded-xl'} label={'Get Handbook'} icon={<Mail/>}/>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Blog