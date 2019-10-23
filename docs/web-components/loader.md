---
id: loader
title: Loading Indicator
sidebar_label: Loading Indicator
---

> **This is an [older UXF component](https://uxframework.pearson.com/c/loading-indicator)**
not a part of gravity, but is being considered, as currently there is no loading component available.

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://unpkg.com/@pearson-ux/loading-indicator"></script>
```
### NPM
``` console
npm i @pearson-ux/loading-indicator --save
```

## Demo
> **Important note**
Loading indicator markup is not hard coded, instead its built on the fly when the trigger button is clicked.  To make this happen, you will need to build your own script to trigger the loading indicator.  You can see how we put everything together below, in our structure section.

<div class="box">
    <button class="gr-btn" type="button" id="content-loader">Load content</button>
    <div id="output"></div>
</div>

```html
<pearson-loader></pearson-loader>
```

## Structure
The recommended way to fire off a loading indicator is to generate the markup with JS, and not place a hardcoded ```<pearson-loader>``` tag in the document.

First we'll create a button element with an ```id``` attribute that triggers the loading indictor script
```html
<button class="gr-btn" type="button" id="content-loader">
    Load content
</button>
```

Next we will build out the script that generates the loading indicator.

We start the script by querying the button that triggers the alert.

```js
const trigger = doc.querySelector('#content-loader');
```

Then we create a function that will load the indicator while data is loading.  In this example we use ajax.

```js
function renderIndicator () {

    // generate a pearson-loader element
    const loadingIndicator = document.createElement('pearson-loader'),
        output = doc.querySelector('#output');

    // add the loader element to the output div that displays to the user
    output.appendChild(loadingIndicator);

    // add script that loads whatever content you want to display
    const xhr = new XMLHttpRequest();
        // xhr code goes here
}
```

>**Important Note:** You must set the `loaded` boolean yourself once your AJAX request is complete.

```js
loadingIndicator.loaded = true;
```

Finally we add the event listener to the button that triggers the script.

```js
trigger.addEventListener('click', renderIndicator);
```

> **Important note:**
To view the full script we used in this demo you can [view it on GitHub.](https://gist.github.com/davodey/5407151e9e219eabdf7a2d6cc05425c0)


## API
All attributes in this API are optional for the loader to function properly.

| Attribute            | Type    | Default | Description                                                                                        |
| -------------------- | ------- | ------- | -------------------------------------------------------------------------------------------------- |
| `loadingStateLabel`  | String  | unset   | The word the user will see while the external content is still loading. Defaults to "loading...".  |
| `finishedStateLabel` | String  | unset   | The word the user will see while the external content has finished loading. Defaults to "loaded!". |
| `loaded`             | Bool | unset   | Whether or not the AJAX request has finished. Setting this will display the `finishedStateLabel`.  |

### Events
There are no event that get emitted.


## HTML Markup
Do you want to use your own JS to make the loader function?  No problem, use the markup below along with Gravity CSS to build a loader with your own JS.

> **Important note:**
You can [follow the UXF guidelines](https://uxframework.pearson.com/c/loading-indicator) to view the suggested functionality of the alert.

```html
<div class="gr-loading-indicator-wrapper" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="Loading Indicator" aria-label="Loading">
    <div class="loading-indicator">
        <div class="loading-spinner">
            <div class="container-one">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
            </div>

            <div class="container-two">
                <div class="circle1"></div>
                <div class="circle2"></div>
                <div class="circle3"></div>
                <div class="circle4"></div>
            </div>
        </div>
        <span class="label" id="label">Loading...</span>
    </div>
</div>
```
