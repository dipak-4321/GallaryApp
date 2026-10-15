import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [photos, setPhotos] = useState([])
  const [num, setNum] = useState(0)  
  const getData = async ()=> {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${num}&limit=16`)
    console.log(response.data)
    setPhotos((response.data))
    console.log(photos)

      }
  
  let loadingsc = <img className='h-full w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROu-pAt127p2FNfER1Y4v0OaEgvbuY-bY2gbVU1Ych7g&s=10" alt="" />

  if(photos.length>0){
    loadingsc = photos.map((elem,idx)=>{
      return (
        <a className='h-full w-100 sm:w-72' href={elem.url} target='blank'>
          <div className='sm:h-57 bg-gray-100 h-65 w-full sm:w-72 rounded-2xl overflow-hidden'>
            <img className='h-full w-full' src={elem.download_url} />
          </div>
        </a>
      )
      
    })
  }
  useEffect(()=> {
    getData()
  },[num])

  const next = ()=> {
    setNum(num+1)
    setPhotos([])
  }
  
  const prev = ()=> {
    if(num > 1){
      setNum(num-1)
      setPhotos([])
    }

  }


  //  const  photedata = photos.map((elem)=>{
  //    return (
      //  <a className='h-full w-85 sm:w-72' href={elem.url}>
      //    <div className='sm:h-57 bg-green-100 h-65 w-full sm:w-72 rounded-2xl overflow-hidden'>
      //       <img className='h-full w-full' src={elem.download_url} />
      //       </div>
      //       </a>

  //         )
  //     })
    
  
  return (
    <div className='p-5'>

      <div className='flex flex-wrap justify-center gap-4 mt-4 '>
        {getData}
        {loadingsc}
      </div> 
    
    <div className='flex gap-15 justify-center mt-4'>
      <button onClick={prev} className='bg-fuchsia-600 text-white font-bold rounded py-1 px-4 active:scale-95 '>Prev</button>
      <h3 className='text-green-600 font-bold'>{num}</h3>
      <button onClick={next} className='bg-fuchsia-600 text-white font-bold rounded py-1 px-4 active:scale-95'>Next</button>
    </div>
    

    </div>
  )
}

export default App