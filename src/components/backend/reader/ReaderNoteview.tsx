import React from 'react';
import Link from 'next/link'
import {BsArrowsFullscreen} from 'react-icons/bs'

export default function CreateNoteView() {
  return (
    <div className='p-4 h-[662px] overflow-auto w-full bg-white rounded-lg font-Inter text-[15px] ' >

    {/* Heading  */}
    <div className='w-full  h-[40px] bg-theme font-medium text-white rounded-xl flex items-center justify-between px-10 '>
        <div className='flex items-center'>
                <h2 className='text-[#F0F0F0]'>My notes </h2>
            <div className=' mx-2 w-2 h-2  bg-white rounded-[50%]'></div>
                <span>Notes details</span>
            <div className=' mx-2 w-2 h-2  bg-white rounded-[50%]'></div>
                <span>Computer science</span>
        </div>
        <div className='flex space-x-10'>
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                Zoom in
            </div>
            <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                </svg>
                Zoom out
            </div>
            <div className='flex items-center space-x-2'>
                <BsArrowsFullscreen />
                <p>Full screen</p>
            </div>
        </div>
    </div>

    <div className='p-6 space-y-5'>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus architecto officiis fuga obcaecati id perspiciatis ex nulla sequi eos in dolorem ad labore totam ducimus velit soluta, nemo saepe incidunt et aut, ipsam quas. Reprehenderit fugit tempora rerum necessitatibus beatae fugiat vitae harum fuga labore velit sunt voluptate, sit deserunt neque et voluptatem adipisci itaque recusandae aliquam veniam ullam saepe sint? Consequuntur adipisci dolorem illo dolor natus perspiciatis, esse dolores, tenetur voluptate repudiandae aperiam, aliquid porro ut quo. Distinctio, maxime veniam labore nisi quos temporibus adipisci repudiandae ex at ullam illum. Aliquam quas quis corporis? Aperiam quas culpa sapiente magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At perspiciatis maiores, sequi odio aut corporis minus, aliquid error laborum iusto nulla obcaecati. Vitae similique eius est reprehenderit nihil, amet sunt iste in nisi facere totam officiis dolor quo itaque voluptatem consequuntur. Provident autem aut tenetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, mollitia! Voluptatem, commodi incidunt est deserunt doloremque dolorem! Unde corrupti ipsum facere excepturi, sapiente odio neque atque sit harum! Doloribus ex alias ad officia quis facere cupiditate quia accusamus eaque obcaecati, aperiam labore. Consequatur, sequi quo!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellendus dolor ad a unde laboriosam, ipsum reprehenderit, nam minus eos iusto reiciendis qui esse necessitatibus iure, at corrupti impedit debitis corporis quisquam tempora nemo!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veniam dolore eius sint laborum quidem blanditiis voluptates distinctio incidunt harum ad eos non fugiat neque, beatae vitae rem est omnis a quasi, provident officiis in sit! Deserunt ut quae in consequuntur quasi accusamus aperiam velit aspernatur et reiciendis fuga quis architecto perspiciatis quos eum consequatur, alias necessitatibus amet delectus atque. Unde voluptatibus in repellat dolores voluptates accusamus, molestiae quibusdam praesentium aliquid saepe commodi, ex repellendus!</p>


    </div>


</div>
  )
}
