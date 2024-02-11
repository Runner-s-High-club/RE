import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  component: Button,
  argTypes: {
    children: {
      description: 'React.ReactNode',
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['S', 'M', 'L'],
      table: {
        type: { summary: 'S | M | L' },
        defaultValue: { summary: 'L' },
      },
      description: '',
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['defaultStyle', 'primaryStyle', 'ghostStyle'],
      table: {
        type: { summary: 'defaultStyle | primaryStyle | ghostStyle' },
        defaultValue: { summary: 'defaultStyle' },
      },
      description: '',
    },
    htmlType: {
      control: {
        type: 'select',
      },
      options: ['button', 'reset', 'submit'],
      table: {
        type: { summary: 'button | reset | submit' },
        defaultValue: { summary: 'button' },
      },
      description: '',
    },
    radius: {
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
      description: '',
    },
    ref: {
      table: {
        type: { summary: 'ref' },
      },
      description: '',
    },
  },
  parameters: {
    componentSubtitle: '기본으로 사용되는 버튼 스타일',
  },
} as Meta<typeof Button>;

export default meta;

export type ButtonStory = StoryObj<typeof Button>;

export {
  Primary,
  Primary_Hover,
  Primary_Active,
  Primary_Disabled,
} from './stories/Primary';

export {
  Outline,
  Outline_Hover,
  Outline_Active,
  Outline_Disabled,
} from './stories/Outline';
