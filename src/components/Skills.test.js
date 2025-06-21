import { mount } from '@vue/test-utils'
import Skills from './Skills.vue'

describe('Skills.vue', () => {
  it('renders the Skills heading', () => {
    const wrapper = mount(Skills)
    expect(wrapper.text()).toContain('Skills')
  })

  it('renders the list of skills', () => {
    const wrapper = mount(Skills)
    const items = wrapper.findAll('li')
    expect(items.length).toBeGreaterThan(0)
    expect(items[0].text()).toContain('Java')
    expect(items[1].text()).toContain('MQ')
  })
})
