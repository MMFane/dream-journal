import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { mount, VueWrapper, config } from '@vue/test-utils'
import vuetifyPlugin from '../vuetify'

import FilterBar from '../components/FilterBar.vue'
import { Plugin } from 'vue'

config.global.stubs.transition = false
config.global.stubs['transition-group'] = false

describe('FilterBar', () => {
  let wrapper: VueWrapper
  let vuetify: Plugin
  beforeEach(() => {
    vuetify = vuetifyPlugin
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
