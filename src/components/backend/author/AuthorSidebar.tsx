import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  AiFillDollarCircle } from 'react-icons/ai'
import { BsFillBookmarksFill } from 'react-icons/bs'
import {MdAccountCircle} from 'react-icons/md'

export default function AuthorSidebar() {
    const [isActive, setIsActive] = useState('createnote');

    return (
        <div className='max-w-full h-[752px] bg-[#FFFFFF] text-[#37474F] font-Inter font-medium grid content-between rounded-lg'>
            <div>
                <Link href="/">
                    <div className=' relative w-[148px] h-[37px] cursor-pointer'>
                        <Image src="/logo2.png" alt='logo' layout='fill' />
                    </div>
                </Link>
                <hr className='my-5' />
                <Link href="/AuthorDashboard/CreateNote" >
                    <div className={`${isActive == 'createnote' ? 'my-1 w-[172px] h-[40px] rounded-[10px] text-white bg-theme flex items-center  p-2 cursor-pointer space-x-3': 'my-1 w-[172px] h-[40px] rounded-[10px] text-black flex items-center  p-2 cursor-pointer space-x-3'}` } onClick={()=>setIsActive('createnote')} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <span>Create Note</span>
                    </div>
                </Link>
                <Link href="/AuthorDashboard/MyNote">
                    <div className={`${isActive == 'mynote' ? 'my-1 w-[172px] h-[40px] rounded-[10px] text-white bg-theme flex items-center  p-2 cursor-pointer space-x-3': 'my-1 w-[172px] h-[40px] rounded-[10px] text-black flex items-center  p-2 cursor-pointer space-x-3'}` } onClick={()=>setIsActive('mynote')} >
                        <BsFillBookmarksFill />
                        <span>My Note</span>
                    </div>
                </Link>
                <Link href="/AuthorDashboard/MyAccount">
                    <div className={`${isActive == 'myaccount' ? 'my-1 w-[172px] h-[40px] rounded-[10px] text-white bg-theme flex items-center  p-2 cursor-pointer space-x-3': 'my-1 w-[172px] h-[40px] rounded-[10px] text-black flex items-center  p-2 cursor-pointer space-x-3'}` } onClick={()=>setIsActive('myaccount')}>

                        <MdAccountCircle />
                        <span>My Account</span>

                    </div>
                </Link>
                <Link href="/AuthorDashboard/Transition">
                    <div className={`${isActive == 'transition' ? 'my-1 w-[172px] h-[40px] rounded-[10px] text-white bg-theme flex items-center  p-2 cursor-pointer space-x-3': 'my-1 w-[172px] h-[40px] rounded-[10px] text-black flex items-center  p-2 cursor-pointer space-x-3'}` } onClick={()=>setIsActive('transition')}>
                        <AiFillDollarCircle />
                        <span>Transition</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link href="/">
                    <div className=' my-1 w-[172px] h-[40px] rounded-[10px] text-theme  border-[1px] border-temetext   flex items-center  p-2 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[17px] w-[17px] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span>logout</span>
                    </div>
                </Link>
                <span className='text-xs font-Roboto text-center text-[#ABABAB]'>Copyright © 2022 NoteGhar - All rights reserved. </span>
            </div>
        </div>
    )
}