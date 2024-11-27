import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
// import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './style.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import DreamsPage from './components/routes/DreamsPage.vue'
import TagsPage from './components/routes/TagsPage.vue'
import VisualizationPage from './components/routes/VisualizationsPage.vue'

const routes = [
  { path: '/', component: DreamsPage },
  { path: '/tags', component: TagsPage },
  { path: '/visualizations', component: VisualizationPage }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

createApp(App).use(router).use(vuetify).mount('#app')
