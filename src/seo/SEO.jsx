import { useEffect } from "react";

const SITE_NAME = "Hotel Avantika, Ujjain";
const SITE_URL = "https://www.hotelavantika.com"; // Confirmed domain — permission to be arranged with current owner if needed

/**
 * SEO
 * Lightweight, dependency-free per-page SEO manager.
 * Sets: <title>, meta description, canonical link, Open Graph tags,
 * and BreadcrumbList JSON-LD (when a `breadcrumbs` prop is passed).
 *
 * NOTE: This is a structural placeholder. Actual copy for title/description
 * per page will be filled in Step 7 (SEO) of the build, once page content
 * is finalized. Do not treat current strings as final.
 */
function setMetaTag(attrName, attrValue, content) {
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let script = document.getElementById(id);
  if (data) {
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  } else if (script) {
    script.remove();
  }
}

export default function SEO({
  title,
  description,
  path = "/",
  image = "/og-default.jpg", // TODO: replace with verified hotel image
  breadcrumbs, // optional: [{ label, path }] — same shape PageBanner takes
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    if (description) {
      setMetaTag("name", "description", description);
    }

    const canonicalUrl = `${SITE_URL}${path}`;
    setLinkTag("canonical", canonicalUrl);

    setMetaTag("property", "og:title", fullTitle);
    if (description) setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:image", `${SITE_URL}${image}`);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    if (description) setMetaTag("name", "twitter:description", description);

    const breadcrumbData =
      breadcrumbs && breadcrumbs.length > 0
        ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: crumb.label,
            item: crumb.path ? `${SITE_URL}${crumb.path}` : canonicalUrl,
          })),
        }
        : null;
    setJsonLd("breadcrumb-schema", breadcrumbData);
  }, [title, description, path, image, breadcrumbs]);

  return null;
}