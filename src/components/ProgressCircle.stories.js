import React from "react";
import ProgressCircle from "./ProgressCircle";

export default {
    title: "components/ProgressCircle",
    component: ProgressCircle,
    argTypes: {
        progress: { control: { type: "number" }, min:0, max:100 },
        size: { control: { type: "number" }, min: 0, max: 200 },
    }
}

const Template = (args) => <ProgressCircle {...args} />

export const Default = Template.bind({})
Default.args = {
    progress: 0.75,
    size: 125
}

export const Small = Template.bind({})
Small.args = {
    progress: 0.40,
    size: 40
}
