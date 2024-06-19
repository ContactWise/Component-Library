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
  {
    name: "status",
    label: "Status",
    propertyPath: "status.title",
  },
];

const DATA = [
  {
    id: "1",
    name: "Event 1",
    description: "Event 1 Description",
    status: {
      title: "Active",
      description: "Event 1 Status",
    },
  },
  {
    id: "2",
    name: "Event 2",
    description: "Event 2 Description",
    status: {
      title: "Inactive",
      description: "Event 2 Status",
    },
  },
  {
    id: "3",
    name: "Event 3",
    description: "Event 3 Description",
    status: {
      title: "Active",
      description: "Event 3 Status",
    },
  },
  {
    id: "4",
    name: "Event 4",
    description: "Event 4 Description",
    status: {
      title: "Inactive",
      description: "Event 4 Status",
    },
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
