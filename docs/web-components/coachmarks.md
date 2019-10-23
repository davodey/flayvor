---
id: coach
title: Coachmarks
sidebar_label: Coachmarks
---

> **This is an [older UXF component](https://uxframework.pearson.com/c/coachmarks)**
not a part of gravity, but is being considered, as currently there is no coachmark component available.

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://unpkg.com/@pearson-ux/coachmark"></script>
```
### NPM
``` console
npm i @pearson-ux/coachmark --save
```

## Demo
> **Important note**
The component markup is not hard coded, instead its built on the fly when the trigger button is clicked.  To make this happen, you will need to build your own script to trigger these coachmarks.  You can see how we put everything together below, in our structure section.

### Default Coachmark
<div class="box" id="defaultRef">
    <button class="gr-btn" id="openDefault" aria-haspopup="dialog">Show Default</button>
</div>

```html
<pearson-coachmark
    position="top"
    trigger="#openDefault"
    reference="#defaultRef"
    title="Default Coachmark"
    content="Content for your enjoyment"
    type="default"
    arrow="true"
    gotit="Got it">
</pearson-coachmark>
```

### Generic Coachmark
<div class="box" id="reference3">
    <button class="gr-btn" id="generic" aria-haspopup="dialog">Show Generic</button>
</div>

```html
<pearson-coachmark type="generic">
```


### Informational Coachmark
<div class="box" id="reference2">
    <button class="gr-btn" id="info" aria-haspopup="dialog">Show Informational</button>
</div>

```html
<pearson-coachmark type="informational">
```

### Joyride
<div class="box" id="reference">
    <button class="gr-btn" id="openTop" aria-haspopup="dialog">Start Joyride</button>
</div>

## Structure
The recommended way to fire off a coachmark is to generate the markup with JS, and not place a hardcoded ```<pearson-coachmark>``` tag in the document.

First we'll create a button element that triggers the alert script.

In this example well create a basic button with the id you want to query in your script.  Well use ```#openCoachmark```
> **Important note**
For accessibility, make sure you add the attribute ```aria-haspopup="dialog"``` to the button.
```html
<button id="openCoachmark" class="gr-btn" aria-haspopup="dialog">Trigger Coachmark</button>
```

Next we will build out the script that generates the coachmark.

We start the script by querying the button that triggers the coachmark.

```js
const trigger = document.querySelector('#openCoachmark');
```

Next, we create a ```<pearson-coachmark>``` element and assign it to variable.

```js
const coachmark = document.createElement('pearson-coachmark');
```

Then well add one more variable called ```target``` where we want the coachmark to appear in the dom.

> **Important note**
For accessibility we recommended that coachmark is loaded after the ```<main id="main">``` dom element.  Please [see the installation docs](http://localhost:3007/prototypes/gravity-documentation/docs/getting-started/install#accessibility) to see more information on this.

```js
const target = document.querySelector('#main');
```

Now, we'll create a function that builds out and renders the coachmark element.

```js
function generateCoach(opts) {
  for (let attrName in opts) {
    coachMark.setAttribute(attrName, opts[attrName])
  }
  target.appendChild(coachMark)
}
```

Then lets use that function to generate your coachmark.

```js
const coachMark = function (event) {
  generateCoach({
    position: 'top',
    trigger: '#openDefault',
    reference: '#defaultRef',
    title: 'Default Coachmark',
    content: 'Content for your enjoyment',
    type: 'default',
    arrow: true,
    gotIt: "Got it",
    dismiss: true
  });
};
```

Finally, lets add an event listener to the button that triggers the coachmark.

```js
if (trigger !== null) {
  trigger.addEventListener('click', function (event) {
    coachMark();
    event.stopImmediatePropagation()
  });
}
```




Last but not least, add the script to your document.

> **Important note:**
To view the full script we used in these demos you can [view it on GitHub.](https://gist.github.com/davodey/65e068a5b6bf303b5adead3c696c9657)


## API

### Required
| Attribute   | Type   | Default   | Description                                                                                            |
| ----------- | ------ | --------- | ------------------------------------------------------------------------------------------------------ |
| `position`  | String | unset     | `top` `right` `bottom` `left` Each placement can have a variation from `-start` `-end`                 |
| `trigger`   | String | unset     | The ID of the button invoking the coachmark, this is important for accessibility and focus management. |
| `reference` | String | unset     | The ID of element you want the coachmark to appear on.                                                 |
| `title`     | String | unset     | The title of the coachmark                                                                             |
| `content`   | String | unset     | The content you want the coachmark to display                                                          |
| `type`      | String | `default` | The type of coachmark `default` `informational` `generic`
### Optional

| Attribute | Type   | Default | Description                                                                                                                                                                                            |
| --------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `arrow`   | Bool   | unset   | Renders an arrow on the coachmark.                                                                                                                                                                     |
| `gotit`   | String | unset   | If left blank `gotit=' '`, the coachmark will render an optional got it button. If a value is specified e.g.`gotit='next coachmark` the coachmark will render a button with the label 'next coachmark' |
| `dismiss` | Bool   | unset   | If set to true, the got it button will also dismiss the coachmark                                                                                                                                      |

### Events

```pearson-coachmark``` emits two events: ```dismiss``` and ```proceed``` Once an coachmark is dismissed, it is removed from the DOM.

| Event     | Description                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------- |
| `dismiss` | Will fire when the user interacts with the close button.                                                 |
| `proceed` | Will fire when the user interacts with the 'got it' button and the `dismiss` attribute is not specified. |                                       |

```js
  const coachMarkNode = document.querySelector('pearson-coachmark')
  coachMarkNode.addEventListener('dismiss', function (e) {
    // Do something when the close button is clicked
  });

   coachMarkNode.addEventListener('proceed', function (e) {
      // Do something when the got it button is clicked
    });
```

## HTML Markup
Do you want to use your own JS to make the coachmarks function?  No problem, use the markup below along with Gravity CSS to build coachmarks with your own JS.

> **Important note:**
You can [follow the UXF guidelines](https://uxframework.pearson.com/c/coachmarks) to view the suggested functionality of the coachmark.

```html
<div role="dialog" aria-labelledby="coachmark-title" aria-describedby="coachmark-body" class="gr-coachmark-container">
    <div class="coachmark">
        <div class="content">
            <div class="title-container">
                <h3 id="coachmark-title">Ready to invite students?</h3>
                <button class="gr-btn icon-btn-18" aria-label="Close, Ready to invite students?">
                    <svg focusable="false" class="icon-18" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close-18"></use>
                    </svg>
                </button>
            </div>
            <p id="coachmark-body">
                Open the course menu to access invite instructions.
            </p>
            <button id="gotIt" class="coach-link" href="#" aria-label="Got It">Got it</button>
        </div>
    </div>
    <div class="popper__arrow" x-arrow></div>
</div>
```
