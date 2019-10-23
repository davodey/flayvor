---
id: progress
title: Progress Bar
sidebar_label: Progress Bar
---



> **This is an [older UXF component](https://uxframework.pearson.com/c/progress-bar)**
not a part of gravity, but is being considered, as currently there is no progress bar component available.

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.

### CDN
```html
<script src="https://www.npmjs.com/package/@pearson-ux/progress-bar"></script>
```

### NPM
``` console
npm i @pearson-ux/progress-bar --save
```

## Demo

### Standard
<div class="box">
   <pearson-progress-bar  type="static" progress="50"></pearson-progress-bar>
</div>



```html
<pearson-progress-bar  type="static" progress="50"></pearson-progress-bar>
```

### Loading
<div class="box">
   <pearson-progress-bar  type="loading" progress="50"></pearson-progress-bar>
</div>



```html
<pearson-progress-bar  type="loading" progress="50"></pearson-progress-bar>
```

## Structure
To add a progress bar, just add the markup in your app where you want it displayed.


## API

All attributes in this API are optional.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `progress`  | Number | `0`   | The current position, as a number, that the bar has progressed to. Range: Between 0 and 100. |
| `alignment` | String | unset   | The position of the progressbar's label. Possible values: `'left'`, `'right'`, `'center'`.   |
| `type`      | String | unset   | The type of the bar. Possible values: `'static'`; `'loading'`.                               |
| `label`     | String | unset   | The description of what the bar is loading. Varies based on the needs of your app. Can only be set on static progressbars.           |

### Events
There are no event that get emitted.

## HTML Markup
Do you want to use your own JS to make a custom progress bar?  No problem, use the markup below along with Gravity CSS to customize your progress bar.

> **Important note:**
You can [follow the UXF guidelines](https://uxframework.pearson.com/c/progress-bar) to view the suggested functionality of the progress bar.

```html
<div class="gr-progress-bar standard">
    <p class="fullbar" id="label">20%</p>
    <div role="progressbar" aria-valuenow="20" aria-valuemax="100" aria-valuemin="0" style="width:20%"></div>
</div>
```
