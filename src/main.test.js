import { describe, it, expect, beforeEach } from 'vitest'

// Since main.js mounts the app to #app, we need to mock the DOM
describe('main.js', () => {
  beforeEach(() => {
    // Set up a mock #app element in the document
    const appDiv = document.createElement('div')
    appDiv.id = 'app'
    document.body.appendChild(appDiv)
    // Initially, #app should have no content
    expect(appDiv.innerHTML.length).toStrictEqual(0)
  })

  it('mounts the Vue app without errors', async () => {
    // Import main.js dynamically so it runs after DOM is set up
    await import('./main.js')
    const appDiv = document.getElementById('app')
    // After mounting, #app should have Vue content
    expect(appDiv.innerHTML.length).toBeGreaterThan(0)
  })
})
