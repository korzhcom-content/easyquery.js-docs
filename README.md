# EasyQuery.JS Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

The official documentation site for **EasyQuery.JS** — a platform-independent JavaScript/TypeScript solution for embedding ad‑hoc reporting and advanced search (query/filter building) into web applications. This repository holds the documentation content (introduction, tutorials, the EasyQuery Web Service API, changelog, and the API reference for current and older versions) together with the Astro project that builds it into a static site.

The published site is served as part of **[korzh.com](https://korzh.com)** at **https://korzh.com/easyquery/javascript/docs**.

## Approach

The site is a static documentation site built with [Astro](https://astro.build) and the [Starlight](https://starlight.astro.build) docs framework.

It is intentionally **content‑driven**: you add and edit Markdown/MDX and the navigation builds itself.

- All content lives under `src/content/docs/` as `.md` / `.mdx` files.
- The **sidebar is generated from the folder tree** (`tools/get-sidebar.js`), not hand‑maintained in config. Folder labels come from a `__section.md` heading, and ordering comes from `sidebar.order` in article frontmatter / `frontmatter.json` in folders. The three top‑level entries (Introduction, EasyQuery Web Service API, Changelog) are listed manually in `astro.config.mjs`.
- During the build, **section landing pages (`index.md`) are generated** from each `__section.md` (`tools/add-indexes.js`), including auto‑built "In this section" and "Subsections" link lists. Do not hand‑edit a generated `index.md` — edit the `__section.md` or the underlying articles instead.
- A small rehype plugin (`plugins/rehype-links.js`) rewrites internal links to the deployment base path, so links are authored root‑relative (e.g. `/introduction`).

The site is built under the base path `easyquery/javascript/docs` and output to `./dist/easyquery/javascript/docs`. This base path must stay aligned with the korzh.com rewrite rule (see [Deployment](#deployment)).

## Local development

Requires Node.js 22+ and npm. All commands run from the repository root:

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` (pages live under `/easyquery/javascript/docs`) |
| `npm run start` | Same as `dev`, but opens the browser automatically |
| `npm run build` | Generate section indexes, then build the production site to `./dist/easyquery/javascript/docs` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Crawl the **running** dev server for broken links (start `npm run dev` first) |

`npm run build` is **not** plain `astro build` — it first runs `tools/add-indexes.js` to (re)generate the section `index.md` pages.

## Dependencies

This is a self‑contained Astro project — there are **no git submodules and no sibling repositories required** to build it. All dependencies are npm packages declared in `package.json`, most notably:

- `astro` + `@astrojs/starlight` — site framework and docs theme.
- Starlight theme/plugins wired in `astro.config.mjs`: `starlight-theme-rapide`, `starlight-image-zoom`. (`starlight-links-validator` and `starlight-showcases` are installed but not currently enabled in config.)
- Code‑block rendering: `@expressive-code/plugin-line-numbers` (configured in `ec.config.mjs`).
- Build/content tooling: `gray-matter`, `glob`, `fs-extra`, `unist-util-visit`, `sharp`, `@olton/spider` (link crawler), `@olton/terminal`.

The repository it depends on at runtime is, in effect, the **korzh.com site**, which embeds this documentation via a Netlify rewrite (see below).

## Contributing & branching

- **Never push directly to `main`.** All changes to `main` must go through a **Pull Request**.
- Day‑to‑day work happens on `dev` (and feature branches), which is also deployed for preview/review.

## Deployment

Deployment is handled by **Netlify** and triggered automatically on branch changes:

- **`main`** — production documentation.
- **`dev`** — staging/preview of in‑progress docs.

Both branches build with `npm run build` and publish `./dist/easyquery/javascript/docs`.

### Integration into korzh.com

The deployed Netlify site is surfaced on the main korzh.com domain through a **Netlify rewrite (proxy) rule with a `200!` status**. Rather than redirecting the visitor, korzh.com proxies requests for `/easyquery/javascript/docs/*` to this site, so the documentation appears seamlessly under `https://korzh.com/easyquery/javascript/docs` while remaining a separate repository and deploy.

This is why the project is built under the `easyquery/javascript/docs` base path — the paths must line up with the rewrite rule on korzh.com.

## Redirects

- Old/relocated article URLs are mapped in `src/content/docs/_redirects` (Netlify `from␉to` format) — used when articles move between sections or versions.
- The root `netlify.toml` redirects `/` to `/easyquery/javascript/docs/introduction`.
