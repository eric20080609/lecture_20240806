import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/wallapaper.jpeg'
import { FaAngleLeft, FaPlus } from 'react-icons/fa6'
import { HiDotsVertical } from 'react-icons/hi'
import { IoMdSend } from 'react-icons/io'

const MessagePage = () => {
    return (
        <div style={{backgroundImage:`url(${backgroundImage})`}} className='bg-no-repeat bg-cover'>
            {/* 대화방 헤더 */}
            <header className='sticky top-0 h-16 bg-white flex justify-between items-center px-4'>
                <div className='flex items-center gap-4'>
                    <Link to={"/"} className='lg:hidden'>
                        <FaAngleLeft size={25}/>
                    </Link>
                    <div>
                        신
                    </div>
                    <div>
                        <h3 className='font-semibold text-lg my-0 text-ellipsis line-clamp-1'>신달수</h3>
                        <p className='my-2 text-sm'>
                            <span className='text-primary'>online</span>
                        </p>
                    </div>
                </div>
                <div>
                    <button className='cursor-pointer hover:text-primary'>
                        <HiDotsVertical/>
                    </button>
                </div>
            </header>

            {/* 대화메세지들 표시 */}
            <section>

            </section>

            {/* 메세지 보내기 */}
            <section className='h-16 bg-white flex items-center px-4'>
                <div className='relative'>
                    <button className='flex justify-center items-center w-11 h-11 rounded-full hover:bg-primary hover:text-white'>
                        <FaPlus size={20}/>
                    </button>
                </div>
                <form className='h-full w-full flex gap-2'>
                    <input
                        type='text'
                        placeholder='메세지를 입력하세요.'
                        className='py-1 px-4 outline-none w-full h-full' 
                    />
                    <button className='text-primary hover:text-secondary'>
                        <IoMdSend size={28}/>
                    </button>
                </form>
            </section>
        </div>
    )
}

export default MessagePage