# Sixty

A daily 60-second game show. Press play to reveal tonight's category, take 5 seconds to think,
then name as many as you can before the 60 bulbs go dark. Every category has a **par** so easy
and hard nights are judged fairly.

## Files
| File | What it is |
|---|---|
| `index.html` | Page structure (menu, reveal + countdown, play, results, modals) |
| `style.css` | The 1970s game-show look |
| `app.js` | Game engine: timer, answer matching, par scoring, daily rotation, stats, sharing, sounds |
| `categories.js` | All categories and their par values |
| `tools/serve.ps1` | Local test server for Windows |
| `build-artifact.ps1` | Bundles everything into one file for the Claude artifact version |

No build step, no dependencies: it's a static site.

## Run locally
```
powershell -ExecutionPolicy Bypass -File tools\serve.ps1
```
Then open http://localhost:5173. Add `#ep-12` to the address to play episode 12 as practice.

## Live site
**https://sixty.liam-boffo.workers.dev**, hosted on Cloudflare (Workers & Pages → `sixty`),
connected to GitHub `liamboffo-alt/sixty`. Every push to `main` redeploys automatically in about a minute.

## Put it on the web (how this was set up)

### 1. Push to GitHub
1. Create a free account at https://github.com and a new **empty** repository called `sixty`.
2. In this folder:
   ```
   git remote add origin https://github.com/<your-username>/sixty.git
   git push -u origin main
   ```

### 2. Host it for free (pick one)
- **Cloudflare Pages** (recommended): dash.cloudflare.com → Workers & Pages → Create → Pages →
  Connect to Git → pick `sixty`. Framework preset: **None**. Build command: *(empty)*.
  Output directory: `/`. Deploy. You get `sixty.pages.dev` (or similar).
- **Netlify**: app.netlify.com → Add new site → Import from Git → pick `sixty`. Leave build
  command empty, publish directory `.`.
- **Vercel**: vercel.com → Add New → Project → import `sixty`. Framework: Other. No build command.

After that, every `git push` redeploys automatically.

### 3. Custom domain (optional, ~$10-15/year)
Buy a domain (Cloudflare Registrar, Porkbun or Namecheap), then add it in your host's
**Custom domains** settings and follow its DNS instructions. HTTPS is automatic.
Then set `SITE_URL` at the top of `app.js` (e.g. `'https://playsixty.com'`) so shared results link to it.

## Configuration (top of `app.js`)
- `LAUNCH`: the date of Episode #1 (currently Nov 19, 2026). Before that day, the site offers
  Episode #1 as an unsaved sneak preview.
- `DURATION_MS` / `COUNTDOWN_MS`: the 60-second clock and the 5-second thinking time.
- `SITE_URL`: the link added to shared results.

## Daily rotation (fully automatic)
The category for each day is worked out from the date, so the site changes at midnight (the
player's local time) with no manual steps. Regular categories play in the order they appear in
`categories.js` and loop forever (49 regular + 2 holiday specials = 51).
Holiday specials in `SIXTY_SPECIALS` (bottom of `categories.js`) take their date every year:
Santa's Reindeer on Dec 24, Christmas Songs on Dec 25. They push the rotation back a day
rather than skipping a regular category.

## Adding a category
Add an object to `categories.js`, and give it a par in the `PAR` list at the bottom.
Each answer is one line, `Display Name|alias|alias`. Matching already ignores case, accents,
punctuation, spaces, plurals, small typos and a leading "The/A/An". If two answers share an alias
(e.g. `Adams`), typing it twice gets both. New categories should go at the **end** of the list,
so episodes that already aired keep their category.

## Player data
Results, streaks and stats are stored in each player's browser (localStorage key `sixty:v1`).

## Roadmap: global stats ("You beat 78% of players today")
Needs a small backend. Plan:
1. **Supabase** (free tier): one table `scores (episode int, category text, score int, created_at)`,
   insert-only for anonymous users via a row-level security policy.
2. When a game finishes, insert the score (no personal data).
3. On the results screen, fetch the day's score distribution (a Postgres function returning counts
   per score) and show "You beat X% of players" plus a small histogram.
4. **Automatic par:** set each category's par from the median score of real players, replacing
   the hand-picked values.
5. Basic abuse guard: one submission per browser per episode, and ignore impossible scores.
