import { createContext } from 'react'

export const UserContext = createContext(null);
const {Provider} = UserContext

export const UserProvider = ({children}) => {
    return <Provider value={{name: "Die", lastName:"Gandara"}}> {children} </Provider>
}
