---
id: timepicker
title: Time Picker
sidebar_label: Time Picker
---

> **This is an [older UXF component](https://uxframework.pearson.com/c/time-picker)**
not a part of gravity, but is being considered, as currently there is no timepicker component available.

> **This component has a dependancy**
Make sure you [follow the install instructions](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install#dependancies) and load the moment JS dependancies.

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.

### CDN
```html
<script src="https://unpkg.com/@pearson-ux/timepicker"></script>
```

### NPM
``` console
npm i @pearson-ux/timepicker --save
```

## Demo
### 12 Hour Timepicker
<div class="box">
    <pearson-timepicker label="Whats the time?" hours="12" increments="60"></pearson-timepicker>
</div>


```html
<pearson-timepicker label="Whats the time?" hours="12" increments="60"></pearson-timepicker>
```

## Structure
To add a timepicker, just add the markup in your app where you want it displayed.

## API
#### Required
All attributes in this API are required.

| Attribute    | Type    | Default | Description                                                                                                  |
| ------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `hours`      | String  | unset   | Accepts the value of 12 and 24 to toggle the different time formats

#### Optional
All attributes in this API are optional.

| Attribute    | Type    | Default | Description                                                                                                  |
| ------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `label`      | String  | unset   | The label text of the timepicker
| `increment`      | String  | 15   | The number of increments you want to set in minutes

### Events
There are no event that get emitted.

## HTML Markup
Do you want to use your own JS to make your own timepicker function?  No problem, use the markup below along with Gravity CSS to build a timepicker with your own JS.

> **Important note:**
You can [follow the UXF guidelines](https://uxframework.pearson.com/c/time-picker) to view the suggested functionality of the timepicker.


```html
<div class="gr-timepicker-container" >
    <label class="gr-label" for="timePickerInput">Select time (HH:MM AM&#x2F;PM)</label>
    <div class="timepicker">
        <input type="text" id="timePickerInput" class="gr-input" role="combobox" aria-haspopup="true" aria-expanded="false" aria-controls="itemList" aria-owns="itemList" aria-autocomplete="none">
        <span class="pe-icon-wrapper">
    <svg focusable="false" class="icon-18" aria-hidden="true">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#time-18"></use>
    </svg>
</span>
    </div>
    <p id="inputAriaId" class="pe-input--error_message">
        <svg focusable="false" class="icon-18" aria-hidden="false" aria-label="Error" title="Error" role="img">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-18"></use>
        </svg>
        Enter a valid time.
    </p>
    <div id="dropDown" class="pe-dropdown-container animated animateIn ">
        <ul id="itemList" class="itemList" role="listbox" tabindex="0" data-selected data-time-type="12 hour">
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="6:00 AM">
                <span class="pe-icon-wrapper" style="display:block"><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                6:00 AM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="7:00 AM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                7:00 AM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="8:00 AM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                8:00 AM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="9:00 AM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                9:00 AM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="10:00 AM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                10:00 AM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="11:00 AM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                11:00 AM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="12:00 PM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                12:00 PM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="1:00 PM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                1:00 PM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="2:00 PM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                2:00 PM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="3:00 PM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                3:00 PM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="4:00 PM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                4:00 PM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="5:00 PM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                5:00 PM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="6:00 PM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                6:00 PM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="7:00 PM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                7:00 PM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="8:00 PM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                8:00 PM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="9:00 PM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                9:00 PM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="10:00 PM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                10:00 PM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="11:00 PM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                11:00 PM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="12:00 AM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                12:00 AM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="1:00 AM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                1:00 AM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="2:00 AM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                2:00 AM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="3:00 AM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                3:00 AM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="4:00 AM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                4:00 AM
            </li>
            <li class="item" role="option" tabindex="-1" aria-selected="true" data-time="5:00 AM">
                <span class="pe-icon-wrapper" ><svg focusable="false" aria-hidden="true" class="icon-18"><use xlink:href="#correct-18"></use></svg></span>
                5:00 AM
            </li>
        </ul>
    </div>
</div>

```
