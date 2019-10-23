---
id: datepicker
title: Date Picker
sidebar_label: Date Picker
---

> **This is an [older UXF component](https://uxframework.pearson.com/c/date-picker)**
not a part of gravity, but is being considered, as currently there is no datepicker component available.

> **This component has a dependancy**
Make sure you [follow the install instructions](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install#dependancies) and load the moment JS dependancies.

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.
### CDN
```html
<script src="https://unpkg.com/@pearson-ux/datepicker"></script>
```
### NPM
``` console
npm i @pearson-ux/datepicker --save
```

## Demo
### Default Datepicker
<div class="box">
    <pearson-datepicker></pearson-datepicker>
</div>


```html
<pearson-datepicker></pearson-datepicker>
```

### Set Value Datepicker
<div class="box">
    <pearson-datepicker value="10/17/1978"></pearson-datepicker>
</div>

```html
<pearson-datepicker value="10/17/1978"></pearson-datepicker>
```

## Structure
To add a datepicker, just add the markup in your app where you want it displayed.

## API
All attributes in this API are optional.

| Attribute    | Type    | Default | Description                                                                                                  |
| ------------ | ------- | ------- | ------------------------------------------------------------------------------------------------------------ |
| `value`      | String  | unset   | The date you want the calendar to display.  If no value is set the calendar will default to today's date.

### Events
There are no event that get emitted.

## HTML Markup
Do you want to use your own JS to make your own datepicker function?  No problem, use the markup below along with Gravity CSS to build a datepicker with your own JS.

> **Important note:**
You can [follow the UXF guidelines](https://uxframework.pearson.com/c/date-picker) to view the suggested functionality of the datepicker.


```html
<div class="gr-datepicker-container">
    <label class="gr-label" for="datepicker">Select date (mm&#x2F;dd&#x2F;yyyy)</label>
    <div class="datepicker">
        <input type="text" class="gr-input" id="datepicker" aria-label="enter date" aria-expanded="false" data-selected="11/06/2018">
        <button class="gr-btn icon-btn-18">
            <svg focusable="false" class="icon-18" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#date-18"></use>
            </svg>
        </button>
    </div>
    <section class="gr-calendar-container">
        <div>
            <fieldset>
                <div class="actions">
                    <legend id="month">November 2019</legend>
                    <div class="buttons">
                        <button class="gr-btn icon-btn-24 no-border previous">
                            <svg focusable="false" class="icon-24" aria-hidden="true">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#previous-24"></use>
                            </svg>
                        </button>
                        <button class="gr-btn icon-btn-24 no-border">
                            <svg focusable="false" class="icon-24" aria-hidden="true">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-24"></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="row weekdays">
                    <div><abbr title="Sunday">S</abbr></div>
                    <div><abbr title="Monday">M</abbr></div>
                    <div><abbr title="Tuesday">T</abbr></div>
                    <div><abbr title="Wednesday">W</abbr></div>
                    <div><abbr title="Thursday">T</abbr></div>
                    <div><abbr title="Friday">F</abbr></div>
                    <div><abbr title="Saturday">S</abbr></div>
                </div>
                <div class="dates">
                    <div class="row">
                        <div><button class="start" aria-label="November 1, 2019" aria-pressed="false">1</button></div>
                        <div><button class="start" aria-label="November 2, 2019" aria-pressed="false">2</button></div>
                        <div><button class="start" aria-label="November 3, 2019" aria-pressed="false">3</button></div>
                        <div><button class="start" aria-label="November 4, 2019" aria-pressed="false">4</button></div>
                        <div><button class="start" aria-label="November 5, 2019" aria-pressed="false">5</button></div>
                        <div><button class="start" aria-label="November 6, 2019" aria-pressed="false">6</button></div>
                        <div><button class="start" aria-label="November 7, 2019" aria-pressed="false">7</button></div>
                    </div>
                    <div class="row">
                        <div><button class="start" aria-label="November 8, 2019" aria-pressed="false">8</button></div>
                        <div><button class="start" aria-label="November 9, 2019" aria-pressed="false">9</button></div>
                        <div><button class="start" aria-label="November 10, 2019" aria-pressed="false">10</button></div>
                        <div><button class="start" aria-label="November 11, 2019" aria-pressed="false">11</button></div>
                        <div><button class="start" aria-label="November 12, 2019" aria-pressed="false">12</button></div>
                        <div><button class="start" aria-label="November 13, 2019" aria-pressed="false">13</button></div>
                        <div><button class="start" aria-label="November 14, 2019" aria-pressed="false">14</button></div>
                    </div>
                    <div class="row">
                        <div><button class="start" aria-label="November 15, 2019" aria-pressed="false">15</button></div>
                        <div><button class="start" aria-label="November 16, 2019" aria-pressed="false">16</button></div>
                        <div><button class="start" aria-label="November 17, 2019" aria-pressed="false">17</button></div>
                        <div><button class="start" aria-label="November 18, 2019" aria-pressed="false">18</button></div>
                        <div><button class="start" aria-label="November 19, 2019" aria-pressed="false">19</button></div>
                        <div><button class="start" aria-label="November 20, 2019" aria-pressed="false">20</button></div>
                        <div><button class="start" aria-label="November 21, 2019" aria-pressed="false">21</button></div>
                    </div>
                    <div class="row">
                        <div><button class="start" aria-label="November 22, 2019" aria-pressed="false">22</button></div>
                        <div><button class="start" aria-label="November 23, 2019" aria-pressed="false">23</button></div>
                        <div><button class="start" aria-label="November 24, 2019" aria-pressed="false">24</button></div>
                        <div><button class="start" aria-label="November 25, 2019" aria-pressed="false">25</button></div>
                        <div><button class="start" aria-label="November 26, 2019" aria-pressed="false">26</button></div>
                        <div><button class="start" aria-label="November 27, 2019" aria-pressed="false">27</button></div>
                        <div><button class="start" aria-label="November 28, 2019" aria-pressed="false">28</button></div>
                    </div>
                    <div class="row">
                        <div><button class="start" aria-label="November 29, 2019" aria-pressed="false">29</button></div>
                        <div><button class="start" aria-label="November 30, 2019" aria-pressed="false">30</button></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </fieldset>
        </div>
    </section>
</div>

```
