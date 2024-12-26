import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FooterGroup } from "../FooterGroup/FooterGroup";
import { FooterItem } from "../FooterItem/FooterItem";
import Image from "next/image";

interface FooterCareerLink {
  careers: {
    id: number;
    created_at: Date | null;
    updated_at: Date | null;
    published_at: Date | null;
    created_by_id: number | null;
    updated_by_id: number | null;
    title: string;
    slug: string;
    description: string | null;
    contact: string | null;
  } | null;
}

interface FooterServiceLink {
  services: {
    id: number;
    created_at: Date | null;
    updated_at: Date | null;
    published_at: Date | null;
    created_by_id: number | null;
    updated_by_id: number | null;
    title: string;
    slug: string;
    description: string | null;
  } | null;
}

interface FooterData {
  footerData?: {
    footers_careers_links: FooterCareerLink[];
    footers_services_links: FooterServiceLink[];
    address: string;
    phone: string;
    link_facebook: string;
    email: string;
    link_linkedin: string;
  };
}

export type FetchFooterDataReturn = Promise<FooterData | null>;

export const Footer = ({ footerData }: FooterData) => {
  return (
    <footer className="di-w-full di-bg-primary-secondary di-text-primary-dark di-pt-8">
      <div className="di-mx-auto di-w-full di-max-w-screen-xl di-p-4 di-py-6 di-lg:py-8">
        <div className="md:di-flex di-gap-20 md:di-justify-between">
          <div className="di-mb-6 md:di-mb-0">
            <FooterGroup className="di-mb-[26px] di-w-full di-lg:w-auto">
              <Image
                src="/logo.png"
                alt="Website Logo"
                width={180}
                height={46}
                className="md:di-w-[332px] md:di-h-[86px]"
              />
            </FooterGroup>
          </div>
          <div className="di-grid di-grid-cols-2 di-gap-8 di-sm:gap-6 di-sm:grid-cols-2">
            {footerData?.footers_services_links ? (
              <div>
                <FooterGroup heading="Services">
                  {footerData.footers_services_links.map(
                    (link) =>
                      link.services && (
                        <FooterItem key={link.services.id}>
                          <Link href="#solution">{link.services.title}</Link>
                        </FooterItem>
                      ),
                  )}
                </FooterGroup>
              </div>
            ) : null}
            <div>
              <FooterGroup
                heading="Office"
                className="di-mb-[33px] di-w-full di-lg:order-last di-lg:w-auto"
              >
                <FooterItem>
                  <b>Address : </b>
                  {footerData?.address || "Address not available"}
                </FooterItem>
                <FooterItem>
                  <b>Tel : </b>
                  {footerData?.phone || "Phone not available"}
                </FooterItem>
                <FooterItem>
                  <b>Email : </b>
                  {footerData?.email || "Email not available"}
                </FooterItem>

                <div className="di-flex di-items-center di-space-x-4 di-mt-4">
                  <b>Contact : </b>
                  <Link
                    href={footerData?.link_facebook || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="di-bg-blue-600 di-text-white di-p-2 di-rounded-full di-hover:bg-blue-800 di-transition-colors di-duration-300"
                  >
                    <FaFacebookF size={24} />
                  </Link>

                  <Link
                    href={footerData?.link_linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="di-bg-primary-main di-text-white di-p-2 di-rounded-full di-hover:bg-blue-800 di-transition-colors di-duration-300"
                  >
                    <FaLinkedinIn size={24} />
                  </Link>
                </div>
              </FooterGroup>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
