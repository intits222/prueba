
export const reducerDis = (state, action) => {
    const {type, payload} = action

    switch(type) {
        case "DELETBOOK":
            return state.filter(({book}) => book.ISBN !== payload)
    }
}