---
id: alerts
title: Alert
sidebar_label: Alert
---
> **This is an [older UXF component](https://uxframework.pearson.com/c/alerts)**
not a part of gravity, but is being considered, as currently there is no alert component available.

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://unpkg.com/@pearson-ux/alert"></script>
```
### NPM
``` console
npm i @pearson-ux/alert --save
```

## Demo
> **Important note**
Alert markup is not hard coded, instead its built on the fly when the trigger button is clicked.  To make this happen, you will need to build your own script to trigger these alerts.  You can see how we put everything together below, in our structure section.

### Error Alert
<div class="box">
    <button class="gr-btn" id="trigger-0" data-level="global" data-trigger="alert" data-type="error" data-animated>
        Trigger global error alert
    </button>
</div>

```html
<pearson-alert level="global" returnNode="trigger-0" type="error" animated>
  <h2 id="alertTitle" class="alert-title">
    <strong>Heads up!</strong>
  </h2>
  <p id="alertText" class="alert-text"> You fired an alert
    <a href="#">Do Something!</a>
  </p>
</pearson-alert>
```

### Important Alert

<div class="box">
    <button class="gr-btn" id="trigger-0" data-trigger="alert" data-type="success" data-level="global" data-animated>
        Trigger global success alert
    </button>
</div>

```html
<pearson-alert level="global" returnNode="foo" type="success" animated>
```

### Inline Alert
<div class="box">
	<button class="gr-btn" id="trigger-0" data-trigger="alert" data-type="success" data-level="inline" data-animated>
		Trigger inline success alert
	</button>
</div>

```html
<pearson-alert level="inline" returnNode="foo" type="success" animated>
```

## Structure
The recommended way to fire off an alert is to generate the markup with JS, and not place a hardcoded ```<pearson-alert>``` tag in the document.

First we'll create a button element that triggers the alert script.

In this example well use the following attributes on the button to pass information to the alert script:
1. ```id``` - This should be passed into the ```returnNode``` attribute on the alert markup.
2. ```data-type``` - This should be passed into the ```type``` attribute on the alert markup.
3. ```data-level``` - This should be passed into the ```level``` attribute on the alert markup.
4. ```data-animated``` - (optional) If added, this should be passed as a bool attribute of ```animated``` to the alert markup.

```html
<button class="gr-btn" id="trigger-0" data-type="success" data-level="global" data-animated>
    Trigger global success alert
</button>
```

Next we will build out the script that generates the alert.

We start the script by querying the button that triggers the alert.

```js
const forEach = Array.prototype.forEach,
   triggers = doc.querySelectorAll('button[data-trigger="alert"]');
```

Next, we create a couple of functions that build the alert, and render it when the trigger is clicked.

#### Generate the Alert
```js
function generateAlert(opts) {
  const alert = doc.createElement('pearson-alert');
  for (let attrName in opts) {
    alert.setAttribute(attrName, opts[attrName])
  }
  return alert;
}
```

#### Trigger the Alert
```js
function triggerAlert(e) {
    const returnNode = '#' + e.target.id;
    const type = e.target.dataset.type;
    const level = e.target.dataset.level;
    const animated = e.target.dataset.animated !== undefined;
    const focusOnOpen = e.target.dataset.focusOnOpen !== undefined;

    const opts = {
      returnNode: returnNode,
      type: type,
      level: level
    };

    if (animated) {
      opts.animated = true;
    }

    if (focusOnOpen) {
      opts.focusOnOpen = true;
    }

    const alert = generateAlert(opts);

    alert.innerHTML = (
      '   <h2 id="alertTitle" class="pe-label alert-title">  ' +
      '     <strong>Hello, This is an alert!</strong>  ' +
      '   </h2>  ' +
      '   <p id="alertText" class="pe-paragraph alert-text">  Ronsectetuer adipiscing elit. Aene an commodo ligula eget dolor enean massa.' +
      '     <a href="#">Do Something</a>  ' +
      '  </p>  '
    );

    if (level === 'inline') {
      e.target.parentNode.insertBefore(alert, e.target.nextSibling)
    } else {
      doc.body.appendChild(alert)
    }
}
```
Finally, well add an event listener to the trigger to fire off the alert when the trigger is clicked.

#### Attach a click handler to the trigger that fires off the alert

```js
forEach.call(triggers, function (trigger) {
  trigger.addEventListener('click', triggerAlert);
})
```

Last but not least, add the script to your document.

> **Important note:**
To view the full script we used in these demos you can [view it on GitHub.](https://gist.github.com/davodey/ee53293f6e9f445da0fc8be8d0a89913)


## API
Except for `animated`, all attributes in this API are required for the alert to function properly. An alert whose level is `global` will appear in the top-left of the current page; an alert whose level is `inline` will appear in flow.

| Attribute    | Type    | Default | Description                                                                                                  |
| ------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `level`      | String  | unset   | The position of the alert. Permitted values: `'global'` or `'inline'`                                        |
| `returnNode` | String  | unset   | Unique ID of the element that will receive focus after the alert is dismissed.                               |
| `type`       | String  | unset   | Denotes the type of the alert. Permitted values: `'success'`, '`'error'`, `'confirmation'`, or `'important'` |
| `animated`   | Boolean | `false` | Denotes whether the alert will appear and disappear with animations.

### Events
```<pearson-alert>``` only emits one event: dismiss. Once an alert is dismissed, it is removed from the DOM.
| Attribute    | Description                                                                                                  |
| ------------ | ------------------------------------------------------------------------------------------------------------ |
| `dismiss`      | Will fire when the user interacts with the close button.                                        |

```js
  window.addEventListener('dismiss', function (e) {
    // Do something
  });
```

## HTML Markup
Do you want to use your own JS to make the alert function?  No problem, use the markup below along with Gravity CSS to build an alert with your own JS.

> **Important note:**
You can [follow the UXF guidelines](https://uxframework.pearson.com/c/alerts) to view the suggested functionality of the alert.

```html
<div class="gr-alert" role="dialog" aria-labelledby="alertTitle" aria-describedby="alertText">
    <div class="info">
        <div class="close-title">
            <button class="gr-btn icon-btn-24">
                <svg focusable="false" class="icon-24" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close-24"></use>
                </svg>
            </button>
        </div>
        <div class="content-container" role="status" aria-live="polite">
            <div class="alert-content" data-alert-content>
                <h2 id="alertTitle" class="alert-title">
                    <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong>
                </h2>
                <p id="alertText" class="alert-text">Mauris lorem libero, dignissim ac condimentum viverra, egestas ut leo. Integer sit amet dui enim.</p>
            </div>
        </div>
    </div>
</div>
```
