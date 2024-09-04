import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {IoChatbubbleEllipses} from 'react-icons/io5'
import { FaUserPlus } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { FiArrowUpLeft } from 'react-icons/fi'
import axios from 'axios'
import SearchUser from './SearchUser'

const Sidebar = () => {
  const navigate = useNavigate()
  const [openSearchUser,setOpenSearchUser] = useState(false)

  const handleLogout = async() => {
    //서버를 호출
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/logout`
    console.log('URL',URL)
    const reponse = await axios({
      url: URL,
      withCredentials: true
    })
    navigate('/email')
  }
  console.log('openSearchUser',openSearchUser)
  
  return (
    <div
        style={{backgroundColor:"#fff", fontSize:"20px;"}}
        className='w-full h-full grid grid-cols-[48px,1fr] bg-white'>
        <div className='bg-slate-100 w-12 h-full rounded-tr-lg rounded-br-lg py-5 text-slate-600 flex flex-col justify-between'>
            <div>
                <NavLink className={({isActive})=>`w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded ${isActive && "bg-slate-200"}`}>
                    <IoChatbubbleEllipses size={20}/>
                </NavLink>
                <div onClick={()=>setOpenSearchUser(true)} className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded'>
                    <FaUserPlus size={20} />
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <button className='mx-auto'>
                    신
                </button>
                <button className='w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded' onClick={handleLogout}>
                    <span className='ml-2'>
                        <BiLogOut size={20} />
                    </span>
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
                    <p className='text-lg text-center text-slate-400'>대화를 시작할 사용자를 탐색하세요.</p>
                </div>
            </div>
        </div>

        {
          openSearchUser && (
            <SearchUser onClose={()=>setOpenSearchUser(false)} />
          )
        }
    </div>
  )
}

export default Sidebar