<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePokemon } from '../composables/usePokemon'

const route = useRoute()

const { id } = route.params

// const { isLoading, isError, pokemon, errorMessage } = usePokemon(id)
const { isLoading, isError, errorMessage, pokemon } = usePokemon(id)
</script>

<template>
  <div>
    <h3 v-if="isLoading">Cargando...</h3>

    <div v-else-if="isError">{{ errorMessage }}</div>

    <div v-else-if="pokemon">
      <h1>{{ pokemon.name }}</h1>

      <img :src="pokemon.frontSprite" :alt="pokemon.name" />
    </div>
  </div>
</template>

<style scoped>
.character-container {
  display: flex;
  flex-direction: row;
}

img {
  width: 150px;
  border-radius: 5px;
}
</style>
