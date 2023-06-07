import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Piyush Chauhan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a web developer with expertise in ML algorithms.
                 With a passion for both web development and AI, I create dynamic and personalized web applications. 
                 From supervised to unsupervised learning, my projects
                 demonstrate seamless integration of ML techniques, delivering innovative user experiences. 
                 Explore and discover the intersection of web development and AI in my portfolio.</p>  
                 <br/>
                 <p>
                 Let's connect and collaborate to create innovative solutions together!
                 </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
