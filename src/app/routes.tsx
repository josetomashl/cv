import user from "../../public/svg/user.svg";
import books from "../../public/svg/books.svg";
import learning from "../../public/svg/learning.svg";
import projects from "../../public/svg/projects.svg";
import contact from "../../public/svg/contact.svg";

export const routes = [
  {
    name: "About Me",
    href: "/",
    icon: user,
    current: true
  },
  {
    name: "Projects",
    href: "/projects",
    icon: projects,
    current: false
  },
  {
    name: "Education",
    href: "/education",
    icon: books,
    current: false
  },
  {
    name: "Experience",
    href: "/experience",
    icon: learning,
    current: false
  },
  {
    name: "Contact",
    href: "/contact",
    icon: contact,
    current: false
  }
];
