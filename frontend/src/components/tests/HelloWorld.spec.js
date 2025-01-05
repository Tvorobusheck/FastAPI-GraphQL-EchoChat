// tests/HelloWorld.spec.js
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders the message passed as a prop', () => {
    const msg = 'Hello, Vue!'
    const wrapper = mount(HelloWorld, {
      props: { msg }
    })

    // Check that the message prop is rendered inside the <h1> tag
    expect(wrapper.find('h1').text()).toBe(msg)
  })
})
