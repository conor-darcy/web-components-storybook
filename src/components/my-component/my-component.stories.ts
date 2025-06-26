import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Components/MyComponent",
  component: "my-component",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    first: {
      control: "text",
      description: "The first name",
    },
    last: {
      control: "text",
      description: "The last name",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    first: "Stencil",
    last: "Storybook",
  },
};
