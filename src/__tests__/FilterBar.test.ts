import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { mount, VueWrapper, config } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import FilterBar from '../components/FilterBar.vue'
import { Plugin } from 'vue'

config.global.stubs.transition = false
config.global.stubs['transition-group'] = false

describe('FilterBar', () => {
  let wrapper: VueWrapper
  let vuetify: Plugin
  beforeEach(() => {
    vuetify = createVuetify({ components, directives })
    wrapper = mount(FilterBar, {
      global: {
        plugins: [vuetify]
      },
      props: {
        filter: '',
        itemName: 'dog'
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders properly', () => {
    expect(wrapper.find('.filter-bar').exists()).toBe(true)
  })

  // todo: test filter event emit once I figure out DOM rendering
})
