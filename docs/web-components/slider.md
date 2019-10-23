---
id: slider
title: Range Slider
sidebar_label: Range Slider
---


> **This is a custom component**
not a part of gravity, but is being considered, as currently there is no range slider component available.


## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://www.npmjs.com/package/@pearson-ux/range-slider"></script>
```
### NPM
``` console
npm i @pearson-ux/range-slider --save
```

## Demo

### Standard
<div class="box">
    <pearson-range-slider min="0" max="5" step="any" toptext="Top Text"></pearson-range-slider>
</div>



```html
<pearson-range-slider min="0" max="5" step="any" toptext="Top Text"></pearson-range-slider>
```

### With input
<div class="box">
    <pearson-range-slider min="0" max="5" step="any" toptext="Top Text" input></pearson-range-slider>
</div>



```html
<pearson-range-slider min="0" max="5" step="any" toptext="Top Text"></pearson-range-slider>
```



## Structure
To add a range slider, just add the markup in your app where you want it displayed.


## API

### Required
All attributes in this API are required.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `min` | Stringl | unset   | Set the minimum number of the slider.                    |
| `max`      | String | unset   | Set the maximum number of the slider|
| `step`      | String | unset   | The stepping interval |

### Optional
All attributes in this API are optional.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `toptext`      | String | unset   | Text that is centered above the slider |
| `righttext`      | String | unset   | Text that is to the right of the slider |
| `input`      | Bool | False   | Setting to true, adds an optional input box to control the slider |
| `bottomtext`      | String | unset   | Text that is below the input|



### Events
The ```pearson-range-slider``` component emits one event:

| Event     | Description                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------- |
| `change` | Will fire when the range-slider drags across the bar or when an input value is entered.


```js
const slider = document.querySelector('pearson-range-slider');

slider.addEventListener('change', () => {
  // Do something when the value changes
});

```

## HTML Markup
Do you want to use your own JS to make the range slider function?  No problem, use the markup below along with Gravity CSS to build a range slider with your own JS.

### Standard Markup

```html
<div class="range-container">
    <div class="slider">
        <label id=labelOne class="gr-label" for="sliderId">Range Slider</label>
        <input aria-describedby="labelOne labelTwo" type="range" name="slider" id="sliderId" min="0" max="15" step=".25"/>
        <div class="range-color" style="width:0;"></div>
        <div class="tick-marks"></div>
    </div>
    <span id=labelTwo class="gr-meta">lb</span>
</div>
```

### With Input Markup

```html
<div class="range-input-container">
    <div class="groups">
        <div class="input-group">
            <div class="gr-form-element">
                <label id="rangeInputOne" class="gr-label" for="inputId">Range Slider</label>
                <input aria-describedby="rangeInputOne rangeInputTwo rangeInputThree" class="gr-input" id="inputId" type="text" value=""  />
            </div>
            <span id="rangeInputTwo" class="gr-meta">lb</span>
        </div>
        <span id="rangeInputThree" class="gr-meta">max 2lbs</span>
    </div>
    <div class="range-container">
        <div class="slider">
            <label id=labelThree class="gr-label" for="sliderIdTwo">Range Slider</label>
            <input aria-describedby="labelFour" type="range" name="slider" id="sliderIdTwo" min="0" max="15" step=".25"/>
            <div class="range-color" style="width:0;"></div>
            <div class="tick-marks"></div>
        </div>
        <span id=labelFour class="gr-meta">lb</span>
    </div>
</div>
```

