import type { LucideIcon } from "lucide-react";
import { BookOpen, Code2, Swords, Trophy, Users, Zap } from "lucide-react";

export type NavigationItem = {
  /** 翻译键，同时是 content/<locale>/ 下的分类目录名 */
  key: string;
  /** 该分类列表页的 URL（不含 locale 前缀） */
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

/**
 * 分类真相源：关键词.json 的 categories 数组，与 articles/<locale>/ 的子目录名一一对应。
 * key = 目录名 / 翻译键，path = 分类列表页 URL。
 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Zap, isContentType: true },
  { key: "modes", path: "/modes", icon: Swords, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
  { key: "progression", path: "/progression", icon: Trophy, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
