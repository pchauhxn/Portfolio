import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/6e48c4d9-159c-459a-815c-a193183a6cf2" className='flex flex-col max-w-[900px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 text-2xl py-4'>Submit the form below or shoot me an email - pchauhan7289@gmail.com</p>
            </div>
            <input className='bg-[#c8c9cd] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#c8c9cd]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#c8c9cd] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact