import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const previousTitle = document.title;
    document.title = "Page not found (404) — Shailesh Gurav";

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const [, key, val] = selector.match(/\[(.+?)="(.+?)"\]/) ?? [];
        if (key && val) el.setAttribute(key, val);
        document.head.appendChild(el);
      }
      const previous = el.getAttribute(attr);
      el.setAttribute(attr, value);
      return () => {
        if (previous === null) el?.remove();
        else el?.setAttribute(attr, previous);
      };
    };

    const restoreDesc = setMeta(
      'meta[name="description"]',
      "content",
      "The page you're looking for doesn't exist on Shailesh Gurav's portfolio. Head back to the homepage to explore skills, tech stack, and projects."
    );
    const restoreOgTitle = setMeta('meta[property="og:title"]', "content", "Page not found — Shailesh Gurav");
    const restoreOgDesc = setMeta(
      'meta[property="og:description"]',
      "content",
      "This page doesn't exist. Return to Shailesh Gurav's portfolio homepage."
    );

    return () => {
      document.title = previousTitle;
      restoreDesc();
      restoreOgTitle();
      restoreOgDesc();
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
