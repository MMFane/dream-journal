import { createApp } from 'vue'

// Vuetify
// import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createMemoryHistory, createRouter } from 'vue-router'

import DreamsPage from './components/routes/DreamsPage.vue'
import TagsPage from './components/routes/TagsPage.vue'
import HomePage from './components/routes/HomePage.vue'
import VisualizationPage from './components/routes/VisualizationsPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/dreams', component: DreamsPage },
  { path: '/tags', component: TagsPage },
  { path: '/visualizations', component: VisualizationPage }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

import './style.css'
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})

createApp(App).use(vuetify).use(router).mount('#app')
