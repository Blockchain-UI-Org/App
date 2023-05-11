export default [
  "strapi::errors",
  /* Replace 'strapi::security', with this snippet */
  /* Beginning of snippet */
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "*.tinymce.com", "*.tiny.cloud", "https:"],
          "connect-src": ["'self'", "https:", "*.tinymce.com", "*.tiny.cloud", "blob:", "*.strapi.io"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "mci-bucket.nyc3.digitaloceanspaces.com",
            "*.tinymce.com",
            "*.tiny.cloud",
            "strapi.io",
            "s3.amazonaws.com",
            "cdn.jsdelivr.net",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "mci-bucket.nyc3.digitaloceanspaces.com",
            "'unsafe-inline'",
            "*.tinymce.com",
            "*.tiny.cloud",
          ],
          "font-src": ["'self'", "*.tinymce.com", "*.tiny.cloud"],
        },
        upgradeInsecureRequests: null,
      },
    },
  },
  /* End of snippet */
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
