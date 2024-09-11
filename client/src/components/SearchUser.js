import { useEffect, useState } from "react"
import { IoClose, IoSearchOutline } from "react-icons/io5"
import axios from 'axios'
import UserSearchCard from './UserSearchCard'
import Loading from './Loading'

const SearchUser = ({onClose}) => {
  const [search,setSearch] = useState('') // 검색어
  const [loading, setLoading] = useState(false) //로딩표시여부
  const [searchUser,setSearchUser] = useState([]) //검색결과

  // 실제 검색하는 함수만들기
  const handleSearchUser = async() => {
    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/search-user`
    try{
      setLoading(true)
      const response = await axios.post(URL,{
        search: search
      })
      console.log('response.data.data',response.data.data)
      setSearchUser(response.data.data)    
      setLoading(false)
    }catch(error){
      console.log('일단 에러났쑤')
    }
  }

  useEffect(()=>{
    console.log('11111')
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
        <div className='bg-white mt-2 w-full p-4 rounded h-[calc(100vh-160px)] overflow-x-hidden overflow-y-auto scrollbar'>
          {
            searchUser.length === 0 && !loading && (
              <p className='text-center text-slate-500'>검색어에 해당하는 사람이 없습니다.</p>
            )
          }
          {
            loading && (
              <p><Loading/></p>
            )
          }
          {
            searchUser.length !== 0 && !loading && (
              searchUser.map((user,index)=>{
                return (
                  <UserSearchCard
                    key={user._id}
                    user={user}
                    onClose={onClose}
                  />
                )
              })
            )
          }
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