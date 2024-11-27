import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'

import { createVuetify } from 'vuetify'
import DreamsTagChart from '../../../components/visualizations/charts/DreamsTagChart.vue'
import { Plugin } from 'vue'
import dreamsFixture from '../../__fixtures__/dreams-fixture.json'

describe('VisualizationsList', () => {
  let wrapper: VueWrapper
  let vuetify: Plugin
  beforeEach(() => {
    vuetify = createVuetify()
    wrapper = mount(DreamsTagChart, {
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
    console.log(wrapper.html())
    expect(wrapper.text()).toContain('Dreams Tag Chart')
  })
})