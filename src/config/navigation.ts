import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  /** 翻译键，同时是 content/<locale>/ 下的分类目录名 */
  key: string;
  /** 该分类列表页的 URL（不含 locale 前缀） */
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG: readonly NavigationItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
