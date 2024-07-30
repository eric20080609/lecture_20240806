import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            Home
            
            {/* 아래는 잘못된 정보 에러메세지 */}
            <section>
                <Outlet/>
            </section>
        </div>
    )
}

export default Home