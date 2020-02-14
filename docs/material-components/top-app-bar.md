---
id: top-app-bar
title: Top App Bar
sidebar_label: Top App Bar
---

>**Important Note**
This component follows the 'Official Material Design Guidelines' and uses markup provided by the [material documentation](https://material.io/develop/web/components/top-app-bar)


## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the polyfills are loaded or the components will not be cross browser compatible.

### CDN - Recommended
```html
<script src="https://unpkg.com/@flayvor/top-app-bar"></script>
```

### NPM
``` console
npm i @flayvor/top-app-bar --save
```

## Demo

### Standard Header

<div className="box">
    <flayvor-top-app-bar title="Flayvor Top App Bar" type="standard" position="static" menuicon="menu">
        <button slot="right" class="material-icons mdc-icon-button mdc-top-app-bar__action-item">backup</button>
        <button slot="right" class="material-icons mdc-icon-button mdc-top-app-bar__action-item">help</button>
        <button slot="right" class="material-icons mdc-icon-button mdc-top-app-bar__action-item">zoom_out_map</button>
    </flayvor-top-app-bar>
</div>

##### CSS
You can use these three css properties to style your component. Select the ```flayvor-top-app-bar``` like in the example below.

```css
flayvor-top-app-bar {
   background-color: #c6e873;
   color:#252525;
   font-family: 'Roboto', sans-serif;
}
```
##### HTML
Add this HTML to your project to display the flayvor material top app bar.

> **Important Note**
The button elements you add are the action items placed to the right.  We are using buttons provided by [material design specification](https://material.io/develop/web/components/buttons/icon-buttons/).

```html
    <flayvor-top-app-bar title="Flayvor Top App Bar" type="standard" position="static" menuicon="menu">
        <button slot="right" class="material-icons mdc-icon-button mdc-top-app-bar__action-item">backup</button>
        <button slot="right" class="material-icons mdc-icon-button mdc-top-app-bar__action-item">help</button>
        <button slot="right" class="material-icons mdc-icon-button mdc-top-app-bar__action-item">zoom_out_map</button>
    </flayvor-top-app-bar>
```

## API

### Required (on child button elements)
| Attribute    | Type      | Required Value  | Description                                                   |
| ------------ | --------- | -------- | ------------------------------------------------------------- |
| `slot`         | `String` | `right`  | Defines the right area of the web component template |


### Optional
| Attribute    | Type      | Default  | Description                                                   |
| ------------ | --------- | -------- | ------------------------------------------------------------- |
| `type`         | `String` | `standard`  | Choose between these types```standard```, ```dense```, ```collapsed```, ```prominent```, ```fixed```, `short` |
| `title`         | `String` | `unset`  | Adds title text |
| `menuicon`         | `String` | `unset`  | Adds an icon button, with an icon from the material library, to the leftmost part of the screen  |


## Events
| Event      | Description                                                   |
| ------------ | ----   |
|`MDCTopAppBar:nav` | Emits when the navigation icon is clicked.           |


>**Important Note**
You can listen for additional events by tapping into the web components shadow dom,


```js
    const topAppBar = document.querySelector('flayvor-top-app-bar'),
    actionButtons = topAppBar.shadowRoot.querySelectorAll('buttons');

    // loop through the buttons and add event listeners.
```

