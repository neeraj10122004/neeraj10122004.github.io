import { useRef, useState } from 'react'
import { FaChevronUp } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
        <div ref={Home} className='Home text-white bg-black w-full'>
          <div className='Navbar flex justify-around not-sm:hidden'>
            <div className='cursor-pointer p-2' onClick={()=>{Home.current?.scrollIntoView({ behavior: 'smooth' });}} >Home</div>
            <div className='cursor-pointer p-2' onClick={()=>{About.current?.scrollIntoView({ behavior: 'smooth' });}} >About</div>
            <div className='cursor-pointer p-2' onClick={()=>{Projects.current?.scrollIntoView({ behavior: 'smooth' });}} >Project</div>
            <div className='cursor-pointer p-2' onClick={()=>{OpenSource.current?.scrollIntoView({ behavior: 'smooth' });}} >Contributions</div>
            <div className='cursor-pointer p-2' onClick={()=>{Publications.current?.scrollIntoView({ behavior: 'smooth' });}} >Publications</div>
            <div className='cursor-pointer p-2' onClick={()=>{Blogs.current?.scrollIntoView({ behavior: 'smooth' });}} >Blog</div>
          </div>
          <div className="Data flex items-center justify-center p-6 gap-6 flex-wrap">
            <div className="Image">
              <CgProfile className="w-40 h-40 p-2 rounded-full bg-black text-white" />
            </div>
            <div className="Info">
              <h2 className="text-3xl font-bold">Your Name</h2>
              <p className="text-gray-600 mt-1">This is a short bio about you. Maybe what you do, or what you love.</p>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-10 h-10 p-2 rounded-full bg-transparent hover:bg-blue-600 hover:text-white transition" />
                </a>
                <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-10 h-10 p-2 rounded-full bg-transparent hover:bg-blue-600 hover:text-white transition" />
                </a>
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="w-10 h-10 p-2 rounded-full bg-transparent hover:bg-blue-400 hover:text-white transition" />
                </a>
              </div>
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
