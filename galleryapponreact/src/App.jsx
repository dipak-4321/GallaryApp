import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [photos, setPhotos] = useState([])
  
  const getData = async ()=> {
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=16')
    console.log(response.data)
    setPhotos((response.data))
    console.log(photos)

      }
  
  let loadingsc = <img className='h-full w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTG_okS5KYa4r7jhsDH6jq0E1RzWNCgoq7QFwGEr1ilw&s=10" alt="" />

  if(photos.length>0){
    loadingsc = photos.map((elem,idx)=>{
      return (
        <a className='h-full w-85 sm:w-72' href={elem.url} target='blank'>
          <div className='sm:h-57 bg-gray-100 h-65 w-full sm:w-72 rounded-2xl overflow-hidden'>
            <img className='h-full w-full' src={elem.download_url} />
          </div>
        </a>
      )
      
    })
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

    <button className='bg-green-500 py-1 px-2 active:scale-95 rounded '
    onClick={getData}>Get Photo</button>

    <div className='flex flex-wrap gap-4 mt-4'>
      {/* {photedata} */}
      {loadingsc}
    </div>
    
    <div className='flex gap-15 justify-center mt-4'>
      <button className='bg-fuchsia-600 text-white font-bold rounded py-1 px-4 active:scale-95 '>Prev</button>
      <button className='bg-fuchsia-600 text-white font-bold rounded py-1 px-4 active:scale-95'>Next</button>
    </div>
    

    </div>
  )
}

export default App