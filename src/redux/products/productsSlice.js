import {createSlice} from '@reduxjs/toolkit';

import { tech, TotalProducts } from '../../data/tech';


const INITIAL_STATE = {
    tech: tech,
    totalProducts: TotalProducts
}

// new slice for documentation 

export const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state => {
            return state;
        }
    }
})

export const { getProducts } = productsSlice.actions

export default productsSlice.reducer