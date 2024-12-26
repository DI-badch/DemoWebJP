import { TabsPanel } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TabsPanel> = {
  title: "Component Web VN/TabsPanel",
  component: TabsPanel,
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TabsPanel>;

export const Default: Story = {
  args: {
    items: [
      {
        id: 1,
        title: "Sứ mệnh",
        content:
          "Với slogan &quot;Empower Your Will&quot; Data Impact cam kết hỗ trợ và thúc đẩy ứng dụng công nghệ vào thực tế, giúp đẩy mạnh sự phát triển của doanh nghiệp trong thời đại số, điều có thể thay đổi thế giới và tương lai của chúng ta.    &quot;Empower Your Will&quot; cũng là kim chỉ nam để chúng tôi xây dựng doanh nghiệp, trở thành nơi mà mọi thành viên trong công ty có thể thực hiện được cả các mục tiêu và mong muốn trong sự nghiệp của mình.",
      },
    ],
  },
};
