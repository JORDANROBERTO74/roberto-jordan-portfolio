# Provenance — Roberto Jordán Portfolio

## Origin

- Reference: the previous repository `JORDANROBERTO74/my-portfolio` (to be archived on GitHub once this repository is published). This working copy was migrated in place.
- Starting point: a create-next-app scaffold whose first two commits (2024-01-31) were authored by the author of the portfolio template this site began from.
- Used for: the initial Next.js scaffold and route configuration only.
- Not used: no code, class names, assets, copy, colours, brand name or logo from that author are shipped beyond the generic Next.js scaffold.

## Assets

| Asset | Source | License |
| --- | --- | --- |
| `public/img/logo-dark.png`, `public/img/logo-light.png` | designed for this portfolio | proprietary |
| `public/img/avatar.png` | illustrated portrait carried over from the previous version | proprietary |
| `public/img/projects/project1-7.png` | screenshots of Roberto Jordán's own projects | proprietary |
| `public/img/devices.png`, `pie-chart.png`, `software&coffee.jpg` | carried over from the previous version, original source not documented | unknown, see residual risk |
| Typeface | Inter via `next/font`, downloaded at build time and self-hosted | SIL Open Font License 1.1 |

## Changes from the reference

- New identity: folder, repository, `package.json` name and hosting project all use `roberto-jordan-portfolio`.
- Locales reduced from five to two (`en`, `es`); `fr`, `id` and `pt` removed.
- EmailJS credentials moved out of the source into environment variables.
- Next.js upgraded from 14.1.0 to 14.2.35 and known non-breaking advisories patched.
- Removed dead template files (`next.svg`, `vercel.svg`, `exampleImage.jpg`, `Logo.svg`).
- New README, MIT license and this provenance record; the git history restarts with one initial commit.
- Layout, components, palette, typography and content kept as they were.

## Residual risk

- The old repository keeps the two scaffold commits; it is archived, not deleted, and is the authoritative record of the previous history.
- The source and license of `devices.png`, `pie-chart.png` and `software&coffee.jpg` are not documented. Replace them with original artwork if the site is ever distributed commercially.
- The layout follows a conventional single-page portfolio structure shared by many templates; similarity is limited to generic portfolio sections.

## Deployment

- Repo: <https://github.com/JORDANROBERTO74/roberto-jordan-portfolio>
- Live: <https://robertojordan.vercel.app>
- Release: pending
