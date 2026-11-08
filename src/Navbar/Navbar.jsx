import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Components/Button'
import { ArrowRight, Menu, X } from 'lucide-react'
import '../index.css'
function Navbar() {
  const [mobileMenu, setMobileMenu]=useState(false)
  const NavLinks=[
    {label:'Home',link:'/'},
    {label:'About Agency',link:'/about'},
    {label:'Services', link:'/service'},
    {label:'Selected Portfolia', link:'/portfolio'},
    {label:'Our Team',link:'/team'},
    {label:'Pricing Plans',link:'/plans'},
    {label:'Atelier Blog',link:'/blog'},
    {label:'Get in Touch',link:'/getin'}
  ]
  return (
    <div className='fixed   w-full z-100  '>
      <nav className="flex h-20 bg-gray-800/90  backdrop-blur-xl items-center justify-between px-10 md:px-0 md:justify-around text-white ">
         <div className="flex items-center gap-5">
            <div className="w-8 h-8 rounded flex justify-center font-bold items-center bg-orange-500  ">A</div>
            <div className="font-serif">
              <h1>AURA</h1>
              <p className='text-orange-500 text-xs'>ATELIER</p>
            </div>
         </div>
         <div className="hidden md:block">
          <ul className='flex gap-5 text-sm items-center space-x-5 font-serif text-gray-300'>
            {NavLinks.map((nav)=>(
              <NavLink className={({isActive})=>`py-2 ${isActive ? 'text-orange-500 font-bold border-b-2 border-orange-500':'text-gray-300 font-bold'}`} to={nav.link}>
                   <li className='max-w-15'>{nav.label}</li>
              </NavLink>
            ))}
          </ul>
         </div>
         <div className="hidden md:flex items-center gap-3 bg-orange-500 p-2 rounded">
          <Button style={'max-w-20 font-serif text-xs cursor-pointer'} label={'Consult Strategist'}/>
          <ArrowRight className='w-5 h-5'/>
         </div>
         <div className="block menu_icon md:hidden">
          {
            mobileMenu? <X onClick={()=>setMobileMenu(!mobileMenu)}/>:
          <Menu onClick={()=>setMobileMenu(!mobileMenu)}/>
          }
         </div>
      </nav>
      {
        mobileMenu&& 
      <div className="bg-gray-800/90 backdrop-blur-xl">
          <ul className='flex gap-5 flex-col text-sm items-center  font-serif text-gray-300 py-5'>
            {NavLinks.map((nav)=>(
              <NavLink onClick={()=>setMobileMenu(!mobileMenu)} className={({isActive})=>`py-2 ${isActive ? 'text-orange-500 font-bold border-b-2 border-orange-500':'text-gray-300 font-bold'}`} to={nav.link}>
                   <li className=''>{nav.label}</li>
              </NavLink>
            ))}
          </ul>
         </div>
      }
         
    </div>
  )
}

export default Navbar