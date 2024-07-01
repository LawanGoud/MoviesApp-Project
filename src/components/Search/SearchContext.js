import {createContext, useContext, useState} from 'react'

// Create the context
const SearchContext = createContext()

// Create the provider component
export const SearchProvider = ({children}) => {
  const [searchQuery, setSearchQuery] = useState('')

  const updateSearchQuery = query => {
    setSearchQuery(query)
  }

  return (
    <SearchContext.Provider value={{searchQuery, updateSearchQuery}}>
      {children}
    </SearchContext.Provider>
  )
}

// Custom hook to use the context
export const useSearch = () => useContext(SearchContext)
