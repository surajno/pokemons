import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getPokemonDetails = createAsyncThunk('get/pokemonDetails', async(url)=>{
try {
    const response = await axios.get(url)
    return response.data
} catch (error) {
    console.log(error)
}
})

export const getPokemons = createAsyncThunk('get/pokemon', async()=>{
    try {
       const response =  await axios.get('https://pokeapi.co/api/v2/pokemon')
        console.log('api result ',response.results)
        return response.data.results
    } catch (error) {
        console.log(error)
    }
})

const pokemon = createSlice({
    name : 'pokemon',
    initialState:{
        pokemons:[],
        pokemonDetails:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getPokemons.pending,()=>{
            console.log('getting data API')
        })
        .addCase(getPokemons.fulfilled,(state, action)=>{
            state.pokemons= action.payload
        })
        .addCase(getPokemonDetails.fulfilled,(state,action)=>{
            state.pokemonDetails = action.payload
        })
    }
})

export default pokemon.reducer