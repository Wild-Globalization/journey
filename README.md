[![Deploy Eleventy to XMIT](https://github.com/Wild-Globalization/journey/actions/workflows/xmit-deploy.yml/badge.svg)](https://github.com/Wild-Globalization/journey/actions/workflows/xmit-deploy.yml)

# [journey.wildglobalization.com](https://journey.wildglobalization.com)

Splash page for the **Wild Globalization Pilot** course. Its one job is to sell the
course and hand the visitor off to the learning platform at
`wildglobalization.thinkific.com`.

## Design

The page reuses the Thinkific LXP theme tokens verbatim so the splash and the
learning experience read as one product:

| Token | Value | Used for |
| --- | --- | --- |
| `--cta-bg-color` | `#202651` | Header, hero scrim, closing CTA band |
| `--accent-bg-color` | `#edbe4c` | Primary buttons, eyebrows, chapter accents |
| `--primary-text-color` | `#36394d` | Body copy |
| `--secondary-bg-color` | `#f2f3f5` | Alternating sections |
| `--surface-border-radius` | `0` | Square corners on cards and panels |

Colour and section rhythm come from the LXP. **Typography and button shape come from
`wildglobalization.com` instead**: Georgia for display, the system sans stack for
everything else, `999px` pill buttons — no webfonts are loaded at all. The hero H1 is
italic by request.

Icons are Phosphor *regular*, the same set the LXP loads, inlined as an SVG sprite
in [`src/_data/icons.js`](src/_data/icons.js) so nothing is fetched at runtime. Use
them with `{% raw %}{% icon "books" %}{% endraw %}`; add a name to `icons.js` from
`@phosphor-icons/core/assets/regular/<name>.svg` when you need one that isn't there.

If either upstream theme changes, re-read its `:root` block and update the top of
[`src/assets/css/index.css`](src/assets/css/index.css) to match.

## Content

Everything editable lives in data files — no template surgery needed:

- [`src/_data/course.yaml`](src/_data/course.yaml) — chapters, lessons, counts, price
- [`src/_data/links.yaml`](src/_data/links.yaml) — every outbound URL in one place
- [`src/content/index.md`](src/content/index.md) — hero, sections, FAQ copy
- [`src/_data/settings.js`](src/_data/settings.js) — site metadata and social cards

The lesson list mirrors the live Thinkific curriculum (5 chapters, 26 lessons).
When the course changes, update `course.yaml`.

## Outbound links

| Destination | Where |
| --- | --- |
| Enroll (Thinkific) | Header, hero, footer, closing CTA |
| `wildglobalization.com` | Header nav, footer, author link |
| `explore.wildglobalization.com` | Header nav, footer |
| `thewhitestonefoundation.org` | Header nav, footer |
| Thinkific LXP sign-in | Footer bottom ("Already enrolled?") |

## Structured data

Two layers, both on the one page:

- **microformats2** — `<main>` is an `h-entry` (`p-name`, `p-summary`, `e-content`,
  `u-url`) whose `p-author` is a nested `h-card` for Gary Bedford (`p-name`,
  `u-photo`, `p-job-title`, `p-note`, three `u-url`s). Those three links also carry
  `rel="me"` to `garybedford.com`, `wildglobalization.com`, and
  `explore.wildglobalization.com`.
- **schema.org JSON-LD** — one `@graph` in [`base.njk`](src/_includes/layouts/base.njk)
  with `WebSite`, `Organization`, `Person`, `Course`, and `FAQPage`.

The `Person` and `Course` `@id`s are deliberately the same strings used in
`thewhitestonefoundation.org/src/_data/schema.json`, so the two sites describe one
person and one course rather than four things:

```
https://thewhitestonefoundation.org/team/gary-bedford/#person
https://journey.wildglobalization.com/#course
```

If you change either `@id`, change it in both repos.

Verify a build with:

```sh
python3 -m pip install mf2py
python3 -c "import mf2py,json;print(json.dumps(mf2py.parse(doc=open('_site/index.html').read(),url='https://journey.wildglobalization.com/'),indent=1))"
```

## Develop

```sh
npm install
npm run dev     # http://localhost:8080
npm run build   # → _site/
```

## Deploy

Pushing to `main` runs [`.github/workflows/xmit-deploy.yml`](.github/workflows/xmit-deploy.yml),
which builds and uploads `_site` to XMIT. It needs:

- repo secret `XMIT_KEY`
- repo variable `XMIT_SITE` (defaults to `journey.wildglobalization.com`)

DNS for `journey.wildglobalization.com` is not yet pointed anywhere — that has to
be created before the first deploy resolves.
>>>>>>> a64a08c (edit: :rocket: initial commit)
