# Matrix

A collection of web-development coursework and practice projects: plain HTML,
CSS and JavaScript assignments, the same personal page rebuilt with different
CSS frameworks, and static recreations of well-known site UIs (Airbnb,
Craigslist, Facebook, Twitter).

Everything here is static front-end code — there is no build step, package
manager, or server-side component. Each page is a standalone HTML file that
loads its own CSS/JS and its local image assets.

## Layout

```
.
├── HTML/                        # Fundamentals: markup and fixing malformed markup
│   ├── Assignment1.html         # First page: headings and paragraphs
│   ├── Assignment2.html         # Repairing broken/error-prone HTML
│   ├── Assignment3.html         # Personal website
│   └── Image.jpg                # Image used by Assignment2
├── CSS/                         # Styling exercises
│   ├── Assignment1/             # Page layout built from header/nav/content blocks
│   └── Assignment2/             # 1998 Google homepage replica
├── JS/                          # JavaScript exercises
│   ├── Assignment_1_Bring_everything_together/   # HTML + CSS + JS together
│   ├── Assignment_2_DOM_Manipulation/            # DOM events and form handling
│   └── Assignment_3_The_Calculator/              # Calculator app
├── Front-End Frameworks/        # The same personal page in different frameworks
│   ├── Assignment/              # Materialize personal site
│   ├── Bootstrap/               # Bootstrap 5 version of the personal site
│   └── Materialize/             # Materialize landing page
└── Web Fundamental/             # Static UI recreations
    ├── Airbnb/
    ├── Craigslist/
    ├── Facebook/
    └── Twitter/
```

Each assignment folder contains its own `index.html` (or named page), plus the
`style.css` and `script.js` it uses. Image and stylesheet assets for the site
recreations live in that project's `assets/` folder.

`learning-resources.txt` is a scratch list of external practice sites and
learning platforms, kept for reference; nothing in the code depends on it.

## Running a page

No installation is required. Either open an HTML file directly in a browser:

```sh
xdg-open "JS/Assignment_3_The_Calculator/index.html"
```

or serve the repository over HTTP (recommended, so relative asset paths behave
exactly as they would when hosted):

```sh
python3 -m http.server 8000
# then visit http://localhost:8000/
```

## Notes

- Some pages load Bootstrap, Materialize, Material Icons or Google Fonts from
  public CDNs, so an internet connection is needed for the intended styling.
- The image assets in `Web Fundamental/` are screenshots used as page content;
  they account for most of the repository size.
- There are no automated tests, linting or CI configuration.
- No license is declared in this repository; treat the contents as coursework.
