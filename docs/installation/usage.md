---
id: usage
title: Usage
sidebar_label: Usage
---

Flayvor web components are custom HTML elements that can be consumed in any project, with any framework. To use a component simply add the HTML to your page like this:

#### HTML
```html
<div>
    <flayvor-top-app-bar></flayvor-top-app-bar>
</div>
```
#### React.Js
```jsx
// import statement at top of page
import '@pearson-ux/toggle';

// jsx
render () {
   return (
      <div>
        <flayvor-top-app-bar></flayvor-top-app-bar>
      </div>
   )
}
```
Each component comes equipped with custom events that fire so you can interact with your application.
