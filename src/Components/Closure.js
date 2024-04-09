import React from 'react'

const Closure = () => {

    const outer = ()=>{
        const name = 'sam';
        const inner = ()=>{
            console.log("called by inner"+name)
        }
        inner();
    }
    outer()

  return (
    <div>
      
    </div>
  )
}

export default Closure
