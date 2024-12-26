import { ServiceComponent } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ServiceComponent> = {
  title: "Component Web JP/ServiceComponent",
  component: ServiceComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    image: { control: "text" },
    reverse: { control: "boolean" },
  },
} satisfies Meta<typeof ServiceComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: "/service.png",
    title: "データサイエンス",
    description: `当社は、データの収集から基盤の構築、加工、分析ツールの導入、可視化、レポーティング、運用まで、ビッグデータを最大限に活用できるよう一貫したサービスを行います。具体的には、DataBricks、SnowFlake、Microsoft Fabricなどの最新のクラウドベースのデータプラットフォームを活用し、効率的かつスケーラブルなデータ処理基盤を提供します。貴社が保有するデータと対話し、隠れた機会を見出し、潜在リスクを特定することで、ビジネスに真の価値をもたらすソリューションを提供します。`,
    reverse: false,
  },
};

export const ReversedLayout: Story = {
  args: {
    image: "/service.png",
    title: "逆向きレイアウトのデータサイエンス",
    description: `このレイアウトは、画像が右側に配置され、コンテンツが左側に表示されます。同様に、最新のクラウドベースのデータプラットフォームを活用し、ビッグデータを最大限に活用するための効率的でスケーラブルな基盤を提供します。`,
    reverse: true,
  },
};
