import { createContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({children}) =>{

    const [ scoreState, setScoreState ] = useState(true)

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