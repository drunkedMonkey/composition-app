import { useQuery } from '@tanstack/vue-query'
import { getPokemonById } from '../helpers/get-pokemon-by-id'

export const usePokemon = (id: string | string[]) => {
  const {
    isLoading,
    data: pokemon,
    isError,
    error
  } = useQuery({
    queryKey: ['pokemon', id], //nombre que tendrá en el caché
    queryFn: () => getPokemonById(id), //función que se ejecutará para obtener los datos
    retry: 1 //número de veces que se intentará obtener los datos
  })

  return {
    // properties
    pokemon,
    isLoading,
    errorMessage: error,
    isError
  }
}
