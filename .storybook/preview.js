import React from 'react'
import '../.jest/next-image.mock'
import '../src/styles/global.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  Story => (
    <div className="flex items-center justify-center h-screen">
      <Story />
    </div>
  ),
]
