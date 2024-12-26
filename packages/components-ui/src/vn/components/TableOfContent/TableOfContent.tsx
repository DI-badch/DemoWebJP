"use client";

import { memo, useEffect, useState } from "react";

interface TableOfContentProps {
  headings: { id: string; text: string; level: number }[];
}

function TableOfContent({ headings = [] }: TableOfContentProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observers = headings.map((heading) => {
      const element = document.getElementById(heading.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(heading.id);
            }
          });
        },
        { rootMargin: "-20% 0px -80% 0px" },
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="di-sticky di-top-5 di-bg-white di-p-5 di-border di-border-[#e4edf4] di-gap-1 di-flex di-flex-col di-overflow-y-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <h2 className="di-text-lg di-font-semibold di-mb-3">Mục lục</h2>
      <nav>
        <ul className="di-space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ marginLeft: `${(heading.level - 1) * 16}px` }}
            >
              <a
                onClick={(e) => {
                  handleClick(e, heading.id);
                }}
                href={`#${heading.id}`}
                className={`di-block di-px-2 di-text-sm di-hover:text-blue-500 di-rounded ${
                  activeId === heading.id && "di-font-bold di-text-blue-500"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default memo(TableOfContent);
