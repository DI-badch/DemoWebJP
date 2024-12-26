import { Footer } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  title: "Component Web VN/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    footerData: { control: "text" },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    footerData: {
      address: "data@gmail.com",
      email: "",
      footers_careers_links: [],
      footers_services_links: [],
      link_facebook: "",
      link_linkedin: "",
      phone: "",
    },
  },
};
