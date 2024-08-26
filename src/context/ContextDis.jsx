import { createContext, useReducer, useState } from "react";
import { library } from "../../../books/books.json"
import { reducerDis } from "../reducers/reducerDis";

export const ContextDis = createContext()

const ContextDisProvider = ({children}) => {
    const [initialState, dispatch] = useReducer(reducerDis, library)
    const [filter, setFilter] = useState({
        genre: "all",
        pages: 400

    })

    const deletBook = id => {
        dispatch({
            type: "DELETBOOK",
            payload: id
        })
    }
    console.log(filter.pages)

    const filterOfBooks = state => {
        return state.filter(library => {
            const {book} = library
            return(
                filter.pages <= book.pages && (
                    filter.genre === "all" || filter.genre === book.genre
                )
            )
        })
    }

    const state = filterOfBooks(initialState)

    return (
        <ContextDis.Provider value={{
            setFilter,
            state,
            deletBook
        }}>
            {children}
        </ContextDis.Provider>
    )
}

export default ContextDisProvider;