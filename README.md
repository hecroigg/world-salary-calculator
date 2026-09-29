# World Salary Calculator

International gross-to-net salary calculator for 25 countries, with country-specific tax engines, English and Spanish routes, minimum-wage context and SEO-ready country pages.

## Run locally

```bash
pnpm install
pnpm dev
```

Production check: `pnpm build`.

## Structure

- `lib/countries.ts`: country configuration, tax bands, contributions and sources.
- `lib/tax-engine.ts`: shared progressive calculation engine.
- `app/salary/[country]`: English country pages.
- `app/es/salario/[country]`: Spanish localized pages.

Calculations are estimates for information only and should be reviewed annually against official country sources.
