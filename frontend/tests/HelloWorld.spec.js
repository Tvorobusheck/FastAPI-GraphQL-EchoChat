import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders the correct message', async () => {
    const wrapper = mount(HelloWorld)
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain('Hello, World!')
  })
})
