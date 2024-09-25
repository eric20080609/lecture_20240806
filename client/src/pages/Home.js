import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import logo from '../assets/kakaotalk_logo.png'
import Sidebar from '../components/Sidebar'
import io from 'socket.io-client'
import { useDispatch } from 'react-redux'
import { setOnlineUser} from '../redux/userSlice'
import axios from 'axios'

const Home = () => {
    const location = useLocation()
    const basePath = location.pathname === '/'
    const dispatch = useDispatch()

    const fetchUserDetails = async() => {
        const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`
        console.log('url', URL) 
        const response = await axios({
            url: URL,
            withCredentials: true
        })
        console.log('사용자세부조회',response)

    }
    useEffect(()=>{
        fetchUserDetails()
    },[])
    useEffect(()=>{
        console.log('소켓서버랑 연결하러 왔음',localStorage.getItem('token'))
        // 소켓 서버와 연결
        const socketConnection = io(process.env.REACT_APP_BACKEND_URL,{
            auth: {
                token: localStorage.getItem('token')
            }
        })
        socketConnection.on('onlineUser',(data)=>{
            console.log(data)
            dispatch(setOnlineUser(data))
            // 연결된 사용자들을 서버에서 줬네요. 야호 신난다....
        })
        return ()=>{
            socketConnection.disconnect()
        }
    },[]) //빈배열의 랜더링된 이후, 최초 1번만 실행

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