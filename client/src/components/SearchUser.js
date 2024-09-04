import { useEffect, useState } from "react"
import { IoClose, IoSearchOutline } from "react-icons/io5"
import axios from 'axios'

const SearchUser = ({onClose}) => {
  const [search,setSearch] = useState('') // 검색어
  const [searchUser,setSearchUser] = useState([]) //검색결과

  // 실제 검색하는 함수만들기
  const handleSearchUser = async() => {
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/search-user`
    try{
      const response = await axios.post(URL,{
        search: search
      })
      // setSearchUser(response.data.data)
      console.log('response.data.data',response.data.data)
    
    }catch(error){
      console.log('일단 에러났쑤')
    }
  }

  useEffect(()=>{
    handleSearchUser()
  },[search]) 

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-slate-700 bg-opacity-40 p-2 z-10'>
      <div className='w-full max-w-lg mx-auto mt-10'>
        {/* 검색어 입력 */}
        <div className='bg-white rounded h-14 overflow-hidden flex'>
          <input
            type="text"
            placeholder="검색할 성명 및 이메일을 입력하세요..."
            className="w-full outline-none py-1 h-full px-4"
            onChange={(e)=>setSearch(e.target.value)}
            value={search}
          />
          <div className='h=14 w-14 flex justify-center items-center'>
            <IoSearchOutline size={25}/>
          </div>
        </div>

        {/* 검색결과표시 */}
        <div>
          검색결과를 보여주는 로직을 구현하자.
        </div>
      </div>

      {/* 창 닫기 */}
      <div className='absolute top-0 right-0 text-2xl p-2 lg:text-4xl hover:text-white'>
        <button onClick={onClose}>
          <IoClose/>
        </button>
      </div>
    </div>  
  )
}

export default SearchUser