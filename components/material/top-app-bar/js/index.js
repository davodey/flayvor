
(function(w, doc) {
  'use strict';

  // Create a template element
  const template = doc.createElement('template'),
    menuButtonTemplate = doc.createElement('template');

  menuButtonTemplate.innerHTML = `
   <button id="menuButton" class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>
  `;

  template.innerHTML = ` 
<style>
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}@font-face{font-family:Material Icons;font-style:normal;font-weight:400}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host .mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee);color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;z-index:4}:host .mdc-top-app-bar .mdc-top-app-bar__action-item,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary,#fff)}:host .mdc-top-app-bar .mdc-top-app-bar__action-item:after,:host .mdc-top-app-bar .mdc-top-app-bar__action-item:before,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:after,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:before{background-color:#fff}@supports not (-ms-ime-align:auto){:host .mdc-top-app-bar .mdc-top-app-bar__action-item:after,:host .mdc-top-app-bar .mdc-top-app-bar__action-item:before,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:after,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:before{background-color:var(--mdc-theme-on-primary,#fff)}}:host .mdc-top-app-bar .mdc-top-app-bar__action-item:hover:before,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover:before{opacity:.08}:host .mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused:before,:host .mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus:before,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused:before,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}:host .mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):after,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}:host .mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active:after,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}:host .mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}:host .mdc-top-app-bar__row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:64px}:host .mdc-top-app-bar__section{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-width:0;padding:8px 12px;z-index:1}:host .mdc-top-app-bar__section--align-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}:host .mdc-top-app-bar__section--align-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}:host .mdc-top-app-bar__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}:host .mdc-top-app-bar__title[dir=rtl],[dir=rtl] :host .mdc-top-app-bar__title{padding-left:0;padding-right:20px}:host.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}:host.mdc-top-app-bar--short-collapsed[dir=rtl],[dir=rtl] :host.mdc-top-app-bar--short-collapsed{border-radius:0 0 0 24px}:host .mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;-webkit-transition:width .25s cubic-bezier(.4,0,.2,1);transition:width .25s cubic-bezier(.4,0,.2,1)}:host .mdc-top-app-bar--short[dir=rtl],[dir=rtl] :host .mdc-top-app-bar--short{right:0;left:auto}:host .mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}:host .mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}:host .mdc-top-app-bar--short .mdc-top-app-bar__title{-webkit-transition:opacity .2s cubic-bezier(.4,0,.2,1);transition:opacity .2s cubic-bezier(.4,0,.2,1);opacity:1}:host .mdc-top-app-bar--short-collapsed{-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);width:56px;-webkit-transition:width .3s cubic-bezier(.4,0,.2,1);transition:width .3s cubic-bezier(.4,0,.2,1)}:host .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}:host .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{-webkit-transition:padding .15s cubic-bezier(.4,0,.2,1);transition:padding .15s cubic-bezier(.4,0,.2,1)}:host .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}:host .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}:host .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl],[dir=rtl] :host .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:12px;padding-right:0}:host .mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}:host .mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}:host .mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}:host .mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl],[dir=rtl] :host .mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:0;padding-right:12px}:host .mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}:host .mdc-top-app-bar--prominent .mdc-top-app-bar__title{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;padding-bottom:2px}:host .mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,:host .mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}:host .mdc-top-app-bar--fixed,:host .mdc-top-app-bar--fixed-scrolled{-webkit-transition:-webkit-box-shadow .2s linear;transition:-webkit-box-shadow .2s linear;transition:box-shadow .2s linear;transition:box-shadow .2s linear,-webkit-box-shadow .2s linear}:host .mdc-top-app-bar--fixed-scrolled{-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}:host .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}:host .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}:host .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}:host .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl],[dir=rtl] :host .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:0;padding-right:20px}:host .mdc-top-app-bar--fixed-adjust{padding-top:64px}:host .mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}:host .mdc-top-app-bar--short-fixed-adjust{padding-top:56px}:host .mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}:host .mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media (max-width:599px){:host .mdc-top-app-bar__row{height:56px}:host .mdc-top-app-bar__section{padding:4px}:host .mdc-top-app-bar--short{-webkit-transition:width .2s cubic-bezier(.4,0,.2,1);transition:width .2s cubic-bezier(.4,0,.2,1)}:host .mdc-top-app-bar--short-collapsed{-webkit-transition:width .25s cubic-bezier(.4,0,.2,1);transition:width .25s cubic-bezier(.4,0,.2,1)}:host .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}:host .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl],[dir=rtl] :host .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:12px;padding-right:0}:host .mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}:host .mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host .mdc-icon-button{width:48px;height:48px;padding:12px;font-size:24px;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;outline:none;background-color:transparent;text-decoration:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host .mdc-icon-button img,:host .mdc-icon-button svg{width:24px;height:24px}:host .mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38));cursor:default;pointer-events:none}:host .mdc-icon-button__icon{display:inline-block}:host .mdc-icon-button--on .mdc-icon-button__icon,:host .mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}:host .mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}:host .mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}:host .mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}:host .mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host .mdc-icon-button:after,:host .mdc-icon-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}:host .mdc-icon-button:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:host .mdc-icon-button.mdc-ripple-upgraded:before{-webkit-transform:scale(var(--mdc-ripple-fg-scale,1));transform:scale(var(--mdc-ripple-fg-scale,1))}:host .mdc-icon-button.mdc-ripple-upgraded:after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}:host .mdc-icon-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}:host .mdc-icon-button.mdc-ripple-upgraded--foreground-activation:after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:host .mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation:after{-webkit-animation:mdc-ripple-fg-opacity-out .15s;animation:mdc-ripple-fg-opacity-out .15s;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}:host .mdc-icon-button:after,:host .mdc-icon-button:before{top:0;left:0;width:100%;height:100%}:host .mdc-icon-button.mdc-ripple-upgraded:after,:host .mdc-icon-button.mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}:host .mdc-icon-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}:host .mdc-icon-button:after,:host .mdc-icon-button:before{background-color:#000}:host .mdc-icon-button:hover:before{opacity:.04}:host .mdc-icon-button.mdc-ripple-upgraded--background-focused:before,:host .mdc-icon-button:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}:host .mdc-icon-button:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}:host .mdc-icon-button:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}:host .mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}:host .mdc-top-app-bar{background-color:inherit;color:inherit}:host .mdc-icon-button{color:inherit;fill:currentColor;color:inherit!important}:host .hidden{display:none!important}:host .mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}:host .mdc-top-app-bar.static{position:static}:host .material-icons{font-family:Material Icons}
</style>
<header class="mdc-top-app-bar">
  <div class="mdc-top-app-bar__row">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start menu-button">
      <span class="mdc-top-app-bar__title"></span>
      <slot name="left"></slot>
    </section>
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <slot name="right"></slot>
      </section>
  </div>
</header>
`;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'flayvor-top-app-bar');

  class AppBarTop extends HTMLElement {
    static get observedAttributes() {
      return ['title', 'hideMenu', 'menuicon', 'short', 'collapsed', 'fixed', 'prominent', 'dense', 'standard', 'position'];
    }

    get position () {
      return this.getAttribute('position');
    }

    get isStandard() {
      return this.hasAttribute('standard');
    }

    get isDense () {
      return this.hasAttribute('dense')
    }

    get isProminent() {
      return this.hasAttribute('prominent');
    }

    get isFixed () {
      return this.hasAttribute('fixed')
    }

    get isShort () {
      return this.hasAttribute('short');
    }

    get menuIcon () {
      return this.getAttribute('menuicon');
    }

    get title() {
      return this.getAttribute('title');
    }

    get hideMenu() {
      return this.hasAttribute('hideMenu')
    }

    set menuIcon(value) {
      this.setAttribute('menuicon', value)
    }

    mdcInit () {
      this.MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;
      this.topAppBar =  new mdc.topAppBar.MDCTopAppBar.attachTo(this.topAppBarElement);
    }

    clearStyles () {
      this.topAppBarElement.removeAttribute('class');
      this.topAppBarElement.classList.add('mdc-top-app-bar');
    }

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const clone = template.content.cloneNode(true),
        menuButtonClone = menuButtonTemplate.content.cloneNode(true),
        menuButtonTarget = clone.querySelector('.menu-button');

      menuButtonTarget.insertBefore(menuButtonClone, menuButtonTarget.childNodes[0]);

      // instantiate MDC top app bar
      this.MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;

      this.topAppBarElement = clone.querySelector('.mdc-top-app-bar');
      this.topAppBar =  new mdc.topAppBar.MDCTopAppBar.attachTo(this);

      this.appTitle = clone.querySelector('.mdc-top-app-bar__title');
      this.menuIconNode = clone.querySelector('#menuButton');
      this.shadowRoot.appendChild(clone);

    }

    connectedCallback() {
      this.appTitle.innerHTML = this.title;
      this.menuIconNode.innerHTML = this.menuIcon;

      /** Any changes to what the component renders should be done here. */
      if (this.isDense || this.isProminent || this.isStandard) {
        this.mdcInit();
      }

      if (!this.hideMenu) {
        console.log('topappbar', this.topAppBar)
        this.topAppBar.listen('MDCTopAppBar:nav', () => {
          this.dispatchEvent(
            new CustomEvent('MDCTopAppBar:nav', {
              bubbles: true
            })
          );
        });
      } else {
        const button = this.shadowRoot.querySelector('#menuButton');
        button.classList.add('hidden');
      }

      if (this.position === 'static') {
        this.topAppBarElement.classList.add('static')
      }



      // Get the attributes set by the consumer
      /** Event listeners should also be bound here. */
    }
    attributeChangedCallback(name, oldValue, newValue) {

      if (name === 'dense' && oldValue === null) {
        this.clearStyles();
        this.topAppBarElement.classList.add('mdc-top-app-bar--dense')

      }


      if (name === 'prominent' && oldValue === null) {
        this.clearStyles();
        this.topAppBarElement.classList.add('mdc-top-app-bar--prominent');
      }


      if (name === 'fixed' && oldValue === null) {
        this.clearStyles();
        this.topAppBarElement.classList.add('mdc-top-app-bar--fixed');
        this.mdcInit()
      }


      if (name === 'short' && oldValue === null) {
        this.clearStyles();
        this.topAppBarElement.classList.add('mdc-top-app-bar--short');
        this.mdcInit()
      }


      if (name === 'collapsed') {
        this.clearStyles();
        this.topAppBarElement.classList.add('mdc-top-app-bar--short');
        this.topAppBarElement.classList.add('mdc-top-app-bar--short-collapsed');
        this.mdcInit()
      }

      if (name === 'title' && oldValue !== newValue) {
        this.appTitle.innerHTML = this.title;
      }

      if (name ==='menuicon' && oldValue !== newValue) {
        this.menuIconNode.innerHTML = this.menuIcon;
      }
    }
  }
  customElements.define('flayvor-top-app-bar', AppBarTop);
})(window, document);
