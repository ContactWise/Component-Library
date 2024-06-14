import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumbs from "./breadcrumbs";
import { ChevronRight, Slash } from "lucide-react";

const meta = {
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    path: "/dashboard/applications/4125",
    separator: <ChevronRight />,
  },
};
