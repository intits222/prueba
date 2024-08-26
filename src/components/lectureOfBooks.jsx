import { useContext } from "react"
import { ContextLec } from "../context/ContextLec"

const LectureOfBooks = () => {
    const {initialStateLec} = useContext(ContextLec)

    return (
        <>
            {
                initialStateLec.map(book => (
                    <div>
                        <p>{book.title}</p>
                    </div>
                ))
            }
        </>
    )
}

export default LectureOfBooks;