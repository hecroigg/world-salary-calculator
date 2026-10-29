# Automatic production deployment (one-time setup)

The **Verified Cloudflare deployment** workflow is disabled by default.
It builds in GitHub Actions after the `SEO build audit` passes on `main`, then
uploads the result straight to the existing Cloudflare Worker via Wrangler,
bypassing Cloudflare's often-queued remote build environment.

## One-time activation by the account owner

1. In Cloudflare, create a limited-scope token able to deploy **world-salary-calculator**
   (Workers `Editor`; route/custom-domain modification may also require
   Workers Routes Write on affected zones). Do not share the token in chat.
2. Add GitHub Actions secrets to this repository, under
   Settings → Secrets and variables → Actions:
   - `CLOUDFLARE_API_TOKEN` — the secret token;
   - `CLOUDFLARE_ACCOUNT_ID` — the Cloudflare account ID.
3. Turn off automatic Git builds for this Worker in the Cloudflare dashboard,
   while retaining the Worker, custom domains and its existing deployment.
   Do this **only when you are ready** to switch publishing systems.
4. Add the GitHub Actions repository **variable**
   `ENABLE_GITHUB_CLOUDFLARE_DEPLOY` with value `true`.
5. Run `Verified Cloudflare deployment` manually once using
   Actions → workflow → Run workflow. Confirm the site remains available.
6. From then on, successful `main` build-verification runs trigger a
   deployment automatically. A failed build never reaches deployment.

Never commit credentials. Keep the current Cloudflare deployment active until
the manual smoke test passes. The daily read-only health check monitors both
sites without generating new commits or Cloudflare deployments.

Docs: https://developers.cloudflare.com/workers/ci-cd/external-cicd/github-actions/
