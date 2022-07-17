import { createContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({children}) =>{

    const [ scoreState, setScoreState ] = useState(true) // state for handling the state for ascending and descending value
    const [ grid, setGrid ] = useState(true) // state for handling grid and list layout

    // function to change the state according to user needs
    const changeScoreState = () =>{
        setScoreState(!scoreState)
    }

    // function to handle grid and list layout
    const handleGrid = () =>{
        setGrid(!grid)
    }

    return(
        <FilterContext.Provider value={{scoreState, changeScoreState, grid, handleGrid}}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContext