import Link from 'next/link'
import React, { useState } from 'react'
import { BsArrowsFullscreen } from 'react-icons/bs'
import Edit from '../../svg icons/Edit'
import Eye from '../../svg icons/Eye';

export default function Authornoteview() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='p-4 h-full w-full bg-white rounded-lg font-Inter text-[15px] ' >

            {/* Heading  */}
            <div className="bg-theme p-3 rounded-t-[5px] flex items-center w-full flex-row text-white">
        <div className="hidden md:flex justify-between items-center lg:flex justify-between items-center">
          <div>
            <p> My Account</p>
          </div>
          <div className="flex ml-4">
            <Link href="createnoteview">
              <div className="flex cursor-pointer items-center">
                <Link href="edityourdetails">
                <Edit />
                </Link>
                <span>Edit your details</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="block text-white lg:hidden md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 xs:h-10 xs:w-10"
            onClick={() => setIsOpen(!isOpen)}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="flex relative items-center justify-center space-x-5 bg-theme flex-col text-white">
          {/* <div></div> */}
          <div>
            <p> My Account</p>
          </div>
          <hr className="w-full mt-4" />

          <Link href="createnoteview">
            <div className="flex mt-4 mb-4 items-center">
              <Eye />
              <span>Edit Your details</span>
            </div>
          </Link>
          
        </div>
      )}

            <div className='p-6 space-y-5 text-[#263238]'>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus architecto officiis fuga obcaecati id perspiciatis ex nulla sequi eos in dolorem ad labore totam ducimus velit soluta, nemo saepe incidunt et aut, ipsam quas. Reprehenderit fugit tempora rerum necessitatibus beatae fugiat vitae harum fuga labore velit sunt voluptate, sit deserunt neque et voluptatem adipisci itaque recusandae aliquam veniam ullam saepe sint? Consequuntur adipisci dolorem illo dolor natus perspiciatis, esse dolores, tenetur voluptate repudiandae aperiam, aliquid porro ut quo. Distinctio, maxime veniam labore nisi quos temporibus adipisci repudiandae ex at ullam illum. Aliquam quas quis corporis? Aperiam quas culpa sapiente magnam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At perspiciatis maiores, sequi odio aut corporis minus, aliquid error laborum iusto nulla obcaecati. Vitae similique eius est reprehenderit nihil, amet sunt iste in nisi facere totam officiis dolor quo itaque voluptatem consequuntur. Provident autem aut tenetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, mollitia! Voluptatem, commodi incidunt est deserunt doloremque dolorem! Unde corrupti ipsum facere excepturi, sapiente odio neque atque sit harum! Doloribus ex alias ad officia quis facere cupiditate quia accusamus eaque obcaecati, aperiam labore. Consequatur, sequi quo!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellendus dolor ad a unde laboriosam, ipsum reprehenderit, nam minus eos iusto reiciendis qui esse necessitatibus iure, at corrupti impedit debitis corporis quisquam tempora nemo!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veniam dolore eius sint laborum quidem blanditiis voluptates distinctio incidunt harum ad eos non fugiat neque, beatae vitae rem est omnis a quasi, provident officiis in sit! Deserunt ut quae in consequuntur quasi accusamus aperiam velit aspernatur et reiciendis fuga quis architecto perspiciatis quos eum consequatur, alias necessitatibus amet delectus atque. Unde voluptatibus in repellat dolores voluptates accusamus, molestiae quibusdam praesentium aliquid saepe commodi, ex repellendus!</p>


            </div>


        </div>
  )
}
