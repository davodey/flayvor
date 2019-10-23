---
id: fileupload
title: File Uploader
sidebar_label: File Uploader
---

> **This is a custom component**
not a part of gravity, but is being considered, as currently there is no file upload component available.

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://unpkg.com/@pearson-ux/file-uploader"></script>
```
### NPM
``` console
npm i @pearson-ux/file-uploader --save
```

## Demo
> **Important note**
Currently

### Standard
<main id="main">
    <div class="box">
        <button id="trigger-upload" class="gr-btn">Attach files</button>
    </div>
</main>

<div id="uploadBox">
    <pearson-uploader
      apiUrl="https://pearson-file-upload.s3.amazonaws.com/"
      maxByteFileSize="10000000"
      maxNumberOfFiles="5"
      triggerId="trigger-upload"
    >
    </pearson-uploader>
</div>

```html
<pearson-uploader
  apiUrl="https://pearson-upload-api-url/"
  maxByteFileSize="10000000"
  maxNumberOfFiles="5"
  triggerId="trigger-modal"
>
</pearson-uploader>
```

### Toggle
To make the buttons toggle on click, add an attribute of ```toggle``` to the ```<pearson-accordion>``` element.
<div class="box">
    <pearson-accordion toggle>
        <ul slot="buttons">
            <li>Button One</li>
            <li>Button Two</li>
            <li>Button Three</li>
            <li>Button Four</li>
        </ul>
        <div class="panels" slot="panels">
            <div class="panel">Section One</div>
            <div class="panel">Section Two</div>
            <div class="panel">Section Three</div>
            <div class="panel">Section Four</div>
        </div>
    </pearson-accordion>
</div>

```html
<pearson-accordion toggle>
```

## Structure
Follow these patterns to successfully build out the accordion.
The first child must be a  `ul` tag with the attribute and value `slot="buttons"`. The second child is a `div` with the following attributes `class="panels"  slot="panels"`

```html
<pearson-accordion>
    <ul slot="buttons"></ul>
    <div class="panels" slot="panels"></div>
<pearson-accordion>
```
The children of the `ul` are standard `li` tags.  Each tag will generate the button that opens up the panel that corresponds to that button.  For example.  The first `li`  button,  will open up the first panel `div` with content of section one.  Button two opens up Section Two, etc....

```html
<pearson-accordion toggle>
    <ul slot="buttons">
        <li>Button One</li>
    </ul>
    <div class="panels" slot="panels">
        <div class="panel">Section One</div>
    </div>
</pearson-accordion>
```
While you are using the `li` tag to generate the buttons, the web component will regenerate the markup so it's accessible and semantic.

> **Important note:**
You can add any additional markup you want in between `<div class="panel">TEXT OR MARKUP GOES HERE</div>  `

## API
All attributes in this API are optional.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `toggle` | Bool | unset   | Allows multiple panels to be displayed at the same time.                    |

### Events
There are no event that get emitted.

## HTML Markup
Do you want to use your own JS to make the accordion function?  No problem, use the markup below along with Gravity CSS to build an accordion with your own JS.

```html
<div id="accordionGroup" class="accordion">
    <h3>
        <button aria-expanded="false" class="accordion-trigger" aria-controls="sect1" id="accordion1id">
            <span class="accordion-title">
                <span>Section 1</span>
                <svg focusable="false" class="icon-18 expand" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-18"></use>
                </svg>
                <svg focusable="false" class="icon-18 collapse" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#collapse-18"></use>
                </svg>
            </span>
        </button>
    </h3>
    <div id="sect1" role="region" aria-labelledby="accordion1id" class="accordion-panel animateIn">
        <div>
            <!-- Variable content within section, may include any type of markup or interactive widgets. -->
            <p>section 1 content</p>
        </div>
    </div>
    <h3>
        <button aria-expanded="false" class="accordion-trigger" aria-controls="sect2" id="accordion1id2">
            <span class="accordion-title">
                <span>Section 2</span>
                <svg focusable="false" class="icon-18 expand" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-18"></use>
                </svg>
                <svg focusable="false" class="icon-18 collapse" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#collapse-18"></use>
                </svg>
            </span>
        </button>
    </h3>
    <div id="sect2" role="region" aria-labelledby="accordion1id2" class="accordion-panel animateIn">
        <div>
            <!-- Variable content within section, may include any type of markup or interactive widgets. -->
            <p>section 2 content</p>
        </div>
    </div>
    <h3>
        <button aria-expanded="false" class="accordion-trigger" aria-controls="sect3" id="accordion1id3">
            <span class="accordion-title">
                <span>Section 3</span>
                <svg focusable="false" class="icon-18 expand" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-18"></use>
                </svg>
                <svg focusable="false" class="icon-18 collapse" aria-hidden="true">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#collapse-18"></use>
                </svg>
            </span>
        </button>
    </h3>
    <div id="sect3" role="region" aria-labelledby="accordion1id3" class="accordion-panel animateIn">
        <div>
            <!-- Variable content within section, may include any type of markup or interactive widgets. -->
            <p>section 3 content</p>
        </div>
    </div>
</div>
```
