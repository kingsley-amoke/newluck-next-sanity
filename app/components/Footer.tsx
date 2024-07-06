import { Facebook, Instagram, LinkedinIcon, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full lg:px-12'>
        <div className='lg:border border-b-slate-400 flex flex-col gap-3 justify-center items-center py-2'>
            <p className='uppercase font-bold text-xl'>Follow us</p>
            <div className='flex gap-10'>
                <Facebook size={38}/>
                <Twitter size={38}/>
                <Instagram size={38}/> 
                <LinkedinIcon size={38}/>
                <Youtube size={38}/>

            </div>
        </div>
        <div className='lg:border border-b-slate-400 flex flex-col lg:flex-row justify-evenly items-center lg:items-start'>
            <div className='py-2 w-1/2 lg:w-1/5 h-full'>
                <h3 className='py-2'>Support</h3>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-gray-400 '>Service Hours:</p>
                    <p className='text-sm'>24/7</p>
                    <p className='text-sm text-gray-400 '>Phone:</p>
                    <p className='text-sm'>+2345675w6543</p>
                    <p className='text-sm text-gray-400 '>Email:</p>
                    <p className='text-sm'>info@newluck.com.ng</p>
                    <p className='text-sm text-gray-400 '>Whatsapp:</p>
                    <p className='text-sm'>+2344635453</p>
                </div>
            </div>
            <div className='py-2  w-1/2 lg:w-1/5 h-full'>
                <h3 className='py-2'>About us</h3>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-gray-400 '>About us</p>
                    
                    <p className='text-sm text-gray-400 '>Where to buy</p>
                </div>
            </div>
            <div className='py-2 w-1/2 lg:w-1/5 h-full'>
                <h3 className='py-2'>Terms</h3>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-gray-400 '>Warranty</p>
                    
                    <p className='text-sm text-gray-400 '>Shipping and Delivery</p>
                    <p className='text-sm text-gray-400 '>Terms and Conditions</p>
                    
                    <p className='text-sm text-gray-400 '>Return and Refund Policy</p>
                    <p className='text-sm text-gray-400 '>Privacy Policy</p>
                </div>
            </div>
            <div className='py-2  w-1/2 lg:w-1/5 h-full'>
                <h3 className='py-2'>Get help</h3>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-gray-400 '>Track order</p>
                    
                    <p className='text-sm text-gray-400 '>Online shopping guide</p>
                    <p className='text-sm text-gray-400 '>Contact us</p>
                    
                    <p className='text-sm text-gray-400 '>Product Authentication</p>
                   
                </div>
            </div>
        </div>
        <div className='py-5 lg:px-32 flex flex-col md:flex-row justify-between items-center w-full'>
            <p>&copy; NewLuck</p>
            <Link href='https://kingsleyamoke.com.ng'>Designed and Developed by Smoq Dev</Link>
        </div>
    </div>
  )
}

export default Footer