---
id: tabs
title: Tab Navigation
sidebar_label: Tab Navigation
---

> **This is an [older UXF component](https://uxframework.pearson.com/c/tab-navigation)**
not a part of gravity, but is being considered, as currently there is no tab navigation component available.

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://unpkg.com/@pearson-ux/tabs"></script>
```
### NPM
``` console
npm i @pearson-ux/tabs --save
```

## Demo

### Light Theme
<div class="box">
    <pearson-tabs >
        <ul class="tabs" slot="tabs">
            <li>Tab One</li>
            <li>Tab Two</li>
            <li>Tab Three</li>
        </ul>
        <div class="panels" slot="panels">
            <div data-panel>
                <p>Content one!</p>
            </div>
            <div data-panel>
                <p>Content two!</p>
            </div>
            <div data-panel>
                <p>Content three!</p>
            </div>
        </div>
    </pearson-tabs>
</div>

```html
<pearson-tabs >
    <ul class="tabs" slot="tabs">
        <li>Tab One</li>
        <li>Tab Two</li>
        <li>Tab Three</li>
    </ul>
    <div class="panels" slot="panels">
        <div data-panel>
            <p>Content one!</p>
        </div>
        <div data-panel>
            <p>Content two!</p>
        </div>
        <div data-panel>
            <p>Content three!</p>
        </div>
    </div>
</pearson-tabs>
```

### Dark Theme
<div class="box">
    <pearson-tabs class="theme--dark">
        <ul class="tabs" slot="tabs">
            <li>Tab One</li>
            <li>Tab Two</li>
            <li>Tab Three</li>
        </ul>
        <div class="panels" slot="panels">
            <div data-panel>
                <p>Content one!</p>
            </div>
            <div data-panel>
                <p>Content two!</p>
            </div>
            <div data-panel>
                <p>Content three!</p>
            </div>
        </div>
    </pearson-tabs>
</div>

```html
<pearson-tabs class="theme--dark">
```

## Structure
Follow these patterns to successfully build out a tab navigation menu.

First we'll add the ```pearson-tabs``` markup to your application.

```html
<pearson-tabs>

</pearson-tabs>
```

The first child of the ```pearson-tabs``` element needs to be a ```ul``` with a ```class="tabs"``` and a ```slot="tabs"```

```html
<pearson-tabs>
    <ul class="tabs" slot="tabs"></ul>
</pearson-tabs>
```
Next well add ```li``` items that will generate the menu tabs

```html
<pearson-tabs>
    <ul class="tabs" slot="tabs">
        <li>Tab One</li>
    </ul>
</pearson-tabs>
```
Add a second child as a ```div``` with a ```class="panels"``` and a ```slot="panels"```

```html
<pearson-tabs>
    <ul class="tabs" slot="tabs">
        <li>Tab One</li>
    </ul>
    <div class="panels" slot="panels">

    </div>
</pearson-tabs>
```

Finally add children to the div with the slot of panels.  Each content area should be a ```div``` with an attribute of ```data-panel``` and any content you want to display inside the ```li``` element.

```html
<pearson-tabs>
    <ul class="tabs" slot="tabs">
        <li>Tab One</li>
        <li>Tab Two</li>
    </ul>
    <div class="panels" slot="panels">
        <div data-panel>
            <p>Content for tab one </p>
        </div>
        <div data-panel>
            <p>Content for tab two </p>
        </div>
    </div>
</pearson-tabs>
```


> **Important note:**


## API

All attributes in this API are optional.

| Attribute    | Type    | Default | Description                                                                                                  |
| ------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `activeIdx` | Number | unset   | The index of the tab and panel you want to be open by default. If unset, defaults to 0.                    |
| `theme`      | String | unset   | The color palette used to render the tabs. Accepted values: 'dark'. If unset, will render the light theme. |

### Events
```<pearson-tabs>``` only emits one event: tabChange.

| Attribute    | Description                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| `tabChange` | Will fire when the tab navigation is triggered via mouse or keyboard |                                    |

```js

const tabs = document.querySelector('pearson-tabs');

tabs.addEventListener('tabChange', () => {
  // Do something when a tab is clicked
});

```

## HTML Markup
Do you want to use your own JS to make the tabs function?  No problem, use the markup below along with Gravity CSS to build an tab navigation menu with your own JS.

```html
<div class="gr-tabbed-navigation light">
    <ul class="tab-list" role="tablist" data-tab-selected="0">
            <li class="tab-item" role="presentation">
                <button id="tabOneBtn"
                        class="gr-btn tab-action"
                        role="tab"
                        tabindex="0"
                        aria-selected="true"
                        aria-controls="tabOne">
                    Tab One
                </button>
            </li>
            <li class="tab-item" role="presentation">
                <button id="tabTwoBtn"
                        class="gr-btn tab-action"
                        role="tab"
                        tabindex="0"
                        aria-selected="true"
                        aria-controls="tabTwo">
                    Tab Two
                </button>
            </li>
            <li class="tab-item" role="presentation">
                <button id="tabThreeBtn"
                        class="gr-btn tab-action"
                        role="tab"
                        tabindex="0"
                        aria-selected="true"
                        aria-controls="tabThree">
                    Tab Three
                </button>
            </li>
    </ul>
    <div id="tabSlider" class="tab-slider" style="width:54px;"></div>
</div>
```
