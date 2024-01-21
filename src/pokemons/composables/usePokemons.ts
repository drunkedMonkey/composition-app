import { computed } from 'vue'
import { getPokemons } from '../helpers/get-Pokemons'
import { useQuery } from '@tanstack/vue-query'

export const usePokemons = () => {

    const {isLoading,data:pokemons, isError, error} = useQuery({
          queryKey:['pokemons'], //nombre que tendrá en el caché
          queryFn: getPokemons, //función que se ejecutará para obtener los datos
        })


  return {
    // properties
    pokemons,
    isLoading,    
    error,
    isError,
    // computed
    count: computed(() => pokemons.value?.length ?? 0),
  }
}
