// tests/HelloWorld.spec.js
import { mount } from '@vue/test-utils'
import api from '../api'
import { createApp, h } from 'vue'

describe('api.js', () => {
  it('test apollo import exists', async () => {
    expect(api.apolloClient).toBeTruthy()
  })
  
  it('test apollo is established', async () => {
    const app = createApp({
      render: () => h(App),
    })
    expect(api.apolloProvider).toBeTruthy()
    expect(app.use(api.apolloProvider)).toBeTruthy()
  })
  
  it('test apollo simple query', async () => {
    const app = createApp({
      render: () => h(App),
    })
    expect(api.apolloProvider).toBeTruthy()
    expect(app.use(api.apolloProvider)).toBeTruthy()
    const helloMsg = await api.fetchHelloWorld()
    expect(helloMsg).toBe("Hello from GQL server!")
  })
  
})
