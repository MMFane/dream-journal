import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import dreamsFixture from '../__fixtures__/dreams-fixture.json'
import vuetifyPlugin from '../../vuetify'

import TagsList from '../../components/tags/TagsList.vue'
import { Plugin } from 'vue'

describe('TagsList', () => {
  let wrapper: VueWrapper
  let vuetify: Plugin
  beforeEach(() => {
    vuetify = vuetifyPlugin
    wrapper = mount(TagsList, {
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
    expect(wrapper.text()).toContain('Tags List')
    expect(wrapper.text()).toContain('blue')
    expect(wrapper.text()).toContain('green')
    expect(wrapper.text()).toContain('purple')
    expect(wrapper.text()).toContain('red')
    expect(wrapper.text()).not.toContain('orange')
  })

  it('filters tags', async () => {
    const filterBar = wrapper.find('.v-field__input')
    await filterBar.setValue('blue')
    await filterBar.trigger('input')
    expect(wrapper.text()).toContain('blue')
    expect(wrapper.text()).not.toContain('green')
    expect(wrapper.text()).not.toContain('purple')
    expect(wrapper.text()).not.toContain('red')
    expect(wrapper.text()).not.toContain('orange')
  })
})
