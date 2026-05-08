import { useState } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters';

export function Filters (){
    const {setFilters} = useFilters()
    const [minPrice, setMinPrice] = useState (0);

    function handleChangeMinPrice(event){
        setMinPrice(event.target.value);
        setFilters (prevState =>({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    function handleChangeCategory(event){
        setFilters (prevState =>({
            ...prevState,
            category: event.target.value
        }))
    }

     

    return (
        <section className="filters">

            <div>
                <label htmlFor="price"> Price</label>
                <input type="range" id="price"  min='0' max='1000' onChange={handleChangeMinPrice}/>
                <span>${minPrice}</span>
            </div>
            
            <div>
                <label htmlFor="category">Categoria</label>
                <select id="category" onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="beauty">Belleza</option>
                    <option value="furniture">Muebles</option>
                </select>
            </div>
        </section>
    )
}