import type { Meta, Story } from '@storybook/react'

import { Card, CardProps } from './Card'

const meta: Meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta
/** This is a component  */
const Template: Story<CardProps> = props => (
  <div style={{ position: 'relative', width: '300px', margin: '0 auto' }}>
    <Card {...props} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  name: 'Pokeball',
  image_url: '/pokeicon.svg',
  width: 10,
  height: 10,
}
