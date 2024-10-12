export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Succulents",
      href: "/succulents",
    },
    // {
    //   label: "Available Soon",
    //   href: "/launchingsoon",
    // },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Succulents",
      href: "/succulents",
    }
  ],
  links: {
    github: "https://github.com/YogeshK34/",
    twitter: "https://twitter.com/yogeshkhutwad34/",
  },
};
