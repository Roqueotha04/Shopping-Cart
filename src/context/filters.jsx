import { createContext, useState } from "react";

//Crear el contexto
export const filtersContext = createContext()

//Crear Provider
export function FiltersProvider ({children}){
    const [filters, setFilters] = useState ({
        category: 'all',
        minPrice: 0
    })

    return (
        <filtersContext.Provider value={{
            filters,
            setFilters
        }}> 
            {children}
        </filtersContext.Provider>
    )
}
