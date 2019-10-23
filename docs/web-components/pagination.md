---
id: pagination
title: Pagination
sidebar_label: Pagination
---


> **This is an [older UXF component](https://uxframework.pearson.com/c/pagination)**
not a part of gravity, but is being considered, as currently there is no pagination component available.

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://www.npmjs.com/package/@pearson-ux/pagination"></script>
```
### NPM
``` console
npm i @pearson-ux/pagination --save
```

## Demo

### Standard
<div class="box">
   <pearson-pagination firstpage="1" lastpage="10" ellipsisat="5"></pearson-pagination>
</div>



```html
<pearson-pagination firstpage="1" lastpage="10" ellipsisat="5"></pearson-pagination>
```

### Compact
<div class="box">
    <pearson-pagination firstpage="1" lastpage="10" compact> </pearson-pagination>
</div>

```html
<pearson-pagination compact firstpage="1" lastpage="10"> </pearson-pagination>
```



## Structure
To add pagination, just add the markup in your app where you want it displayed.


## API

### Required
All attributes in this API are required.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `firstpage`      | String  | unset   | The first page you want pagination to begin at                                        |
| `lastpage` | String  | unset   | The last page you want pagination to end with                              |

### Optional
All attributes in this API are optional.

| Attribute   | Type   | Default | Description                                                                                                |
| ----------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------- |
| `ellipsisat`       | String  | unset   | Denotes the placement of the ellipsis (does not apply for compact mode)|
| `compact` | Bool  | unset   | Sets the pagination to compact mode



### Events
The ```pearson-pagination``` component emits three different events:

| Event     | Description                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------- |
| `nextPage` | Will fire when the user interacts with the next page button |
| `prevPage` | Will fire when the user interacts with the previous page button |
| `newPage` | Will fire when the user interacts with single page number|


```js
const pagination = document.querySelector('pearson-pagination');

pagination.addEventListener('nextPage', () => {
  // Do something when the next page button is clicked
});

pagination.addEventListener('prevPage', () => {
  // Do something when the prev page button is clicked
});

pagination.addEventListener('newPage', () => {
  // Do something when a single page number is clicked
});
```

## HTML Markup
Do you want to use your own JS to make the pagination function?  No problem, use the markup below along with Gravity CSS to build pagination with your own JS.

> **Important note:**
You can [follow the UXF guidelines](https://uxframework.pearson.com/c/pagination) to view the suggested functionality of the modal window.

### Standard Markup

```html
<nav data-id="standardPagination" aria-label="pagination" class="gr-pagination" data-type="standard" data-pages-total="10" data-max-buttons="5" data-active-page="1" data-label="page" data-label-plural="pages">
    <button class="gr-btn icon-btn-18" aria-label="Previous page">
        <span>
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#previous-18"></use>
            </svg>
        </span>
    </button>
    <a href="#" aria-current="page"><span>1</span></a>
        <a href="#"><span>2</span></a>
        <a href="#"><span>3</span></a>
        <a href="#"><span>4</span></a>
        <a href="#"><span>5</span></a>
    <a href="#" class="ellipsis" disabled="">...</a>
    <a href="#"><span>100</span></a>
    <button class="gr-btn icon-btn-18" aria-label="Next page">
        <span>
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-18"></use>
            </svg>
        </span>
    </button>
</nav>
```

### Compact Markup

```html
<nav  data-id="compactPagination" aria-label="pagination" class="gr-pagination" data-pages-total="10" data-type="compact" data-active-page="1" data-label="page" data-label-plural="pages">
    <button class="gr-btn icon-btn-18" aria-label="Previous page">
        <span>
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#previous-18"></use>
            </svg>
        </span>
    </button>
    <span class="compact-text">Page <span class="current-page">1-5</span> of <span class="total-pages">20</span>
</span>
    <button class="gr-btn icon-btn-18" aria-label="Next page">
        <span>
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-18"></use>
            </svg>
        </span>
    </button>
</nav>
```
