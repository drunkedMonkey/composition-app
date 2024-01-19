<script setup lang="ts">
import { ref } from 'vue'
import { getPokemons } from '../helpers/get-Pokemons'
import type { Pokemon } from '../interfaces'


const data = await getPokemons();
const pokemons = ref<Pokemon[]>(data)

</script>

<template>
  <div>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>
