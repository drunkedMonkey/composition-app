<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Pokemon } from '../interfaces'

interface Props {
  pokemon: Pokemon
}

const props = defineProps<Props>()

const router = useRouter()

const goTo = () => {
  router.push({ name: 'pokemon-id', params: { id: props.pokemon.id } })
}
</script>

<template>
  <div class="pokemon-card" @click="goTo">
    <img :src="$props.pokemon.frontSprite" :alt="$props.pokemon.name" />
    <h3>{{ $props.pokemon.name }}</h3>
  </div>
</template>

<style scoped>
.pokemon-card {
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
}

img {
  width: 150px;
  border-radius: 5px 5px 0 0;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
  transition: all 0.5s;
}

img:hover {
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5);
  transition: all 0.5s;
}
</style>
