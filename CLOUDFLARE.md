# Deploy to Cloudflare Workers

This static Next.js export is deployed using Cloudflare Workers Static Assets.

## Cloudflare Git deployment

When Cloudflare shows the Worker deployment form, use:

```txt
Project name: world-salary-calculator
Build command: npm install && npm run pages:build
Deploy command: npx wrangler deploy
Preview command: npx wrangler dev
Root directory: /
```

Set this build environment variable in the advanced settings:

```txt
NODE_VERSION=22
```

The committed `wrangler.jsonc` file tells Cloudflare to deploy the static website generated in `out`. The project name and the Wrangler name are intentionally identical.

## What happens on deployment

1. Cloudflare installs the npm dependencies.
2. Next.js statically generates all routes into `out`.
3. Wrangler uploads the `out` directory as Worker static assets.
4. The Worker is available at its assigned `workers.dev` address.

## Local check

```bash
npm install
npm run pages:build
npx wrangler dev
```
