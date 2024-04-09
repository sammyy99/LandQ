import React from 'react'

const ChildHookTwo = ({fn,val}) => {
    console.log("childhooktwo re-renders")
  return (
    <div>
      <button onClick={()=>{fn()}} className='m-5 border border-black'>child two button</button>
      {val}
    </div>
  )
}

export default React.memo(ChildHookTwo) 
