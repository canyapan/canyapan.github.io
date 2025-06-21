import { mount } from '@vue/test-utils'
import App from './App.vue'
import Profile from './components/Profile.vue'
import Contact from './components/Contact.vue'
import Skills from './components/Skills.vue'

describe('App.vue', () => {

  it('renders components', () => {
    const wrapper = mount(App)
    expect(wrapper.findComponent(Profile).exists()).toBe(true)
    expect(wrapper.findComponent(Skills).exists()).toBe(true)
    expect(wrapper.findComponent(Contact).exists()).toBe(true)
  })
})
