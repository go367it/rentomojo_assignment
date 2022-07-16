import { createContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({children}) =>{

    const [ scoreState, setScoreState ] = useState(true) // state for handling the state for ascending and descending value

    // function to change the state according to user needs
    const changeScoreState = () =>{
        setScoreState(!scoreState)
    }

    return(
        <FilterContext.Provider value={{scoreState, changeScoreState}}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContext