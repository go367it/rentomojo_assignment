import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({children}) =>{

    const [ search, setSearch ] = useState('') // state for handling change in state

    // function for changing the state when user types in the search input field
    const handleSearch = (value) =>{
        // console.log(value)
        setSearch(value)
    }

    return(
        <SearchContext.Provider value={{search, handleSearch}}>
            {children}
        </SearchContext.Provider>
    )
} 

export default SearchContext