import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import ChipList from '../components/ChipList.vue'
import { Plugin } from 'vue'

describe('ChipList', () => {
  let wrapper: VueWrapper
  let vuetify: Plugin
  beforeEach(() => {
    vuetify = createVuetify()
    wrapper = mount(ChipList, {
      global: {
        plugins: [vuetify]
      },
      props: {
        itemList: 'supercalifrailistic, expiali, docious',
        filter: 'daisy'
      }
    })
  })
  afterEach(() => {
    wrapper.unmount()
  })

  it('renders properly', () => {
    expect(wrapper.text()).toContain('supercalifrailistic')
    expect(wrapper.text()).toContain('expiali')
    expect(wrapper.text()).toContain('docious')
  })
})
