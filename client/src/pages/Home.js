import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import logo from '../assets/kakaotalk_logo.png'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const location = useLocation()
    const basePath = location.pathname === '/'

    return (
        <div className='grid lg:grid-cols-[300px,1fr] h-screen max-h-screen'>
            {/* 왼쪽 사이드바 */}
            <section className={`bg-white ${!basePath && "hidden"} lg:block`}>
                <Sidebar/>
            </section>
            
            {/* 대화방에서 대화내용들 표시 */}
            <section className={`${basePath && "hidden"}`}>
                <Outlet/>
            </section>

            {/* 로고표시영역 */}
            <div className={`justify-center items-center flex-col gap-2 hidden ${!basePath ? "hidden" : "lg:flex"}`}>
                <div>
                    <img
                        src={logo}
                        width={250}
                    />
                </div>
                <p className='text-lg mt-2 text-slate-500'>메시지를 보낼 사용자를 선택하세요.</p>
            </div>
        </div>
    )
}

export default Home