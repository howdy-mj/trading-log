import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Info = Template.bind({});
Info.args = {
  status: 'info',
  label: 'Button',
};

export const Active = Template.bind({});
Active.args = {
  status: 'active',
  label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  status: 'danger',
  label: 'Button',
};
