import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Edit from '../svg icons/Edit';
import Eye from '../svg icons/Eye';



export default function ReaderNotedetails() {
  return (
    <div className=''>
        <div className='bg-theme p-3 rounded-t-[5px] flex items-center justify-between text-white'>
            <div className='flex items-center space-x-3'>
                <p> My Note</p>
                <div className='bg-white rounded-[50%] w-2 h-2'></div>
                <p>Note details</p>
            </div>
            <div className='flex'>
                <div className='flex'>
                    <Eye /><span>View note</span>
                </div>
            </div>
        </div>
        <div className='flex items-start space-x-5  bg-white'>
            <div className=' w-[650px] xl:w-[804px] h-full p-4 dashboard-border font-Inter font-normal text-[#263238]  '>
                <div className='flex border-b-[1px] border-[#E0E0E0] pb-2'>
                    <p>Note title</p>
                    <p>: Computer science</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Category</p>
                    <p>: Computer</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Price of note</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className=' flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Duration</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p> Note Commission </p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>note status</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Reader</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex border-b-[1px] border-[#E0E0E0] py-2'>
                    <p>Subscription</p>
                    <p>: Mr John Deo</p>
                </div>
                <div className='flex pt-2'>
                    <p>date of publication</p>
                    <p>: Mr John Deo</p>
                </div>


            </div>
        </div>

    </div>
  )
}
