import user from "../../public/svg/user.svg";
import books from "../../public/svg/books.svg";
import learning from "../../public/svg/learning.svg";
import portfolio from "../../public/svg/portfolio.svg";
import contact from "../../public/svg/contact.svg";

export const routes = [
  {
    name: "About Me",
    href: "/",
    icon: user
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: portfolio
  },
  {
    name: "Education",
    href: "/education",
    icon: books
  },
  {
    name: "Experience",
    href: "/experience",
    icon: learning
  },
  {
    name: "Contact",
    href: "/contact",
    icon: contact
  }
];
