import React from "react";
import StatBox from "./StatBox";

export default {
    title: "Components/StatBox",
    component: StatBox,
    argTypes: {
        title: { control: { type: 'text' } },
        subtitle: { control: { type: 'text' } },
        progress: { control: { type: 'number' }, min:0, max: 200 },
        increase: { control: { type: 'text' } },
    },
};

const Template = (args) => <StatBox {...args} />

export const Default = Template.bind({});

Default.args = {
    title: "12,126",
    subtitle: "Small Size",
    progress: 0.75,
    increase: "+14%",
}