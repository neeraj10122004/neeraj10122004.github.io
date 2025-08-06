import { useRef, useState , useEffect } from 'react'
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
  useEffect(() => {
  const container = document.querySelector('.main');
  const children = container?.children || [];

  Array.from(children).forEach((child) => {

    const blocks = document.querySelectorAll('.block-scroll-animate');
  blocks.forEach(block => block.classList.add('scroll-animate'));
  });
}, []);
  return (
    <>
    <div className='flex flex-col items-center justify-center bg-black'>
      <div className='main max-w-[1000px] w-full'>
        <div ref={Home} className='Home text-white bg-black w-full h-screen'>
          <div className='Navbar flex justify-around not-sm:hidden'>
            <div className='cursor-pointer p-2' onClick={()=>{Home.current?.scrollIntoView({ behavior: 'smooth' });}} >Home</div>
            <div className='cursor-pointer p-2' onClick={()=>{About.current?.scrollIntoView({ behavior: 'smooth' });}} >About</div>
            <div className='cursor-pointer p-2' onClick={()=>{Projects.current?.scrollIntoView({ behavior: 'smooth' });}} >Project</div>
            <div className='cursor-pointer p-2' onClick={()=>{OpenSource.current?.scrollIntoView({ behavior: 'smooth' });}} >Contributions</div>
            <div className='cursor-pointer p-2' onClick={()=>{Publications.current?.scrollIntoView({ behavior: 'smooth' });}} >Publications</div>
            <div className='cursor-pointer p-2' onClick={()=>{Blogs.current?.scrollIntoView({ behavior: 'smooth' });}} >Blog</div>
          </div>
          <div className="Data flex items-center justify-center p-20 gap-6 flex-wrap">
            <div className=" block-scroll-animate Image">
              <CgProfile className="w-60 h-60 p-2 rounded-full bg-black text-white" />
            </div>
            <div className="Info">
              <h2 className="block-scroll-animate text-3xl font-bold">Your Name</h2>
              <p className="block-scroll-animate text-gray-600 mt-1">This is a short bio about you. Maybe what you do, or what you love.</p>
              <div className="flex gap-4 mt-4">
                <a href="https://github.com/yourhandle" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="block-scroll-animate  w-10 h-10 p-2 rounded-full bg-transparent hover:bg-blue-600 hover:text-white transition" />
                </a>
                <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="block-scroll-animate w-10 h-10 p-2 rounded-full bg-transparent hover:bg-blue-600 hover:text-white transition" />
                </a>
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className=" block-scroll-animate w-10 h-10 p-2 rounded-full bg-transparent hover:bg-blue-400 hover:text-white transition" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div ref={About} className='About text-white bg-black w-full h-screen'>
  <div className="timeline-container p-10 space-y-10">
    <div className="block-scroll-animate timeline-item">
      <div className="date text-blue-400 font-bold">2020</div>
      <div className="content text-white">Started B.Tech in Computer Science at XYZ University.</div>
    </div>
    <div className="block-scroll-animate timeline-item">
      <div className="date text-blue-400 font-bold">2022</div>
      <div className="content text-white">Interned at ABC Corp as a Full Stack Developer.</div>
    </div>
    <div className="block-scroll-animate timeline-item">
      <div className="date text-blue-400 font-bold">2023</div>
      <div className="content text-white">Contributed to multiple open source projects and published a research paper.</div>
    </div>
    <div className="block-scroll-animate timeline-item">
      <div className="date text-blue-400 font-bold">2024</div>
      <div className="content text-white">Started exploring AI, LLMs, and building experimental tools.</div>
    </div>
    <div className="block-scroll-animate timeline-item">
      <div className="date text-blue-400 font-bold">2024</div>
      <div className="content text-white">Started exploring AI, LLMs, and building experimental tools.</div>
    </div>
    <div className="block-scroll-animate timeline-item">
      <div className="date text-blue-400 font-bold">2024</div>
      <div className="content text-white">Started exploring AI, LLMs, and building experimental tools.</div>
    </div>
    <div className="block-scroll-animate timeline-item">
      <div className="date text-blue-400 font-bold">2024</div>
      <div className="content text-white">Started exploring AI, LLMs, and building experimental tools.</div>
    </div>
    <div className=" block-scroll-animate timeline-item">
      <div className="date text-blue-400 font-bold">2024</div>
      <div className="content text-white">Started exploring AI, LLMs, and building experimental tools.</div>
    </div>
  </div>
</div>

        <div ref={Projects} className='block-scroll-animate Projects text-white bg-black w-full h-screen'>
          project
        </div>
        <div ref={OpenSource} className='block-scroll-animate OpenSource text-white bg-black w-full h-screen'>
          opensource
        </div>
        <div ref={Publications} className='block-scroll-animate Publications text-white bg-black w-full h-screen'>
          publications
        </div>
        <div ref={Blogs} className='block-scroll-animate Blogs text-white bg-black w-full h-screen'>
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
