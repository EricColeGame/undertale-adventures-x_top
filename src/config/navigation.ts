import type { LucideIcon } from "lucide-react";
import { BookOpen, FlaskConical, Swords, Ticket, TrendingUp, Users } from "lucide-react";

export type NavigationItem = {
  /** 翻译键，同时是 content/<locale>/ 下的分类目录名 */
  key: string;
  /** 该分类列表页的 URL（不含 locale 前缀） */
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: FlaskConical, isContentType: true },
  { key: "modes", path: "/modes", icon: Swords, isContentType: true },
  { key: "codes", path: "/codes", icon: Ticket, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
