import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MyButton from "@/components/MyButton";

export default {
  title: "Example/MyButton",
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const Button1 = Template.bind({});
Button1.args = {
  num: 1,
};

export const Button2 = Template.bind({});
Button2.args = {
  num: 2,
};
