---
id: install
title: Flayvor Component Installation
sidebar_label: Install Flayvor Web Components
---

The following options will give you access to the entire web component library.
If you would like a specific version or release, please visit our NPM page to see whats available and follow the NPM / UNPKG instructions to download / link to a specific version.
1. [Pearson Web Components NPM Page](https://www.npmjs.com/package/@pearson-ux/pearson-web-components?activeTab=versions)
2. [Pearson Gravity CSS NPM Page](https://www.npmjs.com/package/@pearson-ux/gravity-css?activeTab=versions)
> **Important note:**
If you would like to download and install individual components, please visit our [CDN and NPM links section](getting-started/cdn.md).

##### CDN
```html
<script src="https://unpkg.com/@pearson-ux/pearson-web-components"></script>
```
##### NPM
``` console
npm i @pearson-ux/pearson-web-components --save
```

## Dependancies
There are two components, including the full build that require [moment.js](https://momentjs.com/).
1. [Datepicker](https://ux.pearson.com/prototypes/gravity-documentation/docs/web-components/datepicker)
2. [Timepicker](https://ux.pearson.com/prototypes/gravity-documentation/docs/web-components/timepicker)

> **Important note:**
You do not need these dependancies for Gravity CSS or other standalone web components that were NOT mentioned above.
##### CDN
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment-range/4.0.2/moment-range.js"></script>
```
##### NPM
``` console
npm i moment-with-locales-es6 --save
npm i moment-range --save
```

## Polyfills
To make web components cross-browser compatible down to IE11 you will need the three following polyfills:
1. Web component loader
2. Custom elements es5 adapter
3. Polyfill.io

##### CDN
> **Important note:**
Polyfill.io is currently only available through CDN and cannot be loaded as an NPM package.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/custom-elements-es5-adapter.js"></script>
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
```
##### NPM
``` console
npm i webcomponents-loader --save
npm i custom-elements-es5-adapter --save
```

## Example
```html
<head>
    <title>Your Application</title>
    <!-- Gravity CSS -->
    <link rel="stylesheet" href="https://pearsonux.sfo2.cdn.digitaloceanspaces.com/css/gravity.css" />
    <!-- load tippy -->
    <script src="https://unpkg.com/tippy.js@4"></script>
    <!-- Moment JS dependancy - needed for datepicker, timepicker, and the full build -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment-with-locales.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment-range/4.0.2/moment-range.js"></script>
    <!-- IE Polyfills -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/custom-elements-es5-adapter.js"></script>
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
    <!-- Load all the components -->
   <script src="https://unpkg.com/@pearson-ux/pearson-web-components"></script>
</head>
<body>
    <main id="main">
    <!-- place your app markup here -->
    </main>
    <!-- load icons -->
    <script>
        (function (win, doc) {
          'use strict';
          doc.addEventListener("DOMContentLoaded", function(){
            if (!document.getElementById('pe-icons-sprite')) {
              var pe_ajax = new XMLHttpRequest();
              pe_ajax.open("GET", "https://pearsonux.sfo2.cdn.digitaloceanspaces.com/css/p-icons-sprite-1.1.svg.gz", true);
              pe_ajax.responseType = "document";
              pe_ajax.onload = function(e) {
                document.body.insertBefore(
                  pe_ajax.responseXML.documentElement,
                  document.body.childNodes[0]
                );
              };
              pe_ajax.send();
            }
          });
        })(window, document)
    </script>
</body>
```
