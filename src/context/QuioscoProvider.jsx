import {createContext} from 'react'

const QuioscoContext = createContext();

const QuioscoProvide = ({children}) => {

  return (
    <QuioscoContext.Provider
      value = {{
        
      }}
    >{children}</QuioscoContext.Provider>
  )
}

export {QuioscoProvide}
export default QuioscoContext