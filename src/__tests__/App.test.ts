import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Dreams')
    expect(wrapper.text()).toContain('Tags')
    expect(wrapper.text()).toContain('Visualizations')
  })
})
