import { createContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({children}) =>{

    const [details, setDetails] = useState([])

    const updateDetails = (data) =>{
        console.log(data, 'context data')
        setDetails(data)
    }

    return (
        <GameContext.Provider value={{details, updateDetails}}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContext;