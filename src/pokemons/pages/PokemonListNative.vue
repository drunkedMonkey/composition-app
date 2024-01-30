<script setup lang="ts">
import store from '@/store/store'
import PokemonCardList from '../components/PokemonCardList.vue'
import { useQuery } from '@tanstack/vue-query'
import { getPokemons } from '../helpers/get-Pokemons'

useQuery({
  queryKey: ['pokemons'], //nombre que tendrá en el caché
  queryFn: getPokemons, //función que se ejecutará para obtener los datos
  select: (data) => {
    store.loadedPokemons(data)
  }
})
</script>

<template>
  <div>
    <h3 v-if="store.pokemons.isLoading">Cargando...</h3>

    <div v-else-if="store.pokemons.hasError">{{ store.pokemons.errorMessage }}</div>

    <div v-else>
      <h1>Pokemon list Native - {{ store.pokemons.count }}</h1>

      <PokemonCardList :pokemons="store.pokemons.list" />
    </div>
  </div>
</template>
