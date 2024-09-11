import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const CheckPasswordPage = () => {
    const [data,setData] = useState({
        password: "",
        userId: ""
    })
    const navigate = useNavigate()
    const location = useLocation()

    const handleOnChange = (e) => {
        const {name,value} = e.target
        setData((preve)=>{
            return {
                ...preve,
                [name]: value
            }
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        e.stopPropagation()
        const URL = `${process.env.REACT_APP_BACKEND_URL}/api/password`
        try{
            const response = await axios({
                method: 'post',
                url: URL,
                data: {
                    userId: location?.state?._id,
                    password: data.password
                },
                withCredentials: true
            })
            toast.success(response.data.message)
            if (response.data.success){
                localStorage.setItem('token', response?.data?.token)
                navigate('/')
            }
        } catch(error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div className='mt-5'>
            <div className='bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4 mx-auto'>
                <h3>비밀번호를 입력하세요.</h3>
                <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='password'>비밀번호 :</label>
                        <input
                            className='bg-slate-200 px-2 py-1'
                            type='text'
                            id='password'
                            name='password'
                            value={data.password}
                            onChange={handleOnChange}
                            required                 
                        />
                    </div>
                    <button className='bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CheckPasswordPage