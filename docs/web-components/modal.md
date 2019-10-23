---
id: modal
title: Modal
sidebar_label: Modal
---

> **This is an [older UXF component](https://uxframework.pearson.com/c/modal)**
not a part of gravity, but is being considered, as currently there is no modal component available.

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://www.npmjs.com/package/@pearson-ux/modal"></script>
```
### NPM
``` console
npm i @pearson-ux/modal --save
```

## Demo

### Default
<main id="main"></main>
<div class="box">
    <button class="gr-btn" id="trigger-modal">Open Modal</button>
    <pearson-modal triggerid="trigger-modal" successbtntext="Success" cancelbtntext="Cancel" footer>
        <p> Hello World </p>
    </pearson-modal>
</div>



```html
<pearson-modal triggerid="trigger-modal" successbtntext="Success" cancelbtntext="Cancel" footer>
    <p> Hello World </p>
</pearson-modal>
```



## Structure
Follow these patterns to successfully build out a modal window.

First we'll create a button element that triggers the modal.

In this example well create a basic button with a unique Id to pass into the modal. Well use ```#trigger-modal``` in this example

```html
<button class="gr-btn" id="trigger-modal">Open Modal</button>
```

Next add the ```<pearson-modal>``` tag after the closing ```<main id="main"></main>``` element.

Then add an attribute of ```triggerid``` to the modal with the value of the ```id``` of the ```<button>```  This tells the modal which button to listen to.

> **Important note**
For accessibility reasons, you need to place the modal after the main tag.

```html
<body>
    <main id="main">
        <button class="gr-btn" id="trigger-modal">Open Modal</button>
    </main>

    // add the modal after the closing main tag
    <pearson-modal triggerid="trigger-modal> </pearson-modal>
</body>
```

Finally, add any custom markup you want displayed in the modal.  This can include any HTML5 element.

```html
<body>
    <main id="main">
        <button class="gr-btn" id="trigger-modal">Open Modal</button>
    </main>

    // add the modal after the closing main tag
    <pearson-modal>
        <p>Hello World</p>
    </pearson-modal>
</body>
```


## API

### Required
All attributes in this API are required.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `triggerid`      | `String`  | Required        | The unique ID of the button that opens the modal. |                 |

### Optional
All attributes in this API are optional.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `titletext`      | `String`  | 'Modal Title'`  | The title of the modal.                           |
| `footer`         | `Boolean` | `false`         | If set, shows the `Success` and `Cancel` buttons. |
| `successbtntext` | `String`  | `'Save'`        | The text to display in the `Success` button.      |
| `cancelbtntext`  | `String`  | `'Cancel'`      | The text to display in the `Cancel` button.       |
| `hidecancel`     | `Boolean` | `false`         | Hides the Cancel button completely                |
| `hidesuccess`    | `Boolean` | `false`         | Hides the Success/CTA button completely           |
| `elements`       | `Boolean` | `false`         | Sets the styling to the old version of elements   |



### Events
The ```pearson-modal``` component emits two different events:

| Event     | Description                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------- |
| `success` | Will fire when the success button in the modal is pressed.         |
| `cancel`  | Will fire when any button other than the success buton is pressed, or when the user closes the modal with the `escape` key. |


```js
const modal = document.querySelector('pearson-modal');

modal.addEventListener('success', () => {
  // Do something
});

modal.addEventListener('cancel', () => {
  // Do something
});
```

## HTML Markup
Do you want to use your own JS to make the dropdown function?  No problem, use the markup below along with Gravity CSS to build a dropdown with your own JS.

> **Important note:**
You can [follow the UXF guidelines](https://uxframework.pearson.com/c/modal) to view the suggested functionality of the modal window.

```html
<div id="modalContainer" class="gr-modal-container">
    <div id="modalOverlay"></div>
    <div class="modal" role="dialog" aria-labelledby="dialog-heading" aria-describedby="dialog-description"
         aria-modal="true">
        <h2 id="dialog-heading" class="gr-h2">Modal Dialog Title</h2>
        <div class="modal-body" id="dialog-description">
                <p>Pass in JSX elements as children to the modal, You must pass in the text object with valid strings</p>
        </div>
        <div class="actions">
            <button id="lastButton" class="gr-btn primary">Success Button</button>
            <button id="firstButton" class="gr-btn">Cancel Button</button>
        </div>
    </div>
</div>
```
