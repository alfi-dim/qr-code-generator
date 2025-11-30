import {Home, Network, SettingsIcon, SquareTerminal} from "lucide-react";
import type {Menu} from "@/types/menu";

const menus: Menu[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
    role: "public",
  },
  {
    title: "Ping",
    url: "/ping",
    icon: Network,
    role: "admin",
  },
  {
    title: "Playground",
    url: "#",
    icon: SquareTerminal,
    role: "public",
    items: [
      {
        title: "History",
        url: "#",
        role: "public",
      },
      {
        title: "Starred",
        url: "#",
        role: "public",
      },
      {
        title: "Settings",
        url: "#",
        role: "admin",
      },
    ],
  },
];

const secondaryMenus: Omit<Menu, "items">[] = [
  {
    title: "Settings",
    url: "#",
    icon: SettingsIcon,
    role: "admin",
  },
];

export const getMenus = (roles: string[]): Menu[] => {
  const accessibleMenus: Menu[] = [];

  for (const menu of menus) {
    if (!Object.hasOwn(menu, "role")) continue;

    const isPublic = menu.role === "public";
    const hasAccess = roles.includes(menu.role) || isPublic;

    if (menu.items?.length) {
      const items = menu.items.filter(
        (item) => roles.includes(item.role) || item.role === "public",
      );

      if (items.length) {
        accessibleMenus.push({...menu, items});
      }

      continue;
    }

    if (hasAccess) {
      accessibleMenus.push(menu);
    }
  }

  return accessibleMenus;
};

export const getSecondaryMenus = (roles: string[]): Omit<Menu, "items">[] => {
  return secondaryMenus.filter((menu) => roles.includes(menu.role));
};
