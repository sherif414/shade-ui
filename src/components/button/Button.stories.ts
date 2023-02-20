import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './button.vue'

const meta = {
  component: Button,
  tags: ['autodocs'],
  args: {
    size: 'md',
    disabled: false,
    loading: false,
    type: 'button',
    variant: 'filled',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    type: { control: 'select', options: ['submit', 'button'], defaultValue: 'button' },
    variant: { control: 'select', options: ['filled', 'text'], defaultValue: 'filled' },
  },

  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: `<Button v-bind="args">{{args.default.value}}</Button>`,
  }),
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}
