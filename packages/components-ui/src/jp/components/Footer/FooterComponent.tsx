import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="di-bg-main-black di-pt-[86px] di-pb-14 di-px-3 md:di-px-16 di-flex di-justify-between di-text-white di-flex-wrap">
        <div className="di-flex di-flex-col di-gap-12">
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
                width={28}
                height={28}
                src="./location.svg"
                alt="Icon Location"
              />
              <p>所在地 : 11F, Ho Guom Plaza, Tran Phu, Ha Dong</p>
            </div>
            <div className="di-flex di-items-center di-gap-5">
              <Image
                width={28}
                height={28}
                src="./phone.svg"
                alt="Icon Phone"
              />
              <p>代表番号 : 050-5896-3544</p>
            </div>
            <div className="di-flex di-items-center di-gap-5">
              <Image
                width={28}
                height={28}
                src="./letter.svg"
                alt="Icon Location"
              />
              <a href="sales@dataimpact.vn">sales@dataimpact.vn</a>
            </div>
          </div>
        </div>
        <div className="di-flex di-flex-col di-gap-12 di-mt-14 md:di-mt-0">
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
                width={28}
                height={28}
                src="./location.svg"
                alt="Icon Location"
              />
              <p>
                所在地：〒163-1304東京都新宿区西新宿6-5-1
                新宿アイランドタワー４階
              </p>
            </div>
          </div>
        </div>
        <div className="di-flex di-self-center di-gap-6 di-mt-14 md:di-mt-0 di-w-full md:di-w-auto di-justify-center">
          {social.map((item) => (
            <a key={item.id} href={item.link}>
              <Image
                alt="Icon Social"
                src={item.image}
                width={39}
                height={39}
              />
            </a>
          ))}
        </div>
      </div>
      <hr className="di-w-full border di-border-b di-border-main-border di-bg-main-black di-pb-[86px]" />
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
