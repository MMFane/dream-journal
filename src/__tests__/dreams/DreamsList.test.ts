import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import DreamsList from '../../components/dreams/DreamsList.vue'
import { Plugin } from 'vue'

describe('Button', () => {
  let wrapper: VueWrapper
  let vuetify: Plugin
  beforeEach(() => {
    vuetify = createVuetify()
    wrapper = mount(DreamsList, {
      global: {
        plugins: [vuetify]
      }
    })
  })
  afterEach(() => {
    wrapper.unmount()
  })

  it('renders properly', () => {
    const wrapper = mount(DreamsList, {
      global: {
        plugins: [vuetify]
      }
    })
    expect(wrapper.text()).toContain('Dreams List')
  })
})
