import { CareerSection } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CareerSection> = {
  title: "Component Web VN/CareerSection",
  component: CareerSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    careers: { control: "object" },
  },
} satisfies Meta<typeof CareerSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    careers: [
      {
        id: 1,
        title: "Frontend Developer",
        slug: "frontend-developer",
        url: "",
      },
      { id: 2, title: "Backend Developer", slug: "backend-developer", url: "" },
      { id: 3, title: "DevOps Engineer", slug: "devops-engineer", url: "" },
    ],
  },
};

export const NoCareers: Story = {
  args: {
    careers: [],
  },
};
