import { Globe, LocationEdit, Mail, Phone } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../Components/Input'

function Footer() {
  const NavLinks = [
    { label: 'AgencyHomePage', link: '/' },
    { label: 'Company Story', link: '/about' },
    { label: 'Capabilities', link: '/services' },
    { label: 'SelectedWorks', link: '/portfolio' },
    { label: 'Meet Visionaries', link: '/team' },
    { label: 'Investment Plans', link: '/plans' },
    { label: 'Atelier Insight', link: '/blog' },
    { label: 'Consultation Form', link: '/getin' }
  ]
  return (
    <div className='w-full h-auto'>
      <footer className='bg-gray-800 h-auto p-10'>
        <div className="w-[90%] border-b border-gray-400 py-5 mx-auto gap-10 md:gap-5 grid grid-cols-1  md:grid-cols-4">
          <div className="">
            <div className="flex items-center gap-5 text-white">
              <div className="w-8 h-8 rounded flex justify-center font-bold items-center bg-orange-500  ">A</div>
              <div className="font-serif">
                <h1 className='font-bold'>AURA</h1>
                <p className='text-orange-500 text-xs'>ATELIER</p>
              </div>
            </div>
            <div className="py-5 text-gray-300 font-serif text-sm"><p>Bespoke luxury design combined with semantic, highly performant engineering. We build world-class digital products that secure market dominance.</p></div>
            <div className="flex items-center justify-between text-sm  text-gray-400">
              <p className='hover:text-orange-500'>Awwards SOTD</p>
              <p className='px-4 hover:text-orange-500'>CSSDA Developer</p>
            </div>
          </div>
          <div className="">
            <h1 className='uppercase text-orange-500 font-semibold mb-4'>Sitemap Architecture</h1>
            <ul className='text-gray-300  text-sm gap-5 '>
              {NavLinks.map((link) => (
                <Link to={link.link}>
                  <li className='py-1'>{link.label}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="px-0 md:px-4 ">
            <h1 className='uppercase text-orange-500 font-semibold mb-4'>Global Headquarters</h1>
            <div className="flex gap-3 my-3 ">
              <LocationEdit className='text-orange-500' />
              <p className='text-gray-300 text-sm'>Suite 450, 256 Sutter St
                San Francisco, CA 94108
              </p>
            </div>
            <div className="flex gap-3 my-3 ">
            <Mail className='text-orange-500'/>
            <p className='text-gray-300 text-sm'>hello@aura-atelier.com</p>
            </div>
            <div className="flex gap-3 my-3 ">
            <Phone className='text-orange-500'/>
            <p className='text-gray-300 text-sm'>+1 (415) 890-4102</p>
            </div>
            <div className="flex gap-3 my-3 ">
            <Globe className='text-orange-500'/>
            <p className='text-gray-300 text-sm'>www.aura-atelier.com</p>
            </div>
          </div>
          <div className="">
          <h1 className='uppercase text-orange-500 font-semibold mb-4'>Atelier newsletter</h1>
          <p className='text-gray-300 text-sm py-4' >Subscribe to receive premium visual assets, HTML5 layouts tutorials, and digital strategy guides. Zero spam.</p>
          <div className="bg-gray-700 hover:border border-orange-500 text-white w-full justify-around rounded flex items-center">
            <Input style={'px-4  py-1 outline-none border-none'} placeholder={'name@business.com'}/>
            <button className='bg-orange-500 cursor-pointer my-1 rounded p-1'><Mail className='text-white'/></button>
          </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto my-8 justify-between flex flex-col md:flex-row gap-10 md:gap-0">
         <div className="text-sm font-[Poppins] text-white">
         © 2026 Aura Creative Digital Atelier LLC. Built with premium design frameworks for professional learning.
         </div>
         <div className="flex text-gray-400 gap-5 text-sm">
         <p className='hover:text-orange-500'>HTML5 Spec</p>
         <p className='hover:text-orange-500'>CSS3 Grid</p>
         <p className='hover:text-orange-500'>Accessibility</p>
         </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer