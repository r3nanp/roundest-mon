import type { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from './Button'

/** Some button */
const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ButtonProps> = props => <Button {...props} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
}

export const withSpinner = Template.bind({})
withSpinner.args = {
  children: 'Some text',
  isLoading: true,
}

export const Inverse = Template.bind({})
Inverse.args = {
  children: 'Inverse Button',
  variant: 'inverse',
}

export const Danger = Template.bind({})
Danger.args = {
  children: 'Danger Button',
  variant: 'danger',
}
