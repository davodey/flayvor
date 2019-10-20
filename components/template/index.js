(function(w, doc) {
  'use strict';

  // Create a template element
  const template = doc.createElement('template');

  //Styles must be copied from the css file
  // and pasted between the style tags below

  // Other markup should be written after the closing tag.

  template.innerHTML = ` 

`;

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'flayvor-example');

  /** Any helper functions that do not need to be part of the class
   * can be declared here, before the class is defined.
   */

  class Example extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      const clone = template.content.cloneNode(true);

      /** If we need references to the children of the component,
       * we can create them here. If they are created elsewhere,
       * they will not be available our lifecycle methods.
       */

      // this.whatever = child of component

      /** After all this, we can append our clone to the shadowRoot */
      this.shadowRoot.appendChild(clone);

      /** We should also bind any event listeners to `this` so their
       * references do not get lost.
       */
      this.handleClick = this.handleClick.bind(this);
    }

    connectedCallback() {
      /** Any changes to what the component renders should be done here. */

        // Get the attributes set by the consumer

      /** Event listeners should also be bound here. */
    }

    diconnectedCallback() {

    }

    handleClick() {
    }
  }
  customElements.define('flayvor-example', Example);
})(window, document);

