import Image from "next/image";
import React from "react";
import { FaXTwitter, FaInstagram, FaSlack, FaYoutube } from "react-icons/fa6";

/**
 * This footer is not part of the content in the CMS, feel free to remove this for production use.
 */

const SiteFooter = () => {
  // set up Agility CMS Socials
  const socials = [
    {
      title: "X (Twitter)",
      url: "https://www.twitter.com/agilitycms",
      icon: (
        <FaXTwitter className="text-xl text-primary-500 transition duration-300 hover:text-primary-700 md:ml-8" />
      ),
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/agilitycms",
      icon: (
        <FaInstagram className="text-xl text-primary-500 transition duration-300 hover:text-primary-700 md:ml-8" />
      ),
    },
    {
      title: "Slack",
      url: "https://agilitycms.com/join-slack",
      icon: (
        <FaSlack className="text-xl text-primary-500 transition duration-300 hover:text-primary-700 md:ml-8" />
      ),
    },
    {
      title: "YouTube",
      url: "https://www.youtube.com/@AgilityCMS",
      icon: (
        <FaYoutube className="text-xl text-primary-500 transition duration-300 hover:text-primary-700 md:ml-8" />
      ),
    },
  ];

  return (
    <footer className="relative mt-8 bg-gray-100 px-8 py-6 md:py-4">
      <div className="mx-auto max-w-screen-xl md:flex md:items-center">
        <div className="relative mb-4 shrink-0 text-center md:mb-0 md:text-left">
          <a
            href="https://www.agilitycms.com"
            target="_blank"
            rel="noreferrer"
            title="Agility CMS"
          >
            {/* We use the built-in nextjs Image component here since this is referencing an SVG */}
            <Image
              src="/assets/agility-logo.svg"
              alt="Agility CMS"
              width={90}
              height={24}
            />
          </a>
        </div>
        <div className="mb-4 grow md:mb-0">
          <p className="text-center text-xs text-gray-600 md:ml-8 md:max-w-3xl md:text-left">
            Powered by Agility. This website and materials found on it are for
            demo purposes. You can use this to preview the content you created
            on your Agility CMS account.{"\u00A0"}
            <a
              href="https://github.com/agility/agilitycms-nextjs-starter"
              title="View on GitHub"
              target="_blank"
              rel="noreferrer"
              className="mr-2 border-b border-gray-600 text-gray-600"
            >
              GitHub
            </a>
            <a
              href="https://agilitycms.com/docs"
              title="Agility Docs"
              target="_blank"
              rel="noreferrer"
              className="mr-1 border-b border-gray-600 text-gray-600"
            >
              Agility Docs
            </a>
            {"\u00A0"}
            <a
              href="https://agilitycms.com/contact-us/chat-sales"
              title="Contact Us"
              target="_blank"
              rel="noreferrer"
              className="border-b border-gray-600 text-gray-600"
            >
              Contact Us
            </a>
          </p>
        </div>
        <div className="flex-1-grow">
          <ul className="flex justify-center md:justify-start">
            {socials.map((social, index) => (
              <li key={index} className="mx-4 md:mx-0">
                <a
                  href={social.url}
                  title={`Follow Agility CMS on ${social.title}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
