import React, {useState} from 'react'
import axios from 'axios'

const CheckEmailPage = () => {
    const [data, setData] = useState({
        email: "",
    })
    const handleOnChange = (e) => {
        const {name, value} = e.target
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
        const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`
        try{
            const response = await axios.post(URL,data)
            console.log(response.data.message);
            
        }catch(error){
            console.log('error')
        }

    }

    return (
        <div className='mt-5'>

            <div className='bg-white w-full max-w-sm mx-2 rounded overflow-hidden p-4 mx-auto'>
                <h3>카카오 계정을 입력하세요.</h3>
                <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='email'>카카오 계정 :</label>
                        <input
                            className='bg-slate-200 px-2 py-1'
                            type='text'
                            id='email'
                            name='email'
                            value={data.email}
                            onChange={handleOnChange}              
                        />
                    </div>
                    <button className='bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'>
                        확인
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CheckEmailPage