---
id: dropdown
title: Dropdowns
sidebar_label: Dropdowns
---

> **This is an [older UXF component](https://uxframework.pearson.com/c/dropdown)**
not a part of gravity, but is being considered, as currently there is no dropdown component available.

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://www.npmjs.com/package/@pearson-ux/dropdown"></script>
```
### NPM
``` console
npm i @pearson-ux/dropdown --save
```

## Demo

### Default
<div class="box">
   <pearson-dropdown buttonText="Please Select" type="default">
      <li id="optionFour">first option</li>
      <li id="optionFive" class="divider">second option</li>
      <li id="optionSix">third option</li>
    </pearson-dropdown>
</div>

```html
<pearson-dropdown buttonText="Please Select" type="default">
    <li id="optionFour">first option</li>
    <li id="optionFive" class="divider">second option</li>
    <li id="optionSix">third option</li>
</pearson-dropdown>
```
### Primary
<div class="box">
   <pearson-dropdown buttonText="Please Select" type="primary">
      <li id="optionFour">first option</li>
      <li id="optionFive" class="divider">second option</li>
      <li id="optionSix">third option</li>
    </pearson-dropdown>
</div>

```html
<pearson-dropdown buttonText="Please Select" type="primary">
```

### Attention
<div class="box">
   <pearson-dropdown buttonText="Please Select" type="attention">
      <li id="optionFour">first option</li>
      <li id="optionFive" class="divider">second option</li>
      <li id="optionSix">third option</li>
    </pearson-dropdown>
</div>

```html
<pearson-dropdown buttonText="Please Select" type="attention">
```

### Multi Select
<div class="box">
   <pearson-dropdown buttonText="Please Select Multiple" type="default" multiSelect >
      <li id="optionFour">first option</li>
      <li id="optionFive" class="divider">second option</li>
      <li id="optionSix">third option</li>
    </pearson-dropdown>
</div>

```html
<pearson-dropdown buttonText="Please Select Multiple" type="default" multiSelect>
```

### Text Only
<div class="box">
   <pearson-dropdown buttonText="Please Select" type="text" textOnly>
      <li id="optionFour">first option</li>
      <li id="optionFive" class="divider">second option</li>
      <li id="optionSix">third option</li>
    </pearson-dropdown>
</div>

```html
<pearson-dropdown buttonText="Please Select" type="text textOnly>
```

## Structure
Follow these patterns to successfully build out a dropdown menu.  The children in the dropdown must be ```li``` tags.  Each ```li``` tag must also include a ```id``` attribute with a unique value.


> **Important note:**
You can add any add as many ```li``` elements as you would like.

> **Important note:**
To add a divider bar to split the items into sections add ```class="divider"``` to the ```li``` element.

```html
<pearson-dropdown buttonText="Please Select" type="default">
    <li id="uniqueId"> Text Here </li>
</pearson-dropdown>
```



## API

### Required
All attributes in this API are required.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `buttonText` | String | unset   | Displays the text of the dropdown button.                    |
| `type` | String | unset   | Displays the type of button style you would like the dropdown menu to display: ```primary```, ```default```, ```attention```, ```text```                   |

### Optional
All attributes in this API are optional.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `multiSelect` | Bool | unset   | Toggles multi select functionality                   |
| `textOnly` | Bool | unset   | Removes the button styling so the dropdown displays as text                  |



### Events
```<pearson-dropdown>``` only emits one event: change.

| Event     | Description                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------- |
| `change` | Will fire when the dropdown menu closes. If multiSelect is true, an array of the selected items will be passed back to the event. If multiSelect is false, the selected item will be passed back as a string |

```js
const dropdown = document.querySelector('pearson-dropdown');

dropdown.addEventListener('change', event => {
   // do something when the dropdown menu item is selected.
   // to view the data associated with event use, event.detail
})
```
## HTML Markup
Do you want to use your own JS to make the dropdown function?  No problem, use the markup below along with Gravity CSS to build a dropdown with your own JS.

> **Important note:**
You can [follow the UXF guidelines](https://uxframework.pearson.com/c/dropdown) to view the suggested functionality of the dropdown menu.

```html
<div class="gr-dropdown-container">
   <button data-action="trigger" aria-haspopup="true" aria-expanded="true" class="gr-btn">
      Dropdown Markup
      <svg focusable="false" class="icon-18" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-18"></use>
      </svg>
   </button>
   <div class="dropdown-menu" data-action="menu" style="display:none" multiselect>
      <div class="mobile-group">
         <span>Dropdown Markup</span>
         <button  id="mobileClose" class="gr-btn icon-btn-24 no-border" aria-label="close dropdown">
            <svg focusable="false" class="icon-24" aria-hidden="true">
               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close-24"></use>
            </svg>
         </button>
      </div>
      <ul role="menu" class="menu ">
         <li role="none" >
            <button role="menuitemradio" aria-checked="true">
               <svg id="correct-18" viewBox="0 0 18 18" style="width:18px; height:18px;">
                  <path d="M7.63703177,13.7249483 C7.2712246,14.0916839 6.67813399,14.0916839 6.31232681,13.7249483 C6.31087256,13.7235264 5.29821541,12.7082993 3.27435538,10.679267 C2.90854821,10.3125314 2.90854821,9.71793566 3.27435538,9.35120012 C3.64016255,8.98446458 4.23325316,8.98446458 4.59906034,9.35120012 L6.9290522,11.6871052 L13.3583348,4.3207061 C13.6989986,3.93038793 14.2907756,3.89083601 14.6801057,4.2323644 C15.0694358,4.57389279 15.1088876,5.16717165 14.7682238,5.55748981 L7.68563681,13.6724173 C7.67022431,13.6903888 7.65402263,13.7079144 7.63703177,13.7249483 Z"></path>
               </svg>
               <span class="option-text">Option One</span>
            </button>
         </li>
         <li role="none" >
            <button role="menuitemradio" aria-checked="false">
               <svg id="correct-18" viewBox="0 0 18 18" style="width:18px; height:18px;">
                  <path d="M7.63703177,13.7249483 C7.2712246,14.0916839 6.67813399,14.0916839 6.31232681,13.7249483 C6.31087256,13.7235264 5.29821541,12.7082993 3.27435538,10.679267 C2.90854821,10.3125314 2.90854821,9.71793566 3.27435538,9.35120012 C3.64016255,8.98446458 4.23325316,8.98446458 4.59906034,9.35120012 L6.9290522,11.6871052 L13.3583348,4.3207061 C13.6989986,3.93038793 14.2907756,3.89083601 14.6801057,4.2323644 C15.0694358,4.57389279 15.1088876,5.16717165 14.7682238,5.55748981 L7.68563681,13.6724173 C7.67022431,13.6903888 7.65402263,13.7079144 7.63703177,13.7249483 Z"></path>
               </svg>
               <span class="option-text">Option Two</span>
            </button>
         </li>
         <li role="none" >
            <button role="menuitemradio" aria-checked="false">
               <svg id="correct-18" viewBox="0 0 18 18" style="width:18px; height:18px;">
                  <path d="M7.63703177,13.7249483 C7.2712246,14.0916839 6.67813399,14.0916839 6.31232681,13.7249483 C6.31087256,13.7235264 5.29821541,12.7082993 3.27435538,10.679267 C2.90854821,10.3125314 2.90854821,9.71793566 3.27435538,9.35120012 C3.64016255,8.98446458 4.23325316,8.98446458 4.59906034,9.35120012 L6.9290522,11.6871052 L13.3583348,4.3207061 C13.6989986,3.93038793 14.2907756,3.89083601 14.6801057,4.2323644 C15.0694358,4.57389279 15.1088876,5.16717165 14.7682238,5.55748981 L7.68563681,13.6724173 C7.67022431,13.6903888 7.65402263,13.7079144 7.63703177,13.7249483 Z"></path>
               </svg>
               <span class="option-text">Option Three</span>
            </button>
         </li>
         <li role="none" >
            <button role="menuitemradio" aria-checked="false">
               <svg id="correct-18" viewBox="0 0 18 18" style="width:18px; height:18px;">
                  <path d="M7.63703177,13.7249483 C7.2712246,14.0916839 6.67813399,14.0916839 6.31232681,13.7249483 C6.31087256,13.7235264 5.29821541,12.7082993 3.27435538,10.679267 C2.90854821,10.3125314 2.90854821,9.71793566 3.27435538,9.35120012 C3.64016255,8.98446458 4.23325316,8.98446458 4.59906034,9.35120012 L6.9290522,11.6871052 L13.3583348,4.3207061 C13.6989986,3.93038793 14.2907756,3.89083601 14.6801057,4.2323644 C15.0694358,4.57389279 15.1088876,5.16717165 14.7682238,5.55748981 L7.68563681,13.6724173 C7.67022431,13.6903888 7.65402263,13.7079144 7.63703177,13.7249483 Z"></path>
               </svg>
               <span class="option-text">Option Four</span>
            </button>
         </li>
         <li role="none" >
            <button role="menuitemradio" aria-checked="false">
               <svg id="correct-18" viewBox="0 0 18 18" style="width:18px; height:18px;">
                  <path d="M7.63703177,13.7249483 C7.2712246,14.0916839 6.67813399,14.0916839 6.31232681,13.7249483 C6.31087256,13.7235264 5.29821541,12.7082993 3.27435538,10.679267 C2.90854821,10.3125314 2.90854821,9.71793566 3.27435538,9.35120012 C3.64016255,8.98446458 4.23325316,8.98446458 4.59906034,9.35120012 L6.9290522,11.6871052 L13.3583348,4.3207061 C13.6989986,3.93038793 14.2907756,3.89083601 14.6801057,4.2323644 C15.0694358,4.57389279 15.1088876,5.16717165 14.7682238,5.55748981 L7.68563681,13.6724173 C7.67022431,13.6903888 7.65402263,13.7079144 7.63703177,13.7249483 Z"></path>
               </svg>
               <span class="option-text">Option Five</span>
            </button>
         </li>
         <li role="none" >
            <button role="menuitemradio" aria-checked="false">
               <svg id="correct-18" viewBox="0 0 18 18" style="width:18px; height:18px;">
                  <path d="M7.63703177,13.7249483 C7.2712246,14.0916839 6.67813399,14.0916839 6.31232681,13.7249483 C6.31087256,13.7235264 5.29821541,12.7082993 3.27435538,10.679267 C2.90854821,10.3125314 2.90854821,9.71793566 3.27435538,9.35120012 C3.64016255,8.98446458 4.23325316,8.98446458 4.59906034,9.35120012 L6.9290522,11.6871052 L13.3583348,4.3207061 C13.6989986,3.93038793 14.2907756,3.89083601 14.6801057,4.2323644 C15.0694358,4.57389279 15.1088876,5.16717165 14.7682238,5.55748981 L7.68563681,13.6724173 C7.67022431,13.6903888 7.65402263,13.7079144 7.63703177,13.7249483 Z"></path>
               </svg>
               <span class="option-text">Option Six</span>
            </button>
         </li>
      </ul>
   </div>
</div>
```
