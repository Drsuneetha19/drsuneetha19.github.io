# drsuneetha19.github.io

Personal portfolio site for Dr. Suneetha Mekala, MD, MS — Research Data Analyst.

**Live site:** https://drsuneetha19.github.io

## Pages

- `index.html` — Bio: summary, experience, education, skills, certifications, awards
- `publications.html` — Peer-reviewed and in-review publications
- `projects.html` — Health data science / ML projects, linked to GitHub repos
- `photos.html` — Conference poster presentations and award certificate, with a click-to-enlarge gallery

## Structure

```
assets/
  css/style.css       shared stylesheet
  js/lightbox.js       photo gallery lightbox
  img/                  web-optimized copies of photos/posters used on the site
  resume/               resume PDF linked from the Bio page

Certificates/, PROFILE PIC/, Presentations/, Resume/
                        original source files (full-resolution photos, resume)
```

Plain HTML/CSS/JS — no build step. Served directly by GitHub Pages from the `main` branch root.

## Updating content

- Edit the relevant `.html` file directly.
- To add/replace a photo, drop the source image into its original folder, then generate a web-sized copy into `assets/img/` (e.g. with `sips -Z 1600 source.jpg --out assets/img/name.jpg` on macOS) and reference it from `photos.html`.
- To update the resume, replace `Resume/SuneethaMekala_Resume.pdf` and copy it to `assets/resume/SuneethaMekala_Resume.pdf`.
