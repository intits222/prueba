import { useContext } from "react"
import { ContextDis } from "../context/ContextDis"
import { ContextLec } from "../context/ContextLec"

const ListOfBooks = () =>{
    const {deletBook, state} = useContext(ContextDis)
    const {initialStateLec, setInitialStateLec} = useContext(ContextLec)
 

    return(
    <>
    <div className="cont_books_dis">
        {
            state.map(books => {
                const {book} = books 

                return(
                <div key={book.ISBN} className="books-dis">
                    
                        <img src={book.cover} width="150"/>
                            <p>{book.title}</p>
                            <button onClick={() => {
                                deletBook(book.ISBN)
                                setInitialStateLec([...initialStateLec, book])
                        }}>Lectura</button>
                    
                </div>
                )
            })
        }
        </div>
    </>
    )
}

export default ListOfBooks