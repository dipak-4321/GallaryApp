import React from 'react'

const Button = (props) => {
  return (
    <div className='flex gap-15 justify-center mt-4'>
      <button onClick={props.prev}  disabled={props.num === 1} className='bg-fuchsia-600 text-white font-bold rounded py-1 px-4 active:scale-95 '>Prev</button>
      <h3 className='text-green-600 font-bold'>{props.num}</h3>
      <button onClick={props.next} className='bg-fuchsia-600 text-white font-bold rounded py-1 px-4 active:scale-95'>Next</button>
    </div>
  )
}

export default Button