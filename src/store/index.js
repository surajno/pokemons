import { configureStore } from "@reduxjs/toolkit";
import pokemon from './slice'

const store = configureStore({
    reducer:{
        pokemon: pokemon
    }
})

export default store