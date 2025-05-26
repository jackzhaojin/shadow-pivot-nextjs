This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Local dev server

First, run the development server:

```bash
npm run dev
```

### Local docker server
```bash
docker build -t shadow-pivot-nextjs .
docker run -p 3000:3000 --name shadow-pivot-nextjs-container shadow-pivot-nextjs
```

## Azure Server Deployment
Web app deployment

Free ASP plan

Github container repository (ghcr), since it's public we don't need authentication

### Environment Variables
#### App settings

- `DOCKER_REGISTRY_SERVER_PASSWORD`: blank
- `DOCKER_REGISTRY_SERVER_URL`: ghcr.io
- `DOCKER_REGISTRY_SERVER_USERNAME`: blank
- `WEBSITES_ENABLE_APP_SERVICE_STORAGE`: false
- `WEBSITES_PORT`: 3000


## Dev Notes

- Project bootstrapped with `npx create-next-app@latest` using the following options:
  - TypeScript, ESLint, Tailwind CSS enabled
  - App Router and Turbopack enabled
  - No `src/` directory, default import alias
- Local development: `npm run dev`
- Local Docker: build and run with provided Docker commands
- Azure deployment: uses Free ASP plan, public GitHub Container Registry (ghcr), no authentication required
- Key environment variables for Azure App Service are documented in the Environment Variables section

## Parameters I used

`npx create-next-app@latest`

- ✔ What is your project named? … shadow-pivot-nextjs
- ✔ Would you like to use TypeScript? …  Yes
- ✔ Would you like to use ESLint? … Yes
- ✔ Would you like to use Tailwind CSS? …  Yes
- ✔ Would you like your code inside a `src/` directory? … No
- ✔ Would you like to use App Router? (recommended) … Yes
- ✔ Would you like to use Turbopack for `next dev`? … Yes
- ✔ Would you like to customize the import alias (`@/*` by default)? … No

Creating a new Next.js app in /Users/jack.jin/accdev/professional/git/shadow-pivot-nextjs/shadow-pivot-nextjs.
