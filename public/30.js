(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/Layout/student.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/Layout/student.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_Api_Factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/Api/Factory */ "./resources/js/Services/Api/Factory.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var User = _Services_Api_Factory__WEBPACK_IMPORTED_MODULE_0__["Factory"].get('User');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Index",
  data: function data() {
    return {
      toggle: false,
      newEventResponse: null,
      triggerSnackbar: false,
      routes: [{
        name: 'Domov',
        path: 'home'
      }, {
        name: 'Sporočila',
        path: 'messages'
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    // Listens for broadcast
    Echo.listen('edijak', 'UpdateNewEvent', function (e) {
      _this.newEventResponse = e.response;
      _this.triggerSnackbar = true;
    });
  },
  beforeMount: function beforeMount() {
    var _this2 = this;

    User.getUser().then(function (res) {
      _this2.$store.dispatch('setUser', res.data);
    });
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    user: function user(state) {
      return state.User.user;
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VSnackbar/VSnackbar.sass":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vuetify/src/components/VSnackbar/VSnackbar.sass ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".theme--light.v-snack__wrapper {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.theme--dark.v-snack__wrapper {\n  color: #FFFFFF;\n}\n\n.v-sheet.v-snack__wrapper {\n  border-radius: 4px;\n}\n.v-sheet.v-snack__wrapper:not(.v-sheet--outlined) {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.v-sheet.v-snack__wrapper.v-sheet--shaped {\n  border-radius: 24px 4px;\n}\n\n.v-snack {\n  bottom: 0;\n  display: flex;\n  font-size: 0.875rem;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  right: 0;\n  top: 0;\n  width: 100%;\n}\n.v-snack:not(.v-snack--absolute) {\n  height: 100vh;\n  position: fixed;\n  z-index: 1000;\n}\n.v-snack:not(.v-snack--centered):not(.v-snack--top) {\n  align-items: flex-end;\n}\n.v-snack__wrapper {\n  align-items: center;\n  border-color: currentColor !important;\n  display: flex;\n  margin: 8px;\n  max-width: 672px;\n  min-height: 48px;\n  min-width: 344px;\n  padding: 0;\n  pointer-events: auto;\n  position: relative;\n  transition-duration: 0.15s;\n  transition-property: opacity, transform;\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.v-snack__wrapper.theme--dark {\n  background-color: #333333;\n  color: rgba(255, 255, 255, 0.87);\n}\n.v-snack__content {\n  flex-grow: 1;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.0178571429em;\n  line-height: 1.25rem;\n  margin-right: auto;\n  padding: 14px 16px;\n  text-align: initial;\n}\n.v-snack__action {\n  align-items: center;\n  align-self: center;\n  display: flex;\n}\n.v-snack__action .v-ripple__container {\n  display: none;\n}\n.v-application--is-ltr .v-snack__action {\n  margin-right: 8px;\n}\n.v-application--is-rtl .v-snack__action {\n  margin-left: 8px;\n}\n.v-snack__action > .v-snack__btn.v-btn {\n  padding: 0 8px;\n}\n.v-snack__btn {\n  margin-left: 0;\n  margin-right: 0;\n  margin: 0;\n  min-width: auto;\n}\n.v-snack--absolute {\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n}\n.v-snack--centered {\n  align-items: center;\n}\n.v-snack--left {\n  justify-content: flex-start;\n  right: auto;\n}\n.v-snack--multi-line .v-snack__wrapper {\n  min-height: 68px;\n}\n.v-snack--right {\n  justify-content: flex-end;\n  left: auto;\n}\n.v-snack:not(.v-snack--has-background) .v-snack__wrapper {\n  box-shadow: none !important;\n}\n.v-snack--bottom {\n  top: auto;\n}\n.v-snack--text .v-snack__wrapper:before {\n  background-color: currentColor;\n  border-radius: inherit;\n  bottom: 0;\n  content: \"\";\n  left: 0;\n  opacity: 0.12;\n  pointer-events: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.v-snack--top {\n  align-items: flex-start;\n  bottom: auto;\n}\n.v-snack--vertical .v-snack__wrapper {\n  flex-direction: column;\n}\n.v-snack--vertical .v-snack__wrapper .v-snack__action {\n  align-self: flex-end;\n  margin-bottom: 8px;\n}\n\n.v-snack-transition-enter.v-snack__wrapper {\n  transform: scale(0.8);\n}\n.v-snack-transition-enter.v-snack__wrapper, .v-snack-transition-leave-to.v-snack__wrapper {\n  opacity: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/Layout/student.vue?vue&type=template&id=7ef0ab42&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/Layout/student.vue?vue&type=template&id=7ef0ab42& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: { app: "", temporary: "" },
          model: {
            value: _vm.toggle,
            callback: function($$v) {
              _vm.toggle = $$v
            },
            expression: "toggle"
          }
        },
        [
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-avatar",
                    [_c("v-icon", [_vm._v("mdi-account-outline")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [
                        _vm._v(
                          _vm._s(_vm.user.name) + " " + _vm._s(_vm.user.surname)
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-list-item-group",
                _vm._l(_vm.routes, function(route, index) {
                  return _c(
                    "v-list-item",
                    { key: index, attrs: { to: { name: route.path } } },
                    [
                      _vm._v(
                        "\n                   " +
                          _vm._s(route.name) +
                          "\n                "
                      )
                    ]
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        { attrs: { dark: "", app: "", color: "#0446ff" } },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function($event) {
                _vm.toggle = !_vm.toggle
              }
            }
          }),
          _vm._v(" "),
          _c("v-toolbar-title", [_vm._v("Edijak")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-chip",
            { attrs: { color: "#6f63ff" } },
            [
              _c("v-icon", [
                _vm._v("\n                mdi-account\n            ")
              ]),
              _vm._v(
                "\n            Dobrodošel, " +
                  _vm._s(_vm.user.name) +
                  " " +
                  _vm._s(_vm.user.surname) +
                  "\n        "
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-main", [_c("router-view")], 1),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { color: "success" },
          model: {
            value: _vm.triggerSnackbar,
            callback: function($$v) {
              _vm.triggerSnackbar = $$v
            },
            expression: "triggerSnackbar"
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.newEventResponse) + "\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js":
/*!********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VSnackbar/VSnackbar.sass */ "./node_modules/vuetify/src/components/VSnackbar/VSnackbar.sass");
/* harmony import */ var _src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSnackbar_VSnackbar_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VSheet/VSheet */ "./node_modules/vuetify/lib/components/VSheet/VSheet.js");
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/colorable */ "./node_modules/vuetify/lib/mixins/colorable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/toggleable */ "./node_modules/vuetify/lib/mixins/toggleable/index.js");
/* harmony import */ var _mixins_positionable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/positionable */ "./node_modules/vuetify/lib/mixins/positionable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
// Styles
 // Components

 // Mixins




 // Utilities




/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__["default"])(_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__["default"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_mixins_positionable__WEBPACK_IMPORTED_MODULE_5__["factory"])(['absolute', 'bottom', 'left', 'right', 'top'])
/* @vue/component */
).extend({
  name: 'v-snackbar',
  props: {
    app: Boolean,
    centered: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    multiLine: Boolean,
    text: Boolean,
    timeout: {
      type: [Number, String],
      default: 5000
    },
    transition: {
      type: [Boolean, String],
      default: 'v-snack-transition',
      validator: v => typeof v === 'string' || v === false
    },
    vertical: Boolean
  },
  data: () => ({
    activeTimeout: -1
  }),
  computed: {
    classes() {
      return {
        'v-snack--absolute': this.absolute,
        'v-snack--active': this.isActive,
        'v-snack--bottom': this.bottom || !this.top,
        'v-snack--centered': this.centered,
        'v-snack--has-background': this.hasBackground,
        'v-snack--left': this.left,
        'v-snack--multi-line': this.multiLine && !this.vertical,
        'v-snack--right': this.right,
        'v-snack--text': this.text,
        'v-snack--top': this.top,
        'v-snack--vertical': this.vertical
      };
    },

    // Text and outlined styles both
    // use transparent backgrounds
    hasBackground() {
      return !this.text && !this.outlined;
    },

    // Snackbar is dark by default
    // override themeable logic.
    isDark() {
      return this.hasBackground ? !this.light : _mixins_themeable__WEBPACK_IMPORTED_MODULE_3__["default"].options.computed.isDark.call(this);
    },

    styles() {
      // Styles are not needed when
      // using the absolute prop.
      if (this.absolute) return {};
      const {
        bar,
        bottom,
        footer,
        insetFooter,
        left,
        right,
        top
      } = this.$vuetify.application; // Should always move for y-axis
      // applicationable components.

      return {
        paddingBottom: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["convertToUnit"])(bottom + footer + insetFooter),
        paddingLeft: !this.app ? undefined : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["convertToUnit"])(left),
        paddingRight: !this.app ? undefined : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["convertToUnit"])(right),
        paddingTop: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["convertToUnit"])(bar + top)
      };
    }

  },
  watch: {
    isActive: 'setTimeout',
    timeout: 'setTimeout'
  },

  mounted() {
    if (this.isActive) this.setTimeout();
  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('auto-height')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__["removed"])('auto-height', this);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line eqeqeq


    if (this.timeout == 0) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_8__["deprecate"])('timeout="0"', '-1', this);
    }
  },

  methods: {
    genActions() {
      return this.$createElement('div', {
        staticClass: 'v-snack__action '
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["getSlot"])(this, 'action', {
        attrs: {
          class: 'v-snack__btn'
        }
      })]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-snack__content',
        class: {
          [this.contentClass]: true
        },
        attrs: {
          role: 'status',
          'aria-live': 'polite'
        }
      }, [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_7__["getSlot"])(this)]);
    },

    genWrapper() {
      const setColor = this.hasBackground ? this.setBackgroundColor : this.setTextColor;
      const data = setColor(this.color, {
        staticClass: 'v-snack__wrapper',
        class: _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.classes.call(this),
        directives: [{
          name: 'show',
          value: this.isActive
        }],
        on: {
          mouseenter: () => window.clearTimeout(this.activeTimeout),
          mouseleave: this.setTimeout
        }
      });
      return this.$createElement('div', data, [this.genContent(), this.genActions()]);
    },

    genTransition() {
      return this.$createElement('transition', {
        props: {
          name: this.transition
        }
      }, [this.genWrapper()]);
    },

    setTimeout() {
      window.clearTimeout(this.activeTimeout);
      const timeout = Number(this.timeout);

      if (!this.isActive || // TODO: remove 0 in v3
      [0, -1].includes(timeout)) {
        return;
      }

      this.activeTimeout = window.setTimeout(() => {
        this.isActive = false;
      }, timeout);
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-snack',
      class: this.classes,
      style: this.styles
    }, [this.transition !== false ? this.genTransition() : this.genWrapper()]);
  }

}));
//# sourceMappingURL=VSnackbar.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSnackbar/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSnackbar/index.js ***!
  \****************************************************************/
/*! exports provided: VSnackbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VSnackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VSnackbar", function() { return _VSnackbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VSnackbar__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/src/components/VSnackbar/VSnackbar.sass":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VSnackbar/VSnackbar.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!../../../../postcss-loader/src??ref--8-2!../../../../sass-loader/dist/cjs.js??ref--8-3!./VSnackbar.sass */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VSnackbar/VSnackbar.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/App/Layout/student.vue":
/*!*********************************************!*\
  !*** ./resources/js/App/Layout/student.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _student_vue_vue_type_template_id_7ef0ab42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student.vue?vue&type=template&id=7ef0ab42& */ "./resources/js/App/Layout/student.vue?vue&type=template&id=7ef0ab42&");
/* harmony import */ var _student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student.vue?vue&type=script&lang=js& */ "./resources/js/App/Layout/student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAppBar */ "./node_modules/vuetify/lib/components/VAppBar/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VNavigationDrawer */ "./node_modules/vuetify/lib/components/VNavigationDrawer/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _student_vue_vue_type_template_id_7ef0ab42___WEBPACK_IMPORTED_MODULE_0__["render"],
  _student_vue_vue_type_template_id_7ef0ab42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VAppBar: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__["VAppBar"],VAppBarNavIcon: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_5__["VAppBarNavIcon"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItem"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItemContent"],VListItemGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItemGroup"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListItemTitle"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_10__["VMain"],VNavigationDrawer: vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_11__["VNavigationDrawer"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_12__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__["VSpacer"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App/Layout/student.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/App/Layout/student.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/App/Layout/student.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./student.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/Layout/student.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/App/Layout/student.vue?vue&type=template&id=7ef0ab42&":
/*!****************************************************************************!*\
  !*** ./resources/js/App/Layout/student.vue?vue&type=template&id=7ef0ab42& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_template_id_7ef0ab42___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./student.vue?vue&type=template&id=7ef0ab42& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/Layout/student.vue?vue&type=template&id=7ef0ab42&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_template_id_7ef0ab42___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_student_vue_vue_type_template_id_7ef0ab42___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);