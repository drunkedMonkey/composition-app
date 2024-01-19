import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'

import './assets/main.css'

const app = createApp(App);

VueQueryPlugin.install(app,{
    queryClientConfig: {
        defaultOptions: {
            queries: {
                gcTime: 1000 * 120,
                refetchOnReconnect: 'always',
            },
        }
    },
})

// app.use(VueQueryPlugin)
app.use(router)

app.mount('#app')
