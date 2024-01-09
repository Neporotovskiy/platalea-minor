import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: "Components/Button",
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    name: "Простая кнопка",
    args: {
        children: "Hello there!",
    },
};
