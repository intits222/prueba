import { useContext } from "react";
import { ContextDis } from "../context/ContextDis";

const FilterBooks = () => {
    const {setFilter} = useContext(ContextDis)

    const filterForGenre = e => {
        setFilter(prevState => ({
            ...prevState,
            genre: e.target.value
        }))
    }

    const filterForPages = e => {
        setFilter(prevState => ({
            ...prevState,
            pages: e.target.value
        }))
    }

    return(
        <>
        <select onChange={filterForGenre}>
            <option value="all">all</option>
            <option value="Fantasía">Option one</option>
            <option value="Terror">Option two</option>
            <option value="Ciencia ficción">Option three</option>
            <option value="Zombies">Option four</option>
        </select>

        <input onChange={filterForPages} type="range" min="100" max="1000"/>
        </>
    )
}

export default FilterBooks;