import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'
import store from './store/store'
import './assets/main.css'

store.startLoadingPokemons()

const app = createApp(App)

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        gcTime: 1000 * 120, // La información se borrará de la caché después de 2 minutos
        refetchOnReconnect: 'always' // Siempre se refrescará la información cuando se reconecte
      }
    }
  }
})

// app.use(VueQueryPlugin)
app.use(router)

app.mount('#app')
