import { useEffect } from "react";
import { resumeData } from "../data/resume";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({ 
  title = `${resumeData.name} - ${resumeData.role}`,
  description = resumeData.summary,
  image = "/og-image.jpg",
  url = window.location.href
}: SEOProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const updateMetaName = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Basic meta tags
    updateMetaName("description", description);
    updateMetaName("author", resumeData.name);
    updateMetaName("keywords", `${resumeData.role}, ${resumeData.tools.join(", ")}, Portfolio`);

    // Open Graph tags
    updateMetaTag("og:title", title);
    updateMetaTag("og:description", description);
    updateMetaTag("og:image", image);
    updateMetaTag("og:url", url);
    updateMetaTag("og:type", "website");

    // Twitter Card tags
    updateMetaName("twitter:card", "summary_large_image");
    updateMetaName("twitter:title", title);
    updateMetaName("twitter:description", description);
    updateMetaName("twitter:image", image);

    // Theme color
    updateMetaName("theme-color", "#000000");
  }, [title, description, image, url]);

  return null;
}
