import { Categories } from '../../data/categories'
import { createSlice } from '@reduxjs/toolkit'



const INITIAL_STATE = {
    categories: Categories,
    selectedCategory: null // valor inicial de la categoría seleccionada
}
// payload es el valor que se le pasa a la action(carga util)
                
export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
        selectCategory: (state, action) => { // dos parametros (state, action) remplaza el dispatch del useReducer 
            return {
                ...state,
                selectedCategory: 
                action.payload !== state.selectedCategory ? action.payload : null
                // arranca en null, retornamos selectedCategory (INITIAL_STATE), si lo que traemos de la action.payload es diferente a selectedCategory, retornamos action.payload, si no retornamos null 
            };
        },
        categories: state => {
            return state
        }
    }
    })



export const { categories, selectCategory } = categoriesSlice.actions // export todas las actions 
export default categoriesSlice.reducer // export el reducer (todos los reducers juntos)