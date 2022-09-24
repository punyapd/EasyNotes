import React from 'react'
import Image from 'next/image'

const authors = [
    {
        name: "Mr Johne Doe",
        membershipDate: "2020",
        description: "Lorem Ipsum is simply at dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."

    },
    {
        name: "Mr Sanjay Kapor",
        membershipDate: "2022",
        description: "Lorem Ipsum is simply at dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."

    },
    {
        name: "Mr James doer",
        membershipDate: "2019",
        description: "Lorem Ipsum is simply at dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."

    },
]

export default function Authorprofile() {
    return (
        <div className=' w-full  h-[360px]   border-[1px] border-[#E0E0E0] rounded-lg '>
            <div className='bg-theme W-[582px] h-[40px] rounded-t-lg text-white p-2 '>
                <p>Author Profile</p>
            </div>

            <div className='grid grid-cols-3 p-7 text-[15px]'>
                <div className=' '>
                    <Image src="/author1.png" alt={"profiele"} width={142} height={142}></Image>
                </div>
                <div className='font-Inter font-normal text-[#323232] space-y-2 col-span-2 mt-5'>
                    <p className='mr-6 font-medium '>Name<span className='ml-20 pl-2 font-normal'>:{authors[0].name}</span></p>
                    <p className='mr-6 font-medium'>Member since<span className='ml-5 pl-2 font-normal'>:{authors[0].membershipDate}</span></p>
                    <p className='mr-6 font-medium'>Description<span className='ml-10 pl-2 font-normal text-justify'>:{authors[0].description}</span></p>
                </div>
            </div>
        </div>
    )
}
