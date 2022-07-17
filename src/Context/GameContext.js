import { createContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({children}) =>{

    const [details, setDetails] = useState([]) // state for handling the game details getting from the api
    const [ backupDetails, setBackupDetails ] = useState([]) // state for handling the main data from the api

    // function for changing details state
    const updateDetails = (data) =>{
        // console.log(data, 'context data')
        setDetails(data)
    }

    // function for changing backupDetails state
    const updateBackupDetails = (data) =>{
        setBackupDetails(data)
    }

    return (
        <GameContext.Provider value={{details, updateDetails, backupDetails, updateBackupDetails}}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContext;