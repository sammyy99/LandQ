import React, { useCallback, useMemo, useState } from 'react'
import ChildHook from './ChildHook'
import ChildHookTwo from './ChildHookTwo'

const Hooks = () => {

    const [count, setCount] = useState(0) // for parent component
    const [childCount, setChildComponent] = useState(0) // for example of useMemo
    const [childTwoCount, setChildTwoCount] = useState(0) // for exmaple of useCallback

    const handleClick = ()=>{
        setCount(count+1)
    }
    const handleClickChild = ()=>{
        setChildComponent(childCount+1)
    }

    const memoizedChild = useMemo(()=>{
        return <ChildHook add = {childCount}/>
    },[childCount])


    const handleChildTwo = useCallback(()=>{
            setChildTwoCount(childTwoCount+1)
        }
    ,[childTwoCount])

    const MemoizedChildTwo = React.memo(ChildHookTwo)


    console.log("Parent re-rendered")
  return (
    <div>
        <button className='px-2 py-1 border-black border' onClick={()=>{handleClick()}}>Click for parent</button>
        <button className='px-2 py-1 border-black border' onClick={()=>{handleClickChild()}}>Click for child</button>
        {memoizedChild}
        <div className='mt-5'>
                <MemoizedChildTwo fn = {handleChildTwo} val = {childTwoCount}/>
        </div>
    </div>
  )
}

export default Hooks
