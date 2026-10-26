# Le CollectiF preview source

Recovered from the supplied release-candidate ZIP. This is **not** commit 278bd80 or ecb02aa.

Changes: all four submission types share a disabled RequestSubmit control; POST /api/enquiries returns 503 without contacting Resend. No production settings or DNS are included.

Deploy to Vercel **Preview only**, using a non-production branch. Do not merge into main.

The original release-candidate QA evidence is in the original ZIP. This package has not been independently rebuilt or browser-tested after modification.


## Official SVG branding (26 October 2026)
- Header: `/brand/logo-horizontal-colour.svg`
- Dark footer: `/brand/logo-horizontal-white.svg`
- Other supplied logo variations are preserved in `public/brand/` for future use.
- All email-dependent submissions remain disabled for this preview.

## GitHub Codespaces upload (preview branch only)
Upload this ZIP into the project root, then run:

```bash
unzip -o LeCollectiF-Preview-With-HD-Logos.zip -d .
git status --short
npm ci && npm run lint && npx tsc --noEmit && npm run build
git add -A && git commit -m "Prepare Le CollectiF preview with approved vector logos" && git push origin HEAD
```

Check `git branch --show-current` first. Do not run on main.
