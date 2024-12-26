import { NavigationItem } from "../NavigationItem/NavigationItem";
import Image from "next/image";
import Link from "next/link";

interface NavigationItemType {
  title: string;
  url: string;
}

export interface HeaderProps {
  items?: NavigationItemType[];
}

export const Header = ({ items }: HeaderProps) => (
  <header>
    <div className="md:di-px-5 di-mx-auto">
      <nav className="di-w-full di-z-40 di-bg-transparent">
        <div className="di-flex di-justify-between di-items-center di-py-[34px] md:di-max-w-[1244px] lg:di-py-8 md:di-mx-auto md:di-px-0">
          <Link href="/">
            <Image
              className="lg:di-w-[359px] lg:di-h-[93px] di-mr-[89px]"
              src="/logo.png"
              alt="logo"
              width={136}
              height={36}
            />
          </Link>
          <div className="di-flex di-justify-between di-items-center di-gap-16">
            {items?.map((e) => (
              <NavigationItem key={e.title}>
                <a className="hover:di-text-blue-500" href={e.url}>
                  {e.title}
                </a>
              </NavigationItem>
            ))}
          </div>

          <div className="di-cursor-pointer di-mr-1 md:di-hidden">
            {/* Dropdown menu icon can go here */}
          </div>
        </div>
      </nav>
    </div>
  </header>
);
