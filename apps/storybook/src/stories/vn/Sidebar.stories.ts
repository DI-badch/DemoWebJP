import { Sidebar } from "@di/components-ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    relatedBlogs: [{ control: "array" }],
    sortedItems: [{ control: "array" }],
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    relatedBlogs: [
      {
        id: 1,
        title: "Blog Post 1",
        slug: "blog-post-1",
        image:
          "https://dataimpact.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduglozz3y%2Fimage%2Fupload%2Fv1724915213%2Ftransformer_05c44e2178.jpg&w=1920&q=75",
        created_at: "2024-01-01",
        tags: "React, JavaScript, Web",
        content: null,
        content_md: null,
        updated_at: null,
        published_at: null,
        created_by_id: null,
        updated_by_id: null,
        description: null,
        author_post: {
          name: "Name",
          image: "",
        },
      },
      {
        id: 2,
        title: "Blog Post 2",
        slug: "blog-post-2",
        image:
          "https://dataimpact.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduglozz3y%2Fimage%2Fupload%2Fv1724915213%2Ftransformer_05c44e2178.jpg&w=1920&q=75",
        created_at: "2024-02-01",
        tags: "Next.js, React, TypeScript",
        content: null,
        content_md: null,
        updated_at: null,
        published_at: null,
        created_by_id: null,
        updated_by_id: null,
        description: null,
        author_post: {
          name: "Name",
          image: "",
        },
      },
      {
        id: 3,
        title: "Blog Post 3",
        slug: "blog-post-3",
        image:
          "https://dataimpact.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduglozz3y%2Fimage%2Fupload%2Fv1724915213%2Ftransformer_05c44e2178.jpg&w=1920&q=75",
        created_at: "2024-03-01",
        tags: "Vue.js, JavaScript, Frontend",
        content: null,
        content_md: null,
        updated_at: null,
        published_at: null,
        created_by_id: null,
        updated_by_id: null,
        description: null,
        author_post: {
          name: "Name",
          image: "",
        },
      },
    ],
    sortedItems: [
      {
        id: 1,
        title: "Blog Post 1",
        slug: "blog-post-1",
        image:
          "https://dataimpact.vn/_next/image?url=https%3A%2F%…24915213%2Ftransformer_05c44e2178.jpg&w=1920&q=75",
        created_at: "2024-01-01",
        tags: "React, JavaScript, Web Development",
        content: null,
        content_md: null,
        updated_at: null,
        published_at: null,
        created_by_id: null,
        updated_by_id: null,
        description: null,
        author_post: {
          name: "Name",
          image: "",
        },
      },
      {
        id: 2,
        title: "Blog Post 2",
        slug: "blog-post-2",
        image:
          "https://dataimpact.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduglozz3y%2Fimage%2Fupload%2Fv1724915213%2Ftransformer_05c44e2178.jpg&w=1920&q=75",
        created_at: "2024-02-01",
        tags: "Next.js, React, TypeScript",
        content: null,
        content_md: null,
        updated_at: null,
        published_at: null,
        created_by_id: null,
        updated_by_id: null,
        description: null,
        author_post: {
          name: "Name",
          image: "",
        },
      },
      {
        id: 3,
        title: "Blog Post 3",
        slug: "blog-post-3",
        image:
          "https://dataimpact.vn/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fduglozz3y%2Fimage%2Fupload%2Fv1724915213%2Ftransformer_05c44e2178.jpg&w=1920&q=75",
        created_at: "2024-03-01",
        tags: "Vue.js, JavaScript, Frontend",
        content: null,
        content_md: null,
        updated_at: null,
        published_at: null,
        created_by_id: null,
        updated_by_id: null,
        description: null,
        author_post: {
          name: "Name",
          image: "",
        },
      },
    ],
  },
};
