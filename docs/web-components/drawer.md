---
id: drawer
title: Drawer
sidebar_label: Drawer
---

> **This is an [older UXF component](https://uxframework.pearson.com/c/drawer)**
not a part of gravity, but is being considered, as currently there is no drawer component available.

## Installation
For detailed instructions, [view our install section](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install) in this documentation.  Make sure all the dependancies and polyfills are loaded or the components will not be cross browser compatible.

### CDN
```html
<script src="https://unpkg.com/@pearson-ux/drawer"></script>
```
### NPM
``` console
npm i @pearson-ux/drawer --save
```

## Demo

### Standard Drawer
<div class="box">
	<button class="gr-btn" type="button" for="pearsonStandardDrawer">Open standard drawer</button>
</div>


<div>
	<pearson-drawer id="pearsonStandardDrawer" class="animated">
        <h3 slot="title" class="gr-h3">Help Topics</h3>
        <div slot="content" class="content">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci vel necessitatibus amet, enim cumque cum est facilis dolores optio doloremque quibusdam quas a dolorum? Nobis doloremque tempora alias laborum mollitia?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas dignissimos qui, inventore, quam, harum quo atque similique recusandae non molestias id dolores pariatur. Asperiores cum fugit quis qui eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, rerum? <a href="#foo">Voluptatem</a> dolorum ad et quia veniam quas debitis expedita eos eligendi ipsam, cumque neque id temporibus voluptatum alias nihil natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate ex deserunt natus inventore, nihil laborum esse commodi dignissimos autem animi alias laudantium iure beatae eum adipisci, eos harum! Deleniti?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo repudiandae fugiat dolore officia corporis, quia pariatur corrupti odit aliquam debitis iure! Quam exercitationem error dolorem autem quasi consequuntur aperiam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam optio tenetur dolor sed eos voluptate quibusdam natus, sit corrupti! Cumque, atque nulla tempora unde quibusdam voluptatibus eveniet dolores. Earum, libero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corporis, incidunt illo sunt dolor odio architecto quo ad aperiam temporibus amet nostrum officia corrupti vitae quis, ducimus magni omnis minus!</p>
        </div>
    </pearson-drawer>
</div>

```html
<pearson-drawer id="pearsonStandardDrawer" class="animated">
    <h3 slot="title" class="gr-h3">Help Topics</h3>
    <div slot="content" class="content">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci vel necessitatibus amet, enim cumque cum est facilis dolores optio doloremque quibusdam quas a dolorum? Nobis doloremque tempora alias laborum mollitia?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quas dignissimos qui, inventore, quam, harum quo atque similique recusandae non molestias id dolores pariatur. Asperiores cum fugit quis qui eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, rerum? <a href="#foo">Voluptatem</a> dolorum ad et quia veniam quas debitis expedita eos eligendi ipsam, cumque neque id temporibus voluptatum alias nihil natus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate ex deserunt natus inventore, nihil laborum esse commodi dignissimos autem animi alias laudantium iure beatae eum adipisci, eos harum! Deleniti?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo repudiandae fugiat dolore officia corporis, quia pariatur corrupti odit aliquam debitis iure! Quam exercitationem error dolorem autem quasi consequuntur aperiam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam optio tenetur dolor sed eos voluptate quibusdam natus, sit corrupti! Cumque, atque nulla tempora unde quibusdam voluptatibus eveniet dolores. Earum, libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corporis, incidunt illo sunt dolor odio architecto quo ad aperiam temporibus amet nostrum officia corrupti vitae quis, ducimus magni omnis minus!</p>
    </div>
</pearson-drawer>
```

### Details Drawer
<div class="box">
	<button class="gr-btn" type="button" for="pearsonDetailsDrawer">Open standard drawer</button>
</div>

<div>
    <pearson-drawer id="pearsonDetailsDrawer" class="animated">
       <h3 class="gr-h3" slot="title">Help Topics</h3>
       <div slot="content">
          <div data-panel="1">
             <h3 class="gr-h3">
                Having trouble signing in or account locked?
             </h3>
             <p>
                You have a Pearson username and password if you've ever used a Pearson product
             </p>
             <h3 class="gr-h3">I enable cookies?</h3>
             <p>Cookies are files from websites that store your browsing
                information, including
             </p>
             <h3 class="gr-h3">What if I get a date or clock error?</h3>
             <p>If the date or clock for your computer or other device is set
                incorrectly for your time zone, an error appears and you can't
                continue.
             </p>
             <h3 class="gr-h3">Having trouble or need support?</h3>
          </div>
          <div data-panel="2">
             <h3>Having trouble signing in or account locked?</h3>
             <p>
                You have a Pearson username and password if you've ever used a
                Pearson product (for example, Revel, MyLab Math, or Mastering
                Biology).
             </p>
             <p>
                <strong>Note:</strong> If you have an account but are asked to
                register, select <strong>register</strong> and follow the
                instructions.
             </p>
             <p>Check out these tips for resolving common sign in issues:</p>
             <p>
                <strong>Username:</strong> This may be your email apress and
                differ from your school or institution username.
             </p>
             <p>
                <strong>Password:</strong> This is case-sensitive and has at least
                1 uppercase letter, 1 number, and at least 8 characters. Select
                <strong>SHOW</strong> to see your password as you enter it.
             </p>
             <p>
                <strong>Get username and reset password:</strong> Select
                <strong>Forgot username or password</strong>. You'll receive an
                email with your username and a link to reset your password for
                each Pearson account associated with your email apress. Reset the
                password only for the account you want to use.
             </p>
             <p>
                <strong>Incorrect username or password or account locked:</strong>
                Try again or select
                <strong>Forgot username or password</strong> to reset your
                password.
             </p>
             <p>
                <strong>Browser cookies and cached files:</strong>&nbsp;<a href="https://support.pearson.com/getsupport/s/article/Browser-Settings"
                   target="_blank">Enable cookies and, if necessary, delete cached browser
                files.</a>
             </p>
             <p>
                If you still can't sign in, contact
                <a href="https://support.pearson.com/getsupport/s/" target="_blank">Pearson Support</a>.
             </p>
          </div>
          <div data-panel="3">
             <h3 class="gr-h3">
                How do I enable cookies?
             </h3>
             <p>
                Cookies are files from websites that store your browsing
                information, including preferences and profile. To sign in or link
                accounts, you need to
                <a
                   href="https://support.pearson.com/getsupport/s/article/Browser-Settings"
                   target="_blank"
                   >enable third-party cookies</a
                   >.
             </p>
             <dl>
                <h3 class="gr-h3">
                   <strong>Chrome and Firefox:</strong> Enable all cookies or ap an
                   exception for <strong>pi.pearsoned.com</strong>.
                </h3>
                <h3 class="gr-h3">
                   <strong>Internet Explorer:</strong> Enable all cookies or ap
                   exceptions for <strong>pi.pearsoned.com</strong> and
                   <strong>pearson.com</strong>.
                </h3>
                <h3 class="gr-h3">
                   <strong>Safari and Edge:</strong> Enable all cookies.
                </h3>
             </dl>
             <p>
                If you still have trouble, try
                <a
                   href="https://support.pearson.com/getsupport/s/article/Browser-Settings"
                   target="_blank"
                   >deleting browser cached files</a
                   >.
             </p>
             <p>
                Check Help for your browser if it isn’t covered in these
                instructions.
             </p>
          </div>
          <div data-panel="4">
             <h3 class="gr-h3">
                What if I get a date or clock error?
             </h3>
             <p>
                If the date or clock for your computer or other device is set
                incorrectly for your time zone, an error appears and you can't
                continue.
             </p>
             <p>
                For example, the defadlt time zone for computers with the Windows
                operating system is Pacific Time. If you manually change the clock
                or switch the time zone without immediately making sure the
                clock—automatically or manually—matches the time zone, the error
                appears.
             </p>
             <p>
                <strong>Resolution:</strong>&nbsp;Switch to the correct time zone,
                if applicable. Make sure the date and time are correct for your
                time zone. If your clock is set manually—not from a network or
                Internet server, make sure it comes close to the time according to
                the World Clock. (You can search for the World Clock on the
                Internet.)
             </p>
          </div>
          <div data-panel="5">
             <h3 class="gr-h3">
                Having trouble or need support?
             </h3>
             <p>
                Check out
                <a href="https://support.pearson.com/getsupport/s/" target="_new"
                   >Pearson Support</a
                   >
                for popdlar topics or contact information.
             </p>
          </div>
       </div>
    </pearson-drawer>
</div>

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
