# Deploy to Cloudflare Pages

This project is configured as a static Next.js export, so Cloudflare Pages can deploy it from the `out` folder.

## Deploy from the Cloudflare dashboard

1. Go to Cloudflare -> Workers & Pages -> Create application -> Pages.
2. Select **Connect to Git**.
3. Choose the repository:

```txt
hecroigg/world-salary-calculator
```

4. Use these build settings:

```txt
Build command: npm install && npm run pages:build
Deploy command: npx wrangler pages deploy out --project-name world-salary-calculator
Preview command: npx wrangler pages dev out
Root directory: /
```

5. Cloudflare reads Node 22 from the committed `.node-version` file. If it asks you to set it manually, add:

```txt
NODE_VERSION=22
```

6. Deploy.

## Deploy from your terminal

```bash
git clone https://github.com/hecroigg/world-salary-calculator.git
cd world-salary-calculator
npm install
npm run pages:build
npx wrangler pages deploy out --project-name world-salary-calculator
```

## Important notes

- The app generates static pages for all current English and Spanish country routes.
- Cloudflare should publish the contents of `out`.
- Do not use `next start` on Cloudflare Pages; this project is exported statically.
- After connecting the GitHub repo, every push to `main` should trigger a new deployment.
