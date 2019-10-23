---
id: top-app-bar
title: Top App Bar
sidebar_label: Top App Bar
---

> **This is a material component**
You can view the [view the material design top app bar developer documentation here](https://material.io/develop/web/components/top-app-bar/).

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the polyfills are loaded or the components will not be cross browser compatible.

### CDN - Recommended
```html
<script src="https://unpkg.com/@flayvor/top-app-bar"></script>
```

### NPM
``` console
npm i @flayvor/top-app-bar --save
```

## Demo

### Standard Header
<style>
      body {
        font-family: 'Roboto', sans-serif;
      }
     .box flayvor-top-app-bar {
        background-color: black;
        color:white
      }
      </style>
<div class="box">
      <flayvor-top-app-bar
              title="Flayvor Top App Bar"
              menuicon="menu"
              standard
      >
</div>

```html
<div style="width:100%">
    <pearson-header theme="light" name="David ODey"> </pearson-header>
</div>

```


### Dark Header
> **Important note**
Add a background color style to the wrapper div to acheive a background color.

<div class="box">
    <div class="gradient-bg">
        <pearson-header
           notifications="0"
           theme="dark"
           name="David ODey"
         >
        </pearson-header>
    </div>
</div>

```html
<div style="width:100%" class="your-color-class">
    <pearson-header theme="dark" name="David ODey"> </pearson-header>
</div>
```

### Custom Markup
<div class="box">
    <pearson-header
       notifications="0"
       theme="light"
       name="David ODey"
     >
      <img src="https://via.placeholder.com/468x60?text=Your+Image">
    </pearson-header>
</div>

```html
<div style="width:100%">
    <pearson-header name="David ODey">
        <img src="https://via.placeholder.com/468x60?text=Your+Image">
    </pearson-header>
</div>
```

### Logged In
<div class="box">
    <pearson-header
       notifications="0"
       theme="light"
       name="David ODey"
       loggedIn
     >
    </pearson-header>
</div>

```html
<div style="width:100%">
    <pearson-header loggedIn> </pearson-header>
</div>
```

### Logged In w/ Notifications
<div class="box">
    <pearson-header
       notifications="5"
       theme="light"
       name="David ODey"
       loggedIn
     >
    </pearson-header>
</div>

```html
<div style="width:100%">
    <pearson-header notifications="5" loggedIn> </pearson-header>
</div>
```



## Structure
To add a header, add the markup up at the top of the document above the ```<main id="main">``` element.

> **Important note**
The header component is not connected to any pearson authentication services.

```html
<body>
    <div class="full-width">
        <pearson-header theme="dark" name="David ODey"> </pearson-header>
    </div>
    <main id="main">
    <!-- place your app markup here -->
    </main>
</body>
```

## Authentication
You will need to build a script for users to authenticate through console.  This does not come with the header and is completely seperate.
The header is flexible and allows you to pass in attributes to toggle the different states.  Here is the recommended user flow to achieve these results.

1. A user clicks sign in and they are redirected to console.
2. The user logs in through console and gets redirected back to your application.
3. After redirect add the following attributes to the header that are provided through authentication.
    1. ```name="full name"```
    2. ```notifications="number"```
    3. ```loggedIn```
4. When a user clicks log out, the state of the header changes and an event fires allowing you to make any service calls you need to so you can log out of the application"

## API
> **Important note**
All attributes in this api are required AFTER a user has been authenticated.

### Required
| Attribute    | Type      | Default  | Description                                                   |
| ------------ | --------- | -------- | ------------------------------------------------------------- |
| `theme`         | `String` | required  | Choose between a 'light' and 'dark' header theme                           |

### Optional

| Attribute    | Type      | Default  | Description                                                   |
| ------------ | --------- | -------- | ------------------------------------------------------------- |
| `notifications`         | `String`  | `'0'` | The number of notifications the user has, this will display in the header.                                   |
| `name`   | `String` | `unset`  | The name of the user, used to build the avatar                     |
| `loggedin` | `Bool` | `false`  | When true, the header changes to a logged in state. |                                   |

### Events
```pearson-header``` emits one event: ```logout```.

| Event    | Description                                                  |
| -------- | ------------------------------------------------------------ |
| `logout` | Will fire when the user clicks the logout button |

```js
  const headerNode = document.querySelector('pearson-header');

  headerNode.addEventListener('logout', function (e) {
    // Communicate to the authentication service and log the user out.
  });
```

## HTML Markup
Do you want to build out a custom header?  No problem, use the markup below along with Gravity CSS to make your own header.

### Header Markup
```html
<header class="gr-header light">
    <div class="logo" role="img" aria-label="Pearson"></div>
    <div class="actions">
        <button class="gr-btn icon-btn-18">
            <div class="avatar">
                <span class="initials">DO</span>
                <span class="notification"></span>
            </div>
            <svg id="expand" focusable="false" class="icon-24" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#drop-down-24"></use>
            </svg>
            <svg id="collapse" focusable="false" class="icon-24" aria-hidden="true">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#drop-up-24"></use>
            </svg>
        </button>
    </div>
</header>
```

### Menu Markup
```html
<div class="header-menu">
    <ul>
        <li>
            <button class="gr-btn header-btn">
                <div class="text">
                    <span class="gr-font-large">Log out</span>
                    <span class="gr-meta">Sign out of all Pearson products</span>
                </div>
                <div class="icon">
                    <svg focusable="false" class="icon-24" aria-hidden="true">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-24"></use>
                    </svg>
                </div>
            </button>
        </li>
    </ul>
</div>
```
