import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumbs, { BreadcrumbItem } from "./breadcrumbs";
import { ChevronRight, Slash } from "lucide-react";

const meta = {
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

const breadcrumbMap: BreadcrumbItem[] = [
  { href: "/home", label: "Home" },
  { href: "/home/products", label: "Products" },
  { href: "/home/products/shoes", label: "Shoes" },
];

export const Default: Story = {
  args: {
    map: breadcrumbMap,
    path: "/dashboard/applications/4125",
    separator: <ChevronRight />,
  },
};
