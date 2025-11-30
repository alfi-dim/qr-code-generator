import type {LucideIcon} from "lucide-react";

export type Menu = {
  title: string;
  url: string;
  icon: LucideIcon;
  role: string | "public";
  items?: Omit<Menu, "icon">[];
};
