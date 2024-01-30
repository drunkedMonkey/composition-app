import axios from 'axios'
import pokemonApi from '../api/pokemonApi'
import type { PokemonListResponse, Pokemon, PokemonResponse } from '../interfaces'
// import { sleep } from "./sleep";

export const getPokemons = async (): Promise<Pokemon[]> => {
  // await sleep(4);
//   throw new Error('No se pudo cargar la lista de pokemons')

  const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=45')

  const pokemonPomises: Promise<Pokemon>[] = []

  for (const { url } of data.results) {
    const pokemonPromise = axios.get<PokemonResponse>(url).then(({ data }) => {
      return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default
      }
    })

    pokemonPomises.push(pokemonPromise)
  }

  const pokemons = await Promise.all(pokemonPomises)

  return pokemons
}
