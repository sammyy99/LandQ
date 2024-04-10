import React from 'react'
import ArrayQuestions from './Components/ArrayQuestions'
import Closure from './Components/Closure'
import Hooks from './Components/Hooks'
import UserContext from './utils/UserContext'
import appStore from './Redux/appstore'
import Provider from "react-redux"
import ReduxUse from './Components/ReduxUse'

const App = () => {
  return (
    //<UserContext.Provider value={{loggedUser: "Sam"}}>
    <Provider store = {appStore}>
    <div>
      <ArrayQuestions/>
      <Closure/>
      <Hooks/>
      <ReduxUse/>
    </div>
    </Provider>
    //</UserContext.Provider>
  )
}

export default App
