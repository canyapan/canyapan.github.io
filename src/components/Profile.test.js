import { mount } from '@vue/test-utils'
import Profile from './Profile.vue'

describe('Profile.vue', () => {
  it('renders the name', () => {
    const wrapper = mount(Profile)
    expect(wrapper.text()).toContain('Can Yapan')
  })

  it('renders the job title', () => {
    const wrapper = mount(Profile)
    expect(wrapper.text()).toContain('Software Engineer | Java')
  })
})
