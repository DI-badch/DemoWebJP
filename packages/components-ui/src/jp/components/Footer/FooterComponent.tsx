import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="di-bg-main-black lg:di-pt-[86px] di-py-[40px] lg:di-px-16 di-px-4 sm:di-gap-4 sm:di-px-6 di-flex  di-text-white di-flex-wrap di-justify-between lg:di-flex-nowrap">
        <div className="di-flex di-flex-col di-gap-12 w-full sm:w-1/3 ">
          <Image
            width={237}
            height={85}
            alt="Image"
            src="/logo-white.png"
            style={{
              objectFit: "cover",
            }}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
          <div className="di-flex di-flex-col di-justify-center di-gap-5">
            <p className="di-font-bold di-text-2xl">会社住所</p>
            <div className="di-flex di-items-center di-gap-5">
              <Image
                width={24}
                height={24}
                src="./location.svg"
                alt="Icon Location"
              />
              <p className="di-break-words lg:di-text-lg di-text-[12px]">
                所在地 : 11F, Ho Guom Plaza, Tran Phu, Ha Dong
              </p>
            </div>
            <div className="di-flex di-items-center di-gap-5">
              <Image
                width={24}
                height={24}
                src="./phone.svg"
                alt="Icon Phone"
              />
              <p className="di-break-words lg:di-text-lg di-text-[12px]">
                代表番号 : 050-5896-3544
              </p>
            </div>
            <div className="di-flex di-items-center di-gap-5">
              <Image
                width={24}
                height={24}
                src="./letter.svg"
                alt="Icon Location"
              />
              <a
                className="di-break-words lg:di-text-lg di-text-[12px]"
                href="sales@dataimpact.vn"
              >
                sales@dataimpact.vn
              </a>
            </div>
          </div>
        </div>
        <div className="di-flex di-flex-col di-gap-12 di-mt-14 sm:di-mt-0 w-full sm:w-1/3 ">
          <Image
            width={237}
            height={85}
            alt="Image"
            src="/headwaters.png"
            style={{
              objectFit: "cover",
            }}
            className="w-full h-full object-cover"
            sizes="100vw"
          />
          <div className="di-flex di-flex-col di-justify-center di-gap-5">
            <p className="di-font-bold di-text-2xl">会社住所</p>
            <div className="di-flex di-items-center di-gap-5">
              <Image
                width={24}
                height={24}
                src="./location.svg"
                alt="Icon Location"
              />
              <p className="di-break-words lg:di-text-lg di-text-[12px] di-max-w-[200px]">
                所在地：〒163-130東京都新宿区西新宿6-5-1
                新宿アイランドタワー４階
              </p>
            </div>
          </div>
        </div>
        <div className="di-flex di-items-center di-justify-center di-w-full sm:di-w-auto di-mx-auto lg:di-mx-0">
          <div className="di-flex di-gap-6 di-mt-14 sm:di-mt-0 di-flex-wrap">
            {social.map((item) => (
              <a key={item.id} href={item.link}>
                <Image
                  alt="Icon Social"
                  src={item.image}
                  width={30}
                  height={30}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <hr className="sm:di-hidden di-block di-w-full border di-border-b di-border-main-border di-bg-main-black di-pb-[86px]" />
    </footer>
  );
};

const social = [
  {
    id: 1,
    link: "https://www.facebook.com/",
    image: "/facebook.png",
  },
  {
    id: 2,
    link: "https://github.com/",
    image: "/github.png",
  },
  {
    id: 3,
    link: "https://x.com/",
    image: "/x.png",
  },
  {
    id: 4,
    link: "https://www.linkedin.com/in/",
    image: "/linkedin.png",
  },
  {
    id: 5,
    link: "https://www.youtube.com/c/",
    image: "/youtube.png",
  },
];
