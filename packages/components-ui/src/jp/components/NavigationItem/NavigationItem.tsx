import Link from "next/link";

interface NavigationItemProps {
  href: string;
  title: string;
  className?: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  title,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`from-left nav-item lg:di-text-xl di-pl-10 xl:di-leading-[80px] link-nav ${className}`}
    >
      <p className="hover:di-font-bold">{title}</p>
    </Link>
  );
};
