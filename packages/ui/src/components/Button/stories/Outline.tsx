import { ButtonStory } from '../Button.stories';

export const Outline: ButtonStory = {
  args: {
    children: 'Outline',
    variant: 'outlineStyle',
  },
};

export const Outline_Hover: ButtonStory = {
  args: {
    variant: 'outlineStyle',
    children: 'Outline Hover',
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Outline_Active: ButtonStory = {
  args: {
    variant: 'outlineStyle',
    children: 'Outline Active',
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const Outline_Disabled: ButtonStory = {
  args: {
    variant: 'outlineStyle',
    children: 'Outline Disabled',
    disabled: true,
  },
};
