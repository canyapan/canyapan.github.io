import { mount } from '@vue/test-utils'
import App from './App.vue'
<<<<<<< HEAD
import Profile from './components/Profile.vue'
import Contact from './components/Contact.vue'
import Skills from './components/Skills.vue'

describe('App.vue', () => {

  it('renders components', () => {
    const wrapper = mount(App)
    expect(wrapper.findComponent(Profile).exists()).toBe(true)
    expect(wrapper.findComponent(Skills).exists()).toBe(true)
    expect(wrapper.findComponent(Contact).exists()).toBe(true)
=======

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
>>>>>>> origin/main
  })
})
