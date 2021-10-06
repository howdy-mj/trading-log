import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './index';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
};

export const TextArea = Template.bind({});
TextArea.args = {
  title: '입력창',
  type: 'textarea',
};

export const Radio = Template.bind({});
Radio.args = {
  title: '예측',
  type: 'radio',
  radioInfo: [{ name: '상승' }],
};
