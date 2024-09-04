import { IoClose, IoSearchOutline } from "react-icons/io5"

const SearchUser = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-slate-700 bg-opacity-40 p-2 z-10'>
      <div className='w-full max-w-lg mx-auto mt-10'>
        {/* 검색어 입력 */}
        <div className='bg-white rounded h-14 overflow-hidden flex'>
          <input
            type="text"
            placeholder="검색할 성명 및 이메일을 입력하세요..."
            className="w-full outline-none py-1 h-full px-4"
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
        <button>
          <IoClose/>
        </button>
      </div>
    </div>  
  )
}

export default SearchUser