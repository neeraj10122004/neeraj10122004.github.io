import { useRef, useState } from 'react'
import { FaChevronUp } from "react-icons/fa";

function App() {
  const Home = useRef();
  const About = useRef();
  const Projects = useRef();
  const OpenSource = useRef();
  const Publications = useRef();
  const Blogs = useRef();
  return (
    <>
    <div className='flex flex-col items-center justify-center bg-black'>
      <div className='max-w-[1000px] w-full'>
        <div ref={Home} className='Home text-white bg-black w-full h-screen'>
          <div className='Navbar flex justify-around not-sm:hidden'>
            <div className='cursor-pointer p-2' onClick={()=>{Home.current?.scrollIntoView({ behavior: 'smooth' });}} >Home</div>
            <div className='cursor-pointer p-2' onClick={()=>{About.current?.scrollIntoView({ behavior: 'smooth' });}} >About</div>
            <div className='cursor-pointer p-2' onClick={()=>{Projects.current?.scrollIntoView({ behavior: 'smooth' });}} >Project</div>
            <div className='cursor-pointer p-2' onClick={()=>{OpenSource.current?.scrollIntoView({ behavior: 'smooth' });}} >Contributions</div>
            <div className='cursor-pointer p-2' onClick={()=>{Publications.current?.scrollIntoView({ behavior: 'smooth' });}} >Publications</div>
            <div className='cursor-pointer p-2' onClick={()=>{Blogs.current?.scrollIntoView({ behavior: 'smooth' });}} >Blog</div>
          </div>
          home
          <div className='Data'>
            <div className='Image'>

            </div>
            <div className='Info'>

            </div>
          </div>
        </div>
        <div ref={About} className='About text-white bg-black w-full h-screen'>
          about
        </div>
        <div ref={Projects} className='Projects text-white bg-black w-full h-screen'>
          project
        </div>
        <div ref={OpenSource} className='OpenSource text-white bg-black w-full h-screen'>
          opensource
        </div>
        <div ref={Publications} className='Publications text-white bg-black w-full h-screen'>
          publications
        </div>
        <div ref={Blogs} className='Blogs text-white bg-black w-full h-screen'>
          blogs
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full flex justify-center bg-transparent p-3 shadow-md z-50">
        <FaChevronUp onClick={()=>{Home.current?.scrollIntoView({ behavior: 'smooth' });}} className='w-7 h-7 p-1 rounded-full bg-white' />
      </div>
    </div>
    </>
  )
}

export default App
