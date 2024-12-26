import Image from "next/image";
import { Tag } from "../Tag/Tag";
import type { Blog } from "../blog-post-card/BlogPostCard";

interface AuthorProps {
  blog: Blog;
}

export function Author({ blog }: AuthorProps) {
  const date = new Date(blog.created_at ?? Date.now());

  return (
    <div className="di-mt-10 di-mb-5 di-flex di-flex-col di-gap-5">
      <div className="di-flex di-justify-between">
        <div className="di-flex di-gap-x-4 di-items-center">
          <div className="di-relative di-w-10 di-h-10">
            <Image
              src={blog.author_post?.image ?? "/images/avatar.png"}
              alt="Image Avatar"
              className="di-rounded-full di-bg-gray-50"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="di-text-sm di-leading-6">
            <p className="di-font-semibold di-text-gray-900">
              {blog.author_post?.name ? blog.author_post.name : "Admin"}
            </p>
          </div>
        </div>
        <div>
          <p className="di-text-neutral-500 di-text-sm">Posted on formatDate</p>
        </div>
      </div>
      <div className="di-flex di-flex-wrap di-gap-[10px]">
        {blog.tags?.split(", ").map((tags) => <Tag label={tags} key={tags} />)}
      </div>
    </div>
  );
}
