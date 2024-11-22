import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import DreamsListItem from '../../components/dreams/DreamsListItem.vue'
import { Plugin } from 'vue'
import dreamsFixture from '../__fixtures__/dreams-fixture.json'
import { formatSentence } from '../../data/utils'

const dream = dreamsFixture[0]

describe('DreamsListItem', () => {
  let wrapper: VueWrapper
  let vuetify: Plugin
  beforeEach(() => {
    vuetify = createVuetify()
    wrapper = mount(DreamsListItem, {
      global: {
        plugins: [vuetify]
      },
      props: {
        dream: dream,
        filter: ''
      }
    })
  })
  afterEach(() => {
    wrapper.unmount()
  })

  it('renders properly', () => {
    const formattedDate = new Date(dream.date).toDateString()
    expect(wrapper.text()).toContain(formattedDate)
    expect(wrapper.text()).toContain(formatSentence(dream.description))
    expect(wrapper.text()).toContain(dream.tags[0]) // just checking first. tags component tests whole list
  })
})
