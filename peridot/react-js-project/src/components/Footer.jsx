import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black'>
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
      <div>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>PERIDOT . </h1>
      <p className='py-4'>Peridot, an online stock website, provides a user-friendly platform for investors to engage in seamless stock trading. With real-time market data and analytical tools, Peridot empowers users to make informed investment decisions and navigate the dynamic world of stocks.</p>
      
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-[#00df9a]'>We are Peridot</h6>
        <ul>
            <li className='py-2 text-sm'>About US</li>
            <li className='py-2 text-sm'>Resources</li>
            <li className='py-2 text-sm'>Contact US</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#00df9a]'>What we do</h6>
        <ul>
            <li className='py-2 text-sm'>Teach</li>
            <li className='py-2 text-sm'>Design</li>
            <li className='py-2 text-sm'>Team Augmentation</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#00df9a]'>Follow US</h6>
        <ul>
           <li className='py-2 text-sm'> <FaFacebookSquare size={30} /></li>
           <li className='py-2 text-sm'>  <FaInstagram size={30} /></li>
           <li className='py-2 text-sm'>  <FaTwitterSquare size={30} /></li>
        </ul>
    </div>
    
      </div>
    </div>
    </div>
  )
}

export default Footer
