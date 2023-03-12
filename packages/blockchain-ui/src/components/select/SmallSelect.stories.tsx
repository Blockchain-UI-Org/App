import { Story, Meta } from "@storybook/react";
import { ISmallSelectProps, SmallSelect as SmallSelectComp } from "./SmallSelect";

export default {
  component: SmallSelectComp,
  title: "General /Select",
} as Meta;

const Template: Story<ISmallSelectProps> = (args) => <SmallSelectComp {...args} />;


export const SmallSelect = Template.bind({});


SmallSelect.args ={
    options: ["value 1", "value 2", "value 3"],
    onChange: (val) => {
        
    },
    selectedValue: "",
}