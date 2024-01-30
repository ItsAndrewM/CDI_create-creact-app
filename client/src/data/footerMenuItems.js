import { socialMediaMenu } from "./socialMediaMenu";

export const footerMenuItems = [
  {
    header: "products",
    url: "/products",
    subHeader: [
      {
        header: "flexible furlers",
        url: "/products/product-category/furlers/flexible-furlers",
      },
      {
        header: "mainsail furlers",
        url: "products/product-category/furlers/mainsail-furlers",
      },
      {
        header: "parts",
        url: "/products/product-category/parts",
      },
    ],
  },
  {
    header: "customer care",
    url: "/faq",
    subHeader: [
      {
        header: "shipping & delivery",
        url: "/faq/#shipping&delivery",
      },
      {
        header: "returns & exchanges",
        url: "/faq/#returns",
      },
      {
        header: "product info & help",
        url: "/product-information",
      },
    ],
  },
  {
    header: "about us",
    subHeader: [
      { header: "meet the team", url: "/contact-us" },
      {
        header: "contact us",
        url: "/contact-us",
      },
    ],
  },
  {
    header: "follow us",
    subHeader: socialMediaMenu,
  },
];
