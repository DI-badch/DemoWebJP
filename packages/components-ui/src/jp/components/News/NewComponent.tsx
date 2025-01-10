import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";
import { JpButton, TitleComponent } from "@di/components-ui";

interface NewsItem {
  id?: number;
  date: string;
  description: string;
}

interface NewsComponentProps {
  title: string;
  newsData: NewsItem[];
}

export const NewsComponent: React.FC<NewsComponentProps> = ({
  title,
  newsData,
}) => {
  return (
    <div className="di-bg-white-opacity-develop di-w-full di-rounded-3xl di-py-12 di-px-4 di-shadow ">
      <div className="di-flex di-flex-col sm:di-flex-row">
        <div className="di-basis-2/5">
          <TitleComponent title={title} />
        </div>
        <div className="di-basis-3/5">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="di-border-b di-border-main-black di-py-4 di-flex di-flex-col sm:di-flex-row di-items-start sm:di-items-center sm:di-justify-start sm:di-flex-1 sm:di-gap-2"
            >
              <div className="di-flex di-items-center di-justify-between di-w-full sm:di-w-auto">
                <div className="lg:di-px-10 di-px-4 di-py-1 di-border di-rounded-lg di-border-main-black sm:di-font-semibold di-font-medium di-text-2xl">
                  {news.date}
                </div>
                <ArrowUpRight size={54} className="di-ml-4 sm:di-hidden" />
              </div>

              <div className="di-flex-1 di-flex di-items-center di-justify-center di-w-full">
                <div className="di-w-full di-flex-1 di-text-left di-font-normal di-text-[14px] lg:di-text-lg di-text-main-black di-opacity-80 di-transition-all hover:di-font-semibold hover:di-opacity-100 sm:di-flex di-items-center di-flex-col sm:di-flex-row sm:di-gap-4 di-gap-2">
                  {news.description}
                </div>
                <ArrowUpRight size={40} className="di-hidden sm:di-block" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="di-mt-10 di-flex sm:di-items-center sm:di-justify-center di-flex-wrap sm:di-w-full">
        <div className="sm:di-flex-grow sm:di-w-2/5" />
        <div className="sm:di-w-3/5 sm:di-flex sm:di-justify-start">
          <JpButton variant="navigation" Icon={ArrowRight}>
            <p className="font-mplus di-text-[16px] di-font-bold">詳しく見る</p>
          </JpButton>
        </div>
      </div>
    </div>
  );
};
