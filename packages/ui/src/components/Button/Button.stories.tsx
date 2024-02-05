import { Meta, StoryObj } from '@storybook/react';
import Button from './ButtonComponent';
import Disabled from './stories/Disabled';

const meta = {
  component: Button,
  parameters: {
    componentSubtitle: '기본으로 사용되는 버튼 스타일',
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: 'Button',
  },
};

export const disabled: Story = {
  render: Disabled,
};
