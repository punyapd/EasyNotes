import React from 'react'
import Link from 'next/link'
import Edit from '../../svg icons/Edit'
import Eye from '../../svg icons/Eye'

export default function Notedetail1() {
  return (
    <div>
       <div className='bg-theme  w-full p-3 rounded-t-[5px] flex items-center justify-between text-white'>
          <div className='flex items-center justify-between  '>
                  <Link href="Authors">
                      <h2 className='text-[#F0F0F0]'>My Notes </h2>
                  </Link>
                  <div className=' mx-2 w-2 h-2  bg-white rounded-[50%]'></div>
                  <Link href="Notedetails">
                      <span>Note details</span>
                  </Link>
          </div>
          <div className='flex space-x-4'>
              <div className='flex items-center'>
                  <Edit />
                  <p>Edit details</p>
              </div>
              
              <div className='flex'>
                  <Eye />
                  <p>View Note</p>
              </div>
          </div>
       </div>
      <div className=' w-full  p-4 dashboard-border font-Inter font-normal text-[#263238]  '>
                <div className='flex border-b-[1px] border-[#E0E0E0] pb-2'>
                    <p>Full Name</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Email</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Phone</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className=' flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Address</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Role</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Date of Joining</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Reader</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex pt-2'>
                    <p>Subscriptions</p>
                    <p>: Mr John Deo</p>
                </div>


            </div>
    </div>
  
    )
}
