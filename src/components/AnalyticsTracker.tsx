import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    __ga4Events?: Array<{ path: string; title: string; time: string }>;
    __ga4Notify?: () => void;
  }
}

const GA_ID = "G-MK0G2S0DKH";

const AnalyticsTracker = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const path = pathname + search;
    // Defer to next tick so document.title (set by Helmet) is updated
    const t = window.setTimeout(() => {
      const title = document.title;
      if (typeof window.gtag === "function") {
        window.gtag("event", "page_view", {
          page_location: window.location.href,
          page_path: path,
          page_title: title,
          send_to: GA_ID,
        });
      }
      window.__ga4Events = window.__ga4Events || [];
      window.__ga4Events.unshift({
        path,
        title,
        time: new Date().toLocaleTimeString(),
      });
      window.__ga4Events = window.__ga4Events.slice(0, 10);
      window.__ga4Notify?.();
    }, 50);

    return () => window.clearTimeout(t);
  }, [pathname, search]);

  return null;
};

export default AnalyticsTracker;
