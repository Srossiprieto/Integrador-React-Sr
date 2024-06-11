import {
    addItemToCart,
    removeItemFromCart,
} from './cart-utils';



import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
    cartItems: [],
    hidden: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state,action) => {
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            };
        },
        removeFromCart: (state,action) =>{
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload)
            }
        },
        clearCart:state=> {
            return {
                ...state,
                cartItems:[]
            };
        },
        toggleHiddenCart: state=> {
            return {
                ...state,
                hidden:!state.hidden
            };
        }
    }
});


// se exportan las acciones.
export const { toggleHiddenCart, addToCart, removeFromCart, clearCart } = cartSlice.actions 

// se exporta el reducer.
export default cartSlice.reducer