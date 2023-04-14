import reducer from "./reducers"

const initialState = {
    cart: [{}],
    products: [{}, {}],
    user: null,
    number: 0,
} //imagina 

export {
    initialState,
    reducer
}
