import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import App from '../App.vue'
import vuetifyPlugin from '../vuetify'
import { Plugin } from 'vue'

describe('App', () => {
  let wrapper: VueWrapper
  let vuetify: Plugin
  beforeEach(() => {
    vuetify = vuetifyPlugin
    wrapper = mount(App, {
      global: {
        plugins: [vuetify]
      },
      props: {}
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders correctly', () => {
    expect(wrapper.text()).toContain('Dreams')
    expect(wrapper.text()).toContain('Tags')
    expect(wrapper.text()).toContain('Visualizations')
  })
})
