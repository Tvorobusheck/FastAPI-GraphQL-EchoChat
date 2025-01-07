// tests/HelloWorld.spec.js
import { mount } from '@vue/test-utils'
import test from '../api'

describe('api.js', () => {
  it('test java import', async () => {
    expect(test.foo()).toBe("foo")
  })
})
