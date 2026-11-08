import React from 'react'
import { Book, Box, Code, Code2, Database, Flower, FlowerIcon, LineChartIcon, Microchip, Search, ShoppingBag, ShoppingBagIcon, Check } from 'lucide-react'
function Service() {
  return (
    <div className='py-20'>
        <section className='w-[80%] mx-auto mt-20'>
             <div className="">
               <span className='border border-orange-700 bg-pink-100/50 px-4 py-1 rounded-2xl text-orange-500 font-mono uppercase font-semibold'>Full Capabilities Suite</span>
               <h1 className='text-3xl md:text-7xl my-4 max-w-180  font-bold'>Architecting Elite <span className='text-orange-400'>Digital</span> Architectures.</h1>
               <p className='text-gray-500 max-w-150'>We provide complete, end-to-end design and software development capabilities. From custom visual design systems to secure multi-region databases, we write the code that fuels your conversion growth.</p>
             </div>
        </section>

        <section className='w-full bg-gray-100 my-10 py-10'>
            <div className="w-[80%] mx-auto gap-5 grid grid-cols-1 md:grid-cols-3">
                <div className="bg-white p-5 rounded-2xl border border-gray-300">
                    <div className="">
                        <Code className='bg-red-300/30 w-10 h-10 p-2 text-orange-500 rounded-xl'/>
                    </div>
                    <h1 className='my-2 text-xl font-semibold'>Full-Stack Web Development</h1>
                    <p className='my-4 text-sm text-gray-500 h-20'>Custom, blazing-fast web architectures built on Next.js, React and Vite. Hand-written semantic code with instant loading speeds.</p>
                    <h1 className='font-mono uppercase text-gray-500'>Standard Stack</h1>
                    <span className='text-gray-800 my-2'>Next.js, Vite, TypeScript, Node.js</span>
                </div>
              
                <div className="bg-white p-5 rounded-2xl border border-gray-300">
                    <div className="">
                        <FlowerIcon className='bg-red-300/30 w-10 h-10 p-2 text-orange-500 rounded-xl'/>
                    </div>
                    <h1 className='my-2 text-xl font-semibold'>Brand Identity Systems</h1>
                    <p className='my-4 text-sm text-gray-500 h-20'>Crafting premium typographic scales, corporate identity palettes, unified logo systems, and comprehensive brand guidelines.</p>
                    <h1 className='font-mono uppercase text-gray-500'>Standard Stack</h1>
                    <span className='text-gray-800 my-2'>Vector Design, Brand Guidelines, Typography</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-300">
                    <div className="">
                        <Book className='bg-red-300/30 w-10 h-10 p-2 text-orange-500 rounded-xl'/>
                    </div>
                    <h1 className='my-2 text-xl font-semibold'>Luxury UI/UX Product Design</h1>
                    <p className='my-4 text-sm text-gray-500 h-20'>Interactive visual layouts designed to guide user focus naturally. Deep wireframing, high-fidelity Figma components, and custom branding.</p>
                    <h1 className='font-mono uppercase text-gray-500'>Standard Stack</h1>
                    <span className='text-gray-800 my-2'>Figma, Visual Systems, User Research</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-300">
                    <div className="">
                        <Search className='bg-red-300/30 w-10 h-10 p-2 text-orange-500 rounded-xl'/>
                    </div>
                    <h1 className='my-2 text-xl font-semibold'>Enterprise SEO Audit</h1>
                    <p className='my-4 text-sm text-gray-500 h-20'>Writing microdata schemas and structures that search engines crawl and rank instantly. We guarantee peak semantic placement.</p>
                    <h1 className='font-mono uppercase text-gray-500'>Standard Stack</h1>
                    <span className='text-gray-800 my-2'>JSON-LD, Semantic Markup, PageSpeed</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-300">
                     <div className="">
                        <ShoppingBag className='bg-red-300/30 w-10 h-10 p-2 text-orange-500 rounded-xl'/>
                    </div>
                    <h1 className='my-2 text-xl font-semibold'>Custom E-Commerce</h1>
                    <p className='my-4 text-sm text-gray-500 h-20'>Highly secure visual storefronts connected to robust payment models, inventory structures, and dynamic conversion optimization layers.</p>
                    <h1 className='font-mono uppercase text-gray-500'>Standard Stack</h1>
                    <span className='text-gray-800 my-2'>Stripe API, Node, Custom Carts, PCI</span>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-gray-300">
                     <div className="">
                        <Box className='bg-red-300/30 w-10 h-10 p-2 text-orange-500 rounded-xl'/>
                    </div>
                    <h1 className='my-2 text-xl font-semibold'>Bespoke Mobile Apps</h1>
                    <p className='my-4 text-sm text-gray-500 h-20'>Fluid responsive smartphone solutions designed with cross-platform native frameworks. Zero-flicker screen navigation.</p>
                    <h1 className='font-mono uppercase text-gray-500'>Standard Stack</h1>
                    <span className='text-gray-800 my-2'>React Native, Expo, Tailwind Native</span>
                </div>
            </div>
        </section>

        <section className='w-full bg-slate-950 '>
           <div className="grid w-[80%] mx-auto items-center grid-cols-1 md:grid-cols-3 gap-10 py-10">
             <div className="">
                <span className='uppercase text-orange-500 font-semibold'>Our Arsenal</span>
                <h1 className='font-bold  text-4xl my-2 text-white'>Our Standard Modern Stack</h1>
                <p className='text-gray-200 text-sm'>We believe that reliable software starts with world-class, tested tools. We use leading static-typing languages, fast compile engines, and modern database layouts.</p>
             </div>
             <div className="col-span-2 grid grid-cols-1 md:grid-cols-4 gap-5">
                 <div className="bg-slate-900 p-5 rounded-xl border border-gray-400">
                    <Code2 className='h-10 w-10 text-orange-500 bg-blue-950 p-2 rounded-xl'/>
                    <h1 className='my-2 font-bold text-white'>TypeScript</h1>
                    <span className='text-gray-200 text-sm'>Secure Static Typing</span>
                 </div>
                 <div className="bg-slate-900 p-5 rounded-xl border border-gray-400">
                    <Book className='h-10 w-10 text-orange-500 bg-blue-950 p-2 rounded-xl'/>
                    <h1 className='my-2 font-bold text-white'>Tailwind v4</h1>
                    <span className='text-gray-200 text-sm'>High-Speed Layouts</span>
                 </div>
                 <div className="bg-slate-900 p-5 rounded-xl border border-gray-400">
                    <Microchip className='h-10 w-10 text-orange-500 bg-blue-950 p-2 rounded-xl'/>
                    <h1 className='my-2 font-bold text-white'>Next.js/Vite</h1>
                    <span className='text-gray-200 text-sm'>Fast Compile Engines</span>
                 </div>
                 <div className="bg-slate-900 p-5 rounded-xl border border-gray-400">
                    <LineChartIcon className='h-10 w-10 text-orange-500 bg-blue-950 p-2 rounded-xl'/>
                    <h1 className='my-2 font-bold text-white'>Node.js</h1>
                    <span className='text-gray-200 text-sm'>Scalable Backends</span>
                 </div>
                 <div className="bg-slate-900 p-5 rounded-xl border border-gray-400">
                    <Database className='h-10 w-10 text-orange-500 bg-blue-950 p-2 rounded-xl'/>
                    <h1 className='my-2 font-bold text-white'>Firestore / SQL</h1>
                    <span className='text-gray-200 text-sm'>Durable Database Layers</span>
                 </div>
                 <div className="bg-slate-900 p-5 rounded-xl border border-gray-400">
                    <ShoppingBagIcon className='h-10 w-10 text-orange-500 bg-blue-950 p-2 rounded-xl'/>
                    <h1 className='my-2 font-bold text-white'>Stripe API</h1>
                    <span className='text-gray-200 text-sm'>Secure Payments Systems</span>
                 </div>
                 <div className="bg-slate-900 p-5 rounded-xl border border-gray-400">
                    <Flower className='h-10 w-10 text-orange-500 bg-blue-950 p-2 rounded-xl'/>
                    <h1 className='my-2 font-bold text-white'>Figma Pro</h1>
                    <span className='text-gray-200 text-sm'>Unified Design Systems</span>
                 </div>
                 <div className="bg-slate-900 p-5 rounded-xl border border-gray-400">
                    <Code className='h-10 w-10 text-orange-500 bg-blue-950 p-2 rounded-xl'/>
                    <h1 className='my-2 font-bold text-white'>Drizzle ORM</h1>
                    <span className='text-gray-200 text-sm'>Performance DB Queries</span>
                 </div>
             </div>
           </div>
        </section>

        <section className='w-[90%] md:w-[80%] mx-auto py-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10  items-center gap-10">
                <div className="">
                    <span className='text-orange-500 font-semibold uppercase font-mono'>Our Guarantees</span>
                    <p className='text-2xl md:text-4xl my-2 font-bold max-w-120'>Outcome-Oriented Strategic Value</p>
                    <p className='text-gray-500 my-4'>When you invest in a custom digital asset built by Aura, you aren't just buying code; you are acquiring visual authority, speed optimization, and secure conversion funnels.</p>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-3">
                            <Check className='w-5 h-5 mt-1 text-orange-500 font-bold'/>
                            <div className="">
                                <h1 className='font-bold'>Sub-300ms Server Responses</h1>
                                <p className='text-sm py-2 to-gray-600'>We bundle scripts aggressively, utilize global CDNs, and keep DOM size minimal to pass LCP scores.</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Check className='w-5 h-5 mt-1 text-orange-500 font-bold'/>
                            <div className="">
                                <h1 className='font-bold'>WCAG 2.1 AA Compliance</h1>
                                <p className='text-sm py-2 to-gray-600'>We test relative font contrast ratios and keyboard-access routes, unlocking accessibility markets.</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Check className='w-5 h-5 mt-1 text-orange-500 font-bold'/>
                            <div className="">
                                <h1 className='font-bold'>Scalable Component Blocks</h1>
                                <p className='text-sm py-2 to-gray-600'>Our clean, semantic components are organized modularly, saving hundreds of maintenance hours.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="bg-gray-100  p-6 md:p-10 rounded-2xl shadow-2xl">
                      <span className='uppercase text-orange-500 font-semibold'>Standard Client Conversion</span>
                      <h1 className='text-xl md:text-2xl  py-2 font-bold'>Measuring Tangible ROI</h1>
                      <ul className='space-y-5 mt-5 '>
                        <li className='flex justify-between px-5 bg-white py-3 rounded-xl'><span className='text-gray-500'>E-Commerce Checkout Lift</span><p className='text-orange-500 font-bold'>+42%</p></li>
                        <li className='flex justify-between px-5 bg-white py-3 rounded-xl'><span className='text-gray-500'>Organic Search Traffic Growth</span><p className='text-orange-500 font-bold'>+124%</p></li>
                        <li className='flex justify-between px-5 bg-white py-3 rounded-xl'><span className='text-gray-500'>Page Speed Index Score</span><p className='text-orange-500 font-bold'>100/100</p></li>
                      </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Service