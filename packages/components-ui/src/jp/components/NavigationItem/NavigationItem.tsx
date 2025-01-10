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
      className={`from-left c nav-item xl:di-text-xl lg:di-text-lg lg:di-pl-4 xl:di-pl-12 xl:di-leading-[80px] link-nav ${className}`}
    >
      <p className="hover:di-font-bold">{title}</p>
    </Link>
  );
};
