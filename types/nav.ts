import { type Icon } from "@tabler/icons-react"

export type NavItem = {
  icon?: Icon;
  url: string;
  title: string;
};


export type NavUser = {
  name: string;
  email: string;
  avatar: string;
};
