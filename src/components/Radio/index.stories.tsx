import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from './index';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

// TODO: 동작 필요
export const Test = Template.bind({});
Test.args = {
  title: '예측',
  value: '상승',
  selectInfo: ['상승', '하락'],
};
