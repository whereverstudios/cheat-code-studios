# Cheat Code Studios — homepage

Single static page. `page.html` is the source (title/meta/style at the top, then markup + script);
`node build.mjs` wraps it into a deployable `index.html`. Preview with `node serve.mjs 4324`.

It opens in the room (`media/room.jpg`, the 16:9 den render): press Start on the SNES pad (click, Enter or Space),
the CRT powers on, the camera flies into the glass, static, and the site fades in. Atmosphere layers (lava lamp,
window light, TV standby glow, LED, dust, mouse parallax) are positioned as percentages of the image, so if the
image changes, update `SCREEN` and the `.fx` / `.startBtn` positions in `page.html`. Footer link replays it.

The page is a console: every section is a locked slot with a real classic cheat code.
Type it (arrows + letters, Enter = Start), tap the on-screen pad, or click the lock and the
inputs play themselves. Unlocks persist in localStorage. Sound is on by default (browsers only allow it after the Start click); the SFX toggle persists.

| Section      | Code                        | Origin        |
|--------------|-----------------------------|---------------|
| Results      | ↑↑↓↓←→←→ B A                | Konami, 1986  |
| Services     | IDKFA                       | Doom, 1993    |
| Founders     | JUSTINBAILEY                | Metroid, 1986 |
| Partners     | MOTHERLODE                  | The Sims, 2000|
| Work with us | START (Enter)               | arcade        |

Easter eggs: `IDDQD` (god mode joke), `IDCLIP` (unlocks everything), `ROSEBUD`.
Footer "Unlock everything" is the plain fallback for non-gamers.

Before launch: confirm the contact email in the Work With Us slot (`hello@cheatcodeagency.com` is a placeholder)
and add `public/og.jpg` style share image if wanted.
