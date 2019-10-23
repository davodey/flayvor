---
id: cards
title: Cards
sidebar_label: Cards
---

> **This is a [Gravity component](https://ux.pearson.com/gravity/c/cards)**

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://unpkg.com/@pearson-ux/card"></script>
```
### NPM
``` console
npm i @pearson-ux/card --save
```

## Demo

<div class="box">
<pearson-card>
    <div>Single Card</div>
</pearson-card>
</div>

```html
<pearson-card>
    <div>Single Card</div>
</pearson-card>
```

## Features
Card layout can adjust automatically by using our grid system in Gravity CSS.  All you need to do is wrap the card in ```<div class="gr-grid-container ie-flex">``` container.

> **Important note:**
Make sure you add the class ```ie-flex``` so it works in IE11.
### Row Layout
<div class="box">
    <div class="gr-grid-container ie-flex">
        <pearson-card>
            <div>Card One</div>
        </pearson-card>
        <pearson-card>
            <div>Card Two</div>
        </pearson-card>
        <pearson-card>
            <div>Card Three</div>
        </pearson-card>
        <pearson-card>
            <div>Card Four</div>
        </pearson-card>
    </div>
</div>

```html
<div class="gr-grid-container ie-flex">
    <pearson-card>
        <div>Card One</div>
    </pearson-card>
    <pearson-card>
        <div>Card Two</div>
    </pearson-card>
    <pearson-card>
        <div>Card Three</div>
    </pearson-card>
    <pearson-card>
        <div>Card Four</div>
    </pearson-card>
</div>
```

### Column Layout
To change the view inside the grid to a stacked view, add the attribute ```stacked``` to the ```<pearson-card>```.
<div class="box">
    <div class="gr-grid-container ie-flex">
        <pearson-card stacked>
            <div>Card One</div>
        </pearson-card>
        <pearson-card stacked>
            <div>Card Two</div>
        </pearson-card>
        <pearson-card stacked>
            <div>Card Three</div>
        </pearson-card>
        <pearson-card stacked>
            <div>Card Four</div>
        </pearson-card>
    </div>
</div>

```html
<pearson-card stacked>
```

### Toggle Layout
You can easily switch between a row view, and a column view by toggling the attribute ```stacked``` in the component, while wrapped in the ```.gr-grid-container``` class.

<div class="box">
    <div id="toggleCard" class="gr-grid-container ie-flex">
        <pearson-card>
            <div>Card One</div>
        </pearson-card>
        <pearson-card>
            <div>Card Two</div>
        </pearson-card>
        <pearson-card>
            <div>Card Three</div>
        </pearson-card>
        <pearson-card>
            <div>Card Four</div>
        </pearson-card>
    </div>
    <button id="toggleTrigger" class="gr-btn primary" style="margin-top:32px">List View</button>
</div>

```js
const button = document.querySelector('#toggleTrigger'),
  cards = document.querySelectorAll('#toggleCard pearson-card');

if (cards.length > 0) {
  button.innerHTML = "List View"
  button.addEventListener('click', event => {
    cards.forEach(card => {
      if (card.hasAttribute('stacked')) {
        card.removeAttribute('stacked')
        button.innerHTML = "List View";
      } else {
        card.setAttribute('stacked', true)
        button.innerHTML = "Row View";
      }
    })
  })
}
```


## Structure
Follow these patterns to successfully build out the card.
If you want to use the built-in layout features, wrap ```<pearson-card>``` in a ```div``` with a classes of ```'.gr-grid-container``` and  ```.ie-flex```.  This will take advantage of Gravity's CSS grid system and allow the cards to follow the recommended breakpoints when the browser width changes.

```html
<div class="gr-grid-container ie-flex">

</div>
```
You can add  ```<pearson-card>``` markup as children of ```.gr-grid-container```.  Inside the  ```<pearson-card>``` you can add any custom markup you want.

```html
<div class="gr-grid-container ie-flex">
    <pearson-card>
        <!-- Add any markup you want to have it wrapped in a card container -->
    </pearson-card>
    <!-- Add additional cards -->
</div>
```


## API
All attributes in this API are optional.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `stacked` | Bool | unset   | When multiple cards are displayed, this changes the layout from a row view to a stacked column view.                    |

### Events
This is a display wrapper only and has no events associated with it.

## HTML Markup
Do you want to customize your card?  You can use the markup provided below as a starting point, and style the card however you like..

```html
<div class="card-container">
    <div class="card">
        Content goes here...
    </div>
</div>
```
