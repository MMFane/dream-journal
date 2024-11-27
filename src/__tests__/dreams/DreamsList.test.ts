import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import vuetifyPlugin from '../../vuetify'

import DreamsList from '../../components/dreams/DreamsList.vue'
import { Plugin } from 'vue'
import dreamsFixture from '../__fixtures__/dreams-fixture.json'

describe('DreamsList', () => {
  let wrapper: VueWrapper
  let vuetify: Plugin
  beforeEach(() => {
    vuetify = vuetifyPlugin
    wrapper = mount(DreamsList, {
      global: {
        plugins: [vuetify]
      },
      props: {
        dreams: dreamsFixture
      }
    })
  })
  afterEach(() => {
    wrapper.unmount()
  })

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Dreams List')
  })
})
