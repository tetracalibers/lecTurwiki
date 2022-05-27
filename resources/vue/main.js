import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import Qui from '@qvant/qui-max'
import '@qvant/qui-max/styles'

createApp(App).use(router).use(Qui).mount('#app')
