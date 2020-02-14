export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Flayvor.io",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/material-components/top-app-bar",
          "label": "Docs",
          "position": "right"
        },
        {
          "href": "https://github.com/davodey/flayvor",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/doc1"
            },
            {
              "label": "Second Doc",
              "to": "docs/doc2"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Flayvor.io."
    }
  },
  "title": "Flayvor.io",
  "tagline": "Flayvor Material Web Components",
  "url": "https://flayvor.io",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "flayvor",
  "projectName": "flayvor",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/uodeyda/Sites/projects/flayvor/sidebars.js"
        },
        "theme": {
          "customCss": "/Users/uodeyda/Sites/projects/flayvor/src/css/custom.css"
        }
      }
    ]
  ],
  "scripts": [
    "https://cdn.polyfill.io/v2/polyfill.min.js?rum=0",
    "https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js",
    "https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/custom-elements-es5-adapter.js",
    "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/moment-range/4.0.2/moment-range.js",
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "https://unpkg.com/@flayvor/top-app-bar"
  ]
};