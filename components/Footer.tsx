import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((column, index) => (
              <FooterColumn title={column.title} key={index}>
                <ul className="regular-14 flex flex-col gap-5 text-gray-30">
                  {column.links.map((link, i) => (
                    <Link href="/" key={i}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="whitespace-nowrap medium-14 text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <div className="flex gap-5">
                  {SOCIALS.links.map((social, index) => (
                    <Link href="/" key={index}>
                      <Image src={social} alt="social" width={24} height={24} />
                    </Link>
                  ))}
                </div>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20"/>
        <p className="regular-14 w-full text-center text-gray-30">2023 Hilink | All rights reserved</p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  children: ReactNode;
  title: string;
};

const FooterColumn = ({ children, title }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
