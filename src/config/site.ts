export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Undertale Adventures X Wiki",
  shortName: "Undertale Adventures X",
  logoText: "U",
  tagline: "Codes, Unit Tier List, Traits & Beginner Guides",
  description: "Your ultimate guide to Undertale Adventures X on Roblox! Explore active working codes, unit tier lists, traits, best units, beginner guides and progression tips for the Undertale-themed tower defense.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://undertale-adventures-x.top",
  supportEmail: "support@undertale-adventures-x.top",
  gameUrl: "https://www.roblox.com/games/18512318831/Undertale-Adventures-X",
  heroVideoId: "azOxiat3JpU", // Undertale Adventures X gameplay & unit showcase
  social: {
    discord: "https://www.roblox.com/games/18512318831/Undertale-Adventures-X",
    youtube: "https://www.youtube.com/results?search_query=Undertale+Adventures+X",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
