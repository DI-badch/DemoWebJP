import { PartnerSection } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PartnerSection> = {
  title: "Components/PartnerSection",
  component: PartnerSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    partners: { control: "object" },
  },
} satisfies Meta<typeof PartnerSection>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    partners: [
      {
        id: 1,
        name: "Partner 1",
        content: "This is Partner 1",
        image_url:
          "https://res.cloudinary.com/dcn8reqzy/image/upload/v1728267112/Microgoft_3feb0808a4.png",
      },
      {
        id: 2,
        name: "Partner 2",
        content: "This is Partner 2",
        image_url:
          "https://res.cloudinary.com/dcn8reqzy/image/upload/v1728267112/Microgoft_3feb0808a4.png",
      },
      {
        id: 3,
        name: "Partner 3",
        content: "This is Partner 3",
        image_url:
          "https://res.cloudinary.com/dcn8reqzy/image/upload/v1728267112/Microgoft_3feb0808a4.png",
      },
    ],
  },
};
