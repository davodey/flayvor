---
id: icons
title: Icons
sidebar_label: Icons
---

Gravity CSS uses SVG icons for their improved accessibility and vector support. There are two ways you can add an icon to your project, with multiple sizes.

## Icon Sprite

> **Before you can use the icon sprite:**
You need to make sure its loaded in your project. For more information on installing the icon sprite, please visit our [installation guide](https://ux.pearson.com/prototypes/gravity-documentation/docs/getting-started/install#install-gravity-icons)

### Small Icons
Small icons are defined at a size of 18px.  To add a small icon find an icon below from our library.
1. After you choose an icon from the icon library, add the code below replacing```#iconName-18``` with the name of the icon followed by the size.
2. On the ```<svg>``` element add a class of ```.icon-18```.

<div class="box">
    <svg focusable="false" class="icon-18" aria-hidden="true">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close-18"></use>
    </svg>
</div>

```html
<svg focusable="false" class="icon-18" aria-hidden="true">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#iconName-18"></use>
</svg>
```

### Large Icons
Large icons are defined at a size of 24px.  To add a large icon find an icon below from our library.
1. After you choose an icon from the icon library, add the code below replacing```#iconName-24``` with the name of the icon followed by the size.
2. On the ```<svg>``` element add a class of ```.icon-24```.

<div class="box">
    <svg focusable="false" class="icon-24" aria-hidden="true">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close-24"></use>
    </svg>
</div>

```html
<svg focusable="false" class="icon-24" aria-hidden="true">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#iconName-24"></use>
</svg>
```

## Downloading individual icons

If you chose not to use our preferred method of SVG delivery via SVG sprite, you can download icon individually.  To do so, [visit the Gravity website](https://ux.pearson.com/gravity/c/icons), select the icon you want, and follow the download instructions.

## Icon colors
To change the color of the icon, you can use [one of our color classes](https://ux.pearson.com/prototypes/gravity-documentation/docs/gravity-css/colors).

<div class="box">
    <svg focusable="false" class="icon-24 gr-condition-one" aria-hidden="true">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close-24"></use>
    </svg>
</div>

```html
<svg focusable="false" class="icon-24 gr-condition-one" aria-hidden="true">
    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close-24"></use>
</svg>
```

## Icon library

### Global Icons
<ul class="icon-list">
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#account-24"></use>
      </svg>
      <p class="gr-meta">account</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#help-24"></use>
      </svg>
      <p class="gr-meta">help</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#home-24"></use>
      </svg>
      <p class="gr-meta">home</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#notification-24"></use>
      </svg>
      <p class="gr-meta">notification</p>
   </li>
</ul>


### General icons
<ul class="icon-list">
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#archive-24"></use>
      </svg>
      <p class="gr-meta">archive</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#attachment-24"></use>
      </svg>
      <p class="gr-meta">attachment</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ascending-24"></use>
      </svg>
      <p class="gr-meta">ascending</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#collapse-24"></use>
      </svg>
      <p class="gr-meta">collapse</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#date-24"></use>
      </svg>
      <p class="gr-meta">date</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete-24"></use>
      </svg>
      <p class="gr-meta">delete</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#descending-24"></use>
      </svg>
      <p class="gr-meta">descending</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download-24"></use>
      </svg>
      <p class="gr-meta">download</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#drag-handle-24"></use>
      </svg>
      <p class="gr-meta">drag-handle</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#drop-down-24"></use>
      </svg>
      <p class="gr-meta">drop-down</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#drop-up-24"></use>
      </svg>
      <p class="gr-meta">drop-up</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#duplicate-24"></use>
      </svg>
      <p class="gr-meta">duplicate</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#edit-24"></use>
      </svg>
      <p class="gr-meta">edit</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#email-24"></use>
      </svg>
      <p class="gr-meta">email</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-24"></use>
      </svg>
      <p class="gr-meta">expand</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#export-24"></use>
      </svg>
      <p class="gr-meta">export</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#file-24"></use>
      </svg>
      <p class="gr-meta">file</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#flip-card-24"></use>
      </svg>
      <p class="gr-meta">flip-card</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#grid-view-24"></use>
      </svg>
      <p class="gr-meta">grid-view</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#group-off-24"></use>
      </svg>
      <p class="gr-meta">group-off</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#group-on-24"></use>
      </svg>
      <p class="gr-meta">group-on</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#information-24"></use>
      </svg>
      <p class="gr-meta">information</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#list-view-24"></use>
      </svg>
      <p class="gr-meta">list-view</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#lock-off-24"></use>
      </svg>
      <p class="gr-meta">lock-off</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#lock-on-24"></use>
      </svg>
      <p class="gr-meta">lock-on</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#maximize-24"></use>
      </svg>
      <p class="gr-meta">maximize</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#message-24"></use>
      </svg>
      <p class="gr-meta">message</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#minimize-24"></use>
      </svg>
      <p class="gr-meta">minimize</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#more-24"></use>
      </svg>
      <p class="gr-meta">more</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#print-24"></use>
      </svg>
      <p class="gr-meta">print</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#scale-24"></use>
      </svg>
      <p class="gr-meta">scale</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search-24"></use>
      </svg>
      <p class="gr-meta">search</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#settings-24"></use>
      </svg>
      <p class="gr-meta">settings</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#show-off-24"></use>
      </svg>
      <p class="gr-meta">show-off</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#show-on-24"></use>
      </svg>
      <p class="gr-meta">show-on</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sortable-24"></use>
      </svg>
      <p class="gr-meta">sortable</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tag-24"></use>
      </svg>
      <p class="gr-meta">tag</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#time-24"></use>
      </svg>
      <p class="gr-meta">time</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#unarchive-24"></use>
      </svg>
      <p class="gr-meta">unarchive</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#upload-24"></use>
      </svg>
      <p class="gr-meta">upload</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#warning-24"></use>
      </svg>
      <p class="gr-meta">warning</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#zoom-in-24"></use>
      </svg>
      <p class="gr-meta">zoom-in</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#zoom-out-24"></use>
      </svg>
      <p class="gr-meta">zoom-out</p>
   </li>
</ul>


### Media icons
<ul class="icon-list">
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#audio-high-24"></use>
      </svg>
      <p class="gr-meta">audio-high</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#audio-low-24"></use>
      </svg>
      <p class="gr-meta">audio-low</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#audio-off-24"></use>
      </svg>
      <p class="gr-meta">audio-off</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#forward-10-24"></use>
      </svg>
      <p class="gr-meta">forward-10</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#forward-24"></use>
      </svg>
      <p class="gr-meta">forward</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fullscreen-off-24"></use>
      </svg>
      <p class="gr-meta">fullscreen-off</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#fullscreen-on-24"></use>
      </svg>
      <p class="gr-meta">fullscreen-on</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mic-off-24"></use>
      </svg>
      <p class="gr-meta">mic-off</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mic-on-24"></use>
      </svg>
      <p class="gr-meta">mic-on</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#pause-24"></use>
      </svg>
      <p class="gr-meta">pause</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#play-24"></use>
      </svg>
      <p class="gr-meta">play</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#refresh-24"></use>
      </svg>
      <p class="gr-meta">refresh</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rewind-10-24"></use>
      </svg>
      <p class="gr-meta">rewind-10</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rewind-24"></use>
      </svg>
      <p class="gr-meta">rewind</p>
   </li>
</ul>

### Navigation icons

<ul class="icon-list">
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#back-24"></use>
      </svg>
      <p class="gr-meta">back</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close-24"></use>
      </svg>
      <p class="gr-meta">close</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#next-24"></use>
      </svg>
      <p class="gr-meta">next</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#previous-24"></use>
      </svg>
      <p class="gr-meta">previous</p>
   </li>
</ul>

### Course content icons

<ul class="icon-list">
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#annotation-24"></use>
        </svg>
        <p class="gr-meta">annotation</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bookmark-off-24"></use>
        </svg>
        <p class="gr-meta">bookmark-off</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bookmark-on-24"></use>
        </svg>
        <p class="gr-meta">bookmark-on</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bulleted-list-24"></use>
        </svg>
        <p class="gr-meta">bulleted-list</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#correct-24"></use>
        </svg>
        <p class="gr-meta">correct</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#drawer-left-24"></use>
        </svg>
        <p class="gr-meta">drawer-left</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#drawer-right-24"></use>
        </svg>
        <p class="gr-meta">drawer-right</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#font-24"></use>
        </svg>
        <p class="gr-meta">font</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#history-24"></use>
        </svg>
        <p class="gr-meta">history</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#incorrect-24"></use>
        </svg>
        <p class="gr-meta">incorrect</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#left-maximize-24"></use>
        </svg>
        <p class="gr-meta">left-maximize</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#left-minimize-24"></use>
        </svg>
        <p class="gr-meta">left-minimize</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#listen-24"></use>
        </svg>
        <p class="gr-meta">listen</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#menu-24"></use>
        </svg>
        <p class="gr-meta">menu</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#notebook-24"></use>
        </svg>
        <p class="gr-meta">notebook</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#right-maximize-24"></use>
        </svg>
        <p class="gr-meta">right-maximize</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#right-minimize-24"></use>
        </svg>
        <p class="gr-meta">right-minimize</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-off-24"></use>
        </svg>
        <p class="gr-meta">star-off</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star-on-24"></use>
        </svg>
        <p class="gr-meta">star-on</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#study-tools-24"></use>
        </svg>
        <p class="gr-meta">study-tools</p>
    </li>
    <li>
        <svg focusable="false" class="icon-24" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#virtual-reality-24"></use>
        </svg>
        <p class="gr-meta">virtual-reality</p>
    </li>
</ul>

### Text editor icons

<ul class="icon-list">
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bold-24"></use>
      </svg>
      <p class="gr-meta">bold</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#copy-24"></use>
      </svg>
      <p class="gr-meta">copy</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cut-24"></use>
      </svg>
      <p class="gr-meta">cut</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#dictionary-24"></use>
      </svg>
      <p class="gr-meta">dictionary</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#flag-24"></use>
      </svg>
      <p class="gr-meta">flag</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#font-color-24"></use>
      </svg>
      <p class="gr-meta">font-color</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#format-off-24"></use>
      </svg>
      <p class="gr-meta">format-off</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#highlighter-24"></use>
      </svg>
      <p class="gr-meta">highlighter</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#hr-24"></use>
      </svg>
      <p class="gr-meta">hr</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#html-24"></use>
      </svg>
      <p class="gr-meta">html</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#image-24"></use>
      </svg>
      <p class="gr-meta">image</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#indent-decrease-24"></use>
      </svg>
      <p class="gr-meta">indent-decrease</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#indent-increase-24"></use>
      </svg>
      <p class="gr-meta">indent-increase</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#italic-24"></use>
      </svg>
      <p class="gr-meta">italic</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#justify-center-24"></use>
      </svg>
      <p class="gr-meta">justify-center</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#justify-left-24"></use>
      </svg>
      <p class="gr-meta">justify-left</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#justify-right-24"></use>
      </svg>
      <p class="gr-meta">justify-right</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#link-off-24"></use>
      </svg>
      <p class="gr-meta">link-off</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#link-on-24"></use>
      </svg>
      <p class="gr-meta">link-on</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#list-order-24"></use>
      </svg>
      <p class="gr-meta">list-order</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#list-unorder-24"></use>
      </svg>
      <p class="gr-meta">list-unorder</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#media-24"></use>
      </svg>
      <p class="gr-meta">media</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#page-break-24"></use>
      </svg>
      <p class="gr-meta">page-break</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#paste-24"></use>
      </svg>
      <p class="gr-meta">paste</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#plagiarism-24"></use>
      </svg>
      <p class="gr-meta">plagiarism</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#redo-24"></use>
      </svg>
      <p class="gr-meta">redo</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#strikethrough-24"></use>
      </svg>
      <p class="gr-meta">strikethrough</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#subscript-24"></use>
      </svg>
      <p class="gr-meta">subscript</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#summary-24"></use>
      </svg>
      <p class="gr-meta">summary</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#superscript-24"></use>
      </svg>
      <p class="gr-meta">superscript</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#symbols-24"></use>
      </svg>
      <p class="gr-meta">symbols</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#synonym-24"></use>
      </svg>
      <p class="gr-meta">synonym</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#table-24"></use>
      </svg>
      <p class="gr-meta">table</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#underline-24"></use>
      </svg>
      <p class="gr-meta">underline</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#undo-24"></use>
      </svg>
      <p class="gr-meta">undo</p>
   </li>
</ul>

### Assessment icons

<ul class="icon-list">
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#multi-correct-24"></use>
      </svg>
      <p class="gr-meta">multi-correct</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#multi-correct-ns-24"></use>
      </svg>
      <p class="gr-meta">multi-correct-ns</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#multi-empty-24"></use>
      </svg>
      <p class="gr-meta">multi-empty</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#multi-incorrect-24"></use>
      </svg>
      <p class="gr-meta">multi-incorrect</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#multi-selected-24"></use>
      </svg>
      <p class="gr-meta">multi-selected</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#single-correct-24"></use>
      </svg>
      <p class="gr-meta">single-correct</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#single-empty-24"></use>
      </svg>
      <p class="gr-meta">single-empty</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#single-incorrect-24"></use>
      </svg>
      <p class="gr-meta">single-incorrect</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#single-partial-24"></use>
      </svg>
      <p class="gr-meta">single-partial</p>
   </li>
   <li>
      <svg focusable="false" class="icon-24" aria-hidden="true">
         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#single-selected-24"></use>
      </svg>
      <p class="gr-meta">single-selected</p>
   </li>
</ul>
