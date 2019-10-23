---
id: toggle
title: Toggle
sidebar_label: Toggle
---

> **This is a [Gravity component](https://ux.pearson.com/gravity/c/inputs)**


## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://www.npmjs.com/package/@pearson-ux/toggle"></script>
```
### NPM
``` console
npm i @pearson-ux/toggle --save
```

## Demo

<div class="box">
    <label class="gr-label" for="pearsonToggle">Label for toggle </label>
    <pearson-toggle id="pearsonToggle"> </pearson-toggle>
</div>



```html
<label class="gr-label" for="pearsonToggle">Label for toggle </label>
<pearson-toggle id="pearsonToggle"> </pearson-toggle>
```



## Structure
To add a toggle, just add the markup in your app where you want it displayed.
> **Important Note**
For accessibility, You must add a label element with a ```for="toggleId"``` replacing ```toggleId``` with the ```id``` of the toggle.

## API

### Required
All attributes in this API are required.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `id`         | `String`  | Required | The unique ID of the toggle                                   |

### Optional
All attributes in this API are optional.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `on`         | `boolean` | `false`  | Determines whether the toggle is on                           |
| `disabled`   | `boolean` | `false`  | Determines whether the toggle is disabled                     |
| `name`       | `String`  | unset    | The name of the toggle                                        |
| `value`      | `String`  | unset    | The value of the toggle                                       |



### Events
The ```pearson-toggle``` component emits one event:

| Event     | Description                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------- |
| `change` | Will fire when the toggle is triggered via mouse or keyboard |

```js
const toggle = document.querySelector('pearson-toggle);

toggle.addEventListener('change', () => {
  // Do something when the value changes
});

```

## HTML Markup
Do you want to use your own JS to make the toggle function?  No problem, use the markup below along with Gravity CSS to build a toggle with your own JS.

```html
<label for="toggleId" id="labelId" class="gr-label">This is a label</label>
<button
        id="toggleId"
        class="gr-toggle"
        name="toggle-0"
        role="switch"
        aria-labelledby="labelId"
        aria-checked="true"
>
    <svg focusable="false" aria-hidden="true">
        <use xlink:href="#check-sm-18"></use>
    </svg>
    <svg focusable="false" aria-hidden="true">
        <use xlink:href="#remove-sm-18"></use>
    </svg>
</button>
```
