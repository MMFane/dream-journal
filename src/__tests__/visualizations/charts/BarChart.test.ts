import { describe, it, expect, afterEach, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import tagCountsFixture from '../../__fixtures__/tag-counts-fixture.json'

import BarChart from '../../../components/visualizations/charts/BarChart.vue'

describe('VisualizationsList', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(BarChart, {
      props: {
        data: tagCountsFixture
      }
    })
  })
  afterEach(() => {
    wrapper.unmount()
  })

  it('renders properly', () => {
    expect(wrapper.text()).toContain('mustard')
    expect(wrapper.text()).toContain('sriracha')
    expect(wrapper.text()).toContain('aioli')
  })
})
