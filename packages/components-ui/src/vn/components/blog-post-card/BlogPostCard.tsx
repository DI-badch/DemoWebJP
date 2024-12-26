import Link from "next/link";
import Image from "next/image";
import { Tag } from "../Tag/Tag";

export interface AuthorBlog {
  name: string | null;
  image: string | null;
}

export interface Blog {
  id: number | null;
  title?: string | null;
  content?: string | null;
  slug?: string | null;
  content_md?: string | null;
  created_at?: string;
  updated_at?: string | null;
  published_at?: Date | null;
  created_by_id?: number | null;
  updated_by_id?: number | null;
  description?: string | null;
  tags?: string | null;
  image?: string | null;
  author_post?: AuthorBlog;
}

interface BlogPostCardProps {
  blog: Blog | undefined;
  tags: string[];
}

export const BlogPostCard = ({ blog, tags = [] }: BlogPostCardProps) => {
  function formatDate(inputDate: string | Date): string {
    const date = new Date(inputDate);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "2-digit",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }

  const date = new Date(blog?.created_at ?? Date.now());

  return (
    <article className="di-flex di-max-w-xl di-flex-col di-items-start di-justify-between di-border di-rounded-md di-transition-shadow di-duration-300 di-ease-in-out hover:di-shadow-md di-h-full">
      <Link className="di-w-full" href={`blog/${blog?.slug}`} key={blog?.slug}>
        <Image
          src={blog?.image || ""}
          alt="Techblog preview image"
          layout="responsive"
          width={1200}
          height={800}
          className="di-rounded-t-md di-bg-cover di-mb-4"
        />
      </Link>
      <div className="di-px-4 di-w-full di-flex-1 di-flex di-flex-col">
        <div className="di-flex di-items-center md:di-gap-x-4 di-gap-x-1 di-text-xs">
          <div className="di-flex di-flex-wrap">
            <time className="di-whitespace-nowrap di-self-baseline di-text-gray-500 di-py-[6px] di-mr-2">
              {formatDate(date)}
            </time>
            {tags.map((tag) => (
              <Tag label={tag} key={tag} />
            ))}
          </div>
        </div>
        <div className="di-group di-relative">
          <Link href={`blog/${blog?.slug}`} key={blog?.slug}>
            <h3 className="di-mt-3 di-text-lg di-font-semibold di-leading-6 di-group-hover:di-text-blue-500 di-text-gray-600">
              <span className="di-absolute di-inset-0" />
              {blog?.title}
            </h3>
            <p
              dangerouslySetInnerHTML={{ __html: blog?.content ?? "" }}
              className="di-mt-5 di-line-clamp-3 di-text-sm di-leading-6 di-text-gray-600"
            />
          </Link>
        </div>
      </div>
      <div className="di-px-4 di-pb-4 di-flex di-flex-col di-justify-between di-w-full">
        <div className="di-relative di-mt-8 di-flex di-items-center di-gap-x-4">
          <div className="di-relative di-w-10 di-h-10">
            <Image
              src={blog?.author_post?.image ?? ""}
              alt="Image Avatar"
              className="di-rounded-full di-bg-gray-50"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="di-text-sm di-leading-6">
            <p className="di-font-semibold di-text-gray-900">
              <a href="/">
                <span className="di-absolute di-inset-0" />
                {blog?.author_post?.name ? blog.author_post.name : "Admin"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
