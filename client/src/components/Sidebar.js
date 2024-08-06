import React from 'react'
import { NavLink } from 'react-router-dom'
import {IoChatbubbleEllipses} from 'react-icons/io5'
import { FaUserPlus } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { FiArrowUpLeft } from 'react-icons/fi'

const Sidebar = () => {
  return (
    <div>
        <div>
            <div>
                <NavLink>
                    <IoChatbubbleEllipses size={20}/>
                </NavLink>
                <div>
                    <FaUserPlus size={20} />
                </div>
            </div>
            <div>
                <button>
                    신
                </button>
                <button>
                    <BiLogOut size={20} />
                </button>
            </div>
        </div>
        <div className='w-full'>
            <div className='h-16 flex items-center'>
                <h2 className='text-xl font-bold p-4 text-slate-800'>Message</h2>
            </div>
            <div className='bg-slate-200 p-[0.5px]'></div>
            <div className='h-[calc(100vh-65px)] overflow-x-hidden overflow-y-auto scrollbar'>
                <div className='mt-12'>
                    <div className='flex justify-center items-center my-4 text-slate-500'>
                        <FiArrowUpLeft size={50} />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar