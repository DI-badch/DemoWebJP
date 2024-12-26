import { NewsComponent } from "@di/components-ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NewsComponent> = {
  title: "Component Web JP/NewsComponent",
  component: NewsComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    newsData: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const fakeNewsData = [
  {
    date: "2024.11.01",
    description:
      "企業ホームページのリニューアルを行いました。SEO対策を強化し、顧客獲得率を向上させました。",
  },
  {
    date: "2024.10.25",
    description:
      "新しいサービスを開始しました。これにより顧客満足度が大幅に向上しました。",
  },
  {
    date: "2024.10.10",
    description: "弊社が提供する製品が業界最高の評価を受けました。",
  },
  {
    date: "2024.10.10",
    description: "弊社が提供する製品が業界最高の評価を受けました。",
  },
];

export const Default: Story = {
  args: {
    title: "ニュース",
    newsData: fakeNewsData,
  },
};

export const CustomNewsData: Story = {
  args: {
    title: "最新情報",
    newsData: [
      {
        date: "2024.12.01",
        description: "新しいプロジェクトを開始しました。",
      },
      {
        date: "2024.11.15",
        description: "サービス品質がISO規格を取得しました。",
      },
    ],
  },
};

export const EmptyNews: Story = {
  args: {
    title: "お知らせ",
    newsData: [],
  },
};
