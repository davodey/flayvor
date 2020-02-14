---
id: install
title: Flayvor Component Installation
sidebar_label: Install Flayvor Web Components
---

The following options will give you access to the entire web component library.
If you would like a specific version or release, please visit our NPM page to see whats available and follow the NPM / UNPKG instructions to download / link to a specific version.

1. [Flayvor Web Components NPM Page](https://www.npmjs.com/package/@flayvor/web-components)

> **Important note:**
If you would like to download and install individual components, please visit our [CDN and NPM links section](getting-started/cdn.md).

##### CDN
```html
<script src="https://unpkg.com/@flayvor/web-components"></script>
```
##### NPM
``` console
npm i @flayvor/web-components --save
```

## Dependancies

Flayvor material components work best with material icons and fonts.  

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
```


## Polyfills
To make web components cross-browser compatible you will need the three following polyfills:

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

## Example - Putting the pieces together
```html
<head>
    <title>Your Application</title>
    
    <!-- polyfills -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/custom-elements-es5-adapter.js"></script>
    <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
    
    <!-- icons and fonts -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">


    <!-- Load all the components -->
   <script src="https://unpkg.com/@flayvor/web-components"></script>
</head>
<body>
    <main id="main">
    <!-- place your app markup and components here -->
    </main>
</body>
```
