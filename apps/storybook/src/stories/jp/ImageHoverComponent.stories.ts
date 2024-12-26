import { ImageHoverComponent } from "@di/components-ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ImageHoverComponent> = {
  title: "Component Web JP/ImageHoverComponent",
  component: ImageHoverComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    imageSrc: { control: "text" },
    imageAlt: { control: "text" },
    iconSrc: { control: "text" },
    iconAlt: { control: "text" },
    mainText: { control: "text" },
    hoverText: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: "/about.webp",
    imageAlt: "Image service",
    iconSrc: "/icon.svg",
    iconAlt: "add_rounded",
    mainText: "包括的な技術ソリューション",
    hoverText:
      "当社は、データプラットフォームの構築からデータ分析、さらには可視化や管理アプリの実装に至るまで、幅広い技術ソリューションを提供しています。お客様のニーズに応じた総合的なアプローチで、ビジネスの成長を支援します。",
  },
};

export const CustomHoverText: Story = {
  args: {
    imageSrc: "/about.webp",
    imageAlt: "Custom image",
    iconSrc: "/icon.svg",
    iconAlt: "custom_icon",
    mainText: "カスタムテキスト",
    hoverText: "こちらはカスタムホバーテキストの例です。",
  },
};
