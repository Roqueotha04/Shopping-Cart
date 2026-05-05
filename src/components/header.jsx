import {Filters} from './Filters.jsx'

export function Header ({changeFilters}){
    return(
        <>
        <h1>React Shop</h1>
        <Filters onChange={changeFilters}></Filters>
        </>
    )
}