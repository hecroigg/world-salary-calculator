# Deploy to Cloudflare Pages

This is a static Next.js export. Deploy it as a **Cloudflare Pages** project, not as a Cloudflare Worker.

## Create the project

1. Delete the old Worker project.
2. In Cloudflare, go to **Workers & Pages** -> **Create application**.
3. Choose **Pages**, then **Connect to Git**.
4. Select this repository:

```txt
hecroigg/world-salary-calculator
```

5. Use these settings:

```txt
Production branch: main
Build command: npm install && npm run pages:build
Build output directory: out
Root directory: /
Environment variable: NODE_VERSION=22
```

Cloudflare Pages publishes the `out` directory automatically. Do not enter a Wrangler deploy command or a preview command.

## Why Pages

- The app is fully static through Next.js `output: "export"`.
- `next build` writes the deployable website to `out`.
- Pages serves the static files directly, including the country routes and SEO files.
- A push to `main` will create the next deployment automatically.

## Local check

```bash
npm install
npm run pages:build
npx serve out
```

The default address after deployment will be:

```txt
https://world-salary-calculator.pages.dev
```

Before adding a custom domain, the metadata, canonical URLs, sitemap and robots file use this address.
