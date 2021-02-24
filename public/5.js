(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/Layout/login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/Layout/login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_Api_Factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Services/Api/Factory */ "./resources/js/Services/Api/Factory.js");
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
//

var User = _Services_Api_Factory__WEBPACK_IMPORTED_MODULE_0__["Factory"].get('User');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {
        email: null,
        password: null
      },
      // Error message
      error: null,
      enable: false
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      User.login(this.user).then(function (response) {
        // Logs in user and sets localstorage and Vuex store
        // If credentials are correct
        localStorage.setItem('token', response.data.token);

        _this.$store.dispatch('setUser', response.data.user); // Depending on the role of logged in user redirects happens
        // If user if found to be a teacher, it is redirected to /teacher
        // else it's redirected to /webapp


        if (response.data.teacher) {
          _this.$router.push({
            name: 'teacher'
          });
        } else {
          _this.$router.push({
            name: 'student'
          });
        }
      })["catch"](function (err) {
        _this.error = err.response.data.message;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/Layout/login.vue?vue&type=template&id=cafbfda0&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/App/Layout/login.vue?vue&type=template&id=cafbfda0& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
        "v-app-bar",
        { attrs: { app: "" } },
        [_c("v-toolbar-title", [_vm._v("Edijak")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        [
          _c(
            "v-container",
            [
              _c(
                "v-row",
                { attrs: { justify: "center" } },
                [
                  _c(
                    "v-col",
                    {
                      attrs: { cols: "12", xl: "4", lg: "4", md: "6", sm: "7" }
                    },
                    [
                      _c(
                        "v-card",
                        { attrs: { height: "400" } },
                        [
                          _c("v-card-title", [
                            _vm._v(
                              "\n                            Prijavi se!\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-form",
                                [
                                  _c("v-text-field", {
                                    attrs: { placeholder: "E-naslov" },
                                    model: {
                                      value: _vm.user.email,
                                      callback: function($$v) {
                                        _vm.$set(_vm.user, "email", $$v)
                                      },
                                      expression: "user.email"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      "prepend-icon": _vm.enable
                                        ? "mdi-eye"
                                        : "mdi-eye-off",
                                      type: _vm.enable ? "text" : "password",
                                      placeholder: "Geslo"
                                    },
                                    on: {
                                      "click:prepend": function($event) {
                                        _vm.enable = !_vm.enable
                                      }
                                    },
                                    model: {
                                      value: _vm.user.password,
                                      callback: function($$v) {
                                        _vm.$set(_vm.user, "password", $$v)
                                      },
                                      expression: "user.password"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: { block: "" },
                                      on: { click: _vm.login }
                                    },
                                    [
                                      _vm._v(
                                        "Prijavi se\n                                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.error
                                ? _c(
                                    "v-alert",
                                    {
                                      staticClass: "mt-3",
                                      attrs: { type: "error" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(_vm.error) +
                                          "\n                            "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify-loader/lib/runtime/installComponents.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify-loader/lib/runtime/installComponents.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function installComponents (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }
}


/***/ }),

/***/ "./resources/js/App/Layout/login.vue":
/*!*******************************************!*\
  !*** ./resources/js/App/Layout/login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_cafbfda0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=cafbfda0& */ "./resources/js/App/Layout/login.vue?vue&type=template&id=cafbfda0&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/App/Layout/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VAppBar */ "./node_modules/vuetify/lib/components/VAppBar/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VMain */ "./node_modules/vuetify/lib/components/VMain/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_cafbfda0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_cafbfda0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_5__["VApp"],VAppBar: vuetify_lib_components_VAppBar__WEBPACK_IMPORTED_MODULE_6__["VAppBar"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_7__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VContainer"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VMain: vuetify_lib_components_VMain__WEBPACK_IMPORTED_MODULE_11__["VMain"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/App/Layout/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/App/Layout/login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/App/Layout/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/Layout/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/App/Layout/login.vue?vue&type=template&id=cafbfda0&":
/*!**************************************************************************!*\
  !*** ./resources/js/App/Layout/login.vue?vue&type=template&id=cafbfda0& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_cafbfda0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=cafbfda0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/App/Layout/login.vue?vue&type=template&id=cafbfda0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_cafbfda0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_cafbfda0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Services/Api/Factory.js":
/*!**********************************************!*\
  !*** ./resources/js/Services/Api/Factory.js ***!
  \**********************************************/
/*! exports provided: Factory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Factory", function() { return Factory; });
/* harmony import */ var _Teacher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Teacher */ "./resources/js/Services/Api/Teacher.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./resources/js/Services/Api/User.js");
/* harmony import */ var _Student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Student */ "./resources/js/Services/Api/Student.js");



var repository = {
  Teacher: _Teacher__WEBPACK_IMPORTED_MODULE_0__["default"],
  User: _User__WEBPACK_IMPORTED_MODULE_1__["default"],
  Student: _Student__WEBPACK_IMPORTED_MODULE_2__["default"]
};
var Factory = {
  get: function get(name) {
    return repository[name];
  }
};

/***/ }),

/***/ "./resources/js/Services/Api/Student.js":
/*!**********************************************!*\
  !*** ./resources/js/Services/Api/Student.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./resources/js/Services/Api/api.js");

var prefix = 'student';
/* harmony default export */ __webpack_exports__["default"] = ({
  getSchedule: function getSchedule(id) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(prefix, "/schedule"));
  },
  getPollsAndEvents: function getPollsAndEvents() {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(prefix, "/polls"));
  }
});

/***/ }),

/***/ "./resources/js/Services/Api/Teacher.js":
/*!**********************************************!*\
  !*** ./resources/js/Services/Api/Teacher.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./resources/js/Services/Api/api.js");

var prefix = 'teacher';
/* harmony default export */ __webpack_exports__["default"] = ({
  getGroups: function getGroups() {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(prefix, "/groups"));
  },
  getSchedule: function getSchedule() {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(prefix, "/schedule"));
  },
  getStudentsForSelectedHour: function getStudentsForSelectedHour(groupName) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(prefix, "/group/students"), {
      groupName: groupName
    });
  },
  createEvent: function createEvent(data) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(prefix, "/event"), data);
  },
  createPoll: function createPoll(data) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(prefix, "/poll"), data);
  },
  getGroup: function getGroup(id) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(prefix, "/group/").concat(id));
  }
});

/***/ }),

/***/ "./resources/js/Services/Api/User.js":
/*!*******************************************!*\
  !*** ./resources/js/Services/Api/User.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./resources/js/Services/Api/api.js");

var prefix = 'user';
/* harmony default export */ __webpack_exports__["default"] = ({
  login: function login(data) {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(prefix, "/login"), data);
  },
  getUser: function getUser() {
    return _api__WEBPACK_IMPORTED_MODULE_0__["default"].get("".concat(prefix));
  }
});

/***/ }),

/***/ "./resources/js/Services/Api/api.js":
/*!******************************************!*\
  !*** ./resources/js/Services/Api/api.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: '/api/',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token')
  }
}));

/***/ })

}]);