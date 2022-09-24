import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillFolderAdd, AiFillDollarCircle } from 'react-icons/ai'
import { RiBookReadFill } from 'react-icons/ri'
import { BsBookmarks } from 'react-icons/bs'



export default function Sidebar() {
    const [isActive, setIsActive] = useState(false)

    const handleOnClick = () => { setIsActive(!isActive) }
    return (
        <div className=' max-w-[220px] h-[752px] bg-[#FFFFFF] text-[#37474F] p-8 font-Inter font-medium grid content-between'>
            <div>
                <Link href="/">
                    <div className=' relative w-[148px] h-[37px] cursor-pointer'>
                        <Image src="/logo2.png" alt='logo' layout='fill' />
                    </div>
                </Link>
                <hr className='my-5' />
                <Link href="dashboard" >
                    <div className={`my-1 rounded-[10px] text-white bg-theme flex items-center  p-2 cursor-pointer space-x-3 `} onClick={handleOnClick}>
                        <BsBookmarks />
                        <span>Notes</span>
                    </div>
                </Link>
                <Link href="Authors">
                    <div className={` my-1   rounded-[10px]   flex items-center  p-2 cursor-pointer space-x-3 `} >
                        <AiFillFolderAdd />
                        <span>Authors</span>    
                    </div>
                </Link>
                <Link href="Readers">
                    <div className='my-1   rounded-[10px]  flex items-center  p-2 cursor-pointer space-x-3'>

                        <RiBookReadFill />
                        <span>Readers</span>

                    </div>
                </Link>
                <Link href="Transitions">
                    <div className='my-1   rounded-[10px]  flex items-center  p-2 cursor-pointer space-x-3'>
                        <AiFillDollarCircle />
                        <span>Transition</span>
                    </div>
                </Link>
                <Link href="Settings">
                    <div className=' my-3  rounded-[10px]  flex items-center  p-2 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[17px] w-[17px] mr-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        <span>Settings</span>
                    </div>
                </Link>
            </div>
            <div>
                <Link href="/">
                    <div className=' my-1  rounded-[10px] text-theme  border-[1px] border-temetext   flex items-center  p-2 cursor-pointer'>
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
