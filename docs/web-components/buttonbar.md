---
id: buttonbar
title: Button Bar
sidebar_label: Button Bar
---

> **This is a custom component**
that fits inside a Gravity [page frame component.](https://ux.pearson.com/gravity/c/page-frames#minimal-page-frames)

The button bar is a component that starts off as a row of buttons, and as the screen responds to different breakpoints, the buttons get placed in a an accessible dropdown menu.

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://unpkg.com/@pearson-ux/button-bar"></script>
```
### NPM
``` console
npm i @pearson-ux/button-bar --save
```

## Demo
> **Important Note**
You can adjust the browser size to see the responsive behaviour of the button bar.

<div class="box">
    <pearson-buttonbar>
        <li data-text="Delete" slot="list">
            <button id="delete" class="gr-btn icon-btn-18">
                <svg focusable="false" class="icon-18" aria-hidden="true">
                    <path d="M3.75,3.75 L3.75,15.5 C3.75,15.9142136 4.08578644,16.25 4.5,16.25 L13.5,16.25 C13.9142136,16.25 14.25,15.9142136 14.25,15.5 L14.25,3.75 L3.75,3.75 Z M16,3.75 L16,15.5 C16,16.8807119 14.8807119,18 13.5,18 L4.5,18 C3.11928813,18 2,16.8807119 2,15.5 L2,3.75 L1.875,3.75 C1.39175084,3.75 1,3.35824916 1,2.875 C1,2.39175084 1.39175084,2 1.875,2 L6.50599314,2 C6.50202326,1.95052378 6.5,1.90049836 6.5,1.85000038 C6.5,0.828273384 7.32827338,1.87688205e-16 8.35000038,0 L9.64999962,0 C10.6717266,-1.87688205e-16 11.5,0.828273384 11.5,1.85000038 C11.5,1.90049836 11.4979767,1.95052378 11.4940069,2 L16.125,2 C16.6082492,2 17,2.39175084 17,2.875 C17,3.35824916 16.6082492,3.75 16.125,3.75 L16,3.75 Z"></path>
                    <path d="M5,6 L7,6 L7,13.5 C7,14.0522847 6.55228475,14.5 6,14.5 C5.44771525,14.5 5,14.0522847 5,13.5 L5,6 Z"></path>
                    <path d="M8,6 L10,6 L10,13.5 C10,14.0522847 9.55228475,14.5 9,14.5 C8.44771525,14.5 8,14.0522847 8,13.5 L8,6 Z"></path>
                    <path d="M11,6 L13,6 L13,13.5 C13,14.0522847 12.5522847,14.5 12,14.5 C11.4477153,14.5 11,14.0522847 11,13.5 L11,6 Z"></path>
                </svg>
            </button>
        </li>
        <li data-text="Edit" slot="list">
            <button id="edit"  class="gr-btn icon-btn-18 ">
                <svg focusable="false" class="icon-18" aria-hidden="true">
                    <path d="M9.26201579,1.31563727 C10.3665853,1.31563727 11.2620158,2.21106777 11.2620158,3.31563727 L11.2620158,14.8529591 L9.132426,17.0114903 C8.93848613,17.2080658 8.62191085,17.2102024 8.42533532,17.0162626 L6.26201579,14.8529591 L6.26201579,3.31563727 C6.26201579,2.21106777 7.15744629,1.31563727 8.26201579,1.31563727 L9.26201579,1.31563727 Z M8.01201579,6.31563727 L8.01201579,14.1280854 L8.77050889,14.8865785 L9.51201579,14.1349944 L9.51201579,6.31563727 L8.01201579,6.31563727 Z M8.01201579,4.64897061 L9.51201579,4.64897061 L9.51201579,3.31563727 C9.51201579,3.17756609 9.40008698,3.06563727 9.26201579,3.06563727 L8.26201579,3.06563727 C8.1239446,3.06563727 8.01201579,3.17756609 8.01201579,3.31563727 L8.01201579,4.64897061 Z" fill-rule="nonzero" transform="translate(8.762016, 9.237984) rotate(45.000000) translate(-8.762016, -9.237984) "></path>
                </svg>
            </button>
        </li>
        <li data-text="Bookmark" slot="list">
            <button id="bookmark" class="gr-btn icon-btn-18 ">
                <svg focusable="false" class="icon-18" aria-hidden="true">
                    <path d="M13.25,3 C13.25,2.86192881 13.1380712,2.75 13,2.75 L5,2.75 C4.86192881,2.75 4.75,2.86192881 4.75,3 L4.75,14.3782563 L8.99999989,10.7660543 L13.25,14.3782563 L13.25,3 Z M8.99999989,13.0627457 L4.64761739,16.7619655 C4.22679536,17.1196347 3.59570351,17.0684392 3.23803431,16.6476172 C3.08437026,16.466821 3,16.2372758 3,15.9999998 L3,3 C3,1.8954305 3.8954305,1 5,1 L13,1 C14.1045695,1 15,1.8954305 15,3 L15,16 C15,16.5522847 14.5522847,17 14,17 C13.762724,17 13.5331788,16.9156297 13.3523826,16.7619657 L8.99999989,13.0627457 Z"></path>
                </svg>
            </button>
        </li>
        <li data-text="Download" slot="list">
            <button id="download" class="gr-btn icon-btn-18 ">
                <svg focusable="false" class="icon-18" aria-hidden="true">
                    <path d="M15,12 C15,11.4477153 15.4477153,11 16,11 C16.5522847,11 17,11.4477153 17,12 L17,14.5 C17,15.8807119 15.8807119,17 14.5,17 L3.5,17 C2.11928813,17 1,15.8807119 1,14.5 L1,12 C1,11.4477153 1.44771525,11 2,11 C2.55228475,11 3,11.4477153 3,12 L3,14.5 C3,14.7761424 3.22385763,15 3.5,15 L14.5,15 C14.7761424,15 15,14.7761424 15,14.5 L15,12 Z"></path>
                    <path d="M8,8.69922208 L8,1 C8,0.44771525 8.44771525,1.16477725e-14 9,1.15463195e-14 C9.55228475,1.14448664e-14 10,0.44771525 10,1 L10,8.70150263 L12.3972414,6.28004799 C12.7638946,5.9096914 13.3583569,5.9096914 13.7250101,6.28004799 C14.0916633,6.65040457 14.0916633,7.25087123 13.7250101,7.62122781 L9.66501324,11.7222326 C9.29836003,12.0925891 8.70389772,12.0925891 8.33724451,11.7222326 L4.27498991,7.61894726 C3.9083367,7.24859068 3.9083367,6.64812402 4.27498991,6.27776744 C4.64164312,5.90741085 5.23610543,5.90741085 5.60275864,6.27776744 L8,8.69922208 Z"></path>
                </svg>
            </button>
        </li>
    </pearson-buttonbar>
</div>

```html
<pearson-buttonbar>
    <li data-text="Delete" slot="list">
        <button id="delete" class="gr-btn icon-btn-18">
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <path d="M3.75,3.75 L3.75,15.5 C3.75,15.9142136 4.08578644,16.25 4.5,16.25 L13.5,16.25 C13.9142136,16.25 14.25,15.9142136 14.25,15.5 L14.25,3.75 L3.75,3.75 Z M16,3.75 L16,15.5 C16,16.8807119 14.8807119,18 13.5,18 L4.5,18 C3.11928813,18 2,16.8807119 2,15.5 L2,3.75 L1.875,3.75 C1.39175084,3.75 1,3.35824916 1,2.875 C1,2.39175084 1.39175084,2 1.875,2 L6.50599314,2 C6.50202326,1.95052378 6.5,1.90049836 6.5,1.85000038 C6.5,0.828273384 7.32827338,1.87688205e-16 8.35000038,0 L9.64999962,0 C10.6717266,-1.87688205e-16 11.5,0.828273384 11.5,1.85000038 C11.5,1.90049836 11.4979767,1.95052378 11.4940069,2 L16.125,2 C16.6082492,2 17,2.39175084 17,2.875 C17,3.35824916 16.6082492,3.75 16.125,3.75 L16,3.75 Z"></path>
                <path d="M5,6 L7,6 L7,13.5 C7,14.0522847 6.55228475,14.5 6,14.5 C5.44771525,14.5 5,14.0522847 5,13.5 L5,6 Z"></path>
                <path d="M8,6 L10,6 L10,13.5 C10,14.0522847 9.55228475,14.5 9,14.5 C8.44771525,14.5 8,14.0522847 8,13.5 L8,6 Z"></path>
                <path d="M11,6 L13,6 L13,13.5 C13,14.0522847 12.5522847,14.5 12,14.5 C11.4477153,14.5 11,14.0522847 11,13.5 L11,6 Z"></path>
            </svg>
        </button>
    </li>
    <li data-text="Edit" slot="list">
        <button id="edit"  class="gr-btn icon-btn-18 ">
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <path d="M9.26201579,1.31563727 C10.3665853,1.31563727 11.2620158,2.21106777 11.2620158,3.31563727 L11.2620158,14.8529591 L9.132426,17.0114903 C8.93848613,17.2080658 8.62191085,17.2102024 8.42533532,17.0162626 L6.26201579,14.8529591 L6.26201579,3.31563727 C6.26201579,2.21106777 7.15744629,1.31563727 8.26201579,1.31563727 L9.26201579,1.31563727 Z M8.01201579,6.31563727 L8.01201579,14.1280854 L8.77050889,14.8865785 L9.51201579,14.1349944 L9.51201579,6.31563727 L8.01201579,6.31563727 Z M8.01201579,4.64897061 L9.51201579,4.64897061 L9.51201579,3.31563727 C9.51201579,3.17756609 9.40008698,3.06563727 9.26201579,3.06563727 L8.26201579,3.06563727 C8.1239446,3.06563727 8.01201579,3.17756609 8.01201579,3.31563727 L8.01201579,4.64897061 Z" fill-rule="nonzero" transform="translate(8.762016, 9.237984) rotate(45.000000) translate(-8.762016, -9.237984) "></path>
            </svg>
        </button>
    </li>
    <li data-text="Bookmark" slot="list">
        <button id="bookmark" class="gr-btn icon-btn-18 ">
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <path d="M13.25,3 C13.25,2.86192881 13.1380712,2.75 13,2.75 L5,2.75 C4.86192881,2.75 4.75,2.86192881 4.75,3 L4.75,14.3782563 L8.99999989,10.7660543 L13.25,14.3782563 L13.25,3 Z M8.99999989,13.0627457 L4.64761739,16.7619655 C4.22679536,17.1196347 3.59570351,17.0684392 3.23803431,16.6476172 C3.08437026,16.466821 3,16.2372758 3,15.9999998 L3,3 C3,1.8954305 3.8954305,1 5,1 L13,1 C14.1045695,1 15,1.8954305 15,3 L15,16 C15,16.5522847 14.5522847,17 14,17 C13.762724,17 13.5331788,16.9156297 13.3523826,16.7619657 L8.99999989,13.0627457 Z"></path>
            </svg>
        </button>
    </li>
    <li data-text="Download" slot="list">
        <button id="download" class="gr-btn icon-btn-18 ">
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <path d="M15,12 C15,11.4477153 15.4477153,11 16,11 C16.5522847,11 17,11.4477153 17,12 L17,14.5 C17,15.8807119 15.8807119,17 14.5,17 L3.5,17 C2.11928813,17 1,15.8807119 1,14.5 L1,12 C1,11.4477153 1.44771525,11 2,11 C2.55228475,11 3,11.4477153 3,12 L3,14.5 C3,14.7761424 3.22385763,15 3.5,15 L14.5,15 C14.7761424,15 15,14.7761424 15,14.5 L15,12 Z"></path>
                <path d="M8,8.69922208 L8,1 C8,0.44771525 8.44771525,1.16477725e-14 9,1.15463195e-14 C9.55228475,1.14448664e-14 10,0.44771525 10,1 L10,8.70150263 L12.3972414,6.28004799 C12.7638946,5.9096914 13.3583569,5.9096914 13.7250101,6.28004799 C14.0916633,6.65040457 14.0916633,7.25087123 13.7250101,7.62122781 L9.66501324,11.7222326 C9.29836003,12.0925891 8.70389772,12.0925891 8.33724451,11.7222326 L4.27498991,7.61894726 C3.9083367,7.24859068 3.9083367,6.64812402 4.27498991,6.27776744 C4.64164312,5.90741085 5.23610543,5.90741085 5.60275864,6.27776744 L8,8.69922208 Z"></path>
            </svg>
        </button>
    </li>
</pearson-buttonbar>
```

## Structure

Follow these patterns to successfully build out the button bar.  The children in the button bar must be ```li``` tags.  Each ```li``` tag must also include a ```data-text``` attribute with the value of the text you want to display in the dropdown menu.  They must also include a ```slot``` attribute with the value of ```list```,  ```slot="list"```

> **Important note:**
You can add as many ```<li>``` tags to button bar as you like, just be mindful of the length of the bar, as too many items may create unwanted wrapping.

```html
<pearson-button-bar>
    <li data-text="button text" slot="list">

    </li>
</pearson-button-bar>
```

The children inside the ```li``` tag are ```button``` elements that contain an ```svg``` icon.
> **Important note:**
Unfortunately, you will not be able to use our sprite system to add icons to this component.  You will need to [download each svg icon individually](https://ux.pearson.com/gravity/c/icons#global-system-icons) from the gravity site.

```html
<pearson-button-bar>
    <li data-text="button text" slot="list">
        <button id="download" class="gr-btn icon-btn-18 ">
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <path d="M15,12 C15,11.4477153 15.4477153,11 16,11 C16.5522847,11 17,11.4477153 17,12 L17,14.5 C17,15.8807119 15.8807119,17 14.5,17 L3.5,17 C2.11928813,17 1,15.8807119 1,14.5 L1,12 C1,11.4477153 1.44771525,11 2,11 C2.55228475,11 3,11.4477153 3,12 L3,14.5 C3,14.7761424 3.22385763,15 3.5,15 L14.5,15 C14.7761424,15 15,14.7761424 15,14.5 L15,12 Z"></path>
                <path d="M8,8.69922208 L8,1 C8,0.44771525 8.44771525,1.16477725e-14 9,1.15463195e-14 C9.55228475,1.14448664e-14 10,0.44771525 10,1 L10,8.70150263 L12.3972414,6.28004799 C12.7638946,5.9096914 13.3583569,5.9096914 13.7250101,6.28004799 C14.0916633,6.65040457 14.0916633,7.25087123 13.7250101,7.62122781 L9.66501324,11.7222326 C9.29836003,12.0925891 8.70389772,12.0925891 8.33724451,11.7222326 L4.27498991,7.61894726 C3.9083367,7.24859068 3.9083367,6.64812402 4.27498991,6.27776744 C4.64164312,5.90741085 5.23610543,5.90741085 5.60275864,6.27776744 L8,8.69922208 Z"></path>
            </svg>
        </button>
    </li>
    <!-- Add add additional li tags for more buttons -->
</pearson-button-bar>
```


## API
There are no API options available.

### Events
There are no event that get emitted.

## HTML Markup
Do you want to use your own JS to make the button bar function?  No problem, use the markup below along with Gravity CSS to build an accordion with your own JS.

> **Important note:**
You can follow the gravity guidelines to [view the behavior you need to program on the Gravity website.](https://ux.pearson.com/gravity/c/page-frames#minimal-page-frames) You will want to focus soley on the three / four buttons on the right in the page frame examples.  Disregard the close icon and title.


```html
<div class="button-bar">
   <ul id="buttonBar">
      <li data-text="Delete">
         <button class="gr-btn icon-btn-18 " aria-label="delete">
            <svg focusable="false" class="icon-18" aria-hidden="true">
               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete-18"></use>
            </svg>
         </button>
      </li>
      <li data-text="Edit">
         <button class="gr-btn icon-btn-18 " aria-label="edit">
            <svg focusable="false" class="icon-18" aria-hidden="true">
               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#edit-18"></use>
            </svg>
         </button>
      </li>
      <li data-text="Bookmark">
         <button class="gr-btn icon-btn-18 " aria-label="bookmark">
            <svg focusable="false" class="icon-18" aria-hidden="true">
               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bookmark-off-18"></use>
            </svg>
         </button>
      </li>
      <li data-text="Download">
         <button class="gr-btn icon-btn-18 " aria-label="download">
            <svg focusable="false" class="icon-18" aria-hidden="true">
               <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download-18"></use>
            </svg>
         </button>
      </li>
      <li id="moreDropdown">
         <div class="gr-dropdown-container">
            <button id="openMenu" class="gr-btn icon-btn-18" aria-haspopup="true" aria-expanded="false" aria-label="more options">
               <svg focusable="false" class="icon-18" aria-hidden="true" style="margin:0;">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#more-18"></use>
               </svg>
            </button>
            <div class="dropdown-menu animateIn" style="display:none">
               <ul role="menu" class="menu">
               </ul>
            </div>
         </div>
      </li>
   </ul>
</div>
```
