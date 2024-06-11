import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import PaginatedTable from "./table";
import {
  AppRouterContext,
  type AppRouterInstance,
} from "next/dist/shared/lib/app-router-context.shared-runtime";

const COLUMNS = [
  {
    name: "id",
    label: "ID",
  },
  {
    name: "name",
    label: "Name",
  },
  {
    name: "description",
    label: "Description",
  },
];

const DATA = [
  {
    id: "1",
    name: "Event 1",
    description: "Event 1 Description",
  },
  {
    id: "2",
    name: "Event 2",
    description: "Event 2 Description",
  },
  {
    id: "3",
    name: "Event 3",
    description: "Event 3 Description",
  },
  {
    id: "4",
    name: "Event 4",
    description: "Event 4 Description",
  },
];

const meta: Meta<typeof PaginatedTable> = {
  title: "Components/PaginatedTable",
  component: PaginatedTable,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <AppRouterContext.Provider value={{} as AppRouterInstance}>
        <Story />
      </AppRouterContext.Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: COLUMNS,
    data: DATA,
  },
};
