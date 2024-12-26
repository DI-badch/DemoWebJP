"use client";

import { LuMousePointerClick } from "react-icons/lu";
import { useState } from "react";
import { Card, CardContent, Button } from "@mui/joy";

interface CareerArticleProps {
  title: string | null;
  description: string | null;
  url: string | null;
  image: string | null;
}

export const CareerArticle = ({
  title = "",
  description = "",
  url = "#",
  image = "",
}: CareerArticleProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const computedColor = isFocus
    ? "di-text-primary-base"
    : "di-text-neutral-700";

  return (
    <Card
      orientation="horizontal"
      variant="outlined"
      onMouseOver={() => {
        setIsFocus(true);
      }}
      onMouseLeave={() => {
        setIsFocus(false);
      }}
      className="di-h-56 di-hover:border-primary-base di-w-100vw"
    >
      <div
        className="di-hidden md:di-block di-w-80"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <CardContent>
        <div className="di-flex-1 di-flex di-flex-col di-gap-[19px] di-pr-2">
          <p
            className={`di-text-[32px] di-font-extrabold di-font-primary di-leading-none di-tracking-tight ${computedColor}`}
          >
            {title}
          </p>

          <p className="di-overflow-hidden di-text-black di-text-base di-font-normal di-leading-tight di-line-clamp-3 di-text-ellipsis">
            {description}
          </p>
        </div>

        <div className="di-flex di-justify-end">
          <Button
            className="di-w-full md:di-w-60"
            endDecorator={<LuMousePointerClick />}
          >
            Ứng tuyển ngay!
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
