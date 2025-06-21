import { mount } from '@vue/test-utils'
import Contact from './Contact.vue'

describe('Contact.vue', () => {
  it('renders the Contact heading', () => {
    const wrapper = mount(Contact)
    expect(wrapper.text()).toContain('Contact')
  })

  it('renders the LinkedIn link', () => {
    const wrapper = mount(Contact)
    const link = wrapper.find('a')
    expect(link.exists()).toBe(true)
    expect(link.text()).toBe('linkedin.com/in/canyapan')
    expect(link.attributes('href')).toBe('https://linkedin.com/in/canyapan')
  })
})
