var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/material-components/material-components-web/blob/master/LICENSE
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["topAppBar"] = factory();else root["mdc"] = root["mdc"] || {}, root["mdc"]["topAppBar"] = factory();
})(this, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // define __esModule on exports
            /******/__webpack_require__.r = function (exports) {
                /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                    /******/
                }
                /******/Object.defineProperty(exports, '__esModule', { value: true });
                /******/
            };
            /******/
            /******/ // create a fake namespace object
            /******/ // mode & 1: value is a module id, require it
            /******/ // mode & 2: merge all properties of value into the ns
            /******/ // mode & 4: return value when already ns object
            /******/ // mode & 8|1: behave like require
            /******/__webpack_require__.t = function (value, mode) {
                /******/if (mode & 1) value = __webpack_require__(value);
                /******/if (mode & 8) return value;
                /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
                /******/var ns = Object.create(null);
                /******/__webpack_require__.r(ns);
                /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
                    __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                    }.bind(null, key));
                } /******/return ns;
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = "./packages/mdc-top-app-bar/index.ts");
            /******/
        }(
        /************************************************************************/
        /******/{

            /***/"./packages/mdc-base/component.ts":
            /*!****************************************!*\
              !*** ./packages/mdc-base/component.ts ***!
              \****************************************/
            /*! no static exports found */
            /***/function packagesMdcBaseComponentTs(module, exports, __webpack_require__) {

                "use strict";

                /**
                 * @license
                 * Copyright 2016 Google Inc.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 */

                var __read = this && this.__read || function (o, n) {
                    var m = typeof Symbol === "function" && o[Symbol.iterator];
                    if (!m) return o;
                    var i = m.call(o),
                        r,
                        ar = [],
                        e;
                    try {
                        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
                            ar.push(r.value);
                        }
                    } catch (error) {
                        e = { error: error };
                    } finally {
                        try {
                            if (r && !r.done && (m = i["return"])) m.call(i);
                        } finally {
                            if (e) throw e.error;
                        }
                    }
                    return ar;
                };
                var __spread = this && this.__spread || function () {
                    for (var ar = [], i = 0; i < arguments.length; i++) {
                        ar = ar.concat(__read(arguments[i]));
                    }return ar;
                };
                Object.defineProperty(exports, "__esModule", { value: true });
                var foundation_1 = __webpack_require__( /*! ./foundation */"./packages/mdc-base/foundation.ts");
                var MDCComponent = /** @class */function () {
                    function MDCComponent(root, foundation) {
                        var args = [];
                        for (var _i = 2; _i < arguments.length; _i++) {
                            args[_i - 2] = arguments[_i];
                        }
                        this.root_ = root;
                        this.initialize.apply(this, __spread(args));
                        // Note that we initialize foundation here and not within the constructor's default param so that
                        // this.root_ is defined and can be used within the foundation class.
                        this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
                        this.foundation_.init();
                        this.initialSyncWithDOM();
                    }
                    MDCComponent.attachTo = function (root) {
                        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
                        // returns an instantiated component with its root set to that element. Also note that in the cases of
                        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
                        // from getDefaultFoundation().
                        return new MDCComponent(root, new foundation_1.MDCFoundation({}));
                    };
                    /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */
                    MDCComponent.prototype.initialize = function () {
                        var _args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            _args[_i] = arguments[_i];
                        }
                        // Subclasses can override this to do any additional setup work that would be considered part of a
                        // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
                        // initialized. Any additional arguments besides root and foundation will be passed in here.
                    };
                    MDCComponent.prototype.getDefaultFoundation = function () {
                        // Subclasses must override this method to return a properly configured foundation class for the
                        // component.
                        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
                    };
                    MDCComponent.prototype.initialSyncWithDOM = function () {
                        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
                        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
                        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
                        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
                    };
                    MDCComponent.prototype.destroy = function () {
                        // Subclasses may implement this method to release any resources / deregister any listeners they have
                        // attached. An example of this might be deregistering a resize event from the window object.
                        this.foundation_.destroy();
                    };
                    MDCComponent.prototype.listen = function (evtType, handler, options) {
                        this.root_.addEventListener(evtType, handler, options);
                    };
                    MDCComponent.prototype.unlisten = function (evtType, handler, options) {
                        this.root_.removeEventListener(evtType, handler, options);
                    };
                    /**
                     * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
                     */
                    MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
                        if (shouldBubble === void 0) {
                            shouldBubble = false;
                        }
                        var evt;
                        if (typeof CustomEvent === 'function') {
                            evt = new CustomEvent(evtType, {
                                bubbles: shouldBubble,
                                detail: evtData
                            });
                        } else {
                            evt = document.createEvent('CustomEvent');
                            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
                        }
                        this.root_.dispatchEvent(evt);
                    };
                    return MDCComponent;
                }();
                exports.MDCComponent = MDCComponent;
                // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
                exports.default = MDCComponent;

                /***/
            },

            /***/"./packages/mdc-base/foundation.ts":
            /*!*****************************************!*\
              !*** ./packages/mdc-base/foundation.ts ***!
              \*****************************************/
            /*! no static exports found */
            /***/function packagesMdcBaseFoundationTs(module, exports, __webpack_require__) {

                "use strict";

                /**
                 * @license
                 * Copyright 2016 Google Inc.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 */

                Object.defineProperty(exports, "__esModule", { value: true });
                var MDCFoundation = /** @class */function () {
                    function MDCFoundation(adapter) {
                        if (adapter === void 0) {
                            adapter = {};
                        }
                        this.adapter_ = adapter;
                    }
                    Object.defineProperty(MDCFoundation, "cssClasses", {
                        get: function get() {
                            // Classes extending MDCFoundation should implement this method to return an object which exports every
                            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
                            return {};
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MDCFoundation, "strings", {
                        get: function get() {
                            // Classes extending MDCFoundation should implement this method to return an object which exports all
                            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
                            return {};
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MDCFoundation, "numbers", {
                        get: function get() {
                            // Classes extending MDCFoundation should implement this method to return an object which exports all
                            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
                            return {};
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MDCFoundation, "defaultAdapter", {
                        get: function get() {
                            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
                            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
                            // validation.
                            return {};
                        },
                        enumerable: true,
                        configurable: true
                    });
                    MDCFoundation.prototype.init = function () {
                        // Subclasses should override this method to perform initialization routines (registering events, etc.)
                    };
                    MDCFoundation.prototype.destroy = function () {
                        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
                    };
                    return MDCFoundation;
                }();
                exports.MDCFoundation = MDCFoundation;
                // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
                exports.default = MDCFoundation;

                /***/
            },

            /***/"./packages/mdc-dom/events.ts":
            /*!************************************!*\
              !*** ./packages/mdc-dom/events.ts ***!
              \************************************/
            /*! no static exports found */
            /***/function packagesMdcDomEventsTs(module, exports, __webpack_require__) {

                "use strict";

                /**
                 * @license
                 * Copyright 2019 Google Inc.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 */

                Object.defineProperty(exports, "__esModule", { value: true });
                /**
                 * Stores result from applyPassive to avoid redundant processing to detect
                 * passive event listener support.
                 */
                var supportsPassive_;
                /**
                 * Determine whether the current browser supports passive event listeners, and
                 * if so, use them.
                 */
                function applyPassive(globalObj, forceRefresh) {
                    if (globalObj === void 0) {
                        globalObj = window;
                    }
                    if (forceRefresh === void 0) {
                        forceRefresh = false;
                    }
                    if (supportsPassive_ === undefined || forceRefresh) {
                        var isSupported_1 = false;
                        try {
                            globalObj.document.addEventListener('test', function () {
                                return undefined;
                            }, {
                                get passive() {
                                    isSupported_1 = true;
                                    return isSupported_1;
                                }
                            });
                        } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.
                        supportsPassive_ = isSupported_1;
                    }
                    return supportsPassive_ ? { passive: true } : false;
                }
                exports.applyPassive = applyPassive;

                /***/
            },

            /***/"./packages/mdc-dom/ponyfill.ts":
            /*!**************************************!*\
              !*** ./packages/mdc-dom/ponyfill.ts ***!
              \**************************************/
            /*! no static exports found */
            /***/function packagesMdcDomPonyfillTs(module, exports, __webpack_require__) {

                "use strict";

                /**
                 * @license
                 * Copyright 2018 Google Inc.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 */

                Object.defineProperty(exports, "__esModule", { value: true });
                /**
                 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
                 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
                 */
                function closest(element, selector) {
                    if (element.closest) {
                        return element.closest(selector);
                    }
                    var el = element;
                    while (el) {
                        if (matches(el, selector)) {
                            return el;
                        }
                        el = el.parentElement;
                    }
                    return null;
                }
                exports.closest = closest;
                function matches(element, selector) {
                    var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
                    return nativeMatches.call(element, selector);
                }
                exports.matches = matches;

                /***/
            },

            /***/"./packages/mdc-ripple/component.ts":
            /*!******************************************!*\
              !*** ./packages/mdc-ripple/component.ts ***!
              \******************************************/
            /*! no static exports found */
            /***/function packagesMdcRippleComponentTs(module, exports, __webpack_require__) {

                "use strict";

                /**
                 * @license
                 * Copyright 2016 Google Inc.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 */

                var __extends = this && this.__extends || function () {
                    var _extendStatics = function extendStatics(d, b) {
                        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
                            d.__proto__ = b;
                        } || function (d, b) {
                            for (var p in b) {
                                if (b.hasOwnProperty(p)) d[p] = b[p];
                            }
                        };
                        return _extendStatics(d, b);
                    };
                    return function (d, b) {
                        _extendStatics(d, b);
                        function __() {
                            this.constructor = d;
                        }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                }();
                var __importStar = this && this.__importStar || function (mod) {
                    if (mod && mod.__esModule) return mod;
                    var result = {};
                    if (mod != null) for (var k in mod) {
                        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
                    }result["default"] = mod;
                    return result;
                };
                Object.defineProperty(exports, "__esModule", { value: true });
                var component_1 = __webpack_require__( /*! @material/base/component */"./packages/mdc-base/component.ts");
                var events_1 = __webpack_require__( /*! @material/dom/events */"./packages/mdc-dom/events.ts");
                var ponyfill_1 = __webpack_require__( /*! @material/dom/ponyfill */"./packages/mdc-dom/ponyfill.ts");
                var foundation_1 = __webpack_require__( /*! ./foundation */"./packages/mdc-ripple/foundation.ts");
                var util = __importStar(__webpack_require__( /*! ./util */"./packages/mdc-ripple/util.ts"));
                var MDCRipple = /** @class */function (_super) {
                    __extends(MDCRipple, _super);
                    function MDCRipple() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.disabled = false;
                        return _this;
                    }
                    MDCRipple.attachTo = function (root, opts) {
                        if (opts === void 0) {
                            opts = { isUnbounded: undefined };
                        }
                        var ripple = new MDCRipple(root);
                        // Only override unbounded behavior if option is explicitly specified
                        if (opts.isUnbounded !== undefined) {
                            ripple.unbounded = opts.isUnbounded;
                        }
                        return ripple;
                    };
                    MDCRipple.createAdapter = function (instance) {
                        return {
                            addClass: function addClass(className) {
                                return instance.root_.classList.add(className);
                            },
                            browserSupportsCssVars: function browserSupportsCssVars() {
                                return util.supportsCssVariables(window);
                            },
                            computeBoundingRect: function computeBoundingRect() {
                                return instance.root_.getBoundingClientRect();
                            },
                            containsEventTarget: function containsEventTarget(target) {
                                return instance.root_.contains(target);
                            },
                            deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
                                return document.documentElement.removeEventListener(evtType, handler, events_1.applyPassive());
                            },
                            deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                                return instance.root_.removeEventListener(evtType, handler, events_1.applyPassive());
                            },
                            deregisterResizeHandler: function deregisterResizeHandler(handler) {
                                return window.removeEventListener('resize', handler);
                            },
                            getWindowPageOffset: function getWindowPageOffset() {
                                return { x: window.pageXOffset, y: window.pageYOffset };
                            },
                            isSurfaceActive: function isSurfaceActive() {
                                return ponyfill_1.matches(instance.root_, ':active');
                            },
                            isSurfaceDisabled: function isSurfaceDisabled() {
                                return Boolean(instance.disabled);
                            },
                            isUnbounded: function isUnbounded() {
                                return Boolean(instance.unbounded);
                            },
                            registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
                                return document.documentElement.addEventListener(evtType, handler, events_1.applyPassive());
                            },
                            registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                                return instance.root_.addEventListener(evtType, handler, events_1.applyPassive());
                            },
                            registerResizeHandler: function registerResizeHandler(handler) {
                                return window.addEventListener('resize', handler);
                            },
                            removeClass: function removeClass(className) {
                                return instance.root_.classList.remove(className);
                            },
                            updateCssVariable: function updateCssVariable(varName, value) {
                                return instance.root_.style.setProperty(varName, value);
                            }
                        };
                    };
                    Object.defineProperty(MDCRipple.prototype, "unbounded", {
                        get: function get() {
                            return Boolean(this.unbounded_);
                        },
                        set: function set(unbounded) {
                            this.unbounded_ = Boolean(unbounded);
                            this.setUnbounded_();
                        },
                        enumerable: true,
                        configurable: true
                    });
                    MDCRipple.prototype.activate = function () {
                        this.foundation_.activate();
                    };
                    MDCRipple.prototype.deactivate = function () {
                        this.foundation_.deactivate();
                    };
                    MDCRipple.prototype.layout = function () {
                        this.foundation_.layout();
                    };
                    MDCRipple.prototype.getDefaultFoundation = function () {
                        return new foundation_1.MDCRippleFoundation(MDCRipple.createAdapter(this));
                    };
                    MDCRipple.prototype.initialSyncWithDOM = function () {
                        var root = this.root_;
                        this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;
                    };
                    /**
                     * Closure Compiler throws an access control error when directly accessing a
                     * protected or private property inside a getter/setter, like unbounded above.
                     * By accessing the protected property inside a method, we solve that problem.
                     * That's why this function exists.
                     */
                    MDCRipple.prototype.setUnbounded_ = function () {
                        this.foundation_.setUnbounded(Boolean(this.unbounded_));
                    };
                    return MDCRipple;
                }(component_1.MDCComponent);
                exports.MDCRipple = MDCRipple;

                /***/
            },

            /***/"./packages/mdc-ripple/constants.ts":
            /*!******************************************!*\
              !*** ./packages/mdc-ripple/constants.ts ***!
              \******************************************/
            /*! no static exports found */
            /***/function packagesMdcRippleConstantsTs(module, exports, __webpack_require__) {

                "use strict";

                /**
                 * @license
                 * Copyright 2016 Google Inc.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 */

                Object.defineProperty(exports, "__esModule", { value: true });
                exports.cssClasses = {
                    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
                    // given that it's an 'upgrade' to an existing component. That being said it is the root
                    // CSS class that all other CSS classes derive from.
                    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
                    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
                    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
                    ROOT: 'mdc-ripple-upgraded',
                    UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
                };
                exports.strings = {
                    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
                    VAR_FG_SIZE: '--mdc-ripple-fg-size',
                    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
                    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
                    VAR_LEFT: '--mdc-ripple-left',
                    VAR_TOP: '--mdc-ripple-top'
                };
                exports.numbers = {
                    DEACTIVATION_TIMEOUT_MS: 225,
                    FG_DEACTIVATION_MS: 150,
                    INITIAL_ORIGIN_SCALE: 0.6,
                    PADDING: 10,
                    TAP_DELAY_MS: 300
                };

                /***/
            },

            /***/"./packages/mdc-ripple/foundation.ts":
            /*!*******************************************!*\
              !*** ./packages/mdc-ripple/foundation.ts ***!
              \*******************************************/
            /*! no static exports found */
            /***/function packagesMdcRippleFoundationTs(module, exports, __webpack_require__) {

                "use strict";

                /**
                 * @license
                 * Copyright 2016 Google Inc.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 */

                var __extends = this && this.__extends || function () {
                    var _extendStatics = function extendStatics(d, b) {
                        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
                            d.__proto__ = b;
                        } || function (d, b) {
                            for (var p in b) {
                                if (b.hasOwnProperty(p)) d[p] = b[p];
                            }
                        };
                        return _extendStatics(d, b);
                    };
                    return function (d, b) {
                        _extendStatics(d, b);
                        function __() {
                            this.constructor = d;
                        }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                }();
                var __assign = this && this.__assign || function () {
                    __assign = Object.assign || function (t) {
                        for (var s, i = 1, n = arguments.length; i < n; i++) {
                            s = arguments[i];
                            for (var p in s) {
                                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                            }
                        }
                        return t;
                    };
                    return __assign.apply(this, arguments);
                };
                Object.defineProperty(exports, "__esModule", { value: true });
                var foundation_1 = __webpack_require__( /*! @material/base/foundation */"./packages/mdc-base/foundation.ts");
                var constants_1 = __webpack_require__( /*! ./constants */"./packages/mdc-ripple/constants.ts");
                var util_1 = __webpack_require__( /*! ./util */"./packages/mdc-ripple/util.ts");
                // Activation events registered on the root element of each instance for activation
                var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];
                // Deactivation events registered on documentElement when a pointer-related down event occurs
                var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];
                // simultaneous nested activations
                var activatedTargets = [];
                var MDCRippleFoundation = /** @class */function (_super) {
                    __extends(MDCRippleFoundation, _super);
                    function MDCRippleFoundation(adapter) {
                        var _this = _super.call(this, __assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;
                        _this.activationAnimationHasEnded_ = false;
                        _this.activationTimer_ = 0;
                        _this.fgDeactivationRemovalTimer_ = 0;
                        _this.fgScale_ = '0';
                        _this.frame_ = { width: 0, height: 0 };
                        _this.initialSize_ = 0;
                        _this.layoutFrame_ = 0;
                        _this.maxRadius_ = 0;
                        _this.unboundedCoords_ = { left: 0, top: 0 };
                        _this.activationState_ = _this.defaultActivationState_();
                        _this.activationTimerCallback_ = function () {
                            _this.activationAnimationHasEnded_ = true;
                            _this.runDeactivationUXLogicIfReady_();
                        };
                        _this.activateHandler_ = function (e) {
                            return _this.activate_(e);
                        };
                        _this.deactivateHandler_ = function () {
                            return _this.deactivate_();
                        };
                        _this.focusHandler_ = function () {
                            return _this.handleFocus();
                        };
                        _this.blurHandler_ = function () {
                            return _this.handleBlur();
                        };
                        _this.resizeHandler_ = function () {
                            return _this.layout();
                        };
                        return _this;
                    }
                    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
                        get: function get() {
                            return constants_1.cssClasses;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MDCRippleFoundation, "strings", {
                        get: function get() {
                            return constants_1.strings;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MDCRippleFoundation, "numbers", {
                        get: function get() {
                            return constants_1.numbers;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
                        get: function get() {
                            return {
                                addClass: function addClass() {
                                    return undefined;
                                },
                                browserSupportsCssVars: function browserSupportsCssVars() {
                                    return true;
                                },
                                computeBoundingRect: function computeBoundingRect() {
                                    return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
                                },
                                containsEventTarget: function containsEventTarget() {
                                    return true;
                                },
                                deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {
                                    return undefined;
                                },
                                deregisterInteractionHandler: function deregisterInteractionHandler() {
                                    return undefined;
                                },
                                deregisterResizeHandler: function deregisterResizeHandler() {
                                    return undefined;
                                },
                                getWindowPageOffset: function getWindowPageOffset() {
                                    return { x: 0, y: 0 };
                                },
                                isSurfaceActive: function isSurfaceActive() {
                                    return true;
                                },
                                isSurfaceDisabled: function isSurfaceDisabled() {
                                    return true;
                                },
                                isUnbounded: function isUnbounded() {
                                    return true;
                                },
                                registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {
                                    return undefined;
                                },
                                registerInteractionHandler: function registerInteractionHandler() {
                                    return undefined;
                                },
                                registerResizeHandler: function registerResizeHandler() {
                                    return undefined;
                                },
                                removeClass: function removeClass() {
                                    return undefined;
                                },
                                updateCssVariable: function updateCssVariable() {
                                    return undefined;
                                }
                            };
                        },
                        enumerable: true,
                        configurable: true
                    });
                    MDCRippleFoundation.prototype.init = function () {
                        var _this = this;
                        var supportsPressRipple = this.supportsPressRipple_();
                        this.registerRootHandlers_(supportsPressRipple);
                        if (supportsPressRipple) {
                            var _a = MDCRippleFoundation.cssClasses,
                                ROOT_1 = _a.ROOT,
                                UNBOUNDED_1 = _a.UNBOUNDED;
                            requestAnimationFrame(function () {
                                _this.adapter_.addClass(ROOT_1);
                                if (_this.adapter_.isUnbounded()) {
                                    _this.adapter_.addClass(UNBOUNDED_1);
                                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                                    _this.layoutInternal_();
                                }
                            });
                        }
                    };
                    MDCRippleFoundation.prototype.destroy = function () {
                        var _this = this;
                        if (this.supportsPressRipple_()) {
                            if (this.activationTimer_) {
                                clearTimeout(this.activationTimer_);
                                this.activationTimer_ = 0;
                                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
                            }
                            if (this.fgDeactivationRemovalTimer_) {
                                clearTimeout(this.fgDeactivationRemovalTimer_);
                                this.fgDeactivationRemovalTimer_ = 0;
                                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
                            }
                            var _a = MDCRippleFoundation.cssClasses,
                                ROOT_2 = _a.ROOT,
                                UNBOUNDED_2 = _a.UNBOUNDED;
                            requestAnimationFrame(function () {
                                _this.adapter_.removeClass(ROOT_2);
                                _this.adapter_.removeClass(UNBOUNDED_2);
                                _this.removeCssVars_();
                            });
                        }
                        this.deregisterRootHandlers_();
                        this.deregisterDeactivationHandlers_();
                    };
                    /**
                     * @param evt Optional event containing position information.
                     */
                    MDCRippleFoundation.prototype.activate = function (evt) {
                        this.activate_(evt);
                    };
                    MDCRippleFoundation.prototype.deactivate = function () {
                        this.deactivate_();
                    };
                    MDCRippleFoundation.prototype.layout = function () {
                        var _this = this;
                        if (this.layoutFrame_) {
                            cancelAnimationFrame(this.layoutFrame_);
                        }
                        this.layoutFrame_ = requestAnimationFrame(function () {
                            _this.layoutInternal_();
                            _this.layoutFrame_ = 0;
                        });
                    };
                    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
                        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
                        if (unbounded) {
                            this.adapter_.addClass(UNBOUNDED);
                        } else {
                            this.adapter_.removeClass(UNBOUNDED);
                        }
                    };
                    MDCRippleFoundation.prototype.handleFocus = function () {
                        var _this = this;
                        requestAnimationFrame(function () {
                            return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                        });
                    };
                    MDCRippleFoundation.prototype.handleBlur = function () {
                        var _this = this;
                        requestAnimationFrame(function () {
                            return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
                        });
                    };
                    /**
                     * We compute this property so that we are not querying information about the client
                     * until the point in time where the foundation requests it. This prevents scenarios where
                     * client-side feature-detection may happen too early, such as when components are rendered on the server
                     * and then initialized at mount time on the client.
                     */
                    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
                        return this.adapter_.browserSupportsCssVars();
                    };
                    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
                        return {
                            activationEvent: undefined,
                            hasDeactivationUXRun: false,
                            isActivated: false,
                            isProgrammatic: false,
                            wasActivatedByPointer: false,
                            wasElementMadeActive: false
                        };
                    };
                    /**
                     * supportsPressRipple Passed from init to save a redundant function call
                     */
                    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
                        var _this = this;
                        if (supportsPressRipple) {
                            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                                _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
                            });
                            if (this.adapter_.isUnbounded()) {
                                this.adapter_.registerResizeHandler(this.resizeHandler_);
                            }
                        }
                        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
                        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
                    };
                    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
                        var _this = this;
                        if (evt.type === 'keydown') {
                            this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
                        } else {
                            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                                _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                            });
                        }
                    };
                    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
                        var _this = this;
                        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                            _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
                        });
                        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
                        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
                        if (this.adapter_.isUnbounded()) {
                            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
                        }
                    };
                    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
                        var _this = this;
                        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
                        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                            _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
                        });
                    };
                    MDCRippleFoundation.prototype.removeCssVars_ = function () {
                        var _this = this;
                        var rippleStrings = MDCRippleFoundation.strings;
                        var keys = Object.keys(rippleStrings);
                        keys.forEach(function (key) {
                            if (key.indexOf('VAR_') === 0) {
                                _this.adapter_.updateCssVariable(rippleStrings[key], null);
                            }
                        });
                    };
                    MDCRippleFoundation.prototype.activate_ = function (evt) {
                        var _this = this;
                        if (this.adapter_.isSurfaceDisabled()) {
                            return;
                        }
                        var activationState = this.activationState_;
                        if (activationState.isActivated) {
                            return;
                        }
                        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
                        var previousActivationEvent = this.previousActivationEvent_;
                        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
                        if (isSameInteraction) {
                            return;
                        }
                        activationState.isActivated = true;
                        activationState.isProgrammatic = evt === undefined;
                        activationState.activationEvent = evt;
                        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
                        var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
                            return _this.adapter_.containsEventTarget(target);
                        });
                        if (hasActivatedChild) {
                            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
                            this.resetActivationState_();
                            return;
                        }
                        if (evt !== undefined) {
                            activatedTargets.push(evt.target);
                            this.registerDeactivationHandlers_(evt);
                        }
                        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
                        if (activationState.wasElementMadeActive) {
                            this.animateActivation_();
                        }
                        requestAnimationFrame(function () {
                            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
                            activatedTargets = [];
                            if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
                                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                                // active states inconsistently when they're called within event handling code:
                                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                                // variable is set within a rAF callback for a submit button interaction (#2241).
                                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                                if (activationState.wasElementMadeActive) {
                                    _this.animateActivation_();
                                }
                            }
                            if (!activationState.wasElementMadeActive) {
                                // Reset activation state immediately if element was not made active.
                                _this.activationState_ = _this.defaultActivationState_();
                            }
                        });
                    };
                    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
                        return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
                    };
                    MDCRippleFoundation.prototype.animateActivation_ = function () {
                        var _this = this;
                        var _a = MDCRippleFoundation.strings,
                            VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
                            VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
                        var _b = MDCRippleFoundation.cssClasses,
                            FG_DEACTIVATION = _b.FG_DEACTIVATION,
                            FG_ACTIVATION = _b.FG_ACTIVATION;
                        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
                        this.layoutInternal_();
                        var translateStart = '';
                        var translateEnd = '';
                        if (!this.adapter_.isUnbounded()) {
                            var _c = this.getFgTranslationCoordinates_(),
                                startPoint = _c.startPoint,
                                endPoint = _c.endPoint;
                            translateStart = startPoint.x + "px, " + startPoint.y + "px";
                            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
                        }
                        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
                        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
                        // Cancel any ongoing activation/deactivation animations
                        clearTimeout(this.activationTimer_);
                        clearTimeout(this.fgDeactivationRemovalTimer_);
                        this.rmBoundedActivationClasses_();
                        this.adapter_.removeClass(FG_DEACTIVATION);
                        // Force layout in order to re-trigger the animation.
                        this.adapter_.computeBoundingRect();
                        this.adapter_.addClass(FG_ACTIVATION);
                        this.activationTimer_ = setTimeout(function () {
                            return _this.activationTimerCallback_();
                        }, DEACTIVATION_TIMEOUT_MS);
                    };
                    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
                        var _a = this.activationState_,
                            activationEvent = _a.activationEvent,
                            wasActivatedByPointer = _a.wasActivatedByPointer;
                        var startPoint;
                        if (wasActivatedByPointer) {
                            startPoint = util_1.getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
                        } else {
                            startPoint = {
                                x: this.frame_.width / 2,
                                y: this.frame_.height / 2
                            };
                        }
                        // Center the element around the start point.
                        startPoint = {
                            x: startPoint.x - this.initialSize_ / 2,
                            y: startPoint.y - this.initialSize_ / 2
                        };
                        var endPoint = {
                            x: this.frame_.width / 2 - this.initialSize_ / 2,
                            y: this.frame_.height / 2 - this.initialSize_ / 2
                        };
                        return { startPoint: startPoint, endPoint: endPoint };
                    };
                    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
                        var _this = this;
                        // This method is called both when a pointing device is released, and when the activation animation ends.
                        // The deactivation animation should only run after both of those occur.
                        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
                        var _a = this.activationState_,
                            hasDeactivationUXRun = _a.hasDeactivationUXRun,
                            isActivated = _a.isActivated;
                        var activationHasEnded = hasDeactivationUXRun || !isActivated;
                        if (activationHasEnded && this.activationAnimationHasEnded_) {
                            this.rmBoundedActivationClasses_();
                            this.adapter_.addClass(FG_DEACTIVATION);
                            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                                _this.adapter_.removeClass(FG_DEACTIVATION);
                            }, constants_1.numbers.FG_DEACTIVATION_MS);
                        }
                    };
                    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
                        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
                        this.adapter_.removeClass(FG_ACTIVATION);
                        this.activationAnimationHasEnded_ = false;
                        this.adapter_.computeBoundingRect();
                    };
                    MDCRippleFoundation.prototype.resetActivationState_ = function () {
                        var _this = this;
                        this.previousActivationEvent_ = this.activationState_.activationEvent;
                        this.activationState_ = this.defaultActivationState_();
                        // Touch devices may fire additional events for the same interaction within a short time.
                        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
                        setTimeout(function () {
                            return _this.previousActivationEvent_ = undefined;
                        }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
                    };
                    MDCRippleFoundation.prototype.deactivate_ = function () {
                        var _this = this;
                        var activationState = this.activationState_;
                        // This can happen in scenarios such as when you have a keyup event that blurs the element.
                        if (!activationState.isActivated) {
                            return;
                        }
                        var state = __assign({}, activationState);
                        if (activationState.isProgrammatic) {
                            requestAnimationFrame(function () {
                                return _this.animateDeactivation_(state);
                            });
                            this.resetActivationState_();
                        } else {
                            this.deregisterDeactivationHandlers_();
                            requestAnimationFrame(function () {
                                _this.activationState_.hasDeactivationUXRun = true;
                                _this.animateDeactivation_(state);
                                _this.resetActivationState_();
                            });
                        }
                    };
                    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
                        var wasActivatedByPointer = _a.wasActivatedByPointer,
                            wasElementMadeActive = _a.wasElementMadeActive;
                        if (wasActivatedByPointer || wasElementMadeActive) {
                            this.runDeactivationUXLogicIfReady_();
                        }
                    };
                    MDCRippleFoundation.prototype.layoutInternal_ = function () {
                        var _this = this;
                        this.frame_ = this.adapter_.computeBoundingRect();
                        var maxDim = Math.max(this.frame_.height, this.frame_.width);
                        // Surface diameter is treated differently for unbounded vs. bounded ripples.
                        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
                        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
                        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
                        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
                        // `overflow: hidden`.
                        var getBoundedRadius = function getBoundedRadius() {
                            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
                            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
                        };
                        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();
                        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
                        this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
                        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
                        this.updateLayoutCssVars_();
                    };
                    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
                        var _a = MDCRippleFoundation.strings,
                            VAR_FG_SIZE = _a.VAR_FG_SIZE,
                            VAR_LEFT = _a.VAR_LEFT,
                            VAR_TOP = _a.VAR_TOP,
                            VAR_FG_SCALE = _a.VAR_FG_SCALE;
                        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
                        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
                        if (this.adapter_.isUnbounded()) {
                            this.unboundedCoords_ = {
                                left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                                top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
                            };
                            this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
                            this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
                        }
                    };
                    return MDCRippleFoundation;
                }(foundation_1.MDCFoundation);
                exports.MDCRippleFoundation = MDCRippleFoundation;
                // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
                exports.default = MDCRippleFoundation;

                /***/
            },

            /***/"./packages/mdc-ripple/util.ts":
            /*!*************************************!*\
              !*** ./packages/mdc-ripple/util.ts ***!
              \*************************************/
            /*! no static exports found */
            /***/function packagesMdcRippleUtilTs(module, exports, __webpack_require__) {

                "use strict";

                Object.defineProperty(exports, "__esModule", { value: true });
                /**
                 * Stores result from supportsCssVariables to avoid redundant processing to
                 * detect CSS custom variable support.
                 */
                var supportsCssVariables_;
                function detectEdgePseudoVarBug(windowObj) {
                    // Detect versions of Edge with buggy var() support
                    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
                    var document = windowObj.document;
                    var node = document.createElement('div');
                    node.className = 'mdc-ripple-surface--test-edge-var-bug';
                    // Append to head instead of body because this script might be invoked in the
                    // head, in which case the body doesn't exist yet. The probe works either way.
                    document.head.appendChild(node);
                    // The bug exists if ::before style ends up propagating to the parent element.
                    // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
                    // but Firefox is known to support CSS custom properties correctly.
                    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
                    var computedStyle = windowObj.getComputedStyle(node);
                    var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
                    if (node.parentNode) {
                        node.parentNode.removeChild(node);
                    }
                    return hasPseudoVarBug;
                }
                function supportsCssVariables(windowObj, forceRefresh) {
                    if (forceRefresh === void 0) {
                        forceRefresh = false;
                    }
                    var CSS = windowObj.CSS;
                    var supportsCssVars = supportsCssVariables_;
                    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
                        return supportsCssVariables_;
                    }
                    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
                    if (!supportsFunctionPresent) {
                        return false;
                    }
                    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
                    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
                    // See: README section on Safari
                    var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');
                    if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
                        supportsCssVars = !detectEdgePseudoVarBug(windowObj);
                    } else {
                        supportsCssVars = false;
                    }
                    if (!forceRefresh) {
                        supportsCssVariables_ = supportsCssVars;
                    }
                    return supportsCssVars;
                }
                exports.supportsCssVariables = supportsCssVariables;
                function getNormalizedEventCoords(evt, pageOffset, clientRect) {
                    if (!evt) {
                        return { x: 0, y: 0 };
                    }
                    var x = pageOffset.x,
                        y = pageOffset.y;
                    var documentX = x + clientRect.left;
                    var documentY = y + clientRect.top;
                    var normalizedX;
                    var normalizedY;
                    // Determine touch point relative to the ripple container.
                    if (evt.type === 'touchstart') {
                        var touchEvent = evt;
                        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
                        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
                    } else {
                        var mouseEvent = evt;
                        normalizedX = mouseEvent.pageX - documentX;
                        normalizedY = mouseEvent.pageY - documentY;
                    }
                    return { x: normalizedX, y: normalizedY };
                }
                exports.getNormalizedEventCoords = getNormalizedEventCoords;

                /***/
            },

            /***/"./packages/mdc-top-app-bar/component.ts":
            /*!***********************************************!*\
              !*** ./packages/mdc-top-app-bar/component.ts ***!
              \***********************************************/
            /*! no static exports found */
            /***/function packagesMdcTopAppBarComponentTs(module, exports, __webpack_require__) {

                "use strict";

                /**
                 * @license
                 * Copyright 2018 Google Inc.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 */

                var __extends = this && this.__extends || function () {
                    var _extendStatics = function extendStatics(d, b) {
                        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
                            d.__proto__ = b;
                        } || function (d, b) {
                            for (var p in b) {
                                if (b.hasOwnProperty(p)) d[p] = b[p];
                            }
                        };
                        return _extendStatics(d, b);
                    };
                    return function (d, b) {
                        _extendStatics(d, b);
                        function __() {
                            this.constructor = d;
                        }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                }();
                Object.defineProperty(exports, "__esModule", { value: true });
                var component_1 = __webpack_require__( /*! @material/base/component */"./packages/mdc-base/component.ts");
                var component_2 = __webpack_require__( /*! @material/ripple/component */"./packages/mdc-ripple/component.ts");
                var constants_1 = __webpack_require__( /*! ./constants */"./packages/mdc-top-app-bar/constants.ts");
                var foundation_1 = __webpack_require__( /*! ./fixed/foundation */"./packages/mdc-top-app-bar/fixed/foundation.ts");
                var foundation_2 = __webpack_require__( /*! ./short/foundation */"./packages/mdc-top-app-bar/short/foundation.ts");
                var foundation_3 = __webpack_require__( /*! ./standard/foundation */"./packages/mdc-top-app-bar/standard/foundation.ts");
                var MDCTopAppBar = /** @class */function (_super) {
                    __extends(MDCTopAppBar, _super);
                    function MDCTopAppBar() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    MDCTopAppBar.attachTo = function (root) {
                        return new MDCTopAppBar(root);
                    };
                    MDCTopAppBar.prototype.initialize = function (rippleFactory) {
                        if (rippleFactory === void 0) {
                            rippleFactory = function rippleFactory(el) {
                                return component_2.MDCRipple.attachTo(el);
                            };
                        }
                        this.navIcon_ = this.root_.querySelector(constants_1.strings.NAVIGATION_ICON_SELECTOR);
                        // Get all icons in the toolbar and instantiate the ripples
                        var icons = [].slice.call(this.root_.querySelectorAll(constants_1.strings.ACTION_ITEM_SELECTOR));
                        if (this.navIcon_) {
                            icons.push(this.navIcon_);
                        }
                        this.iconRipples_ = icons.map(function (icon) {
                            var ripple = rippleFactory(icon);
                            ripple.unbounded = true;
                            return ripple;
                        });
                        this.scrollTarget_ = window;
                    };
                    MDCTopAppBar.prototype.initialSyncWithDOM = function () {
                        this.handleNavigationClick_ = this.foundation_.handleNavigationClick.bind(this.foundation_);
                        this.handleWindowResize_ = this.foundation_.handleWindowResize.bind(this.foundation_);
                        this.handleTargetScroll_ = this.foundation_.handleTargetScroll.bind(this.foundation_);
                        this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);
                        if (this.navIcon_) {
                            this.navIcon_.addEventListener('click', this.handleNavigationClick_);
                        }
                        var isFixed = this.root_.classList.contains(constants_1.cssClasses.FIXED_CLASS);
                        var isShort = this.root_.classList.contains(constants_1.cssClasses.SHORT_CLASS);
                        if (!isShort && !isFixed) {
                            window.addEventListener('resize', this.handleWindowResize_);
                        }
                    };
                    MDCTopAppBar.prototype.destroy = function () {
                        this.iconRipples_.forEach(function (iconRipple) {
                            return iconRipple.destroy();
                        });
                        this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);
                        if (this.navIcon_) {
                            this.navIcon_.removeEventListener('click', this.handleNavigationClick_);
                        }
                        var isFixed = this.root_.classList.contains(constants_1.cssClasses.FIXED_CLASS);
                        var isShort = this.root_.classList.contains(constants_1.cssClasses.SHORT_CLASS);
                        if (!isShort && !isFixed) {
                            window.removeEventListener('resize', this.handleWindowResize_);
                        }
                        _super.prototype.destroy.call(this);
                    };
                    MDCTopAppBar.prototype.setScrollTarget = function (target) {
                        // Remove scroll handler from the previous scroll target
                        this.scrollTarget_.removeEventListener('scroll', this.handleTargetScroll_);
                        this.scrollTarget_ = target;
                        // Initialize scroll handler on the new scroll target
                        this.handleTargetScroll_ = this.foundation_.handleTargetScroll.bind(this.foundation_);
                        this.scrollTarget_.addEventListener('scroll', this.handleTargetScroll_);
                    };
                    MDCTopAppBar.prototype.getDefaultFoundation = function () {
                        var _this = this;
                        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
                        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
                        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                        var adapter = {
                            hasClass: function hasClass(className) {
                                return _this.root_.classList.contains(className);
                            },
                            addClass: function addClass(className) {
                                return _this.root_.classList.add(className);
                            },
                            removeClass: function removeClass(className) {
                                return _this.root_.classList.remove(className);
                            },
                            setStyle: function setStyle(property, value) {
                                return _this.root_.style.setProperty(property, value);
                            },
                            getTopAppBarHeight: function getTopAppBarHeight() {
                                return _this.root_.clientHeight;
                            },
                            notifyNavigationIconClicked: function notifyNavigationIconClicked() {
                                return _this.emit(constants_1.strings.NAVIGATION_EVENT, {});
                            },
                            getViewportScrollY: function getViewportScrollY() {
                                var win = _this.scrollTarget_;
                                var el = _this.scrollTarget_;
                                return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
                            },
                            getTotalActionItems: function getTotalActionItems() {
                                return _this.root_.querySelectorAll(constants_1.strings.ACTION_ITEM_SELECTOR).length;
                            }
                        };
                        // tslint:enable:object-literal-sort-keys
                        var foundation;
                        if (this.root_.classList.contains(constants_1.cssClasses.SHORT_CLASS)) {
                            foundation = new foundation_2.MDCShortTopAppBarFoundation(adapter);
                        } else if (this.root_.classList.contains(constants_1.cssClasses.FIXED_CLASS)) {
                            foundation = new foundation_1.MDCFixedTopAppBarFoundation(adapter);
                        } else {
                            foundation = new foundation_3.MDCTopAppBarFoundation(adapter);
                        }
                        return foundation;
                    };
                    return MDCTopAppBar;
                }(component_1.MDCComponent);
                exports.MDCTopAppBar = MDCTopAppBar;

                /***/
            },

            /***/"./packages/mdc-top-app-bar/constants.ts":
            /*!***********************************************!*\
              !*** ./packages/mdc-top-app-bar/constants.ts ***!
              \***********************************************/
            /*! no static exports found */
            /***/function packagesMdcTopAppBarConstantsTs(module, exports, __webpack_require__) {

                "use strict";

                /**
                 * @license
                 * Copyright 2018 Google Inc.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 */

                Object.defineProperty(exports, "__esModule", { value: true });
                var cssClasses = {
                    FIXED_CLASS: 'mdc-top-app-bar--fixed',
                    FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
                    SHORT_CLASS: 'mdc-top-app-bar--short',
                    SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
                    SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item'
                };
                exports.cssClasses = cssClasses;
                var numbers = {
                    DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
                    MAX_TOP_APP_BAR_HEIGHT: 128
                };
                exports.numbers = numbers;
                var strings = {
                    ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
                    NAVIGATION_EVENT: 'MDCTopAppBar:nav',
                    NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
                    ROOT_SELECTOR: '.mdc-top-app-bar',
                    TITLE_SELECTOR: '.mdc-top-app-bar__title'
                };
                exports.strings = strings;

                /***/
            },

            /***/"./packages/mdc-top-app-bar/fixed/foundation.ts":
            /*!******************************************************!*\
              !*** ./packages/mdc-top-app-bar/fixed/foundation.ts ***!
              \******************************************************/
            /*! no static exports found */
            /***/function packagesMdcTopAppBarFixedFoundationTs(module, exports, __webpack_require__) {

                "use strict";

                /**
                 * @license
                 * Copyright 2018 Google Inc.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 */

                var __extends = this && this.__extends || function () {
                    var _extendStatics = function extendStatics(d, b) {
                        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
                            d.__proto__ = b;
                        } || function (d, b) {
                            for (var p in b) {
                                if (b.hasOwnProperty(p)) d[p] = b[p];
                            }
                        };
                        return _extendStatics(d, b);
                    };
                    return function (d, b) {
                        _extendStatics(d, b);
                        function __() {
                            this.constructor = d;
                        }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                }();
                Object.defineProperty(exports, "__esModule", { value: true });
                var constants_1 = __webpack_require__( /*! ../constants */"./packages/mdc-top-app-bar/constants.ts");
                var foundation_1 = __webpack_require__( /*! ../standard/foundation */"./packages/mdc-top-app-bar/standard/foundation.ts");
                var MDCFixedTopAppBarFoundation = /** @class */function (_super) {
                    __extends(MDCFixedTopAppBarFoundation, _super);
                    function MDCFixedTopAppBarFoundation() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        /**
                         * State variable for the previous scroll iteration top app bar state
                         */
                        _this.wasScrolled_ = false;
                        return _this;
                    }
                    /**
                     * Scroll handler for applying/removing the modifier class on the fixed top app bar.
                     * @override
                     */
                    MDCFixedTopAppBarFoundation.prototype.handleTargetScroll = function () {
                        var currentScroll = this.adapter_.getViewportScrollY();
                        if (currentScroll <= 0) {
                            if (this.wasScrolled_) {
                                this.adapter_.removeClass(constants_1.cssClasses.FIXED_SCROLLED_CLASS);
                                this.wasScrolled_ = false;
                            }
                        } else {
                            if (!this.wasScrolled_) {
                                this.adapter_.addClass(constants_1.cssClasses.FIXED_SCROLLED_CLASS);
                                this.wasScrolled_ = true;
                            }
                        }
                    };
                    return MDCFixedTopAppBarFoundation;
                }(foundation_1.MDCTopAppBarFoundation);
                exports.MDCFixedTopAppBarFoundation = MDCFixedTopAppBarFoundation;
                // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
                exports.default = MDCFixedTopAppBarFoundation;

                /***/
            },

            /***/"./packages/mdc-top-app-bar/foundation.ts":
            /*!************************************************!*\
              !*** ./packages/mdc-top-app-bar/foundation.ts ***!
              \************************************************/
            /*! no static exports found */
            /***/function packagesMdcTopAppBarFoundationTs(module, exports, __webpack_require__) {

                "use strict";

                /**
                 * @license
                 * Copyright 2018 Google Inc.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 */

                var __extends = this && this.__extends || function () {
                    var _extendStatics = function extendStatics(d, b) {
                        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
                            d.__proto__ = b;
                        } || function (d, b) {
                            for (var p in b) {
                                if (b.hasOwnProperty(p)) d[p] = b[p];
                            }
                        };
                        return _extendStatics(d, b);
                    };
                    return function (d, b) {
                        _extendStatics(d, b);
                        function __() {
                            this.constructor = d;
                        }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                }();
                var __assign = this && this.__assign || function () {
                    __assign = Object.assign || function (t) {
                        for (var s, i = 1, n = arguments.length; i < n; i++) {
                            s = arguments[i];
                            for (var p in s) {
                                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                            }
                        }
                        return t;
                    };
                    return __assign.apply(this, arguments);
                };
                Object.defineProperty(exports, "__esModule", { value: true });
                var foundation_1 = __webpack_require__( /*! @material/base/foundation */"./packages/mdc-base/foundation.ts");
                var constants_1 = __webpack_require__( /*! ./constants */"./packages/mdc-top-app-bar/constants.ts");
                var MDCTopAppBarBaseFoundation = /** @class */function (_super) {
                    __extends(MDCTopAppBarBaseFoundation, _super);
                    /* istanbul ignore next: optional argument is not a branch statement */
                    function MDCTopAppBarBaseFoundation(adapter) {
                        return _super.call(this, __assign({}, MDCTopAppBarBaseFoundation.defaultAdapter, adapter)) || this;
                    }
                    Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
                        get: function get() {
                            return constants_1.strings;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
                        get: function get() {
                            return constants_1.cssClasses;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
                        get: function get() {
                            return constants_1.numbers;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
                        /**
                         * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
                         */
                        get: function get() {
                            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
                            return {
                                addClass: function addClass() {
                                    return undefined;
                                },
                                removeClass: function removeClass() {
                                    return undefined;
                                },
                                hasClass: function hasClass() {
                                    return false;
                                },
                                setStyle: function setStyle() {
                                    return undefined;
                                },
                                getTopAppBarHeight: function getTopAppBarHeight() {
                                    return 0;
                                },
                                notifyNavigationIconClicked: function notifyNavigationIconClicked() {
                                    return undefined;
                                },
                                getViewportScrollY: function getViewportScrollY() {
                                    return 0;
                                },
                                getTotalActionItems: function getTotalActionItems() {
                                    return 0;
                                }
                            };
                            // tslint:enable:object-literal-sort-keys
                        },
                        enumerable: true,
                        configurable: true
                    });
                    /** Other variants of TopAppBar foundation overrides this method */
                    MDCTopAppBarBaseFoundation.prototype.handleTargetScroll = function () {}; // tslint:disable-line:no-empty
                    /** Other variants of TopAppBar foundation overrides this method */
                    MDCTopAppBarBaseFoundation.prototype.handleWindowResize = function () {}; // tslint:disable-line:no-empty
                    MDCTopAppBarBaseFoundation.prototype.handleNavigationClick = function () {
                        this.adapter_.notifyNavigationIconClicked();
                    };
                    return MDCTopAppBarBaseFoundation;
                }(foundation_1.MDCFoundation);
                exports.MDCTopAppBarBaseFoundation = MDCTopAppBarBaseFoundation;
                // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
                exports.default = MDCTopAppBarBaseFoundation;

                /***/
            },

            /***/"./packages/mdc-top-app-bar/index.ts":
            /*!*******************************************!*\
              !*** ./packages/mdc-top-app-bar/index.ts ***!
              \*******************************************/
            /*! no static exports found */
            /***/function packagesMdcTopAppBarIndexTs(module, exports, __webpack_require__) {

                "use strict";

                /**
                 * @license
                 * Copyright 2019 Google Inc.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 */

                function __export(m) {
                    for (var p in m) {
                        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
                    }
                }
                Object.defineProperty(exports, "__esModule", { value: true });
                __export(__webpack_require__( /*! ./component */"./packages/mdc-top-app-bar/component.ts"));
                __export(__webpack_require__( /*! ./constants */"./packages/mdc-top-app-bar/constants.ts"));
                __export(__webpack_require__( /*! ./foundation */"./packages/mdc-top-app-bar/foundation.ts"));
                __export(__webpack_require__( /*! ./fixed/foundation */"./packages/mdc-top-app-bar/fixed/foundation.ts"));
                __export(__webpack_require__( /*! ./short/foundation */"./packages/mdc-top-app-bar/short/foundation.ts"));
                __export(__webpack_require__( /*! ./standard/foundation */"./packages/mdc-top-app-bar/standard/foundation.ts"));

                /***/
            },

            /***/"./packages/mdc-top-app-bar/short/foundation.ts":
            /*!******************************************************!*\
              !*** ./packages/mdc-top-app-bar/short/foundation.ts ***!
              \******************************************************/
            /*! no static exports found */
            /***/function packagesMdcTopAppBarShortFoundationTs(module, exports, __webpack_require__) {

                "use strict";

                /**
                 * @license
                 * Copyright 2018 Google Inc.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 */

                var __extends = this && this.__extends || function () {
                    var _extendStatics = function extendStatics(d, b) {
                        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
                            d.__proto__ = b;
                        } || function (d, b) {
                            for (var p in b) {
                                if (b.hasOwnProperty(p)) d[p] = b[p];
                            }
                        };
                        return _extendStatics(d, b);
                    };
                    return function (d, b) {
                        _extendStatics(d, b);
                        function __() {
                            this.constructor = d;
                        }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                }();
                Object.defineProperty(exports, "__esModule", { value: true });
                var constants_1 = __webpack_require__( /*! ../constants */"./packages/mdc-top-app-bar/constants.ts");
                var foundation_1 = __webpack_require__( /*! ../foundation */"./packages/mdc-top-app-bar/foundation.ts");
                var MDCShortTopAppBarFoundation = /** @class */function (_super) {
                    __extends(MDCShortTopAppBarFoundation, _super);
                    /* istanbul ignore next: optional argument is not a branch statement */
                    function MDCShortTopAppBarFoundation(adapter) {
                        var _this = _super.call(this, adapter) || this;
                        _this.isCollapsed_ = false;
                        _this.isAlwaysCollapsed_ = false;
                        return _this;
                    }
                    Object.defineProperty(MDCShortTopAppBarFoundation.prototype, "isCollapsed", {
                        // Public visibility for backward compatibility.
                        get: function get() {
                            return this.isCollapsed_;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    MDCShortTopAppBarFoundation.prototype.init = function () {
                        _super.prototype.init.call(this);
                        if (this.adapter_.getTotalActionItems() > 0) {
                            this.adapter_.addClass(constants_1.cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
                        }
                        // If initialized with SHORT_COLLAPSED_CLASS, the bar should always be collapsed
                        this.setAlwaysCollapsed(this.adapter_.hasClass(constants_1.cssClasses.SHORT_COLLAPSED_CLASS));
                    };
                    /**
                     * Set if the short top app bar should always be collapsed.
                     *
                     * @param value When `true`, bar will always be collapsed. When `false`, bar may collapse or expand based on scroll.
                     */
                    MDCShortTopAppBarFoundation.prototype.setAlwaysCollapsed = function (value) {
                        this.isAlwaysCollapsed_ = !!value;
                        if (this.isAlwaysCollapsed_) {
                            this.collapse_();
                        } else {
                            // let maybeCollapseBar_ determine if the bar should be collapsed
                            this.maybeCollapseBar_();
                        }
                    };
                    MDCShortTopAppBarFoundation.prototype.getAlwaysCollapsed = function () {
                        return this.isAlwaysCollapsed_;
                    };
                    /**
                     * Scroll handler for applying/removing the collapsed modifier class on the short top app bar.
                     * @override
                     */
                    MDCShortTopAppBarFoundation.prototype.handleTargetScroll = function () {
                        this.maybeCollapseBar_();
                    };
                    MDCShortTopAppBarFoundation.prototype.maybeCollapseBar_ = function () {
                        if (this.isAlwaysCollapsed_) {
                            return;
                        }
                        var currentScroll = this.adapter_.getViewportScrollY();
                        if (currentScroll <= 0) {
                            if (this.isCollapsed_) {
                                this.uncollapse_();
                            }
                        } else {
                            if (!this.isCollapsed_) {
                                this.collapse_();
                            }
                        }
                    };
                    MDCShortTopAppBarFoundation.prototype.uncollapse_ = function () {
                        this.adapter_.removeClass(constants_1.cssClasses.SHORT_COLLAPSED_CLASS);
                        this.isCollapsed_ = false;
                    };
                    MDCShortTopAppBarFoundation.prototype.collapse_ = function () {
                        this.adapter_.addClass(constants_1.cssClasses.SHORT_COLLAPSED_CLASS);
                        this.isCollapsed_ = true;
                    };
                    return MDCShortTopAppBarFoundation;
                }(foundation_1.MDCTopAppBarBaseFoundation);
                exports.MDCShortTopAppBarFoundation = MDCShortTopAppBarFoundation;
                // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
                exports.default = MDCShortTopAppBarFoundation;

                /***/
            },

            /***/"./packages/mdc-top-app-bar/standard/foundation.ts":
            /*!*********************************************************!*\
              !*** ./packages/mdc-top-app-bar/standard/foundation.ts ***!
              \*********************************************************/
            /*! no static exports found */
            /***/function packagesMdcTopAppBarStandardFoundationTs(module, exports, __webpack_require__) {

                "use strict";

                /**
                 * @license
                 * Copyright 2018 Google Inc.
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in
                 * all copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                 * THE SOFTWARE.
                 */

                var __extends = this && this.__extends || function () {
                    var _extendStatics = function extendStatics(d, b) {
                        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
                            d.__proto__ = b;
                        } || function (d, b) {
                            for (var p in b) {
                                if (b.hasOwnProperty(p)) d[p] = b[p];
                            }
                        };
                        return _extendStatics(d, b);
                    };
                    return function (d, b) {
                        _extendStatics(d, b);
                        function __() {
                            this.constructor = d;
                        }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                }();
                Object.defineProperty(exports, "__esModule", { value: true });
                var constants_1 = __webpack_require__( /*! ../constants */"./packages/mdc-top-app-bar/constants.ts");
                var foundation_1 = __webpack_require__( /*! ../foundation */"./packages/mdc-top-app-bar/foundation.ts");
                var INITIAL_VALUE = 0;
                var MDCTopAppBarFoundation = /** @class */function (_super) {
                    __extends(MDCTopAppBarFoundation, _super);
                    /* istanbul ignore next: optional argument is not a branch statement */
                    function MDCTopAppBarFoundation(adapter) {
                        var _this = _super.call(this, adapter) || this;
                        /**
                         * Indicates if the top app bar was docked in the previous scroll handler iteration.
                         */
                        _this.wasDocked_ = true;
                        /**
                         * Indicates if the top app bar is docked in the fully shown position.
                         */
                        _this.isDockedShowing_ = true;
                        /**
                         * Variable for current scroll position of the top app bar
                         */
                        _this.currentAppBarOffsetTop_ = 0;
                        /**
                         * Used to prevent the top app bar from being scrolled out of view during resize events
                         */
                        _this.isCurrentlyBeingResized_ = false;
                        /**
                         * The timeout that's used to throttle the resize events
                         */
                        _this.resizeThrottleId_ = INITIAL_VALUE;
                        /**
                         * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
                         */
                        _this.resizeDebounceId_ = INITIAL_VALUE;
                        _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();
                        _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();
                        return _this;
                    }
                    MDCTopAppBarFoundation.prototype.destroy = function () {
                        _super.prototype.destroy.call(this);
                        this.adapter_.setStyle('top', '');
                    };
                    /**
                     * Scroll handler for the default scroll behavior of the top app bar.
                     * @override
                     */
                    MDCTopAppBarFoundation.prototype.handleTargetScroll = function () {
                        var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
                        var diff = currentScrollPosition - this.lastScrollPosition_;
                        this.lastScrollPosition_ = currentScrollPosition;
                        // If the window is being resized the lastScrollPosition_ needs to be updated but the
                        // current scroll of the top app bar should stay in the same position.
                        if (!this.isCurrentlyBeingResized_) {
                            this.currentAppBarOffsetTop_ -= diff;
                            if (this.currentAppBarOffsetTop_ > 0) {
                                this.currentAppBarOffsetTop_ = 0;
                            } else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
                                this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
                            }
                            this.moveTopAppBar_();
                        }
                    };
                    /**
                     * Top app bar resize handler that throttle/debounce functions that execute updates.
                     * @override
                     */
                    MDCTopAppBarFoundation.prototype.handleWindowResize = function () {
                        var _this = this;
                        // Throttle resize events 10 p/s
                        if (!this.resizeThrottleId_) {
                            this.resizeThrottleId_ = setTimeout(function () {
                                _this.resizeThrottleId_ = INITIAL_VALUE;
                                _this.throttledResizeHandler_();
                            }, constants_1.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
                        }
                        this.isCurrentlyBeingResized_ = true;
                        if (this.resizeDebounceId_) {
                            clearTimeout(this.resizeDebounceId_);
                        }
                        this.resizeDebounceId_ = setTimeout(function () {
                            _this.handleTargetScroll();
                            _this.isCurrentlyBeingResized_ = false;
                            _this.resizeDebounceId_ = INITIAL_VALUE;
                        }, constants_1.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
                    };
                    /**
                     * Function to determine if the DOM needs to update.
                     */
                    MDCTopAppBarFoundation.prototype.checkForUpdate_ = function () {
                        var offscreenBoundaryTop = -this.topAppBarHeight_;
                        var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
                        var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
                        var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;
                        // If it's partially showing, it can't be docked.
                        if (partiallyShowing) {
                            this.wasDocked_ = false;
                        } else {
                            // Not previously docked and not partially showing, it's now docked.
                            if (!this.wasDocked_) {
                                this.wasDocked_ = true;
                                return true;
                            } else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
                                this.isDockedShowing_ = hasAnyPixelsOnscreen;
                                return true;
                            }
                        }
                        return partiallyShowing;
                    };
                    /**
                     * Function to move the top app bar if needed.
                     */
                    MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function () {
                        if (this.checkForUpdate_()) {
                            // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
                            // so the top app bar doesn't show if the window resizes and the new height > the old height.
                            var offset = this.currentAppBarOffsetTop_;
                            if (Math.abs(offset) >= this.topAppBarHeight_) {
                                offset = -constants_1.numbers.MAX_TOP_APP_BAR_HEIGHT;
                            }
                            this.adapter_.setStyle('top', offset + 'px');
                        }
                    };
                    /**
                     * Throttled function that updates the top app bar scrolled values if the
                     * top app bar height changes.
                     */
                    MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function () {
                        var currentHeight = this.adapter_.getTopAppBarHeight();
                        if (this.topAppBarHeight_ !== currentHeight) {
                            this.wasDocked_ = false;
                            // Since the top app bar has a different height depending on the screen width, this
                            // will ensure that the top app bar remains in the correct location if
                            // completely hidden and a resize makes the top app bar a different height.
                            this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
                            this.topAppBarHeight_ = currentHeight;
                        }
                        this.handleTargetScroll();
                    };
                    return MDCTopAppBarFoundation;
                }(foundation_1.MDCTopAppBarBaseFoundation);
                exports.MDCTopAppBarFoundation = MDCTopAppBarFoundation;
                // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.
                exports.default = MDCTopAppBarFoundation;

                /***/
            }

            /******/ })
    );
});
//# sourceMappingURL=mdc.topAppBar.js.map
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (w, doc) {
  'use strict';

  // Create a template element

  var template = doc.createElement('template'),
      menuButtonTemplate = doc.createElement('template');

  menuButtonTemplate.innerHTML = '\n   <button id="menuButton" class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>\n  ';

  template.innerHTML = ' \n<style>\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}@font-face{font-family:Material Icons;font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format("woff2")}.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:"liga";-webkit-font-smoothing:antialiased}:host .mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee);color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:fixed;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;z-index:4}:host .mdc-top-app-bar .mdc-top-app-bar__action-item,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary,#fff)}:host .mdc-top-app-bar .mdc-top-app-bar__action-item:after,:host .mdc-top-app-bar .mdc-top-app-bar__action-item:before,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:after,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:before{background-color:#fff}@supports not (-ms-ime-align:auto){:host .mdc-top-app-bar .mdc-top-app-bar__action-item:after,:host .mdc-top-app-bar .mdc-top-app-bar__action-item:before,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:after,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:before{background-color:var(--mdc-theme-on-primary,#fff)}}:host .mdc-top-app-bar .mdc-top-app-bar__action-item:hover:before,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover:before{opacity:.08}:host .mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused:before,:host .mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus:before,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused:before,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}:host .mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):after,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}:host .mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active:after,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}:host .mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,:host .mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}:host .mdc-top-app-bar__row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:64px}:host .mdc-top-app-bar__section{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-width:0;padding:8px 12px;z-index:1}:host .mdc-top-app-bar__section--align-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-ordinal-group:0;-webkit-order:-1;-ms-flex-order:-1;order:-1}:host .mdc-top-app-bar__section--align-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-ordinal-group:2;-webkit-order:1;-ms-flex-order:1;order:1}:host .mdc-top-app-bar__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}:host .mdc-top-app-bar__title[dir=rtl],[dir=rtl] :host .mdc-top-app-bar__title{padding-left:0;padding-right:20px}:host.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}:host.mdc-top-app-bar--short-collapsed[dir=rtl],[dir=rtl] :host.mdc-top-app-bar--short-collapsed{border-radius:0 0 0 24px}:host .mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;-webkit-transition:width .25s cubic-bezier(.4,0,.2,1);transition:width .25s cubic-bezier(.4,0,.2,1)}:host .mdc-top-app-bar--short[dir=rtl],[dir=rtl] :host .mdc-top-app-bar--short{right:0;left:auto}:host .mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}:host .mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}:host .mdc-top-app-bar--short .mdc-top-app-bar__title{-webkit-transition:opacity .2s cubic-bezier(.4,0,.2,1);transition:opacity .2s cubic-bezier(.4,0,.2,1);opacity:1}:host .mdc-top-app-bar--short-collapsed{-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);width:56px;-webkit-transition:width .3s cubic-bezier(.4,0,.2,1);transition:width .3s cubic-bezier(.4,0,.2,1)}:host .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}:host .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{-webkit-transition:padding .15s cubic-bezier(.4,0,.2,1);transition:padding .15s cubic-bezier(.4,0,.2,1)}:host .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}:host .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}:host .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl],[dir=rtl] :host .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:12px;padding-right:0}:host .mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}:host .mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}:host .mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}:host .mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl],[dir=rtl] :host .mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:0;padding-right:12px}:host .mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}:host .mdc-top-app-bar--prominent .mdc-top-app-bar__title{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;padding-bottom:2px}:host .mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,:host .mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}:host .mdc-top-app-bar--fixed,:host .mdc-top-app-bar--fixed-scrolled{-webkit-transition:-webkit-box-shadow .2s linear;transition:-webkit-box-shadow .2s linear;transition:box-shadow .2s linear;transition:box-shadow .2s linear,-webkit-box-shadow .2s linear}:host .mdc-top-app-bar--fixed-scrolled{-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}:host .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}:host .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}:host .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}:host .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl],[dir=rtl] :host .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:0;padding-right:20px}:host .mdc-top-app-bar--fixed-adjust{padding-top:64px}:host .mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}:host .mdc-top-app-bar--short-fixed-adjust{padding-top:56px}:host .mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}:host .mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media (max-width:599px){:host .mdc-top-app-bar__row{height:56px}:host .mdc-top-app-bar__section{padding:4px}:host .mdc-top-app-bar--short{-webkit-transition:width .2s cubic-bezier(.4,0,.2,1);transition:width .2s cubic-bezier(.4,0,.2,1)}:host .mdc-top-app-bar--short-collapsed{-webkit-transition:width .25s cubic-bezier(.4,0,.2,1);transition:width .25s cubic-bezier(.4,0,.2,1)}:host .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}:host .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl],[dir=rtl] :host .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:12px;padding-right:0}:host .mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}:host .mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host .mdc-icon-button{width:48px;height:48px;padding:12px;font-size:24px;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;outline:none;background-color:transparent;text-decoration:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host .mdc-icon-button img,:host .mdc-icon-button svg{width:24px;height:24px}:host .mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38));cursor:default;pointer-events:none}:host .mdc-icon-button__icon{display:inline-block}:host .mdc-icon-button--on .mdc-icon-button__icon,:host .mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}:host .mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}:host .mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}:host .mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}:host .mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host .mdc-icon-button:after,:host .mdc-icon-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}:host .mdc-icon-button:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:host .mdc-icon-button.mdc-ripple-upgraded:before{-webkit-transform:scale(var(--mdc-ripple-fg-scale,1));transform:scale(var(--mdc-ripple-fg-scale,1))}:host .mdc-icon-button.mdc-ripple-upgraded:after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}:host .mdc-icon-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}:host .mdc-icon-button.mdc-ripple-upgraded--foreground-activation:after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:host .mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation:after{-webkit-animation:mdc-ripple-fg-opacity-out .15s;animation:mdc-ripple-fg-opacity-out .15s;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}:host .mdc-icon-button:after,:host .mdc-icon-button:before{top:0;left:0;width:100%;height:100%}:host .mdc-icon-button.mdc-ripple-upgraded:after,:host .mdc-icon-button.mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}:host .mdc-icon-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}:host .mdc-icon-button:after,:host .mdc-icon-button:before{background-color:#000}:host .mdc-icon-button:hover:before{opacity:.04}:host .mdc-icon-button.mdc-ripple-upgraded--background-focused:before,:host .mdc-icon-button:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}:host .mdc-icon-button:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}:host .mdc-icon-button:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}:host .mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}:host .mdc-top-app-bar{background-color:inherit;color:inherit}:host .mdc-icon-button{color:inherit;fill:currentColor;color:inherit!important}:host .hidden{display:none!important}:host .mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}\n</style>i\n<header class="mdc-top-app-bar">\n  <div class="mdc-top-app-bar__row">\n    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start menu-button">\n      <span class="mdc-top-app-bar__title"></span>\n      <slot name="left"></slot>\n    </section>\n    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">\n        <slot name="right"></slot>\n      </section>\n  </div>\n</header>\n';

  if (w.ShadyCSS) w.ShadyCSS.prepareTemplate(template, 'flayvor-top-app-bar');

  var AppBarTop = function (_HTMLElement) {
    _inherits(AppBarTop, _HTMLElement);

    _createClass(AppBarTop, [{
      key: 'mdcInit',
      value: function mdcInit() {
        this.MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;
        this.topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(this.topAppBarElement);
      }
    }, {
      key: 'clearStyles',
      value: function clearStyles() {
        this.topAppBarElement.removeAttribute('class');
        this.topAppBarElement.classList.add('mdc-top-app-bar');
      }
    }, {
      key: 'isStandard',
      get: function get() {
        return this.hasAttribute('standard');
      }
    }, {
      key: 'isDense',
      get: function get() {
        return this.hasAttribute('dense');
      }
    }, {
      key: 'isProminent',
      get: function get() {
        return this.hasAttribute('prominent');
      }
    }, {
      key: 'isFixed',
      get: function get() {
        return this.hasAttribute('fixed');
      }
    }, {
      key: 'isShort',
      get: function get() {
        return this.hasAttribute('short');
      }
    }, {
      key: 'menuIcon',
      get: function get() {
        return this.getAttribute('menuicon');
      },
      set: function set(value) {
        this.setAttribute('menuicon', value);
      }
    }, {
      key: 'title',
      get: function get() {
        return this.getAttribute('title');
      }
    }, {
      key: 'hideMenu',
      get: function get() {
        return this.hasAttribute('hideMenu');
      }
    }], [{
      key: 'observedAttributes',
      get: function get() {
        return ['title', 'hideMenu', 'menuicon', 'short', 'collapsed', 'fixed', 'prominent', 'dense', 'standard'];
      }
    }]);

    function AppBarTop() {
      _classCallCheck(this, AppBarTop);

      var _this = _possibleConstructorReturn(this, (AppBarTop.__proto__ || Object.getPrototypeOf(AppBarTop)).call(this));

      _this.attachShadow({ mode: 'open' });

      var clone = template.content.cloneNode(true),
          menuButtonClone = menuButtonTemplate.content.cloneNode(true),
          menuButtonTarget = clone.querySelector('.menu-button');

      menuButtonTarget.insertBefore(menuButtonClone, menuButtonTarget.childNodes[0]);

      // instantiate MDC top app bar
      _this.MDCTopAppBar = mdc.topAppBar.MDCTopAppBar;

      _this.topAppBarElement = clone.querySelector('.mdc-top-app-bar');
      _this.topAppBar = new mdc.topAppBar.MDCTopAppBar.attachTo(_this);

      _this.appTitle = clone.querySelector('.mdc-top-app-bar__title');
      _this.menuIconNode = clone.querySelector('#menuButton');

      _this.shadowRoot.appendChild(clone);

      return _this;
    }

    _createClass(AppBarTop, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        var _this2 = this;

        this.appTitle.innerHTML = this.title;
        this.menuIconNode.innerHTML = this.menuIcon;
        /** Any changes to what the component renders should be done here. */
        if (this.isDense || this.isProminent || this.isStandard) {
          this.mdcInit();
        }

        if (!this.hideMenu) {
          console.log('topappbar', this.topAppBar);
          this.topAppBar.listen('MDCTopAppBar:nav', function () {
            _this2.dispatchEvent(new CustomEvent('MDCTopAppBar:nav', {
              bubbles: true
            }));
          });
        } else {
          var button = this.shadowRoot.querySelector('#menuButton');
          button.classList.add('hidden');
        }

        // Get the attributes set by the consumer
        /** Event listeners should also be bound here. */
      }
    }, {
      key: 'attributeChangedCallback',
      value: function attributeChangedCallback(name, oldValue, newValue) {

        if (name === 'dense' && oldValue === null) {
          this.clearStyles();
          this.topAppBarElement.classList.add('mdc-top-app-bar--dense');
        }

        if (name === 'prominent' && oldValue === null) {
          this.clearStyles();
          this.topAppBarElement.classList.add('mdc-top-app-bar--prominent');
        }

        if (name === 'fixed' && oldValue === null) {
          this.clearStyles();
          this.topAppBarElement.classList.add('mdc-top-app-bar--fixed');
          this.mdcInit();
        }

        if (name === 'short' && oldValue === null) {
          this.clearStyles();
          this.topAppBarElement.classList.add('mdc-top-app-bar--short');
          this.mdcInit();
        }

        if (name === 'collapsed') {
          this.clearStyles();
          this.topAppBarElement.classList.add('mdc-top-app-bar--short');
          this.topAppBarElement.classList.add('mdc-top-app-bar--short-collapsed');
          this.mdcInit();
        }

        if (name === 'title' && oldValue !== newValue) {
          this.appTitle.innerHTML = this.title;
        }

        if (name === 'menuicon' && oldValue !== newValue) {
          this.menuIconNode.innerHTML = this.menuIcon;
        }
      }
    }]);

    return AppBarTop;
  }(HTMLElement);

  customElements.define('flayvor-top-app-bar', AppBarTop);
})(window, document);