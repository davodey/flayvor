---
id: tooltips
title: Tooltips
sidebar_label: Tooltips
---

> **Before you can use tooltips:**
You need to make sure tippy.js is loaded in your project. For more information on installing tippy.js, please visit our [installation guide](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install#install-tooltips)

## Position
You can add a tooltip to any HTML element by adding three data properties:
1. data-tippy = This is the text you want the tooltip to display.
2. data-tippy-arrow = toggles the arrow on and off.
3. data-tippy-placement = position the tooltip top, bottom, left, right.
### Top
<div class="box">
  <span data-tippy="I am a tooltip" data-tippy-arrow="true" data-tippy-placement="top">I am a tooltip.  Hover me.</span>
</div>

```html
  <span data-tippy-placement="top" data-tippy="I am a tooltip" data-tippy-arrow="true">I am a tooltip.  Hover me.</span>
```

### Bottom
<div class="box">
  <span data-tippy="I am a tooltip" data-tippy-arrow="true" data-tippy-placement="bottom">I am a tooltip.  Hover me.</span>
</div>

```html
  <span data-tippy-placement="bottom" data-tippy="I am a tooltip" data-tippy-arrow="true" >I am a tooltip.  Hover me.</span>
```
### Right
<div class="box">
  <span data-tippy="I am a tooltip" data-tippy-arrow="true" data-tippy-placement="right">I am a tooltip.  Hover me.</span>
</div>

```html
  <span data-tippy-placement="right" data-tippy="I am a tooltip" data-tippy-arrow="true" >I am a tooltip.  Hover me.</span>
```

### Left
<div class="box">
  <span data-tippy-placement="left" data-tippy="I am a tooltip" data-tippy-arrow="true" >I am a tooltip.  Hover me.</span>
</div>

```html
  <span data-tippy-placement="left" data-tippy="I am a tooltip" data-tippy-arrow="true" >I am a tooltip.  Hover me.</span>
```

