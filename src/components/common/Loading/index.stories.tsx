import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loading from 'components/common/Loading/index';

export default {
  title: 'Components/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template = (args: typeof Loading) => <Loading {...args} />;

export const Spinner = Template.bind({});
