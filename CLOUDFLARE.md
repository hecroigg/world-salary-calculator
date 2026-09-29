# Deploy to Cloudflare Pages

This project is configured as a static Next.js export, so Cloudflare Pages can deploy it from the `out` folder.

## Recommended: deploy from the Cloudflare dashboard

1. Go to Cloudflare → Workers & Pages → Create application → Pages.
2. Select **Connect to Git**.
3. Choose the repository:

```txt
hecroigg/world-salary-calculator
```

4. Use these build settings:

```txt
Framework preset: Next.js / None
Build command: pnpm install --no-frozen-lockfile && pnpm run pages:build
Build output directory: out
Root directory: /
```

5. Add this environment variable if Cloudflare asks for a Node version:

```txt
NODE_VERSION=20
```

6. Deploy.

## Deploy from your terminal

```bash
git clone https://github.com/hecroigg/world-salary-calculator.git
cd world-salary-calculator
corepack enable
pnpm install
pnpm run pages:build
pnpm run deploy:cloudflare
```

If Wrangler asks you to log in:

```bash
pnpm dlx wrangler login
```

Then run again:

```bash
pnpm run deploy:cloudflare
```

## Important notes

- The app generates static pages for all current English and Spanish country routes.
- Cloudflare should publish the contents of `out`.
- Do not use `next start` on Cloudflare Pages; this project is exported statically.
- After connecting the GitHub repo, every push to `main` should trigger a new deployment.
