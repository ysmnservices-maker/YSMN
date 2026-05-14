import type { VercelRequest, VercelResponse } from "@vercel/node";

const routes = [
  "/",
  "/service/domestic",
  "/service/commercial",
  "/service/garden",
  "/service/pool",
  "/service/post-event",
  "/service/deep-cleaning"
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const defaultHost = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
  const protocol = (req.headers["x-forwarded-proto"] as string) || "https";
  const siteUrl = process.env.SITE_URL || `${protocol}://${defaultHost}`;

  const now = new Date().toISOString();

  const urls = routes
    .map(
      (path) => `
  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.7"}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(xml);
}


