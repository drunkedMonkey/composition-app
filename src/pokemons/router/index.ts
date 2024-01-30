import type { RouteRecordRaw } from 'vue-router'

const ROUTE_NAME = 'pokemons'

export const pokemonRoute: RouteRecordRaw = {
  path: `${ROUTE_NAME}`,
  redirect: `${ROUTE_NAME}/list/`,
  component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
  children: [
    {
      name: 'pokemon-list',
      path: `/${ROUTE_NAME}/list`,
      props: { title: 'Listado' },
      component: () => import('@/pokemons/pages/PokemonList.vue')
    },
    {
      name: 'pokemon-list-native',
      path: `/${ROUTE_NAME}/list-native`,
      props: { title: 'Listado Nativo' },
      component: () => import('@/pokemons/pages/PokemonListNative.vue')
    },
    {
      name: 'pokemon-id',
      path: `/${ROUTE_NAME}/by/:id`,
      props: { title: 'Pokémon por ID' },
      component: () => import('@/pokemons/pages/PokemonById.vue')
    },
    {
      name: 'pokemon-search',
      path: `/${ROUTE_NAME}/search`,
      props: { title: 'Búsqueda' },
      component: () => import('@/pokemons/pages/PokemonSearch.vue')
    }
  ]
}
