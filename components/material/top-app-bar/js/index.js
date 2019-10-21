
(function(w, doc) {
  'use strict';

  // Create a template element
  const template = doc.createElement('template'),
    menuButtonTemplate = doc.createElement('template');

  menuButtonTemplate.innerHTML = `
   <button id="menuButton" class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>
  `;

  template.innerHTML = ` 
<link href="../css/style.css" rel="stylesheet" />
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
      return ['title', 'hideMenu', 'menuicon', 'short', 'collapsed', 'fixed', 'prominent', 'dense', 'standard'];
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
