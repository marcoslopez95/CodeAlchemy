import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavbarComponent from './NavbarComponent.vue'

test('Navbar Component', async () => {
  expect(NavbarComponent).toBeTruthy()

  const wrapper = mount(NavbarComponent, {
    props: {
      msg: 'Hello World',
    },
  })
  expect(wrapper.text()).toContain('Hello World')
})
