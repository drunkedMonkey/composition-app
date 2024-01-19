import axios from "axios";
import pokemonApi from "../api/pokemonApi";
import type {  PokemonListResponse, Pokemon, PokemonResponse } from "../interfaces";

export const getPokemons = async():Promise<Pokemon[]>=>{

    const {data} = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45');
    
    const pokemonPomises: Promise<Pokemon>[]= [];

    for (const {url} of data.results) {
       const pokemonPromise =  axios.get<PokemonResponse>(url).then(({data})=>{
            return{
                id:data.id,
                name:data.name,
                frontSprite:data.sprites.front_default
            }
        });

        pokemonPomises.push(pokemonPromise);
        
    }

    const pokemons = await Promise.all(pokemonPomises);

    return pokemons;

}