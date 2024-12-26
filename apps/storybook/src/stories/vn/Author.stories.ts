import type { Meta, StoryObj } from "@storybook/react";
import { Author } from "@di/components-ui";

const meta: Meta<typeof Author> = {
  title: "Component Web VN/Author",
  component: Author,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    blog: { control: "object" },
  },
} satisfies Meta<typeof Author>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    blog: {
      id: 1,
      title: "Sample Blog Post",
      slug: "sample-blog-post",
      created_at: "2024-01-01T12:00:00Z",
      author_post: {
        name: "baDong",
        image:
          "https://dataimpact.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduglozz3y%2Fimage%2Fupload%2Fv1725003115%2Fdohaihung_78c976b7e5.png&w=1920&q=75",
      },
      tags: "React, JavaScript, Web Development",
    },
  },
};
