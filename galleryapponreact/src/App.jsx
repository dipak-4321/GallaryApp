import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [photos, setPhotos] = useState([])
  
  const getData = async ()=> {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=15')
    console.log(response.data)
    setPhotos((response.data))
    console.log(photos)

      }
      const  photedata = photos.map((elem)=>{
          return (
            <div className='h-57 bg-amber-500  w-72 rounded-2xl overflow-hidden'>
              <img className='h-full w-full' src={elem.download_url} />
            </div>
          )
      })
    
  
  return (
    <div className='p-5'>
    <button className='bg-green-500 py-1 px-2 active:scale-95 rounded '
    onClick={getData}>Get Photo</button>
    <div className='flex flex-wrap gap-2 mt-4'>
      {photedata}
    </div>
    

    </div>
  )
}

export default App