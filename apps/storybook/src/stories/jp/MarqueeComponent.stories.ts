import { MarqueeComponent } from "@di/components-ui";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MarqueeComponent> = {
  title: "Component Web JP/MarqueeComponent",
  component: MarqueeComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    images: { control: "object" },
    speed: { control: { type: "range", min: 50, max: 200, step: 10 } },
    gradient: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const imagesMarquee = [
  { src: "/company.png", alt: "Image company", width: 271, height: 80 },
  { src: "/company-1.png", alt: "Image company", width: 271, height: 80 },
  { src: "/company-2.png", alt: "Image company", width: 271, height: 80 },
  { src: "/company-3.png", alt: "Image company", width: 271, height: 80 },
  { src: "/company-4.png", alt: "Image company", width: 271, height: 80 },
  { src: "/company-5.png", alt: "Image company", width: 271, height: 80 },
];

const imagesMarquee1 = [
  {
    src: "/salesforce-partner.png",
    alt: "Image company",
    width: 271,
    height: 80,
  },
  { src: "/sao_khue.png", alt: "Image company", width: 271, height: 80 },
  { src: "/vietnam_top_100.png", alt: "Image company", width: 271, height: 80 },
  { src: "/istqb.png", alt: "Image company", width: 271, height: 80 },
  {
    src: "/salesforce-partner.png",
    alt: "Image company",
    width: 271,
    height: 80,
  },
  { src: "/sao_khue.png", alt: "Image company", width: 271, height: 80 },
  { src: "/vietnam_top_100.png", alt: "Image company", width: 271, height: 80 },
  { src: "/istqb.png", alt: "Image company", width: 271, height: 80 },
];

export const TradingAchievements: Story = {
  args: {
    title: "取引実績",
    images: imagesMarquee,
    speed: 120,
    gradient: true,
  },
};

export const Badges: Story = {
  args: {
    title: "バッジ",
    images: imagesMarquee1,
    speed: 120,
    gradient: false,
  },
};
