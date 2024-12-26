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
      <div className="di-flex-1 md:di-hidden md:di-mb-16 di-mb-8">
        <TitleComponent title={title} />
      </div>
      <div className="di-flex di-flex-wrap">
        <div className="di-hidden md:di-block di-flex-1">
          <TitleComponent title={title} />
        </div>
        <div className="di-flex-1">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="di-border-b di-border-main-black di-py-4 di-flex di-flex-col md:di-flex-row di-items-start md:di-items-center md:di-justify-start md:di-flex-1 md:di-gap-2"
            >
              <div className="di-flex di-items-center di-justify-between di-w-full md:di-w-auto">
                <div className="di-px-10 di-py-1 di-border di-rounded-lg di-border-main-black md:di-font-semibold di-font-medium di-text-2xl">
                  {news.date}
                </div>
                <ArrowUpRight size={54} className="di-ml-4 md:di-hidden" />
              </div>

              <div className="di-flex-1 di-flex di-items-center di-justify-center di-w-full">
                <div className="di-w-full di-flex-1 di-flex-1 di-text-left di-font-normal di-text-lg di-text-main-black di-opacity-80 di-transition-all hover:di-font-semibold hover:di-opacity-100 md:di-flex di-items-center di-flex-col md:di-flex-row md:di-gap-4 di-gap-2">
                  {news.description}
                </div>
                <ArrowUpRight size={40} className="di-hidden md:di-block" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="di-mt-10 di-flex md:di-items-center md:di-justify-center di-flex-wrap md:di-w-full">
        <div className="md:di-flex-grow md:di-w-1/2" />
        <div className="md:di-w-1/2 md:di-flex md:di-justify-start">
          <JpButton variant="navigation" Icon={ArrowRight}>
            <p className="font-mplus di-text-xl di-font-bold">詳しく見る</p>
          </JpButton>
        </div>
      </div>
    </div>
  );
};
