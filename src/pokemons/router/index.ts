import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME='pokemons';


export const pokemonRoute:RouteRecordRaw = {
    path: `${ROUTE_NAME}`,
    redirect:`${ROUTE_NAME}/list/`,
    component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
    children: [
        {
            path:`/${ROUTE_NAME}/list`,
            component: () => import('@/pokemons/pages/PokemonList.vue'),
        },
        {
            path:`/${ROUTE_NAME}/by/:id`,
            component: () => import('@/pokemons/pages/PokemonById.vue'),
        },
        {
            path:`/${ROUTE_NAME}/search`,
            component: () => import('@/pokemons/pages/PokemonSearch.vue'),
        },
    ]

}