import { Blog, BlogPostCard } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const blogMock: Blog = {
  id: 1,
  title: "What is SEO? Popular SEO Models 2023 - 2024",
  content:
    "<p>To help develop your brand, increase sales, and enhance online interaction, mastering SEO is essential. So what is SEO?.</p>",
  slug: "sample-blog-post",
  content_md: "This is the markdown content.",
  created_at: "2024-11-20T00:00:00Z",
  updated_at: null,
  published_at: new Date(),
  created_by_id: 1,
  updated_by_id: null,
  description: "A short description of the blog post",
  tags: "tech, programming",
  image:
    "https://dataimpact.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduglozz3y%2Fimage%2Fupload%2Fv1723783037%2FSlide11_f599006138.jpg&w=1920&q=75",
  author_post: {
    name: "Em Ba",
    image:
      "https://dataimpact.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduglozz3y%2Fimage%2Fupload%2Fv1724207543%2FScreenshot_2024_08_20_at_14_22_58_6f48e6f211.png&w=1920&q=75",
  },
};

const meta: Meta<typeof BlogPostCard> = {
  title: "Component Web VN/BlogPostCard",
  component: BlogPostCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    blog: { control: "object" },
    tags: { control: [] },
  },
} satisfies Meta<typeof BlogPostCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    blog: blogMock,
    tags: ["Tech", "Programming"],
  },
};

export const NoImage: Story = {
  args: {
    blog: { ...blogMock, image: null },
    tags: ["Tech"],
  },
};

export const LongContent: Story = {
  args: {
    blog: {
      ...blogMock,
      content: "<p>".repeat(100) + "Long content here.</p>",
    },
    tags: ["Tag Long Post"],
  },
};
