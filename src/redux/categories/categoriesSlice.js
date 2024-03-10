import { Categories } from '../../data/categories'
import { createSlice } from '@reduxjs/toolkit'
const INITIAL_STATE = {
    categories: Categories,
    selectedCategory: "" // Añade un estado para la categoría seleccionada
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
        getCategory: state => {
            return state
        },
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload; // Actualiza la categoría seleccionada
        }
    }
})

export const { getCategory, selectCategory } = categoriesSlice.actions // export todas las actions 
export default categoriesSlice.reducer // export el reducer (todos los reducers juntos)