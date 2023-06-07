import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-black'>
      <br/><br/>
      {/* Container */}
      <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-6xl font-bold text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Piyush Chauhan
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Web Developer and an ML Enthusiast.
        </h2>
        {/* <p className='text-[#f1f2f4a4] py-4 max-w-[700px]'>Hello and welcome to my portfolio! I am a web developer with a strong grasp of ML algorithms. 
        With a passion for crafting intelligent web applications, I leverage my expertise in both web development and AI to create dynamic user experiences. 
        From implementing supervised learning for predictive models to employing unsupervised learning for pattern recognition, 
        I have successfully integrated ML algorithms into various projects. My portfolio showcases the seamless fusion of cutting-edge ML techniques and web development, 
        resulting in innovative and personalized solutions. 
        Join me on this journey as we explore the limitless possibilities at the intersection of web development and ML algorithms.
        </p> */}
        
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <Link to='work' smooth={true} duration={500}>
            View Work
          </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
