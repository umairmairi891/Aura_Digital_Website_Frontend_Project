import React from 'react'
import { Clock, LocationEdit, Mail, Phone } from 'lucide-react'
import Button from '../Components/Button'
function Getin() {
  return (
    <div className='py-10'>
      <section className='w-[80%] mx-auto mt-30'>
        <div className="flex flex-col mt-10 items-center text-center">
          <span className=' bg-gray-100 px-4 py-1 rounded-2xl text-black font-mono uppercase font-semibold'>Project Intake
          </span>
          <h1 className='text-3xl md:text-7xl my-4 max-w-200  font-bold'>Let's Craft Something. <span className='text-orange-500'>Remarkable</span>

          </h1>
          <p className='text-gray-500 max-w-180'>Initiate a custom consultation request. Our Strategic Director and Senior Frontend Architect will audit your existing platform and map out a free 30-minute growth roadmap.</p>
        </div>
      </section>

      <section className='py-10'>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 gap-10 w-[80%] mx-auto">
          <div className="">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-400 p-10">
              <span className='uppercase text-orange-500 font-mono'>Brief Us</span>
              <h1 className='py-4 font-semibold text-2xl'>Commission inquiry Form</h1>
              <form action="" className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10' >
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="" className='uppercase text-gray-600 font-mono my-3'>Your Full Name</label>
                  <input className='bg-gray-100 border border-gray-500 px-4 py-2 my-2 rounded-xl' type="text" placeholder='John Doe' />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="" className='uppercase text-gray-600 font-mono my-3'>Business Email Address</label>
                  <input className='bg-gray-100 border border-gray-500 px-4 py-2 my-2 rounded-xl' type="text" placeholder='name@company.com' />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="" className='uppercase text-gray-600 font-mono my-3'>Company Name</label>
                  <input className='bg-gray-100 border border-gray-500 px-4 py-2 my-2 rounded-xl' type="text" placeholder='Stripe Inc' />
                </div>
                <div className="">
                  <label htmlFor="" className='uppercase text-gray-600 font-mono my-3'>Estimated Project Budget</label>
                  <input className='bg-gray-100 border border-gray-500 px-4 py-2 my-2 rounded-xl' type="text" placeholder='John Doe' />
                </div>
                <div className="col-span-2   w-full">
                  <label className='uppercase text-gray-600 font-mono my-3' htmlFor="">Project Brief & Conversion Goals</label>
                  <textarea  className='bg-gray-100 w-53 md:w-full border border-gray-500 px-4 py-2  my-2 rounded-xl' name="" id="" placeholder='Detail .....' />
                </div>
                <div className="col-span-2">
                  <Button style={' bg-orange-500 text-xs md:text-sm rounded flex justify-center gap-5 px-5 py-3 text-white items-center font-semibold cursor-pointer w-full '} label={'Submit Inquiry Proposal'} icon={<Mail />} />
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-10 ">
            <div className="bg-slate-900 p-10 rounded-2xl">
              <h1 className='text-xl md:text-2xl font-semibold my-3 text-white'>Atelier Headquarters</h1>
              <div className="flex gap-5 my-3 text-gray-400">
                <LocationEdit className='text-orange-500 w-10 h-10' />
                <p>Suite 450, 256 Sutter St
                  San Francisco, CA 94108</p>
              </div>
              <div className="flex gap-5 my-3 text-gray-400">
                <Mail className='text-orange-500'/>
                <p>hello@aura-atelier.com</p>
              </div>
              <div className="flex gap-5 my-3 text-gray-400">
                <Phone className='text-orange-500'/>
                <p>+1 (415) 890-4102</p>
              </div>
            </div>
            <div className="bg-white p-8 border shadow-2xl rounded-2xl border-gray-600">
              <div className="flex gap-5 items-center">
                <Clock className='text-orange-500 w-5 h-5'/>
                <h1 className='text-lg md:text-xl font-semibold'>Strategic Active Hours</h1>
              </div>
              <p className='my-3 text-sm text-gray-500'>Our engineering team operates under structured deep-work timeframes, prioritizing active client sprints. Communication response times:</p>
              <ul className='font-mono text-gray-500 space-y-3'>
                <li>• Inquiry Response SLA: <span> 2 hours</span></li>
                <li>• Standup Hours: 9:00 AM - 10:00 AM PST</li>
                <li>• Deep Sprint Hours: 10:00 AM - 4:00 PM PST</li>
              </ul>
            </div>
            <div className="bg-slate-900 text-white flex flex-col items-center space-y-5 p-10 rounded-2xl relative ">
              <div className=" top-10">

              <LocationEdit className='text-orange-500 w-6 h-6 icon_animation '/>
              </div>
              <h1>Interactive SF Map Staging</h1>
              <span className='text-sm  text-gray-500 font-mono'>Sutter St Latitude 37.7891• Longitude -122.4042</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Getin