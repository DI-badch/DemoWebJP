import { BenefitSection } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BenefitSection> = {
  title: "Component Web VN/BenefitSection",
  component: BenefitSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    benefits: { control: "object" },
    title: { control: "object" },
    subtitle: { control: "object" },
  },
} satisfies Meta<typeof BenefitSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Phúc lợi",
    subtitle: "Benefit",
    benefits: [
      {
        id: 1,
        image: "https://dataimpact.vn/images/award-opportunity.svg",
        content: "Thưởng hiệu quả công việc, thưởng dự án, thưởng doanh thu.",
      },
      {
        id: 2,
        image: "https://dataimpact.vn/images/award-opportunity.svg",
        content: "Khám sức khỏe định kỳ 1 lần/năm.",
      },
      {
        id: 3,
        image: "https://dataimpact.vn/images/award-opportunity.svg",
        content: "Giờ làm việc: 8h00 đến 17h00 từ thứ Hai đến thứ Sáu.",
      },
      {
        id: 4,
        image: "https://dataimpact.vn/images/award-opportunity.svg",
        content: "Cơ hội đi onsite tại Nhật Bản.",
      },
    ],
  },
};
