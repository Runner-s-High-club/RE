import { ButtonStory } from '../Button.stories';

export const Primary: ButtonStory = {
  args: {
    children: 'Primary',
  },
};

export const Primary_Hover: ButtonStory = {
  args: {
    children: 'Primary Hover',
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Primary_Active: ButtonStory = {
  args: {
    children: 'Primary Active',
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const Primary_Disabled: ButtonStory = {
  args: {
    children: 'Primary Disabled',
    disabled: true,
  },
};
