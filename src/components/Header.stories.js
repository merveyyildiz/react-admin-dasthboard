import React from "react";
import Header from "./Header";

export default {
    title: "components/Header",
    component: Header,
    argTypes: {
        title: { control: { type: "text" } },
        subtitle: { control: { type: "text" } }
    }
};

const Template = (args) => <Header {...args} />

export const Default = Template.bind({});

Default.args = {
    title: "Example Title",
    subtitle: "Example Subtitle"
}