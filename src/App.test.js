import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App.vue', () => {
  it('renders a div with the profile class', () => {
    const wrapper = mount(App)
    expect(wrapper.find('div.profile').exists()).toBe(true)
  })

  it('renders a div with the contact class', () => {
    const wrapper = mount(App)
    expect(wrapper.find('div.contact').exists()).toBe(true)
  })

  it('renders a div with the skills class', () => {
    const wrapper = mount(App)
    expect(wrapper.find('div.skills').exists()).toBe(true)
  })
})
