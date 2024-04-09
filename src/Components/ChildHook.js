import React from 'react'

const ChildHook = ({add}) => {
    console.log("This child hook compoent is re-rendered")
  return (
    <div  className='m-5 text-center'>
      {add}
    </div>
  )
}

export default ChildHook
