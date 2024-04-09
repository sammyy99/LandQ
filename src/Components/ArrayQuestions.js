import React from 'react'

const ArrayQuestions = () => {

    // Reverse string 
    const str = 'sam'
    const arr = str.split('').reverse()
    const revStr = arr.join('')
    console.log(revStr)

    const arr2 = [1,2,3,4,5]
    console.log(arr2)

  return (
    <div className=' text-center'>
      <h1 className='text-2xl'>String Reverse</h1>
      <p className='mt-4'>String - {str}</p>
      <p>Reverse String - {revStr}</p>
    
      <h1 className='text-2xl'>Array methods</h1>
      <p className='mt-4'>Push Method - {arr2}</p>
      <p>Reverse String - {revStr}</p>
      
    </div>
  )
}

export default ArrayQuestions
