export const CarouselContentSkeleton = () => {
  return (
    <div className="md:di-flex di-justify-center di-h-full di-items-center md:di-py-20">
      <div
        role="status"
        className="di-space-y-8 di-animate-pulse md:di-space-y-0 md:di-space-x-8 di-rtl:space-x-reverse md:di-flex"
      >
        <div className="di-flex di-items-center di-justify-center di-w-full di-h-96 di-bg-gray-300 di-rounded sm:di-w-[1000px] di-dark:bg-gray-700">
          <svg
            className="di-w-10 di-h-10 di-text-gray-200 di-dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="di-w-full">
          <div className="di-h-8 di-bg-gray-200 di-dark:bg-gray-700 di-w-48 di-mb-4" />
          <div className="di-h-4 di-bg-gray-200 di-dark:bg-gray-700 di-max-w-[480px] di-mb-2.5" />
          <div className="di-h-4 di-bg-gray-200 di-dark:bg-gray-700 di-max-w-[460px] di-mb-2.5" />
          <div className="di-h-4 di-bg-gray-200 di-dark:bg-gray-700 di-max-w-[360px]" />
        </div>
      </div>
    </div>
  );
};
