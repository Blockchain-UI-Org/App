import { Story, Meta } from '@storybook/react';
import { TabSwitcher, TabSwitcherProps } from './tabSwitcher';
import { mockedTabs } from './mockedTabs';

export default {
  component: TabSwitcher,
  title: 'General/ Tab Switcher',
} as Meta;

const Template: Story<TabSwitcherProps> = args => <TabSwitcher {...args}></TabSwitcher>;

export const Basic = Template.bind({});

Basic.args = {
  tabs: mockedTabs.BASIC,
};

export const Icons = Template.bind({});

Icons.args = {
  tabs: mockedTabs.ICON,
};

export const ManyTabs = Template.bind({});

ManyTabs.args = {
  tabs: mockedTabs.MANY,
};
