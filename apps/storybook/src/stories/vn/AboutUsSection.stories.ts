import type { Meta, StoryObj } from "@storybook/react";
import { AboutUsSection } from "@di/components-ui";

const meta: Meta<typeof AboutUsSection> = {
  title: "Component Web VN/AboutUsSection",
  component: AboutUsSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    aboutUses: { control: "text" },
  },
} satisfies Meta<typeof AboutUsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    aboutUses: [
      {
        id: 1,
        title: "Sứ mệnh",
        content:
          "Với slogan &quot;Empower Your Will&quot; Data Impact cam kết hỗ trợ và thúc đẩy ứng dụng công nghệ vào thực tế, giúp đẩy mạnh sự phát triển của doanh nghiệp trong thời đại số, điều có thể thay đổi thế giới và tương lai của chúng ta.    &quot;Empower Your Will&quot; cũng là kim chỉ nam để chúng tôi xây dựng doanh nghiệp, trở thành nơi mà mọi thành viên trong công ty có thể thực hiện được cả các mục tiêu và mong muốn trong sự nghiệp của mình.",
      },
      {
        id: 2,
        title: "Tầm nhìn",
        content:
          "Data Impact hướng tới mục tiêu trở thành đối tác công nghệ đáng tin cậy hàng đầu, giúp khách hàng lựa chọn và ứng dụng được các công nghệ phù hợp và tiên tiến nhất.  Trong một thế giới cạnh tranh khốc liệt như hiện tại việc ứng dụng công nghệ trở thành một nhiệm vụ bắt buộc với mọi doanh nghiệp. Điều đó có nghĩa là sẽ luôn có một thị trường nơi chúng tôi có thể cung cấp các giá trị của Data Impact.",
      },
    ],
  },
};
