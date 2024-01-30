import { computed, watchEffect } from 'vue'
import { getPokemons } from '../helpers/get-Pokemons'
import { useQuery } from '@tanstack/vue-query'

export const usePokemons = () => {
  const {
    isLoading,
    data: pokemons,
    isError,
    error
  } = useQuery({
    queryKey: ['pokemons'], //nombre que tendrá en el caché
    queryFn: getPokemons, //función que se ejecutará para obtener los datos
    retry: 1 //número de veces que se intentará obtener los datos
    // retryDelay: 1000 //tiempo de espera entre cada intento
  })

  watchEffect(() => {
    // console.log('isloading', isLoading.value)
  })

  return {
    // properties
    pokemons,
    isLoading,
    error,
    isError,
    // computed
    count: computed(() => pokemons.value?.length ?? 0)
  }
}
