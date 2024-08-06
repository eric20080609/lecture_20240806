import React, { useState } from 'react'
import axios from 'axios'
import uploadFile from '../helpers/uploadFile'

const Registerpage = () => {
    const [data,setData] = useState({
        name: "",
        email: "",
        password: "",
        profile_pic: ""
    })
    const [uploadPhoto,setUploadPhoto] = useState("")
    const hangleOnChange = (e)=>{
        const {name,value} = e.target
        setData((preve)=>{
            return {
                ...preve,
                [name]: value
            }
        })
    }
    const handleUploadPhoto = async(e) => {
        const file = e.target.files[0]
        const uploadPhoto = await uploadFile(file)
        console.log(`uploadPhoto:${JSON.stringify(uploadPhoto)}`)
        console.log(`uploadPhoto.name:${uploadPhoto.display_name}`)
        setUploadPhoto(uploadPhoto)
        setData((preve)=>{
            return{
                ...preve,
                profile_pic: uploadPhoto?.url
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log(JSON.stringify(data))
        const URL = 'https://symmetrical-pancake-q9jgjvw6gqr344v6-8080.app.github.dev:8080/api/register'
        const response = axios.post(URL,data)
        console.log(JSON.stringify(response))
    }
    
    return (
        <div className='mt-5'>
            <div className='bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4 mx-auto'>
                <h3>회원 가입 페이지</h3>
                <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='name'>성명 :</label>
                        <input
                            className='bg-slate-200 px-2 py-1'
                            type='text'
                            id='name'
                            name='name'
                            onChange={hangleOnChange}                       
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='email'>카카오 계정 :</label>
                        <input
                            className='bg-slate-200 px-2 py-1'
                            type='text'
                            id='email'
                            name='email'
                            onChange={hangleOnChange}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='password'>비밀번호 :</label>
                        <input
                            className='bg-slate-200 px-2 py-1'
                            type='text'
                            id='password'
                            name='password'
                            onChange={hangleOnChange}
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='profile_pic'>프로필 사진 :
                            <div className='h-14 bg-slate-200 flex justify-center items-center border rounded hover:border-primary cursor-pointer'>
                                <p>
                                    {
                                        uploadPhoto?.display_name ? uploadPhoto?.display_name : "프로필 사진을 올리세요."
                                    }
                                </p>
                                {
                                    uploadPhoto?.display_name && (
                                        <>
                                            <img
                                                className='ml-2'
                                                src={uploadPhoto.url}
                                                width={40}
                                                height={40}
                                            />
                                        </>
                                    )
                                }
                            </div>
                        </label>
                        <input
                            className='bg-slate-200 px-2 py-1 focus:outline-primary hidden'
                            type='file'
                            id='profile_pic'
                            name='profile_pic'
                            onChange={handleUploadPhoto}
                        />
                    </div>
                    <button className='bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'>
                        가입하기
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Registerpage