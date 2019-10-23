---
id: footer
title: Footer
sidebar_label: Footer
---

> **This is an [older UXF component](https://uxframework.pearson.com/c/footer)**
not a part of gravity, but is being considered, as currently there is no footer component available.

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://unpkg.com/@pearson-ux/footer"></script>
```
### NPM
``` console
npm i @pearson-ux/footer --save
```

## Demo
> **Important note**
The footer will stick to the bottom of the page when added to your application.

### Light Footer
<div class="box" style="height:100px">
  <pearson-footer style="position:absolute; bottom: auto"/>
</div>

```html
<pearson-footer/>
```

### Dark Footer
<div class="box" style="height:100px; background:#047A9C; bottom:0; position:absolute; width:100%">
  <pearson-footer style="position:fixed; bottom: auto" theme="dark"/>
</div>

> **Important Note**
Make sure you wrap the dark theme footer in a div with a background color, ```position:absolute```, ```width:100%```, ```bottom:0``` and a height of your choosing.

```html
<div style="height:100px; background:#047A9C; bottom:0; position:fixed; width:100%">
    <pearson-footer theme="dark" />
</div>
```


## Structure
To add a footer, just add the markup in your app where you want it displayed, usually at the bottom of the page.

## API
All attributes in this API are optional for the alert to function properly.

> **Important note**
Links that are added through these attributes have hard coded href's that navigate to the correct location.

| Attribute       | Type    | Default | Description                                            |
| --------------- | ------- | ------- | ------------------------------------------------------ |
| `accessibility` | boolean | `false` | Shows accessibility link in footer                     |
| `support`       | boolean | `false` | Shows support link in footer                           |
| `theme`         | string  | unset   | Sets the theme of the footer. Accepted values: 'dark'. |

```html
    <pearson-footer support accessibility theme="dark" />
```

### Events
There are no event that get emitted.

## HTML Markup
Do you want to build out a custom footer?  No problem, use the markup below along with Gravity CSS to make your own footer that follows the UXF specification.

> **Important note:**
You can [follow the UXF guidelines](https://uxframework.pearson.com/c/footer) to view the suggested functionality of the footer.

```html
<footer class="light">
    <ul class="links">
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Accessibility</a></li>
        <li><a href="#">Permissions</a></li>
        <li><a href="#">Support</a></li>
    </ul>
    <p class="copyright"></p>
</footer>
```
