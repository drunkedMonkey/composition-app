<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons.old';

const {count, pokemons, isLoading} = usePokemons();
</script>

<template>
  <div>
    <h1>Pokemon list - {{ count }}</h1>
    <h3 v-if="isLoading">Cargando...</h3>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>
