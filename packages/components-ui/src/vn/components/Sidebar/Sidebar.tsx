import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Link from "next/link";
import { memo } from "react";
import Image from "next/image";
import { Tag } from "../Tag/Tag";
import type { Blog } from "../blog-post-card/BlogPostCard";

const DISPLAYED_SIDEBAR_BLOG_COUNT = 3;

interface SidebarProps {
  relatedBlogs: Blog[];
  sortedItems: Blog[];
}

function Sidebar({ relatedBlogs = [], sortedItems = [] }: SidebarProps) {
  if (!sortedItems.length) return null;
  if (!relatedBlogs.length) return null;

  return (
    <div
      className="di-bg-white di-p-5 di-border di-gap-5 di-flex di-overflow-y-hidden"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {relatedBlogs.slice(0, DISPLAYED_SIDEBAR_BLOG_COUNT).map((item) => (
        <Card
          key={item.id}
          variant="outlined"
          sx={{
            width: 300,
            borderRadius: 4,
            borderColor: "#e4edf4",
            "&:hover": {
              boxShadow: "md",
              borderColor: "neutral.outlinedHoverBorder",
            },
          }}
        >
          <CardOverflow>
            <AspectRatio ratio="2">
              <Image
                src={item.image || "/images/blog-demo1.jpg"}
                alt="Techblog preview image"
                layout="fill"
                objectFit="cover"
                className="di-w-full di-bg-cover di-mb-4"
              />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Link href={`/blog/${item.slug}`}>
              <Typography
                sx={{
                  color: "#4b5563",
                  fontWeight: 700,
                  "&:hover": {
                    color: "#3b82f6",
                  },
                }}
                level="title-md"
              >
                {item.title}
              </Typography>
            </Link>
            <Typography level="body-sm">formatDate</Typography>
          </CardContent>
          <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
            <Divider inset="context" />
            <div className="di-py-1">
              <Typography
                level="body-xs"
                fontWeight="md"
                textColor="text.secondary"
              >
                <div className="di-flex di-gap-1">
                  {item.tags
                    ?.split(", ")
                    .map((tag) => <Tag label={tag} key={tag} />)}
                </div>
              </Typography>
            </div>
          </CardOverflow>
        </Card>
      ))}
    </div>
  );
}

export default memo(Sidebar);
