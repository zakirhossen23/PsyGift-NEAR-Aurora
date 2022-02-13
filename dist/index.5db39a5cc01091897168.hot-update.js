self["webpackHotUpdatepsygift"]("/index",{

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/provider.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout/Footer */ "./src/components/layout/Footer/index.tsx");
/* harmony import */ var _components_common_WalletConnectingModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/common/WalletConnectingModal */ "./src/components/common/WalletConnectingModal/index.tsx");
/* harmony import */ var _components_common_WalletUpdateModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/common/WalletUpdateModal */ "./src/components/common/WalletUpdateModal/index.tsx");
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/layout/Header */ "./src/components/layout/Header/index.tsx");
/* harmony import */ var _lang_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lang/en */ "./src/lang/en.ts");
/* harmony import */ var _modules_Account__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/modules/Account */ "./src/modules/Account/index.tsx");
/* harmony import */ var _pages_builder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/pages/builder */ "./src/pages/builder/index.tsx");
/* harmony import */ var _pages_builder_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/pages/builder/create */ "./src/pages/builder/create.tsx");
/* harmony import */ var _pages_builder_token__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/pages/builder/token */ "./src/pages/builder/token.tsx");
/* harmony import */ var _pages_pairs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/pages/pairs */ "./src/pages/pairs/index.tsx");
/* harmony import */ var _pages_pairs_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/pages/pairs/item */ "./src/pages/pairs/item.tsx");
/* harmony import */ var _pages_pool__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/pages/pool */ "./src/pages/pool.tsx");
/* harmony import */ var _pages_SwapPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/pages/SwapPage */ "./src/pages/SwapPage/index.tsx");
/* harmony import */ var _modules_EVERswap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/modules/EVERswap */ "./src/modules/EVERswap/index.tsx");
/* harmony import */ var _pages_tokens__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/pages/tokens */ "./src/pages/tokens/index.tsx");
/* harmony import */ var _pages_tokens_item__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/pages/tokens/item */ "./src/pages/tokens/item.tsx");
/* harmony import */ var _pages_pools__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/pages/pools */ "./src/pages/pools/index.tsx");
/* harmony import */ var _pages_pools_item__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/pages/pools/item */ "./src/pages/pools/item.tsx");
/* harmony import */ var _pages_pools_burn_liquidity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/pages/pools/burn-liquidity */ "./src/pages/pools/burn-liquidity.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/routes */ "./src/routes.ts");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/pages/Home */ "./src/pages/Home/index.tsx");
/* harmony import */ var _pages_CreateEvents__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/pages/CreateEvents */ "./src/pages/CreateEvents/index.tsx");
/* harmony import */ var _pages_donation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/pages/donation */ "./src/pages/donation/index.jsx");
/* harmony import */ var _pages_donation_auction__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/pages/donation/auction */ "./src/pages/donation/auction/index.jsx");
/* harmony import */ var _psyoption_pages_initialize_market_init__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/psyoption/pages/initialize-market/init */ "./src/psyoption/pages/initialize-market/init.tsx");
/* harmony import */ var _psyoption_pages_mint_mint__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/psyoption/pages/mint/mint */ "./src/psyoption/pages/mint/mint.tsx");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./App.scss */ "./src/components/App.scss");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./serviceWorker */ "./src/components/serviceWorker.ts");
/* harmony import */ var _contracts_contract__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @/contracts/contract */ "./src/contracts/contract.js");

































function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_31__["default"], {
    key: "intl",
    locale: "en",
    defaultLocale: "en",
    messages: _lang_en__WEBPACK_IMPORTED_MODULE_5__["default"],
    onError: _utils__WEBPACK_IMPORTED_MODULE_20__.noop
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_32__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout_Header__WEBPACK_IMPORTED_MODULE_4__.Header, {
    key: "header"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_22__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: "/CreateEvents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_CreateEvents__WEBPACK_IMPORTED_MODULE_23__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: "/donation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_donation__WEBPACK_IMPORTED_MODULE_24__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: "/donation/auction"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_donation_auction__WEBPACK_IMPORTED_MODULE_25__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    path: "/swap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SwapPage__WEBPACK_IMPORTED_MODULE_13__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: "/psyoption"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_psyoption_pages_initialize_market_init__WEBPACK_IMPORTED_MODULE_26__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: "/psyoption-mint"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_psyoption_pages_mint_mint__WEBPACK_IMPORTED_MODULE_27__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    path: "/EVERswap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modules_EVERswap__WEBPACK_IMPORTED_MODULE_14__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: _routes__WEBPACK_IMPORTED_MODULE_21__.appRoutes.poolList.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_pools__WEBPACK_IMPORTED_MODULE_17__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: _routes__WEBPACK_IMPORTED_MODULE_21__.appRoutes.poolRemoveLiquidity.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_pools_burn_liquidity__WEBPACK_IMPORTED_MODULE_19__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: _routes__WEBPACK_IMPORTED_MODULE_21__.appRoutes.poolItem.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_pools_item__WEBPACK_IMPORTED_MODULE_18__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: _routes__WEBPACK_IMPORTED_MODULE_21__.appRoutes.poolCreate.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_pool__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: _routes__WEBPACK_IMPORTED_MODULE_21__.appRoutes.tokenList.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_tokens__WEBPACK_IMPORTED_MODULE_15__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: _routes__WEBPACK_IMPORTED_MODULE_21__.appRoutes.tokenItem.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_tokens_item__WEBPACK_IMPORTED_MODULE_16__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: _routes__WEBPACK_IMPORTED_MODULE_21__.appRoutes.pairList.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_pairs__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: _routes__WEBPACK_IMPORTED_MODULE_21__.appRoutes.pairItem.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_pairs_item__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: _routes__WEBPACK_IMPORTED_MODULE_21__.appRoutes.builder.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_builder__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    path: _routes__WEBPACK_IMPORTED_MODULE_21__.appRoutes.builderCreate.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_builder_create__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_33__.Route, {
    exact: true,
    path: _routes__WEBPACK_IMPORTED_MODULE_21__.appRoutes.builderItem.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_builder_token__WEBPACK_IMPORTED_MODULE_9__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_1__.Footer, {
    key: "footer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "wallets"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modules_Account__WEBPACK_IMPORTED_MODULE_6__.Account, {
    key: "account"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_WalletConnectingModal__WEBPACK_IMPORTED_MODULE_2__.WalletConnectingModal, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_common_WalletUpdateModal__WEBPACK_IMPORTED_MODULE_3__.WalletUpdateModal, null))));
  _serviceWorker__WEBPACK_IMPORTED_MODULE_29__.unregister();
}

/***/ }),

/***/ "./src/contracts/contract.js":
/*!***********************************!*\
  !*** ./src/contracts/contract.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs3/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/regenerator */ "./node_modules/@babel/runtime-corejs3/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/array/from */ "./node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs3/core-js-stable/object/assign */ "./node_modules/@babel/runtime-corejs3/core-js-stable/object/assign.js");
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! near-api-js */ "./node_modules/near-api-js/lib/browser-index.js");
/* harmony import */ var near_api_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(near_api_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/config */ "./src/config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_6__);







window.nearConfig = _config__WEBPACK_IMPORTED_MODULE_6___default()("development" || 0);
console.log("development"); // Initializing contract

function initContract() {
  return _initContract.apply(this, arguments);
} // // Using initialized contract


function _initContract() {
  _initContract = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return near_api_js__WEBPACK_IMPORTED_MODULE_5__.connect(_babel_runtime_corejs3_core_js_stable_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({
              deps: {
                keyStore: new near_api_js__WEBPACK_IMPORTED_MODULE_5__.keyStores.BrowserLocalStorageKeyStore()
              }
            }, nearConfig));

          case 2:
            window.near = _context.sent;
            // Initializing Wallet based Account. It can work with NEAR TestNet wallet that
            // is hosted at https://wallet.testnet.near.org
            window.walletAccount = new near_api_js__WEBPACK_IMPORTED_MODULE_5__.WalletAccount(window.near); // Getting the Account ID. If unauthorized yet, it's just empty string.

            window.accountId = window.walletAccount.getAccountId(); // Initializing our contract APIs by contract name and configuration.

            _context.next = 7;
            return window.near.loadContract(nearConfig.contractName, {
              // NOTE: This configuration only needed while NEAR is still in development
              // View methods are read only. They don't modify the state, but usually return some value.
              viewMethods: ['whoSaidHi'],
              // Change methods can modify the state. But you don't receive the returned value when called.
              changeMethods: ['sayHi'],
              // Sender is the account ID to initialize transactions.
              sender: window.accountId
            });

          case 7:
            window.contract = _context.sent;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _initContract.apply(this, arguments);
}

function doWork() {
  return _doWork.apply(this, arguments);
} // Function that initializes the signIn button using WalletAccount


function _doWork() {
  _doWork = (0,_babel_runtime_corejs3_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
    return _babel_runtime_corejs3_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // Based on whether you've authorized, checking which flow we should go.
            if (!window.walletAccount.isSignedIn()) {
              signedOutFlow();
            } else {
              signedInFlow();
            }

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _doWork.apply(this, arguments);
}

function signedOutFlow() {
  // Displaying the signed out flow container.
  _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_2___default()(document.querySelectorAll('.signed-out')).forEach(function (el) {
    return el.style.display = '';
  }); // Adding an event to a sing-in button.


  document.getElementById('sign-in').addEventListener('click', function () {
    window.walletAccount.requestSignIn( // The contract name that would be authorized to be called by the user's account.
    window.nearConfig.contractName, // This is the app name. It can be anything.
    'PsyGift' // We can also provide URLs to redirect on success and failure.
    // The current URL is used by default.
    );
  });
} // Main function for the signed-in flow (already authorized by the wallet).


function signedInFlow() {
  // Displaying the signed in flow container.
  _babel_runtime_corejs3_core_js_stable_array_from__WEBPACK_IMPORTED_MODULE_2___default()(document.querySelectorAll('.signed-in')).forEach(function (el) {
    return el.style.display = '';
  }); // Displaying current account name.


  document.getElementById('account-id').innerText = window.accountId; // Adding an event to a say-hi button.

  document.getElementById('say-hi').addEventListener('click', function () {
    // We call say Hi and then update who said Hi last.
    window.contract.sayHi().then(updateWhoSaidHi);
  }); // Adding an event to a sing-out button.

  document.getElementById('sign-out').addEventListener('click', function (e) {
    e.preventDefault();
    walletAccount.signOut(); // Forcing redirect.

    window.location.replace(window.location.origin + window.location.pathname);
  }); // fetch who last said hi without requiring button click
  // but wait a second so the question is legible

  setTimeout(updateWhoSaidHi, 1000);
} // Function to update who said hi


function updateWhoSaidHi() {
  // JavaScript tip:
  // This is another example of how to use promises. Since this function is not async,
  // we can't await for `contract.whoSaidHi()`, instead we attaching a callback function
  // usin `.then()`.
  contract.whoSaidHi().then(function (who) {
    var el = document.getElementById('who');
    el.innerText = who || 'No one'; // only link to profile if there's a profile to link to

    if (who) {
      el.href = 'https://explorer.testnet.near.org/accounts/' + who;
    } // change the ? to a !


    var parent = el.parentNode;
    parent.innerHTML = parent.innerHTML.replace('?', '!');
  });
} // Loads nearAPI and this contract into window scope.


window.nearInitPromise = initContract().then(doWork).catch(console.error);

/***/ }),

/***/ "./node_modules/capability/es5.js":
/*!****************************************!*\
  !*** ./node_modules/capability/es5.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! . */ "./node_modules/capability/index.js").check("es5");

/***/ }),

/***/ "./node_modules/capability/index.js":
/*!******************************************!*\
  !*** ./node_modules/capability/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! ./lib/definitions */ "./node_modules/capability/lib/definitions.js");
module.exports = __webpack_require__(/*! ./lib */ "./node_modules/capability/lib/index.js");


/***/ }),

/***/ "./node_modules/capability/lib/CapabilityDetector.js":
/*!***********************************************************!*\
  !*** ./node_modules/capability/lib/CapabilityDetector.js ***!
  \***********************************************************/
/***/ (function(module) {

var CapabilityDetector = function () {
    this.tests = {};
    this.cache = {};
};
CapabilityDetector.prototype = {
    constructor: CapabilityDetector,
    define: function (name, test) {
        if (typeof (name) != "string" || !(test instanceof Function))
            throw new Error("Invalid capability definition.");
        if (this.tests[name])
            throw new Error('Duplicated capability definition by "' + name + '".');
        this.tests[name] = test;
    },
    check: function (name) {
        if (!this.test(name))
            throw new Error('The current environment does not support "' + name + '", therefore we cannot continue.');
    },
    test: function (name) {
        if (this.cache[name] !== undefined)
            return this.cache[name];
        if (!this.tests[name])
            throw new Error('Unknown capability with name "' + name + '".');
        var test = this.tests[name];
        this.cache[name] = !!test();
        return this.cache[name];
    }
};

module.exports = CapabilityDetector;

/***/ }),

/***/ "./node_modules/capability/lib/definitions.js":
/*!****************************************************!*\
  !*** ./node_modules/capability/lib/definitions.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var capability = __webpack_require__(/*! . */ "./node_modules/capability/lib/index.js"),
    define = capability.define,
    test = capability.test;

define("strict mode", function () {
    return (this === undefined);
});

define("arguments.callee.caller", function () {
    try {
        return (function () {
                return arguments.callee.caller;
            })() === arguments.callee;
    } catch (strictModeIsEnforced) {
        return false;
    }
});

define("es5", function () {
    return test("Array.prototype.forEach") &&
        test("Array.prototype.map") &&
        test("Function.prototype.bind") &&
        test("Object.create") &&
        test("Object.defineProperties") &&
        test("Object.defineProperty") &&
        test("Object.prototype.hasOwnProperty");
});

define("Array.prototype.forEach", function () {
    return Array.prototype.forEach;
});

define("Array.prototype.map", function () {
    return Array.prototype.map;
});

define("Function.prototype.bind", function () {
    return Function.prototype.bind;
});

define("Object.create", function () {
    return Object.create;
});

define("Object.defineProperties", function () {
    return Object.defineProperties;
});

define("Object.defineProperty", function () {
    return Object.defineProperty;
});

define("Object.prototype.hasOwnProperty", function () {
    return Object.prototype.hasOwnProperty;
});

define("Error.captureStackTrace", function () {
    return Error.captureStackTrace;
});

define("Error.prototype.stack", function () {
    try {
        throw new Error();
    }
    catch (e) {
        return e.stack || e.stacktrace;
    }
});

/***/ }),

/***/ "./node_modules/capability/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/capability/lib/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var CapabilityDetector = __webpack_require__(/*! ./CapabilityDetector */ "./node_modules/capability/lib/CapabilityDetector.js");

var detector = new CapabilityDetector();

var capability = function (name) {
    return detector.test(name);
};
capability.define = function (name, test) {
    detector.define(name, test);
};
capability.check = function (name) {
    detector.check(name);
};
capability.test = capability;

module.exports = capability;

/***/ }),

/***/ "./node_modules/depd/lib/browser/index.js":
/*!************************************************!*\
  !*** ./node_modules/depd/lib/browser/index.js ***!
  \************************************************/
/***/ (function(module) {

"use strict";
/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = depd

/**
 * Create deprecate for namespace in caller.
 */

function depd (namespace) {
  if (!namespace) {
    throw new TypeError('argument namespace is required')
  }

  function deprecate (message) {
    // no-op in browser
  }

  deprecate._file = undefined
  deprecate._ignored = true
  deprecate._namespace = namespace
  deprecate._traced = false
  deprecate._warned = Object.create(null)

  deprecate.function = wrapfunction
  deprecate.property = wrapproperty

  return deprecate
}

/**
 * Return a wrapped function in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */

function wrapfunction (fn, message) {
  if (typeof fn !== 'function') {
    throw new TypeError('argument fn must be a function')
  }

  return fn
}

/**
 * Wrap property in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */

function wrapproperty (obj, prop, message) {
  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
    throw new TypeError('argument obj must be object')
  }

  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)

  if (!descriptor) {
    throw new TypeError('must call property on owner object')
  }

  if (!descriptor.configurable) {
    throw new TypeError('property must be configurable')
  }
}


/***/ }),

/***/ "./node_modules/error-polyfill/index.js":
/*!**********************************************!*\
  !*** ./node_modules/error-polyfill/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "./node_modules/error-polyfill/lib/index.js");

/***/ }),

/***/ "./node_modules/error-polyfill/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/error-polyfill/lib/index.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! capability/es5 */ "./node_modules/capability/es5.js");

var capability = __webpack_require__(/*! capability */ "./node_modules/capability/index.js");

var polyfill;
if (capability("Error.captureStackTrace"))
    polyfill = __webpack_require__(/*! ./v8 */ "./node_modules/error-polyfill/lib/v8.js");
else if (capability("Error.prototype.stack"))
    polyfill = __webpack_require__(/*! ./non-v8/index */ "./node_modules/error-polyfill/lib/non-v8/index.js");
else
    polyfill = __webpack_require__(/*! ./unsupported */ "./node_modules/error-polyfill/lib/unsupported.js");

module.exports = polyfill();

/***/ }),

/***/ "./node_modules/error-polyfill/lib/non-v8/Frame.js":
/*!*********************************************************!*\
  !*** ./node_modules/error-polyfill/lib/non-v8/Frame.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Class = __webpack_require__(/*! o3 */ "./node_modules/o3/index.js").Class,
    abstractMethod = __webpack_require__(/*! o3 */ "./node_modules/o3/index.js").abstractMethod;

var Frame = Class(Object, {
    prototype: {
        init: Class.prototype.merge,
        frameString: undefined,
        toString: function () {
            return this.frameString;
        },
        functionValue: undefined,
        getThis: abstractMethod,
        getTypeName: abstractMethod,
        getFunction: function () {
            return this.functionValue;
        },
        getFunctionName: abstractMethod,
        getMethodName: abstractMethod,
        getFileName: abstractMethod,
        getLineNumber: abstractMethod,
        getColumnNumber: abstractMethod,
        getEvalOrigin: abstractMethod,
        isTopLevel: abstractMethod,
        isEval: abstractMethod,
        isNative: abstractMethod,
        isConstructor: abstractMethod
    }
});

module.exports = Frame;

/***/ }),

/***/ "./node_modules/error-polyfill/lib/non-v8/FrameStringParser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/error-polyfill/lib/non-v8/FrameStringParser.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Class = __webpack_require__(/*! o3 */ "./node_modules/o3/index.js").Class,
    Frame = __webpack_require__(/*! ./Frame */ "./node_modules/error-polyfill/lib/non-v8/Frame.js"),
    cache = __webpack_require__(/*! u3 */ "./node_modules/u3/index.js").cache;

var FrameStringParser = Class(Object, {
    prototype: {
        stackParser: null,
        frameParser: null,
        locationParsers: null,
        constructor: function (options) {
            Class.prototype.merge.call(this, options);
        },
        getFrames: function (frameStrings, functionValues) {
            var frames = [];
            for (var index = 0, length = frameStrings.length; index < length; ++index)
                frames[index] = this.getFrame(frameStrings[index], functionValues[index]);
            return frames;
        },
        getFrame: function (frameString, functionValue) {
            var config = {
                frameString: frameString,
                functionValue: functionValue
            };
            return new Frame(config);
        }
    }
});

module.exports = {
    getClass: cache(function () {
        return FrameStringParser;
    }),
    getInstance: cache(function () {
        var FrameStringParser = this.getClass();
        var instance = new FrameStringParser();
        return instance;
    })
};

/***/ }),

/***/ "./node_modules/error-polyfill/lib/non-v8/FrameStringSource.js":
/*!*********************************************************************!*\
  !*** ./node_modules/error-polyfill/lib/non-v8/FrameStringSource.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Class = __webpack_require__(/*! o3 */ "./node_modules/o3/index.js").Class,
    abstractMethod = __webpack_require__(/*! o3 */ "./node_modules/o3/index.js").abstractMethod,
    eachCombination = __webpack_require__(/*! u3 */ "./node_modules/u3/index.js").eachCombination,
    cache = __webpack_require__(/*! u3 */ "./node_modules/u3/index.js").cache,
    capability = __webpack_require__(/*! capability */ "./node_modules/capability/index.js");

var AbstractFrameStringSource = Class(Object, {
    prototype: {
        captureFrameStrings: function (frameShifts) {
            var error = this.createError();
            frameShifts.unshift(this.captureFrameStrings);
            frameShifts.unshift(this.createError);
            var capturedFrameStrings = this.getFrameStrings(error);

            var frameStrings = capturedFrameStrings.slice(frameShifts.length),
                functionValues = [];

            if (capability("arguments.callee.caller")) {
                var capturedFunctionValues = [
                    this.createError,
                    this.captureFrameStrings
                ];
                try {
                    var aCaller = arguments.callee;
                    while (aCaller = aCaller.caller)
                        capturedFunctionValues.push(aCaller);
                }
                catch (useStrictError) {
                }
                functionValues = capturedFunctionValues.slice(frameShifts.length);
            }
            return {
                frameStrings: frameStrings,
                functionValues: functionValues
            };
        },
        getFrameStrings: function (error) {
            var message = error.message || "";
            var name = error.name || "";
            var stackString = this.getStackString(error);
            if (stackString === undefined)
                return;
            var stackStringChunks = stackString.split("\n");
            var fromPosition = 0;
            var toPosition = stackStringChunks.length;
            if (this.hasHeader)
                fromPosition += name.split("\n").length + message.split("\n").length - 1;
            if (this.hasFooter)
                toPosition -= 1;
            return stackStringChunks.slice(fromPosition, toPosition);
        },
        createError: abstractMethod,
        getStackString: abstractMethod,
        hasHeader: undefined,
        hasFooter: undefined
    }
});

var FrameStringSourceCalibrator = Class(Object, {
    prototype: {
        calibrateClass: function (FrameStringSource) {
            return this.calibrateMethods(FrameStringSource) && this.calibrateEnvelope(FrameStringSource);
        },
        calibrateMethods: function (FrameStringSource) {
            try {
                eachCombination([[
                    function (message) {
                        return new Error(message);
                    },
                    function (message) {
                        try {
                            throw new Error(message);
                        }
                        catch (error) {
                            return error;
                        }
                    }
                ], [
                    function (error) {
                        return error.stack;
                    },
                    function (error) {
                        return error.stacktrace;
                    }
                ]], function (createError, getStackString) {
                    if (getStackString(createError()))
                        throw {
                            getStackString: getStackString,
                            createError: createError
                        };
                });
            } catch (workingImplementation) {
                Class.merge.call(FrameStringSource, {
                    prototype: workingImplementation
                });
                return true;
            }
            return false;
        },
        calibrateEnvelope: function (FrameStringSource) {
            var getStackString = FrameStringSource.prototype.getStackString;
            var createError = FrameStringSource.prototype.createError;
            var calibratorStackString = getStackString(createError("marker"));
            var calibratorFrameStrings = calibratorStackString.split("\n");
            Class.merge.call(FrameStringSource, {
                prototype: {
                    hasHeader: /marker/.test(calibratorFrameStrings[0]),
                    hasFooter: calibratorFrameStrings[calibratorFrameStrings.length - 1] === ""
                }
            });
            return true;
        }
    }
});


module.exports = {
    getClass: cache(function () {
        var FrameStringSource;
        if (FrameStringSource)
            return FrameStringSource;
        FrameStringSource = Class(AbstractFrameStringSource, {});
        var calibrator = new FrameStringSourceCalibrator();
        if (!calibrator.calibrateClass(FrameStringSource))
            throw new Error("Cannot read Error.prototype.stack in this environment.");
        return FrameStringSource;
    }),
    getInstance: cache(function () {
        var FrameStringSource = this.getClass();
        var instance = new FrameStringSource();
        return instance;
    })
};

/***/ }),

/***/ "./node_modules/error-polyfill/lib/non-v8/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/error-polyfill/lib/non-v8/index.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var FrameStringSource = __webpack_require__(/*! ./FrameStringSource */ "./node_modules/error-polyfill/lib/non-v8/FrameStringSource.js"),
    FrameStringParser = __webpack_require__(/*! ./FrameStringParser */ "./node_modules/error-polyfill/lib/non-v8/FrameStringParser.js"),
    cache = __webpack_require__(/*! u3 */ "./node_modules/u3/index.js").cache,
    prepareStackTrace = __webpack_require__(/*! ../prepareStackTrace */ "./node_modules/error-polyfill/lib/prepareStackTrace.js");

module.exports = function () {

    Error.captureStackTrace = function captureStackTrace(throwable, terminator) {
        var warnings;
        var frameShifts = [
            captureStackTrace
        ];
        if (terminator) {
            // additional frames can come here if arguments.callee.caller is supported
            // otherwise it is hard to identify the terminator
            frameShifts.push(terminator);
        }
        var captured = FrameStringSource.getInstance().captureFrameStrings(frameShifts);
        Object.defineProperties(throwable, {
            stack: {
                configurable: true,
                get: cache(function () {
                    var frames = FrameStringParser.getInstance().getFrames(captured.frameStrings, captured.functionValues);
                    return (Error.prepareStackTrace || prepareStackTrace)(throwable, frames, warnings);
                })
            },
            cachedStack: {
                configurable: true,
                writable: true,
                enumerable: false,
                value: true
            }
        });
    };

    Error.getStackTrace = function (throwable) {
        if (throwable.cachedStack)
            return throwable.stack;
        var frameStrings = FrameStringSource.getInstance().getFrameStrings(throwable),
            frames = [],
            warnings;
        if (frameStrings)
            frames = FrameStringParser.getInstance().getFrames(frameStrings, []);
        else
            warnings = [
                "The stack is not readable by unthrown errors in this environment."
            ];
        var stack = (Error.prepareStackTrace || prepareStackTrace)(throwable, frames, warnings);
        if (frameStrings)
            try {
                Object.defineProperties(throwable, {
                    stack: {
                        configurable: true,
                        writable: true,
                        enumerable: false,
                        value: stack
                    },
                    cachedStack: {
                        configurable: true,
                        writable: true,
                        enumerable: false,
                        value: true
                    }
                });
            } catch (nonConfigurableError) {
            }
        return stack;
    };

    return {
        prepareStackTrace: prepareStackTrace
    };
};

/***/ }),

/***/ "./node_modules/error-polyfill/lib/prepareStackTrace.js":
/*!**************************************************************!*\
  !*** ./node_modules/error-polyfill/lib/prepareStackTrace.js ***!
  \**************************************************************/
/***/ (function(module) {

var prepareStackTrace = function (throwable, frames, warnings) {
    var string = "";
    string += throwable.name || "Error";
    string += ": " + (throwable.message || "");
    if (warnings instanceof Array)
        for (var warningIndex in warnings) {
            var warning = warnings[warningIndex];
            string += "\n   # " + warning;
        }
    for (var frameIndex in frames) {
        var frame = frames[frameIndex];
        string += "\n   at " + frame.toString();
    }
    return string;
};

module.exports = prepareStackTrace;

/***/ }),

/***/ "./node_modules/error-polyfill/lib/unsupported.js":
/*!********************************************************!*\
  !*** ./node_modules/error-polyfill/lib/unsupported.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cache = __webpack_require__(/*! u3 */ "./node_modules/u3/index.js").cache,
    prepareStackTrace = __webpack_require__(/*! ./prepareStackTrace */ "./node_modules/error-polyfill/lib/prepareStackTrace.js");

module.exports = function () {

    Error.captureStackTrace = function (throwable, terminator) {
        Object.defineProperties(throwable, {
            stack: {
                configurable: true,
                get: cache(function () {
                    return (Error.prepareStackTrace || prepareStackTrace)(throwable, []);
                })
            },
            cachedStack: {
                configurable: true,
                writable: true,
                enumerable: false,
                value: true
            }
        });
    };

    Error.getStackTrace = function (throwable) {
        if (throwable.cachedStack)
            return throwable.stack;
        var stack = (Error.prepareStackTrace || prepareStackTrace)(throwable, []);
        try {
            Object.defineProperties(throwable, {
                stack: {
                    configurable: true,
                    writable: true,
                    enumerable: false,
                    value: stack
                },
                cachedStack: {
                    configurable: true,
                    writable: true,
                    enumerable: false,
                    value: true
                }
            });
        } catch (nonConfigurableError) {
        }
        return stack;
    };

    return {
        prepareStackTrace: prepareStackTrace
    };
};

/***/ }),

/***/ "./node_modules/error-polyfill/lib/v8.js":
/*!***********************************************!*\
  !*** ./node_modules/error-polyfill/lib/v8.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var prepareStackTrace = __webpack_require__(/*! ./prepareStackTrace */ "./node_modules/error-polyfill/lib/prepareStackTrace.js");

module.exports = function () {
    Error.getStackTrace = function (throwable) {
        return throwable.stack;
    };

    return {
        prepareStackTrace: prepareStackTrace
    };
};

/***/ }),

/***/ "./node_modules/http-errors/index.js":
/*!*******************************************!*\
  !*** ./node_modules/http-errors/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var deprecate = __webpack_require__(/*! depd */ "./node_modules/depd/lib/browser/index.js")('http-errors')
var setPrototypeOf = __webpack_require__(/*! setprototypeof */ "./node_modules/setprototypeof/index.js")
var statuses = __webpack_require__(/*! statuses */ "./node_modules/statuses/index.js")
var inherits = __webpack_require__(/*! inherits */ "./node_modules/http-errors/node_modules/inherits/inherits_browser.js")
var toIdentifier = __webpack_require__(/*! toidentifier */ "./node_modules/toidentifier/index.js")

/**
 * Module exports.
 * @public
 */

module.exports = createError
module.exports.HttpError = createHttpErrorConstructor()

// Populate exports for all constructors
populateConstructorExports(module.exports, statuses.codes, module.exports.HttpError)

/**
 * Get the code class of a status code.
 * @private
 */

function codeClass (status) {
  return Number(String(status).charAt(0) + '00')
}

/**
 * Create a new HTTP Error.
 *
 * @returns {Error}
 * @public
 */

function createError () {
  // so much arity going on ~_~
  var err
  var msg
  var status = 500
  var props = {}
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i]
    if (arg instanceof Error) {
      err = arg
      status = err.status || err.statusCode || status
      continue
    }
    switch (typeof arg) {
      case 'string':
        msg = arg
        break
      case 'number':
        status = arg
        if (i !== 0) {
          deprecate('non-first-argument status code; replace with createError(' + arg + ', ...)')
        }
        break
      case 'object':
        props = arg
        break
    }
  }

  if (typeof status === 'number' && (status < 400 || status >= 600)) {
    deprecate('non-error status code; use only 4xx or 5xx status codes')
  }

  if (typeof status !== 'number' ||
    (!statuses[status] && (status < 400 || status >= 600))) {
    status = 500
  }

  // constructor
  var HttpError = createError[status] || createError[codeClass(status)]

  if (!err) {
    // create error
    err = HttpError
      ? new HttpError(msg)
      : new Error(msg || statuses[status])
    Error.captureStackTrace(err, createError)
  }

  if (!HttpError || !(err instanceof HttpError) || err.status !== status) {
    // add properties to generic error
    err.expose = status < 500
    err.status = err.statusCode = status
  }

  for (var key in props) {
    if (key !== 'status' && key !== 'statusCode') {
      err[key] = props[key]
    }
  }

  return err
}

/**
 * Create HTTP error abstract base class.
 * @private
 */

function createHttpErrorConstructor () {
  function HttpError () {
    throw new TypeError('cannot construct abstract class')
  }

  inherits(HttpError, Error)

  return HttpError
}

/**
 * Create a constructor for a client error.
 * @private
 */

function createClientErrorConstructor (HttpError, name, code) {
  var className = name.match(/Error$/) ? name : name + 'Error'

  function ClientError (message) {
    // create the error object
    var msg = message != null ? message : statuses[code]
    var err = new Error(msg)

    // capture a stack trace to the construction point
    Error.captureStackTrace(err, ClientError)

    // adjust the [[Prototype]]
    setPrototypeOf(err, ClientError.prototype)

    // redefine the error message
    Object.defineProperty(err, 'message', {
      enumerable: true,
      configurable: true,
      value: msg,
      writable: true
    })

    // redefine the error name
    Object.defineProperty(err, 'name', {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true
    })

    return err
  }

  inherits(ClientError, HttpError)
  nameFunc(ClientError, className)

  ClientError.prototype.status = code
  ClientError.prototype.statusCode = code
  ClientError.prototype.expose = true

  return ClientError
}

/**
 * Create a constructor for a server error.
 * @private
 */

function createServerErrorConstructor (HttpError, name, code) {
  var className = name.match(/Error$/) ? name : name + 'Error'

  function ServerError (message) {
    // create the error object
    var msg = message != null ? message : statuses[code]
    var err = new Error(msg)

    // capture a stack trace to the construction point
    Error.captureStackTrace(err, ServerError)

    // adjust the [[Prototype]]
    setPrototypeOf(err, ServerError.prototype)

    // redefine the error message
    Object.defineProperty(err, 'message', {
      enumerable: true,
      configurable: true,
      value: msg,
      writable: true
    })

    // redefine the error name
    Object.defineProperty(err, 'name', {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true
    })

    return err
  }

  inherits(ServerError, HttpError)
  nameFunc(ServerError, className)

  ServerError.prototype.status = code
  ServerError.prototype.statusCode = code
  ServerError.prototype.expose = false

  return ServerError
}

/**
 * Set the name of a function, if possible.
 * @private
 */

function nameFunc (func, name) {
  var desc = Object.getOwnPropertyDescriptor(func, 'name')

  if (desc && desc.configurable) {
    desc.value = name
    Object.defineProperty(func, 'name', desc)
  }
}

/**
 * Populate the exports object with constructors for every error class.
 * @private
 */

function populateConstructorExports (exports, codes, HttpError) {
  codes.forEach(function forEachCode (code) {
    var CodeError
    var name = toIdentifier(statuses[code])

    switch (codeClass(code)) {
      case 400:
        CodeError = createClientErrorConstructor(HttpError, name, code)
        break
      case 500:
        CodeError = createServerErrorConstructor(HttpError, name, code)
        break
    }

    if (CodeError) {
      // export the constructor
      exports[code] = CodeError
      exports[name] = CodeError
    }
  })

  // backwards-compatibility
  exports["I'mateapot"] = deprecate.function(exports.ImATeapot,
    '"I\'mateapot"; use "ImATeapot" instead')
}


/***/ }),

/***/ "./node_modules/http-errors/node_modules/inherits/inherits_browser.js":
/*!****************************************************************************!*\
  !*** ./node_modules/http-errors/node_modules/inherits/inherits_browser.js ***!
  \****************************************************************************/
/***/ (function(module) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/mustache/mustache.js":
/*!*******************************************!*\
  !*** ./node_modules/mustache/mustache.js ***!
  \*******************************************/
/***/ (function(module) {

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  /*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  /**
   * Safe way of detecting whether or not the given thing is a primitive and
   * whether it has the given property
   */
  function primitiveHasOwnProperty (primitive, propName) {
    return (
      primitive != null
      && typeof primitive !== 'object'
      && primitive.hasOwnProperty
      && primitive.hasOwnProperty(propName)
    );
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   *
   * Tokens for partials also contain two more elements: 1) a string value of
   * indendation prior to that tag and 2) the index of that tag on that line -
   * eg a value of 2 indicates the partial is the third tag on this line.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];
    var lineHasNonSpace = false;
    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?
    var indentation = '';  // Tracks indentation for tags that use it
    var tagIndex = 0;      // Stores a count of number of tags encountered on a line

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
            indentation += chr;
          } else {
            nonSpace = true;
            lineHasNonSpace = true;
            indentation += ' ';
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n') {
            stripSpace();
            indentation = '';
            tagIndex = 0;
            lineHasNonSpace = false;
          }
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      if (type == '>') {
        token = [ type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace ];
      } else {
        token = [ type, value, start, scanner.pos ];
      }
      tagIndex++;
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    stripSpace();

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, intermediateValue, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          intermediateValue = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           *
           * In the case where dot notation is used, we consider the lookup
           * to be successful even if the last "object" in the path is
           * not actually an object but a primitive (e.g., a string, or an
           * integer), because it is sometimes useful to access a property
           * of an autoboxed primitive, such as the length of a string.
           **/
          while (intermediateValue != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = (
                hasProperty(intermediateValue, names[index])
                || primitiveHasOwnProperty(intermediateValue, names[index])
              );

            intermediateValue = intermediateValue[names[index++]];
          }
        } else {
          intermediateValue = context.view[name];

          /**
           * Only checking against `hasProperty`, which always returns `false` if
           * `context.view` is not an object. Deliberately omitting the check
           * against `primitiveHasOwnProperty` if dot notation is not used.
           *
           * Consider this example:
           * ```
           * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
           * ```
           *
           * If we were to check also against `primitiveHasOwnProperty`, as we do
           * in the dot notation case, then render call would return:
           *
           * "The length of a football field is 9."
           *
           * rather than the expected:
           *
           * "The length of a football field is 100 yards."
           **/
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit) {
          value = intermediateValue;
          break;
        }

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.templateCache = {
      _cache: {},
      set: function set (key, value) {
        this._cache[key] = value;
      },
      get: function get (key) {
        return this._cache[key];
      },
      clear: function clear () {
        this._cache = {};
      }
    };
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    if (typeof this.templateCache !== 'undefined') {
      this.templateCache.clear();
    }
  };

  /**
   * Parses and caches the given `template` according to the given `tags` or
   * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.templateCache;
    var cacheKey = template + ':' + (tags || mustache.tags).join(':');
    var isCacheEnabled = typeof cache !== 'undefined';
    var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;

    if (tokens == undefined) {
      tokens = parseTemplate(template, tags);
      isCacheEnabled && cache.set(cacheKey, tokens);
    }
    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   *
   * If the optional `config` argument is given here, then it should be an
   * object with a `tags` attribute or an `escape` attribute or both.
   * If an array is passed, then it will be interpreted the same way as
   * a `tags` attribute on a `config` object.
   *
   * The `tags` attribute of a `config` object must be an array with two
   * string values: the opening and closing tags used in the template (e.g.
   * [ "<%", "%>" ]). The default is to mustache.tags.
   *
   * The `escape` attribute of a `config` object must be a function which
   * accepts a string as input and outputs a safely escaped string.
   * If an `escape` function is not provided, then an HTML-safe string
   * escaping function is used as the default.
   */
  Writer.prototype.render = function render (template, view, partials, config) {
    var tags = this.getConfigTags(config);
    var tokens = this.parse(template, tags);
    var context = (view instanceof Context) ? view : new Context(view, undefined);
    return this.renderTokens(tokens, context, partials, template, config);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, config) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate, config);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate, config);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, config);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context, config);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate, config) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials, config);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate, config) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate, config);
  };

  Writer.prototype.indentPartial = function indentPartial (partial, indentation, lineHasNonSpace) {
    var filteredIndentation = indentation.replace(/[^ \t]/g, '');
    var partialByNl = partial.split('\n');
    for (var i = 0; i < partialByNl.length; i++) {
      if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
        partialByNl[i] = filteredIndentation + partialByNl[i];
      }
    }
    return partialByNl.join('\n');
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials, config) {
    if (!partials) return;
    var tags = this.getConfigTags(config);

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null) {
      var lineHasNonSpace = token[6];
      var tagIndex = token[5];
      var indentation = token[4];
      var indentedValue = value;
      if (tagIndex == 0 && indentation) {
        indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
      }
      var tokens = this.parse(indentedValue, tags);
      return this.renderTokens(tokens, context, partials, indentedValue, config);
    }
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context, config) {
    var escape = this.getConfigEscape(config) || mustache.escape;
    var value = context.lookup(token[1]);
    if (value != null)
      return (typeof value === 'number' && escape === mustache.escape) ? String(value) : escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  Writer.prototype.getConfigTags = function getConfigTags (config) {
    if (isArray(config)) {
      return config;
    }
    else if (config && typeof config === 'object') {
      return config.tags;
    }
    else {
      return undefined;
    }
  };

  Writer.prototype.getConfigEscape = function getConfigEscape (config) {
    if (config && typeof config === 'object' && !isArray(config)) {
      return config.escape;
    }
    else {
      return undefined;
    }
  };

  var mustache = {
    name: 'mustache.js',
    version: '4.2.0',
    tags: [ '{{', '}}' ],
    clearCache: undefined,
    escape: undefined,
    parse: undefined,
    render: undefined,
    Scanner: undefined,
    Context: undefined,
    Writer: undefined,
    /**
     * Allows a user to override the default caching strategy, by providing an
     * object with set, get and clear methods. This can also be used to disable
     * the cache by setting it to the literal `undefined`.
     */
    set templateCache (cache) {
      defaultWriter.templateCache = cache;
    },
    /**
     * Gets the default or overridden caching object from the default writer.
     */
    get templateCache () {
      return defaultWriter.templateCache;
    }
  };

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view`, `partials`, and `config`
   * using the default writer.
   */
  mustache.render = function render (template, view, partials, config) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials, config);
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;

})));


/***/ }),

/***/ "./node_modules/near-api-js/lib/account.js":
/*!*************************************************!*\
  !*** ./node_modules/near-api-js/lib/account.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Account = void 0;
const bn_js_1 = __importDefault(__webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js"));
const depd_1 = __importDefault(__webpack_require__(/*! depd */ "./node_modules/near-api-js/node_modules/depd/lib/browser/index.js"));
const transaction_1 = __webpack_require__(/*! ./transaction */ "./node_modules/near-api-js/lib/transaction.js");
const providers_1 = __webpack_require__(/*! ./providers */ "./node_modules/near-api-js/lib/providers/index.js");
const borsh_1 = __webpack_require__(/*! borsh */ "./node_modules/near-api-js/node_modules/borsh/lib/index.js");
const key_pair_1 = __webpack_require__(/*! ./utils/key_pair */ "./node_modules/near-api-js/lib/utils/key_pair.js");
const errors_1 = __webpack_require__(/*! ./utils/errors */ "./node_modules/near-api-js/lib/utils/errors.js");
const rpc_errors_1 = __webpack_require__(/*! ./utils/rpc_errors */ "./node_modules/near-api-js/lib/utils/rpc_errors.js");
const constants_1 = __webpack_require__(/*! ./constants */ "./node_modules/near-api-js/lib/constants.js");
const exponential_backoff_1 = __importDefault(__webpack_require__(/*! ./utils/exponential-backoff */ "./node_modules/near-api-js/lib/utils/exponential-backoff.js"));
// Default number of retries with different nonce before giving up on a transaction.
const TX_NONCE_RETRY_NUMBER = 12;
// Default wait until next retry in millis.
const TX_NONCE_RETRY_WAIT = 500;
// Exponential back off for waiting to retry.
const TX_NONCE_RETRY_WAIT_BACKOFF = 1.5;
function parseJsonFromRawResponse(response) {
    return JSON.parse(Buffer.from(response).toString());
}
function bytesJsonStringify(input) {
    return Buffer.from(JSON.stringify(input));
}
/**
 * This class provides common account related RPC calls including signing transactions with a {@link KeyPair}.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#account}
 * @hint Use {@link WalletConnection} in the browser to redirect to {@link https://docs.near.org/docs/tools/near-wallet | NEAR Wallet} for Account/key management using the {@link BrowserLocalStorageKeyStore}.
 * @see {@link https://nomicon.io/DataStructures/Account.html | Account Spec}
 */
class Account {
    constructor(connection, accountId) {
        /** @hidden */
        this.accessKeyByPublicKeyCache = {};
        this.connection = connection;
        this.accountId = accountId;
    }
    /** @hidden */
    get ready() {
        const deprecate = depd_1.default('Account.ready()');
        deprecate('not needed anymore, always ready');
        return Promise.resolve();
    }
    async fetchState() {
        const deprecate = depd_1.default('Account.fetchState()');
        deprecate('use `Account.state()` instead');
    }
    /**
     * Returns basic NEAR account information via the `view_account` RPC query method
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#view-account}
     */
    async state() {
        return this.connection.provider.query({
            request_type: 'view_account',
            account_id: this.accountId,
            finality: 'optimistic'
        });
    }
    /** @hidden */
    printLogsAndFailures(contractId, results) {
        if (!process.env["NEAR_NO_LOGS"]) {
            for (const result of results) {
                console.log(`Receipt${result.receiptIds.length > 1 ? 's' : ''}: ${result.receiptIds.join(', ')}`);
                this.printLogs(contractId, result.logs, '\t');
                if (result.failure) {
                    console.warn(`\tFailure [${contractId}]: ${result.failure}`);
                }
            }
        }
    }
    /** @hidden */
    printLogs(contractId, logs, prefix = '') {
        if (!process.env["NEAR_NO_LOGS"]) {
            for (const log of logs) {
                console.log(`${prefix}Log [${contractId}]: ${log}`);
            }
        }
    }
    /**
     * Create a signed transaction which can be broadcast to the network
     * @param receiverId NEAR account receiving the transaction
     * @param actions list of actions to perform as part of the transaction
     * @see {@link JsonRpcProvider.sendTransaction}
     */
    async signTransaction(receiverId, actions) {
        const accessKeyInfo = await this.findAccessKey(receiverId, actions);
        if (!accessKeyInfo) {
            throw new providers_1.TypedError(`Can not sign transactions for account ${this.accountId} on network ${this.connection.networkId}, no matching key pair found in ${this.connection.signer}.`, 'KeyNotFound');
        }
        const { accessKey } = accessKeyInfo;
        const block = await this.connection.provider.block({ finality: 'final' });
        const blockHash = block.header.hash;
        const nonce = ++accessKey.nonce;
        return await transaction_1.signTransaction(receiverId, nonce, actions, borsh_1.baseDecode(blockHash), this.connection.signer, this.accountId, this.connection.networkId);
    }
    signAndSendTransaction(...args) {
        if (typeof args[0] === 'string') {
            return this.signAndSendTransactionV1(args[0], args[1]);
        }
        else {
            return this.signAndSendTransactionV2(args[0]);
        }
    }
    signAndSendTransactionV1(receiverId, actions) {
        const deprecate = depd_1.default('Account.signAndSendTransaction(receiverId, actions');
        deprecate('use `Account.signAndSendTransaction(SignAndSendTransactionOptions)` instead');
        return this.signAndSendTransactionV2({ receiverId, actions });
    }
    async signAndSendTransactionV2({ receiverId, actions, returnError }) {
        let txHash, signedTx;
        // TODO: TX_NONCE (different constants for different uses of exponentialBackoff?)
        const result = await exponential_backoff_1.default(TX_NONCE_RETRY_WAIT, TX_NONCE_RETRY_NUMBER, TX_NONCE_RETRY_WAIT_BACKOFF, async () => {
            [txHash, signedTx] = await this.signTransaction(receiverId, actions);
            const publicKey = signedTx.transaction.publicKey;
            try {
                return await this.connection.provider.sendTransaction(signedTx);
            }
            catch (error) {
                if (error.type === 'InvalidNonce') {
                    errors_1.logWarning(`Retrying transaction ${receiverId}:${borsh_1.baseEncode(txHash)} with new nonce.`);
                    delete this.accessKeyByPublicKeyCache[publicKey.toString()];
                    return null;
                }
                if (error.type === 'Expired') {
                    errors_1.logWarning(`Retrying transaction ${receiverId}:${borsh_1.baseEncode(txHash)} due to expired block hash`);
                    return null;
                }
                error.context = new providers_1.ErrorContext(borsh_1.baseEncode(txHash));
                throw error;
            }
        });
        if (!result) {
            // TODO: This should have different code actually, as means "transaction not submitted for sure"
            throw new providers_1.TypedError('nonce retries exceeded for transaction. This usually means there are too many parallel requests with the same access key.', 'RetriesExceeded');
        }
        const flatLogs = [result.transaction_outcome, ...result.receipts_outcome].reduce((acc, it) => {
            if (it.outcome.logs.length ||
                (typeof it.outcome.status === 'object' && typeof it.outcome.status.Failure === 'object')) {
                return acc.concat({
                    'receiptIds': it.outcome.receipt_ids,
                    'logs': it.outcome.logs,
                    'failure': typeof it.outcome.status.Failure != 'undefined' ? rpc_errors_1.parseRpcError(it.outcome.status.Failure) : null
                });
            }
            else
                return acc;
        }, []);
        this.printLogsAndFailures(signedTx.transaction.receiverId, flatLogs);
        if (!returnError && typeof result.status === 'object' && typeof result.status.Failure === 'object') {
            // if error data has error_message and error_type properties, we consider that node returned an error in the old format
            if (result.status.Failure.error_message && result.status.Failure.error_type) {
                throw new providers_1.TypedError(`Transaction ${result.transaction_outcome.id} failed. ${result.status.Failure.error_message}`, result.status.Failure.error_type);
            }
            else {
                throw rpc_errors_1.parseResultError(result);
            }
        }
        // TODO: if Tx is Unknown or Started.
        return result;
    }
    /**
     * Finds the {@link AccessKeyView} associated with the accounts {@link PublicKey} stored in the {@link KeyStore}.
     *
     * @todo Find matching access key based on transaction (i.e. receiverId and actions)
     *
     * @param receiverId currently unused (see todo)
     * @param actions currently unused (see todo)
     * @returns `{ publicKey PublicKey; accessKey: AccessKeyView }`
     */
    async findAccessKey(receiverId, actions) {
        // TODO: Find matching access key based on transaction (i.e. receiverId and actions)
        const publicKey = await this.connection.signer.getPublicKey(this.accountId, this.connection.networkId);
        if (!publicKey) {
            return null;
        }
        const cachedAccessKey = this.accessKeyByPublicKeyCache[publicKey.toString()];
        if (cachedAccessKey !== undefined) {
            return { publicKey, accessKey: cachedAccessKey };
        }
        try {
            const accessKey = await this.connection.provider.query({
                request_type: 'view_access_key',
                account_id: this.accountId,
                public_key: publicKey.toString(),
                finality: 'optimistic'
            });
            // this function can be called multiple times and retrieve the same access key
            // this checks to see if the access key was already retrieved and cached while
            // the above network call was in flight. To keep nonce values in line, we return
            // the cached access key.
            if (this.accessKeyByPublicKeyCache[publicKey.toString()]) {
                return { publicKey, accessKey: this.accessKeyByPublicKeyCache[publicKey.toString()] };
            }
            this.accessKeyByPublicKeyCache[publicKey.toString()] = accessKey;
            return { publicKey, accessKey };
        }
        catch (e) {
            if (e.type == 'AccessKeyDoesNotExist') {
                return null;
            }
            throw e;
        }
    }
    /**
     * Create a new account and deploy a contract to it
     *
     * @param contractId NEAR account where the contract is deployed
     * @param publicKey The public key to add to the created contract account
     * @param data The compiled contract code
     * @param amount of NEAR to transfer to the created contract account. Transfer enough to pay for storage https://docs.near.org/docs/concepts/storage-staking
     */
    async createAndDeployContract(contractId, publicKey, data, amount) {
        const accessKey = transaction_1.fullAccessKey();
        await this.signAndSendTransaction({
            receiverId: contractId,
            actions: [transaction_1.createAccount(), transaction_1.transfer(amount), transaction_1.addKey(key_pair_1.PublicKey.from(publicKey), accessKey), transaction_1.deployContract(data)]
        });
        const contractAccount = new Account(this.connection, contractId);
        return contractAccount;
    }
    /**
     * @param receiverId NEAR account receiving Ⓝ
     * @param amount Amount to send in yoctoⓃ
     */
    async sendMoney(receiverId, amount) {
        return this.signAndSendTransaction({
            receiverId,
            actions: [transaction_1.transfer(amount)]
        });
    }
    /**
     * @param newAccountId NEAR account name to be created
     * @param publicKey A public key created from the masterAccount
     */
    async createAccount(newAccountId, publicKey, amount) {
        const accessKey = transaction_1.fullAccessKey();
        return this.signAndSendTransaction({
            receiverId: newAccountId,
            actions: [transaction_1.createAccount(), transaction_1.transfer(amount), transaction_1.addKey(key_pair_1.PublicKey.from(publicKey), accessKey)]
        });
    }
    /**
     * @param beneficiaryId The NEAR account that will receive the remaining Ⓝ balance from the account being deleted
     */
    async deleteAccount(beneficiaryId) {
        return this.signAndSendTransaction({
            receiverId: this.accountId,
            actions: [transaction_1.deleteAccount(beneficiaryId)]
        });
    }
    /**
     * @param data The compiled contract code
     */
    async deployContract(data) {
        return this.signAndSendTransaction({
            receiverId: this.accountId,
            actions: [transaction_1.deployContract(data)]
        });
    }
    async functionCall(...args) {
        if (typeof args[0] === 'string') {
            return this.functionCallV1(args[0], args[1], args[2], args[3], args[4]);
        }
        else {
            return this.functionCallV2(args[0]);
        }
    }
    functionCallV1(contractId, methodName, args, gas, amount) {
        const deprecate = depd_1.default('Account.functionCall(contractId, methodName, args, gas, amount)');
        deprecate('use `Account.functionCall(FunctionCallOptions)` instead');
        args = args || {};
        this.validateArgs(args);
        return this.signAndSendTransaction({
            receiverId: contractId,
            actions: [transaction_1.functionCall(methodName, args, gas || constants_1.DEFAULT_FUNCTION_CALL_GAS, amount)]
        });
    }
    functionCallV2({ contractId, methodName, args = {}, gas = constants_1.DEFAULT_FUNCTION_CALL_GAS, attachedDeposit, walletMeta, walletCallbackUrl, stringify }) {
        this.validateArgs(args);
        const stringifyArg = stringify === undefined ? transaction_1.stringifyJsonOrBytes : stringify;
        return this.signAndSendTransaction({
            receiverId: contractId,
            actions: [transaction_1.functionCall(methodName, args, gas, attachedDeposit, stringifyArg)],
            walletMeta,
            walletCallbackUrl
        });
    }
    /**
     * @see {@link https://docs.near.org/docs/concepts/account#access-keys}
     * @todo expand this API to support more options.
     * @param publicKey A public key to be associated with the contract
     * @param contractId NEAR account where the contract is deployed
     * @param methodNames The method names on the contract that should be allowed to be called. Pass null for no method names and '' or [] for any method names.
     * @param amount Payment in yoctoⓃ that is sent to the contract during this function call
     */
    async addKey(publicKey, contractId, methodNames, amount) {
        if (!methodNames) {
            methodNames = [];
        }
        if (!Array.isArray(methodNames)) {
            methodNames = [methodNames];
        }
        let accessKey;
        if (!contractId) {
            accessKey = transaction_1.fullAccessKey();
        }
        else {
            accessKey = transaction_1.functionCallAccessKey(contractId, methodNames, amount);
        }
        return this.signAndSendTransaction({
            receiverId: this.accountId,
            actions: [transaction_1.addKey(key_pair_1.PublicKey.from(publicKey), accessKey)]
        });
    }
    /**
     * @param publicKey The public key to be deleted
     * @returns {Promise<FinalExecutionOutcome>}
     */
    async deleteKey(publicKey) {
        return this.signAndSendTransaction({
            receiverId: this.accountId,
            actions: [transaction_1.deleteKey(key_pair_1.PublicKey.from(publicKey))]
        });
    }
    /**
     * @see {@link https://docs.near.org/docs/validator/staking-overview}
     *
     * @param publicKey The public key for the account that's staking
     * @param amount The account to stake in yoctoⓃ
     */
    async stake(publicKey, amount) {
        return this.signAndSendTransaction({
            receiverId: this.accountId,
            actions: [transaction_1.stake(amount, key_pair_1.PublicKey.from(publicKey))]
        });
    }
    /** @hidden */
    validateArgs(args) {
        const isUint8Array = args.byteLength !== undefined && args.byteLength === args.length;
        if (isUint8Array) {
            return;
        }
        if (Array.isArray(args) || typeof args !== 'object') {
            throw new errors_1.PositionalArgsError();
        }
    }
    /**
     * Invoke a contract view function using the RPC API.
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#call-a-contract-function}
     *
     * @param contractId NEAR account where the contract is deployed
     * @param methodName The view-only method (no state mutations) name on the contract as it is written in the contract code
     * @param args Any arguments to the view contract method, wrapped in JSON
     * @param options.parse Parse the result of the call. Receives a Buffer (bytes array) and converts it to any object. By default result will be treated as json.
     * @param options.stringify Convert input arguments into a bytes array. By default the input is treated as a JSON.
     * @returns {Promise<any>}
     */
    async viewFunction(contractId, methodName, args = {}, { parse = parseJsonFromRawResponse, stringify = bytesJsonStringify } = {}) {
        this.validateArgs(args);
        const serializedArgs = stringify(args).toString('base64');
        const result = await this.connection.provider.query({
            request_type: 'call_function',
            account_id: contractId,
            method_name: methodName,
            args_base64: serializedArgs,
            finality: 'optimistic'
        });
        if (result.logs) {
            this.printLogs(contractId, result.logs);
        }
        return result.result && result.result.length > 0 && parse(Buffer.from(result.result));
    }
    /**
     * Returns the state (key value pairs) of this account's contract based on the key prefix.
     * Pass an empty string for prefix if you would like to return the entire state.
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#view-contract-state}
     *
     * @param prefix allows to filter which keys should be returned. Empty prefix means all keys. String prefix is utf-8 encoded.
     * @param blockQuery specifies which block to query state at. By default returns last "optimistic" block (i.e. not necessarily finalized).
     */
    async viewState(prefix, blockQuery = { finality: 'optimistic' }) {
        const { values } = await this.connection.provider.query({
            request_type: 'view_state',
            ...blockQuery,
            account_id: this.accountId,
            prefix_base64: Buffer.from(prefix).toString('base64')
        });
        return values.map(({ key, value }) => ({
            key: Buffer.from(key, 'base64'),
            value: Buffer.from(value, 'base64')
        }));
    }
    /**
     * Get all access keys for the account
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#view-access-key-list}
     */
    async getAccessKeys() {
        const response = await this.connection.provider.query({
            request_type: 'view_access_key_list',
            account_id: this.accountId,
            finality: 'optimistic'
        });
        // A breaking API change introduced extra information into the
        // response, so it now returns an object with a `keys` field instead
        // of an array: https://github.com/nearprotocol/nearcore/pull/1789
        if (Array.isArray(response)) {
            return response;
        }
        return response.keys;
    }
    /**
     * Returns a list of authorized apps
     * @todo update the response value to return all the different keys, not just app keys.
     */
    async getAccountDetails() {
        // TODO: update the response value to return all the different keys, not just app keys.
        // Also if we need this function, or getAccessKeys is good enough.
        const accessKeys = await this.getAccessKeys();
        const authorizedApps = accessKeys
            .filter(item => item.access_key.permission !== 'FullAccess')
            .map(item => {
            const perm = item.access_key.permission;
            return {
                contractId: perm.FunctionCall.receiver_id,
                amount: perm.FunctionCall.allowance,
                publicKey: item.public_key,
            };
        });
        return { authorizedApps };
    }
    /**
     * Returns calculated account balance
     */
    async getAccountBalance() {
        const protocolConfig = await this.connection.provider.experimental_protocolConfig({ finality: 'final' });
        const state = await this.state();
        const costPerByte = new bn_js_1.default(protocolConfig.runtime_config.storage_amount_per_byte);
        const stateStaked = new bn_js_1.default(state.storage_usage).mul(costPerByte);
        const staked = new bn_js_1.default(state.locked);
        const totalBalance = new bn_js_1.default(state.amount).add(staked);
        const availableBalance = totalBalance.sub(bn_js_1.default.max(staked, stateStaked));
        return {
            total: totalBalance.toString(),
            stateStaked: stateStaked.toString(),
            staked: staked.toString(),
            available: availableBalance.toString()
        };
    }
}
exports.Account = Account;


/***/ }),

/***/ "./node_modules/near-api-js/lib/account_creator.js":
/*!*********************************************************!*\
  !*** ./node_modules/near-api-js/lib/account_creator.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UrlAccountCreator = exports.LocalAccountCreator = exports.AccountCreator = void 0;
const web_1 = __webpack_require__(/*! ./utils/web */ "./node_modules/near-api-js/lib/utils/web.js");
/**
 * Account creator provides an interface for implementations to actually create accounts
 */
class AccountCreator {
}
exports.AccountCreator = AccountCreator;
class LocalAccountCreator extends AccountCreator {
    constructor(masterAccount, initialBalance) {
        super();
        this.masterAccount = masterAccount;
        this.initialBalance = initialBalance;
    }
    /**
     * Creates an account using a masterAccount, meaning the new account is created from an existing account
     * @param newAccountId The name of the NEAR account to be created
     * @param publicKey The public key from the masterAccount used to create this account
     * @returns {Promise<void>}
     */
    async createAccount(newAccountId, publicKey) {
        await this.masterAccount.createAccount(newAccountId, publicKey, this.initialBalance);
    }
}
exports.LocalAccountCreator = LocalAccountCreator;
class UrlAccountCreator extends AccountCreator {
    constructor(connection, helperUrl) {
        super();
        this.connection = connection;
        this.helperUrl = helperUrl;
    }
    /**
     * Creates an account using a helperUrl
     * This is [hosted here](https://helper.nearprotocol.com) or set up locally with the [near-contract-helper](https://github.com/nearprotocol/near-contract-helper) repository
     * @param newAccountId The name of the NEAR account to be created
     * @param publicKey The public key from the masterAccount used to create this account
     * @returns {Promise<void>}
     */
    async createAccount(newAccountId, publicKey) {
        await web_1.fetchJson(`${this.helperUrl}/account`, JSON.stringify({ newAccountId, newAccountPublicKey: publicKey.toString() }));
    }
}
exports.UrlAccountCreator = UrlAccountCreator;


/***/ }),

/***/ "./node_modules/near-api-js/lib/account_multisig.js":
/*!**********************************************************!*\
  !*** ./node_modules/near-api-js/lib/account_multisig.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Account2FA = exports.AccountMultisig = exports.MULTISIG_CONFIRM_METHODS = exports.MULTISIG_CHANGE_METHODS = exports.MULTISIG_DEPOSIT = exports.MULTISIG_GAS = exports.MULTISIG_ALLOWANCE = exports.MULTISIG_STORAGE_KEY = void 0;
const bn_js_1 = __importDefault(__webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js"));
const depd_1 = __importDefault(__webpack_require__(/*! depd */ "./node_modules/near-api-js/node_modules/depd/lib/browser/index.js"));
const account_1 = __webpack_require__(/*! ./account */ "./node_modules/near-api-js/lib/account.js");
const format_1 = __webpack_require__(/*! ./utils/format */ "./node_modules/near-api-js/lib/utils/format.js");
const key_pair_1 = __webpack_require__(/*! ./utils/key_pair */ "./node_modules/near-api-js/lib/utils/key_pair.js");
const transaction_1 = __webpack_require__(/*! ./transaction */ "./node_modules/near-api-js/lib/transaction.js");
const web_1 = __webpack_require__(/*! ./utils/web */ "./node_modules/near-api-js/lib/utils/web.js");
exports.MULTISIG_STORAGE_KEY = '__multisigRequest';
exports.MULTISIG_ALLOWANCE = new bn_js_1.default(format_1.parseNearAmount('1'));
// TODO: Different gas value for different requests (can reduce gas usage dramatically)
exports.MULTISIG_GAS = new bn_js_1.default('100000000000000');
exports.MULTISIG_DEPOSIT = new bn_js_1.default('0');
exports.MULTISIG_CHANGE_METHODS = ['add_request', 'add_request_and_confirm', 'delete_request', 'confirm'];
exports.MULTISIG_CONFIRM_METHODS = ['confirm'];
// in memory request cache for node w/o localStorage
const storageFallback = {
    [exports.MULTISIG_STORAGE_KEY]: null
};
class AccountMultisig extends account_1.Account {
    constructor(connection, accountId, options) {
        super(connection, accountId);
        this.storage = options.storage;
        this.onAddRequestResult = options.onAddRequestResult;
    }
    async signAndSendTransactionWithAccount(receiverId, actions) {
        return super.signAndSendTransaction({ receiverId, actions });
    }
    signAndSendTransaction(...args) {
        if (typeof args[0] === 'string') {
            return this._signAndSendTransaction({ receiverId: args[0], actions: args[1] });
        }
        return this._signAndSendTransaction(args[0]);
    }
    async _signAndSendTransaction({ receiverId, actions }) {
        const { accountId } = this;
        const args = Buffer.from(JSON.stringify({
            request: {
                receiver_id: receiverId,
                actions: convertActions(actions, accountId, receiverId)
            }
        }));
        let result;
        try {
            result = await super.signAndSendTransaction({
                receiverId: accountId,
                actions: [
                    transaction_1.functionCall('add_request_and_confirm', args, exports.MULTISIG_GAS, exports.MULTISIG_DEPOSIT)
                ]
            });
        }
        catch (e) {
            if (e.toString().includes('Account has too many active requests. Confirm or delete some')) {
                await this.deleteUnconfirmedRequests();
                return await this.signAndSendTransaction(receiverId, actions);
            }
            throw e;
        }
        // TODO: Are following even needed? Seems like it throws on error already
        if (!result.status) {
            throw new Error('Request failed');
        }
        const status = { ...result.status };
        if (!status.SuccessValue || typeof status.SuccessValue !== 'string') {
            throw new Error('Request failed');
        }
        this.setRequest({
            accountId,
            actions,
            requestId: parseInt(Buffer.from(status.SuccessValue, 'base64').toString('ascii'), 10)
        });
        if (this.onAddRequestResult) {
            await this.onAddRequestResult(result);
        }
        // NOTE there is no await on purpose to avoid blocking for 2fa
        this.deleteUnconfirmedRequests();
        return result;
    }
    async deleteUnconfirmedRequests() {
        // TODO: Delete in batch, don't delete unexpired
        // TODO: Delete in batch, don't delete unexpired (can reduce gas usage dramatically)
        const request_ids = await this.getRequestIds();
        const { requestId } = this.getRequest();
        for (const requestIdToDelete of request_ids) {
            if (requestIdToDelete == requestId) {
                continue;
            }
            try {
                await super.signAndSendTransaction({
                    receiverId: this.accountId,
                    actions: [transaction_1.functionCall('delete_request', { request_id: requestIdToDelete }, exports.MULTISIG_GAS, exports.MULTISIG_DEPOSIT)]
                });
            }
            catch (e) {
                console.warn('Attempt to delete an earlier request before 15 minutes failed. Will try again.');
            }
        }
    }
    // helpers
    async getRequestIds() {
        // TODO: Read requests from state to allow filtering by expiration time
        // TODO: https://github.com/near/core-contracts/blob/305d1db4f4f2cf5ce4c1ef3479f7544957381f11/multisig/src/lib.rs#L84
        return this.viewFunction(this.accountId, 'list_request_ids');
    }
    getRequest() {
        if (this.storage) {
            return JSON.parse(this.storage.getItem(exports.MULTISIG_STORAGE_KEY) || '{}');
        }
        return storageFallback[exports.MULTISIG_STORAGE_KEY];
    }
    setRequest(data) {
        if (this.storage) {
            return this.storage.setItem(exports.MULTISIG_STORAGE_KEY, JSON.stringify(data));
        }
        storageFallback[exports.MULTISIG_STORAGE_KEY] = data;
    }
}
exports.AccountMultisig = AccountMultisig;
class Account2FA extends AccountMultisig {
    constructor(connection, accountId, options) {
        super(connection, accountId, options);
        this.helperUrl = 'https://helper.testnet.near.org';
        this.helperUrl = options.helperUrl || this.helperUrl;
        this.storage = options.storage;
        this.sendCode = options.sendCode || this.sendCodeDefault;
        this.getCode = options.getCode || this.getCodeDefault;
        this.verifyCode = options.verifyCode || this.verifyCodeDefault;
        this.onConfirmResult = options.onConfirmResult;
    }
    async signAndSendTransaction(...args) {
        if (typeof args[0] === 'string') {
            const deprecate = depd_1.default('Account.signAndSendTransaction(receiverId, actions');
            deprecate('use `Account2FA.signAndSendTransaction(SignAndSendTransactionOptions)` instead');
            return this.__signAndSendTransaction({ receiverId: args[0], actions: args[1] });
        }
        else {
            return this.__signAndSendTransaction(args[0]);
        }
    }
    async __signAndSendTransaction({ receiverId, actions }) {
        await super.signAndSendTransaction({ receiverId, actions });
        // TODO: Should following override onRequestResult in superclass instead of doing custom signAndSendTransaction?
        await this.sendCode();
        const result = await this.promptAndVerify();
        if (this.onConfirmResult) {
            await this.onConfirmResult(result);
        }
        return result;
    }
    // default helpers for CH deployments of multisig
    async deployMultisig(contractBytes) {
        const { accountId } = this;
        const seedOrLedgerKey = (await this.getRecoveryMethods()).data
            .filter(({ kind, publicKey }) => (kind === 'phrase' || kind === 'ledger') && publicKey !== null)
            .map((rm) => rm.publicKey);
        const fak2lak = (await this.getAccessKeys())
            .filter(({ public_key, access_key: { permission } }) => permission === 'FullAccess' && !seedOrLedgerKey.includes(public_key))
            .map((ak) => ak.public_key)
            .map(toPK);
        const confirmOnlyKey = toPK((await this.postSignedJson('/2fa/getAccessKey', { accountId })).publicKey);
        const newArgs = Buffer.from(JSON.stringify({ 'num_confirmations': 2 }));
        const actions = [
            ...fak2lak.map((pk) => transaction_1.deleteKey(pk)),
            ...fak2lak.map((pk) => transaction_1.addKey(pk, transaction_1.functionCallAccessKey(accountId, exports.MULTISIG_CHANGE_METHODS, null))),
            transaction_1.addKey(confirmOnlyKey, transaction_1.functionCallAccessKey(accountId, exports.MULTISIG_CONFIRM_METHODS, null)),
            transaction_1.deployContract(contractBytes),
        ];
        if ((await this.state()).code_hash === '11111111111111111111111111111111') {
            actions.push(transaction_1.functionCall('new', newArgs, exports.MULTISIG_GAS, exports.MULTISIG_DEPOSIT));
        }
        console.log('deploying multisig contract for', accountId);
        return await super.signAndSendTransactionWithAccount(accountId, actions);
    }
    async disable(contractBytes) {
        const { accountId } = this;
        const accessKeys = await this.getAccessKeys();
        const lak2fak = accessKeys
            .filter(({ access_key }) => access_key.permission !== 'FullAccess')
            .filter(({ access_key }) => {
            const perm = access_key.permission.FunctionCall;
            return perm.receiver_id === accountId &&
                perm.method_names.length === 4 &&
                perm.method_names.includes('add_request_and_confirm');
        });
        const confirmOnlyKey = key_pair_1.PublicKey.from((await this.postSignedJson('/2fa/getAccessKey', { accountId })).publicKey);
        const actions = [
            transaction_1.deleteKey(confirmOnlyKey),
            ...lak2fak.map(({ public_key }) => transaction_1.deleteKey(key_pair_1.PublicKey.from(public_key))),
            ...lak2fak.map(({ public_key }) => transaction_1.addKey(key_pair_1.PublicKey.from(public_key), null)),
            transaction_1.deployContract(contractBytes),
        ];
        console.log('disabling 2fa for', accountId);
        return await this.signAndSendTransaction({
            receiverId: accountId,
            actions
        });
    }
    async sendCodeDefault() {
        const { accountId } = this;
        const { requestId } = this.getRequest();
        const method = await this.get2faMethod();
        await this.postSignedJson('/2fa/send', {
            accountId,
            method,
            requestId,
        });
        return requestId;
    }
    async getCodeDefault(method) {
        throw new Error('There is no getCode callback provided. Please provide your own in AccountMultisig constructor options. It has a parameter method where method.kind is "email" or "phone".');
    }
    async promptAndVerify() {
        const method = await this.get2faMethod();
        const securityCode = await this.getCode(method);
        try {
            const result = await this.verifyCode(securityCode);
            // TODO: Parse error from result for real (like in normal account.signAndSendTransaction)
            return result;
        }
        catch (e) {
            console.warn('Error validating security code:', e);
            if (e.toString().includes('invalid 2fa code provided') || e.toString().includes('2fa code not valid')) {
                return await this.promptAndVerify();
            }
            throw e;
        }
    }
    async verifyCodeDefault(securityCode) {
        const { accountId } = this;
        const request = this.getRequest();
        if (!request) {
            throw new Error('no request pending');
        }
        const { requestId } = request;
        return await this.postSignedJson('/2fa/verify', {
            accountId,
            securityCode,
            requestId
        });
    }
    async getRecoveryMethods() {
        const { accountId } = this;
        return {
            accountId,
            data: await this.postSignedJson('/account/recoveryMethods', { accountId })
        };
    }
    async get2faMethod() {
        let { data } = await this.getRecoveryMethods();
        if (data && data.length) {
            data = data.find((m) => m.kind.indexOf('2fa-') === 0);
        }
        if (!data)
            return null;
        const { kind, detail } = data;
        return { kind, detail };
    }
    async signatureFor() {
        const { accountId } = this;
        const block = await this.connection.provider.block({ finality: 'final' });
        const blockNumber = block.header.height.toString();
        const signed = await this.connection.signer.signMessage(Buffer.from(blockNumber), accountId, this.connection.networkId);
        const blockNumberSignature = Buffer.from(signed.signature).toString('base64');
        return { blockNumber, blockNumberSignature };
    }
    async postSignedJson(path, body) {
        return await web_1.fetchJson(this.helperUrl + path, JSON.stringify({
            ...body,
            ...(await this.signatureFor())
        }));
    }
}
exports.Account2FA = Account2FA;
// helpers
const toPK = (pk) => key_pair_1.PublicKey.from(pk);
const convertPKForContract = (pk) => pk.toString().replace('ed25519:', '');
const convertActions = (actions, accountId, receiverId) => actions.map((a) => {
    const type = a.enum;
    const { gas, publicKey, methodName, args, deposit, accessKey, code } = a[type];
    const action = {
        type: type[0].toUpperCase() + type.substr(1),
        gas: (gas && gas.toString()) || undefined,
        public_key: (publicKey && convertPKForContract(publicKey)) || undefined,
        method_name: methodName,
        args: (args && Buffer.from(args).toString('base64')) || undefined,
        code: (code && Buffer.from(code).toString('base64')) || undefined,
        amount: (deposit && deposit.toString()) || undefined,
        deposit: (deposit && deposit.toString()) || '0',
        permission: undefined,
    };
    if (accessKey) {
        if (receiverId === accountId && accessKey.permission.enum !== 'fullAccess') {
            action.permission = {
                receiver_id: accountId,
                allowance: exports.MULTISIG_ALLOWANCE.toString(),
                method_names: exports.MULTISIG_CHANGE_METHODS,
            };
        }
        if (accessKey.permission.enum === 'functionCall') {
            const { receiverId: receiver_id, methodNames: method_names, allowance } = accessKey.permission.functionCall;
            action.permission = {
                receiver_id,
                allowance: (allowance && allowance.toString()) || undefined,
                method_names
            };
        }
    }
    return action;
});


/***/ }),

/***/ "./node_modules/near-api-js/lib/browser-connect.js":
/*!*********************************************************!*\
  !*** ./node_modules/near-api-js/lib/browser-connect.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.connect = void 0;
/**
 * Connect to NEAR using the provided configuration.
 *
 * {@link ConnectConfig.networkId} and {@link ConnectConfig.nodeUrl} are required.
 *
 * To sign transactions you can also pass: {@link ConnectConfig.keyStore}
 *
 * Both are passed they are prioritize in that order.
 *
 * @see {@link ConnectConfig}
 * @example
 * ```js
 * async function initNear() {
 *   const near = await connect({
 *      networkId: 'testnet',
 *      nodeUrl: 'https://rpc.testnet.near.org'
 *   })
 * }
 * ```
 *
 * @module browserConnect
 */
const near_1 = __webpack_require__(/*! ./near */ "./node_modules/near-api-js/lib/near.js");
/**
 * Initialize connection to Near network.
 */
async function connect(config) {
    return new near_1.Near(config);
}
exports.connect = connect;


/***/ }),

/***/ "./node_modules/near-api-js/lib/browser-index.js":
/*!*******************************************************!*\
  !*** ./node_modules/near-api-js/lib/browser-index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/** @hidden @module */
exports.keyStores = __importStar(__webpack_require__(/*! ./key_stores/browser-index */ "./node_modules/near-api-js/lib/key_stores/browser-index.js"));
__exportStar(__webpack_require__(/*! ./common-index */ "./node_modules/near-api-js/lib/common-index.js"), exports);
__exportStar(__webpack_require__(/*! ./browser-connect */ "./node_modules/near-api-js/lib/browser-connect.js"), exports);
__webpack_require__(/*! error-polyfill */ "./node_modules/error-polyfill/index.js");


/***/ }),

/***/ "./node_modules/near-api-js/lib/common-index.js":
/*!******************************************************!*\
  !*** ./node_modules/near-api-js/lib/common-index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletConnection = exports.WalletAccount = exports.ConnectedWalletAccount = exports.Near = exports.KeyPair = exports.Signer = exports.InMemorySigner = exports.Contract = exports.Connection = exports.Account = exports.multisig = exports.validators = exports.transactions = exports.utils = exports.providers = exports.accountCreator = void 0;
/** @hidden @module */
const providers = __importStar(__webpack_require__(/*! ./providers */ "./node_modules/near-api-js/lib/providers/index.js"));
exports.providers = providers;
const utils = __importStar(__webpack_require__(/*! ./utils */ "./node_modules/near-api-js/lib/utils/index.js"));
exports.utils = utils;
const transactions = __importStar(__webpack_require__(/*! ./transaction */ "./node_modules/near-api-js/lib/transaction.js"));
exports.transactions = transactions;
const validators = __importStar(__webpack_require__(/*! ./validators */ "./node_modules/near-api-js/lib/validators.js"));
exports.validators = validators;
const account_1 = __webpack_require__(/*! ./account */ "./node_modules/near-api-js/lib/account.js");
Object.defineProperty(exports, "Account", ({ enumerable: true, get: function () { return account_1.Account; } }));
const multisig = __importStar(__webpack_require__(/*! ./account_multisig */ "./node_modules/near-api-js/lib/account_multisig.js"));
exports.multisig = multisig;
const accountCreator = __importStar(__webpack_require__(/*! ./account_creator */ "./node_modules/near-api-js/lib/account_creator.js"));
exports.accountCreator = accountCreator;
const connection_1 = __webpack_require__(/*! ./connection */ "./node_modules/near-api-js/lib/connection.js");
Object.defineProperty(exports, "Connection", ({ enumerable: true, get: function () { return connection_1.Connection; } }));
const signer_1 = __webpack_require__(/*! ./signer */ "./node_modules/near-api-js/lib/signer.js");
Object.defineProperty(exports, "Signer", ({ enumerable: true, get: function () { return signer_1.Signer; } }));
Object.defineProperty(exports, "InMemorySigner", ({ enumerable: true, get: function () { return signer_1.InMemorySigner; } }));
const contract_1 = __webpack_require__(/*! ./contract */ "./node_modules/near-api-js/lib/contract.js");
Object.defineProperty(exports, "Contract", ({ enumerable: true, get: function () { return contract_1.Contract; } }));
const key_pair_1 = __webpack_require__(/*! ./utils/key_pair */ "./node_modules/near-api-js/lib/utils/key_pair.js");
Object.defineProperty(exports, "KeyPair", ({ enumerable: true, get: function () { return key_pair_1.KeyPair; } }));
const near_1 = __webpack_require__(/*! ./near */ "./node_modules/near-api-js/lib/near.js");
Object.defineProperty(exports, "Near", ({ enumerable: true, get: function () { return near_1.Near; } }));
// TODO: Deprecate and remove WalletAccount
const wallet_account_1 = __webpack_require__(/*! ./wallet-account */ "./node_modules/near-api-js/lib/wallet-account.js");
Object.defineProperty(exports, "ConnectedWalletAccount", ({ enumerable: true, get: function () { return wallet_account_1.ConnectedWalletAccount; } }));
Object.defineProperty(exports, "WalletAccount", ({ enumerable: true, get: function () { return wallet_account_1.WalletAccount; } }));
Object.defineProperty(exports, "WalletConnection", ({ enumerable: true, get: function () { return wallet_account_1.WalletConnection; } }));


/***/ }),

/***/ "./node_modules/near-api-js/lib/connection.js":
/*!****************************************************!*\
  !*** ./node_modules/near-api-js/lib/connection.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Connection = void 0;
const providers_1 = __webpack_require__(/*! ./providers */ "./node_modules/near-api-js/lib/providers/index.js");
const signer_1 = __webpack_require__(/*! ./signer */ "./node_modules/near-api-js/lib/signer.js");
/**
 * @param config Contains connection info details
 * @returns {Provider}
 */
function getProvider(config) {
    switch (config.type) {
        case undefined:
            return config;
        case 'JsonRpcProvider': return new providers_1.JsonRpcProvider({ ...config.args });
        default: throw new Error(`Unknown provider type ${config.type}`);
    }
}
/**
 * @param config Contains connection info details
 * @returns {Signer}
 */
function getSigner(config) {
    switch (config.type) {
        case undefined:
            return config;
        case 'InMemorySigner': {
            return new signer_1.InMemorySigner(config.keyStore);
        }
        default: throw new Error(`Unknown signer type ${config.type}`);
    }
}
/**
 * Connects an account to a given network via a given provider
 */
class Connection {
    constructor(networkId, provider, signer) {
        this.networkId = networkId;
        this.provider = provider;
        this.signer = signer;
    }
    /**
     * @param config Contains connection info details
     */
    static fromConfig(config) {
        const provider = getProvider(config.provider);
        const signer = getSigner(config.signer);
        return new Connection(config.networkId, provider, signer);
    }
}
exports.Connection = Connection;


/***/ }),

/***/ "./node_modules/near-api-js/lib/constants.js":
/*!***************************************************!*\
  !*** ./node_modules/near-api-js/lib/constants.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_FUNCTION_CALL_GAS = void 0;
const bn_js_1 = __importDefault(__webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js"));
// Default amount of gas to be sent with the function calls. Used to pay for the fees
// incurred while running the contract execution. The unused amount will be refunded back to
// the originator.
// Due to protocol changes that charge upfront for the maximum possible gas price inflation due to
// full blocks, the price of max_prepaid_gas is decreased to `300 * 10**12`.
// For discussion see https://github.com/nearprotocol/NEPs/issues/67
exports.DEFAULT_FUNCTION_CALL_GAS = new bn_js_1.default('30000000000000');


/***/ }),

/***/ "./node_modules/near-api-js/lib/contract.js":
/*!**************************************************!*\
  !*** ./node_modules/near-api-js/lib/contract.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Contract = void 0;
const bn_js_1 = __importDefault(__webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js"));
const depd_1 = __importDefault(__webpack_require__(/*! depd */ "./node_modules/near-api-js/node_modules/depd/lib/browser/index.js"));
const providers_1 = __webpack_require__(/*! ./providers */ "./node_modules/near-api-js/lib/providers/index.js");
const errors_1 = __webpack_require__(/*! ./utils/errors */ "./node_modules/near-api-js/lib/utils/errors.js");
// Makes `function.name` return given name
function nameFunction(name, body) {
    return {
        [name](...args) {
            return body(...args);
        }
    }[name];
}
const isUint8Array = (x) => x && x.byteLength !== undefined && x.byteLength === x.length;
const isObject = (x) => Object.prototype.toString.call(x) === '[object Object]';
/**
 * Defines a smart contract on NEAR including the change (mutable) and view (non-mutable) methods
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#contract}
 * @example
 * ```js
 * import { Contract } from 'near-api-js';
 *
 * async function contractExample() {
 *   const methodOptions = {
 *     viewMethods: ['getMessageByAccountId'],
 *     changeMethods: ['addMessage']
 *   };
 *   const contract = new Contract(
 *     wallet.account(),
 *     'contract-id.testnet',
 *     methodOptions
 *   );
 *
 *   // use a contract view method
 *   const messages = await contract.getMessages({
 *     accountId: 'example-account.testnet'
 *   });
 *
 *   // use a contract change method
 *   await contract.addMessage({
 *      meta: 'some info',
 *      callbackUrl: 'https://example.com/callback',
 *      args: { text: 'my message' },
 *      amount: 1
 *   })
 * }
 * ```
 */
class Contract {
    /**
     * @param account NEAR account to sign change method transactions
     * @param contractId NEAR account id where the contract is deployed
     * @param options NEAR smart contract methods that your application will use. These will be available as `contract.methodName`
     */
    constructor(account, contractId, options) {
        this.account = account;
        this.contractId = contractId;
        const { viewMethods = [], changeMethods = [] } = options;
        viewMethods.forEach((methodName) => {
            Object.defineProperty(this, methodName, {
                writable: false,
                enumerable: true,
                value: nameFunction(methodName, async (args = {}, options = {}, ...ignored) => {
                    if (ignored.length || !(isObject(args) || isUint8Array(args)) || !isObject(options)) {
                        throw new errors_1.PositionalArgsError();
                    }
                    return this.account.viewFunction(this.contractId, methodName, args, options);
                })
            });
        });
        changeMethods.forEach((methodName) => {
            Object.defineProperty(this, methodName, {
                writable: false,
                enumerable: true,
                value: nameFunction(methodName, async (...args) => {
                    if (args.length && (args.length > 3 || !(isObject(args[0]) || isUint8Array(args[0])))) {
                        throw new errors_1.PositionalArgsError();
                    }
                    if (args.length > 1 || !(args[0] && args[0].args)) {
                        const deprecate = depd_1.default('contract.methodName(args, gas, amount)');
                        deprecate('use `contract.methodName({ args, gas?, amount?, callbackUrl?, meta? })` instead');
                        return this._changeMethod({
                            methodName,
                            args: args[0],
                            gas: args[1],
                            amount: args[2]
                        });
                    }
                    return this._changeMethod({ methodName, ...args[0] });
                })
            });
        });
    }
    async _changeMethod({ args, methodName, gas, amount, meta, callbackUrl }) {
        validateBNLike({ gas, amount });
        const rawResult = await this.account.functionCall({
            contractId: this.contractId,
            methodName,
            args,
            gas,
            attachedDeposit: amount,
            walletMeta: meta,
            walletCallbackUrl: callbackUrl
        });
        return providers_1.getTransactionLastResult(rawResult);
    }
}
exports.Contract = Contract;
/**
 * Validation on arguments being a big number from bn.js
 * Throws if an argument is not in BN format or otherwise invalid
 * @param argMap
 */
function validateBNLike(argMap) {
    const bnLike = 'number, decimal string or BN';
    for (const argName of Object.keys(argMap)) {
        const argValue = argMap[argName];
        if (argValue && !bn_js_1.default.isBN(argValue) && isNaN(argValue)) {
            throw new errors_1.ArgumentTypeError(argName, bnLike, argValue);
        }
    }
}


/***/ }),

/***/ "./node_modules/near-api-js/lib/key_stores/browser-index.js":
/*!******************************************************************!*\
  !*** ./node_modules/near-api-js/lib/key_stores/browser-index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MergeKeyStore = exports.BrowserLocalStorageKeyStore = exports.InMemoryKeyStore = exports.KeyStore = void 0;
/** @hidden @module */
const keystore_1 = __webpack_require__(/*! ./keystore */ "./node_modules/near-api-js/lib/key_stores/keystore.js");
Object.defineProperty(exports, "KeyStore", ({ enumerable: true, get: function () { return keystore_1.KeyStore; } }));
const in_memory_key_store_1 = __webpack_require__(/*! ./in_memory_key_store */ "./node_modules/near-api-js/lib/key_stores/in_memory_key_store.js");
Object.defineProperty(exports, "InMemoryKeyStore", ({ enumerable: true, get: function () { return in_memory_key_store_1.InMemoryKeyStore; } }));
const browser_local_storage_key_store_1 = __webpack_require__(/*! ./browser_local_storage_key_store */ "./node_modules/near-api-js/lib/key_stores/browser_local_storage_key_store.js");
Object.defineProperty(exports, "BrowserLocalStorageKeyStore", ({ enumerable: true, get: function () { return browser_local_storage_key_store_1.BrowserLocalStorageKeyStore; } }));
const merge_key_store_1 = __webpack_require__(/*! ./merge_key_store */ "./node_modules/near-api-js/lib/key_stores/merge_key_store.js");
Object.defineProperty(exports, "MergeKeyStore", ({ enumerable: true, get: function () { return merge_key_store_1.MergeKeyStore; } }));


/***/ }),

/***/ "./node_modules/near-api-js/lib/key_stores/browser_local_storage_key_store.js":
/*!************************************************************************************!*\
  !*** ./node_modules/near-api-js/lib/key_stores/browser_local_storage_key_store.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BrowserLocalStorageKeyStore = void 0;
const keystore_1 = __webpack_require__(/*! ./keystore */ "./node_modules/near-api-js/lib/key_stores/keystore.js");
const key_pair_1 = __webpack_require__(/*! ../utils/key_pair */ "./node_modules/near-api-js/lib/utils/key_pair.js");
const LOCAL_STORAGE_KEY_PREFIX = 'near-api-js:keystore:';
/**
 * This class is used to store keys in the browsers local storage.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#key-store}
 * @example
 * ```js
 * import { connect, keyStores } from 'near-api-js';
 *
 * const keyStore = new keyStores.BrowserLocalStorageKeyStore();
 * const config = {
 *   keyStore, // instance of BrowserLocalStorageKeyStore
 *   networkId: 'testnet',
 *   nodeUrl: 'https://rpc.testnet.near.org',
 *   walletUrl: 'https://wallet.testnet.near.org',
 *   helperUrl: 'https://helper.testnet.near.org',
 *   explorerUrl: 'https://explorer.testnet.near.org'
 * };
 *
 * // inside an async function
 * const near = await connect(config)
 * ```
 */
class BrowserLocalStorageKeyStore extends keystore_1.KeyStore {
    /**
     * @param localStorage defaults to window.localStorage
     * @param prefix defaults to `near-api-js:keystore:`
     */
    constructor(localStorage = window.localStorage, prefix = LOCAL_STORAGE_KEY_PREFIX) {
        super();
        this.localStorage = localStorage;
        this.prefix = prefix;
    }
    /**
     * Stores a {@link KeyPair} in local storage.
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @param keyPair The key pair to store in local storage
     */
    async setKey(networkId, accountId, keyPair) {
        this.localStorage.setItem(this.storageKeyForSecretKey(networkId, accountId), keyPair.toString());
    }
    /**
     * Gets a {@link KeyPair} from local storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @returns {Promise<KeyPair>}
     */
    async getKey(networkId, accountId) {
        const value = this.localStorage.getItem(this.storageKeyForSecretKey(networkId, accountId));
        if (!value) {
            return null;
        }
        return key_pair_1.KeyPair.fromString(value);
    }
    /**
     * Removes a {@link KeyPair} from local storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     */
    async removeKey(networkId, accountId) {
        this.localStorage.removeItem(this.storageKeyForSecretKey(networkId, accountId));
    }
    /**
     * Removes all items that start with `prefix` from local storage
     */
    async clear() {
        for (const key of this.storageKeys()) {
            if (key.startsWith(this.prefix)) {
                this.localStorage.removeItem(key);
            }
        }
    }
    /**
     * Get the network(s) from local storage
     * @returns {Promise<string[]>}
     */
    async getNetworks() {
        const result = new Set();
        for (const key of this.storageKeys()) {
            if (key.startsWith(this.prefix)) {
                const parts = key.substring(this.prefix.length).split(':');
                result.add(parts[1]);
            }
        }
        return Array.from(result.values());
    }
    /**
     * Gets the account(s) from local storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns{Promise<string[]>}
     */
    async getAccounts(networkId) {
        const result = new Array();
        for (const key of this.storageKeys()) {
            if (key.startsWith(this.prefix)) {
                const parts = key.substring(this.prefix.length).split(':');
                if (parts[1] === networkId) {
                    result.push(parts[0]);
                }
            }
        }
        return result;
    }
    /**
     * @hidden
     * Helper function to retrieve a local storage key
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the storage keythat's sought
     * @returns {string} An example might be: `near-api-js:keystore:near-friend:default`
     */
    storageKeyForSecretKey(networkId, accountId) {
        return `${this.prefix}${accountId}:${networkId}`;
    }
    /** @hidden */
    *storageKeys() {
        for (let i = 0; i < this.localStorage.length; i++) {
            yield this.localStorage.key(i);
        }
    }
}
exports.BrowserLocalStorageKeyStore = BrowserLocalStorageKeyStore;


/***/ }),

/***/ "./node_modules/near-api-js/lib/key_stores/in_memory_key_store.js":
/*!************************************************************************!*\
  !*** ./node_modules/near-api-js/lib/key_stores/in_memory_key_store.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InMemoryKeyStore = void 0;
const keystore_1 = __webpack_require__(/*! ./keystore */ "./node_modules/near-api-js/lib/key_stores/keystore.js");
const key_pair_1 = __webpack_require__(/*! ../utils/key_pair */ "./node_modules/near-api-js/lib/utils/key_pair.js");
/**
 * Simple in-memory keystore for mainly for testing purposes.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#key-store}
 * @example
 * ```js
 * import { connect, keyStores, utils } from 'near-api-js';
 *
 * const privateKey = '.......';
 * const keyPair = utils.KeyPair.fromString(privateKey);
 *
 * const keyStore = new keyStores.InMemoryKeyStore();
 * keyStore.setKey('testnet', 'example-account.testnet', keyPair);
 *
 * const config = {
 *   keyStore, // instance of InMemoryKeyStore
 *   networkId: 'testnet',
 *   nodeUrl: 'https://rpc.testnet.near.org',
 *   walletUrl: 'https://wallet.testnet.near.org',
 *   helperUrl: 'https://helper.testnet.near.org',
 *   explorerUrl: 'https://explorer.testnet.near.org'
 * };
 *
 * // inside an async function
 * const near = await connect(config)
 * ```
 */
class InMemoryKeyStore extends keystore_1.KeyStore {
    constructor() {
        super();
        this.keys = {};
    }
    /**
     * Stores a {@KeyPair} in in-memory storage item
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @param keyPair The key pair to store in local storage
     */
    async setKey(networkId, accountId, keyPair) {
        this.keys[`${accountId}:${networkId}`] = keyPair.toString();
    }
    /**
     * Gets a {@link KeyPair} from in-memory storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @returns {Promise<KeyPair>}
     */
    async getKey(networkId, accountId) {
        const value = this.keys[`${accountId}:${networkId}`];
        if (!value) {
            return null;
        }
        return key_pair_1.KeyPair.fromString(value);
    }
    /**
     * Removes a {@link KeyPair} from in-memory storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     */
    async removeKey(networkId, accountId) {
        delete this.keys[`${accountId}:${networkId}`];
    }
    /**
     * Removes all {@link KeyPairs} from in-memory storage
     */
    async clear() {
        this.keys = {};
    }
    /**
     * Get the network(s) from in-memory storage
     * @returns {Promise<string[]>}
     */
    async getNetworks() {
        const result = new Set();
        Object.keys(this.keys).forEach((key) => {
            const parts = key.split(':');
            result.add(parts[1]);
        });
        return Array.from(result.values());
    }
    /**
     * Gets the account(s) from in-memory storage
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns{Promise<string[]>}
     */
    async getAccounts(networkId) {
        const result = new Array();
        Object.keys(this.keys).forEach((key) => {
            const parts = key.split(':');
            if (parts[parts.length - 1] === networkId) {
                result.push(parts.slice(0, parts.length - 1).join(':'));
            }
        });
        return result;
    }
    /** @hidden */
    toString() {
        return 'InMemoryKeyStore';
    }
}
exports.InMemoryKeyStore = InMemoryKeyStore;


/***/ }),

/***/ "./node_modules/near-api-js/lib/key_stores/keystore.js":
/*!*************************************************************!*\
  !*** ./node_modules/near-api-js/lib/key_stores/keystore.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyStore = void 0;
/**
 * KeyStores are passed to {@link Near} via {@link NearConfig}
 * and are used by the {@link InMemorySigner} to sign transactions.
 *
 * @example {@link connect}
 */
class KeyStore {
}
exports.KeyStore = KeyStore;


/***/ }),

/***/ "./node_modules/near-api-js/lib/key_stores/merge_key_store.js":
/*!********************************************************************!*\
  !*** ./node_modules/near-api-js/lib/key_stores/merge_key_store.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MergeKeyStore = void 0;
const keystore_1 = __webpack_require__(/*! ./keystore */ "./node_modules/near-api-js/lib/key_stores/keystore.js");
class MergeKeyStore extends keystore_1.KeyStore {
    /**
     * @param keyStores read calls are attempted from start to end of array
     * @param options.writeKeyStoreIndex the keystore index that will receive all write calls
     */
    constructor(keyStores, options = { writeKeyStoreIndex: 0 }) {
        super();
        this.options = options;
        this.keyStores = keyStores;
    }
    /**
     * Store a {@link KeyPain} to the first index of a key store array
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @param keyPair The key pair to store in local storage
     */
    async setKey(networkId, accountId, keyPair) {
        await this.keyStores[this.options.writeKeyStoreIndex].setKey(networkId, accountId, keyPair);
    }
    /**
     * Gets a {@link KeyPair} from the array of key stores
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     * @returns {Promise<KeyPair>}
     */
    async getKey(networkId, accountId) {
        for (const keyStore of this.keyStores) {
            const keyPair = await keyStore.getKey(networkId, accountId);
            if (keyPair) {
                return keyPair;
            }
        }
        return null;
    }
    /**
     * Removes a {@link KeyPair} from the array of key stores
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account tied to the key pair
     */
    async removeKey(networkId, accountId) {
        for (const keyStore of this.keyStores) {
            await keyStore.removeKey(networkId, accountId);
        }
    }
    /**
     * Removes all items from each key store
     */
    async clear() {
        for (const keyStore of this.keyStores) {
            await keyStore.clear();
        }
    }
    /**
     * Get the network(s) from the array of key stores
     * @returns {Promise<string[]>}
     */
    async getNetworks() {
        const result = new Set();
        for (const keyStore of this.keyStores) {
            for (const network of await keyStore.getNetworks()) {
                result.add(network);
            }
        }
        return Array.from(result);
    }
    /**
     * Gets the account(s) from the array of key stores
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns{Promise<string[]>}
     */
    async getAccounts(networkId) {
        const result = new Set();
        for (const keyStore of this.keyStores) {
            for (const account of await keyStore.getAccounts(networkId)) {
                result.add(account);
            }
        }
        return Array.from(result);
    }
    /** @hidden */
    toString() {
        return `MergeKeyStore(${this.keyStores.join(', ')})`;
    }
}
exports.MergeKeyStore = MergeKeyStore;


/***/ }),

/***/ "./node_modules/near-api-js/lib/near.js":
/*!**********************************************!*\
  !*** ./node_modules/near-api-js/lib/near.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Near = void 0;
/**
 * This module contains the main class developers will use to interact with NEAR.
 * The {@link Near} class is used to interact with {@link Account | Accounts} through the {@link JsonRpcProvider.JsonRpcProvider | JsonRpcProvider}.
 * It is configured via the {@link NearConfig}.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#account}
 *
 * @module near
 */
const bn_js_1 = __importDefault(__webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js"));
const account_1 = __webpack_require__(/*! ./account */ "./node_modules/near-api-js/lib/account.js");
const connection_1 = __webpack_require__(/*! ./connection */ "./node_modules/near-api-js/lib/connection.js");
const contract_1 = __webpack_require__(/*! ./contract */ "./node_modules/near-api-js/lib/contract.js");
const account_creator_1 = __webpack_require__(/*! ./account_creator */ "./node_modules/near-api-js/lib/account_creator.js");
/**
 * This is the main class developers should use to interact with NEAR.
 * @example
 * ```js
 * const near = new Near(config);
 * ```
 */
class Near {
    constructor(config) {
        this.config = config;
        this.connection = connection_1.Connection.fromConfig({
            networkId: config.networkId,
            provider: { type: 'JsonRpcProvider', args: { url: config.nodeUrl, headers: config.headers } },
            signer: config.signer || { type: 'InMemorySigner', keyStore: config.keyStore || config.deps.keyStore }
        });
        if (config.masterAccount) {
            // TODO: figure out better way of specifiying initial balance.
            // Hardcoded number below must be enough to pay the gas cost to dev-deploy with near-shell for multiple times
            const initialBalance = config.initialBalance ? new bn_js_1.default(config.initialBalance) : new bn_js_1.default('500000000000000000000000000');
            this.accountCreator = new account_creator_1.LocalAccountCreator(new account_1.Account(this.connection, config.masterAccount), initialBalance);
        }
        else if (config.helperUrl) {
            this.accountCreator = new account_creator_1.UrlAccountCreator(this.connection, config.helperUrl);
        }
        else {
            this.accountCreator = null;
        }
    }
    /**
     * @param accountId near accountId used to interact with the network.
     */
    async account(accountId) {
        const account = new account_1.Account(this.connection, accountId);
        return account;
    }
    /**
     * Create an account using the {@link AccountCreator}. Either:
     * * using a masterAccount with {@link LocalAccountCreator}
     * * using the helperUrl with {@link UrlAccountCreator}
     * @see {@link NearConfig.masterAccount} and {@link NearConfig.helperUrl}-
     *
     * @param accountId
     * @param publicKey
     */
    async createAccount(accountId, publicKey) {
        if (!this.accountCreator) {
            throw new Error('Must specify account creator, either via masterAccount or helperUrl configuration settings.');
        }
        await this.accountCreator.createAccount(accountId, publicKey);
        return new account_1.Account(this.connection, accountId);
    }
    /**
     * @deprecated Use {@link Contract} instead.
     * @param contractId
     * @param options
     */
    async loadContract(contractId, options) {
        const account = new account_1.Account(this.connection, options.sender);
        return new contract_1.Contract(account, contractId, options);
    }
    /**
     * @deprecated Use {@link Account.sendMoney} instead.
     * @param amount
     * @param originator
     * @param receiver
     */
    async sendTokens(amount, originator, receiver) {
        console.warn('near.sendTokens is deprecated. Use `yourAccount.sendMoney` instead.');
        const account = new account_1.Account(this.connection, originator);
        const result = await account.sendMoney(receiver, amount);
        return result.transaction_outcome.id;
    }
}
exports.Near = Near;


/***/ }),

/***/ "./node_modules/near-api-js/lib/providers/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/near-api-js/lib/providers/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/** @hidden @module */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorContext = exports.TypedError = exports.getTransactionLastResult = exports.FinalExecutionStatusBasic = exports.JsonRpcProvider = exports.Provider = void 0;
const provider_1 = __webpack_require__(/*! ./provider */ "./node_modules/near-api-js/lib/providers/provider.js");
Object.defineProperty(exports, "Provider", ({ enumerable: true, get: function () { return provider_1.Provider; } }));
Object.defineProperty(exports, "getTransactionLastResult", ({ enumerable: true, get: function () { return provider_1.getTransactionLastResult; } }));
Object.defineProperty(exports, "FinalExecutionStatusBasic", ({ enumerable: true, get: function () { return provider_1.FinalExecutionStatusBasic; } }));
const json_rpc_provider_1 = __webpack_require__(/*! ./json-rpc-provider */ "./node_modules/near-api-js/lib/providers/json-rpc-provider.js");
Object.defineProperty(exports, "JsonRpcProvider", ({ enumerable: true, get: function () { return json_rpc_provider_1.JsonRpcProvider; } }));
Object.defineProperty(exports, "TypedError", ({ enumerable: true, get: function () { return json_rpc_provider_1.TypedError; } }));
Object.defineProperty(exports, "ErrorContext", ({ enumerable: true, get: function () { return json_rpc_provider_1.ErrorContext; } }));


/***/ }),

/***/ "./node_modules/near-api-js/lib/providers/json-rpc-provider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/near-api-js/lib/providers/json-rpc-provider.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JsonRpcProvider = exports.ErrorContext = exports.TypedError = void 0;
/**
 * This module contains the {@link JsonRpcProvider} client class
 * which can be used to interact with the NEAR RPC API.
 * @see {@link providers/provider} for a list of request and response types
 */
const depd_1 = __importDefault(__webpack_require__(/*! depd */ "./node_modules/near-api-js/node_modules/depd/lib/browser/index.js"));
const provider_1 = __webpack_require__(/*! ./provider */ "./node_modules/near-api-js/lib/providers/provider.js");
const web_1 = __webpack_require__(/*! ../utils/web */ "./node_modules/near-api-js/lib/utils/web.js");
const errors_1 = __webpack_require__(/*! ../utils/errors */ "./node_modules/near-api-js/lib/utils/errors.js");
Object.defineProperty(exports, "TypedError", ({ enumerable: true, get: function () { return errors_1.TypedError; } }));
Object.defineProperty(exports, "ErrorContext", ({ enumerable: true, get: function () { return errors_1.ErrorContext; } }));
const borsh_1 = __webpack_require__(/*! borsh */ "./node_modules/near-api-js/node_modules/borsh/lib/index.js");
const exponential_backoff_1 = __importDefault(__webpack_require__(/*! ../utils/exponential-backoff */ "./node_modules/near-api-js/lib/utils/exponential-backoff.js"));
const rpc_errors_1 = __webpack_require__(/*! ../utils/rpc_errors */ "./node_modules/near-api-js/lib/utils/rpc_errors.js");
// Default number of retries before giving up on a request.
const REQUEST_RETRY_NUMBER = 12;
// Default wait until next retry in millis.
const REQUEST_RETRY_WAIT = 500;
// Exponential back off for waiting to retry.
const REQUEST_RETRY_WAIT_BACKOFF = 1.5;
/// Keep ids unique across all connections.
let _nextId = 123;
/**
 * Client class to interact with the NEAR RPC API.
 * @see {@link https://github.com/near/nearcore/tree/master/chain/jsonrpc}
 */
class JsonRpcProvider extends provider_1.Provider {
    /**
     * @param connectionInfoOrUrl ConnectionInfo or RPC API endpoint URL (deprecated)
     */
    constructor(connectionInfoOrUrl) {
        super();
        if (connectionInfoOrUrl != null && typeof connectionInfoOrUrl == 'object') {
            this.connection = connectionInfoOrUrl;
        }
        else {
            const deprecate = depd_1.default('JsonRpcProvider(url?: string)');
            deprecate('use `JsonRpcProvider(connectionInfo: ConnectionInfo)` instead');
            this.connection = { url: connectionInfoOrUrl };
        }
    }
    /**
     * Gets the RPC's status
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#general-validator-status}
     */
    async status() {
        return this.sendJsonRpc('status', []);
    }
    /**
     * Sends a signed transaction to the RPC and waits until transaction is fully complete
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#send-transaction-await}
     *
     * @param signedTransaction The signed transaction being sent
     */
    async sendTransaction(signedTransaction) {
        const bytes = signedTransaction.encode();
        return this.sendJsonRpc('broadcast_tx_commit', [Buffer.from(bytes).toString('base64')]);
    }
    /**
     * Sends a signed transaction to the RPC and immediately returns transaction hash
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#send-transaction-async)
     * @param signedTransaction The signed transaction being sent
     * @returns {Promise<FinalExecutionOutcome>}
     */
    async sendTransactionAsync(signedTransaction) {
        const bytes = signedTransaction.encode();
        return this.sendJsonRpc('broadcast_tx_async', [Buffer.from(bytes).toString('base64')]);
    }
    /**
     * Gets a transaction's status from the RPC
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#transaction-status}
     *
     * @param txHash A transaction hash as either a Uint8Array or a base58 encoded string
     * @param accountId The NEAR account that signed the transaction
     */
    async txStatus(txHash, accountId) {
        if (typeof txHash === 'string') {
            return this.txStatusString(txHash, accountId);
        }
        else {
            return this.txStatusUint8Array(txHash, accountId);
        }
    }
    async txStatusUint8Array(txHash, accountId) {
        return this.sendJsonRpc('tx', [borsh_1.baseEncode(txHash), accountId]);
    }
    async txStatusString(txHash, accountId) {
        return this.sendJsonRpc('tx', [txHash, accountId]);
    }
    /**
     * Gets a transaction's status from the RPC with receipts
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#transaction-status-with-receipts)
     * @param txHash The hash of the transaction
     * @param accountId The NEAR account that signed the transaction
     * @returns {Promise<FinalExecutionOutcome>}
     */
    async txStatusReceipts(txHash, accountId) {
        return this.sendJsonRpc('EXPERIMENTAL_tx_status', [borsh_1.baseEncode(txHash), accountId]);
    }
    /**
     * Query the RPC as [shown in the docs](https://docs.near.org/docs/develop/front-end/rpc#accounts--contracts)
     * Query the RPC by passing an {@link RpcQueryRequest}
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#accounts--contracts}
     *
     * @typeParam T the shape of the returned query response
     */
    async query(...args) {
        let result;
        if (args.length === 1) {
            result = await this.sendJsonRpc('query', args[0]);
        }
        else {
            const [path, data] = args;
            result = await this.sendJsonRpc('query', [path, data]);
        }
        if (result && result.error) {
            throw new errors_1.TypedError(`Querying ${args} failed: ${result.error}.\n${JSON.stringify(result, null, 2)}`, rpc_errors_1.getErrorTypeFromErrorMessage(result.error));
        }
        return result;
    }
    /**
     * Query for block info from the RPC
     * pass block_id OR finality as blockQuery, not both
     * @see {@link https://docs.near.org/docs/interaction/rpc#block}
     *
     * @param blockQuery {@link BlockReference} (passing a {@link BlockId} is deprecated)
     */
    async block(blockQuery) {
        const { finality } = blockQuery;
        let { blockId } = blockQuery;
        if (typeof blockQuery !== 'object') {
            const deprecate = depd_1.default('JsonRpcProvider.block(blockId)');
            deprecate('use `block({ blockId })` or `block({ finality })` instead');
            blockId = blockQuery;
        }
        return this.sendJsonRpc('block', { block_id: blockId, finality });
    }
    /**
     * Query changes in block from the RPC
     * pass block_id OR finality as blockQuery, not both
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#block-details)
     */
    async blockChanges(blockQuery) {
        const { finality } = blockQuery;
        const { blockId } = blockQuery;
        return this.sendJsonRpc('EXPERIMENTAL_changes_in_block', { block_id: blockId, finality });
    }
    /**
     * Queries for details about a specific chunk appending details of receipts and transactions to the same chunk data provided by a block
     * @see {@link https://docs.near.org/docs/interaction/rpc#chunk}
     *
     * @param chunkId Hash of a chunk ID or shard ID
     */
    async chunk(chunkId) {
        return this.sendJsonRpc('chunk', [chunkId]);
    }
    /**
     * Query validators of the epoch defined by the given block id.
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#detailed-validator-status}
     *
     * @param blockId Block hash or height, or null for latest.
     */
    async validators(blockId) {
        return this.sendJsonRpc('validators', [blockId]);
    }
    /**
     * @deprecated
     * Gets the genesis config from RPC
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#genesis-config}
     */
    async experimental_genesisConfig() {
        const deprecate = depd_1.default('JsonRpcProvider.experimental_protocolConfig()');
        deprecate('use `experimental_protocolConfig({ sync_checkpoint: \'genesis\' })` to fetch the up-to-date or genesis protocol config explicitly');
        return await this.sendJsonRpc('EXPERIMENTAL_protocol_config', { sync_checkpoint: 'genesis' });
    }
    /**
     * Gets the protocol config at a block from RPC
     * @see {@link }
     *
     * @param blockReference specifies the block to get the protocol config for
     */
    async experimental_protocolConfig(blockReference) {
        return await this.sendJsonRpc('EXPERIMENTAL_protocol_config', blockReference);
    }
    /**
     * @deprecated Use {@link lightClientProof} instead
     */
    async experimental_lightClientProof(request) {
        const deprecate = depd_1.default('JsonRpcProvider.experimental_lightClientProof(request)');
        deprecate('use `lightClientProof` instead');
        return await this.lightClientProof(request);
    }
    /**
     * Gets a light client execution proof for verifying execution outcomes
     * @see {@link https://github.com/nearprotocol/NEPs/blob/master/specs/ChainSpec/LightClient.md#light-client-proof}
     */
    async lightClientProof(request) {
        return await this.sendJsonRpc('EXPERIMENTAL_light_client_proof', request);
    }
    /**
     * Gets access key changes for a given array of accountIds
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-access-key-changes-all)
     * @returns {Promise<ChangeResult>}
     */
    async accessKeyChanges(accountIdArray, blockQuery) {
        const { finality } = blockQuery;
        const { blockId } = blockQuery;
        return this.sendJsonRpc('EXPERIMENTAL_changes', {
            changes_type: 'all_access_key_changes',
            account_ids: accountIdArray,
            block_id: blockId,
            finality
        });
    }
    /**
     * Gets single access key changes for a given array of access keys
     * pass block_id OR finality as blockQuery, not both
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-access-key-changes-single)
     * @returns {Promise<ChangeResult>}
     */
    async singleAccessKeyChanges(accessKeyArray, blockQuery) {
        const { finality } = blockQuery;
        const { blockId } = blockQuery;
        return this.sendJsonRpc('EXPERIMENTAL_changes', {
            changes_type: 'single_access_key_changes',
            keys: accessKeyArray,
            block_id: blockId,
            finality
        });
    }
    /**
     * Gets account changes for a given array of accountIds
     * pass block_id OR finality as blockQuery, not both
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-account-changes)
     * @returns {Promise<ChangeResult>}
     */
    async accountChanges(accountIdArray, blockQuery) {
        const { finality } = blockQuery;
        const { blockId } = blockQuery;
        return this.sendJsonRpc('EXPERIMENTAL_changes', {
            changes_type: 'account_changes',
            account_ids: accountIdArray,
            block_id: blockId,
            finality
        });
    }
    /**
     * Gets contract state changes for a given array of accountIds
     * pass block_id OR finality as blockQuery, not both
     * Note: If you pass a keyPrefix it must be base64 encoded
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-contract-state-changes)
     * @returns {Promise<ChangeResult>}
     */
    async contractStateChanges(accountIdArray, blockQuery, keyPrefix = '') {
        const { finality } = blockQuery;
        const { blockId } = blockQuery;
        return this.sendJsonRpc('EXPERIMENTAL_changes', {
            changes_type: 'data_changes',
            account_ids: accountIdArray,
            key_prefix_base64: keyPrefix,
            block_id: blockId,
            finality
        });
    }
    /**
     * Gets contract code changes for a given array of accountIds
     * pass block_id OR finality as blockQuery, not both
     * Note: Change is returned in a base64 encoded WASM file
     * See [docs for more info](https://docs.near.org/docs/develop/front-end/rpc#view-contract-code-changes)
     * @returns {Promise<ChangeResult>}
     */
    async contractCodeChanges(accountIdArray, blockQuery) {
        const { finality } = blockQuery;
        const { blockId } = blockQuery;
        return this.sendJsonRpc('EXPERIMENTAL_changes', {
            changes_type: 'contract_code_changes',
            account_ids: accountIdArray,
            block_id: blockId,
            finality
        });
    }
    /**
     * Returns gas price for a specific block_height or block_hash.
     * @see {@link https://docs.near.org/docs/develop/front-end/rpc#gas-price}
     *
     * @param blockId Block hash or height, or null for latest.
     */
    async gasPrice(blockId) {
        return await this.sendJsonRpc('gas_price', [blockId]);
    }
    /**
     * Directly call the RPC specifying the method and params
     *
     * @param method RPC method
     * @param params Parameters to the method
     */
    async sendJsonRpc(method, params) {
        const response = await exponential_backoff_1.default(REQUEST_RETRY_WAIT, REQUEST_RETRY_NUMBER, REQUEST_RETRY_WAIT_BACKOFF, async () => {
            try {
                const request = {
                    method,
                    params,
                    id: (_nextId++),
                    jsonrpc: '2.0'
                };
                const response = await web_1.fetchJson(this.connection, JSON.stringify(request));
                if (response.error) {
                    if (typeof response.error.data === 'object') {
                        if (typeof response.error.data.error_message === 'string' && typeof response.error.data.error_type === 'string') {
                            // if error data has error_message and error_type properties, we consider that node returned an error in the old format
                            throw new errors_1.TypedError(response.error.data.error_message, response.error.data.error_type);
                        }
                        throw rpc_errors_1.parseRpcError(response.error.data);
                    }
                    else {
                        const errorMessage = `[${response.error.code}] ${response.error.message}: ${response.error.data}`;
                        // NOTE: All this hackery is happening because structured errors not implemented
                        // TODO: Fix when https://github.com/nearprotocol/nearcore/issues/1839 gets resolved
                        if (response.error.data === 'Timeout' || errorMessage.includes('Timeout error')
                            || errorMessage.includes('query has timed out')) {
                            throw new errors_1.TypedError(errorMessage, 'TimeoutError');
                        }
                        throw new errors_1.TypedError(errorMessage, rpc_errors_1.getErrorTypeFromErrorMessage(response.error.data));
                    }
                }
                // Success when response.error is not exist
                return response;
            }
            catch (error) {
                if (error.type === 'TimeoutError') {
                    if (!process.env['NEAR_NO_LOGS']) {
                        console.warn(`Retrying request to ${method} as it has timed out`, params);
                    }
                    return null;
                }
                throw error;
            }
        });
        const { result } = response;
        // From jsonrpc spec:
        // result
        //   This member is REQUIRED on success.
        //   This member MUST NOT exist if there was an error invoking the method.
        if (typeof result === 'undefined') {
            throw new errors_1.TypedError(`Exceeded ${REQUEST_RETRY_NUMBER} attempts for request to ${method}.`, 'RetriesExceeded');
        }
        return result;
    }
}
exports.JsonRpcProvider = JsonRpcProvider;


/***/ }),

/***/ "./node_modules/near-api-js/lib/providers/provider.js":
/*!************************************************************!*\
  !*** ./node_modules/near-api-js/lib/providers/provider.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];

/**
 * NEAR RPC API request types and responses
 * @module
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTransactionLastResult = exports.Provider = exports.IdType = exports.FinalExecutionStatusBasic = exports.ExecutionStatusBasic = void 0;
var ExecutionStatusBasic;
(function (ExecutionStatusBasic) {
    ExecutionStatusBasic["Unknown"] = "Unknown";
    ExecutionStatusBasic["Pending"] = "Pending";
    ExecutionStatusBasic["Failure"] = "Failure";
})(ExecutionStatusBasic = exports.ExecutionStatusBasic || (exports.ExecutionStatusBasic = {}));
var FinalExecutionStatusBasic;
(function (FinalExecutionStatusBasic) {
    FinalExecutionStatusBasic["NotStarted"] = "NotStarted";
    FinalExecutionStatusBasic["Started"] = "Started";
    FinalExecutionStatusBasic["Failure"] = "Failure";
})(FinalExecutionStatusBasic = exports.FinalExecutionStatusBasic || (exports.FinalExecutionStatusBasic = {}));
var IdType;
(function (IdType) {
    IdType["Transaction"] = "transaction";
    IdType["Receipt"] = "receipt";
})(IdType = exports.IdType || (exports.IdType = {}));
/** @hidden */
class Provider {
}
exports.Provider = Provider;
/** @hidden */
function getTransactionLastResult(txResult) {
    if (typeof txResult.status === 'object' && typeof txResult.status.SuccessValue === 'string') {
        const value = Buffer.from(txResult.status.SuccessValue, 'base64').toString();
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    }
    return null;
}
exports.getTransactionLastResult = getTransactionLastResult;


/***/ }),

/***/ "./node_modules/near-api-js/lib/signer.js":
/*!************************************************!*\
  !*** ./node_modules/near-api-js/lib/signer.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InMemorySigner = exports.Signer = void 0;
const js_sha256_1 = __importDefault(__webpack_require__(/*! js-sha256 */ "./node_modules/js-sha256/src/sha256.js"));
const key_pair_1 = __webpack_require__(/*! ./utils/key_pair */ "./node_modules/near-api-js/lib/utils/key_pair.js");
const in_memory_key_store_1 = __webpack_require__(/*! ./key_stores/in_memory_key_store */ "./node_modules/near-api-js/lib/key_stores/in_memory_key_store.js");
/**
 * General signing interface, can be used for in memory signing, RPC singing, external wallet, HSM, etc.
 */
class Signer {
}
exports.Signer = Signer;
/**
 * Signs using in memory key store.
 */
class InMemorySigner extends Signer {
    constructor(keyStore) {
        super();
        this.keyStore = keyStore;
    }
    /**
     * Creates a single account Signer instance with account, network and keyPair provided.
     *
     * Intended to be useful for temporary keys (e.g. claiming a Linkdrop).
     *
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @param accountId The NEAR account to assign the key pair to
     * @param keyPair The keyPair to use for signing
     */
    static async fromKeyPair(networkId, accountId, keyPair) {
        const keyStore = new in_memory_key_store_1.InMemoryKeyStore();
        await keyStore.setKey(networkId, accountId, keyPair);
        return new InMemorySigner(keyStore);
    }
    /**
     * Creates a public key for the account given
     * @param accountId The NEAR account to assign a public key to
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns {Promise<PublicKey>}
     */
    async createKey(accountId, networkId) {
        const keyPair = key_pair_1.KeyPair.fromRandom('ed25519');
        await this.keyStore.setKey(networkId, accountId, keyPair);
        return keyPair.getPublicKey();
    }
    /**
     * Gets the existing public key for a given account
     * @param accountId The NEAR account to assign a public key to
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns {Promise<PublicKey>} Returns the public key or null if not found
     */
    async getPublicKey(accountId, networkId) {
        const keyPair = await this.keyStore.getKey(networkId, accountId);
        if (keyPair === null) {
            return null;
        }
        return keyPair.getPublicKey();
    }
    /**
     * @param message A message to be signed, typically a serialized transaction
     * @param accountId the NEAR account signing the message
     * @param networkId The targeted network. (ex. default, betanet, etc…)
     * @returns {Promise<Signature>}
     */
    async signMessage(message, accountId, networkId) {
        const hash = new Uint8Array(js_sha256_1.default.sha256.array(message));
        if (!accountId) {
            throw new Error('InMemorySigner requires provided account id');
        }
        const keyPair = await this.keyStore.getKey(networkId, accountId);
        if (keyPair === null) {
            throw new Error(`Key for ${accountId} not found in ${networkId}`);
        }
        return keyPair.sign(hash);
    }
    toString() {
        return `InMemorySigner(${this.keyStore})`;
    }
}
exports.InMemorySigner = InMemorySigner;


/***/ }),

/***/ "./node_modules/near-api-js/lib/transaction.js":
/*!*****************************************************!*\
  !*** ./node_modules/near-api-js/lib/transaction.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.signTransaction = exports.createTransaction = exports.SCHEMA = exports.Action = exports.SignedTransaction = exports.Transaction = exports.Signature = exports.deleteAccount = exports.deleteKey = exports.addKey = exports.stake = exports.transfer = exports.functionCall = exports.stringifyJsonOrBytes = exports.deployContract = exports.createAccount = exports.DeleteAccount = exports.DeleteKey = exports.AddKey = exports.Stake = exports.Transfer = exports.FunctionCall = exports.DeployContract = exports.CreateAccount = exports.IAction = exports.functionCallAccessKey = exports.fullAccessKey = exports.AccessKey = exports.AccessKeyPermission = exports.FullAccessPermission = exports.FunctionCallPermission = void 0;
const js_sha256_1 = __importDefault(__webpack_require__(/*! js-sha256 */ "./node_modules/js-sha256/src/sha256.js"));
const enums_1 = __webpack_require__(/*! ./utils/enums */ "./node_modules/near-api-js/lib/utils/enums.js");
const borsh_1 = __webpack_require__(/*! borsh */ "./node_modules/near-api-js/node_modules/borsh/lib/index.js");
const key_pair_1 = __webpack_require__(/*! ./utils/key_pair */ "./node_modules/near-api-js/lib/utils/key_pair.js");
class FunctionCallPermission extends enums_1.Assignable {
}
exports.FunctionCallPermission = FunctionCallPermission;
class FullAccessPermission extends enums_1.Assignable {
}
exports.FullAccessPermission = FullAccessPermission;
class AccessKeyPermission extends enums_1.Enum {
}
exports.AccessKeyPermission = AccessKeyPermission;
class AccessKey extends enums_1.Assignable {
}
exports.AccessKey = AccessKey;
function fullAccessKey() {
    return new AccessKey({ nonce: 0, permission: new AccessKeyPermission({ fullAccess: new FullAccessPermission({}) }) });
}
exports.fullAccessKey = fullAccessKey;
function functionCallAccessKey(receiverId, methodNames, allowance) {
    return new AccessKey({ nonce: 0, permission: new AccessKeyPermission({ functionCall: new FunctionCallPermission({ receiverId, allowance, methodNames }) }) });
}
exports.functionCallAccessKey = functionCallAccessKey;
class IAction extends enums_1.Assignable {
}
exports.IAction = IAction;
class CreateAccount extends IAction {
}
exports.CreateAccount = CreateAccount;
class DeployContract extends IAction {
}
exports.DeployContract = DeployContract;
class FunctionCall extends IAction {
}
exports.FunctionCall = FunctionCall;
class Transfer extends IAction {
}
exports.Transfer = Transfer;
class Stake extends IAction {
}
exports.Stake = Stake;
class AddKey extends IAction {
}
exports.AddKey = AddKey;
class DeleteKey extends IAction {
}
exports.DeleteKey = DeleteKey;
class DeleteAccount extends IAction {
}
exports.DeleteAccount = DeleteAccount;
function createAccount() {
    return new Action({ createAccount: new CreateAccount({}) });
}
exports.createAccount = createAccount;
function deployContract(code) {
    return new Action({ deployContract: new DeployContract({ code }) });
}
exports.deployContract = deployContract;
function stringifyJsonOrBytes(args) {
    const isUint8Array = args.byteLength !== undefined && args.byteLength === args.length;
    const serializedArgs = isUint8Array ? args : Buffer.from(JSON.stringify(args));
    return serializedArgs;
}
exports.stringifyJsonOrBytes = stringifyJsonOrBytes;
/**
 * Constructs {@link Action} instance representing contract method call.
 *
 * @param methodName the name of the method to call
 * @param args arguments to pass to method. Can be either plain JS object which gets serialized as JSON automatically
 *  or `Uint8Array` instance which represents bytes passed as is.
 * @param gas max amount of gas that method call can use
 * @param deposit amount of NEAR (in yoctoNEAR) to send together with the call
 * @param stringify Convert input arguments into bytes array.
 */
function functionCall(methodName, args, gas, deposit, stringify = stringifyJsonOrBytes) {
    return new Action({ functionCall: new FunctionCall({ methodName, args: stringify(args), gas, deposit }) });
}
exports.functionCall = functionCall;
function transfer(deposit) {
    return new Action({ transfer: new Transfer({ deposit }) });
}
exports.transfer = transfer;
function stake(stake, publicKey) {
    return new Action({ stake: new Stake({ stake, publicKey }) });
}
exports.stake = stake;
function addKey(publicKey, accessKey) {
    return new Action({ addKey: new AddKey({ publicKey, accessKey }) });
}
exports.addKey = addKey;
function deleteKey(publicKey) {
    return new Action({ deleteKey: new DeleteKey({ publicKey }) });
}
exports.deleteKey = deleteKey;
function deleteAccount(beneficiaryId) {
    return new Action({ deleteAccount: new DeleteAccount({ beneficiaryId }) });
}
exports.deleteAccount = deleteAccount;
class Signature extends enums_1.Assignable {
}
exports.Signature = Signature;
class Transaction extends enums_1.Assignable {
    encode() {
        return borsh_1.serialize(exports.SCHEMA, this);
    }
    static decode(bytes) {
        return borsh_1.deserialize(exports.SCHEMA, Transaction, bytes);
    }
}
exports.Transaction = Transaction;
class SignedTransaction extends enums_1.Assignable {
    encode() {
        return borsh_1.serialize(exports.SCHEMA, this);
    }
    static decode(bytes) {
        return borsh_1.deserialize(exports.SCHEMA, SignedTransaction, bytes);
    }
}
exports.SignedTransaction = SignedTransaction;
/**
 * Contains a list of the valid transaction Actions available with this API
 * @see {@link https://nomicon.io/RuntimeSpec/Actions.html | Actions Spec}
 */
class Action extends enums_1.Enum {
}
exports.Action = Action;
exports.SCHEMA = new Map([
    [Signature, { kind: 'struct', fields: [
                ['keyType', 'u8'],
                ['data', [64]]
            ] }],
    [SignedTransaction, { kind: 'struct', fields: [
                ['transaction', Transaction],
                ['signature', Signature]
            ] }],
    [Transaction, { kind: 'struct', fields: [
                ['signerId', 'string'],
                ['publicKey', key_pair_1.PublicKey],
                ['nonce', 'u64'],
                ['receiverId', 'string'],
                ['blockHash', [32]],
                ['actions', [Action]]
            ] }],
    [key_pair_1.PublicKey, { kind: 'struct', fields: [
                ['keyType', 'u8'],
                ['data', [32]]
            ] }],
    [AccessKey, { kind: 'struct', fields: [
                ['nonce', 'u64'],
                ['permission', AccessKeyPermission],
            ] }],
    [AccessKeyPermission, { kind: 'enum', field: 'enum', values: [
                ['functionCall', FunctionCallPermission],
                ['fullAccess', FullAccessPermission],
            ] }],
    [FunctionCallPermission, { kind: 'struct', fields: [
                ['allowance', { kind: 'option', type: 'u128' }],
                ['receiverId', 'string'],
                ['methodNames', ['string']],
            ] }],
    [FullAccessPermission, { kind: 'struct', fields: [] }],
    [Action, { kind: 'enum', field: 'enum', values: [
                ['createAccount', CreateAccount],
                ['deployContract', DeployContract],
                ['functionCall', FunctionCall],
                ['transfer', Transfer],
                ['stake', Stake],
                ['addKey', AddKey],
                ['deleteKey', DeleteKey],
                ['deleteAccount', DeleteAccount],
            ] }],
    [CreateAccount, { kind: 'struct', fields: [] }],
    [DeployContract, { kind: 'struct', fields: [
                ['code', ['u8']]
            ] }],
    [FunctionCall, { kind: 'struct', fields: [
                ['methodName', 'string'],
                ['args', ['u8']],
                ['gas', 'u64'],
                ['deposit', 'u128']
            ] }],
    [Transfer, { kind: 'struct', fields: [
                ['deposit', 'u128']
            ] }],
    [Stake, { kind: 'struct', fields: [
                ['stake', 'u128'],
                ['publicKey', key_pair_1.PublicKey]
            ] }],
    [AddKey, { kind: 'struct', fields: [
                ['publicKey', key_pair_1.PublicKey],
                ['accessKey', AccessKey]
            ] }],
    [DeleteKey, { kind: 'struct', fields: [
                ['publicKey', key_pair_1.PublicKey]
            ] }],
    [DeleteAccount, { kind: 'struct', fields: [
                ['beneficiaryId', 'string']
            ] }],
]);
function createTransaction(signerId, publicKey, receiverId, nonce, actions, blockHash) {
    return new Transaction({ signerId, publicKey, nonce, receiverId, actions, blockHash });
}
exports.createTransaction = createTransaction;
/**
 * Signs a given transaction from an account with given keys, applied to the given network
 * @param transaction The Transaction object to sign
 * @param signer The {Signer} object that assists with signing keys
 * @param accountId The human-readable NEAR account name
 * @param networkId The targeted network. (ex. default, betanet, etc…)
 */
async function signTransactionObject(transaction, signer, accountId, networkId) {
    const message = borsh_1.serialize(exports.SCHEMA, transaction);
    const hash = new Uint8Array(js_sha256_1.default.sha256.array(message));
    const signature = await signer.signMessage(message, accountId, networkId);
    const signedTx = new SignedTransaction({
        transaction,
        signature: new Signature({ keyType: transaction.publicKey.keyType, data: signature.signature })
    });
    return [hash, signedTx];
}
async function signTransaction(...args) {
    if (args[0].constructor === Transaction) {
        const [transaction, signer, accountId, networkId] = args;
        return signTransactionObject(transaction, signer, accountId, networkId);
    }
    else {
        const [receiverId, nonce, actions, blockHash, signer, accountId, networkId] = args;
        const publicKey = await signer.getPublicKey(accountId, networkId);
        const transaction = createTransaction(accountId, publicKey, receiverId, nonce, actions, blockHash);
        return signTransactionObject(transaction, signer, accountId, networkId);
    }
}
exports.signTransaction = signTransaction;


/***/ }),

/***/ "./node_modules/near-api-js/lib/utils/enums.js":
/*!*****************************************************!*\
  !*** ./node_modules/near-api-js/lib/utils/enums.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Assignable = exports.Enum = void 0;
/** @hidden @module */
class Enum {
    constructor(properties) {
        if (Object.keys(properties).length !== 1) {
            throw new Error('Enum can only take single value');
        }
        Object.keys(properties).map((key) => {
            this[key] = properties[key];
            this.enum = key;
        });
    }
}
exports.Enum = Enum;
class Assignable {
    constructor(properties) {
        Object.keys(properties).map((key) => {
            this[key] = properties[key];
        });
    }
}
exports.Assignable = Assignable;


/***/ }),

/***/ "./node_modules/near-api-js/lib/utils/errors.js":
/*!******************************************************!*\
  !*** ./node_modules/near-api-js/lib/utils/errors.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logWarning = exports.ErrorContext = exports.TypedError = exports.ArgumentTypeError = exports.PositionalArgsError = void 0;
class PositionalArgsError extends Error {
    constructor() {
        super('Contract method calls expect named arguments wrapped in object, e.g. { argName1: argValue1, argName2: argValue2 }');
    }
}
exports.PositionalArgsError = PositionalArgsError;
class ArgumentTypeError extends Error {
    constructor(argName, argType, argValue) {
        super(`Expected ${argType} for '${argName}' argument, but got '${JSON.stringify(argValue)}'`);
    }
}
exports.ArgumentTypeError = ArgumentTypeError;
class TypedError extends Error {
    constructor(message, type, context) {
        super(message);
        this.type = type || 'UntypedError';
        this.context = context;
    }
}
exports.TypedError = TypedError;
class ErrorContext {
    constructor(transactionHash) {
        this.transactionHash = transactionHash;
    }
}
exports.ErrorContext = ErrorContext;
function logWarning(...args) {
    if (!process.env['NEAR_NO_LOGS']) {
        console.warn(...args);
    }
}
exports.logWarning = logWarning;


/***/ }),

/***/ "./node_modules/near-api-js/lib/utils/exponential-backoff.js":
/*!*******************************************************************!*\
  !*** ./node_modules/near-api-js/lib/utils/exponential-backoff.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
async function exponentialBackoff(startWaitTime, retryNumber, waitBackoff, getResult) {
    // TODO: jitter?
    let waitTime = startWaitTime;
    for (let i = 0; i < retryNumber; i++) {
        const result = await getResult();
        if (result) {
            return result;
        }
        await sleep(waitTime);
        waitTime *= waitBackoff;
    }
    return null;
}
exports["default"] = exponentialBackoff;
// Sleep given number of millis.
function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}


/***/ }),

/***/ "./node_modules/near-api-js/lib/utils/format.js":
/*!******************************************************!*\
  !*** ./node_modules/near-api-js/lib/utils/format.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseNearAmount = exports.formatNearAmount = exports.NEAR_NOMINATION = exports.NEAR_NOMINATION_EXP = void 0;
const bn_js_1 = __importDefault(__webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js"));
/**
 * Exponent for calculating how many indivisible units are there in one NEAR. See {@link NEAR_NOMINATION}.
 */
exports.NEAR_NOMINATION_EXP = 24;
/**
 * Number of indivisible units in one NEAR. Derived from {@link NEAR_NOMINATION_EXP}.
 */
exports.NEAR_NOMINATION = new bn_js_1.default('10', 10).pow(new bn_js_1.default(exports.NEAR_NOMINATION_EXP, 10));
// Pre-calculate offests used for rounding to different number of digits
const ROUNDING_OFFSETS = [];
const BN10 = new bn_js_1.default(10);
for (let i = 0, offset = new bn_js_1.default(5); i < exports.NEAR_NOMINATION_EXP; i++, offset = offset.mul(BN10)) {
    ROUNDING_OFFSETS[i] = offset;
}
/**
 * Convert account balance value from internal indivisible units to NEAR. 1 NEAR is defined by {@link NEAR_NOMINATION}.
 * Effectively this divides given amount by {@link NEAR_NOMINATION}.
 *
 * @param balance decimal string representing balance in smallest non-divisible NEAR units (as specified by {@link NEAR_NOMINATION})
 * @param fracDigits number of fractional digits to preserve in formatted string. Balance is rounded to match given number of digits.
 * @returns Value in Ⓝ
 */
function formatNearAmount(balance, fracDigits = exports.NEAR_NOMINATION_EXP) {
    const balanceBN = new bn_js_1.default(balance, 10);
    if (fracDigits !== exports.NEAR_NOMINATION_EXP) {
        // Adjust balance for rounding at given number of digits
        const roundingExp = exports.NEAR_NOMINATION_EXP - fracDigits - 1;
        if (roundingExp > 0) {
            balanceBN.iadd(ROUNDING_OFFSETS[roundingExp]);
        }
    }
    balance = balanceBN.toString();
    const wholeStr = balance.substring(0, balance.length - exports.NEAR_NOMINATION_EXP) || '0';
    const fractionStr = balance.substring(balance.length - exports.NEAR_NOMINATION_EXP)
        .padStart(exports.NEAR_NOMINATION_EXP, '0').substring(0, fracDigits);
    return trimTrailingZeroes(`${formatWithCommas(wholeStr)}.${fractionStr}`);
}
exports.formatNearAmount = formatNearAmount;
/**
 * Convert human readable NEAR amount to internal indivisible units.
 * Effectively this multiplies given amount by {@link NEAR_NOMINATION}.
 *
 * @param amt decimal string (potentially fractional) denominated in NEAR.
 * @returns The parsed yoctoⓃ amount or null if no amount was passed in
 */
function parseNearAmount(amt) {
    if (!amt) {
        return null;
    }
    amt = cleanupAmount(amt);
    const split = amt.split('.');
    const wholePart = split[0];
    const fracPart = split[1] || '';
    if (split.length > 2 || fracPart.length > exports.NEAR_NOMINATION_EXP) {
        throw new Error(`Cannot parse '${amt}' as NEAR amount`);
    }
    return trimLeadingZeroes(wholePart + fracPart.padEnd(exports.NEAR_NOMINATION_EXP, '0'));
}
exports.parseNearAmount = parseNearAmount;
/**
 * Removes commas from the input
 * @param amount A value or amount that may contain commas
 * @returns string The cleaned value
 */
function cleanupAmount(amount) {
    return amount.replace(/,/g, '').trim();
}
/**
 * Removes .000… from an input
 * @param value A value that may contain trailing zeroes in the decimals place
 * @returns string The value without the trailing zeros
 */
function trimTrailingZeroes(value) {
    return value.replace(/\.?0*$/, '');
}
/**
 * Removes leading zeroes from an input
 * @param value A value that may contain leading zeroes
 * @returns string The value without the leading zeroes
 */
function trimLeadingZeroes(value) {
    value = value.replace(/^0+/, '');
    if (value === '') {
        return '0';
    }
    return value;
}
/**
 * Returns a human-readable value with commas
 * @param value A value that may not contain commas
 * @returns string A value with commas
 */
function formatWithCommas(value) {
    const pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(value)) {
        value = value.replace(pattern, '$1,$2');
    }
    return value;
}


/***/ }),

/***/ "./node_modules/near-api-js/lib/utils/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/near-api-js/lib/utils/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.logWarning = exports.rpc_errors = exports.KeyPairEd25519 = exports.KeyPair = exports.PublicKey = exports.format = exports.enums = exports.web = exports.serialize = exports.key_pair = void 0;
const key_pair = __importStar(__webpack_require__(/*! ./key_pair */ "./node_modules/near-api-js/lib/utils/key_pair.js"));
exports.key_pair = key_pair;
const serialize = __importStar(__webpack_require__(/*! ./serialize */ "./node_modules/near-api-js/lib/utils/serialize.js"));
exports.serialize = serialize;
const web = __importStar(__webpack_require__(/*! ./web */ "./node_modules/near-api-js/lib/utils/web.js"));
exports.web = web;
const enums = __importStar(__webpack_require__(/*! ./enums */ "./node_modules/near-api-js/lib/utils/enums.js"));
exports.enums = enums;
const format = __importStar(__webpack_require__(/*! ./format */ "./node_modules/near-api-js/lib/utils/format.js"));
exports.format = format;
const rpc_errors = __importStar(__webpack_require__(/*! ./rpc_errors */ "./node_modules/near-api-js/lib/utils/rpc_errors.js"));
exports.rpc_errors = rpc_errors;
const key_pair_1 = __webpack_require__(/*! ./key_pair */ "./node_modules/near-api-js/lib/utils/key_pair.js");
Object.defineProperty(exports, "PublicKey", ({ enumerable: true, get: function () { return key_pair_1.PublicKey; } }));
Object.defineProperty(exports, "KeyPair", ({ enumerable: true, get: function () { return key_pair_1.KeyPair; } }));
Object.defineProperty(exports, "KeyPairEd25519", ({ enumerable: true, get: function () { return key_pair_1.KeyPairEd25519; } }));
const errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/near-api-js/lib/utils/errors.js");
Object.defineProperty(exports, "logWarning", ({ enumerable: true, get: function () { return errors_1.logWarning; } }));


/***/ }),

/***/ "./node_modules/near-api-js/lib/utils/key_pair.js":
/*!********************************************************!*\
  !*** ./node_modules/near-api-js/lib/utils/key_pair.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyPairEd25519 = exports.KeyPair = exports.PublicKey = exports.KeyType = void 0;
const tweetnacl_1 = __importDefault(__webpack_require__(/*! tweetnacl */ "./node_modules/tweetnacl/nacl-fast.js"));
const serialize_1 = __webpack_require__(/*! ./serialize */ "./node_modules/near-api-js/lib/utils/serialize.js");
const enums_1 = __webpack_require__(/*! ./enums */ "./node_modules/near-api-js/lib/utils/enums.js");
/** All supported key types */
var KeyType;
(function (KeyType) {
    KeyType[KeyType["ED25519"] = 0] = "ED25519";
})(KeyType = exports.KeyType || (exports.KeyType = {}));
function key_type_to_str(keyType) {
    switch (keyType) {
        case KeyType.ED25519: return 'ed25519';
        default: throw new Error(`Unknown key type ${keyType}`);
    }
}
function str_to_key_type(keyType) {
    switch (keyType.toLowerCase()) {
        case 'ed25519': return KeyType.ED25519;
        default: throw new Error(`Unknown key type ${keyType}`);
    }
}
/**
 * PublicKey representation that has type and bytes of the key.
 */
class PublicKey extends enums_1.Assignable {
    static from(value) {
        if (typeof value === 'string') {
            return PublicKey.fromString(value);
        }
        return value;
    }
    static fromString(encodedKey) {
        const parts = encodedKey.split(':');
        if (parts.length === 1) {
            return new PublicKey({ keyType: KeyType.ED25519, data: serialize_1.base_decode(parts[0]) });
        }
        else if (parts.length === 2) {
            return new PublicKey({ keyType: str_to_key_type(parts[0]), data: serialize_1.base_decode(parts[1]) });
        }
        else {
            throw new Error('Invalid encoded key format, must be <curve>:<encoded key>');
        }
    }
    toString() {
        return `${key_type_to_str(this.keyType)}:${serialize_1.base_encode(this.data)}`;
    }
    verify(message, signature) {
        switch (this.keyType) {
            case KeyType.ED25519: return tweetnacl_1.default.sign.detached.verify(message, signature, this.data);
            default: throw new Error(`Unknown key type ${this.keyType}`);
        }
    }
}
exports.PublicKey = PublicKey;
class KeyPair {
    /**
     * @param curve Name of elliptical curve, case-insensitive
     * @returns Random KeyPair based on the curve
     */
    static fromRandom(curve) {
        switch (curve.toUpperCase()) {
            case 'ED25519': return KeyPairEd25519.fromRandom();
            default: throw new Error(`Unknown curve ${curve}`);
        }
    }
    static fromString(encodedKey) {
        const parts = encodedKey.split(':');
        if (parts.length === 1) {
            return new KeyPairEd25519(parts[0]);
        }
        else if (parts.length === 2) {
            switch (parts[0].toUpperCase()) {
                case 'ED25519': return new KeyPairEd25519(parts[1]);
                default: throw new Error(`Unknown curve: ${parts[0]}`);
            }
        }
        else {
            throw new Error('Invalid encoded key format, must be <curve>:<encoded key>');
        }
    }
}
exports.KeyPair = KeyPair;
/**
 * This class provides key pair functionality for Ed25519 curve:
 * generating key pairs, encoding key pairs, signing and verifying.
 */
class KeyPairEd25519 extends KeyPair {
    /**
     * Construct an instance of key pair given a secret key.
     * It's generally assumed that these are encoded in base58.
     * @param {string} secretKey
     */
    constructor(secretKey) {
        super();
        const keyPair = tweetnacl_1.default.sign.keyPair.fromSecretKey(serialize_1.base_decode(secretKey));
        this.publicKey = new PublicKey({ keyType: KeyType.ED25519, data: keyPair.publicKey });
        this.secretKey = secretKey;
    }
    /**
     * Generate a new random keypair.
     * @example
     * const keyRandom = KeyPair.fromRandom();
     * keyRandom.publicKey
     * // returns [PUBLIC_KEY]
     *
     * keyRandom.secretKey
     * // returns [SECRET_KEY]
     */
    static fromRandom() {
        const newKeyPair = tweetnacl_1.default.sign.keyPair();
        return new KeyPairEd25519(serialize_1.base_encode(newKeyPair.secretKey));
    }
    sign(message) {
        const signature = tweetnacl_1.default.sign.detached(message, serialize_1.base_decode(this.secretKey));
        return { signature, publicKey: this.publicKey };
    }
    verify(message, signature) {
        return this.publicKey.verify(message, signature);
    }
    toString() {
        return `ed25519:${this.secretKey}`;
    }
    getPublicKey() {
        return this.publicKey;
    }
}
exports.KeyPairEd25519 = KeyPairEd25519;


/***/ }),

/***/ "./node_modules/near-api-js/lib/utils/rpc_errors.js":
/*!**********************************************************!*\
  !*** ./node_modules/near-api-js/lib/utils/rpc_errors.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getErrorTypeFromErrorMessage = exports.formatError = exports.parseResultError = exports.parseRpcError = exports.ServerError = void 0;
const mustache_1 = __importDefault(__webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js"));
const rpc_error_schema_json_1 = __importDefault(__webpack_require__(/*! ../generated/rpc_error_schema.json */ "./node_modules/near-api-js/lib/generated/rpc_error_schema.json"));
const error_messages_json_1 = __importDefault(__webpack_require__(/*! ../res/error_messages.json */ "./node_modules/near-api-js/lib/res/error_messages.json"));
const common_index_1 = __webpack_require__(/*! ../common-index */ "./node_modules/near-api-js/lib/common-index.js");
const errors_1 = __webpack_require__(/*! ../utils/errors */ "./node_modules/near-api-js/lib/utils/errors.js");
const mustacheHelpers = {
    formatNear: () => (n, render) => common_index_1.utils.format.formatNearAmount(render(n))
};
class ServerError extends errors_1.TypedError {
}
exports.ServerError = ServerError;
class ServerTransactionError extends ServerError {
}
function parseRpcError(errorObj) {
    const result = {};
    const errorClassName = walkSubtype(errorObj, rpc_error_schema_json_1.default.schema, result, '');
    // NOTE: This assumes that all errors extend TypedError
    const error = new ServerError(formatError(errorClassName, result), errorClassName);
    Object.assign(error, result);
    return error;
}
exports.parseRpcError = parseRpcError;
function parseResultError(result) {
    const server_error = parseRpcError(result.status.Failure);
    const server_tx_error = new ServerTransactionError();
    Object.assign(server_tx_error, server_error);
    server_tx_error.type = server_error.type;
    server_tx_error.message = server_error.message;
    server_tx_error.transaction_outcome = result.transaction_outcome;
    return server_tx_error;
}
exports.parseResultError = parseResultError;
function formatError(errorClassName, errorData) {
    if (typeof error_messages_json_1.default[errorClassName] === 'string') {
        return mustache_1.default.render(error_messages_json_1.default[errorClassName], {
            ...errorData,
            ...mustacheHelpers
        });
    }
    return JSON.stringify(errorData);
}
exports.formatError = formatError;
/**
 * Walks through defined schema returning error(s) recursively
 * @param errorObj The error to be parsed
 * @param schema A defined schema in JSON mapping to the RPC errors
 * @param result An object used in recursion or called directly
 * @param typeName The human-readable error type name as defined in the JSON mapping
 */
function walkSubtype(errorObj, schema, result, typeName) {
    let error;
    let type;
    let errorTypeName;
    for (const errorName in schema) {
        if (isString(errorObj[errorName])) {
            // Return early if error type is in a schema
            return errorObj[errorName];
        }
        if (isObject(errorObj[errorName])) {
            error = errorObj[errorName];
            type = schema[errorName];
            errorTypeName = errorName;
        }
        else if (isObject(errorObj.kind) && isObject(errorObj.kind[errorName])) {
            error = errorObj.kind[errorName];
            type = schema[errorName];
            errorTypeName = errorName;
        }
        else {
            continue;
        }
    }
    if (error && type) {
        for (const prop of Object.keys(type.props)) {
            result[prop] = error[prop];
        }
        return walkSubtype(error, schema, result, errorTypeName);
    }
    else {
        // TODO: is this the right thing to do?
        result.kind = errorObj;
        return typeName;
    }
}
function getErrorTypeFromErrorMessage(errorMessage) {
    // This function should be removed when JSON RPC starts returning typed errors.
    switch (true) {
        case /^account .*? does not exist while viewing$/.test(errorMessage):
            return 'AccountDoesNotExist';
        case /^Account .*? doesn't exist$/.test(errorMessage):
            return 'AccountDoesNotExist';
        case /^access key .*? does not exist while viewing$/.test(errorMessage):
            return 'AccessKeyDoesNotExist';
        case /wasm execution failed with error: FunctionCallError\(CompilationError\(CodeDoesNotExist/.test(errorMessage):
            return 'CodeDoesNotExist';
        case /Transaction nonce \d+ must be larger than nonce of the used access key \d+/.test(errorMessage):
            return 'InvalidNonce';
        default:
            return 'UntypedError';
    }
}
exports.getErrorTypeFromErrorMessage = getErrorTypeFromErrorMessage;
/**
 * Helper function determining if the argument is an object
 * @param n Value to check
 */
function isObject(n) {
    return Object.prototype.toString.call(n) === '[object Object]';
}
/**
 * Helper function determining if the argument is a string
 * @param n Value to check
 */
function isString(n) {
    return Object.prototype.toString.call(n) === '[object String]';
}


/***/ }),

/***/ "./node_modules/near-api-js/lib/utils/serialize.js":
/*!*********************************************************!*\
  !*** ./node_modules/near-api-js/lib/utils/serialize.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var borsh_1 = __webpack_require__(/*! borsh */ "./node_modules/near-api-js/node_modules/borsh/lib/index.js");
Object.defineProperty(exports, "base_encode", ({ enumerable: true, get: function () { return borsh_1.baseEncode; } }));
Object.defineProperty(exports, "base_decode", ({ enumerable: true, get: function () { return borsh_1.baseDecode; } }));
Object.defineProperty(exports, "serialize", ({ enumerable: true, get: function () { return borsh_1.serialize; } }));
Object.defineProperty(exports, "deserialize", ({ enumerable: true, get: function () { return borsh_1.deserialize; } }));
Object.defineProperty(exports, "BorshError", ({ enumerable: true, get: function () { return borsh_1.BorshError; } }));
Object.defineProperty(exports, "BinaryWriter", ({ enumerable: true, get: function () { return borsh_1.BinaryWriter; } }));
Object.defineProperty(exports, "BinaryReader", ({ enumerable: true, get: function () { return borsh_1.BinaryReader; } }));


/***/ }),

/***/ "./node_modules/near-api-js/lib/utils/web.js":
/*!***************************************************!*\
  !*** ./node_modules/near-api-js/lib/utils/web.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fetchJson = void 0;
const http_errors_1 = __importDefault(__webpack_require__(/*! http-errors */ "./node_modules/http-errors/index.js"));
const exponential_backoff_1 = __importDefault(__webpack_require__(/*! ./exponential-backoff */ "./node_modules/near-api-js/lib/utils/exponential-backoff.js"));
const providers_1 = __webpack_require__(/*! ../providers */ "./node_modules/near-api-js/lib/providers/index.js");
const errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/near-api-js/lib/utils/errors.js");
const START_WAIT_TIME_MS = 1000;
const BACKOFF_MULTIPLIER = 1.5;
const RETRY_NUMBER = 10;
async function fetchJson(connectionInfoOrUrl, json) {
    let connectionInfo = { url: null };
    if (typeof (connectionInfoOrUrl) === 'string') {
        connectionInfo.url = connectionInfoOrUrl;
    }
    else {
        connectionInfo = connectionInfoOrUrl;
    }
    const response = await exponential_backoff_1.default(START_WAIT_TIME_MS, RETRY_NUMBER, BACKOFF_MULTIPLIER, async () => {
        try {
            const response = await fetch(connectionInfo.url, {
                method: json ? 'POST' : 'GET',
                body: json ? json : undefined,
                headers: { ...connectionInfo.headers, 'Content-Type': 'application/json' }
            });
            if (!response.ok) {
                if (response.status === 503) {
                    errors_1.logWarning(`Retrying HTTP request for ${connectionInfo.url} as it's not available now`);
                    return null;
                }
                throw http_errors_1.default(response.status, await response.text());
            }
            return response;
        }
        catch (error) {
            if (error.toString().includes('FetchError') || error.toString().includes('Failed to fetch')) {
                errors_1.logWarning(`Retrying HTTP request for ${connectionInfo.url} because of error: ${error}`);
                return null;
            }
            throw error;
        }
    });
    if (!response) {
        throw new providers_1.TypedError(`Exceeded ${RETRY_NUMBER} attempts for ${connectionInfo.url}.`, 'RetriesExceeded');
    }
    return await response.json();
}
exports.fetchJson = fetchJson;


/***/ }),

/***/ "./node_modules/near-api-js/lib/validators.js":
/*!****************************************************!*\
  !*** ./node_modules/near-api-js/lib/validators.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.diffEpochValidators = exports.findSeatPrice = void 0;
const bn_js_1 = __importDefault(__webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js"));
const depd_1 = __importDefault(__webpack_require__(/*! depd */ "./node_modules/near-api-js/node_modules/depd/lib/browser/index.js"));
/** Finds seat price given validators stakes and number of seats.
 *  Calculation follow the spec: https://nomicon.io/Economics/README.html#validator-selection
 * @params validators: current or next epoch validators.
 * @params maxNumberOfSeats: maximum number of seats in the network.
 * @params minimumStakeRatio: minimum stake ratio
 * @params protocolVersion: version of the protocol from genesis config
 */
function findSeatPrice(validators, maxNumberOfSeats, minimumStakeRatio, protocolVersion) {
    if (protocolVersion && protocolVersion < 49) {
        return findSeatPriceForProtocolBefore49(validators, maxNumberOfSeats);
    }
    if (!minimumStakeRatio) {
        const deprecate = depd_1.default('findSeatPrice(validators, maxNumberOfSeats)');
        deprecate('`use `findSeatPrice(validators, maxNumberOfSeats, minimumStakeRatio)` instead');
        minimumStakeRatio = [1, 6250]; // harcoded minimumStakeRation from 12/7/21
    }
    return findSeatPriceForProtocolAfter49(validators, maxNumberOfSeats, minimumStakeRatio);
}
exports.findSeatPrice = findSeatPrice;
function findSeatPriceForProtocolBefore49(validators, numSeats) {
    const stakes = validators.map(v => new bn_js_1.default(v.stake, 10)).sort((a, b) => a.cmp(b));
    const num = new bn_js_1.default(numSeats);
    const stakesSum = stakes.reduce((a, b) => a.add(b));
    if (stakesSum.lt(num)) {
        throw new Error('Stakes are below seats');
    }
    // assert stakesSum >= numSeats
    let left = new bn_js_1.default(1), right = stakesSum.add(new bn_js_1.default(1));
    while (!left.eq(right.sub(new bn_js_1.default(1)))) {
        const mid = left.add(right).div(new bn_js_1.default(2));
        let found = false;
        let currentSum = new bn_js_1.default(0);
        for (let i = 0; i < stakes.length; ++i) {
            currentSum = currentSum.add(stakes[i].div(mid));
            if (currentSum.gte(num)) {
                left = mid;
                found = true;
                break;
            }
        }
        if (!found) {
            right = mid;
        }
    }
    return left;
}
// nearcore reference: https://github.com/near/nearcore/blob/5a8ae263ec07930cd34d0dcf5bcee250c67c02aa/chain/epoch_manager/src/validator_selection.rs#L308;L315
function findSeatPriceForProtocolAfter49(validators, maxNumberOfSeats, minimumStakeRatio) {
    if (minimumStakeRatio.length != 2) {
        throw Error('minimumStakeRatio should have 2 elements');
    }
    const stakes = validators.map(v => new bn_js_1.default(v.stake, 10)).sort((a, b) => a.cmp(b));
    const stakesSum = stakes.reduce((a, b) => a.add(b));
    if (validators.length < maxNumberOfSeats) {
        return stakesSum.mul(new bn_js_1.default(minimumStakeRatio[0])).div(new bn_js_1.default(minimumStakeRatio[1]));
    }
    else {
        return stakes[0].add(new bn_js_1.default(1));
    }
}
/** Diff validators between current and next epoch.
 * Returns additions, subtractions and changes to validator set.
 * @params currentValidators: list of current validators.
 * @params nextValidators: list of next validators.
 */
function diffEpochValidators(currentValidators, nextValidators) {
    const validatorsMap = new Map();
    currentValidators.forEach(v => validatorsMap.set(v.account_id, v));
    const nextValidatorsSet = new Set(nextValidators.map(v => v.account_id));
    return {
        newValidators: nextValidators.filter(v => !validatorsMap.has(v.account_id)),
        removedValidators: currentValidators.filter(v => !nextValidatorsSet.has(v.account_id)),
        changedValidators: nextValidators.filter(v => (validatorsMap.has(v.account_id) && validatorsMap.get(v.account_id).stake != v.stake))
            .map(v => ({ current: validatorsMap.get(v.account_id), next: v }))
    };
}
exports.diffEpochValidators = diffEpochValidators;


/***/ }),

/***/ "./node_modules/near-api-js/lib/wallet-account.js":
/*!********************************************************!*\
  !*** ./node_modules/near-api-js/lib/wallet-account.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectedWalletAccount = exports.WalletAccount = exports.WalletConnection = void 0;
/**
 * The classes in this module are used in conjunction with the {@link BrowserLocalStorageKeyStore}. This module exposes two classes:
 * * {@link WalletConnection} which redirects users to {@link https://docs.near.org/docs/tools/near-wallet | NEAR Wallet} for key management.
 * * {@link ConnectedWalletAccount} is an {@link Account} implementation that uses {@link WalletConnection} to get keys
 *
 * @module walletAccount
 */
const depd_1 = __importDefault(__webpack_require__(/*! depd */ "./node_modules/near-api-js/node_modules/depd/lib/browser/index.js"));
const account_1 = __webpack_require__(/*! ./account */ "./node_modules/near-api-js/lib/account.js");
const transaction_1 = __webpack_require__(/*! ./transaction */ "./node_modules/near-api-js/lib/transaction.js");
const utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/near-api-js/lib/utils/index.js");
const borsh_1 = __webpack_require__(/*! borsh */ "./node_modules/near-api-js/node_modules/borsh/lib/index.js");
const borsh_2 = __webpack_require__(/*! borsh */ "./node_modules/near-api-js/node_modules/borsh/lib/index.js");
const LOGIN_WALLET_URL_SUFFIX = '/login/';
const MULTISIG_HAS_METHOD = 'add_request_and_confirm';
const LOCAL_STORAGE_KEY_SUFFIX = '_wallet_auth_key';
const PENDING_ACCESS_KEY_PREFIX = 'pending_key'; // browser storage key for a pending access key (i.e. key has been generated but we are not sure it was added yet)
/**
 * This class is used in conjunction with the {@link BrowserLocalStorageKeyStore}.
 * It redirects users to {@link https://docs.near.org/docs/tools/near-wallet | NEAR Wallet} for key management.
 *
 * @example {@link https://docs.near.org/docs/develop/front-end/naj-quick-reference#wallet}
 * @example
 * ```js
 * // create new WalletConnection instance
 * const wallet = new WalletConnection(near, 'my-app');
 *
 * // If not signed in redirect to the NEAR wallet to sign in
 * // keys will be stored in the BrowserLocalStorageKeyStore
 * if(!wallet.isSingnedIn()) return wallet.requestSignIn()
 * ```
 */
class WalletConnection {
    constructor(near, appKeyPrefix) {
        this._near = near;
        const authDataKey = appKeyPrefix + LOCAL_STORAGE_KEY_SUFFIX;
        const authData = JSON.parse(window.localStorage.getItem(authDataKey));
        this._networkId = near.config.networkId;
        this._walletBaseUrl = near.config.walletUrl;
        appKeyPrefix = appKeyPrefix || near.config.contractName || 'default';
        this._keyStore = near.connection.signer.keyStore;
        this._authData = authData || { allKeys: [] };
        this._authDataKey = authDataKey;
        if (!this.isSignedIn()) {
            this._completeSignInWithAccessKey();
        }
    }
    /**
     * Returns true, if this WalletAccount is authorized with the wallet.
     * @example
     * ```js
     * const wallet = new WalletConnection(near, 'my-app');
     * wallet.isSignedIn();
     * ```
     */
    isSignedIn() {
        return !!this._authData.accountId;
    }
    /**
     * Returns authorized Account ID.
     * @example
     * ```js
     * const wallet = new WalletConnection(near, 'my-app');
     * wallet.getAccountId();
     * ```
     */
    getAccountId() {
        return this._authData.accountId || '';
    }
    /**
     * Redirects current page to the wallet authentication page.
     * @param options An optional options object
     * @param options.contractId The NEAR account where the contract is deployed
     * @param options.successUrl URL to redirect upon success. Default: current url
     * @param options.failureUrl URL to redirect upon failure. Default: current url
     *
     * @example
     * ```js
     * const wallet = new WalletConnection(near, 'my-app');
     * // redirects to the NEAR Wallet
     * wallet.requestSignIn({ contractId: 'account-with-deploy-contract.near' });
     * ```
     */
    async requestSignIn(contractIdOrOptions = {}, title, successUrl, failureUrl) {
        let options;
        if (typeof contractIdOrOptions === 'string') {
            const deprecate = depd_1.default('requestSignIn(contractId, title)');
            deprecate('`title` ignored; use `requestSignIn({ contractId, methodNames, successUrl, failureUrl })` instead');
            options = { contractId: contractIdOrOptions, successUrl, failureUrl };
        }
        else {
            options = contractIdOrOptions;
        }
        const currentUrl = new URL(window.location.href);
        const newUrl = new URL(this._walletBaseUrl + LOGIN_WALLET_URL_SUFFIX);
        newUrl.searchParams.set('success_url', options.successUrl || currentUrl.href);
        newUrl.searchParams.set('failure_url', options.failureUrl || currentUrl.href);
        if (options.contractId) {
            /* Throws exception if contract account does not exist */
            const contractAccount = await this._near.account(options.contractId);
            await contractAccount.state();
            newUrl.searchParams.set('contract_id', options.contractId);
            const accessKey = utils_1.KeyPair.fromRandom('ed25519');
            newUrl.searchParams.set('public_key', accessKey.getPublicKey().toString());
            await this._keyStore.setKey(this._networkId, PENDING_ACCESS_KEY_PREFIX + accessKey.getPublicKey(), accessKey);
        }
        if (options.methodNames) {
            options.methodNames.forEach(methodName => {
                newUrl.searchParams.append('methodNames', methodName);
            });
        }
        window.location.assign(newUrl.toString());
    }
    async requestSignTransactions(...args) {
        if (Array.isArray(args[0])) {
            const deprecate = depd_1.default('WalletConnection.requestSignTransactions(transactions, callbackUrl, meta)');
            deprecate('use `WalletConnection.requestSignTransactions(RequestSignTransactionsOptions)` instead');
            return this._requestSignTransactions({
                transactions: args[0],
                callbackUrl: args[1],
                meta: args[2]
            });
        }
        return this._requestSignTransactions(args[0]);
    }
    async _requestSignTransactions({ transactions, meta, callbackUrl }) {
        const currentUrl = new URL(window.location.href);
        const newUrl = new URL('sign', this._walletBaseUrl);
        newUrl.searchParams.set('transactions', transactions
            .map(transaction => borsh_2.serialize(transaction_1.SCHEMA, transaction))
            .map(serialized => Buffer.from(serialized).toString('base64'))
            .join(','));
        newUrl.searchParams.set('callbackUrl', callbackUrl || currentUrl.href);
        if (meta)
            newUrl.searchParams.set('meta', meta);
        window.location.assign(newUrl.toString());
    }
    /**
     * @hidden
     * Complete sign in for a given account id and public key. To be invoked by the app when getting a callback from the wallet.
     */
    async _completeSignInWithAccessKey() {
        const currentUrl = new URL(window.location.href);
        const publicKey = currentUrl.searchParams.get('public_key') || '';
        const allKeys = (currentUrl.searchParams.get('all_keys') || '').split(',');
        const accountId = currentUrl.searchParams.get('account_id') || '';
        // TODO: Handle errors during login
        if (accountId) {
            this._authData = {
                accountId,
                allKeys
            };
            window.localStorage.setItem(this._authDataKey, JSON.stringify(this._authData));
            if (publicKey) {
                await this._moveKeyFromTempToPermanent(accountId, publicKey);
            }
        }
        currentUrl.searchParams.delete('public_key');
        currentUrl.searchParams.delete('all_keys');
        currentUrl.searchParams.delete('account_id');
        currentUrl.searchParams.delete('meta');
        currentUrl.searchParams.delete('transactionHashes');
        window.history.replaceState({}, document.title, currentUrl.toString());
    }
    /**
     * @hidden
     * @param accountId The NEAR account owning the given public key
     * @param publicKey The public key being set to the key store
     */
    async _moveKeyFromTempToPermanent(accountId, publicKey) {
        const keyPair = await this._keyStore.getKey(this._networkId, PENDING_ACCESS_KEY_PREFIX + publicKey);
        await this._keyStore.setKey(this._networkId, accountId, keyPair);
        await this._keyStore.removeKey(this._networkId, PENDING_ACCESS_KEY_PREFIX + publicKey);
    }
    /**
     * Sign out from the current account
     * @example
     * walletAccount.signOut();
     */
    signOut() {
        this._authData = {};
        window.localStorage.removeItem(this._authDataKey);
    }
    /**
     * Returns the current connected wallet account
     */
    account() {
        if (!this._connectedAccount) {
            this._connectedAccount = new ConnectedWalletAccount(this, this._near.connection, this._authData.accountId);
        }
        return this._connectedAccount;
    }
}
exports.WalletConnection = WalletConnection;
exports.WalletAccount = WalletConnection;
/**
 * {@link Account} implementation which redirects to wallet using {@link WalletConnection} when no local key is available.
 */
class ConnectedWalletAccount extends account_1.Account {
    constructor(walletConnection, connection, accountId) {
        super(connection, accountId);
        this.walletConnection = walletConnection;
    }
    // Overriding Account methods
    /**
     * Sign a transaction by redirecting to the NEAR Wallet
     * @see {@link WalletConnection.requestSignTransactions}
     */
    signAndSendTransaction(...args) {
        if (typeof args[0] === 'string') {
            return this._signAndSendTransaction({ receiverId: args[0], actions: args[1] });
        }
        return this._signAndSendTransaction(args[0]);
    }
    async _signAndSendTransaction({ receiverId, actions, walletMeta, walletCallbackUrl = window.location.href }) {
        const localKey = await this.connection.signer.getPublicKey(this.accountId, this.connection.networkId);
        let accessKey = await this.accessKeyForTransaction(receiverId, actions, localKey);
        if (!accessKey) {
            throw new Error(`Cannot find matching key for transaction sent to ${receiverId}`);
        }
        if (localKey && localKey.toString() === accessKey.public_key) {
            try {
                return await super.signAndSendTransaction({ receiverId, actions });
            }
            catch (e) {
                if (e.type === 'NotEnoughAllowance') {
                    accessKey = await this.accessKeyForTransaction(receiverId, actions);
                }
                else {
                    throw e;
                }
            }
        }
        const block = await this.connection.provider.block({ finality: 'final' });
        const blockHash = borsh_1.baseDecode(block.header.hash);
        const publicKey = utils_1.PublicKey.from(accessKey.public_key);
        // TODO: Cache & listen for nonce updates for given access key
        const nonce = accessKey.access_key.nonce + 1;
        const transaction = transaction_1.createTransaction(this.accountId, publicKey, receiverId, nonce, actions, blockHash);
        await this.walletConnection.requestSignTransactions({
            transactions: [transaction],
            meta: walletMeta,
            callbackUrl: walletCallbackUrl
        });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Failed to redirect to sign transaction'));
            }, 1000);
        });
        // TODO: Aggregate multiple transaction request with "debounce".
        // TODO: Introduce TrasactionQueue which also can be used to watch for status?
    }
    /**
     * Check if given access key allows the function call or method attempted in transaction
     * @param accessKey Array of {access_key: AccessKey, public_key: PublicKey} items
     * @param receiverId The NEAR account attempting to have access
     * @param actions The action(s) needed to be checked for access
     */
    async accessKeyMatchesTransaction(accessKey, receiverId, actions) {
        const { access_key: { permission } } = accessKey;
        if (permission === 'FullAccess') {
            return true;
        }
        if (permission.FunctionCall) {
            const { receiver_id: allowedReceiverId, method_names: allowedMethods } = permission.FunctionCall;
            /********************************
            Accept multisig access keys and let wallets attempt to signAndSendTransaction
            If an access key has itself as receiverId and method permission add_request_and_confirm, then it is being used in a wallet with multisig contract: https://github.com/near/core-contracts/blob/671c05f09abecabe7a7e58efe942550a35fc3292/multisig/src/lib.rs#L149-L153
            ********************************/
            if (allowedReceiverId === this.accountId && allowedMethods.includes(MULTISIG_HAS_METHOD)) {
                return true;
            }
            if (allowedReceiverId === receiverId) {
                if (actions.length !== 1) {
                    return false;
                }
                const [{ functionCall }] = actions;
                return functionCall &&
                    (!functionCall.deposit || functionCall.deposit.toString() === '0') && // TODO: Should support charging amount smaller than allowance?
                    (allowedMethods.length === 0 || allowedMethods.includes(functionCall.methodName));
                // TODO: Handle cases when allowance doesn't have enough to pay for gas
            }
        }
        // TODO: Support other permissions than FunctionCall
        return false;
    }
    /**
     * Helper function returning the access key (if it exists) to the receiver that grants the designated permission
     * @param receiverId The NEAR account seeking the access key for a transaction
     * @param actions The action(s) sought to gain access to
     * @param localKey A local public key provided to check for access
     * @returns Promise<any>
     */
    async accessKeyForTransaction(receiverId, actions, localKey) {
        const accessKeys = await this.getAccessKeys();
        if (localKey) {
            const accessKey = accessKeys.find(key => key.public_key.toString() === localKey.toString());
            if (accessKey && await this.accessKeyMatchesTransaction(accessKey, receiverId, actions)) {
                return accessKey;
            }
        }
        const walletKeys = this.walletConnection._authData.allKeys;
        for (const accessKey of accessKeys) {
            if (walletKeys.indexOf(accessKey.public_key) !== -1 && await this.accessKeyMatchesTransaction(accessKey, receiverId, actions)) {
                return accessKey;
            }
        }
        return null;
    }
}
exports.ConnectedWalletAccount = ConnectedWalletAccount;


/***/ }),

/***/ "./node_modules/near-api-js/node_modules/borsh/lib/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/near-api-js/node_modules/borsh/lib/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deserializeUnchecked = exports.deserialize = exports.serialize = exports.BinaryReader = exports.BinaryWriter = exports.BorshError = exports.baseDecode = exports.baseEncode = void 0;
const bn_js_1 = __importDefault(__webpack_require__(/*! bn.js */ "./node_modules/bn.js/lib/bn.js"));
const bs58_1 = __importDefault(__webpack_require__(/*! bs58 */ "./node_modules/bs58/index.js"));
// TODO: Make sure this polyfill not included when not required
const encoding = __importStar(__webpack_require__(/*! text-encoding-utf-8 */ "./node_modules/text-encoding-utf-8/lib/encoding.lib.js"));
const TextDecoder = (typeof __webpack_require__.g.TextDecoder !== 'function') ? encoding.TextDecoder : __webpack_require__.g.TextDecoder;
const textDecoder = new TextDecoder('utf-8', { fatal: true });
function baseEncode(value) {
    if (typeof (value) === 'string') {
        value = Buffer.from(value, 'utf8');
    }
    return bs58_1.default.encode(Buffer.from(value));
}
exports.baseEncode = baseEncode;
function baseDecode(value) {
    return Buffer.from(bs58_1.default.decode(value));
}
exports.baseDecode = baseDecode;
const INITIAL_LENGTH = 1024;
class BorshError extends Error {
    constructor(message) {
        super(message);
        this.fieldPath = [];
        this.originalMessage = message;
    }
    addToFieldPath(fieldName) {
        this.fieldPath.splice(0, 0, fieldName);
        // NOTE: Modifying message directly as jest doesn't use .toString()
        this.message = this.originalMessage + ': ' + this.fieldPath.join('.');
    }
}
exports.BorshError = BorshError;
/// Binary encoder.
class BinaryWriter {
    constructor() {
        this.buf = Buffer.alloc(INITIAL_LENGTH);
        this.length = 0;
    }
    maybeResize() {
        if (this.buf.length < 16 + this.length) {
            this.buf = Buffer.concat([this.buf, Buffer.alloc(INITIAL_LENGTH)]);
        }
    }
    writeU8(value) {
        this.maybeResize();
        this.buf.writeUInt8(value, this.length);
        this.length += 1;
    }
    writeU16(value) {
        this.maybeResize();
        this.buf.writeUInt16LE(value, this.length);
        this.length += 2;
    }
    writeU32(value) {
        this.maybeResize();
        this.buf.writeUInt32LE(value, this.length);
        this.length += 4;
    }
    writeU64(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray('le', 8)));
    }
    writeU128(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray('le', 16)));
    }
    writeU256(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray('le', 32)));
    }
    writeU512(value) {
        this.maybeResize();
        this.writeBuffer(Buffer.from(new bn_js_1.default(value).toArray('le', 64)));
    }
    writeBuffer(buffer) {
        // Buffer.from is needed as this.buf.subarray can return plain Uint8Array in browser
        this.buf = Buffer.concat([Buffer.from(this.buf.subarray(0, this.length)), buffer, Buffer.alloc(INITIAL_LENGTH)]);
        this.length += buffer.length;
    }
    writeString(str) {
        this.maybeResize();
        const b = Buffer.from(str, 'utf8');
        this.writeU32(b.length);
        this.writeBuffer(b);
    }
    writeFixedArray(array) {
        this.writeBuffer(Buffer.from(array));
    }
    writeArray(array, fn) {
        this.maybeResize();
        this.writeU32(array.length);
        for (const elem of array) {
            this.maybeResize();
            fn(elem);
        }
    }
    toArray() {
        return this.buf.subarray(0, this.length);
    }
}
exports.BinaryWriter = BinaryWriter;
function handlingRangeError(target, propertyKey, propertyDescriptor) {
    const originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = function (...args) {
        try {
            return originalMethod.apply(this, args);
        }
        catch (e) {
            if (e instanceof RangeError) {
                const code = e.code;
                if (['ERR_BUFFER_OUT_OF_BOUNDS', 'ERR_OUT_OF_RANGE'].indexOf(code) >= 0) {
                    throw new BorshError('Reached the end of buffer when deserializing');
                }
            }
            throw e;
        }
    };
}
class BinaryReader {
    constructor(buf) {
        this.buf = buf;
        this.offset = 0;
    }
    readU8() {
        const value = this.buf.readUInt8(this.offset);
        this.offset += 1;
        return value;
    }
    readU16() {
        const value = this.buf.readUInt16LE(this.offset);
        this.offset += 2;
        return value;
    }
    readU32() {
        const value = this.buf.readUInt32LE(this.offset);
        this.offset += 4;
        return value;
    }
    readU64() {
        const buf = this.readBuffer(8);
        return new bn_js_1.default(buf, 'le');
    }
    readU128() {
        const buf = this.readBuffer(16);
        return new bn_js_1.default(buf, 'le');
    }
    readU256() {
        const buf = this.readBuffer(32);
        return new bn_js_1.default(buf, 'le');
    }
    readU512() {
        const buf = this.readBuffer(64);
        return new bn_js_1.default(buf, 'le');
    }
    readBuffer(len) {
        if ((this.offset + len) > this.buf.length) {
            throw new BorshError(`Expected buffer length ${len} isn't within bounds`);
        }
        const result = this.buf.slice(this.offset, this.offset + len);
        this.offset += len;
        return result;
    }
    readString() {
        const len = this.readU32();
        const buf = this.readBuffer(len);
        try {
            // NOTE: Using TextDecoder to fail on invalid UTF-8
            return textDecoder.decode(buf);
        }
        catch (e) {
            throw new BorshError(`Error decoding UTF-8 string: ${e}`);
        }
    }
    readFixedArray(len) {
        return new Uint8Array(this.readBuffer(len));
    }
    readArray(fn) {
        const len = this.readU32();
        const result = Array();
        for (let i = 0; i < len; ++i) {
            result.push(fn());
        }
        return result;
    }
}
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU8", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU16", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU32", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU64", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU128", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU256", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readU512", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readString", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readFixedArray", null);
__decorate([
    handlingRangeError
], BinaryReader.prototype, "readArray", null);
exports.BinaryReader = BinaryReader;
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function serializeField(schema, fieldName, value, fieldType, writer) {
    try {
        // TODO: Handle missing values properly (make sure they never result in just skipped write)
        if (typeof fieldType === 'string') {
            writer[`write${capitalizeFirstLetter(fieldType)}`](value);
        }
        else if (fieldType instanceof Array) {
            if (typeof fieldType[0] === 'number') {
                if (value.length !== fieldType[0]) {
                    throw new BorshError(`Expecting byte array of length ${fieldType[0]}, but got ${value.length} bytes`);
                }
                writer.writeFixedArray(value);
            }
            else if (fieldType.length === 2 && typeof fieldType[1] === 'number') {
                if (value.length !== fieldType[1]) {
                    throw new BorshError(`Expecting byte array of length ${fieldType[1]}, but got ${value.length} bytes`);
                }
                for (let i = 0; i < fieldType[1]; i++) {
                    serializeField(schema, null, value[i], fieldType[0], writer);
                }
            }
            else {
                writer.writeArray(value, (item) => { serializeField(schema, fieldName, item, fieldType[0], writer); });
            }
        }
        else if (fieldType.kind !== undefined) {
            switch (fieldType.kind) {
                case 'option': {
                    if (value === null || value === undefined) {
                        writer.writeU8(0);
                    }
                    else {
                        writer.writeU8(1);
                        serializeField(schema, fieldName, value, fieldType.type, writer);
                    }
                    break;
                }
                default: throw new BorshError(`FieldType ${fieldType} unrecognized`);
            }
        }
        else {
            serializeStruct(schema, value, writer);
        }
    }
    catch (error) {
        if (error instanceof BorshError) {
            error.addToFieldPath(fieldName);
        }
        throw error;
    }
}
function serializeStruct(schema, obj, writer) {
    if (typeof obj.borshSerialize === 'function') {
        obj.borshSerialize(writer);
        return;
    }
    const structSchema = schema.get(obj.constructor);
    if (!structSchema) {
        throw new BorshError(`Class ${obj.constructor.name} is missing in schema`);
    }
    if (structSchema.kind === 'struct') {
        structSchema.fields.map(([fieldName, fieldType]) => {
            serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
        });
    }
    else if (structSchema.kind === 'enum') {
        const name = obj[structSchema.field];
        for (let idx = 0; idx < structSchema.values.length; ++idx) {
            const [fieldName, fieldType] = structSchema.values[idx];
            if (fieldName === name) {
                writer.writeU8(idx);
                serializeField(schema, fieldName, obj[fieldName], fieldType, writer);
                break;
            }
        }
    }
    else {
        throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${obj.constructor.name}`);
    }
}
/// Serialize given object using schema of the form:
/// { class_name -> [ [field_name, field_type], .. ], .. }
function serialize(schema, obj, Writer = BinaryWriter) {
    const writer = new Writer();
    serializeStruct(schema, obj, writer);
    return writer.toArray();
}
exports.serialize = serialize;
function deserializeField(schema, fieldName, fieldType, reader) {
    try {
        if (typeof fieldType === 'string') {
            return reader[`read${capitalizeFirstLetter(fieldType)}`]();
        }
        if (fieldType instanceof Array) {
            if (typeof fieldType[0] === 'number') {
                return reader.readFixedArray(fieldType[0]);
            }
            else if (typeof fieldType[1] === 'number') {
                const arr = [];
                for (let i = 0; i < fieldType[1]; i++) {
                    arr.push(deserializeField(schema, null, fieldType[0], reader));
                }
                return arr;
            }
            else {
                return reader.readArray(() => deserializeField(schema, fieldName, fieldType[0], reader));
            }
        }
        if (fieldType.kind === 'option') {
            const option = reader.readU8();
            if (option) {
                return deserializeField(schema, fieldName, fieldType.type, reader);
            }
            return undefined;
        }
        return deserializeStruct(schema, fieldType, reader);
    }
    catch (error) {
        if (error instanceof BorshError) {
            error.addToFieldPath(fieldName);
        }
        throw error;
    }
}
function deserializeStruct(schema, classType, reader) {
    if (typeof classType.borshDeserialize === 'function') {
        return classType.borshDeserialize(reader);
    }
    const structSchema = schema.get(classType);
    if (!structSchema) {
        throw new BorshError(`Class ${classType.name} is missing in schema`);
    }
    if (structSchema.kind === 'struct') {
        const result = {};
        for (const [fieldName, fieldType] of schema.get(classType).fields) {
            result[fieldName] = deserializeField(schema, fieldName, fieldType, reader);
        }
        return new classType(result);
    }
    if (structSchema.kind === 'enum') {
        const idx = reader.readU8();
        if (idx >= structSchema.values.length) {
            throw new BorshError(`Enum index: ${idx} is out of range`);
        }
        const [fieldName, fieldType] = structSchema.values[idx];
        const fieldValue = deserializeField(schema, fieldName, fieldType, reader);
        return new classType({ [fieldName]: fieldValue });
    }
    throw new BorshError(`Unexpected schema kind: ${structSchema.kind} for ${classType.constructor.name}`);
}
/// Deserializes object from bytes using schema.
function deserialize(schema, classType, buffer, Reader = BinaryReader) {
    const reader = new Reader(buffer);
    const result = deserializeStruct(schema, classType, reader);
    if (reader.offset < buffer.length) {
        throw new BorshError(`Unexpected ${buffer.length - reader.offset} bytes after deserialized data`);
    }
    return result;
}
exports.deserialize = deserialize;
/// Deserializes object from bytes using schema, without checking the length read
function deserializeUnchecked(schema, classType, buffer, Reader = BinaryReader) {
    const reader = new Reader(buffer);
    return deserializeStruct(schema, classType, reader);
}
exports.deserializeUnchecked = deserializeUnchecked;


/***/ }),

/***/ "./node_modules/near-api-js/node_modules/depd/lib/browser/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/near-api-js/node_modules/depd/lib/browser/index.js ***!
  \*************************************************************************/
/***/ (function(module) {

"use strict";
/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = depd

/**
 * Create deprecate for namespace in caller.
 */

function depd (namespace) {
  if (!namespace) {
    throw new TypeError('argument namespace is required')
  }

  function deprecate (message) {
    // no-op in browser
  }

  deprecate._file = undefined
  deprecate._ignored = true
  deprecate._namespace = namespace
  deprecate._traced = false
  deprecate._warned = Object.create(null)

  deprecate.function = wrapfunction
  deprecate.property = wrapproperty

  return deprecate
}

/**
 * Return a wrapped function in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */

function wrapfunction (fn, message) {
  if (typeof fn !== 'function') {
    throw new TypeError('argument fn must be a function')
  }

  return fn
}

/**
 * Wrap property in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */

function wrapproperty (obj, prop, message) {
  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
    throw new TypeError('argument obj must be object')
  }

  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)

  if (!descriptor) {
    throw new TypeError('must call property on owner object')
  }

  if (!descriptor.configurable) {
    throw new TypeError('property must be configurable')
  }
}


/***/ }),

/***/ "./node_modules/o3/index.js":
/*!**********************************!*\
  !*** ./node_modules/o3/index.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! capability/es5 */ "./node_modules/capability/es5.js");

module.exports = __webpack_require__(/*! ./lib */ "./node_modules/o3/lib/index.js");

/***/ }),

/***/ "./node_modules/o3/lib/Class.js":
/*!**************************************!*\
  !*** ./node_modules/o3/lib/Class.js ***!
  \**************************************/
/***/ (function(module) {

var Class = function () {
    var options = Object.create({
        Source: Object,
        config: {},
        buildArgs: []
    });

    function checkOption(option) {
        var key = "config";
        if (option instanceof Function)
            key = "Source";
        else if (option instanceof Array)
            key = "buildArgs";
        else if (option instanceof Object)
            key = "config";
        else
            throw new Error("Invalid configuration option.");
        if (options.hasOwnProperty(key))
            throw new Error("Duplicated configuration option: " + key + ".");
        options[key] = option;
    }

    for (var index = 0, length = arguments.length; index < length; ++index)
        checkOption(arguments[index]);

    var Source = options.Source,
        config = options.config,
        buildArgs = options.buildArgs;

    return (Source.extend || Class.extend).call(Source, config, buildArgs);
};

Class.factory = function () {
    var Source = this;
    return function () {
        var instance = this;
        if (instance.build instanceof Function)
            instance.build.apply(instance, arguments);
        if (instance.init instanceof Function)
            instance.init.apply(instance, arguments);
    };
};

Class.extend = function (config, buildArgs) {
    var Source = this;
    if (!config)
        config = {};
    var Subject;
    if ((config.prototype instanceof Object) && config.prototype.constructor !== Object)
        Subject = config.prototype.constructor;
    else if (config.factory instanceof Function)
        Subject = config.factory.call(Source);
    Subject = (Source.clone || Class.clone).call(Source, Subject, buildArgs);
    (Subject.merge || Class.merge).call(Subject, config);
    return Subject;
};

Class.prototype.extend = function (config, buildArgs) {
    var subject = this;
    var instance = (subject.clone || Class.prototype.clone).apply(subject, buildArgs);
    (instance.merge || Class.prototype.merge).call(instance, config);
    return instance;
};

Class.clone = function (Subject, buildArgs) {
    var Source = this;
    if (!(Subject instanceof Function))
        Subject = (Source.factory || Class.factory).call(Source);
    Subject.prototype = (Source.prototype.clone || Class.prototype.clone).apply(Source.prototype, buildArgs || []);
    Subject.prototype.constructor = Subject;
    for (var staticProperty in Source)
        if (staticProperty !== "prototype")
            Subject[staticProperty] = Source[staticProperty];
    return Subject;
};

Class.prototype.clone = function () {
    var subject = this;
    var instance = Object.create(subject);
    if (instance.build instanceof Function)
        instance.build.apply(instance, arguments);
    return instance;
};

Class.merge = function (config) {
    var Subject = this;
    for (var staticProperty in config)
        if (staticProperty !== "prototype")
            Subject[staticProperty] = config[staticProperty];
    if (config.prototype instanceof Object)
        (Subject.prototype.merge || Class.prototype.merge).call(Subject.prototype, config.prototype);
    return Subject;
};

Class.prototype.merge = function (config) {
    var subject = this;
    for (var property in config)
        if (property !== "constructor")
            subject[property] = config[property];
    return subject;
};

Class.absorb = function (config) {
    var Subject = this;
    for (var staticProperty in config)
        if (staticProperty !== "prototype" && (Subject[staticProperty] === undefined || Subject[staticProperty] === Function.prototype[staticProperty]))
            Subject[staticProperty] = config[staticProperty];
    if (config.prototype instanceof Object)
        (Subject.prototype.absorb || Class.prototype.absorb).call(Subject.prototype, config.prototype);
    return Subject;
};

Class.prototype.absorb = function (config) {
    var subject = this;
    for (var property in config)
        if (property !== "constructor" && (subject[property] === undefined || subject[property] === Object.prototype[property]))
            subject[property] = config[property];
    return subject;
};

Class.getAncestor = function () {
    var Source = this;
    if (Source !== Source.prototype.constructor)
        return Source.prototype.constructor;
};

Class.newInstance = function () {
    var Subject = this;
    var instance = Object.create(this.prototype);
    Subject.apply(instance, arguments);
    return instance;
};

module.exports = Class;

/***/ }),

/***/ "./node_modules/o3/lib/abstractMethod.js":
/*!***********************************************!*\
  !*** ./node_modules/o3/lib/abstractMethod.js ***!
  \***********************************************/
/***/ (function(module) {

module.exports = function () {
    throw new Error("Not implemented.");
};

/***/ }),

/***/ "./node_modules/o3/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/o3/lib/index.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
    Class: __webpack_require__(/*! ./Class */ "./node_modules/o3/lib/Class.js"),
    abstractMethod: __webpack_require__(/*! ./abstractMethod */ "./node_modules/o3/lib/abstractMethod.js")
};

/***/ }),

/***/ "./node_modules/setprototypeof/index.js":
/*!**********************************************!*\
  !*** ./node_modules/setprototypeof/index.js ***!
  \**********************************************/
/***/ (function(module) {

"use strict";

/* eslint no-proto: 0 */
module.exports = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties)

function setProtoOf (obj, proto) {
  obj.__proto__ = proto
  return obj
}

function mixinProperties (obj, proto) {
  for (var prop in proto) {
    if (!obj.hasOwnProperty(prop)) {
      obj[prop] = proto[prop]
    }
  }
  return obj
}


/***/ }),

/***/ "./node_modules/statuses/index.js":
/*!****************************************!*\
  !*** ./node_modules/statuses/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var codes = __webpack_require__(/*! ./codes.json */ "./node_modules/statuses/codes.json")

/**
 * Module exports.
 * @public
 */

module.exports = status

// status code to message map
status.STATUS_CODES = codes

// array of status codes
status.codes = populateStatusesMap(status, codes)

// status codes for redirects
status.redirect = {
  300: true,
  301: true,
  302: true,
  303: true,
  305: true,
  307: true,
  308: true
}

// status codes for empty bodies
status.empty = {
  204: true,
  205: true,
  304: true
}

// status codes for when you should retry the request
status.retry = {
  502: true,
  503: true,
  504: true
}

/**
 * Populate the statuses map for given codes.
 * @private
 */

function populateStatusesMap (statuses, codes) {
  var arr = []

  Object.keys(codes).forEach(function forEachCode (code) {
    var message = codes[code]
    var status = Number(code)

    // Populate properties
    statuses[status] = message
    statuses[message] = status
    statuses[message.toLowerCase()] = status

    // Add to array
    arr.push(status)
  })

  return arr
}

/**
 * Get the status code.
 *
 * Given a number, this will throw if it is not a known status
 * code, otherwise the code will be returned. Given a string,
 * the string will be parsed for a number and return the code
 * if valid, otherwise will lookup the code assuming this is
 * the status message.
 *
 * @param {string|number} code
 * @returns {number}
 * @public
 */

function status (code) {
  if (typeof code === 'number') {
    if (!status[code]) throw new Error('invalid status code: ' + code)
    return code
  }

  if (typeof code !== 'string') {
    throw new TypeError('code must be a number or string')
  }

  // '403'
  var n = parseInt(code, 10)
  if (!isNaN(n)) {
    if (!status[n]) throw new Error('invalid status code: ' + n)
    return n
  }

  n = status[code.toLowerCase()]
  if (!n) throw new Error('invalid status message: "' + code + '"')
  return n
}


/***/ }),

/***/ "./node_modules/toidentifier/index.js":
/*!********************************************!*\
  !*** ./node_modules/toidentifier/index.js ***!
  \********************************************/
/***/ (function(module) {

/*!
 * toidentifier
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

module.exports = toIdentifier

/**
 * Trasform the given string into a JavaScript identifier
 *
 * @param {string} str
 * @returns {string}
 * @public
 */

function toIdentifier (str) {
  return str
    .split(' ')
    .map(function (token) {
      return token.slice(0, 1).toUpperCase() + token.slice(1)
    })
    .join('')
    .replace(/[^ _0-9a-z]/gi, '')
}


/***/ }),

/***/ "./node_modules/u3/index.js":
/*!**********************************!*\
  !*** ./node_modules/u3/index.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "./node_modules/u3/lib/index.js");

/***/ }),

/***/ "./node_modules/u3/lib/cache.js":
/*!**************************************!*\
  !*** ./node_modules/u3/lib/cache.js ***!
  \**************************************/
/***/ (function(module) {

var cache = function (fn) {
    var called = false,
        store;

    if (!(fn instanceof Function)) {
        called = true;
        store = fn;
        fn = null;
    }

    return function () {
        if (!called) {
            called = true;
            store = fn.apply(this, arguments);
            fn = null;
        }
        return store;
    };
};

module.exports = cache;

/***/ }),

/***/ "./node_modules/u3/lib/eachCombination.js":
/*!************************************************!*\
  !*** ./node_modules/u3/lib/eachCombination.js ***!
  \************************************************/
/***/ (function(module) {

module.exports = function eachCombination(alternativesByDimension, callback, combination) {
    if (!combination)
        combination = [];
    if (combination.length < alternativesByDimension.length) {
        var alternatives = alternativesByDimension[combination.length];
        for (var index in alternatives) {
            combination[combination.length] = alternatives[index];
            eachCombination(alternativesByDimension, callback, combination);
            --combination.length;
        }
    }
    else
        callback.apply(null, combination);
};

/***/ }),

/***/ "./node_modules/u3/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/u3/lib/index.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = {
    cache: __webpack_require__(/*! ./cache */ "./node_modules/u3/lib/cache.js"),
    eachCombination: __webpack_require__(/*! ./eachCombination */ "./node_modules/u3/lib/eachCombination.js")
};

/***/ }),

/***/ "./node_modules/near-api-js/lib/generated/rpc_error_schema.json":
/*!**********************************************************************!*\
  !*** ./node_modules/near-api-js/lib/generated/rpc_error_schema.json ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"schema":{"BadUTF16":{"name":"BadUTF16","subtypes":[],"props":{}},"BadUTF8":{"name":"BadUTF8","subtypes":[],"props":{}},"BalanceExceeded":{"name":"BalanceExceeded","subtypes":[],"props":{}},"BreakpointTrap":{"name":"BreakpointTrap","subtypes":[],"props":{}},"CacheError":{"name":"CacheError","subtypes":["ReadError","WriteError","DeserializationError","SerializationError"],"props":{}},"CallIndirectOOB":{"name":"CallIndirectOOB","subtypes":[],"props":{}},"CannotAppendActionToJointPromise":{"name":"CannotAppendActionToJointPromise","subtypes":[],"props":{}},"CannotReturnJointPromise":{"name":"CannotReturnJointPromise","subtypes":[],"props":{}},"CodeDoesNotExist":{"name":"CodeDoesNotExist","subtypes":[],"props":{"account_id":""}},"CompilationError":{"name":"CompilationError","subtypes":["CodeDoesNotExist","PrepareError","WasmerCompileError"],"props":{}},"ContractSizeExceeded":{"name":"ContractSizeExceeded","subtypes":[],"props":{"limit":"","size":""}},"Deprecated":{"name":"Deprecated","subtypes":[],"props":{"method_name":""}},"Deserialization":{"name":"Deserialization","subtypes":[],"props":{}},"DeserializationError":{"name":"DeserializationError","subtypes":[],"props":{}},"EmptyMethodName":{"name":"EmptyMethodName","subtypes":[],"props":{}},"FunctionCallError":{"name":"FunctionCallError","subtypes":["CompilationError","LinkError","MethodResolveError","WasmTrap","WasmUnknownError","HostError","EvmError"],"props":{}},"GasExceeded":{"name":"GasExceeded","subtypes":[],"props":{}},"GasInstrumentation":{"name":"GasInstrumentation","subtypes":[],"props":{}},"GasLimitExceeded":{"name":"GasLimitExceeded","subtypes":[],"props":{}},"GenericTrap":{"name":"GenericTrap","subtypes":[],"props":{}},"GuestPanic":{"name":"GuestPanic","subtypes":[],"props":{"panic_msg":""}},"HostError":{"name":"HostError","subtypes":["BadUTF16","BadUTF8","GasExceeded","GasLimitExceeded","BalanceExceeded","EmptyMethodName","GuestPanic","IntegerOverflow","InvalidPromiseIndex","CannotAppendActionToJointPromise","CannotReturnJointPromise","InvalidPromiseResultIndex","InvalidRegisterId","IteratorWasInvalidated","MemoryAccessViolation","InvalidReceiptIndex","InvalidIteratorIndex","InvalidAccountId","InvalidMethodName","InvalidPublicKey","ProhibitedInView","NumberOfLogsExceeded","KeyLengthExceeded","ValueLengthExceeded","TotalLogLengthExceeded","NumberPromisesExceeded","NumberInputDataDependenciesExceeded","ReturnedValueLengthExceeded","ContractSizeExceeded","Deprecated"],"props":{}},"IllegalArithmetic":{"name":"IllegalArithmetic","subtypes":[],"props":{}},"IncorrectCallIndirectSignature":{"name":"IncorrectCallIndirectSignature","subtypes":[],"props":{}},"Instantiate":{"name":"Instantiate","subtypes":[],"props":{}},"IntegerOverflow":{"name":"IntegerOverflow","subtypes":[],"props":{}},"InternalMemoryDeclared":{"name":"InternalMemoryDeclared","subtypes":[],"props":{}},"InvalidAccountId":{"name":"InvalidAccountId","subtypes":[],"props":{"account_id":""}},"InvalidIteratorIndex":{"name":"InvalidIteratorIndex","subtypes":[],"props":{"iterator_index":""}},"InvalidMethodName":{"name":"InvalidMethodName","subtypes":[],"props":{}},"InvalidPromiseIndex":{"name":"InvalidPromiseIndex","subtypes":[],"props":{"promise_idx":""}},"InvalidPromiseResultIndex":{"name":"InvalidPromiseResultIndex","subtypes":[],"props":{"result_idx":""}},"InvalidPublicKey":{"name":"InvalidPublicKey","subtypes":[],"props":{}},"InvalidReceiptIndex":{"name":"InvalidReceiptIndex","subtypes":[],"props":{"receipt_index":""}},"InvalidRegisterId":{"name":"InvalidRegisterId","subtypes":[],"props":{"register_id":""}},"IteratorWasInvalidated":{"name":"IteratorWasInvalidated","subtypes":[],"props":{"iterator_index":""}},"KeyLengthExceeded":{"name":"KeyLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"LinkError":{"name":"LinkError","subtypes":[],"props":{"msg":""}},"Memory":{"name":"Memory","subtypes":[],"props":{}},"MemoryAccessViolation":{"name":"MemoryAccessViolation","subtypes":[],"props":{}},"MemoryOutOfBounds":{"name":"MemoryOutOfBounds","subtypes":[],"props":{}},"MethodEmptyName":{"name":"MethodEmptyName","subtypes":[],"props":{}},"MethodInvalidSignature":{"name":"MethodInvalidSignature","subtypes":[],"props":{}},"MethodNotFound":{"name":"MethodNotFound","subtypes":[],"props":{}},"MethodResolveError":{"name":"MethodResolveError","subtypes":["MethodEmptyName","MethodUTF8Error","MethodNotFound","MethodInvalidSignature"],"props":{}},"MethodUTF8Error":{"name":"MethodUTF8Error","subtypes":[],"props":{}},"MisalignedAtomicAccess":{"name":"MisalignedAtomicAccess","subtypes":[],"props":{}},"NumberInputDataDependenciesExceeded":{"name":"NumberInputDataDependenciesExceeded","subtypes":[],"props":{"limit":"","number_of_input_data_dependencies":""}},"NumberOfLogsExceeded":{"name":"NumberOfLogsExceeded","subtypes":[],"props":{"limit":""}},"NumberPromisesExceeded":{"name":"NumberPromisesExceeded","subtypes":[],"props":{"limit":"","number_of_promises":""}},"PrepareError":{"name":"PrepareError","subtypes":["Serialization","Deserialization","InternalMemoryDeclared","GasInstrumentation","StackHeightInstrumentation","Instantiate","Memory"],"props":{}},"ProhibitedInView":{"name":"ProhibitedInView","subtypes":[],"props":{"method_name":""}},"ReadError":{"name":"ReadError","subtypes":[],"props":{}},"ReturnedValueLengthExceeded":{"name":"ReturnedValueLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"Serialization":{"name":"Serialization","subtypes":[],"props":{}},"SerializationError":{"name":"SerializationError","subtypes":[],"props":{"hash":""}},"StackHeightInstrumentation":{"name":"StackHeightInstrumentation","subtypes":[],"props":{}},"StackOverflow":{"name":"StackOverflow","subtypes":[],"props":{}},"TotalLogLengthExceeded":{"name":"TotalLogLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"Unreachable":{"name":"Unreachable","subtypes":[],"props":{}},"ValueLengthExceeded":{"name":"ValueLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"WasmTrap":{"name":"WasmTrap","subtypes":["Unreachable","IncorrectCallIndirectSignature","MemoryOutOfBounds","CallIndirectOOB","IllegalArithmetic","MisalignedAtomicAccess","BreakpointTrap","StackOverflow","GenericTrap"],"props":{}},"WasmUnknownError":{"name":"WasmUnknownError","subtypes":[],"props":{}},"WasmerCompileError":{"name":"WasmerCompileError","subtypes":[],"props":{"msg":""}},"WriteError":{"name":"WriteError","subtypes":[],"props":{}},"AccessKeyNotFound":{"name":"AccessKeyNotFound","subtypes":[],"props":{"account_id":"","public_key":""}},"AccountAlreadyExists":{"name":"AccountAlreadyExists","subtypes":[],"props":{"account_id":""}},"AccountDoesNotExist":{"name":"AccountDoesNotExist","subtypes":[],"props":{"account_id":""}},"ActionError":{"name":"ActionError","subtypes":["AccountAlreadyExists","AccountDoesNotExist","CreateAccountOnlyByRegistrar","CreateAccountNotAllowed","ActorNoPermission","DeleteKeyDoesNotExist","AddKeyAlreadyExists","DeleteAccountStaking","LackBalanceForState","TriesToUnstake","TriesToStake","InsufficientStake","FunctionCallError","NewReceiptValidationError","OnlyImplicitAccountCreationAllowed"],"props":{"index":""}},"ActionsValidationError":{"name":"ActionsValidationError","subtypes":["DeleteActionMustBeFinal","TotalPrepaidGasExceeded","TotalNumberOfActionsExceeded","AddKeyMethodNamesNumberOfBytesExceeded","AddKeyMethodNameLengthExceeded","IntegerOverflow","InvalidAccountId","ContractSizeExceeded","FunctionCallMethodNameLengthExceeded","FunctionCallArgumentsLengthExceeded","UnsuitableStakingKey","FunctionCallZeroAttachedGas"],"props":{}},"ActorNoPermission":{"name":"ActorNoPermission","subtypes":[],"props":{"account_id":"","actor_id":""}},"AddKeyAlreadyExists":{"name":"AddKeyAlreadyExists","subtypes":[],"props":{"account_id":"","public_key":""}},"AddKeyMethodNameLengthExceeded":{"name":"AddKeyMethodNameLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"AddKeyMethodNamesNumberOfBytesExceeded":{"name":"AddKeyMethodNamesNumberOfBytesExceeded","subtypes":[],"props":{"limit":"","total_number_of_bytes":""}},"BalanceMismatchError":{"name":"BalanceMismatchError","subtypes":[],"props":{"final_accounts_balance":"","final_postponed_receipts_balance":"","incoming_receipts_balance":"","incoming_validator_rewards":"","initial_accounts_balance":"","initial_postponed_receipts_balance":"","new_delayed_receipts_balance":"","other_burnt_amount":"","outgoing_receipts_balance":"","processed_delayed_receipts_balance":"","slashed_burnt_amount":"","tx_burnt_amount":""}},"CostOverflow":{"name":"CostOverflow","subtypes":[],"props":{}},"CreateAccountNotAllowed":{"name":"CreateAccountNotAllowed","subtypes":[],"props":{"account_id":"","predecessor_id":""}},"CreateAccountOnlyByRegistrar":{"name":"CreateAccountOnlyByRegistrar","subtypes":[],"props":{"account_id":"","predecessor_id":"","registrar_account_id":""}},"DeleteAccountStaking":{"name":"DeleteAccountStaking","subtypes":[],"props":{"account_id":""}},"DeleteActionMustBeFinal":{"name":"DeleteActionMustBeFinal","subtypes":[],"props":{}},"DeleteKeyDoesNotExist":{"name":"DeleteKeyDoesNotExist","subtypes":[],"props":{"account_id":"","public_key":""}},"DepositWithFunctionCall":{"name":"DepositWithFunctionCall","subtypes":[],"props":{}},"Expired":{"name":"Expired","subtypes":[],"props":{}},"FunctionCallArgumentsLengthExceeded":{"name":"FunctionCallArgumentsLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"FunctionCallMethodNameLengthExceeded":{"name":"FunctionCallMethodNameLengthExceeded","subtypes":[],"props":{"length":"","limit":""}},"FunctionCallZeroAttachedGas":{"name":"FunctionCallZeroAttachedGas","subtypes":[],"props":{}},"InsufficientStake":{"name":"InsufficientStake","subtypes":[],"props":{"account_id":"","minimum_stake":"","stake":""}},"InvalidAccessKeyError":{"name":"InvalidAccessKeyError","subtypes":["AccessKeyNotFound","ReceiverMismatch","MethodNameMismatch","RequiresFullAccess","NotEnoughAllowance","DepositWithFunctionCall"],"props":{}},"InvalidChain":{"name":"InvalidChain","subtypes":[],"props":{}},"InvalidDataReceiverId":{"name":"InvalidDataReceiverId","subtypes":[],"props":{"account_id":""}},"InvalidNonce":{"name":"InvalidNonce","subtypes":[],"props":{"ak_nonce":"","tx_nonce":""}},"InvalidPredecessorId":{"name":"InvalidPredecessorId","subtypes":[],"props":{"account_id":""}},"InvalidReceiverId":{"name":"InvalidReceiverId","subtypes":[],"props":{"account_id":""}},"InvalidSignature":{"name":"InvalidSignature","subtypes":[],"props":{}},"InvalidSignerId":{"name":"InvalidSignerId","subtypes":[],"props":{"account_id":""}},"InvalidTxError":{"name":"InvalidTxError","subtypes":["InvalidAccessKeyError","InvalidSignerId","SignerDoesNotExist","InvalidNonce","InvalidReceiverId","InvalidSignature","NotEnoughBalance","LackBalanceForState","CostOverflow","InvalidChain","Expired","ActionsValidation"],"props":{}},"LackBalanceForState":{"name":"LackBalanceForState","subtypes":[],"props":{"account_id":"","amount":""}},"MethodNameMismatch":{"name":"MethodNameMismatch","subtypes":[],"props":{"method_name":""}},"NotEnoughAllowance":{"name":"NotEnoughAllowance","subtypes":[],"props":{"account_id":"","allowance":"","cost":"","public_key":""}},"NotEnoughBalance":{"name":"NotEnoughBalance","subtypes":[],"props":{"balance":"","cost":"","signer_id":""}},"OnlyImplicitAccountCreationAllowed":{"name":"OnlyImplicitAccountCreationAllowed","subtypes":[],"props":{"account_id":""}},"ReceiptValidationError":{"name":"ReceiptValidationError","subtypes":["InvalidPredecessorId","InvalidReceiverId","InvalidSignerId","InvalidDataReceiverId","ReturnedValueLengthExceeded","NumberInputDataDependenciesExceeded","ActionsValidation"],"props":{}},"ReceiverMismatch":{"name":"ReceiverMismatch","subtypes":[],"props":{"ak_receiver":"","tx_receiver":""}},"RequiresFullAccess":{"name":"RequiresFullAccess","subtypes":[],"props":{}},"SignerDoesNotExist":{"name":"SignerDoesNotExist","subtypes":[],"props":{"signer_id":""}},"TotalNumberOfActionsExceeded":{"name":"TotalNumberOfActionsExceeded","subtypes":[],"props":{"limit":"","total_number_of_actions":""}},"TotalPrepaidGasExceeded":{"name":"TotalPrepaidGasExceeded","subtypes":[],"props":{"limit":"","total_prepaid_gas":""}},"TriesToStake":{"name":"TriesToStake","subtypes":[],"props":{"account_id":"","balance":"","locked":"","stake":""}},"TriesToUnstake":{"name":"TriesToUnstake","subtypes":[],"props":{"account_id":""}},"TxExecutionError":{"name":"TxExecutionError","subtypes":["ActionError","InvalidTxError"],"props":{}},"UnsuitableStakingKey":{"name":"UnsuitableStakingKey","subtypes":[],"props":{"public_key":""}},"Closed":{"name":"Closed","subtypes":[],"props":{}},"InternalError":{"name":"InternalError","subtypes":[],"props":{}},"ServerError":{"name":"ServerError","subtypes":["TxExecutionError","Timeout","Closed","InternalError"],"props":{}},"Timeout":{"name":"Timeout","subtypes":[],"props":{}}}}');

/***/ }),

/***/ "./node_modules/near-api-js/lib/res/error_messages.json":
/*!**************************************************************!*\
  !*** ./node_modules/near-api-js/lib/res/error_messages.json ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"GasLimitExceeded":"Exceeded the maximum amount of gas allowed to burn per contract","MethodEmptyName":"Method name is empty","WasmerCompileError":"Wasmer compilation error: {{msg}}","GuestPanic":"Smart contract panicked: {{panic_msg}}","Memory":"Error creating Wasm memory","GasExceeded":"Exceeded the prepaid gas","MethodUTF8Error":"Method name is not valid UTF8 string","BadUTF16":"String encoding is bad UTF-16 sequence","WasmTrap":"WebAssembly trap: {{msg}}","GasInstrumentation":"Gas instrumentation failed or contract has denied instructions.","InvalidPromiseIndex":"{{promise_idx}} does not correspond to existing promises","InvalidPromiseResultIndex":"Accessed invalid promise result index: {{result_idx}}","Deserialization":"Error happened while deserializing the module","MethodNotFound":"Contract method is not found","InvalidRegisterId":"Accessed invalid register id: {{register_id}}","InvalidReceiptIndex":"VM Logic returned an invalid receipt index: {{receipt_index}}","EmptyMethodName":"Method name is empty in contract call","CannotReturnJointPromise":"Returning joint promise is currently prohibited","StackHeightInstrumentation":"Stack instrumentation failed","CodeDoesNotExist":"Cannot find contract code for account {{account_id}}","MethodInvalidSignature":"Invalid method signature","IntegerOverflow":"Integer overflow happened during contract execution","MemoryAccessViolation":"MemoryAccessViolation","InvalidIteratorIndex":"Iterator index {{iterator_index}} does not exist","IteratorWasInvalidated":"Iterator {{iterator_index}} was invalidated after its creation by performing a mutable operation on trie","InvalidAccountId":"VM Logic returned an invalid account id","Serialization":"Error happened while serializing the module","CannotAppendActionToJointPromise":"Actions can only be appended to non-joint promise.","InternalMemoryDeclared":"Internal memory declaration has been found in the module","Instantiate":"Error happened during instantiation","ProhibitedInView":"{{method_name}} is not allowed in view calls","InvalidMethodName":"VM Logic returned an invalid method name","BadUTF8":"String encoding is bad UTF-8 sequence","BalanceExceeded":"Exceeded the account balance","LinkError":"Wasm contract link error: {{msg}}","InvalidPublicKey":"VM Logic provided an invalid public key","ActorNoPermission":"Actor {{actor_id}} doesn\'t have permission to account {{account_id}} to complete the action","LackBalanceForState":"The account {{account_id}} wouldn\'t have enough balance to cover storage, required to have {{amount}} yoctoNEAR more","ReceiverMismatch":"Wrong AccessKey used for transaction: transaction is sent to receiver_id={{tx_receiver}}, but is signed with function call access key that restricted to only use with receiver_id={{ak_receiver}}. Either change receiver_id in your transaction or switch to use a FullAccessKey.","CostOverflow":"Transaction gas or balance cost is too high","InvalidSignature":"Transaction is not signed with the given public key","AccessKeyNotFound":"Signer \\"{{account_id}}\\" doesn\'t have access key with the given public_key {{public_key}}","NotEnoughBalance":"Sender {{signer_id}} does not have enough balance {{#formatNear}}{{balance}}{{/formatNear}} for operation costing {{#formatNear}}{{cost}}{{/formatNear}}","NotEnoughAllowance":"Access Key {account_id}:{public_key} does not have enough balance {{#formatNear}}{{allowance}}{{/formatNear}} for transaction costing {{#formatNear}}{{cost}}{{/formatNear}}","Expired":"Transaction has expired","DeleteAccountStaking":"Account {{account_id}} is staking and can not be deleted","SignerDoesNotExist":"Signer {{signer_id}} does not exist","TriesToStake":"Account {{account_id}} tried to stake {{#formatNear}}{{stake}}{{/formatNear}}, but has staked {{#formatNear}}{{locked}}{{/formatNear}} and only has {{#formatNear}}{{balance}}{{/formatNear}}","AddKeyAlreadyExists":"The public key {{public_key}} is already used for an existing access key","InvalidSigner":"Invalid signer account ID {{signer_id}} according to requirements","CreateAccountNotAllowed":"The new account_id {{account_id}} can\'t be created by {{predecessor_id}}","RequiresFullAccess":"The transaction contains more then one action, but it was signed with an access key which allows transaction to apply only one specific action. To apply more then one actions TX must be signed with a full access key","TriesToUnstake":"Account {{account_id}} is not yet staked, but tried to unstake","InvalidNonce":"Transaction nonce {{tx_nonce}} must be larger than nonce of the used access key {{ak_nonce}}","AccountAlreadyExists":"Can\'t create a new account {{account_id}}, because it already exists","InvalidChain":"Transaction parent block hash doesn\'t belong to the current chain","AccountDoesNotExist":"Can\'t complete the action because account {{account_id}} doesn\'t exist","MethodNameMismatch":"Transaction method name {{method_name}} isn\'t allowed by the access key","DeleteAccountHasRent":"Account {{account_id}} can\'t be deleted. It has {{#formatNear}}{{balance}}{{/formatNear}}, which is enough to cover the rent","DeleteAccountHasEnoughBalance":"Account {{account_id}} can\'t be deleted. It has {{#formatNear}}{{balance}}{{/formatNear}}, which is enough to cover it\'s storage","InvalidReceiver":"Invalid receiver account ID {{receiver_id}} according to requirements","DeleteKeyDoesNotExist":"Account {{account_id}} tries to remove an access key that doesn\'t exist","Timeout":"Timeout exceeded","Closed":"Connection closed"}');

/***/ }),

/***/ "./node_modules/statuses/codes.json":
/*!******************************************!*\
  !*** ./node_modules/statuses/codes.json ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","306":"(Unused)","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Unordered Collection","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "deedf27646b67d4ccb6f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjVkYjM5YTVjYzAxMDkxODk3MTY4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTa0MsR0FBVCxHQUE0QjtBQUMvQixzQkFDSSxpREFBQyxtREFBRDtBQUNJLE9BQUcsRUFBQyxNQURSO0FBRUksVUFBTSxFQUFDLElBRlg7QUFHSSxpQkFBYSxFQUFDLElBSGxCO0FBSUksWUFBUSxFQUFFeEIsZ0RBSmQ7QUFLSSxXQUFPLEVBQUVlLHlDQUFJQTtBQUxqQixrQkFPSSxpREFBQyw0REFBRCxxQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUVJLGlEQUFDLDZEQUFEO0FBQVEsT0FBRyxFQUFDO0FBQVosSUFGSixlQUdJO0FBQU0sYUFBUyxFQUFDO0FBQWhCLGtCQUNJLGlEQUFDLHFEQUFELHFCQUNJLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNJLGlEQUFDLG9EQUFELE9BREosQ0FESixlQUlJLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNJLGlEQUFDLDREQUFELE9BREosQ0FKSixlQU9JLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNJLGlEQUFDLHdEQUFELE9BREosQ0FQSixlQVVJLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNJLGlEQUFDLGdFQUFELE9BREosQ0FWSixlQWNJLGlEQUFDLG9EQUFEO0FBQU8sUUFBSSxFQUFDO0FBQVosa0JBQ0ksaURBQUMsd0RBQUQsT0FESixDQWRKLGVBaUJJLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNJLGlEQUFDLGdGQUFELE9BREosQ0FqQkosZUFvQkksaURBQUMsb0RBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUM7QUFBbEIsa0JBQ0ksaURBQUMsbUVBQUQsT0FESixDQXBCSixlQXdCSSxpREFBQyxvREFBRDtBQUFPLFFBQUksRUFBQztBQUFaLGtCQUNJLGlEQUFDLDBEQUFELE9BREosQ0F4QkosZUEyQkksaURBQUMsb0RBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUVDLDZEQUF1QlU7QUFBMUMsa0JBQ0ksaURBQUMscURBQUQsT0FESixDQTNCSixlQThCSSxpREFBQyxvREFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBRVYsd0VBQWtDVTtBQUFyRCxrQkFDSSxpREFBQyxvRUFBRCxPQURKLENBOUJKLGVBaUNJLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFFViw2REFBdUJVO0FBQTFDLGtCQUNJLGlEQUFDLDBEQUFELE9BREosQ0FqQ0osZUFvQ0ksaURBQUMsb0RBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUVWLCtEQUF5QlU7QUFBNUMsa0JBQ0ksaURBQUMsb0RBQUQsT0FESixDQXBDSixlQXdDSSxpREFBQyxvREFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBRVYsOERBQXdCVTtBQUEzQyxrQkFDSSxpREFBQyxzREFBRCxPQURKLENBeENKLGVBMkNJLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFFViw4REFBd0JVO0FBQTNDLGtCQUNJLGlEQUFDLDJEQUFELE9BREosQ0EzQ0osZUErQ0ksaURBQUMsb0RBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxRQUFJLEVBQUVWLDZEQUF1QlU7QUFBMUMsa0JBQ0ksaURBQUMscURBQUQsT0FESixDQS9DSixlQWtESSxpREFBQyxvREFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBRVYsNkRBQXVCVTtBQUExQyxrQkFDSSxpREFBQywwREFBRCxPQURKLENBbERKLGVBc0RJLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFFViw0REFBc0JVO0FBQXpDLGtCQUNJLGlEQUFDLHNEQUFELE9BREosQ0F0REosZUF5REksaURBQUMsb0RBQUQ7QUFBTyxRQUFJLEVBQUVWLGtFQUE0QlU7QUFBekMsa0JBQ0ksaURBQUMsNkRBQUQsT0FESixDQXpESixlQTRESSxpREFBQyxvREFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBRVYsZ0VBQTBCVTtBQUE3QyxrQkFDSSxpREFBQyw0REFBRCxPQURKLENBNURKLENBREosQ0FISixlQXNFSSxpREFBQyw2REFBRDtBQUFRLE9BQUcsRUFBQztBQUFaLElBdEVKLENBREosZUF5RUk7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSxpREFBQyxxREFBRDtBQUFTLE9BQUcsRUFBQztBQUFiLElBREosZUFFSSxpREFBQywyRkFBRCxPQUZKLGVBR0ksaURBQUMsbUZBQUQsT0FISixDQXpFSixDQVBKLENBREo7QUEyRkFILEVBQUFBLHVEQUFBO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdElEO0FBRUE7QUFDQTtBQUVBaUIsTUFBTSxDQUFDQyxVQUFQLEdBQW9CRiw4Q0FBUyxDQUFDRyxhQUFBLElBQXdCLENBQXpCLENBQTdCO0FBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixhQUFaLEdBQ0E7O1NBQ2VLOztFQXVCZjs7OzsyTUF2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRXNCVCxnREFBQSxDQUFnQiwyRkFBYztBQUFFVyxjQUFBQSxJQUFJLEVBQUU7QUFBRUMsZ0JBQUFBLFFBQVEsRUFBRSxJQUFJWiw4RUFBSjtBQUFaO0FBQVIsYUFBZCxFQUEyRkcsVUFBM0YsQ0FBaEIsQ0FGdEI7O0FBQUE7QUFFRUQsWUFBQUEsTUFBTSxDQUFDYSxJQUZUO0FBSUU7QUFDQTtBQUNBYixZQUFBQSxNQUFNLENBQUNjLGFBQVAsR0FBdUIsSUFBSWhCLHNEQUFKLENBQTBCRSxNQUFNLENBQUNhLElBQWpDLENBQXZCLENBTkYsQ0FRRTs7QUFDQWIsWUFBQUEsTUFBTSxDQUFDZ0IsU0FBUCxHQUFtQmhCLE1BQU0sQ0FBQ2MsYUFBUCxDQUFxQkcsWUFBckIsRUFBbkIsQ0FURixDQVdFOztBQVhGO0FBQUEsbUJBWTBCakIsTUFBTSxDQUFDYSxJQUFQLENBQVlLLFlBQVosQ0FBeUJqQixVQUFVLENBQUNrQixZQUFwQyxFQUFrRDtBQUN4RTtBQUNBO0FBQ0FDLGNBQUFBLFdBQVcsRUFBRSxDQUFDLFdBQUQsQ0FIMkQ7QUFJeEU7QUFDQUMsY0FBQUEsYUFBYSxFQUFFLENBQUMsT0FBRCxDQUx5RDtBQU14RTtBQUNBQyxjQUFBQSxNQUFNLEVBQUV0QixNQUFNLENBQUNnQjtBQVB5RCxhQUFsRCxDQVoxQjs7QUFBQTtBQVlFaEIsWUFBQUEsTUFBTSxDQUFDdUIsUUFaVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztTQXdCZUM7O0VBU2Y7Ozs7cU1BVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQ0EsZ0JBQUksQ0FBQ3hCLE1BQU0sQ0FBQ2MsYUFBUCxDQUFxQlcsVUFBckIsRUFBTCxFQUF3QztBQUN0Q0MsY0FBQUEsYUFBYTtBQUNkLGFBRkQsTUFFTztBQUNMQyxjQUFBQSxZQUFZO0FBQ2I7O0FBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFVQSxTQUFTRCxhQUFULEdBQXlCO0FBQ3ZCO0FBQ0EsMEZBQVdFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBWCxFQUFxREMsT0FBckQsQ0FBNkQsVUFBQUMsRUFBRTtBQUFBLFdBQUlBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxPQUFULEdBQW1CLEVBQXZCO0FBQUEsR0FBL0QsRUFGdUIsQ0FHdkI7OztBQUNBTCxFQUFBQSxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLGdCQUFuQyxDQUFvRCxPQUFwRCxFQUE2RCxZQUFNO0FBQ2pFbkMsSUFBQUEsTUFBTSxDQUFDYyxhQUFQLENBQXFCc0IsYUFBckIsRUFDRTtBQUNBcEMsSUFBQUEsTUFBTSxDQUFDQyxVQUFQLENBQWtCa0IsWUFGcEIsRUFHRTtBQUNBLGFBSkYsQ0FLRTtBQUNBO0FBTkY7QUFRRCxHQVREO0FBVUQsRUFFRDs7O0FBQ0EsU0FBU1EsWUFBVCxHQUF3QjtBQUN0QjtBQUNBLDBGQUFXQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLFlBQTFCLENBQVgsRUFBb0RDLE9BQXBELENBQTRELFVBQUFDLEVBQUU7QUFBQSxXQUFJQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsT0FBVCxHQUFtQixFQUF2QjtBQUFBLEdBQTlELEVBRnNCLENBSXRCOzs7QUFDQUwsRUFBQUEsUUFBUSxDQUFDTSxjQUFULENBQXdCLFlBQXhCLEVBQXNDRyxTQUF0QyxHQUFrRHJDLE1BQU0sQ0FBQ2dCLFNBQXpELENBTHNCLENBT3RCOztBQUNBWSxFQUFBQSxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLGdCQUFsQyxDQUFtRCxPQUFuRCxFQUE0RCxZQUFNO0FBQ2hFO0FBQ0FuQyxJQUFBQSxNQUFNLENBQUN1QixRQUFQLENBQWdCZSxLQUFoQixHQUF3QkMsSUFBeEIsQ0FBNkJDLGVBQTdCO0FBQ0QsR0FIRCxFQVJzQixDQWF0Qjs7QUFDQVosRUFBQUEsUUFBUSxDQUFDTSxjQUFULENBQXdCLFVBQXhCLEVBQW9DQyxnQkFBcEMsQ0FBcUQsT0FBckQsRUFBOEQsVUFBQU0sQ0FBQyxFQUFJO0FBQ2pFQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQTVCLElBQUFBLGFBQWEsQ0FBQzZCLE9BQWQsR0FGaUUsQ0FHakU7O0FBQ0EzQyxJQUFBQSxNQUFNLENBQUM0QyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjdDLE1BQU0sQ0FBQzRDLFFBQVAsQ0FBZ0JFLE1BQWhCLEdBQXlCOUMsTUFBTSxDQUFDNEMsUUFBUCxDQUFnQkcsUUFBakU7QUFDRCxHQUxELEVBZHNCLENBcUJ0QjtBQUNBOztBQUNBQyxFQUFBQSxVQUFVLENBQUNSLGVBQUQsRUFBa0IsSUFBbEIsQ0FBVjtBQUNELEVBRUQ7OztBQUNBLFNBQVNBLGVBQVQsR0FBMkI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQWpCLEVBQUFBLFFBQVEsQ0FBQzBCLFNBQVQsR0FBcUJWLElBQXJCLENBQTBCLFVBQUNXLEdBQUQsRUFBUztBQUNqQyxRQUFNbkIsRUFBRSxHQUFHSCxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBWDtBQUNBSCxJQUFBQSxFQUFFLENBQUNNLFNBQUgsR0FBZWEsR0FBRyxJQUFJLFFBQXRCLENBRmlDLENBSWpDOztBQUNBLFFBQUlBLEdBQUosRUFBUztBQUNQbkIsTUFBQUEsRUFBRSxDQUFDb0IsSUFBSCxHQUFVLGdEQUFnREQsR0FBMUQ7QUFDRCxLQVBnQyxDQVNqQzs7O0FBQ0EsUUFBTUUsTUFBTSxHQUFHckIsRUFBRSxDQUFDc0IsVUFBbEI7QUFDQUQsSUFBQUEsTUFBTSxDQUFDRSxTQUFQLEdBQW1CRixNQUFNLENBQUNFLFNBQVAsQ0FBaUJULE9BQWpCLENBQXlCLEdBQXpCLEVBQThCLEdBQTlCLENBQW5CO0FBQ0QsR0FaRDtBQWFELEVBRUQ7OztBQUNBN0MsTUFBTSxDQUFDdUQsZUFBUCxHQUF5QmhELFlBQVksR0FDbENnQyxJQURzQixDQUNqQmYsTUFEaUIsRUFFdEJnQyxLQUZzQixDQUVoQm5ELE9BQU8sQ0FBQ29ELEtBRlEsQ0FBekI7Ozs7Ozs7Ozs7QUMzR0Esd0VBQWtCOzs7Ozs7Ozs7O0FDQWxCLG1CQUFPLENBQUMsdUVBQW1CO0FBQzNCLDJGQUFpQzs7Ozs7Ozs7Ozs7QUNEakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1QkEsaUJBQWlCLG1CQUFPLENBQUMsaURBQUc7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLE1BQU07QUFDTjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7O0FDbkVELHlCQUF5QixtQkFBTyxDQUFDLGlGQUFzQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUVBLCtGQUFpQzs7Ozs7Ozs7OztBQ0FqQyxtQkFBTyxDQUFDLHdEQUFnQjtBQUN4QjtBQUNBLGlCQUFpQixtQkFBTyxDQUFDLHNEQUFZO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxxREFBTTtBQUM3QjtBQUNBLGVBQWUsbUJBQU8sQ0FBQyx5RUFBZ0I7QUFDdkM7QUFDQSxlQUFlLG1CQUFPLENBQUMsdUVBQWU7QUFDdEM7QUFDQTs7Ozs7Ozs7OztBQ1pBLFlBQVksaUVBQW1CO0FBQy9CLHFCQUFxQiwwRUFBNEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7QUM3QkEsWUFBWSxpRUFBbUI7QUFDL0IsWUFBWSxtQkFBTyxDQUFDLGtFQUFTO0FBQzdCLFlBQVksaUVBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDhEQUE4RCxnQkFBZ0I7QUFDOUU7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7O0FDckNBLFlBQVksaUVBQW1CO0FBQy9CLHFCQUFxQiwwRUFBNEI7QUFDakQsc0JBQXNCLDJFQUE2QjtBQUNuRCxZQUFZLGlFQUFtQjtBQUMvQixpQkFBaUIsbUJBQU8sQ0FBQyxzREFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Q7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7O0FDcElBLHdCQUF3QixtQkFBTyxDQUFDLDBGQUFxQjtBQUNyRCx3QkFBd0IsbUJBQU8sQ0FBQywwRkFBcUI7QUFDckQsWUFBWSxpRUFBbUI7QUFDL0Isd0JBQXdCLG1CQUFPLENBQUMsb0ZBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaEJBLFlBQVksaUVBQW1CO0FBQy9CLHdCQUF3QixtQkFBTyxDQUFDLG1GQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqREEsd0JBQXdCLG1CQUFPLENBQUMsbUZBQXFCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsbUJBQU8sQ0FBQyxzREFBTTtBQUM5QixxQkFBcUIsbUJBQU8sQ0FBQyw4REFBZ0I7QUFDN0MsZUFBZSxtQkFBTyxDQUFDLGtEQUFVO0FBQ2pDLGVBQWUsbUJBQU8sQ0FBQyxzRkFBVTtBQUNqQyxtQkFBbUIsbUJBQU8sQ0FBQywwREFBYzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOzs7Ozs7Ozs7OztBQ3pRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQSxFQUFFLEtBQTREO0FBQzlELEVBQUUsQ0FDc0Q7QUFDeEQsQ0FBQyxzQkFBc0I7O0FBRXZCO0FBQ0EsZ0NBQWdDLFdBQVc7QUFDM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZixjQUFjO0FBQ2QsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QiwyQkFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsU0FBUztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiwyQkFBMkIsZ0JBQWdCLE1BQU07QUFDakQsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiwyQkFBMkI7O0FBRTNCO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELGlCQUFpQjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSx1Q0FBdUM7QUFDL0M7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLGVBQWU7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLGVBQWU7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxXQUFXLFVBQVUsU0FBUyxLQUFLLG9CQUFvQjtBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxlQUFlO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzdCQSxtRkFBaUM7Ozs7Ozs7Ozs7QUNBakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNiQTtBQUNBLFdBQVcsbUJBQU8sQ0FBQywrQ0FBUztBQUM1QixxQkFBcUIsbUJBQU8sQ0FBQyxtRUFBbUI7QUFDaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSEEscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL3NyYy9jb21wb25lbnRzL0FwcC50c3giLCJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL3NyYy9jb250cmFjdHMvY29udHJhY3QuanMiLCJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL25vZGVfbW9kdWxlcy9jYXBhYmlsaXR5L2VzNS5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL2NhcGFiaWxpdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL25vZGVfbW9kdWxlcy9jYXBhYmlsaXR5L2xpYi9DYXBhYmlsaXR5RGV0ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL25vZGVfbW9kdWxlcy9jYXBhYmlsaXR5L2xpYi9kZWZpbml0aW9ucy5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL2NhcGFiaWxpdHkvbGliL2luZGV4LmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvZGVwZC9saWIvYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL2Vycm9yLXBvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvZXJyb3ItcG9seWZpbGwvbGliL2luZGV4LmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvZXJyb3ItcG9seWZpbGwvbGliL25vbi12OC9GcmFtZS5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL2Vycm9yLXBvbHlmaWxsL2xpYi9ub24tdjgvRnJhbWVTdHJpbmdQYXJzZXIuanMiLCJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL25vZGVfbW9kdWxlcy9lcnJvci1wb2x5ZmlsbC9saWIvbm9uLXY4L0ZyYW1lU3RyaW5nU291cmNlLmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvZXJyb3ItcG9seWZpbGwvbGliL25vbi12OC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL2Vycm9yLXBvbHlmaWxsL2xpYi9wcmVwYXJlU3RhY2tUcmFjZS5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL2Vycm9yLXBvbHlmaWxsL2xpYi91bnN1cHBvcnRlZC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL2Vycm9yLXBvbHlmaWxsL2xpYi92OC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL2h0dHAtZXJyb3JzL2luZGV4LmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvaHR0cC1lcnJvcnMvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL25vZGVfbW9kdWxlcy9tdXN0YWNoZS9tdXN0YWNoZS5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL2xpYi9hY2NvdW50LmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbmVhci1hcGktanMvbGliL2FjY291bnRfY3JlYXRvci5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL2xpYi9hY2NvdW50X211bHRpc2lnLmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbmVhci1hcGktanMvbGliL2Jyb3dzZXItY29ubmVjdC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL2xpYi9icm93c2VyLWluZGV4LmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbmVhci1hcGktanMvbGliL2NvbW1vbi1pbmRleC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL2xpYi9jb25uZWN0aW9uLmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbmVhci1hcGktanMvbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL2xpYi9jb250cmFjdC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL2xpYi9rZXlfc3RvcmVzL2Jyb3dzZXItaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL25vZGVfbW9kdWxlcy9uZWFyLWFwaS1qcy9saWIva2V5X3N0b3Jlcy9icm93c2VyX2xvY2FsX3N0b3JhZ2Vfa2V5X3N0b3JlLmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbmVhci1hcGktanMvbGliL2tleV9zdG9yZXMvaW5fbWVtb3J5X2tleV9zdG9yZS5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL2xpYi9rZXlfc3RvcmVzL2tleXN0b3JlLmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbmVhci1hcGktanMvbGliL2tleV9zdG9yZXMvbWVyZ2Vfa2V5X3N0b3JlLmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbmVhci1hcGktanMvbGliL25lYXIuanMiLCJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL25vZGVfbW9kdWxlcy9uZWFyLWFwaS1qcy9saWIvcHJvdmlkZXJzL2luZGV4LmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbmVhci1hcGktanMvbGliL3Byb3ZpZGVycy9qc29uLXJwYy1wcm92aWRlci5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL2xpYi9wcm92aWRlcnMvcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL25vZGVfbW9kdWxlcy9uZWFyLWFwaS1qcy9saWIvc2lnbmVyLmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbmVhci1hcGktanMvbGliL3RyYW5zYWN0aW9uLmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbmVhci1hcGktanMvbGliL3V0aWxzL2VudW1zLmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbmVhci1hcGktanMvbGliL3V0aWxzL2Vycm9ycy5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL2xpYi91dGlscy9leHBvbmVudGlhbC1iYWNrb2ZmLmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbmVhci1hcGktanMvbGliL3V0aWxzL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL2xpYi91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL2xpYi91dGlscy9rZXlfcGFpci5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL2xpYi91dGlscy9ycGNfZXJyb3JzLmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbmVhci1hcGktanMvbGliL3V0aWxzL3NlcmlhbGl6ZS5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL2xpYi91dGlscy93ZWIuanMiLCJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL25vZGVfbW9kdWxlcy9uZWFyLWFwaS1qcy9saWIvdmFsaWRhdG9ycy5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL2xpYi93YWxsZXQtYWNjb3VudC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL25lYXItYXBpLWpzL25vZGVfbW9kdWxlcy9ib3JzaC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL25vZGVfbW9kdWxlcy9uZWFyLWFwaS1qcy9ub2RlX21vZHVsZXMvZGVwZC9saWIvYnJvd3Nlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL28zL2luZGV4LmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbzMvbGliL0NsYXNzLmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbzMvbGliL2Fic3RyYWN0TWV0aG9kLmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvbzMvbGliL2luZGV4LmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvc2V0cHJvdG90eXBlb2YvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL25vZGVfbW9kdWxlcy9zdGF0dXNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL3RvaWRlbnRpZmllci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL3UzL2luZGV4LmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvdTMvbGliL2NhY2hlLmpzIiwid2VicGFjazovL3BzeWdpZnQvLi9ub2RlX21vZHVsZXMvdTMvbGliL2VhY2hDb21iaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0Ly4vbm9kZV9tb2R1bGVzL3UzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEludGxQcm92aWRlciB9IGZyb20gJ3JlYWN0LWludGwnXG5pbXBvcnQge1xuICAgIFJlZGlyZWN0LFxuICAgIFJvdXRlLFxuICAgIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxuICAgIFN3aXRjaCxcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9Gb290ZXInXG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0aW5nTW9kYWwgfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL1dhbGxldENvbm5lY3RpbmdNb2RhbCdcbmltcG9ydCB7IFdhbGxldFVwZGF0ZU1vZGFsIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9XYWxsZXRVcGRhdGVNb2RhbCdcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyJ1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJ0AvbGFuZy9lbidcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tICdAL21vZHVsZXMvQWNjb3VudCdcbmltcG9ydCBCdWlsZGVyIGZyb20gJ0AvcGFnZXMvYnVpbGRlcidcbmltcG9ydCBDcmVhdGVUb2tlbiBmcm9tICdAL3BhZ2VzL2J1aWxkZXIvY3JlYXRlJ1xuaW1wb3J0IEN1c3RvbVRva2VuIGZyb20gJ0AvcGFnZXMvYnVpbGRlci90b2tlbidcbmltcG9ydCBQYWlycyBmcm9tICdAL3BhZ2VzL3BhaXJzJ1xuaW1wb3J0IFBhaXIgZnJvbSAnQC9wYWdlcy9wYWlycy9pdGVtJ1xuaW1wb3J0IEFkZExpcXVpZGl0eVBvb2wgZnJvbSAnQC9wYWdlcy9wb29sJ1xuaW1wb3J0IFN3YXAgZnJvbSAnQC9wYWdlcy9Td2FwUGFnZSdcbmltcG9ydCBFVkVSc3dhcCBmcm9tICdAL21vZHVsZXMvRVZFUnN3YXAnXG5pbXBvcnQgVG9rZW5zIGZyb20gJ0AvcGFnZXMvdG9rZW5zJ1xuaW1wb3J0IFRva2VuIGZyb20gJ0AvcGFnZXMvdG9rZW5zL2l0ZW0nXG5pbXBvcnQgUG9vbHMgZnJvbSAnQC9wYWdlcy9wb29scydcbmltcG9ydCBQb29sIGZyb20gJ0AvcGFnZXMvcG9vbHMvaXRlbSdcbmltcG9ydCBCdXJuTGlxdWlkaXR5IGZyb20gJ0AvcGFnZXMvcG9vbHMvYnVybi1saXF1aWRpdHknXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7IGFwcFJvdXRlcyB9IGZyb20gJ0Avcm91dGVzJ1xuaW1wb3J0IEhvbWUgZnJvbSAnQC9wYWdlcy9Ib21lJ1xuaW1wb3J0IENyZWF0ZUV2ZW50cyBmcm9tICdAL3BhZ2VzL0NyZWF0ZUV2ZW50cydcbmltcG9ydCBEb25hdGlvbiBmcm9tICdAL3BhZ2VzL2RvbmF0aW9uJ1xuaW1wb3J0IEF1Y3Rpb24gZnJvbSAnQC9wYWdlcy9kb25hdGlvbi9hdWN0aW9uJ1xuaW1wb3J0IFBzeW9wdGlvbiBmcm9tICdAL3BzeW9wdGlvbi9wYWdlcy9pbml0aWFsaXplLW1hcmtldC9pbml0J1xuaW1wb3J0IFBzeW9wdGlvbk1pbnQgZnJvbSAnQC9wc3lvcHRpb24vcGFnZXMvbWludC9taW50J1xuaW1wb3J0ICcuL0FwcC5zY3NzJ1xuaW1wb3J0ICogYXMgc2VydmljZVdvcmtlciBmcm9tIFwiLi9zZXJ2aWNlV29ya2VyXCI7XG5pbXBvcnQgJ0AvY29udHJhY3RzL2NvbnRyYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIEFwcCgpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEludGxQcm92aWRlclxuICAgICAgICAgICAga2V5PVwiaW50bFwiXG4gICAgICAgICAgICBsb2NhbGU9XCJlblwiXG4gICAgICAgICAgICBkZWZhdWx0TG9jYWxlPVwiZW5cIlxuICAgICAgICAgICAgbWVzc2FnZXM9e21lc3NhZ2VzfVxuICAgICAgICAgICAgb25FcnJvcj17bm9vcH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIGtleT1cImhlYWRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb21lIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9DcmVhdGVFdmVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZUV2ZW50cyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvZG9uYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERvbmF0aW9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD0nL2RvbmF0aW9uL2F1Y3Rpb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXVjdGlvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zd2FwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2FwIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9wc3lvcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBzeW9wdGlvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvcHN5b3B0aW9uLW1pbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBzeW9wdGlvbk1pbnQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvRVZFUnN3YXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVWRVJzd2FwIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YXBwUm91dGVzLnBvb2xMaXN0LnBhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9vbHMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXthcHBSb3V0ZXMucG9vbFJlbW92ZUxpcXVpZGl0eS5wYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1cm5MaXF1aWRpdHkgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXthcHBSb3V0ZXMucG9vbEl0ZW0ucGF0aH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb29sIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YXBwUm91dGVzLnBvb2xDcmVhdGUucGF0aH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRMaXF1aWRpdHlQb29sIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXthcHBSb3V0ZXMudG9rZW5MaXN0LnBhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9rZW5zIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YXBwUm91dGVzLnRva2VuSXRlbS5wYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRva2VuIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXthcHBSb3V0ZXMucGFpckxpc3QucGF0aH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWlycyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2FwcFJvdXRlcy5wYWlySXRlbS5wYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhaXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2FwcFJvdXRlcy5idWlsZGVyLnBhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnVpbGRlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2FwcFJvdXRlcy5idWlsZGVyQ3JlYXRlLnBhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlVG9rZW4gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXthcHBSb3V0ZXMuYnVpbGRlckl0ZW0ucGF0aH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21Ub2tlbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIga2V5PVwiZm9vdGVyXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxldHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEFjY291bnQga2V5PVwiYWNjb3VudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxXYWxsZXRDb25uZWN0aW5nTW9kYWwgLz5cbiAgICAgICAgICAgICAgICAgICAgPFdhbGxldFVwZGF0ZU1vZGFsIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JvdXRlcj5cbiAgICAgICAgPC9JbnRsUHJvdmlkZXI+XG4gICAgKVxuXG5cbiAgICBzZXJ2aWNlV29ya2VyLnVucmVnaXN0ZXIoKTtcblxufVxuIiwiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIkAvY29uZmlnXCJcclxuXHJcbndpbmRvdy5uZWFyQ29uZmlnID0gZ2V0Q29uZmlnKHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIik7XHJcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcclxuLy8gSW5pdGlhbGl6aW5nIGNvbnRyYWN0XHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRDb250cmFjdCgpIHtcclxuICAvLyBJbml0aWFsaXppbmcgY29ubmVjdGlvbiB0byB0aGUgTkVBUiBub2RlLlxyXG4gIHdpbmRvdy5uZWFyID0gYXdhaXQgbmVhckFQSS5jb25uZWN0KE9iamVjdC5hc3NpZ24oeyBkZXBzOiB7IGtleVN0b3JlOiBuZXcgbmVhckFQSS5rZXlTdG9yZXMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlKCkgfSB9LCBuZWFyQ29uZmlnKSk7XHJcblxyXG4gIC8vIEluaXRpYWxpemluZyBXYWxsZXQgYmFzZWQgQWNjb3VudC4gSXQgY2FuIHdvcmsgd2l0aCBORUFSIFRlc3ROZXQgd2FsbGV0IHRoYXRcclxuICAvLyBpcyBob3N0ZWQgYXQgaHR0cHM6Ly93YWxsZXQudGVzdG5ldC5uZWFyLm9yZ1xyXG4gIHdpbmRvdy53YWxsZXRBY2NvdW50ID0gbmV3IG5lYXJBUEkuV2FsbGV0QWNjb3VudCh3aW5kb3cubmVhcik7XHJcblxyXG4gIC8vIEdldHRpbmcgdGhlIEFjY291bnQgSUQuIElmIHVuYXV0aG9yaXplZCB5ZXQsIGl0J3MganVzdCBlbXB0eSBzdHJpbmcuXHJcbiAgd2luZG93LmFjY291bnRJZCA9IHdpbmRvdy53YWxsZXRBY2NvdW50LmdldEFjY291bnRJZCgpO1xyXG5cclxuICAvLyBJbml0aWFsaXppbmcgb3VyIGNvbnRyYWN0IEFQSXMgYnkgY29udHJhY3QgbmFtZSBhbmQgY29uZmlndXJhdGlvbi5cclxuICB3aW5kb3cuY29udHJhY3QgPSBhd2FpdCB3aW5kb3cubmVhci5sb2FkQ29udHJhY3QobmVhckNvbmZpZy5jb250cmFjdE5hbWUsIHtcclxuICAgIC8vIE5PVEU6IFRoaXMgY29uZmlndXJhdGlvbiBvbmx5IG5lZWRlZCB3aGlsZSBORUFSIGlzIHN0aWxsIGluIGRldmVsb3BtZW50XHJcbiAgICAvLyBWaWV3IG1ldGhvZHMgYXJlIHJlYWQgb25seS4gVGhleSBkb24ndCBtb2RpZnkgdGhlIHN0YXRlLCBidXQgdXN1YWxseSByZXR1cm4gc29tZSB2YWx1ZS5cclxuICAgIHZpZXdNZXRob2RzOiBbJ3dob1NhaWRIaSddLFxyXG4gICAgLy8gQ2hhbmdlIG1ldGhvZHMgY2FuIG1vZGlmeSB0aGUgc3RhdGUuIEJ1dCB5b3UgZG9uJ3QgcmVjZWl2ZSB0aGUgcmV0dXJuZWQgdmFsdWUgd2hlbiBjYWxsZWQuXHJcbiAgICBjaGFuZ2VNZXRob2RzOiBbJ3NheUhpJ10sXHJcbiAgICAvLyBTZW5kZXIgaXMgdGhlIGFjY291bnQgSUQgdG8gaW5pdGlhbGl6ZSB0cmFuc2FjdGlvbnMuXHJcbiAgICBzZW5kZXI6IHdpbmRvdy5hY2NvdW50SWQsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIC8vIFVzaW5nIGluaXRpYWxpemVkIGNvbnRyYWN0XHJcbmFzeW5jIGZ1bmN0aW9uIGRvV29yaygpIHtcclxuICAvLyBCYXNlZCBvbiB3aGV0aGVyIHlvdSd2ZSBhdXRob3JpemVkLCBjaGVja2luZyB3aGljaCBmbG93IHdlIHNob3VsZCBnby5cclxuICBpZiAoIXdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSkge1xyXG4gICAgc2lnbmVkT3V0RmxvdygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzaWduZWRJbkZsb3coKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRoYXQgaW5pdGlhbGl6ZXMgdGhlIHNpZ25JbiBidXR0b24gdXNpbmcgV2FsbGV0QWNjb3VudFxyXG5mdW5jdGlvbiBzaWduZWRPdXRGbG93KCkge1xyXG4gIC8vIERpc3BsYXlpbmcgdGhlIHNpZ25lZCBvdXQgZmxvdyBjb250YWluZXIuXHJcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lnbmVkLW91dCcpKS5mb3JFYWNoKGVsID0+IGVsLnN0eWxlLmRpc3BsYXkgPSAnJyk7XHJcbiAgLy8gQWRkaW5nIGFuIGV2ZW50IHRvIGEgc2luZy1pbiBidXR0b24uXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24taW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHdpbmRvdy53YWxsZXRBY2NvdW50LnJlcXVlc3RTaWduSW4oXHJcbiAgICAgIC8vIFRoZSBjb250cmFjdCBuYW1lIHRoYXQgd291bGQgYmUgYXV0aG9yaXplZCB0byBiZSBjYWxsZWQgYnkgdGhlIHVzZXIncyBhY2NvdW50LlxyXG4gICAgICB3aW5kb3cubmVhckNvbmZpZy5jb250cmFjdE5hbWUsXHJcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGFwcCBuYW1lLiBJdCBjYW4gYmUgYW55dGhpbmcuXHJcbiAgICAgICdQc3lHaWZ0JyxcclxuICAgICAgLy8gV2UgY2FuIGFsc28gcHJvdmlkZSBVUkxzIHRvIHJlZGlyZWN0IG9uIHN1Y2Nlc3MgYW5kIGZhaWx1cmUuXHJcbiAgICAgIC8vIFRoZSBjdXJyZW50IFVSTCBpcyB1c2VkIGJ5IGRlZmF1bHQuXHJcbiAgICApO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBNYWluIGZ1bmN0aW9uIGZvciB0aGUgc2lnbmVkLWluIGZsb3cgKGFscmVhZHkgYXV0aG9yaXplZCBieSB0aGUgd2FsbGV0KS5cclxuZnVuY3Rpb24gc2lnbmVkSW5GbG93KCkge1xyXG4gIC8vIERpc3BsYXlpbmcgdGhlIHNpZ25lZCBpbiBmbG93IGNvbnRhaW5lci5cclxuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWduZWQtaW4nKSkuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJycpO1xyXG5cclxuICAvLyBEaXNwbGF5aW5nIGN1cnJlbnQgYWNjb3VudCBuYW1lLlxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NvdW50LWlkJykuaW5uZXJUZXh0ID0gd2luZG93LmFjY291bnRJZDtcclxuXHJcbiAgLy8gQWRkaW5nIGFuIGV2ZW50IHRvIGEgc2F5LWhpIGJ1dHRvbi5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F5LWhpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBXZSBjYWxsIHNheSBIaSBhbmQgdGhlbiB1cGRhdGUgd2hvIHNhaWQgSGkgbGFzdC5cclxuICAgIHdpbmRvdy5jb250cmFjdC5zYXlIaSgpLnRoZW4odXBkYXRlV2hvU2FpZEhpKTtcclxuICB9KTtcclxuXHJcbiAgLy8gQWRkaW5nIGFuIGV2ZW50IHRvIGEgc2luZy1vdXQgYnV0dG9uLlxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLW91dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB3YWxsZXRBY2NvdW50LnNpZ25PdXQoKTtcclxuICAgIC8vIEZvcmNpbmcgcmVkaXJlY3QuXHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICB9KTtcclxuXHJcbiAgLy8gZmV0Y2ggd2hvIGxhc3Qgc2FpZCBoaSB3aXRob3V0IHJlcXVpcmluZyBidXR0b24gY2xpY2tcclxuICAvLyBidXQgd2FpdCBhIHNlY29uZCBzbyB0aGUgcXVlc3Rpb24gaXMgbGVnaWJsZVxyXG4gIHNldFRpbWVvdXQodXBkYXRlV2hvU2FpZEhpLCAxMDAwKTtcclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHdobyBzYWlkIGhpXHJcbmZ1bmN0aW9uIHVwZGF0ZVdob1NhaWRIaSgpIHtcclxuICAvLyBKYXZhU2NyaXB0IHRpcDpcclxuICAvLyBUaGlzIGlzIGFub3RoZXIgZXhhbXBsZSBvZiBob3cgdG8gdXNlIHByb21pc2VzLiBTaW5jZSB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBhc3luYyxcclxuICAvLyB3ZSBjYW4ndCBhd2FpdCBmb3IgYGNvbnRyYWN0Lndob1NhaWRIaSgpYCwgaW5zdGVhZCB3ZSBhdHRhY2hpbmcgYSBjYWxsYmFjayBmdW5jdGlvblxyXG4gIC8vIHVzaW4gYC50aGVuKClgLlxyXG4gIGNvbnRyYWN0Lndob1NhaWRIaSgpLnRoZW4oKHdobykgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2hvJyk7XHJcbiAgICBlbC5pbm5lclRleHQgPSB3aG8gfHwgJ05vIG9uZSc7XHJcblxyXG4gICAgLy8gb25seSBsaW5rIHRvIHByb2ZpbGUgaWYgdGhlcmUncyBhIHByb2ZpbGUgdG8gbGluayB0b1xyXG4gICAgaWYgKHdobykge1xyXG4gICAgICBlbC5ocmVmID0gJ2h0dHBzOi8vZXhwbG9yZXIudGVzdG5ldC5uZWFyLm9yZy9hY2NvdW50cy8nICsgd2hvO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoYW5nZSB0aGUgPyB0byBhICFcclxuICAgIGNvbnN0IHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gcGFyZW50LmlubmVySFRNTC5yZXBsYWNlKCc/JywgJyEnKTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gTG9hZHMgbmVhckFQSSBhbmQgdGhpcyBjb250cmFjdCBpbnRvIHdpbmRvdyBzY29wZS5cclxud2luZG93Lm5lYXJJbml0UHJvbWlzZSA9IGluaXRDb250cmFjdCgpXHJcbiAgLnRoZW4oZG9Xb3JrKVxyXG4gIC5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuIiwicmVxdWlyZShcIi5cIikuY2hlY2soXCJlczVcIik7IiwicmVxdWlyZShcIi4vbGliL2RlZmluaXRpb25zXCIpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2xpYlwiKTtcclxuIiwidmFyIENhcGFiaWxpdHlEZXRlY3RvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudGVzdHMgPSB7fTtcclxuICAgIHRoaXMuY2FjaGUgPSB7fTtcclxufTtcclxuQ2FwYWJpbGl0eURldGVjdG9yLnByb3RvdHlwZSA9IHtcclxuICAgIGNvbnN0cnVjdG9yOiBDYXBhYmlsaXR5RGV0ZWN0b3IsXHJcbiAgICBkZWZpbmU6IGZ1bmN0aW9uIChuYW1lLCB0ZXN0KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAobmFtZSkgIT0gXCJzdHJpbmdcIiB8fCAhKHRlc3QgaW5zdGFuY2VvZiBGdW5jdGlvbikpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY2FwYWJpbGl0eSBkZWZpbml0aW9uLlwiKTtcclxuICAgICAgICBpZiAodGhpcy50ZXN0c1tuYW1lXSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGVkIGNhcGFiaWxpdHkgZGVmaW5pdGlvbiBieSBcIicgKyBuYW1lICsgJ1wiLicpO1xyXG4gICAgICAgIHRoaXMudGVzdHNbbmFtZV0gPSB0ZXN0O1xyXG4gICAgfSxcclxuICAgIGNoZWNrOiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIGlmICghdGhpcy50ZXN0KG5hbWUpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjdXJyZW50IGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgXCInICsgbmFtZSArICdcIiwgdGhlcmVmb3JlIHdlIGNhbm5vdCBjb250aW51ZS4nKTtcclxuICAgIH0sXHJcbiAgICB0ZXN0OiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNhY2hlW25hbWVdICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW25hbWVdO1xyXG4gICAgICAgIGlmICghdGhpcy50ZXN0c1tuYW1lXSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGNhcGFiaWxpdHkgd2l0aCBuYW1lIFwiJyArIG5hbWUgKyAnXCIuJyk7XHJcbiAgICAgICAgdmFyIHRlc3QgPSB0aGlzLnRlc3RzW25hbWVdO1xyXG4gICAgICAgIHRoaXMuY2FjaGVbbmFtZV0gPSAhIXRlc3QoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVtuYW1lXTtcclxuICAgIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ2FwYWJpbGl0eURldGVjdG9yOyIsInZhciBjYXBhYmlsaXR5ID0gcmVxdWlyZShcIi5cIiksXHJcbiAgICBkZWZpbmUgPSBjYXBhYmlsaXR5LmRlZmluZSxcclxuICAgIHRlc3QgPSBjYXBhYmlsaXR5LnRlc3Q7XHJcblxyXG5kZWZpbmUoXCJzdHJpY3QgbW9kZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gKHRoaXMgPT09IHVuZGVmaW5lZCk7XHJcbn0pO1xyXG5cclxuZGVmaW5lKFwiYXJndW1lbnRzLmNhbGxlZS5jYWxsZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcmd1bWVudHMuY2FsbGVlLmNhbGxlcjtcclxuICAgICAgICAgICAgfSkoKSA9PT0gYXJndW1lbnRzLmNhbGxlZTtcclxuICAgIH0gY2F0Y2ggKHN0cmljdE1vZGVJc0VuZm9yY2VkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmRlZmluZShcImVzNVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGVzdChcIkFycmF5LnByb3RvdHlwZS5mb3JFYWNoXCIpICYmXHJcbiAgICAgICAgdGVzdChcIkFycmF5LnByb3RvdHlwZS5tYXBcIikgJiZcclxuICAgICAgICB0ZXN0KFwiRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcIikgJiZcclxuICAgICAgICB0ZXN0KFwiT2JqZWN0LmNyZWF0ZVwiKSAmJlxyXG4gICAgICAgIHRlc3QoXCJPYmplY3QuZGVmaW5lUHJvcGVydGllc1wiKSAmJlxyXG4gICAgICAgIHRlc3QoXCJPYmplY3QuZGVmaW5lUHJvcGVydHlcIikgJiZcclxuICAgICAgICB0ZXN0KFwiT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVwiKTtcclxufSk7XHJcblxyXG5kZWZpbmUoXCJBcnJheS5wcm90b3R5cGUuZm9yRWFjaFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XHJcbn0pO1xyXG5cclxuZGVmaW5lKFwiQXJyYXkucHJvdG90eXBlLm1hcFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcDtcclxufSk7XHJcblxyXG5kZWZpbmUoXCJGdW5jdGlvbi5wcm90b3R5cGUuYmluZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ7XHJcbn0pO1xyXG5cclxuZGVmaW5lKFwiT2JqZWN0LmNyZWF0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZTtcclxufSk7XHJcblxyXG5kZWZpbmUoXCJPYmplY3QuZGVmaW5lUHJvcGVydGllc1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnRpZXM7XHJcbn0pO1xyXG5cclxuZGVmaW5lKFwiT2JqZWN0LmRlZmluZVByb3BlcnR5XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHk7XHJcbn0pO1xyXG5cclxuZGVmaW5lKFwiT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcclxufSk7XHJcblxyXG5kZWZpbmUoXCJFcnJvci5jYXB0dXJlU3RhY2tUcmFjZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2U7XHJcbn0pO1xyXG5cclxuZGVmaW5lKFwiRXJyb3IucHJvdG90eXBlLnN0YWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybiBlLnN0YWNrIHx8IGUuc3RhY2t0cmFjZTtcclxuICAgIH1cclxufSk7IiwidmFyIENhcGFiaWxpdHlEZXRlY3RvciA9IHJlcXVpcmUoXCIuL0NhcGFiaWxpdHlEZXRlY3RvclwiKTtcclxuXHJcbnZhciBkZXRlY3RvciA9IG5ldyBDYXBhYmlsaXR5RGV0ZWN0b3IoKTtcclxuXHJcbnZhciBjYXBhYmlsaXR5ID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgIHJldHVybiBkZXRlY3Rvci50ZXN0KG5hbWUpO1xyXG59O1xyXG5jYXBhYmlsaXR5LmRlZmluZSA9IGZ1bmN0aW9uIChuYW1lLCB0ZXN0KSB7XHJcbiAgICBkZXRlY3Rvci5kZWZpbmUobmFtZSwgdGVzdCk7XHJcbn07XHJcbmNhcGFiaWxpdHkuY2hlY2sgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgZGV0ZWN0b3IuY2hlY2sobmFtZSk7XHJcbn07XHJcbmNhcGFiaWxpdHkudGVzdCA9IGNhcGFiaWxpdHk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNhcGFiaWxpdHk7IiwiLyohXG4gKiBkZXBkXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBkZXBkXG5cbi8qKlxuICogQ3JlYXRlIGRlcHJlY2F0ZSBmb3IgbmFtZXNwYWNlIGluIGNhbGxlci5cbiAqL1xuXG5mdW5jdGlvbiBkZXBkIChuYW1lc3BhY2UpIHtcbiAgaWYgKCFuYW1lc3BhY2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBuYW1lc3BhY2UgaXMgcmVxdWlyZWQnKVxuICB9XG5cbiAgZnVuY3Rpb24gZGVwcmVjYXRlIChtZXNzYWdlKSB7XG4gICAgLy8gbm8tb3AgaW4gYnJvd3NlclxuICB9XG5cbiAgZGVwcmVjYXRlLl9maWxlID0gdW5kZWZpbmVkXG4gIGRlcHJlY2F0ZS5faWdub3JlZCA9IHRydWVcbiAgZGVwcmVjYXRlLl9uYW1lc3BhY2UgPSBuYW1lc3BhY2VcbiAgZGVwcmVjYXRlLl90cmFjZWQgPSBmYWxzZVxuICBkZXByZWNhdGUuX3dhcm5lZCA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICBkZXByZWNhdGUuZnVuY3Rpb24gPSB3cmFwZnVuY3Rpb25cbiAgZGVwcmVjYXRlLnByb3BlcnR5ID0gd3JhcHByb3BlcnR5XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZVxufVxuXG4vKipcbiAqIFJldHVybiBhIHdyYXBwZWQgZnVuY3Rpb24gaW4gYSBkZXByZWNhdGlvbiBtZXNzYWdlLlxuICpcbiAqIFRoaXMgaXMgYSBuby1vcCB2ZXJzaW9uIG9mIHRoZSB3cmFwcGVyLCB3aGljaCBkb2VzIG5vdGhpbmcgYnV0IGNhbGxcbiAqIHZhbGlkYXRpb24uXG4gKi9cblxuZnVuY3Rpb24gd3JhcGZ1bmN0aW9uIChmbiwgbWVzc2FnZSkge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgZm4gbXVzdCBiZSBhIGZ1bmN0aW9uJylcbiAgfVxuXG4gIHJldHVybiBmblxufVxuXG4vKipcbiAqIFdyYXAgcHJvcGVydHkgaW4gYSBkZXByZWNhdGlvbiBtZXNzYWdlLlxuICpcbiAqIFRoaXMgaXMgYSBuby1vcCB2ZXJzaW9uIG9mIHRoZSB3cmFwcGVyLCB3aGljaCBkb2VzIG5vdGhpbmcgYnV0IGNhbGxcbiAqIHZhbGlkYXRpb24uXG4gKi9cblxuZnVuY3Rpb24gd3JhcHByb3BlcnR5IChvYmosIHByb3AsIG1lc3NhZ2UpIHtcbiAgaWYgKCFvYmogfHwgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgb2JqIG11c3QgYmUgb2JqZWN0JylcbiAgfVxuXG4gIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApXG5cbiAgaWYgKCFkZXNjcmlwdG9yKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBjYWxsIHByb3BlcnR5IG9uIG93bmVyIG9iamVjdCcpXG4gIH1cblxuICBpZiAoIWRlc2NyaXB0b3IuY29uZmlndXJhYmxlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJvcGVydHkgbXVzdCBiZSBjb25maWd1cmFibGUnKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2xpYlwiKTsiLCJyZXF1aXJlKFwiY2FwYWJpbGl0eS9lczVcIik7XHJcblxyXG52YXIgY2FwYWJpbGl0eSA9IHJlcXVpcmUoXCJjYXBhYmlsaXR5XCIpO1xyXG5cclxudmFyIHBvbHlmaWxsO1xyXG5pZiAoY2FwYWJpbGl0eShcIkVycm9yLmNhcHR1cmVTdGFja1RyYWNlXCIpKVxyXG4gICAgcG9seWZpbGwgPSByZXF1aXJlKFwiLi92OFwiKTtcclxuZWxzZSBpZiAoY2FwYWJpbGl0eShcIkVycm9yLnByb3RvdHlwZS5zdGFja1wiKSlcclxuICAgIHBvbHlmaWxsID0gcmVxdWlyZShcIi4vbm9uLXY4L2luZGV4XCIpO1xyXG5lbHNlXHJcbiAgICBwb2x5ZmlsbCA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkXCIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwb2x5ZmlsbCgpOyIsInZhciBDbGFzcyA9IHJlcXVpcmUoXCJvM1wiKS5DbGFzcyxcclxuICAgIGFic3RyYWN0TWV0aG9kID0gcmVxdWlyZShcIm8zXCIpLmFic3RyYWN0TWV0aG9kO1xyXG5cclxudmFyIEZyYW1lID0gQ2xhc3MoT2JqZWN0LCB7XHJcbiAgICBwcm90b3R5cGU6IHtcclxuICAgICAgICBpbml0OiBDbGFzcy5wcm90b3R5cGUubWVyZ2UsXHJcbiAgICAgICAgZnJhbWVTdHJpbmc6IHVuZGVmaW5lZCxcclxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mcmFtZVN0cmluZztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uVmFsdWU6IHVuZGVmaW5lZCxcclxuICAgICAgICBnZXRUaGlzOiBhYnN0cmFjdE1ldGhvZCxcclxuICAgICAgICBnZXRUeXBlTmFtZTogYWJzdHJhY3RNZXRob2QsXHJcbiAgICAgICAgZ2V0RnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnVuY3Rpb25WYWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEZ1bmN0aW9uTmFtZTogYWJzdHJhY3RNZXRob2QsXHJcbiAgICAgICAgZ2V0TWV0aG9kTmFtZTogYWJzdHJhY3RNZXRob2QsXHJcbiAgICAgICAgZ2V0RmlsZU5hbWU6IGFic3RyYWN0TWV0aG9kLFxyXG4gICAgICAgIGdldExpbmVOdW1iZXI6IGFic3RyYWN0TWV0aG9kLFxyXG4gICAgICAgIGdldENvbHVtbk51bWJlcjogYWJzdHJhY3RNZXRob2QsXHJcbiAgICAgICAgZ2V0RXZhbE9yaWdpbjogYWJzdHJhY3RNZXRob2QsXHJcbiAgICAgICAgaXNUb3BMZXZlbDogYWJzdHJhY3RNZXRob2QsXHJcbiAgICAgICAgaXNFdmFsOiBhYnN0cmFjdE1ldGhvZCxcclxuICAgICAgICBpc05hdGl2ZTogYWJzdHJhY3RNZXRob2QsXHJcbiAgICAgICAgaXNDb25zdHJ1Y3RvcjogYWJzdHJhY3RNZXRob2RcclxuICAgIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEZyYW1lOyIsInZhciBDbGFzcyA9IHJlcXVpcmUoXCJvM1wiKS5DbGFzcyxcclxuICAgIEZyYW1lID0gcmVxdWlyZShcIi4vRnJhbWVcIiksXHJcbiAgICBjYWNoZSA9IHJlcXVpcmUoXCJ1M1wiKS5jYWNoZTtcclxuXHJcbnZhciBGcmFtZVN0cmluZ1BhcnNlciA9IENsYXNzKE9iamVjdCwge1xyXG4gICAgcHJvdG90eXBlOiB7XHJcbiAgICAgICAgc3RhY2tQYXJzZXI6IG51bGwsXHJcbiAgICAgICAgZnJhbWVQYXJzZXI6IG51bGwsXHJcbiAgICAgICAgbG9jYXRpb25QYXJzZXJzOiBudWxsLFxyXG4gICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgICAgICAgICBDbGFzcy5wcm90b3R5cGUubWVyZ2UuY2FsbCh0aGlzLCBvcHRpb25zKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEZyYW1lczogZnVuY3Rpb24gKGZyYW1lU3RyaW5ncywgZnVuY3Rpb25WYWx1ZXMpIHtcclxuICAgICAgICAgICAgdmFyIGZyYW1lcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDAsIGxlbmd0aCA9IGZyYW1lU3RyaW5ncy5sZW5ndGg7IGluZGV4IDwgbGVuZ3RoOyArK2luZGV4KVxyXG4gICAgICAgICAgICAgICAgZnJhbWVzW2luZGV4XSA9IHRoaXMuZ2V0RnJhbWUoZnJhbWVTdHJpbmdzW2luZGV4XSwgZnVuY3Rpb25WYWx1ZXNbaW5kZXhdKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZyYW1lcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEZyYW1lOiBmdW5jdGlvbiAoZnJhbWVTdHJpbmcsIGZ1bmN0aW9uVmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgICAgIGZyYW1lU3RyaW5nOiBmcmFtZVN0cmluZyxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uVmFsdWU6IGZ1bmN0aW9uVmFsdWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBGcmFtZShjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGdldENsYXNzOiBjYWNoZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIEZyYW1lU3RyaW5nUGFyc2VyO1xyXG4gICAgfSksXHJcbiAgICBnZXRJbnN0YW5jZTogY2FjaGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBGcmFtZVN0cmluZ1BhcnNlciA9IHRoaXMuZ2V0Q2xhc3MoKTtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgRnJhbWVTdHJpbmdQYXJzZXIoKTtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9KVxyXG59OyIsInZhciBDbGFzcyA9IHJlcXVpcmUoXCJvM1wiKS5DbGFzcyxcclxuICAgIGFic3RyYWN0TWV0aG9kID0gcmVxdWlyZShcIm8zXCIpLmFic3RyYWN0TWV0aG9kLFxyXG4gICAgZWFjaENvbWJpbmF0aW9uID0gcmVxdWlyZShcInUzXCIpLmVhY2hDb21iaW5hdGlvbixcclxuICAgIGNhY2hlID0gcmVxdWlyZShcInUzXCIpLmNhY2hlLFxyXG4gICAgY2FwYWJpbGl0eSA9IHJlcXVpcmUoXCJjYXBhYmlsaXR5XCIpO1xyXG5cclxudmFyIEFic3RyYWN0RnJhbWVTdHJpbmdTb3VyY2UgPSBDbGFzcyhPYmplY3QsIHtcclxuICAgIHByb3RvdHlwZToge1xyXG4gICAgICAgIGNhcHR1cmVGcmFtZVN0cmluZ3M6IGZ1bmN0aW9uIChmcmFtZVNoaWZ0cykge1xyXG4gICAgICAgICAgICB2YXIgZXJyb3IgPSB0aGlzLmNyZWF0ZUVycm9yKCk7XHJcbiAgICAgICAgICAgIGZyYW1lU2hpZnRzLnVuc2hpZnQodGhpcy5jYXB0dXJlRnJhbWVTdHJpbmdzKTtcclxuICAgICAgICAgICAgZnJhbWVTaGlmdHMudW5zaGlmdCh0aGlzLmNyZWF0ZUVycm9yKTtcclxuICAgICAgICAgICAgdmFyIGNhcHR1cmVkRnJhbWVTdHJpbmdzID0gdGhpcy5nZXRGcmFtZVN0cmluZ3MoZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZyYW1lU3RyaW5ncyA9IGNhcHR1cmVkRnJhbWVTdHJpbmdzLnNsaWNlKGZyYW1lU2hpZnRzLmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvblZhbHVlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNhcGFiaWxpdHkoXCJhcmd1bWVudHMuY2FsbGVlLmNhbGxlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhcHR1cmVkRnVuY3Rpb25WYWx1ZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVFcnJvcixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcHR1cmVGcmFtZVN0cmluZ3NcclxuICAgICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhQ2FsbGVyID0gYXJndW1lbnRzLmNhbGxlZTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYUNhbGxlciA9IGFDYWxsZXIuY2FsbGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlZEZ1bmN0aW9uVmFsdWVzLnB1c2goYUNhbGxlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAodXNlU3RyaWN0RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uVmFsdWVzID0gY2FwdHVyZWRGdW5jdGlvblZhbHVlcy5zbGljZShmcmFtZVNoaWZ0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBmcmFtZVN0cmluZ3M6IGZyYW1lU3RyaW5ncyxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uVmFsdWVzOiBmdW5jdGlvblZhbHVlc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0RnJhbWVTdHJpbmdzOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlIHx8IFwiXCI7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gZXJyb3IubmFtZSB8fCBcIlwiO1xyXG4gICAgICAgICAgICB2YXIgc3RhY2tTdHJpbmcgPSB0aGlzLmdldFN0YWNrU3RyaW5nKGVycm9yKTtcclxuICAgICAgICAgICAgaWYgKHN0YWNrU3RyaW5nID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBzdGFja1N0cmluZ0NodW5rcyA9IHN0YWNrU3RyaW5nLnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgICAgICB2YXIgZnJvbVBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgdmFyIHRvUG9zaXRpb24gPSBzdGFja1N0cmluZ0NodW5rcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0hlYWRlcilcclxuICAgICAgICAgICAgICAgIGZyb21Qb3NpdGlvbiArPSBuYW1lLnNwbGl0KFwiXFxuXCIpLmxlbmd0aCArIG1lc3NhZ2Uuc3BsaXQoXCJcXG5cIikubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFzRm9vdGVyKVxyXG4gICAgICAgICAgICAgICAgdG9Qb3NpdGlvbiAtPSAxO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhY2tTdHJpbmdDaHVua3Muc2xpY2UoZnJvbVBvc2l0aW9uLCB0b1Bvc2l0aW9uKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyZWF0ZUVycm9yOiBhYnN0cmFjdE1ldGhvZCxcclxuICAgICAgICBnZXRTdGFja1N0cmluZzogYWJzdHJhY3RNZXRob2QsXHJcbiAgICAgICAgaGFzSGVhZGVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgaGFzRm9vdGVyOiB1bmRlZmluZWRcclxuICAgIH1cclxufSk7XHJcblxyXG52YXIgRnJhbWVTdHJpbmdTb3VyY2VDYWxpYnJhdG9yID0gQ2xhc3MoT2JqZWN0LCB7XHJcbiAgICBwcm90b3R5cGU6IHtcclxuICAgICAgICBjYWxpYnJhdGVDbGFzczogZnVuY3Rpb24gKEZyYW1lU3RyaW5nU291cmNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhbGlicmF0ZU1ldGhvZHMoRnJhbWVTdHJpbmdTb3VyY2UpICYmIHRoaXMuY2FsaWJyYXRlRW52ZWxvcGUoRnJhbWVTdHJpbmdTb3VyY2UpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FsaWJyYXRlTWV0aG9kczogZnVuY3Rpb24gKEZyYW1lU3RyaW5nU291cmNlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBlYWNoQ29tYmluYXRpb24oW1tcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF0sIFtcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yLnN0YWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJvci5zdGFja3RyYWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1dLCBmdW5jdGlvbiAoY3JlYXRlRXJyb3IsIGdldFN0YWNrU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdldFN0YWNrU3RyaW5nKGNyZWF0ZUVycm9yKCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTdGFja1N0cmluZzogZ2V0U3RhY2tTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVFcnJvcjogY3JlYXRlRXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoICh3b3JraW5nSW1wbGVtZW50YXRpb24pIHtcclxuICAgICAgICAgICAgICAgIENsYXNzLm1lcmdlLmNhbGwoRnJhbWVTdHJpbmdTb3VyY2UsIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm90b3R5cGU6IHdvcmtpbmdJbXBsZW1lbnRhdGlvblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYWxpYnJhdGVFbnZlbG9wZTogZnVuY3Rpb24gKEZyYW1lU3RyaW5nU291cmNlKSB7XHJcbiAgICAgICAgICAgIHZhciBnZXRTdGFja1N0cmluZyA9IEZyYW1lU3RyaW5nU291cmNlLnByb3RvdHlwZS5nZXRTdGFja1N0cmluZztcclxuICAgICAgICAgICAgdmFyIGNyZWF0ZUVycm9yID0gRnJhbWVTdHJpbmdTb3VyY2UucHJvdG90eXBlLmNyZWF0ZUVycm9yO1xyXG4gICAgICAgICAgICB2YXIgY2FsaWJyYXRvclN0YWNrU3RyaW5nID0gZ2V0U3RhY2tTdHJpbmcoY3JlYXRlRXJyb3IoXCJtYXJrZXJcIikpO1xyXG4gICAgICAgICAgICB2YXIgY2FsaWJyYXRvckZyYW1lU3RyaW5ncyA9IGNhbGlicmF0b3JTdGFja1N0cmluZy5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICAgICAgQ2xhc3MubWVyZ2UuY2FsbChGcmFtZVN0cmluZ1NvdXJjZSwge1xyXG4gICAgICAgICAgICAgICAgcHJvdG90eXBlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzSGVhZGVyOiAvbWFya2VyLy50ZXN0KGNhbGlicmF0b3JGcmFtZVN0cmluZ3NbMF0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc0Zvb3RlcjogY2FsaWJyYXRvckZyYW1lU3RyaW5nc1tjYWxpYnJhdG9yRnJhbWVTdHJpbmdzLmxlbmd0aCAtIDFdID09PSBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgZ2V0Q2xhc3M6IGNhY2hlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgRnJhbWVTdHJpbmdTb3VyY2U7XHJcbiAgICAgICAgaWYgKEZyYW1lU3RyaW5nU291cmNlKVxyXG4gICAgICAgICAgICByZXR1cm4gRnJhbWVTdHJpbmdTb3VyY2U7XHJcbiAgICAgICAgRnJhbWVTdHJpbmdTb3VyY2UgPSBDbGFzcyhBYnN0cmFjdEZyYW1lU3RyaW5nU291cmNlLCB7fSk7XHJcbiAgICAgICAgdmFyIGNhbGlicmF0b3IgPSBuZXcgRnJhbWVTdHJpbmdTb3VyY2VDYWxpYnJhdG9yKCk7XHJcbiAgICAgICAgaWYgKCFjYWxpYnJhdG9yLmNhbGlicmF0ZUNsYXNzKEZyYW1lU3RyaW5nU291cmNlKSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHJlYWQgRXJyb3IucHJvdG90eXBlLnN0YWNrIGluIHRoaXMgZW52aXJvbm1lbnQuXCIpO1xyXG4gICAgICAgIHJldHVybiBGcmFtZVN0cmluZ1NvdXJjZTtcclxuICAgIH0pLFxyXG4gICAgZ2V0SW5zdGFuY2U6IGNhY2hlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgRnJhbWVTdHJpbmdTb3VyY2UgPSB0aGlzLmdldENsYXNzKCk7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IEZyYW1lU3RyaW5nU291cmNlKCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfSlcclxufTsiLCJ2YXIgRnJhbWVTdHJpbmdTb3VyY2UgPSByZXF1aXJlKFwiLi9GcmFtZVN0cmluZ1NvdXJjZVwiKSxcclxuICAgIEZyYW1lU3RyaW5nUGFyc2VyID0gcmVxdWlyZShcIi4vRnJhbWVTdHJpbmdQYXJzZXJcIiksXHJcbiAgICBjYWNoZSA9IHJlcXVpcmUoXCJ1M1wiKS5jYWNoZSxcclxuICAgIHByZXBhcmVTdGFja1RyYWNlID0gcmVxdWlyZShcIi4uL3ByZXBhcmVTdGFja1RyYWNlXCIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPSBmdW5jdGlvbiBjYXB0dXJlU3RhY2tUcmFjZSh0aHJvd2FibGUsIHRlcm1pbmF0b3IpIHtcclxuICAgICAgICB2YXIgd2FybmluZ3M7XHJcbiAgICAgICAgdmFyIGZyYW1lU2hpZnRzID0gW1xyXG4gICAgICAgICAgICBjYXB0dXJlU3RhY2tUcmFjZVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgaWYgKHRlcm1pbmF0b3IpIHtcclxuICAgICAgICAgICAgLy8gYWRkaXRpb25hbCBmcmFtZXMgY2FuIGNvbWUgaGVyZSBpZiBhcmd1bWVudHMuY2FsbGVlLmNhbGxlciBpcyBzdXBwb3J0ZWRcclxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGl0IGlzIGhhcmQgdG8gaWRlbnRpZnkgdGhlIHRlcm1pbmF0b3JcclxuICAgICAgICAgICAgZnJhbWVTaGlmdHMucHVzaCh0ZXJtaW5hdG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNhcHR1cmVkID0gRnJhbWVTdHJpbmdTb3VyY2UuZ2V0SW5zdGFuY2UoKS5jYXB0dXJlRnJhbWVTdHJpbmdzKGZyYW1lU2hpZnRzKTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aHJvd2FibGUsIHtcclxuICAgICAgICAgICAgc3RhY2s6IHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGdldDogY2FjaGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmcmFtZXMgPSBGcmFtZVN0cmluZ1BhcnNlci5nZXRJbnN0YW5jZSgpLmdldEZyYW1lcyhjYXB0dXJlZC5mcmFtZVN0cmluZ3MsIGNhcHR1cmVkLmZ1bmN0aW9uVmFsdWVzKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKEVycm9yLnByZXBhcmVTdGFja1RyYWNlIHx8IHByZXBhcmVTdGFja1RyYWNlKSh0aHJvd2FibGUsIGZyYW1lcywgd2FybmluZ3MpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FjaGVkU3RhY2s6IHtcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIEVycm9yLmdldFN0YWNrVHJhY2UgPSBmdW5jdGlvbiAodGhyb3dhYmxlKSB7XHJcbiAgICAgICAgaWYgKHRocm93YWJsZS5jYWNoZWRTdGFjaylcclxuICAgICAgICAgICAgcmV0dXJuIHRocm93YWJsZS5zdGFjaztcclxuICAgICAgICB2YXIgZnJhbWVTdHJpbmdzID0gRnJhbWVTdHJpbmdTb3VyY2UuZ2V0SW5zdGFuY2UoKS5nZXRGcmFtZVN0cmluZ3ModGhyb3dhYmxlKSxcclxuICAgICAgICAgICAgZnJhbWVzID0gW10sXHJcbiAgICAgICAgICAgIHdhcm5pbmdzO1xyXG4gICAgICAgIGlmIChmcmFtZVN0cmluZ3MpXHJcbiAgICAgICAgICAgIGZyYW1lcyA9IEZyYW1lU3RyaW5nUGFyc2VyLmdldEluc3RhbmNlKCkuZ2V0RnJhbWVzKGZyYW1lU3RyaW5ncywgW10pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgd2FybmluZ3MgPSBbXHJcbiAgICAgICAgICAgICAgICBcIlRoZSBzdGFjayBpcyBub3QgcmVhZGFibGUgYnkgdW50aHJvd24gZXJyb3JzIGluIHRoaXMgZW52aXJvbm1lbnQuXCJcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB2YXIgc3RhY2sgPSAoRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgfHwgcHJlcGFyZVN0YWNrVHJhY2UpKHRocm93YWJsZSwgZnJhbWVzLCB3YXJuaW5ncyk7XHJcbiAgICAgICAgaWYgKGZyYW1lU3RyaW5ncylcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRocm93YWJsZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RhY2tcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhY2hlZFN0YWNrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChub25Db25maWd1cmFibGVFcnJvcikge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0YWNrO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByZXBhcmVTdGFja1RyYWNlOiBwcmVwYXJlU3RhY2tUcmFjZVxyXG4gICAgfTtcclxufTsiLCJ2YXIgcHJlcGFyZVN0YWNrVHJhY2UgPSBmdW5jdGlvbiAodGhyb3dhYmxlLCBmcmFtZXMsIHdhcm5pbmdzKSB7XHJcbiAgICB2YXIgc3RyaW5nID0gXCJcIjtcclxuICAgIHN0cmluZyArPSB0aHJvd2FibGUubmFtZSB8fCBcIkVycm9yXCI7XHJcbiAgICBzdHJpbmcgKz0gXCI6IFwiICsgKHRocm93YWJsZS5tZXNzYWdlIHx8IFwiXCIpO1xyXG4gICAgaWYgKHdhcm5pbmdzIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgZm9yICh2YXIgd2FybmluZ0luZGV4IGluIHdhcm5pbmdzKSB7XHJcbiAgICAgICAgICAgIHZhciB3YXJuaW5nID0gd2FybmluZ3Nbd2FybmluZ0luZGV4XTtcclxuICAgICAgICAgICAgc3RyaW5nICs9IFwiXFxuICAgIyBcIiArIHdhcm5pbmc7XHJcbiAgICAgICAgfVxyXG4gICAgZm9yICh2YXIgZnJhbWVJbmRleCBpbiBmcmFtZXMpIHtcclxuICAgICAgICB2YXIgZnJhbWUgPSBmcmFtZXNbZnJhbWVJbmRleF07XHJcbiAgICAgICAgc3RyaW5nICs9IFwiXFxuICAgYXQgXCIgKyBmcmFtZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cmluZztcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcHJlcGFyZVN0YWNrVHJhY2U7IiwidmFyIGNhY2hlID0gcmVxdWlyZShcInUzXCIpLmNhY2hlLFxyXG4gICAgcHJlcGFyZVN0YWNrVHJhY2UgPSByZXF1aXJlKFwiLi9wcmVwYXJlU3RhY2tUcmFjZVwiKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID0gZnVuY3Rpb24gKHRocm93YWJsZSwgdGVybWluYXRvcikge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRocm93YWJsZSwge1xyXG4gICAgICAgICAgICBzdGFjazoge1xyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZ2V0OiBjYWNoZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSB8fCBwcmVwYXJlU3RhY2tUcmFjZSkodGhyb3dhYmxlLCBbXSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYWNoZWRTdGFjazoge1xyXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgRXJyb3IuZ2V0U3RhY2tUcmFjZSA9IGZ1bmN0aW9uICh0aHJvd2FibGUpIHtcclxuICAgICAgICBpZiAodGhyb3dhYmxlLmNhY2hlZFN0YWNrKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhyb3dhYmxlLnN0YWNrO1xyXG4gICAgICAgIHZhciBzdGFjayA9IChFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSB8fCBwcmVwYXJlU3RhY2tUcmFjZSkodGhyb3dhYmxlLCBbXSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhyb3dhYmxlLCB7XHJcbiAgICAgICAgICAgICAgICBzdGFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RhY2tcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjYWNoZWRTdGFjazoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChub25Db25maWd1cmFibGVFcnJvcikge1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhY2s7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJlcGFyZVN0YWNrVHJhY2U6IHByZXBhcmVTdGFja1RyYWNlXHJcbiAgICB9O1xyXG59OyIsInZhciBwcmVwYXJlU3RhY2tUcmFjZSA9IHJlcXVpcmUoXCIuL3ByZXBhcmVTdGFja1RyYWNlXCIpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBFcnJvci5nZXRTdGFja1RyYWNlID0gZnVuY3Rpb24gKHRocm93YWJsZSkge1xyXG4gICAgICAgIHJldHVybiB0aHJvd2FibGUuc3RhY2s7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJlcGFyZVN0YWNrVHJhY2U6IHByZXBhcmVTdGFja1RyYWNlXHJcbiAgICB9O1xyXG59OyIsIi8qIVxuICogaHR0cC1lcnJvcnNcbiAqIENvcHlyaWdodChjKSAyMDE0IEpvbmF0aGFuIE9uZ1xuICogQ29weXJpZ2h0KGMpIDIwMTYgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBkZXByZWNhdGUgPSByZXF1aXJlKCdkZXBkJykoJ2h0dHAtZXJyb3JzJylcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJ3NldHByb3RvdHlwZW9mJylcbnZhciBzdGF0dXNlcyA9IHJlcXVpcmUoJ3N0YXR1c2VzJylcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciB0b0lkZW50aWZpZXIgPSByZXF1aXJlKCd0b2lkZW50aWZpZXInKVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlRXJyb3Jcbm1vZHVsZS5leHBvcnRzLkh0dHBFcnJvciA9IGNyZWF0ZUh0dHBFcnJvckNvbnN0cnVjdG9yKClcblxuLy8gUG9wdWxhdGUgZXhwb3J0cyBmb3IgYWxsIGNvbnN0cnVjdG9yc1xucG9wdWxhdGVDb25zdHJ1Y3RvckV4cG9ydHMobW9kdWxlLmV4cG9ydHMsIHN0YXR1c2VzLmNvZGVzLCBtb2R1bGUuZXhwb3J0cy5IdHRwRXJyb3IpXG5cbi8qKlxuICogR2V0IHRoZSBjb2RlIGNsYXNzIG9mIGEgc3RhdHVzIGNvZGUuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNvZGVDbGFzcyAoc3RhdHVzKSB7XG4gIHJldHVybiBOdW1iZXIoU3RyaW5nKHN0YXR1cykuY2hhckF0KDApICsgJzAwJylcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgSFRUUCBFcnJvci5cbiAqXG4gKiBAcmV0dXJucyB7RXJyb3J9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRXJyb3IgKCkge1xuICAvLyBzbyBtdWNoIGFyaXR5IGdvaW5nIG9uIH5fflxuICB2YXIgZXJyXG4gIHZhciBtc2dcbiAgdmFyIHN0YXR1cyA9IDUwMFxuICB2YXIgcHJvcHMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV1cbiAgICBpZiAoYXJnIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGVyciA9IGFyZ1xuICAgICAgc3RhdHVzID0gZXJyLnN0YXR1cyB8fCBlcnIuc3RhdHVzQ29kZSB8fCBzdGF0dXNcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIHN3aXRjaCAodHlwZW9mIGFyZykge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgbXNnID0gYXJnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBzdGF0dXMgPSBhcmdcbiAgICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgICBkZXByZWNhdGUoJ25vbi1maXJzdC1hcmd1bWVudCBzdGF0dXMgY29kZTsgcmVwbGFjZSB3aXRoIGNyZWF0ZUVycm9yKCcgKyBhcmcgKyAnLCAuLi4pJylcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcHJvcHMgPSBhcmdcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHN0YXR1cyA9PT0gJ251bWJlcicgJiYgKHN0YXR1cyA8IDQwMCB8fCBzdGF0dXMgPj0gNjAwKSkge1xuICAgIGRlcHJlY2F0ZSgnbm9uLWVycm9yIHN0YXR1cyBjb2RlOyB1c2Ugb25seSA0eHggb3IgNXh4IHN0YXR1cyBjb2RlcycpXG4gIH1cblxuICBpZiAodHlwZW9mIHN0YXR1cyAhPT0gJ251bWJlcicgfHxcbiAgICAoIXN0YXR1c2VzW3N0YXR1c10gJiYgKHN0YXR1cyA8IDQwMCB8fCBzdGF0dXMgPj0gNjAwKSkpIHtcbiAgICBzdGF0dXMgPSA1MDBcbiAgfVxuXG4gIC8vIGNvbnN0cnVjdG9yXG4gIHZhciBIdHRwRXJyb3IgPSBjcmVhdGVFcnJvcltzdGF0dXNdIHx8IGNyZWF0ZUVycm9yW2NvZGVDbGFzcyhzdGF0dXMpXVxuXG4gIGlmICghZXJyKSB7XG4gICAgLy8gY3JlYXRlIGVycm9yXG4gICAgZXJyID0gSHR0cEVycm9yXG4gICAgICA/IG5ldyBIdHRwRXJyb3IobXNnKVxuICAgICAgOiBuZXcgRXJyb3IobXNnIHx8IHN0YXR1c2VzW3N0YXR1c10pXG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UoZXJyLCBjcmVhdGVFcnJvcilcbiAgfVxuXG4gIGlmICghSHR0cEVycm9yIHx8ICEoZXJyIGluc3RhbmNlb2YgSHR0cEVycm9yKSB8fCBlcnIuc3RhdHVzICE9PSBzdGF0dXMpIHtcbiAgICAvLyBhZGQgcHJvcGVydGllcyB0byBnZW5lcmljIGVycm9yXG4gICAgZXJyLmV4cG9zZSA9IHN0YXR1cyA8IDUwMFxuICAgIGVyci5zdGF0dXMgPSBlcnIuc3RhdHVzQ29kZSA9IHN0YXR1c1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKGtleSAhPT0gJ3N0YXR1cycgJiYga2V5ICE9PSAnc3RhdHVzQ29kZScpIHtcbiAgICAgIGVycltrZXldID0gcHJvcHNba2V5XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJcbn1cblxuLyoqXG4gKiBDcmVhdGUgSFRUUCBlcnJvciBhYnN0cmFjdCBiYXNlIGNsYXNzLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVIdHRwRXJyb3JDb25zdHJ1Y3RvciAoKSB7XG4gIGZ1bmN0aW9uIEh0dHBFcnJvciAoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY2Fubm90IGNvbnN0cnVjdCBhYnN0cmFjdCBjbGFzcycpXG4gIH1cblxuICBpbmhlcml0cyhIdHRwRXJyb3IsIEVycm9yKVxuXG4gIHJldHVybiBIdHRwRXJyb3Jcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjb25zdHJ1Y3RvciBmb3IgYSBjbGllbnQgZXJyb3IuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudEVycm9yQ29uc3RydWN0b3IgKEh0dHBFcnJvciwgbmFtZSwgY29kZSkge1xuICB2YXIgY2xhc3NOYW1lID0gbmFtZS5tYXRjaCgvRXJyb3IkLykgPyBuYW1lIDogbmFtZSArICdFcnJvcidcblxuICBmdW5jdGlvbiBDbGllbnRFcnJvciAobWVzc2FnZSkge1xuICAgIC8vIGNyZWF0ZSB0aGUgZXJyb3Igb2JqZWN0XG4gICAgdmFyIG1zZyA9IG1lc3NhZ2UgIT0gbnVsbCA/IG1lc3NhZ2UgOiBzdGF0dXNlc1tjb2RlXVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKVxuXG4gICAgLy8gY2FwdHVyZSBhIHN0YWNrIHRyYWNlIHRvIHRoZSBjb25zdHJ1Y3Rpb24gcG9pbnRcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIENsaWVudEVycm9yKVxuXG4gICAgLy8gYWRqdXN0IHRoZSBbW1Byb3RvdHlwZV1dXG4gICAgc2V0UHJvdG90eXBlT2YoZXJyLCBDbGllbnRFcnJvci5wcm90b3R5cGUpXG5cbiAgICAvLyByZWRlZmluZSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsICdtZXNzYWdlJywge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBtc2csXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pXG5cbiAgICAvLyByZWRlZmluZSB0aGUgZXJyb3IgbmFtZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsICduYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogY2xhc3NOYW1lLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KVxuXG4gICAgcmV0dXJuIGVyclxuICB9XG5cbiAgaW5oZXJpdHMoQ2xpZW50RXJyb3IsIEh0dHBFcnJvcilcbiAgbmFtZUZ1bmMoQ2xpZW50RXJyb3IsIGNsYXNzTmFtZSlcblxuICBDbGllbnRFcnJvci5wcm90b3R5cGUuc3RhdHVzID0gY29kZVxuICBDbGllbnRFcnJvci5wcm90b3R5cGUuc3RhdHVzQ29kZSA9IGNvZGVcbiAgQ2xpZW50RXJyb3IucHJvdG90eXBlLmV4cG9zZSA9IHRydWVcblxuICByZXR1cm4gQ2xpZW50RXJyb3Jcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjb25zdHJ1Y3RvciBmb3IgYSBzZXJ2ZXIgZXJyb3IuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVNlcnZlckVycm9yQ29uc3RydWN0b3IgKEh0dHBFcnJvciwgbmFtZSwgY29kZSkge1xuICB2YXIgY2xhc3NOYW1lID0gbmFtZS5tYXRjaCgvRXJyb3IkLykgPyBuYW1lIDogbmFtZSArICdFcnJvcidcblxuICBmdW5jdGlvbiBTZXJ2ZXJFcnJvciAobWVzc2FnZSkge1xuICAgIC8vIGNyZWF0ZSB0aGUgZXJyb3Igb2JqZWN0XG4gICAgdmFyIG1zZyA9IG1lc3NhZ2UgIT0gbnVsbCA/IG1lc3NhZ2UgOiBzdGF0dXNlc1tjb2RlXVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKVxuXG4gICAgLy8gY2FwdHVyZSBhIHN0YWNrIHRyYWNlIHRvIHRoZSBjb25zdHJ1Y3Rpb24gcG9pbnRcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIFNlcnZlckVycm9yKVxuXG4gICAgLy8gYWRqdXN0IHRoZSBbW1Byb3RvdHlwZV1dXG4gICAgc2V0UHJvdG90eXBlT2YoZXJyLCBTZXJ2ZXJFcnJvci5wcm90b3R5cGUpXG5cbiAgICAvLyByZWRlZmluZSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsICdtZXNzYWdlJywge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBtc2csXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pXG5cbiAgICAvLyByZWRlZmluZSB0aGUgZXJyb3IgbmFtZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsICduYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogY2xhc3NOYW1lLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KVxuXG4gICAgcmV0dXJuIGVyclxuICB9XG5cbiAgaW5oZXJpdHMoU2VydmVyRXJyb3IsIEh0dHBFcnJvcilcbiAgbmFtZUZ1bmMoU2VydmVyRXJyb3IsIGNsYXNzTmFtZSlcblxuICBTZXJ2ZXJFcnJvci5wcm90b3R5cGUuc3RhdHVzID0gY29kZVxuICBTZXJ2ZXJFcnJvci5wcm90b3R5cGUuc3RhdHVzQ29kZSA9IGNvZGVcbiAgU2VydmVyRXJyb3IucHJvdG90eXBlLmV4cG9zZSA9IGZhbHNlXG5cbiAgcmV0dXJuIFNlcnZlckVycm9yXG59XG5cbi8qKlxuICogU2V0IHRoZSBuYW1lIG9mIGEgZnVuY3Rpb24sIGlmIHBvc3NpYmxlLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBuYW1lRnVuYyAoZnVuYywgbmFtZSkge1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZnVuYywgJ25hbWUnKVxuXG4gIGlmIChkZXNjICYmIGRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgZGVzYy52YWx1ZSA9IG5hbWVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuYywgJ25hbWUnLCBkZXNjKVxuICB9XG59XG5cbi8qKlxuICogUG9wdWxhdGUgdGhlIGV4cG9ydHMgb2JqZWN0IHdpdGggY29uc3RydWN0b3JzIGZvciBldmVyeSBlcnJvciBjbGFzcy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcG9wdWxhdGVDb25zdHJ1Y3RvckV4cG9ydHMgKGV4cG9ydHMsIGNvZGVzLCBIdHRwRXJyb3IpIHtcbiAgY29kZXMuZm9yRWFjaChmdW5jdGlvbiBmb3JFYWNoQ29kZSAoY29kZSkge1xuICAgIHZhciBDb2RlRXJyb3JcbiAgICB2YXIgbmFtZSA9IHRvSWRlbnRpZmllcihzdGF0dXNlc1tjb2RlXSlcblxuICAgIHN3aXRjaCAoY29kZUNsYXNzKGNvZGUpKSB7XG4gICAgICBjYXNlIDQwMDpcbiAgICAgICAgQ29kZUVycm9yID0gY3JlYXRlQ2xpZW50RXJyb3JDb25zdHJ1Y3RvcihIdHRwRXJyb3IsIG5hbWUsIGNvZGUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDUwMDpcbiAgICAgICAgQ29kZUVycm9yID0gY3JlYXRlU2VydmVyRXJyb3JDb25zdHJ1Y3RvcihIdHRwRXJyb3IsIG5hbWUsIGNvZGUpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKENvZGVFcnJvcikge1xuICAgICAgLy8gZXhwb3J0IHRoZSBjb25zdHJ1Y3RvclxuICAgICAgZXhwb3J0c1tjb2RlXSA9IENvZGVFcnJvclxuICAgICAgZXhwb3J0c1tuYW1lXSA9IENvZGVFcnJvclxuICAgIH1cbiAgfSlcblxuICAvLyBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eVxuICBleHBvcnRzW1wiSSdtYXRlYXBvdFwiXSA9IGRlcHJlY2F0ZS5mdW5jdGlvbihleHBvcnRzLkltQVRlYXBvdCxcbiAgICAnXCJJXFwnbWF0ZWFwb3RcIjsgdXNlIFwiSW1BVGVhcG90XCIgaW5zdGVhZCcpXG59XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBnbG9iYWwuTXVzdGFjaGUgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgLyohXG4gICAqIG11c3RhY2hlLmpzIC0gTG9naWMtbGVzcyB7e211c3RhY2hlfX0gdGVtcGxhdGVzIHdpdGggSmF2YVNjcmlwdFxuICAgKiBodHRwOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzXG4gICAqL1xuXG4gIHZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5UG9seWZpbGwgKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogTW9yZSBjb3JyZWN0IHR5cGVvZiBzdHJpbmcgaGFuZGxpbmcgYXJyYXlcbiAgICogd2hpY2ggbm9ybWFsbHkgcmV0dXJucyB0eXBlb2YgJ29iamVjdCdcbiAgICovXG4gIGZ1bmN0aW9uIHR5cGVTdHIgKG9iaikge1xuICAgIHJldHVybiBpc0FycmF5KG9iaikgPyAnYXJyYXknIDogdHlwZW9mIG9iajtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIE51bGwgc2FmZSB3YXkgb2YgY2hlY2tpbmcgd2hldGhlciBvciBub3QgYW4gb2JqZWN0LFxuICAgKiBpbmNsdWRpbmcgaXRzIHByb3RvdHlwZSwgaGFzIGEgZ2l2ZW4gcHJvcGVydHlcbiAgICovXG4gIGZ1bmN0aW9uIGhhc1Byb3BlcnR5IChvYmosIHByb3BOYW1lKSB7XG4gICAgcmV0dXJuIG9iaiAhPSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIChwcm9wTmFtZSBpbiBvYmopO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhZmUgd2F5IG9mIGRldGVjdGluZyB3aGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gdGhpbmcgaXMgYSBwcmltaXRpdmUgYW5kXG4gICAqIHdoZXRoZXIgaXQgaGFzIHRoZSBnaXZlbiBwcm9wZXJ0eVxuICAgKi9cbiAgZnVuY3Rpb24gcHJpbWl0aXZlSGFzT3duUHJvcGVydHkgKHByaW1pdGl2ZSwgcHJvcE5hbWUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgcHJpbWl0aXZlICE9IG51bGxcbiAgICAgICYmIHR5cGVvZiBwcmltaXRpdmUgIT09ICdvYmplY3QnXG4gICAgICAmJiBwcmltaXRpdmUuaGFzT3duUHJvcGVydHlcbiAgICAgICYmIHByaW1pdGl2ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSlcbiAgICApO1xuICB9XG5cbiAgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9pc3N1ZXMuYXBhY2hlLm9yZy9qaXJhL2Jyb3dzZS9DT1VDSERCLTU3N1xuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanMvaXNzdWVzLzE4OVxuICB2YXIgcmVnRXhwVGVzdCA9IFJlZ0V4cC5wcm90b3R5cGUudGVzdDtcbiAgZnVuY3Rpb24gdGVzdFJlZ0V4cCAocmUsIHN0cmluZykge1xuICAgIHJldHVybiByZWdFeHBUZXN0LmNhbGwocmUsIHN0cmluZyk7XG4gIH1cblxuICB2YXIgbm9uU3BhY2VSZSA9IC9cXFMvO1xuICBmdW5jdGlvbiBpc1doaXRlc3BhY2UgKHN0cmluZykge1xuICAgIHJldHVybiAhdGVzdFJlZ0V4cChub25TcGFjZVJlLCBzdHJpbmcpO1xuICB9XG5cbiAgdmFyIGVudGl0eU1hcCA9IHtcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0OycsXG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgXCInXCI6ICcmIzM5OycsXG4gICAgJy8nOiAnJiN4MkY7JyxcbiAgICAnYCc6ICcmI3g2MDsnLFxuICAgICc9JzogJyYjeDNEOydcbiAgfTtcblxuICBmdW5jdGlvbiBlc2NhcGVIdG1sIChzdHJpbmcpIHtcbiAgICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZSgvWyY8PlwiJ2A9XFwvXS9nLCBmdW5jdGlvbiBmcm9tRW50aXR5TWFwIChzKSB7XG4gICAgICByZXR1cm4gZW50aXR5TWFwW3NdO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHdoaXRlUmUgPSAvXFxzKi87XG4gIHZhciBzcGFjZVJlID0gL1xccysvO1xuICB2YXIgZXF1YWxzUmUgPSAvXFxzKj0vO1xuICB2YXIgY3VybHlSZSA9IC9cXHMqXFx9LztcbiAgdmFyIHRhZ1JlID0gLyN8XFxefFxcL3w+fFxce3wmfD18IS87XG5cbiAgLyoqXG4gICAqIEJyZWFrcyB1cCB0aGUgZ2l2ZW4gYHRlbXBsYXRlYCBzdHJpbmcgaW50byBhIHRyZWUgb2YgdG9rZW5zLiBJZiB0aGUgYHRhZ3NgXG4gICAqIGFyZ3VtZW50IGlzIGdpdmVuIGhlcmUgaXQgbXVzdCBiZSBhbiBhcnJheSB3aXRoIHR3byBzdHJpbmcgdmFsdWVzOiB0aGVcbiAgICogb3BlbmluZyBhbmQgY2xvc2luZyB0YWdzIHVzZWQgaW4gdGhlIHRlbXBsYXRlIChlLmcuIFsgXCI8JVwiLCBcIiU+XCIgXSkuIE9mXG4gICAqIGNvdXJzZSwgdGhlIGRlZmF1bHQgaXMgdG8gdXNlIG11c3RhY2hlcyAoaS5lLiBtdXN0YWNoZS50YWdzKS5cbiAgICpcbiAgICogQSB0b2tlbiBpcyBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IDQgZWxlbWVudHMuIFRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZVxuICAgKiBtdXN0YWNoZSBzeW1ib2wgdGhhdCB3YXMgdXNlZCBpbnNpZGUgdGhlIHRhZywgZS5nLiBcIiNcIiBvciBcIiZcIi4gSWYgdGhlIHRhZ1xuICAgKiBkaWQgbm90IGNvbnRhaW4gYSBzeW1ib2wgKGkuZS4ge3tteVZhbHVlfX0pIHRoaXMgZWxlbWVudCBpcyBcIm5hbWVcIi4gRm9yXG4gICAqIGFsbCB0ZXh0IHRoYXQgYXBwZWFycyBvdXRzaWRlIGEgc3ltYm9sIHRoaXMgZWxlbWVudCBpcyBcInRleHRcIi5cbiAgICpcbiAgICogVGhlIHNlY29uZCBlbGVtZW50IG9mIGEgdG9rZW4gaXMgaXRzIFwidmFsdWVcIi4gRm9yIG11c3RhY2hlIHRhZ3MgdGhpcyBpc1xuICAgKiB3aGF0ZXZlciBlbHNlIHdhcyBpbnNpZGUgdGhlIHRhZyBiZXNpZGVzIHRoZSBvcGVuaW5nIHN5bWJvbC4gRm9yIHRleHQgdG9rZW5zXG4gICAqIHRoaXMgaXMgdGhlIHRleHQgaXRzZWxmLlxuICAgKlxuICAgKiBUaGUgdGhpcmQgYW5kIGZvdXJ0aCBlbGVtZW50cyBvZiB0aGUgdG9rZW4gYXJlIHRoZSBzdGFydCBhbmQgZW5kIGluZGljZXMsXG4gICAqIHJlc3BlY3RpdmVseSwgb2YgdGhlIHRva2VuIGluIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZS5cbiAgICpcbiAgICogVG9rZW5zIHRoYXQgYXJlIHRoZSByb290IG5vZGUgb2YgYSBzdWJ0cmVlIGNvbnRhaW4gdHdvIG1vcmUgZWxlbWVudHM6IDEpIGFuXG4gICAqIGFycmF5IG9mIHRva2VucyBpbiB0aGUgc3VidHJlZSBhbmQgMikgdGhlIGluZGV4IGluIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSBhdFxuICAgKiB3aGljaCB0aGUgY2xvc2luZyB0YWcgZm9yIHRoYXQgc2VjdGlvbiBiZWdpbnMuXG4gICAqXG4gICAqIFRva2VucyBmb3IgcGFydGlhbHMgYWxzbyBjb250YWluIHR3byBtb3JlIGVsZW1lbnRzOiAxKSBhIHN0cmluZyB2YWx1ZSBvZlxuICAgKiBpbmRlbmRhdGlvbiBwcmlvciB0byB0aGF0IHRhZyBhbmQgMikgdGhlIGluZGV4IG9mIHRoYXQgdGFnIG9uIHRoYXQgbGluZSAtXG4gICAqIGVnIGEgdmFsdWUgb2YgMiBpbmRpY2F0ZXMgdGhlIHBhcnRpYWwgaXMgdGhlIHRoaXJkIHRhZyBvbiB0aGlzIGxpbmUuXG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZVRlbXBsYXRlICh0ZW1wbGF0ZSwgdGFncykge1xuICAgIGlmICghdGVtcGxhdGUpXG4gICAgICByZXR1cm4gW107XG4gICAgdmFyIGxpbmVIYXNOb25TcGFjZSA9IGZhbHNlO1xuICAgIHZhciBzZWN0aW9ucyA9IFtdOyAgICAgLy8gU3RhY2sgdG8gaG9sZCBzZWN0aW9uIHRva2Vuc1xuICAgIHZhciB0b2tlbnMgPSBbXTsgICAgICAgLy8gQnVmZmVyIHRvIGhvbGQgdGhlIHRva2Vuc1xuICAgIHZhciBzcGFjZXMgPSBbXTsgICAgICAgLy8gSW5kaWNlcyBvZiB3aGl0ZXNwYWNlIHRva2VucyBvbiB0aGUgY3VycmVudCBsaW5lXG4gICAgdmFyIGhhc1RhZyA9IGZhbHNlOyAgICAvLyBJcyB0aGVyZSBhIHt7dGFnfX0gb24gdGhlIGN1cnJlbnQgbGluZT9cbiAgICB2YXIgbm9uU3BhY2UgPSBmYWxzZTsgIC8vIElzIHRoZXJlIGEgbm9uLXNwYWNlIGNoYXIgb24gdGhlIGN1cnJlbnQgbGluZT9cbiAgICB2YXIgaW5kZW50YXRpb24gPSAnJzsgIC8vIFRyYWNrcyBpbmRlbnRhdGlvbiBmb3IgdGFncyB0aGF0IHVzZSBpdFxuICAgIHZhciB0YWdJbmRleCA9IDA7ICAgICAgLy8gU3RvcmVzIGEgY291bnQgb2YgbnVtYmVyIG9mIHRhZ3MgZW5jb3VudGVyZWQgb24gYSBsaW5lXG5cbiAgICAvLyBTdHJpcHMgYWxsIHdoaXRlc3BhY2UgdG9rZW5zIGFycmF5IGZvciB0aGUgY3VycmVudCBsaW5lXG4gICAgLy8gaWYgdGhlcmUgd2FzIGEge3sjdGFnfX0gb24gaXQgYW5kIG90aGVyd2lzZSBvbmx5IHNwYWNlLlxuICAgIGZ1bmN0aW9uIHN0cmlwU3BhY2UgKCkge1xuICAgICAgaWYgKGhhc1RhZyAmJiAhbm9uU3BhY2UpIHtcbiAgICAgICAgd2hpbGUgKHNwYWNlcy5sZW5ndGgpXG4gICAgICAgICAgZGVsZXRlIHRva2Vuc1tzcGFjZXMucG9wKCldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BhY2VzID0gW107XG4gICAgICB9XG5cbiAgICAgIGhhc1RhZyA9IGZhbHNlO1xuICAgICAgbm9uU3BhY2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgb3BlbmluZ1RhZ1JlLCBjbG9zaW5nVGFnUmUsIGNsb3NpbmdDdXJseVJlO1xuICAgIGZ1bmN0aW9uIGNvbXBpbGVUYWdzICh0YWdzVG9Db21waWxlKSB7XG4gICAgICBpZiAodHlwZW9mIHRhZ3NUb0NvbXBpbGUgPT09ICdzdHJpbmcnKVxuICAgICAgICB0YWdzVG9Db21waWxlID0gdGFnc1RvQ29tcGlsZS5zcGxpdChzcGFjZVJlLCAyKTtcblxuICAgICAgaWYgKCFpc0FycmF5KHRhZ3NUb0NvbXBpbGUpIHx8IHRhZ3NUb0NvbXBpbGUubGVuZ3RoICE9PSAyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdGFnczogJyArIHRhZ3NUb0NvbXBpbGUpO1xuXG4gICAgICBvcGVuaW5nVGFnUmUgPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzBdKSArICdcXFxccyonKTtcbiAgICAgIGNsb3NpbmdUYWdSZSA9IG5ldyBSZWdFeHAoJ1xcXFxzKicgKyBlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVsxXSkpO1xuICAgICAgY2xvc2luZ0N1cmx5UmUgPSBuZXcgUmVnRXhwKCdcXFxccyonICsgZXNjYXBlUmVnRXhwKCd9JyArIHRhZ3NUb0NvbXBpbGVbMV0pKTtcbiAgICB9XG5cbiAgICBjb21waWxlVGFncyh0YWdzIHx8IG11c3RhY2hlLnRhZ3MpO1xuXG4gICAgdmFyIHNjYW5uZXIgPSBuZXcgU2Nhbm5lcih0ZW1wbGF0ZSk7XG5cbiAgICB2YXIgc3RhcnQsIHR5cGUsIHZhbHVlLCBjaHIsIHRva2VuLCBvcGVuU2VjdGlvbjtcbiAgICB3aGlsZSAoIXNjYW5uZXIuZW9zKCkpIHtcbiAgICAgIHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG5cbiAgICAgIC8vIE1hdGNoIGFueSB0ZXh0IGJldHdlZW4gdGFncy5cbiAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwob3BlbmluZ1RhZ1JlKTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCB2YWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgaSA8IHZhbHVlTGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBjaHIgPSB2YWx1ZS5jaGFyQXQoaSk7XG5cbiAgICAgICAgICBpZiAoaXNXaGl0ZXNwYWNlKGNocikpIHtcbiAgICAgICAgICAgIHNwYWNlcy5wdXNoKHRva2Vucy5sZW5ndGgpO1xuICAgICAgICAgICAgaW5kZW50YXRpb24gKz0gY2hyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25TcGFjZSA9IHRydWU7XG4gICAgICAgICAgICBsaW5lSGFzTm9uU3BhY2UgPSB0cnVlO1xuICAgICAgICAgICAgaW5kZW50YXRpb24gKz0gJyAnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRva2Vucy5wdXNoKFsgJ3RleHQnLCBjaHIsIHN0YXJ0LCBzdGFydCArIDEgXSk7XG4gICAgICAgICAgc3RhcnQgKz0gMTtcblxuICAgICAgICAgIC8vIENoZWNrIGZvciB3aGl0ZXNwYWNlIG9uIHRoZSBjdXJyZW50IGxpbmUuXG4gICAgICAgICAgaWYgKGNociA9PT0gJ1xcbicpIHtcbiAgICAgICAgICAgIHN0cmlwU3BhY2UoKTtcbiAgICAgICAgICAgIGluZGVudGF0aW9uID0gJyc7XG4gICAgICAgICAgICB0YWdJbmRleCA9IDA7XG4gICAgICAgICAgICBsaW5lSGFzTm9uU3BhY2UgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTWF0Y2ggdGhlIG9wZW5pbmcgdGFnLlxuICAgICAgaWYgKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSlcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGhhc1RhZyA9IHRydWU7XG5cbiAgICAgIC8vIEdldCB0aGUgdGFnIHR5cGUuXG4gICAgICB0eXBlID0gc2Nhbm5lci5zY2FuKHRhZ1JlKSB8fCAnbmFtZSc7XG4gICAgICBzY2FubmVyLnNjYW4od2hpdGVSZSk7XG5cbiAgICAgIC8vIEdldCB0aGUgdGFnIHZhbHVlLlxuICAgICAgaWYgKHR5cGUgPT09ICc9Jykge1xuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGVxdWFsc1JlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuKGVxdWFsc1JlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3snKSB7XG4gICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ0N1cmx5UmUpO1xuICAgICAgICBzY2FubmVyLnNjYW4oY3VybHlSZSk7XG4gICAgICAgIHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgICAgIHR5cGUgPSAnJic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1hdGNoIHRoZSBjbG9zaW5nIHRhZy5cbiAgICAgIGlmICghc2Nhbm5lci5zY2FuKGNsb3NpbmdUYWdSZSkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgdGFnIGF0ICcgKyBzY2FubmVyLnBvcyk7XG5cbiAgICAgIGlmICh0eXBlID09ICc+Jykge1xuICAgICAgICB0b2tlbiA9IFsgdHlwZSwgdmFsdWUsIHN0YXJ0LCBzY2FubmVyLnBvcywgaW5kZW50YXRpb24sIHRhZ0luZGV4LCBsaW5lSGFzTm9uU3BhY2UgXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRva2VuID0gWyB0eXBlLCB2YWx1ZSwgc3RhcnQsIHNjYW5uZXIucG9zIF07XG4gICAgICB9XG4gICAgICB0YWdJbmRleCsrO1xuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJyMnIHx8IHR5cGUgPT09ICdeJykge1xuICAgICAgICBzZWN0aW9ucy5wdXNoKHRva2VuKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJy8nKSB7XG4gICAgICAgIC8vIENoZWNrIHNlY3Rpb24gbmVzdGluZy5cbiAgICAgICAgb3BlblNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcblxuICAgICAgICBpZiAoIW9wZW5TZWN0aW9uKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5vcGVuZWQgc2VjdGlvbiBcIicgKyB2YWx1ZSArICdcIiBhdCAnICsgc3RhcnQpO1xuXG4gICAgICAgIGlmIChvcGVuU2VjdGlvblsxXSAhPT0gdmFsdWUpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJyArIG9wZW5TZWN0aW9uWzFdICsgJ1wiIGF0ICcgKyBzdGFydCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICduYW1lJyB8fCB0eXBlID09PSAneycgfHwgdHlwZSA9PT0gJyYnKSB7XG4gICAgICAgIG5vblNwYWNlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJz0nKSB7XG4gICAgICAgIC8vIFNldCB0aGUgdGFncyBmb3IgdGhlIG5leHQgdGltZSBhcm91bmQuXG4gICAgICAgIGNvbXBpbGVUYWdzKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdHJpcFNwYWNlKCk7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhlcmUgYXJlIG5vIG9wZW4gc2VjdGlvbnMgd2hlbiB3ZSdyZSBkb25lLlxuICAgIG9wZW5TZWN0aW9uID0gc2VjdGlvbnMucG9wKCk7XG5cbiAgICBpZiAob3BlblNlY3Rpb24pXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInICsgb3BlblNlY3Rpb25bMV0gKyAnXCIgYXQgJyArIHNjYW5uZXIucG9zKTtcblxuICAgIHJldHVybiBuZXN0VG9rZW5zKHNxdWFzaFRva2Vucyh0b2tlbnMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21iaW5lcyB0aGUgdmFsdWVzIG9mIGNvbnNlY3V0aXZlIHRleHQgdG9rZW5zIGluIHRoZSBnaXZlbiBgdG9rZW5zYCBhcnJheVxuICAgKiB0byBhIHNpbmdsZSB0b2tlbi5cbiAgICovXG4gIGZ1bmN0aW9uIHNxdWFzaFRva2VucyAodG9rZW5zKSB7XG4gICAgdmFyIHNxdWFzaGVkVG9rZW5zID0gW107XG5cbiAgICB2YXIgdG9rZW4sIGxhc3RUb2tlbjtcbiAgICBmb3IgKHZhciBpID0gMCwgbnVtVG9rZW5zID0gdG9rZW5zLmxlbmd0aDsgaSA8IG51bVRva2VuczsgKytpKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGlmICh0b2tlblswXSA9PT0gJ3RleHQnICYmIGxhc3RUb2tlbiAmJiBsYXN0VG9rZW5bMF0gPT09ICd0ZXh0Jykge1xuICAgICAgICAgIGxhc3RUb2tlblsxXSArPSB0b2tlblsxXTtcbiAgICAgICAgICBsYXN0VG9rZW5bM10gPSB0b2tlblszXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzcXVhc2hlZFRva2Vucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICBsYXN0VG9rZW4gPSB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzcXVhc2hlZFRva2VucztcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtcyB0aGUgZ2l2ZW4gYXJyYXkgb2YgYHRva2Vuc2AgaW50byBhIG5lc3RlZCB0cmVlIHN0cnVjdHVyZSB3aGVyZVxuICAgKiB0b2tlbnMgdGhhdCByZXByZXNlbnQgYSBzZWN0aW9uIGhhdmUgdHdvIGFkZGl0aW9uYWwgaXRlbXM6IDEpIGFuIGFycmF5IG9mXG4gICAqIGFsbCB0b2tlbnMgdGhhdCBhcHBlYXIgaW4gdGhhdCBzZWN0aW9uIGFuZCAyKSB0aGUgaW5kZXggaW4gdGhlIG9yaWdpbmFsXG4gICAqIHRlbXBsYXRlIHRoYXQgcmVwcmVzZW50cyB0aGUgZW5kIG9mIHRoYXQgc2VjdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIG5lc3RUb2tlbnMgKHRva2Vucykge1xuICAgIHZhciBuZXN0ZWRUb2tlbnMgPSBbXTtcbiAgICB2YXIgY29sbGVjdG9yID0gbmVzdGVkVG9rZW5zO1xuICAgIHZhciBzZWN0aW9ucyA9IFtdO1xuXG4gICAgdmFyIHRva2VuLCBzZWN0aW9uO1xuICAgIGZvciAodmFyIGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICBzd2l0Y2ggKHRva2VuWzBdKSB7XG4gICAgICAgIGNhc2UgJyMnOlxuICAgICAgICBjYXNlICdeJzpcbiAgICAgICAgICBjb2xsZWN0b3IucHVzaCh0b2tlbik7XG4gICAgICAgICAgc2VjdGlvbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgY29sbGVjdG9yID0gdG9rZW5bNF0gPSBbXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgc2VjdGlvbiA9IHNlY3Rpb25zLnBvcCgpO1xuICAgICAgICAgIHNlY3Rpb25bNV0gPSB0b2tlblsyXTtcbiAgICAgICAgICBjb2xsZWN0b3IgPSBzZWN0aW9ucy5sZW5ndGggPiAwID8gc2VjdGlvbnNbc2VjdGlvbnMubGVuZ3RoIC0gMV1bNF0gOiBuZXN0ZWRUb2tlbnM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29sbGVjdG9yLnB1c2godG9rZW4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXN0ZWRUb2tlbnM7XG4gIH1cblxuICAvKipcbiAgICogQSBzaW1wbGUgc3RyaW5nIHNjYW5uZXIgdGhhdCBpcyB1c2VkIGJ5IHRoZSB0ZW1wbGF0ZSBwYXJzZXIgdG8gZmluZFxuICAgKiB0b2tlbnMgaW4gdGVtcGxhdGUgc3RyaW5ncy5cbiAgICovXG4gIGZ1bmN0aW9uIFNjYW5uZXIgKHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudGFpbCA9IHN0cmluZztcbiAgICB0aGlzLnBvcyA9IDA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHRhaWwgaXMgZW1wdHkgKGVuZCBvZiBzdHJpbmcpLlxuICAgKi9cbiAgU2Nhbm5lci5wcm90b3R5cGUuZW9zID0gZnVuY3Rpb24gZW9zICgpIHtcbiAgICByZXR1cm4gdGhpcy50YWlsID09PSAnJztcbiAgfTtcblxuICAvKipcbiAgICogVHJpZXMgdG8gbWF0Y2ggdGhlIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbiBhdCB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAgICogUmV0dXJucyB0aGUgbWF0Y2hlZCB0ZXh0IGlmIGl0IGNhbiBtYXRjaCwgdGhlIGVtcHR5IHN0cmluZyBvdGhlcndpc2UuXG4gICAqL1xuICBTY2FubmVyLnByb3RvdHlwZS5zY2FuID0gZnVuY3Rpb24gc2NhbiAocmUpIHtcbiAgICB2YXIgbWF0Y2ggPSB0aGlzLnRhaWwubWF0Y2gocmUpO1xuXG4gICAgaWYgKCFtYXRjaCB8fCBtYXRjaC5pbmRleCAhPT0gMClcbiAgICAgIHJldHVybiAnJztcblxuICAgIHZhciBzdHJpbmcgPSBtYXRjaFswXTtcblxuICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5zdWJzdHJpbmcoc3RyaW5nLmxlbmd0aCk7XG4gICAgdGhpcy5wb3MgKz0gc3RyaW5nLmxlbmd0aDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNraXBzIGFsbCB0ZXh0IHVudGlsIHRoZSBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb24gY2FuIGJlIG1hdGNoZWQuIFJldHVybnNcbiAgICogdGhlIHNraXBwZWQgc3RyaW5nLCB3aGljaCBpcyB0aGUgZW50aXJlIHRhaWwgaWYgbm8gbWF0Y2ggY2FuIGJlIG1hZGUuXG4gICAqL1xuICBTY2FubmVyLnByb3RvdHlwZS5zY2FuVW50aWwgPSBmdW5jdGlvbiBzY2FuVW50aWwgKHJlKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy50YWlsLnNlYXJjaChyZSksIG1hdGNoO1xuXG4gICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgbWF0Y2ggPSB0aGlzLnRhaWw7XG4gICAgICAgIHRoaXMudGFpbCA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgbWF0Y2ggPSAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBtYXRjaCA9IHRoaXMudGFpbC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwuc3Vic3RyaW5nKGluZGV4KTtcbiAgICB9XG5cbiAgICB0aGlzLnBvcyArPSBtYXRjaC5sZW5ndGg7XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYSByZW5kZXJpbmcgY29udGV4dCBieSB3cmFwcGluZyBhIHZpZXcgb2JqZWN0IGFuZFxuICAgKiBtYWludGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IGNvbnRleHQuXG4gICAqL1xuICBmdW5jdGlvbiBDb250ZXh0ICh2aWV3LCBwYXJlbnRDb250ZXh0KSB7XG4gICAgdGhpcy52aWV3ID0gdmlldztcbiAgICB0aGlzLmNhY2hlID0geyAnLic6IHRoaXMudmlldyB9O1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGNvbnRleHQgdXNpbmcgdGhlIGdpdmVuIHZpZXcgd2l0aCB0aGlzIGNvbnRleHRcbiAgICogYXMgdGhlIHBhcmVudC5cbiAgICovXG4gIENvbnRleHQucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiBwdXNoICh2aWV3KSB7XG4gICAgcmV0dXJuIG5ldyBDb250ZXh0KHZpZXcsIHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2YWx1ZSBvZiB0aGUgZ2l2ZW4gbmFtZSBpbiB0aGlzIGNvbnRleHQsIHRyYXZlcnNpbmdcbiAgICogdXAgdGhlIGNvbnRleHQgaGllcmFyY2h5IGlmIHRoZSB2YWx1ZSBpcyBhYnNlbnQgaW4gdGhpcyBjb250ZXh0J3Mgdmlldy5cbiAgICovXG4gIENvbnRleHQucHJvdG90eXBlLmxvb2t1cCA9IGZ1bmN0aW9uIGxvb2t1cCAobmFtZSkge1xuICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG5cbiAgICB2YXIgdmFsdWU7XG4gICAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICB2YWx1ZSA9IGNhY2hlW25hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXMsIGludGVybWVkaWF0ZVZhbHVlLCBuYW1lcywgaW5kZXgsIGxvb2t1cEhpdCA9IGZhbHNlO1xuXG4gICAgICB3aGlsZSAoY29udGV4dCkge1xuICAgICAgICBpZiAobmFtZS5pbmRleE9mKCcuJykgPiAwKSB7XG4gICAgICAgICAgaW50ZXJtZWRpYXRlVmFsdWUgPSBjb250ZXh0LnZpZXc7XG4gICAgICAgICAgbmFtZXMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVXNpbmcgdGhlIGRvdCBub3Rpb24gcGF0aCBpbiBgbmFtZWAsIHdlIGRlc2NlbmQgdGhyb3VnaCB0aGVcbiAgICAgICAgICAgKiBuZXN0ZWQgb2JqZWN0cy5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIFRvIGJlIGNlcnRhaW4gdGhhdCB0aGUgbG9va3VwIGhhcyBiZWVuIHN1Y2Nlc3NmdWwsIHdlIGhhdmUgdG9cbiAgICAgICAgICAgKiBjaGVjayBpZiB0aGUgbGFzdCBvYmplY3QgaW4gdGhlIHBhdGggYWN0dWFsbHkgaGFzIHRoZSBwcm9wZXJ0eVxuICAgICAgICAgICAqIHdlIGFyZSBsb29raW5nIGZvci4gV2Ugc3RvcmUgdGhlIHJlc3VsdCBpbiBgbG9va3VwSGl0YC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIFRoaXMgaXMgc3BlY2lhbGx5IG5lY2Vzc2FyeSBmb3Igd2hlbiB0aGUgdmFsdWUgaGFzIGJlZW4gc2V0IHRvXG4gICAgICAgICAgICogYHVuZGVmaW5lZGAgYW5kIHdlIHdhbnQgdG8gYXZvaWQgbG9va2luZyB1cCBwYXJlbnQgY29udGV4dHMuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBJbiB0aGUgY2FzZSB3aGVyZSBkb3Qgbm90YXRpb24gaXMgdXNlZCwgd2UgY29uc2lkZXIgdGhlIGxvb2t1cFxuICAgICAgICAgICAqIHRvIGJlIHN1Y2Nlc3NmdWwgZXZlbiBpZiB0aGUgbGFzdCBcIm9iamVjdFwiIGluIHRoZSBwYXRoIGlzXG4gICAgICAgICAgICogbm90IGFjdHVhbGx5IGFuIG9iamVjdCBidXQgYSBwcmltaXRpdmUgKGUuZy4sIGEgc3RyaW5nLCBvciBhblxuICAgICAgICAgICAqIGludGVnZXIpLCBiZWNhdXNlIGl0IGlzIHNvbWV0aW1lcyB1c2VmdWwgdG8gYWNjZXNzIGEgcHJvcGVydHlcbiAgICAgICAgICAgKiBvZiBhbiBhdXRvYm94ZWQgcHJpbWl0aXZlLCBzdWNoIGFzIHRoZSBsZW5ndGggb2YgYSBzdHJpbmcuXG4gICAgICAgICAgICoqL1xuICAgICAgICAgIHdoaWxlIChpbnRlcm1lZGlhdGVWYWx1ZSAhPSBudWxsICYmIGluZGV4IDwgbmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IG5hbWVzLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgIGxvb2t1cEhpdCA9IChcbiAgICAgICAgICAgICAgICBoYXNQcm9wZXJ0eShpbnRlcm1lZGlhdGVWYWx1ZSwgbmFtZXNbaW5kZXhdKVxuICAgICAgICAgICAgICAgIHx8IHByaW1pdGl2ZUhhc093blByb3BlcnR5KGludGVybWVkaWF0ZVZhbHVlLCBuYW1lc1tpbmRleF0pXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGludGVybWVkaWF0ZVZhbHVlID0gaW50ZXJtZWRpYXRlVmFsdWVbbmFtZXNbaW5kZXgrK11dO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWYWx1ZSA9IGNvbnRleHQudmlld1tuYW1lXTtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIE9ubHkgY2hlY2tpbmcgYWdhaW5zdCBgaGFzUHJvcGVydHlgLCB3aGljaCBhbHdheXMgcmV0dXJucyBgZmFsc2VgIGlmXG4gICAgICAgICAgICogYGNvbnRleHQudmlld2AgaXMgbm90IGFuIG9iamVjdC4gRGVsaWJlcmF0ZWx5IG9taXR0aW5nIHRoZSBjaGVja1xuICAgICAgICAgICAqIGFnYWluc3QgYHByaW1pdGl2ZUhhc093blByb3BlcnR5YCBpZiBkb3Qgbm90YXRpb24gaXMgbm90IHVzZWQuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBDb25zaWRlciB0aGlzIGV4YW1wbGU6XG4gICAgICAgICAgICogYGBgXG4gICAgICAgICAgICogTXVzdGFjaGUucmVuZGVyKFwiVGhlIGxlbmd0aCBvZiBhIGZvb3RiYWxsIGZpZWxkIGlzIHt7I2xlbmd0aH19e3tsZW5ndGh9fXt7L2xlbmd0aH19LlwiLCB7bGVuZ3RoOiBcIjEwMCB5YXJkc1wifSlcbiAgICAgICAgICAgKiBgYGBcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIElmIHdlIHdlcmUgdG8gY2hlY2sgYWxzbyBhZ2FpbnN0IGBwcmltaXRpdmVIYXNPd25Qcm9wZXJ0eWAsIGFzIHdlIGRvXG4gICAgICAgICAgICogaW4gdGhlIGRvdCBub3RhdGlvbiBjYXNlLCB0aGVuIHJlbmRlciBjYWxsIHdvdWxkIHJldHVybjpcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIFwiVGhlIGxlbmd0aCBvZiBhIGZvb3RiYWxsIGZpZWxkIGlzIDkuXCJcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIHJhdGhlciB0aGFuIHRoZSBleHBlY3RlZDpcbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIFwiVGhlIGxlbmd0aCBvZiBhIGZvb3RiYWxsIGZpZWxkIGlzIDEwMCB5YXJkcy5cIlxuICAgICAgICAgICAqKi9cbiAgICAgICAgICBsb29rdXBIaXQgPSBoYXNQcm9wZXJ0eShjb250ZXh0LnZpZXcsIG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxvb2t1cEhpdCkge1xuICAgICAgICAgIHZhbHVlID0gaW50ZXJtZWRpYXRlVmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0ID0gY29udGV4dC5wYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIGNhY2hlW25hbWVdID0gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKVxuICAgICAgdmFsdWUgPSB2YWx1ZS5jYWxsKHRoaXMudmlldyk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEEgV3JpdGVyIGtub3dzIGhvdyB0byB0YWtlIGEgc3RyZWFtIG9mIHRva2VucyBhbmQgcmVuZGVyIHRoZW0gdG8gYVxuICAgKiBzdHJpbmcsIGdpdmVuIGEgY29udGV4dC4gSXQgYWxzbyBtYWludGFpbnMgYSBjYWNoZSBvZiB0ZW1wbGF0ZXMgdG9cbiAgICogYXZvaWQgdGhlIG5lZWQgdG8gcGFyc2UgdGhlIHNhbWUgdGVtcGxhdGUgdHdpY2UuXG4gICAqL1xuICBmdW5jdGlvbiBXcml0ZXIgKCkge1xuICAgIHRoaXMudGVtcGxhdGVDYWNoZSA9IHtcbiAgICAgIF9jYWNoZToge30sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9jYWNoZVtrZXldID0gdmFsdWU7XG4gICAgICB9LFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQgKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVba2V5XTtcbiAgICAgIH0sXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIgKCkge1xuICAgICAgICB0aGlzLl9jYWNoZSA9IHt9O1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGFsbCBjYWNoZWQgdGVtcGxhdGVzIGluIHRoaXMgd3JpdGVyLlxuICAgKi9cbiAgV3JpdGVyLnByb3RvdHlwZS5jbGVhckNhY2hlID0gZnVuY3Rpb24gY2xlYXJDYWNoZSAoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnRlbXBsYXRlQ2FjaGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlQ2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbmQgY2FjaGVzIHRoZSBnaXZlbiBgdGVtcGxhdGVgIGFjY29yZGluZyB0byB0aGUgZ2l2ZW4gYHRhZ3NgIG9yXG4gICAqIGBtdXN0YWNoZS50YWdzYCBpZiBgdGFnc2AgaXMgb21pdHRlZCwgIGFuZCByZXR1cm5zIHRoZSBhcnJheSBvZiB0b2tlbnNcbiAgICogdGhhdCBpcyBnZW5lcmF0ZWQgZnJvbSB0aGUgcGFyc2UuXG4gICAqL1xuICBXcml0ZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24gcGFyc2UgKHRlbXBsYXRlLCB0YWdzKSB7XG4gICAgdmFyIGNhY2hlID0gdGhpcy50ZW1wbGF0ZUNhY2hlO1xuICAgIHZhciBjYWNoZUtleSA9IHRlbXBsYXRlICsgJzonICsgKHRhZ3MgfHwgbXVzdGFjaGUudGFncykuam9pbignOicpO1xuICAgIHZhciBpc0NhY2hlRW5hYmxlZCA9IHR5cGVvZiBjYWNoZSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgdmFyIHRva2VucyA9IGlzQ2FjaGVFbmFibGVkID8gY2FjaGUuZ2V0KGNhY2hlS2V5KSA6IHVuZGVmaW5lZDtcblxuICAgIGlmICh0b2tlbnMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0b2tlbnMgPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlLCB0YWdzKTtcbiAgICAgIGlzQ2FjaGVFbmFibGVkICYmIGNhY2hlLnNldChjYWNoZUtleSwgdG9rZW5zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRva2VucztcbiAgfTtcblxuICAvKipcbiAgICogSGlnaC1sZXZlbCBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIHJlbmRlciB0aGUgZ2l2ZW4gYHRlbXBsYXRlYCB3aXRoXG4gICAqIHRoZSBnaXZlbiBgdmlld2AuXG4gICAqXG4gICAqIFRoZSBvcHRpb25hbCBgcGFydGlhbHNgIGFyZ3VtZW50IG1heSBiZSBhbiBvYmplY3QgdGhhdCBjb250YWlucyB0aGVcbiAgICogbmFtZXMgYW5kIHRlbXBsYXRlcyBvZiBwYXJ0aWFscyB0aGF0IGFyZSB1c2VkIGluIHRoZSB0ZW1wbGF0ZS4gSXQgbWF5XG4gICAqIGFsc28gYmUgYSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gbG9hZCBwYXJ0aWFsIHRlbXBsYXRlcyBvbiB0aGUgZmx5XG4gICAqIHRoYXQgdGFrZXMgYSBzaW5nbGUgYXJndW1lbnQ6IHRoZSBuYW1lIG9mIHRoZSBwYXJ0aWFsLlxuICAgKlxuICAgKiBJZiB0aGUgb3B0aW9uYWwgYGNvbmZpZ2AgYXJndW1lbnQgaXMgZ2l2ZW4gaGVyZSwgdGhlbiBpdCBzaG91bGQgYmUgYW5cbiAgICogb2JqZWN0IHdpdGggYSBgdGFnc2AgYXR0cmlidXRlIG9yIGFuIGBlc2NhcGVgIGF0dHJpYnV0ZSBvciBib3RoLlxuICAgKiBJZiBhbiBhcnJheSBpcyBwYXNzZWQsIHRoZW4gaXQgd2lsbCBiZSBpbnRlcnByZXRlZCB0aGUgc2FtZSB3YXkgYXNcbiAgICogYSBgdGFnc2AgYXR0cmlidXRlIG9uIGEgYGNvbmZpZ2Agb2JqZWN0LlxuICAgKlxuICAgKiBUaGUgYHRhZ3NgIGF0dHJpYnV0ZSBvZiBhIGBjb25maWdgIG9iamVjdCBtdXN0IGJlIGFuIGFycmF5IHdpdGggdHdvXG4gICAqIHN0cmluZyB2YWx1ZXM6IHRoZSBvcGVuaW5nIGFuZCBjbG9zaW5nIHRhZ3MgdXNlZCBpbiB0aGUgdGVtcGxhdGUgKGUuZy5cbiAgICogWyBcIjwlXCIsIFwiJT5cIiBdKS4gVGhlIGRlZmF1bHQgaXMgdG8gbXVzdGFjaGUudGFncy5cbiAgICpcbiAgICogVGhlIGBlc2NhcGVgIGF0dHJpYnV0ZSBvZiBhIGBjb25maWdgIG9iamVjdCBtdXN0IGJlIGEgZnVuY3Rpb24gd2hpY2hcbiAgICogYWNjZXB0cyBhIHN0cmluZyBhcyBpbnB1dCBhbmQgb3V0cHV0cyBhIHNhZmVseSBlc2NhcGVkIHN0cmluZy5cbiAgICogSWYgYW4gYGVzY2FwZWAgZnVuY3Rpb24gaXMgbm90IHByb3ZpZGVkLCB0aGVuIGFuIEhUTUwtc2FmZSBzdHJpbmdcbiAgICogZXNjYXBpbmcgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgZGVmYXVsdC5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICh0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMsIGNvbmZpZykge1xuICAgIHZhciB0YWdzID0gdGhpcy5nZXRDb25maWdUYWdzKGNvbmZpZyk7XG4gICAgdmFyIHRva2VucyA9IHRoaXMucGFyc2UodGVtcGxhdGUsIHRhZ3MpO1xuICAgIHZhciBjb250ZXh0ID0gKHZpZXcgaW5zdGFuY2VvZiBDb250ZXh0KSA/IHZpZXcgOiBuZXcgQ29udGV4dCh2aWV3LCB1bmRlZmluZWQpO1xuICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCB0ZW1wbGF0ZSwgY29uZmlnKTtcbiAgfTtcblxuICAvKipcbiAgICogTG93LWxldmVsIG1ldGhvZCB0aGF0IHJlbmRlcnMgdGhlIGdpdmVuIGFycmF5IG9mIGB0b2tlbnNgIHVzaW5nXG4gICAqIHRoZSBnaXZlbiBgY29udGV4dGAgYW5kIGBwYXJ0aWFsc2AuXG4gICAqXG4gICAqIE5vdGU6IFRoZSBgb3JpZ2luYWxUZW1wbGF0ZWAgaXMgb25seSBldmVyIHVzZWQgdG8gZXh0cmFjdCB0aGUgcG9ydGlvblxuICAgKiBvZiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgdGhhdCB3YXMgY29udGFpbmVkIGluIGEgaGlnaGVyLW9yZGVyIHNlY3Rpb24uXG4gICAqIElmIHRoZSB0ZW1wbGF0ZSBkb2Vzbid0IHVzZSBoaWdoZXItb3JkZXIgc2VjdGlvbnMsIHRoaXMgYXJndW1lbnQgbWF5XG4gICAqIGJlIG9taXR0ZWQuXG4gICAqL1xuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlclRva2VucyA9IGZ1bmN0aW9uIHJlbmRlclRva2VucyAodG9rZW5zLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKSB7XG4gICAgdmFyIGJ1ZmZlciA9ICcnO1xuXG4gICAgdmFyIHRva2VuLCBzeW1ib2wsIHZhbHVlO1xuICAgIGZvciAodmFyIGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcbiAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICBzeW1ib2wgPSB0b2tlblswXTtcblxuICAgICAgaWYgKHN5bWJvbCA9PT0gJyMnKSB2YWx1ZSA9IHRoaXMucmVuZGVyU2VjdGlvbih0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICdeJykgdmFsdWUgPSB0aGlzLnJlbmRlckludmVydGVkKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSwgY29uZmlnKTtcbiAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJz4nKSB2YWx1ZSA9IHRoaXMucmVuZGVyUGFydGlhbCh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIGNvbmZpZyk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICcmJykgdmFsdWUgPSB0aGlzLnVuZXNjYXBlZFZhbHVlKHRva2VuLCBjb250ZXh0KTtcbiAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJ25hbWUnKSB2YWx1ZSA9IHRoaXMuZXNjYXBlZFZhbHVlKHRva2VuLCBjb250ZXh0LCBjb25maWcpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAndGV4dCcpIHZhbHVlID0gdGhpcy5yYXdWYWx1ZSh0b2tlbik7XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBidWZmZXIgKz0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlclNlY3Rpb24gPSBmdW5jdGlvbiByZW5kZXJTZWN0aW9uICh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYnVmZmVyID0gJyc7XG4gICAgdmFyIHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlbmRlciBhbiBhcmJpdHJhcnkgdGVtcGxhdGVcbiAgICAvLyBpbiB0aGUgY3VycmVudCBjb250ZXh0IGJ5IGhpZ2hlci1vcmRlciBzZWN0aW9ucy5cbiAgICBmdW5jdGlvbiBzdWJSZW5kZXIgKHRlbXBsYXRlKSB7XG4gICAgICByZXR1cm4gc2VsZi5yZW5kZXIodGVtcGxhdGUsIGNvbnRleHQsIHBhcnRpYWxzLCBjb25maWcpO1xuICAgIH1cblxuICAgIGlmICghdmFsdWUpIHJldHVybjtcblxuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgZm9yICh2YXIgaiA9IDAsIHZhbHVlTGVuZ3RoID0gdmFsdWUubGVuZ3RoOyBqIDwgdmFsdWVMZW5ndGg7ICsraikge1xuICAgICAgICBidWZmZXIgKz0gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sIGNvbnRleHQucHVzaCh2YWx1ZVtqXSksIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbFRlbXBsYXRlICE9PSAnc3RyaW5nJylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgdXNlIGhpZ2hlci1vcmRlciBzZWN0aW9ucyB3aXRob3V0IHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZScpO1xuXG4gICAgICAvLyBFeHRyYWN0IHRoZSBwb3J0aW9uIG9mIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSB0aGF0IHRoZSBzZWN0aW9uIGNvbnRhaW5zLlxuICAgICAgdmFsdWUgPSB2YWx1ZS5jYWxsKGNvbnRleHQudmlldywgb3JpZ2luYWxUZW1wbGF0ZS5zbGljZSh0b2tlblszXSwgdG9rZW5bNV0pLCBzdWJSZW5kZXIpO1xuXG4gICAgICBpZiAodmFsdWUgIT0gbnVsbClcbiAgICAgICAgYnVmZmVyICs9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBidWZmZXIgKz0gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmZmVyO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVySW52ZXJ0ZWQgPSBmdW5jdGlvbiByZW5kZXJJbnZlcnRlZCAodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlLCBjb25maWcpIHtcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG5cbiAgICAvLyBVc2UgSmF2YVNjcmlwdCdzIGRlZmluaXRpb24gb2YgZmFsc3kuIEluY2x1ZGUgZW1wdHkgYXJyYXlzLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vamFubC9tdXN0YWNoZS5qcy9pc3N1ZXMvMTg2XG4gICAgaWYgKCF2YWx1ZSB8fCAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSlcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUsIGNvbmZpZyk7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5pbmRlbnRQYXJ0aWFsID0gZnVuY3Rpb24gaW5kZW50UGFydGlhbCAocGFydGlhbCwgaW5kZW50YXRpb24sIGxpbmVIYXNOb25TcGFjZSkge1xuICAgIHZhciBmaWx0ZXJlZEluZGVudGF0aW9uID0gaW5kZW50YXRpb24ucmVwbGFjZSgvW14gXFx0XS9nLCAnJyk7XG4gICAgdmFyIHBhcnRpYWxCeU5sID0gcGFydGlhbC5zcGxpdCgnXFxuJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJ0aWFsQnlObC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHBhcnRpYWxCeU5sW2ldLmxlbmd0aCAmJiAoaSA+IDAgfHwgIWxpbmVIYXNOb25TcGFjZSkpIHtcbiAgICAgICAgcGFydGlhbEJ5TmxbaV0gPSBmaWx0ZXJlZEluZGVudGF0aW9uICsgcGFydGlhbEJ5TmxbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJ0aWFsQnlObC5qb2luKCdcXG4nKTtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlclBhcnRpYWwgPSBmdW5jdGlvbiByZW5kZXJQYXJ0aWFsICh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIGNvbmZpZykge1xuICAgIGlmICghcGFydGlhbHMpIHJldHVybjtcbiAgICB2YXIgdGFncyA9IHRoaXMuZ2V0Q29uZmlnVGFncyhjb25maWcpO1xuXG4gICAgdmFyIHZhbHVlID0gaXNGdW5jdGlvbihwYXJ0aWFscykgPyBwYXJ0aWFscyh0b2tlblsxXSkgOiBwYXJ0aWFsc1t0b2tlblsxXV07XG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgIHZhciBsaW5lSGFzTm9uU3BhY2UgPSB0b2tlbls2XTtcbiAgICAgIHZhciB0YWdJbmRleCA9IHRva2VuWzVdO1xuICAgICAgdmFyIGluZGVudGF0aW9uID0gdG9rZW5bNF07XG4gICAgICB2YXIgaW5kZW50ZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRhZ0luZGV4ID09IDAgJiYgaW5kZW50YXRpb24pIHtcbiAgICAgICAgaW5kZW50ZWRWYWx1ZSA9IHRoaXMuaW5kZW50UGFydGlhbCh2YWx1ZSwgaW5kZW50YXRpb24sIGxpbmVIYXNOb25TcGFjZSk7XG4gICAgICB9XG4gICAgICB2YXIgdG9rZW5zID0gdGhpcy5wYXJzZShpbmRlbnRlZFZhbHVlLCB0YWdzKTtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCBpbmRlbnRlZFZhbHVlLCBjb25maWcpO1xuICAgIH1cbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnVuZXNjYXBlZFZhbHVlID0gZnVuY3Rpb24gdW5lc2NhcGVkVmFsdWUgKHRva2VuLCBjb250ZXh0KSB7XG4gICAgdmFyIHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUuZXNjYXBlZFZhbHVlID0gZnVuY3Rpb24gZXNjYXBlZFZhbHVlICh0b2tlbiwgY29udGV4dCwgY29uZmlnKSB7XG4gICAgdmFyIGVzY2FwZSA9IHRoaXMuZ2V0Q29uZmlnRXNjYXBlKGNvbmZpZykgfHwgbXVzdGFjaGUuZXNjYXBlO1xuICAgIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbClcbiAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBlc2NhcGUgPT09IG11c3RhY2hlLmVzY2FwZSkgPyBTdHJpbmcodmFsdWUpIDogZXNjYXBlKHZhbHVlKTtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnJhd1ZhbHVlID0gZnVuY3Rpb24gcmF3VmFsdWUgKHRva2VuKSB7XG4gICAgcmV0dXJuIHRva2VuWzFdO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUuZ2V0Q29uZmlnVGFncyA9IGZ1bmN0aW9uIGdldENvbmZpZ1RhZ3MgKGNvbmZpZykge1xuICAgIGlmIChpc0FycmF5KGNvbmZpZykpIHtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGNvbmZpZy50YWdzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUuZ2V0Q29uZmlnRXNjYXBlID0gZnVuY3Rpb24gZ2V0Q29uZmlnRXNjYXBlIChjb25maWcpIHtcbiAgICBpZiAoY29uZmlnICYmIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmICFpc0FycmF5KGNvbmZpZykpIHtcbiAgICAgIHJldHVybiBjb25maWcuZXNjYXBlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuXG4gIHZhciBtdXN0YWNoZSA9IHtcbiAgICBuYW1lOiAnbXVzdGFjaGUuanMnLFxuICAgIHZlcnNpb246ICc0LjIuMCcsXG4gICAgdGFnczogWyAne3snLCAnfX0nIF0sXG4gICAgY2xlYXJDYWNoZTogdW5kZWZpbmVkLFxuICAgIGVzY2FwZTogdW5kZWZpbmVkLFxuICAgIHBhcnNlOiB1bmRlZmluZWQsXG4gICAgcmVuZGVyOiB1bmRlZmluZWQsXG4gICAgU2Nhbm5lcjogdW5kZWZpbmVkLFxuICAgIENvbnRleHQ6IHVuZGVmaW5lZCxcbiAgICBXcml0ZXI6IHVuZGVmaW5lZCxcbiAgICAvKipcbiAgICAgKiBBbGxvd3MgYSB1c2VyIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGNhY2hpbmcgc3RyYXRlZ3ksIGJ5IHByb3ZpZGluZyBhblxuICAgICAqIG9iamVjdCB3aXRoIHNldCwgZ2V0IGFuZCBjbGVhciBtZXRob2RzLiBUaGlzIGNhbiBhbHNvIGJlIHVzZWQgdG8gZGlzYWJsZVxuICAgICAqIHRoZSBjYWNoZSBieSBzZXR0aW5nIGl0IHRvIHRoZSBsaXRlcmFsIGB1bmRlZmluZWRgLlxuICAgICAqL1xuICAgIHNldCB0ZW1wbGF0ZUNhY2hlIChjYWNoZSkge1xuICAgICAgZGVmYXVsdFdyaXRlci50ZW1wbGF0ZUNhY2hlID0gY2FjaGU7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBkZWZhdWx0IG9yIG92ZXJyaWRkZW4gY2FjaGluZyBvYmplY3QgZnJvbSB0aGUgZGVmYXVsdCB3cml0ZXIuXG4gICAgICovXG4gICAgZ2V0IHRlbXBsYXRlQ2FjaGUgKCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRXcml0ZXIudGVtcGxhdGVDYWNoZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gQWxsIGhpZ2gtbGV2ZWwgbXVzdGFjaGUuKiBmdW5jdGlvbnMgdXNlIHRoaXMgd3JpdGVyLlxuICB2YXIgZGVmYXVsdFdyaXRlciA9IG5ldyBXcml0ZXIoKTtcblxuICAvKipcbiAgICogQ2xlYXJzIGFsbCBjYWNoZWQgdGVtcGxhdGVzIGluIHRoZSBkZWZhdWx0IHdyaXRlci5cbiAgICovXG4gIG11c3RhY2hlLmNsZWFyQ2FjaGUgPSBmdW5jdGlvbiBjbGVhckNhY2hlICgpIHtcbiAgICByZXR1cm4gZGVmYXVsdFdyaXRlci5jbGVhckNhY2hlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbmQgY2FjaGVzIHRoZSBnaXZlbiB0ZW1wbGF0ZSBpbiB0aGUgZGVmYXVsdCB3cml0ZXIgYW5kIHJldHVybnMgdGhlXG4gICAqIGFycmF5IG9mIHRva2VucyBpdCBjb250YWlucy4gRG9pbmcgdGhpcyBhaGVhZCBvZiB0aW1lIGF2b2lkcyB0aGUgbmVlZCB0b1xuICAgKiBwYXJzZSB0ZW1wbGF0ZXMgb24gdGhlIGZseSBhcyB0aGV5IGFyZSByZW5kZXJlZC5cbiAgICovXG4gIG11c3RhY2hlLnBhcnNlID0gZnVuY3Rpb24gcGFyc2UgKHRlbXBsYXRlLCB0YWdzKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRXcml0ZXIucGFyc2UodGVtcGxhdGUsIHRhZ3MpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBgdGVtcGxhdGVgIHdpdGggdGhlIGdpdmVuIGB2aWV3YCwgYHBhcnRpYWxzYCwgYW5kIGBjb25maWdgXG4gICAqIHVzaW5nIHRoZSBkZWZhdWx0IHdyaXRlci5cbiAgICovXG4gIG11c3RhY2hlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzLCBjb25maWcpIHtcbiAgICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCB0ZW1wbGF0ZSEgVGVtcGxhdGUgc2hvdWxkIGJlIGEgXCJzdHJpbmdcIiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2J1dCBcIicgKyB0eXBlU3RyKHRlbXBsYXRlKSArICdcIiB3YXMgZ2l2ZW4gYXMgdGhlIGZpcnN0ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJndW1lbnQgZm9yIG11c3RhY2hlI3JlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRXcml0ZXIucmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscywgY29uZmlnKTtcbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIGVzY2FwaW5nIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIHVzZXIgbWF5IG92ZXJyaWRlIGl0LlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanMvaXNzdWVzLzI0NFxuICBtdXN0YWNoZS5lc2NhcGUgPSBlc2NhcGVIdG1sO1xuXG4gIC8vIEV4cG9ydCB0aGVzZSBtYWlubHkgZm9yIHRlc3RpbmcsIGJ1dCBhbHNvIGZvciBhZHZhbmNlZCB1c2FnZS5cbiAgbXVzdGFjaGUuU2Nhbm5lciA9IFNjYW5uZXI7XG4gIG11c3RhY2hlLkNvbnRleHQgPSBDb250ZXh0O1xuICBtdXN0YWNoZS5Xcml0ZXIgPSBXcml0ZXI7XG5cbiAgcmV0dXJuIG11c3RhY2hlO1xuXG59KSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjY291bnQgPSB2b2lkIDA7XG5jb25zdCBibl9qc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJibi5qc1wiKSk7XG5jb25zdCBkZXBkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRlcGRcIikpO1xuY29uc3QgdHJhbnNhY3Rpb25fMSA9IHJlcXVpcmUoXCIuL3RyYW5zYWN0aW9uXCIpO1xuY29uc3QgcHJvdmlkZXJzXzEgPSByZXF1aXJlKFwiLi9wcm92aWRlcnNcIik7XG5jb25zdCBib3JzaF8xID0gcmVxdWlyZShcImJvcnNoXCIpO1xuY29uc3Qga2V5X3BhaXJfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2tleV9wYWlyXCIpO1xuY29uc3QgZXJyb3JzXzEgPSByZXF1aXJlKFwiLi91dGlscy9lcnJvcnNcIik7XG5jb25zdCBycGNfZXJyb3JzXzEgPSByZXF1aXJlKFwiLi91dGlscy9ycGNfZXJyb3JzXCIpO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5jb25zdCBleHBvbmVudGlhbF9iYWNrb2ZmXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvZXhwb25lbnRpYWwtYmFja29mZlwiKSk7XG4vLyBEZWZhdWx0IG51bWJlciBvZiByZXRyaWVzIHdpdGggZGlmZmVyZW50IG5vbmNlIGJlZm9yZSBnaXZpbmcgdXAgb24gYSB0cmFuc2FjdGlvbi5cbmNvbnN0IFRYX05PTkNFX1JFVFJZX05VTUJFUiA9IDEyO1xuLy8gRGVmYXVsdCB3YWl0IHVudGlsIG5leHQgcmV0cnkgaW4gbWlsbGlzLlxuY29uc3QgVFhfTk9OQ0VfUkVUUllfV0FJVCA9IDUwMDtcbi8vIEV4cG9uZW50aWFsIGJhY2sgb2ZmIGZvciB3YWl0aW5nIHRvIHJldHJ5LlxuY29uc3QgVFhfTk9OQ0VfUkVUUllfV0FJVF9CQUNLT0ZGID0gMS41O1xuZnVuY3Rpb24gcGFyc2VKc29uRnJvbVJhd1Jlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoQnVmZmVyLmZyb20ocmVzcG9uc2UpLnRvU3RyaW5nKCkpO1xufVxuZnVuY3Rpb24gYnl0ZXNKc29uU3RyaW5naWZ5KGlucHV0KSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKEpTT04uc3RyaW5naWZ5KGlucHV0KSk7XG59XG4vKipcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgY29tbW9uIGFjY291bnQgcmVsYXRlZCBSUEMgY2FsbHMgaW5jbHVkaW5nIHNpZ25pbmcgdHJhbnNhY3Rpb25zIHdpdGggYSB7QGxpbmsgS2V5UGFpcn0uXG4gKlxuICogQGV4YW1wbGUge0BsaW5rIGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL2RldmVsb3AvZnJvbnQtZW5kL25hai1xdWljay1yZWZlcmVuY2UjYWNjb3VudH1cbiAqIEBoaW50IFVzZSB7QGxpbmsgV2FsbGV0Q29ubmVjdGlvbn0gaW4gdGhlIGJyb3dzZXIgdG8gcmVkaXJlY3QgdG8ge0BsaW5rIGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL3Rvb2xzL25lYXItd2FsbGV0IHwgTkVBUiBXYWxsZXR9IGZvciBBY2NvdW50L2tleSBtYW5hZ2VtZW50IHVzaW5nIHRoZSB7QGxpbmsgQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlfS5cbiAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbm9taWNvbi5pby9EYXRhU3RydWN0dXJlcy9BY2NvdW50Lmh0bWwgfCBBY2NvdW50IFNwZWN9XG4gKi9cbmNsYXNzIEFjY291bnQge1xuICAgIGNvbnN0cnVjdG9yKGNvbm5lY3Rpb24sIGFjY291bnRJZCkge1xuICAgICAgICAvKiogQGhpZGRlbiAqL1xuICAgICAgICB0aGlzLmFjY2Vzc0tleUJ5UHVibGljS2V5Q2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gY29ubmVjdGlvbjtcbiAgICAgICAgdGhpcy5hY2NvdW50SWQgPSBhY2NvdW50SWQ7XG4gICAgfVxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgZ2V0IHJlYWR5KCkge1xuICAgICAgICBjb25zdCBkZXByZWNhdGUgPSBkZXBkXzEuZGVmYXVsdCgnQWNjb3VudC5yZWFkeSgpJyk7XG4gICAgICAgIGRlcHJlY2F0ZSgnbm90IG5lZWRlZCBhbnltb3JlLCBhbHdheXMgcmVhZHknKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaFN0YXRlKCkge1xuICAgICAgICBjb25zdCBkZXByZWNhdGUgPSBkZXBkXzEuZGVmYXVsdCgnQWNjb3VudC5mZXRjaFN0YXRlKCknKTtcbiAgICAgICAgZGVwcmVjYXRlKCd1c2UgYEFjY291bnQuc3RhdGUoKWAgaW5zdGVhZCcpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGJhc2ljIE5FQVIgYWNjb3VudCBpbmZvcm1hdGlvbiB2aWEgdGhlIGB2aWV3X2FjY291bnRgIFJQQyBxdWVyeSBtZXRob2RcbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL2RvY3MubmVhci5vcmcvZG9jcy9kZXZlbG9wL2Zyb250LWVuZC9ycGMjdmlldy1hY2NvdW50fVxuICAgICAqL1xuICAgIGFzeW5jIHN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLnByb3ZpZGVyLnF1ZXJ5KHtcbiAgICAgICAgICAgIHJlcXVlc3RfdHlwZTogJ3ZpZXdfYWNjb3VudCcsXG4gICAgICAgICAgICBhY2NvdW50X2lkOiB0aGlzLmFjY291bnRJZCxcbiAgICAgICAgICAgIGZpbmFsaXR5OiAnb3B0aW1pc3RpYydcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgcHJpbnRMb2dzQW5kRmFpbHVyZXMoY29udHJhY3RJZCwgcmVzdWx0cykge1xuICAgICAgICBpZiAoIXByb2Nlc3MuZW52W1wiTkVBUl9OT19MT0dTXCJdKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlY2VpcHQke3Jlc3VsdC5yZWNlaXB0SWRzLmxlbmd0aCA+IDEgPyAncycgOiAnJ306ICR7cmVzdWx0LnJlY2VpcHRJZHMuam9pbignLCAnKX1gKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50TG9ncyhjb250cmFjdElkLCByZXN1bHQubG9ncywgJ1xcdCcpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZmFpbHVyZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFxcdEZhaWx1cmUgWyR7Y29udHJhY3RJZH1dOiAke3Jlc3VsdC5mYWlsdXJlfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIHByaW50TG9ncyhjb250cmFjdElkLCBsb2dzLCBwcmVmaXggPSAnJykge1xuICAgICAgICBpZiAoIXByb2Nlc3MuZW52W1wiTkVBUl9OT19MT0dTXCJdKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fUxvZyBbJHtjb250cmFjdElkfV06ICR7bG9nfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHNpZ25lZCB0cmFuc2FjdGlvbiB3aGljaCBjYW4gYmUgYnJvYWRjYXN0IHRvIHRoZSBuZXR3b3JrXG4gICAgICogQHBhcmFtIHJlY2VpdmVySWQgTkVBUiBhY2NvdW50IHJlY2VpdmluZyB0aGUgdHJhbnNhY3Rpb25cbiAgICAgKiBAcGFyYW0gYWN0aW9ucyBsaXN0IG9mIGFjdGlvbnMgdG8gcGVyZm9ybSBhcyBwYXJ0IG9mIHRoZSB0cmFuc2FjdGlvblxuICAgICAqIEBzZWUge0BsaW5rIEpzb25ScGNQcm92aWRlci5zZW5kVHJhbnNhY3Rpb259XG4gICAgICovXG4gICAgYXN5bmMgc2lnblRyYW5zYWN0aW9uKHJlY2VpdmVySWQsIGFjdGlvbnMpIHtcbiAgICAgICAgY29uc3QgYWNjZXNzS2V5SW5mbyA9IGF3YWl0IHRoaXMuZmluZEFjY2Vzc0tleShyZWNlaXZlcklkLCBhY3Rpb25zKTtcbiAgICAgICAgaWYgKCFhY2Nlc3NLZXlJbmZvKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgcHJvdmlkZXJzXzEuVHlwZWRFcnJvcihgQ2FuIG5vdCBzaWduIHRyYW5zYWN0aW9ucyBmb3IgYWNjb3VudCAke3RoaXMuYWNjb3VudElkfSBvbiBuZXR3b3JrICR7dGhpcy5jb25uZWN0aW9uLm5ldHdvcmtJZH0sIG5vIG1hdGNoaW5nIGtleSBwYWlyIGZvdW5kIGluICR7dGhpcy5jb25uZWN0aW9uLnNpZ25lcn0uYCwgJ0tleU5vdEZvdW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBhY2Nlc3NLZXkgfSA9IGFjY2Vzc0tleUluZm87XG4gICAgICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgdGhpcy5jb25uZWN0aW9uLnByb3ZpZGVyLmJsb2NrKHsgZmluYWxpdHk6ICdmaW5hbCcgfSk7XG4gICAgICAgIGNvbnN0IGJsb2NrSGFzaCA9IGJsb2NrLmhlYWRlci5oYXNoO1xuICAgICAgICBjb25zdCBub25jZSA9ICsrYWNjZXNzS2V5Lm5vbmNlO1xuICAgICAgICByZXR1cm4gYXdhaXQgdHJhbnNhY3Rpb25fMS5zaWduVHJhbnNhY3Rpb24ocmVjZWl2ZXJJZCwgbm9uY2UsIGFjdGlvbnMsIGJvcnNoXzEuYmFzZURlY29kZShibG9ja0hhc2gpLCB0aGlzLmNvbm5lY3Rpb24uc2lnbmVyLCB0aGlzLmFjY291bnRJZCwgdGhpcy5jb25uZWN0aW9uLm5ldHdvcmtJZCk7XG4gICAgfVxuICAgIHNpZ25BbmRTZW5kVHJhbnNhY3Rpb24oLi4uYXJncykge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduQW5kU2VuZFRyYW5zYWN0aW9uVjEoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduQW5kU2VuZFRyYW5zYWN0aW9uVjIoYXJnc1swXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2lnbkFuZFNlbmRUcmFuc2FjdGlvblYxKHJlY2VpdmVySWQsIGFjdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVwcmVjYXRlID0gZGVwZF8xLmRlZmF1bHQoJ0FjY291bnQuc2lnbkFuZFNlbmRUcmFuc2FjdGlvbihyZWNlaXZlcklkLCBhY3Rpb25zJyk7XG4gICAgICAgIGRlcHJlY2F0ZSgndXNlIGBBY2NvdW50LnNpZ25BbmRTZW5kVHJhbnNhY3Rpb24oU2lnbkFuZFNlbmRUcmFuc2FjdGlvbk9wdGlvbnMpYCBpbnN0ZWFkJyk7XG4gICAgICAgIHJldHVybiB0aGlzLnNpZ25BbmRTZW5kVHJhbnNhY3Rpb25WMih7IHJlY2VpdmVySWQsIGFjdGlvbnMgfSk7XG4gICAgfVxuICAgIGFzeW5jIHNpZ25BbmRTZW5kVHJhbnNhY3Rpb25WMih7IHJlY2VpdmVySWQsIGFjdGlvbnMsIHJldHVybkVycm9yIH0pIHtcbiAgICAgICAgbGV0IHR4SGFzaCwgc2lnbmVkVHg7XG4gICAgICAgIC8vIFRPRE86IFRYX05PTkNFIChkaWZmZXJlbnQgY29uc3RhbnRzIGZvciBkaWZmZXJlbnQgdXNlcyBvZiBleHBvbmVudGlhbEJhY2tvZmY/KVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBleHBvbmVudGlhbF9iYWNrb2ZmXzEuZGVmYXVsdChUWF9OT05DRV9SRVRSWV9XQUlULCBUWF9OT05DRV9SRVRSWV9OVU1CRVIsIFRYX05PTkNFX1JFVFJZX1dBSVRfQkFDS09GRiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgW3R4SGFzaCwgc2lnbmVkVHhdID0gYXdhaXQgdGhpcy5zaWduVHJhbnNhY3Rpb24ocmVjZWl2ZXJJZCwgYWN0aW9ucyk7XG4gICAgICAgICAgICBjb25zdCBwdWJsaWNLZXkgPSBzaWduZWRUeC50cmFuc2FjdGlvbi5wdWJsaWNLZXk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmNvbm5lY3Rpb24ucHJvdmlkZXIuc2VuZFRyYW5zYWN0aW9uKHNpZ25lZFR4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci50eXBlID09PSAnSW52YWxpZE5vbmNlJykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcnNfMS5sb2dXYXJuaW5nKGBSZXRyeWluZyB0cmFuc2FjdGlvbiAke3JlY2VpdmVySWR9OiR7Ym9yc2hfMS5iYXNlRW5jb2RlKHR4SGFzaCl9IHdpdGggbmV3IG5vbmNlLmApO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5hY2Nlc3NLZXlCeVB1YmxpY0tleUNhY2hlW3B1YmxpY0tleS50b1N0cmluZygpXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnJvci50eXBlID09PSAnRXhwaXJlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzXzEubG9nV2FybmluZyhgUmV0cnlpbmcgdHJhbnNhY3Rpb24gJHtyZWNlaXZlcklkfToke2JvcnNoXzEuYmFzZUVuY29kZSh0eEhhc2gpfSBkdWUgdG8gZXhwaXJlZCBibG9jayBoYXNoYCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlcnJvci5jb250ZXh0ID0gbmV3IHByb3ZpZGVyc18xLkVycm9yQ29udGV4dChib3JzaF8xLmJhc2VFbmNvZGUodHhIYXNoKSk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBzaG91bGQgaGF2ZSBkaWZmZXJlbnQgY29kZSBhY3R1YWxseSwgYXMgbWVhbnMgXCJ0cmFuc2FjdGlvbiBub3Qgc3VibWl0dGVkIGZvciBzdXJlXCJcbiAgICAgICAgICAgIHRocm93IG5ldyBwcm92aWRlcnNfMS5UeXBlZEVycm9yKCdub25jZSByZXRyaWVzIGV4Y2VlZGVkIGZvciB0cmFuc2FjdGlvbi4gVGhpcyB1c3VhbGx5IG1lYW5zIHRoZXJlIGFyZSB0b28gbWFueSBwYXJhbGxlbCByZXF1ZXN0cyB3aXRoIHRoZSBzYW1lIGFjY2VzcyBrZXkuJywgJ1JldHJpZXNFeGNlZWRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZsYXRMb2dzID0gW3Jlc3VsdC50cmFuc2FjdGlvbl9vdXRjb21lLCAuLi5yZXN1bHQucmVjZWlwdHNfb3V0Y29tZV0ucmVkdWNlKChhY2MsIGl0KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXQub3V0Y29tZS5sb2dzLmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgICh0eXBlb2YgaXQub3V0Y29tZS5zdGF0dXMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBpdC5vdXRjb21lLnN0YXR1cy5GYWlsdXJlID09PSAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjLmNvbmNhdCh7XG4gICAgICAgICAgICAgICAgICAgICdyZWNlaXB0SWRzJzogaXQub3V0Y29tZS5yZWNlaXB0X2lkcyxcbiAgICAgICAgICAgICAgICAgICAgJ2xvZ3MnOiBpdC5vdXRjb21lLmxvZ3MsXG4gICAgICAgICAgICAgICAgICAgICdmYWlsdXJlJzogdHlwZW9mIGl0Lm91dGNvbWUuc3RhdHVzLkZhaWx1cmUgIT0gJ3VuZGVmaW5lZCcgPyBycGNfZXJyb3JzXzEucGFyc2VScGNFcnJvcihpdC5vdXRjb21lLnN0YXR1cy5GYWlsdXJlKSA6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgICAgIHRoaXMucHJpbnRMb2dzQW5kRmFpbHVyZXMoc2lnbmVkVHgudHJhbnNhY3Rpb24ucmVjZWl2ZXJJZCwgZmxhdExvZ3MpO1xuICAgICAgICBpZiAoIXJldHVybkVycm9yICYmIHR5cGVvZiByZXN1bHQuc3RhdHVzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcmVzdWx0LnN0YXR1cy5GYWlsdXJlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gaWYgZXJyb3IgZGF0YSBoYXMgZXJyb3JfbWVzc2FnZSBhbmQgZXJyb3JfdHlwZSBwcm9wZXJ0aWVzLCB3ZSBjb25zaWRlciB0aGF0IG5vZGUgcmV0dXJuZWQgYW4gZXJyb3IgaW4gdGhlIG9sZCBmb3JtYXRcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzLkZhaWx1cmUuZXJyb3JfbWVzc2FnZSAmJiByZXN1bHQuc3RhdHVzLkZhaWx1cmUuZXJyb3JfdHlwZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBwcm92aWRlcnNfMS5UeXBlZEVycm9yKGBUcmFuc2FjdGlvbiAke3Jlc3VsdC50cmFuc2FjdGlvbl9vdXRjb21lLmlkfSBmYWlsZWQuICR7cmVzdWx0LnN0YXR1cy5GYWlsdXJlLmVycm9yX21lc3NhZ2V9YCwgcmVzdWx0LnN0YXR1cy5GYWlsdXJlLmVycm9yX3R5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcnBjX2Vycm9yc18xLnBhcnNlUmVzdWx0RXJyb3IocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPOiBpZiBUeCBpcyBVbmtub3duIG9yIFN0YXJ0ZWQuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRoZSB7QGxpbmsgQWNjZXNzS2V5Vmlld30gYXNzb2NpYXRlZCB3aXRoIHRoZSBhY2NvdW50cyB7QGxpbmsgUHVibGljS2V5fSBzdG9yZWQgaW4gdGhlIHtAbGluayBLZXlTdG9yZX0uXG4gICAgICpcbiAgICAgKiBAdG9kbyBGaW5kIG1hdGNoaW5nIGFjY2VzcyBrZXkgYmFzZWQgb24gdHJhbnNhY3Rpb24gKGkuZS4gcmVjZWl2ZXJJZCBhbmQgYWN0aW9ucylcbiAgICAgKlxuICAgICAqIEBwYXJhbSByZWNlaXZlcklkIGN1cnJlbnRseSB1bnVzZWQgKHNlZSB0b2RvKVxuICAgICAqIEBwYXJhbSBhY3Rpb25zIGN1cnJlbnRseSB1bnVzZWQgKHNlZSB0b2RvKVxuICAgICAqIEByZXR1cm5zIGB7IHB1YmxpY0tleSBQdWJsaWNLZXk7IGFjY2Vzc0tleTogQWNjZXNzS2V5VmlldyB9YFxuICAgICAqL1xuICAgIGFzeW5jIGZpbmRBY2Nlc3NLZXkocmVjZWl2ZXJJZCwgYWN0aW9ucykge1xuICAgICAgICAvLyBUT0RPOiBGaW5kIG1hdGNoaW5nIGFjY2VzcyBrZXkgYmFzZWQgb24gdHJhbnNhY3Rpb24gKGkuZS4gcmVjZWl2ZXJJZCBhbmQgYWN0aW9ucylcbiAgICAgICAgY29uc3QgcHVibGljS2V5ID0gYXdhaXQgdGhpcy5jb25uZWN0aW9uLnNpZ25lci5nZXRQdWJsaWNLZXkodGhpcy5hY2NvdW50SWQsIHRoaXMuY29ubmVjdGlvbi5uZXR3b3JrSWQpO1xuICAgICAgICBpZiAoIXB1YmxpY0tleSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FjaGVkQWNjZXNzS2V5ID0gdGhpcy5hY2Nlc3NLZXlCeVB1YmxpY0tleUNhY2hlW3B1YmxpY0tleS50b1N0cmluZygpXTtcbiAgICAgICAgaWYgKGNhY2hlZEFjY2Vzc0tleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4geyBwdWJsaWNLZXksIGFjY2Vzc0tleTogY2FjaGVkQWNjZXNzS2V5IH07XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuY29ubmVjdGlvbi5wcm92aWRlci5xdWVyeSh7XG4gICAgICAgICAgICAgICAgcmVxdWVzdF90eXBlOiAndmlld19hY2Nlc3Nfa2V5JyxcbiAgICAgICAgICAgICAgICBhY2NvdW50X2lkOiB0aGlzLmFjY291bnRJZCxcbiAgICAgICAgICAgICAgICBwdWJsaWNfa2V5OiBwdWJsaWNLZXkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBmaW5hbGl0eTogJ29wdGltaXN0aWMnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHRoaXMgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcyBhbmQgcmV0cmlldmUgdGhlIHNhbWUgYWNjZXNzIGtleVxuICAgICAgICAgICAgLy8gdGhpcyBjaGVja3MgdG8gc2VlIGlmIHRoZSBhY2Nlc3Mga2V5IHdhcyBhbHJlYWR5IHJldHJpZXZlZCBhbmQgY2FjaGVkIHdoaWxlXG4gICAgICAgICAgICAvLyB0aGUgYWJvdmUgbmV0d29yayBjYWxsIHdhcyBpbiBmbGlnaHQuIFRvIGtlZXAgbm9uY2UgdmFsdWVzIGluIGxpbmUsIHdlIHJldHVyblxuICAgICAgICAgICAgLy8gdGhlIGNhY2hlZCBhY2Nlc3Mga2V5LlxuICAgICAgICAgICAgaWYgKHRoaXMuYWNjZXNzS2V5QnlQdWJsaWNLZXlDYWNoZVtwdWJsaWNLZXkudG9TdHJpbmcoKV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBwdWJsaWNLZXksIGFjY2Vzc0tleTogdGhpcy5hY2Nlc3NLZXlCeVB1YmxpY0tleUNhY2hlW3B1YmxpY0tleS50b1N0cmluZygpXSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hY2Nlc3NLZXlCeVB1YmxpY0tleUNhY2hlW3B1YmxpY0tleS50b1N0cmluZygpXSA9IGFjY2Vzc0tleTtcbiAgICAgICAgICAgIHJldHVybiB7IHB1YmxpY0tleSwgYWNjZXNzS2V5IH07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gJ0FjY2Vzc0tleURvZXNOb3RFeGlzdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGFjY291bnQgYW5kIGRlcGxveSBhIGNvbnRyYWN0IHRvIGl0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udHJhY3RJZCBORUFSIGFjY291bnQgd2hlcmUgdGhlIGNvbnRyYWN0IGlzIGRlcGxveWVkXG4gICAgICogQHBhcmFtIHB1YmxpY0tleSBUaGUgcHVibGljIGtleSB0byBhZGQgdG8gdGhlIGNyZWF0ZWQgY29udHJhY3QgYWNjb3VudFxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBjb21waWxlZCBjb250cmFjdCBjb2RlXG4gICAgICogQHBhcmFtIGFtb3VudCBvZiBORUFSIHRvIHRyYW5zZmVyIHRvIHRoZSBjcmVhdGVkIGNvbnRyYWN0IGFjY291bnQuIFRyYW5zZmVyIGVub3VnaCB0byBwYXkgZm9yIHN0b3JhZ2UgaHR0cHM6Ly9kb2NzLm5lYXIub3JnL2RvY3MvY29uY2VwdHMvc3RvcmFnZS1zdGFraW5nXG4gICAgICovXG4gICAgYXN5bmMgY3JlYXRlQW5kRGVwbG95Q29udHJhY3QoY29udHJhY3RJZCwgcHVibGljS2V5LCBkYXRhLCBhbW91bnQpIHtcbiAgICAgICAgY29uc3QgYWNjZXNzS2V5ID0gdHJhbnNhY3Rpb25fMS5mdWxsQWNjZXNzS2V5KCk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2lnbkFuZFNlbmRUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICByZWNlaXZlcklkOiBjb250cmFjdElkLFxuICAgICAgICAgICAgYWN0aW9uczogW3RyYW5zYWN0aW9uXzEuY3JlYXRlQWNjb3VudCgpLCB0cmFuc2FjdGlvbl8xLnRyYW5zZmVyKGFtb3VudCksIHRyYW5zYWN0aW9uXzEuYWRkS2V5KGtleV9wYWlyXzEuUHVibGljS2V5LmZyb20ocHVibGljS2V5KSwgYWNjZXNzS2V5KSwgdHJhbnNhY3Rpb25fMS5kZXBsb3lDb250cmFjdChkYXRhKV1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbnRyYWN0QWNjb3VudCA9IG5ldyBBY2NvdW50KHRoaXMuY29ubmVjdGlvbiwgY29udHJhY3RJZCk7XG4gICAgICAgIHJldHVybiBjb250cmFjdEFjY291bnQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSByZWNlaXZlcklkIE5FQVIgYWNjb3VudCByZWNlaXZpbmcg4pODXG4gICAgICogQHBhcmFtIGFtb3VudCBBbW91bnQgdG8gc2VuZCBpbiB5b2N0b+KTg1xuICAgICAqL1xuICAgIGFzeW5jIHNlbmRNb25leShyZWNlaXZlcklkLCBhbW91bnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbkFuZFNlbmRUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICByZWNlaXZlcklkLFxuICAgICAgICAgICAgYWN0aW9uczogW3RyYW5zYWN0aW9uXzEudHJhbnNmZXIoYW1vdW50KV1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBuZXdBY2NvdW50SWQgTkVBUiBhY2NvdW50IG5hbWUgdG8gYmUgY3JlYXRlZFxuICAgICAqIEBwYXJhbSBwdWJsaWNLZXkgQSBwdWJsaWMga2V5IGNyZWF0ZWQgZnJvbSB0aGUgbWFzdGVyQWNjb3VudFxuICAgICAqL1xuICAgIGFzeW5jIGNyZWF0ZUFjY291bnQobmV3QWNjb3VudElkLCBwdWJsaWNLZXksIGFtb3VudCkge1xuICAgICAgICBjb25zdCBhY2Nlc3NLZXkgPSB0cmFuc2FjdGlvbl8xLmZ1bGxBY2Nlc3NLZXkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbkFuZFNlbmRUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICByZWNlaXZlcklkOiBuZXdBY2NvdW50SWQsXG4gICAgICAgICAgICBhY3Rpb25zOiBbdHJhbnNhY3Rpb25fMS5jcmVhdGVBY2NvdW50KCksIHRyYW5zYWN0aW9uXzEudHJhbnNmZXIoYW1vdW50KSwgdHJhbnNhY3Rpb25fMS5hZGRLZXkoa2V5X3BhaXJfMS5QdWJsaWNLZXkuZnJvbShwdWJsaWNLZXkpLCBhY2Nlc3NLZXkpXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGJlbmVmaWNpYXJ5SWQgVGhlIE5FQVIgYWNjb3VudCB0aGF0IHdpbGwgcmVjZWl2ZSB0aGUgcmVtYWluaW5nIOKTgyBiYWxhbmNlIGZyb20gdGhlIGFjY291bnQgYmVpbmcgZGVsZXRlZFxuICAgICAqL1xuICAgIGFzeW5jIGRlbGV0ZUFjY291bnQoYmVuZWZpY2lhcnlJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaWduQW5kU2VuZFRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIHJlY2VpdmVySWQ6IHRoaXMuYWNjb3VudElkLFxuICAgICAgICAgICAgYWN0aW9uczogW3RyYW5zYWN0aW9uXzEuZGVsZXRlQWNjb3VudChiZW5lZmljaWFyeUlkKV1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBkYXRhIFRoZSBjb21waWxlZCBjb250cmFjdCBjb2RlXG4gICAgICovXG4gICAgYXN5bmMgZGVwbG95Q29udHJhY3QoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaWduQW5kU2VuZFRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIHJlY2VpdmVySWQ6IHRoaXMuYWNjb3VudElkLFxuICAgICAgICAgICAgYWN0aW9uczogW3RyYW5zYWN0aW9uXzEuZGVwbG95Q29udHJhY3QoZGF0YSldXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbkNhbGwoLi4uYXJncykge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mdW5jdGlvbkNhbGxWMShhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZ1bmN0aW9uQ2FsbFYyKGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uQ2FsbFYxKGNvbnRyYWN0SWQsIG1ldGhvZE5hbWUsIGFyZ3MsIGdhcywgYW1vdW50KSB7XG4gICAgICAgIGNvbnN0IGRlcHJlY2F0ZSA9IGRlcGRfMS5kZWZhdWx0KCdBY2NvdW50LmZ1bmN0aW9uQ2FsbChjb250cmFjdElkLCBtZXRob2ROYW1lLCBhcmdzLCBnYXMsIGFtb3VudCknKTtcbiAgICAgICAgZGVwcmVjYXRlKCd1c2UgYEFjY291bnQuZnVuY3Rpb25DYWxsKEZ1bmN0aW9uQ2FsbE9wdGlvbnMpYCBpbnN0ZWFkJyk7XG4gICAgICAgIGFyZ3MgPSBhcmdzIHx8IHt9O1xuICAgICAgICB0aGlzLnZhbGlkYXRlQXJncyhhcmdzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbkFuZFNlbmRUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICByZWNlaXZlcklkOiBjb250cmFjdElkLFxuICAgICAgICAgICAgYWN0aW9uczogW3RyYW5zYWN0aW9uXzEuZnVuY3Rpb25DYWxsKG1ldGhvZE5hbWUsIGFyZ3MsIGdhcyB8fCBjb25zdGFudHNfMS5ERUZBVUxUX0ZVTkNUSU9OX0NBTExfR0FTLCBhbW91bnQpXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb25DYWxsVjIoeyBjb250cmFjdElkLCBtZXRob2ROYW1lLCBhcmdzID0ge30sIGdhcyA9IGNvbnN0YW50c18xLkRFRkFVTFRfRlVOQ1RJT05fQ0FMTF9HQVMsIGF0dGFjaGVkRGVwb3NpdCwgd2FsbGV0TWV0YSwgd2FsbGV0Q2FsbGJhY2tVcmwsIHN0cmluZ2lmeSB9KSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVBcmdzKGFyZ3MpO1xuICAgICAgICBjb25zdCBzdHJpbmdpZnlBcmcgPSBzdHJpbmdpZnkgPT09IHVuZGVmaW5lZCA/IHRyYW5zYWN0aW9uXzEuc3RyaW5naWZ5SnNvbk9yQnl0ZXMgOiBzdHJpbmdpZnk7XG4gICAgICAgIHJldHVybiB0aGlzLnNpZ25BbmRTZW5kVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgcmVjZWl2ZXJJZDogY29udHJhY3RJZCxcbiAgICAgICAgICAgIGFjdGlvbnM6IFt0cmFuc2FjdGlvbl8xLmZ1bmN0aW9uQ2FsbChtZXRob2ROYW1lLCBhcmdzLCBnYXMsIGF0dGFjaGVkRGVwb3NpdCwgc3RyaW5naWZ5QXJnKV0sXG4gICAgICAgICAgICB3YWxsZXRNZXRhLFxuICAgICAgICAgICAgd2FsbGV0Q2FsbGJhY2tVcmxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL2NvbmNlcHRzL2FjY291bnQjYWNjZXNzLWtleXN9XG4gICAgICogQHRvZG8gZXhwYW5kIHRoaXMgQVBJIHRvIHN1cHBvcnQgbW9yZSBvcHRpb25zLlxuICAgICAqIEBwYXJhbSBwdWJsaWNLZXkgQSBwdWJsaWMga2V5IHRvIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgY29udHJhY3RcbiAgICAgKiBAcGFyYW0gY29udHJhY3RJZCBORUFSIGFjY291bnQgd2hlcmUgdGhlIGNvbnRyYWN0IGlzIGRlcGxveWVkXG4gICAgICogQHBhcmFtIG1ldGhvZE5hbWVzIFRoZSBtZXRob2QgbmFtZXMgb24gdGhlIGNvbnRyYWN0IHRoYXQgc2hvdWxkIGJlIGFsbG93ZWQgdG8gYmUgY2FsbGVkLiBQYXNzIG51bGwgZm9yIG5vIG1ldGhvZCBuYW1lcyBhbmQgJycgb3IgW10gZm9yIGFueSBtZXRob2QgbmFtZXMuXG4gICAgICogQHBhcmFtIGFtb3VudCBQYXltZW50IGluIHlvY3Rv4pODIHRoYXQgaXMgc2VudCB0byB0aGUgY29udHJhY3QgZHVyaW5nIHRoaXMgZnVuY3Rpb24gY2FsbFxuICAgICAqL1xuICAgIGFzeW5jIGFkZEtleShwdWJsaWNLZXksIGNvbnRyYWN0SWQsIG1ldGhvZE5hbWVzLCBhbW91bnQpIHtcbiAgICAgICAgaWYgKCFtZXRob2ROYW1lcykge1xuICAgICAgICAgICAgbWV0aG9kTmFtZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobWV0aG9kTmFtZXMpKSB7XG4gICAgICAgICAgICBtZXRob2ROYW1lcyA9IFttZXRob2ROYW1lc107XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFjY2Vzc0tleTtcbiAgICAgICAgaWYgKCFjb250cmFjdElkKSB7XG4gICAgICAgICAgICBhY2Nlc3NLZXkgPSB0cmFuc2FjdGlvbl8xLmZ1bGxBY2Nlc3NLZXkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFjY2Vzc0tleSA9IHRyYW5zYWN0aW9uXzEuZnVuY3Rpb25DYWxsQWNjZXNzS2V5KGNvbnRyYWN0SWQsIG1ldGhvZE5hbWVzLCBhbW91bnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNpZ25BbmRTZW5kVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgcmVjZWl2ZXJJZDogdGhpcy5hY2NvdW50SWQsXG4gICAgICAgICAgICBhY3Rpb25zOiBbdHJhbnNhY3Rpb25fMS5hZGRLZXkoa2V5X3BhaXJfMS5QdWJsaWNLZXkuZnJvbShwdWJsaWNLZXkpLCBhY2Nlc3NLZXkpXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHB1YmxpY0tleSBUaGUgcHVibGljIGtleSB0byBiZSBkZWxldGVkXG4gICAgICogQHJldHVybnMge1Byb21pc2U8RmluYWxFeGVjdXRpb25PdXRjb21lPn1cbiAgICAgKi9cbiAgICBhc3luYyBkZWxldGVLZXkocHVibGljS2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNpZ25BbmRTZW5kVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgcmVjZWl2ZXJJZDogdGhpcy5hY2NvdW50SWQsXG4gICAgICAgICAgICBhY3Rpb25zOiBbdHJhbnNhY3Rpb25fMS5kZWxldGVLZXkoa2V5X3BhaXJfMS5QdWJsaWNLZXkuZnJvbShwdWJsaWNLZXkpKV1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL3ZhbGlkYXRvci9zdGFraW5nLW92ZXJ2aWV3fVxuICAgICAqXG4gICAgICogQHBhcmFtIHB1YmxpY0tleSBUaGUgcHVibGljIGtleSBmb3IgdGhlIGFjY291bnQgdGhhdCdzIHN0YWtpbmdcbiAgICAgKiBAcGFyYW0gYW1vdW50IFRoZSBhY2NvdW50IHRvIHN0YWtlIGluIHlvY3Rv4pODXG4gICAgICovXG4gICAgYXN5bmMgc3Rha2UocHVibGljS2V5LCBhbW91bnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbkFuZFNlbmRUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICByZWNlaXZlcklkOiB0aGlzLmFjY291bnRJZCxcbiAgICAgICAgICAgIGFjdGlvbnM6IFt0cmFuc2FjdGlvbl8xLnN0YWtlKGFtb3VudCwga2V5X3BhaXJfMS5QdWJsaWNLZXkuZnJvbShwdWJsaWNLZXkpKV1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgdmFsaWRhdGVBcmdzKGFyZ3MpIHtcbiAgICAgICAgY29uc3QgaXNVaW50OEFycmF5ID0gYXJncy5ieXRlTGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgYXJncy5ieXRlTGVuZ3RoID09PSBhcmdzLmxlbmd0aDtcbiAgICAgICAgaWYgKGlzVWludDhBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3MpIHx8IHR5cGVvZiBhcmdzICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IGVycm9yc18xLlBvc2l0aW9uYWxBcmdzRXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2UgYSBjb250cmFjdCB2aWV3IGZ1bmN0aW9uIHVzaW5nIHRoZSBSUEMgQVBJLlxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL2RldmVsb3AvZnJvbnQtZW5kL3JwYyNjYWxsLWEtY29udHJhY3QtZnVuY3Rpb259XG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udHJhY3RJZCBORUFSIGFjY291bnQgd2hlcmUgdGhlIGNvbnRyYWN0IGlzIGRlcGxveWVkXG4gICAgICogQHBhcmFtIG1ldGhvZE5hbWUgVGhlIHZpZXctb25seSBtZXRob2QgKG5vIHN0YXRlIG11dGF0aW9ucykgbmFtZSBvbiB0aGUgY29udHJhY3QgYXMgaXQgaXMgd3JpdHRlbiBpbiB0aGUgY29udHJhY3QgY29kZVxuICAgICAqIEBwYXJhbSBhcmdzIEFueSBhcmd1bWVudHMgdG8gdGhlIHZpZXcgY29udHJhY3QgbWV0aG9kLCB3cmFwcGVkIGluIEpTT05cbiAgICAgKiBAcGFyYW0gb3B0aW9ucy5wYXJzZSBQYXJzZSB0aGUgcmVzdWx0IG9mIHRoZSBjYWxsLiBSZWNlaXZlcyBhIEJ1ZmZlciAoYnl0ZXMgYXJyYXkpIGFuZCBjb252ZXJ0cyBpdCB0byBhbnkgb2JqZWN0LiBCeSBkZWZhdWx0IHJlc3VsdCB3aWxsIGJlIHRyZWF0ZWQgYXMganNvbi5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucy5zdHJpbmdpZnkgQ29udmVydCBpbnB1dCBhcmd1bWVudHMgaW50byBhIGJ5dGVzIGFycmF5LiBCeSBkZWZhdWx0IHRoZSBpbnB1dCBpcyB0cmVhdGVkIGFzIGEgSlNPTi5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIGFzeW5jIHZpZXdGdW5jdGlvbihjb250cmFjdElkLCBtZXRob2ROYW1lLCBhcmdzID0ge30sIHsgcGFyc2UgPSBwYXJzZUpzb25Gcm9tUmF3UmVzcG9uc2UsIHN0cmluZ2lmeSA9IGJ5dGVzSnNvblN0cmluZ2lmeSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZUFyZ3MoYXJncyk7XG4gICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRBcmdzID0gc3RyaW5naWZ5KGFyZ3MpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5jb25uZWN0aW9uLnByb3ZpZGVyLnF1ZXJ5KHtcbiAgICAgICAgICAgIHJlcXVlc3RfdHlwZTogJ2NhbGxfZnVuY3Rpb24nLFxuICAgICAgICAgICAgYWNjb3VudF9pZDogY29udHJhY3RJZCxcbiAgICAgICAgICAgIG1ldGhvZF9uYW1lOiBtZXRob2ROYW1lLFxuICAgICAgICAgICAgYXJnc19iYXNlNjQ6IHNlcmlhbGl6ZWRBcmdzLFxuICAgICAgICAgICAgZmluYWxpdHk6ICdvcHRpbWlzdGljJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdC5sb2dzKSB7XG4gICAgICAgICAgICB0aGlzLnByaW50TG9ncyhjb250cmFjdElkLCByZXN1bHQubG9ncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXN1bHQgJiYgcmVzdWx0LnJlc3VsdC5sZW5ndGggPiAwICYmIHBhcnNlKEJ1ZmZlci5mcm9tKHJlc3VsdC5yZXN1bHQpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc3RhdGUgKGtleSB2YWx1ZSBwYWlycykgb2YgdGhpcyBhY2NvdW50J3MgY29udHJhY3QgYmFzZWQgb24gdGhlIGtleSBwcmVmaXguXG4gICAgICogUGFzcyBhbiBlbXB0eSBzdHJpbmcgZm9yIHByZWZpeCBpZiB5b3Ugd291bGQgbGlrZSB0byByZXR1cm4gdGhlIGVudGlyZSBzdGF0ZS5cbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL2RvY3MubmVhci5vcmcvZG9jcy9kZXZlbG9wL2Zyb250LWVuZC9ycGMjdmlldy1jb250cmFjdC1zdGF0ZX1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcmVmaXggYWxsb3dzIHRvIGZpbHRlciB3aGljaCBrZXlzIHNob3VsZCBiZSByZXR1cm5lZC4gRW1wdHkgcHJlZml4IG1lYW5zIGFsbCBrZXlzLiBTdHJpbmcgcHJlZml4IGlzIHV0Zi04IGVuY29kZWQuXG4gICAgICogQHBhcmFtIGJsb2NrUXVlcnkgc3BlY2lmaWVzIHdoaWNoIGJsb2NrIHRvIHF1ZXJ5IHN0YXRlIGF0LiBCeSBkZWZhdWx0IHJldHVybnMgbGFzdCBcIm9wdGltaXN0aWNcIiBibG9jayAoaS5lLiBub3QgbmVjZXNzYXJpbHkgZmluYWxpemVkKS5cbiAgICAgKi9cbiAgICBhc3luYyB2aWV3U3RhdGUocHJlZml4LCBibG9ja1F1ZXJ5ID0geyBmaW5hbGl0eTogJ29wdGltaXN0aWMnIH0pIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMgfSA9IGF3YWl0IHRoaXMuY29ubmVjdGlvbi5wcm92aWRlci5xdWVyeSh7XG4gICAgICAgICAgICByZXF1ZXN0X3R5cGU6ICd2aWV3X3N0YXRlJyxcbiAgICAgICAgICAgIC4uLmJsb2NrUXVlcnksXG4gICAgICAgICAgICBhY2NvdW50X2lkOiB0aGlzLmFjY291bnRJZCxcbiAgICAgICAgICAgIHByZWZpeF9iYXNlNjQ6IEJ1ZmZlci5mcm9tKHByZWZpeCkudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsdWVzLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+ICh7XG4gICAgICAgICAgICBrZXk6IEJ1ZmZlci5mcm9tKGtleSwgJ2Jhc2U2NCcpLFxuICAgICAgICAgICAgdmFsdWU6IEJ1ZmZlci5mcm9tKHZhbHVlLCAnYmFzZTY0JylcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGFjY2VzcyBrZXlzIGZvciB0aGUgYWNjb3VudFxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL2RldmVsb3AvZnJvbnQtZW5kL3JwYyN2aWV3LWFjY2Vzcy1rZXktbGlzdH1cbiAgICAgKi9cbiAgICBhc3luYyBnZXRBY2Nlc3NLZXlzKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY29ubmVjdGlvbi5wcm92aWRlci5xdWVyeSh7XG4gICAgICAgICAgICByZXF1ZXN0X3R5cGU6ICd2aWV3X2FjY2Vzc19rZXlfbGlzdCcsXG4gICAgICAgICAgICBhY2NvdW50X2lkOiB0aGlzLmFjY291bnRJZCxcbiAgICAgICAgICAgIGZpbmFsaXR5OiAnb3B0aW1pc3RpYydcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEEgYnJlYWtpbmcgQVBJIGNoYW5nZSBpbnRyb2R1Y2VkIGV4dHJhIGluZm9ybWF0aW9uIGludG8gdGhlXG4gICAgICAgIC8vIHJlc3BvbnNlLCBzbyBpdCBub3cgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBhIGBrZXlzYCBmaWVsZCBpbnN0ZWFkXG4gICAgICAgIC8vIG9mIGFuIGFycmF5OiBodHRwczovL2dpdGh1Yi5jb20vbmVhcnByb3RvY29sL25lYXJjb3JlL3B1bGwvMTc4OVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNwb25zZSkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2Uua2V5cztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxpc3Qgb2YgYXV0aG9yaXplZCBhcHBzXG4gICAgICogQHRvZG8gdXBkYXRlIHRoZSByZXNwb25zZSB2YWx1ZSB0byByZXR1cm4gYWxsIHRoZSBkaWZmZXJlbnQga2V5cywgbm90IGp1c3QgYXBwIGtleXMuXG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWNjb3VudERldGFpbHMoKSB7XG4gICAgICAgIC8vIFRPRE86IHVwZGF0ZSB0aGUgcmVzcG9uc2UgdmFsdWUgdG8gcmV0dXJuIGFsbCB0aGUgZGlmZmVyZW50IGtleXMsIG5vdCBqdXN0IGFwcCBrZXlzLlxuICAgICAgICAvLyBBbHNvIGlmIHdlIG5lZWQgdGhpcyBmdW5jdGlvbiwgb3IgZ2V0QWNjZXNzS2V5cyBpcyBnb29kIGVub3VnaC5cbiAgICAgICAgY29uc3QgYWNjZXNzS2V5cyA9IGF3YWl0IHRoaXMuZ2V0QWNjZXNzS2V5cygpO1xuICAgICAgICBjb25zdCBhdXRob3JpemVkQXBwcyA9IGFjY2Vzc0tleXNcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmFjY2Vzc19rZXkucGVybWlzc2lvbiAhPT0gJ0Z1bGxBY2Nlc3MnKVxuICAgICAgICAgICAgLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBlcm0gPSBpdGVtLmFjY2Vzc19rZXkucGVybWlzc2lvbjtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29udHJhY3RJZDogcGVybS5GdW5jdGlvbkNhbGwucmVjZWl2ZXJfaWQsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBwZXJtLkZ1bmN0aW9uQ2FsbC5hbGxvd2FuY2UsXG4gICAgICAgICAgICAgICAgcHVibGljS2V5OiBpdGVtLnB1YmxpY19rZXksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgYXV0aG9yaXplZEFwcHMgfTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjYWxjdWxhdGVkIGFjY291bnQgYmFsYW5jZVxuICAgICAqL1xuICAgIGFzeW5jIGdldEFjY291bnRCYWxhbmNlKCkge1xuICAgICAgICBjb25zdCBwcm90b2NvbENvbmZpZyA9IGF3YWl0IHRoaXMuY29ubmVjdGlvbi5wcm92aWRlci5leHBlcmltZW50YWxfcHJvdG9jb2xDb25maWcoeyBmaW5hbGl0eTogJ2ZpbmFsJyB9KTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBhd2FpdCB0aGlzLnN0YXRlKCk7XG4gICAgICAgIGNvbnN0IGNvc3RQZXJCeXRlID0gbmV3IGJuX2pzXzEuZGVmYXVsdChwcm90b2NvbENvbmZpZy5ydW50aW1lX2NvbmZpZy5zdG9yYWdlX2Ftb3VudF9wZXJfYnl0ZSk7XG4gICAgICAgIGNvbnN0IHN0YXRlU3Rha2VkID0gbmV3IGJuX2pzXzEuZGVmYXVsdChzdGF0ZS5zdG9yYWdlX3VzYWdlKS5tdWwoY29zdFBlckJ5dGUpO1xuICAgICAgICBjb25zdCBzdGFrZWQgPSBuZXcgYm5fanNfMS5kZWZhdWx0KHN0YXRlLmxvY2tlZCk7XG4gICAgICAgIGNvbnN0IHRvdGFsQmFsYW5jZSA9IG5ldyBibl9qc18xLmRlZmF1bHQoc3RhdGUuYW1vdW50KS5hZGQoc3Rha2VkKTtcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlQmFsYW5jZSA9IHRvdGFsQmFsYW5jZS5zdWIoYm5fanNfMS5kZWZhdWx0Lm1heChzdGFrZWQsIHN0YXRlU3Rha2VkKSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3RhbDogdG90YWxCYWxhbmNlLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZVN0YWtlZDogc3RhdGVTdGFrZWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YWtlZDogc3Rha2VkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBhdmFpbGFibGU6IGF2YWlsYWJsZUJhbGFuY2UudG9TdHJpbmcoKVxuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMuQWNjb3VudCA9IEFjY291bnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVXJsQWNjb3VudENyZWF0b3IgPSBleHBvcnRzLkxvY2FsQWNjb3VudENyZWF0b3IgPSBleHBvcnRzLkFjY291bnRDcmVhdG9yID0gdm9pZCAwO1xuY29uc3Qgd2ViXzEgPSByZXF1aXJlKFwiLi91dGlscy93ZWJcIik7XG4vKipcbiAqIEFjY291bnQgY3JlYXRvciBwcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIGltcGxlbWVudGF0aW9ucyB0byBhY3R1YWxseSBjcmVhdGUgYWNjb3VudHNcbiAqL1xuY2xhc3MgQWNjb3VudENyZWF0b3Ige1xufVxuZXhwb3J0cy5BY2NvdW50Q3JlYXRvciA9IEFjY291bnRDcmVhdG9yO1xuY2xhc3MgTG9jYWxBY2NvdW50Q3JlYXRvciBleHRlbmRzIEFjY291bnRDcmVhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihtYXN0ZXJBY2NvdW50LCBpbml0aWFsQmFsYW5jZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1hc3RlckFjY291bnQgPSBtYXN0ZXJBY2NvdW50O1xuICAgICAgICB0aGlzLmluaXRpYWxCYWxhbmNlID0gaW5pdGlhbEJhbGFuY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gYWNjb3VudCB1c2luZyBhIG1hc3RlckFjY291bnQsIG1lYW5pbmcgdGhlIG5ldyBhY2NvdW50IGlzIGNyZWF0ZWQgZnJvbSBhbiBleGlzdGluZyBhY2NvdW50XG4gICAgICogQHBhcmFtIG5ld0FjY291bnRJZCBUaGUgbmFtZSBvZiB0aGUgTkVBUiBhY2NvdW50IHRvIGJlIGNyZWF0ZWRcbiAgICAgKiBAcGFyYW0gcHVibGljS2V5IFRoZSBwdWJsaWMga2V5IGZyb20gdGhlIG1hc3RlckFjY291bnQgdXNlZCB0byBjcmVhdGUgdGhpcyBhY2NvdW50XG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgY3JlYXRlQWNjb3VudChuZXdBY2NvdW50SWQsIHB1YmxpY0tleSkge1xuICAgICAgICBhd2FpdCB0aGlzLm1hc3RlckFjY291bnQuY3JlYXRlQWNjb3VudChuZXdBY2NvdW50SWQsIHB1YmxpY0tleSwgdGhpcy5pbml0aWFsQmFsYW5jZSk7XG4gICAgfVxufVxuZXhwb3J0cy5Mb2NhbEFjY291bnRDcmVhdG9yID0gTG9jYWxBY2NvdW50Q3JlYXRvcjtcbmNsYXNzIFVybEFjY291bnRDcmVhdG9yIGV4dGVuZHMgQWNjb3VudENyZWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbm5lY3Rpb24sIGhlbHBlclVybCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xuICAgICAgICB0aGlzLmhlbHBlclVybCA9IGhlbHBlclVybDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBhY2NvdW50IHVzaW5nIGEgaGVscGVyVXJsXG4gICAgICogVGhpcyBpcyBbaG9zdGVkIGhlcmVdKGh0dHBzOi8vaGVscGVyLm5lYXJwcm90b2NvbC5jb20pIG9yIHNldCB1cCBsb2NhbGx5IHdpdGggdGhlIFtuZWFyLWNvbnRyYWN0LWhlbHBlcl0oaHR0cHM6Ly9naXRodWIuY29tL25lYXJwcm90b2NvbC9uZWFyLWNvbnRyYWN0LWhlbHBlcikgcmVwb3NpdG9yeVxuICAgICAqIEBwYXJhbSBuZXdBY2NvdW50SWQgVGhlIG5hbWUgb2YgdGhlIE5FQVIgYWNjb3VudCB0byBiZSBjcmVhdGVkXG4gICAgICogQHBhcmFtIHB1YmxpY0tleSBUaGUgcHVibGljIGtleSBmcm9tIHRoZSBtYXN0ZXJBY2NvdW50IHVzZWQgdG8gY3JlYXRlIHRoaXMgYWNjb3VudFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIGNyZWF0ZUFjY291bnQobmV3QWNjb3VudElkLCBwdWJsaWNLZXkpIHtcbiAgICAgICAgYXdhaXQgd2ViXzEuZmV0Y2hKc29uKGAke3RoaXMuaGVscGVyVXJsfS9hY2NvdW50YCwgSlNPTi5zdHJpbmdpZnkoeyBuZXdBY2NvdW50SWQsIG5ld0FjY291bnRQdWJsaWNLZXk6IHB1YmxpY0tleS50b1N0cmluZygpIH0pKTtcbiAgICB9XG59XG5leHBvcnRzLlVybEFjY291bnRDcmVhdG9yID0gVXJsQWNjb3VudENyZWF0b3I7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFjY291bnQyRkEgPSBleHBvcnRzLkFjY291bnRNdWx0aXNpZyA9IGV4cG9ydHMuTVVMVElTSUdfQ09ORklSTV9NRVRIT0RTID0gZXhwb3J0cy5NVUxUSVNJR19DSEFOR0VfTUVUSE9EUyA9IGV4cG9ydHMuTVVMVElTSUdfREVQT1NJVCA9IGV4cG9ydHMuTVVMVElTSUdfR0FTID0gZXhwb3J0cy5NVUxUSVNJR19BTExPV0FOQ0UgPSBleHBvcnRzLk1VTFRJU0lHX1NUT1JBR0VfS0VZID0gdm9pZCAwO1xuY29uc3QgYm5fanNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYm4uanNcIikpO1xuY29uc3QgZGVwZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJkZXBkXCIpKTtcbmNvbnN0IGFjY291bnRfMSA9IHJlcXVpcmUoXCIuL2FjY291bnRcIik7XG5jb25zdCBmb3JtYXRfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2Zvcm1hdFwiKTtcbmNvbnN0IGtleV9wYWlyXzEgPSByZXF1aXJlKFwiLi91dGlscy9rZXlfcGFpclwiKTtcbmNvbnN0IHRyYW5zYWN0aW9uXzEgPSByZXF1aXJlKFwiLi90cmFuc2FjdGlvblwiKTtcbmNvbnN0IHdlYl8xID0gcmVxdWlyZShcIi4vdXRpbHMvd2ViXCIpO1xuZXhwb3J0cy5NVUxUSVNJR19TVE9SQUdFX0tFWSA9ICdfX211bHRpc2lnUmVxdWVzdCc7XG5leHBvcnRzLk1VTFRJU0lHX0FMTE9XQU5DRSA9IG5ldyBibl9qc18xLmRlZmF1bHQoZm9ybWF0XzEucGFyc2VOZWFyQW1vdW50KCcxJykpO1xuLy8gVE9ETzogRGlmZmVyZW50IGdhcyB2YWx1ZSBmb3IgZGlmZmVyZW50IHJlcXVlc3RzIChjYW4gcmVkdWNlIGdhcyB1c2FnZSBkcmFtYXRpY2FsbHkpXG5leHBvcnRzLk1VTFRJU0lHX0dBUyA9IG5ldyBibl9qc18xLmRlZmF1bHQoJzEwMDAwMDAwMDAwMDAwMCcpO1xuZXhwb3J0cy5NVUxUSVNJR19ERVBPU0lUID0gbmV3IGJuX2pzXzEuZGVmYXVsdCgnMCcpO1xuZXhwb3J0cy5NVUxUSVNJR19DSEFOR0VfTUVUSE9EUyA9IFsnYWRkX3JlcXVlc3QnLCAnYWRkX3JlcXVlc3RfYW5kX2NvbmZpcm0nLCAnZGVsZXRlX3JlcXVlc3QnLCAnY29uZmlybSddO1xuZXhwb3J0cy5NVUxUSVNJR19DT05GSVJNX01FVEhPRFMgPSBbJ2NvbmZpcm0nXTtcbi8vIGluIG1lbW9yeSByZXF1ZXN0IGNhY2hlIGZvciBub2RlIHcvbyBsb2NhbFN0b3JhZ2VcbmNvbnN0IHN0b3JhZ2VGYWxsYmFjayA9IHtcbiAgICBbZXhwb3J0cy5NVUxUSVNJR19TVE9SQUdFX0tFWV06IG51bGxcbn07XG5jbGFzcyBBY2NvdW50TXVsdGlzaWcgZXh0ZW5kcyBhY2NvdW50XzEuQWNjb3VudCB7XG4gICAgY29uc3RydWN0b3IoY29ubmVjdGlvbiwgYWNjb3VudElkLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGNvbm5lY3Rpb24sIGFjY291bnRJZCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IG9wdGlvbnMuc3RvcmFnZTtcbiAgICAgICAgdGhpcy5vbkFkZFJlcXVlc3RSZXN1bHQgPSBvcHRpb25zLm9uQWRkUmVxdWVzdFJlc3VsdDtcbiAgICB9XG4gICAgYXN5bmMgc2lnbkFuZFNlbmRUcmFuc2FjdGlvbldpdGhBY2NvdW50KHJlY2VpdmVySWQsIGFjdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnNpZ25BbmRTZW5kVHJhbnNhY3Rpb24oeyByZWNlaXZlcklkLCBhY3Rpb25zIH0pO1xuICAgIH1cbiAgICBzaWduQW5kU2VuZFRyYW5zYWN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25BbmRTZW5kVHJhbnNhY3Rpb24oeyByZWNlaXZlcklkOiBhcmdzWzBdLCBhY3Rpb25zOiBhcmdzWzFdIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduQW5kU2VuZFRyYW5zYWN0aW9uKGFyZ3NbMF0pO1xuICAgIH1cbiAgICBhc3luYyBfc2lnbkFuZFNlbmRUcmFuc2FjdGlvbih7IHJlY2VpdmVySWQsIGFjdGlvbnMgfSkge1xuICAgICAgICBjb25zdCB7IGFjY291bnRJZCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgYXJncyA9IEJ1ZmZlci5mcm9tKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICAgICAgICByZWNlaXZlcl9pZDogcmVjZWl2ZXJJZCxcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBjb252ZXJ0QWN0aW9ucyhhY3Rpb25zLCBhY2NvdW50SWQsIHJlY2VpdmVySWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHN1cGVyLnNpZ25BbmRTZW5kVHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgICAgIHJlY2VpdmVySWQ6IGFjY291bnRJZCxcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uXzEuZnVuY3Rpb25DYWxsKCdhZGRfcmVxdWVzdF9hbmRfY29uZmlybScsIGFyZ3MsIGV4cG9ydHMuTVVMVElTSUdfR0FTLCBleHBvcnRzLk1VTFRJU0lHX0RFUE9TSVQpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ0FjY291bnQgaGFzIHRvbyBtYW55IGFjdGl2ZSByZXF1ZXN0cy4gQ29uZmlybSBvciBkZWxldGUgc29tZScpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5kZWxldGVVbmNvbmZpcm1lZFJlcXVlc3RzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2lnbkFuZFNlbmRUcmFuc2FjdGlvbihyZWNlaXZlcklkLCBhY3Rpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETzogQXJlIGZvbGxvd2luZyBldmVuIG5lZWRlZD8gU2VlbXMgbGlrZSBpdCB0aHJvd3Mgb24gZXJyb3IgYWxyZWFkeVxuICAgICAgICBpZiAoIXJlc3VsdC5zdGF0dXMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWVzdCBmYWlsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGF0dXMgPSB7IC4uLnJlc3VsdC5zdGF0dXMgfTtcbiAgICAgICAgaWYgKCFzdGF0dXMuU3VjY2Vzc1ZhbHVlIHx8IHR5cGVvZiBzdGF0dXMuU3VjY2Vzc1ZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1ZXN0IGZhaWxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0UmVxdWVzdCh7XG4gICAgICAgICAgICBhY2NvdW50SWQsXG4gICAgICAgICAgICBhY3Rpb25zLFxuICAgICAgICAgICAgcmVxdWVzdElkOiBwYXJzZUludChCdWZmZXIuZnJvbShzdGF0dXMuU3VjY2Vzc1ZhbHVlLCAnYmFzZTY0JykudG9TdHJpbmcoJ2FzY2lpJyksIDEwKVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMub25BZGRSZXF1ZXN0UmVzdWx0KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm9uQWRkUmVxdWVzdFJlc3VsdChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5PVEUgdGhlcmUgaXMgbm8gYXdhaXQgb24gcHVycG9zZSB0byBhdm9pZCBibG9ja2luZyBmb3IgMmZhXG4gICAgICAgIHRoaXMuZGVsZXRlVW5jb25maXJtZWRSZXF1ZXN0cygpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBhc3luYyBkZWxldGVVbmNvbmZpcm1lZFJlcXVlc3RzKCkge1xuICAgICAgICAvLyBUT0RPOiBEZWxldGUgaW4gYmF0Y2gsIGRvbid0IGRlbGV0ZSB1bmV4cGlyZWRcbiAgICAgICAgLy8gVE9ETzogRGVsZXRlIGluIGJhdGNoLCBkb24ndCBkZWxldGUgdW5leHBpcmVkIChjYW4gcmVkdWNlIGdhcyB1c2FnZSBkcmFtYXRpY2FsbHkpXG4gICAgICAgIGNvbnN0IHJlcXVlc3RfaWRzID0gYXdhaXQgdGhpcy5nZXRSZXF1ZXN0SWRzKCk7XG4gICAgICAgIGNvbnN0IHsgcmVxdWVzdElkIH0gPSB0aGlzLmdldFJlcXVlc3QoKTtcbiAgICAgICAgZm9yIChjb25zdCByZXF1ZXN0SWRUb0RlbGV0ZSBvZiByZXF1ZXN0X2lkcykge1xuICAgICAgICAgICAgaWYgKHJlcXVlc3RJZFRvRGVsZXRlID09IHJlcXVlc3RJZCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBzdXBlci5zaWduQW5kU2VuZFRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZXJJZDogdGhpcy5hY2NvdW50SWQsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IFt0cmFuc2FjdGlvbl8xLmZ1bmN0aW9uQ2FsbCgnZGVsZXRlX3JlcXVlc3QnLCB7IHJlcXVlc3RfaWQ6IHJlcXVlc3RJZFRvRGVsZXRlIH0sIGV4cG9ydHMuTVVMVElTSUdfR0FTLCBleHBvcnRzLk1VTFRJU0lHX0RFUE9TSVQpXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0F0dGVtcHQgdG8gZGVsZXRlIGFuIGVhcmxpZXIgcmVxdWVzdCBiZWZvcmUgMTUgbWludXRlcyBmYWlsZWQuIFdpbGwgdHJ5IGFnYWluLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGhlbHBlcnNcbiAgICBhc3luYyBnZXRSZXF1ZXN0SWRzKCkge1xuICAgICAgICAvLyBUT0RPOiBSZWFkIHJlcXVlc3RzIGZyb20gc3RhdGUgdG8gYWxsb3cgZmlsdGVyaW5nIGJ5IGV4cGlyYXRpb24gdGltZVxuICAgICAgICAvLyBUT0RPOiBodHRwczovL2dpdGh1Yi5jb20vbmVhci9jb3JlLWNvbnRyYWN0cy9ibG9iLzMwNWQxZGI0ZjRmMmNmNWNlNGMxZWYzNDc5Zjc1NDQ5NTczODFmMTEvbXVsdGlzaWcvc3JjL2xpYi5ycyNMODRcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld0Z1bmN0aW9uKHRoaXMuYWNjb3VudElkLCAnbGlzdF9yZXF1ZXN0X2lkcycpO1xuICAgIH1cbiAgICBnZXRSZXF1ZXN0KCkge1xuICAgICAgICBpZiAodGhpcy5zdG9yYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0SXRlbShleHBvcnRzLk1VTFRJU0lHX1NUT1JBR0VfS0VZKSB8fCAne30nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RvcmFnZUZhbGxiYWNrW2V4cG9ydHMuTVVMVElTSUdfU1RPUkFHRV9LRVldO1xuICAgIH1cbiAgICBzZXRSZXF1ZXN0KGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcmFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5zZXRJdGVtKGV4cG9ydHMuTVVMVElTSUdfU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBzdG9yYWdlRmFsbGJhY2tbZXhwb3J0cy5NVUxUSVNJR19TVE9SQUdFX0tFWV0gPSBkYXRhO1xuICAgIH1cbn1cbmV4cG9ydHMuQWNjb3VudE11bHRpc2lnID0gQWNjb3VudE11bHRpc2lnO1xuY2xhc3MgQWNjb3VudDJGQSBleHRlbmRzIEFjY291bnRNdWx0aXNpZyB7XG4gICAgY29uc3RydWN0b3IoY29ubmVjdGlvbiwgYWNjb3VudElkLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGNvbm5lY3Rpb24sIGFjY291bnRJZCwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaGVscGVyVXJsID0gJ2h0dHBzOi8vaGVscGVyLnRlc3RuZXQubmVhci5vcmcnO1xuICAgICAgICB0aGlzLmhlbHBlclVybCA9IG9wdGlvbnMuaGVscGVyVXJsIHx8IHRoaXMuaGVscGVyVXJsO1xuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBvcHRpb25zLnN0b3JhZ2U7XG4gICAgICAgIHRoaXMuc2VuZENvZGUgPSBvcHRpb25zLnNlbmRDb2RlIHx8IHRoaXMuc2VuZENvZGVEZWZhdWx0O1xuICAgICAgICB0aGlzLmdldENvZGUgPSBvcHRpb25zLmdldENvZGUgfHwgdGhpcy5nZXRDb2RlRGVmYXVsdDtcbiAgICAgICAgdGhpcy52ZXJpZnlDb2RlID0gb3B0aW9ucy52ZXJpZnlDb2RlIHx8IHRoaXMudmVyaWZ5Q29kZURlZmF1bHQ7XG4gICAgICAgIHRoaXMub25Db25maXJtUmVzdWx0ID0gb3B0aW9ucy5vbkNvbmZpcm1SZXN1bHQ7XG4gICAgfVxuICAgIGFzeW5jIHNpZ25BbmRTZW5kVHJhbnNhY3Rpb24oLi4uYXJncykge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBkZXByZWNhdGUgPSBkZXBkXzEuZGVmYXVsdCgnQWNjb3VudC5zaWduQW5kU2VuZFRyYW5zYWN0aW9uKHJlY2VpdmVySWQsIGFjdGlvbnMnKTtcbiAgICAgICAgICAgIGRlcHJlY2F0ZSgndXNlIGBBY2NvdW50MkZBLnNpZ25BbmRTZW5kVHJhbnNhY3Rpb24oU2lnbkFuZFNlbmRUcmFuc2FjdGlvbk9wdGlvbnMpYCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3NpZ25BbmRTZW5kVHJhbnNhY3Rpb24oeyByZWNlaXZlcklkOiBhcmdzWzBdLCBhY3Rpb25zOiBhcmdzWzFdIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19zaWduQW5kU2VuZFRyYW5zYWN0aW9uKGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIF9fc2lnbkFuZFNlbmRUcmFuc2FjdGlvbih7IHJlY2VpdmVySWQsIGFjdGlvbnMgfSkge1xuICAgICAgICBhd2FpdCBzdXBlci5zaWduQW5kU2VuZFRyYW5zYWN0aW9uKHsgcmVjZWl2ZXJJZCwgYWN0aW9ucyB9KTtcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGZvbGxvd2luZyBvdmVycmlkZSBvblJlcXVlc3RSZXN1bHQgaW4gc3VwZXJjbGFzcyBpbnN0ZWFkIG9mIGRvaW5nIGN1c3RvbSBzaWduQW5kU2VuZFRyYW5zYWN0aW9uP1xuICAgICAgICBhd2FpdCB0aGlzLnNlbmRDb2RlKCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucHJvbXB0QW5kVmVyaWZ5KCk7XG4gICAgICAgIGlmICh0aGlzLm9uQ29uZmlybVJlc3VsdCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5vbkNvbmZpcm1SZXN1bHQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvLyBkZWZhdWx0IGhlbHBlcnMgZm9yIENIIGRlcGxveW1lbnRzIG9mIG11bHRpc2lnXG4gICAgYXN5bmMgZGVwbG95TXVsdGlzaWcoY29udHJhY3RCeXRlcykge1xuICAgICAgICBjb25zdCB7IGFjY291bnRJZCB9ID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2VlZE9yTGVkZ2VyS2V5ID0gKGF3YWl0IHRoaXMuZ2V0UmVjb3ZlcnlNZXRob2RzKCkpLmRhdGFcbiAgICAgICAgICAgIC5maWx0ZXIoKHsga2luZCwgcHVibGljS2V5IH0pID0+IChraW5kID09PSAncGhyYXNlJyB8fCBraW5kID09PSAnbGVkZ2VyJykgJiYgcHVibGljS2V5ICE9PSBudWxsKVxuICAgICAgICAgICAgLm1hcCgocm0pID0+IHJtLnB1YmxpY0tleSk7XG4gICAgICAgIGNvbnN0IGZhazJsYWsgPSAoYXdhaXQgdGhpcy5nZXRBY2Nlc3NLZXlzKCkpXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHB1YmxpY19rZXksIGFjY2Vzc19rZXk6IHsgcGVybWlzc2lvbiB9IH0pID0+IHBlcm1pc3Npb24gPT09ICdGdWxsQWNjZXNzJyAmJiAhc2VlZE9yTGVkZ2VyS2V5LmluY2x1ZGVzKHB1YmxpY19rZXkpKVxuICAgICAgICAgICAgLm1hcCgoYWspID0+IGFrLnB1YmxpY19rZXkpXG4gICAgICAgICAgICAubWFwKHRvUEspO1xuICAgICAgICBjb25zdCBjb25maXJtT25seUtleSA9IHRvUEsoKGF3YWl0IHRoaXMucG9zdFNpZ25lZEpzb24oJy8yZmEvZ2V0QWNjZXNzS2V5JywgeyBhY2NvdW50SWQgfSkpLnB1YmxpY0tleSk7XG4gICAgICAgIGNvbnN0IG5ld0FyZ3MgPSBCdWZmZXIuZnJvbShKU09OLnN0cmluZ2lmeSh7ICdudW1fY29uZmlybWF0aW9ucyc6IDIgfSkpO1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgICAgICAgLi4uZmFrMmxhay5tYXAoKHBrKSA9PiB0cmFuc2FjdGlvbl8xLmRlbGV0ZUtleShwaykpLFxuICAgICAgICAgICAgLi4uZmFrMmxhay5tYXAoKHBrKSA9PiB0cmFuc2FjdGlvbl8xLmFkZEtleShwaywgdHJhbnNhY3Rpb25fMS5mdW5jdGlvbkNhbGxBY2Nlc3NLZXkoYWNjb3VudElkLCBleHBvcnRzLk1VTFRJU0lHX0NIQU5HRV9NRVRIT0RTLCBudWxsKSkpLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25fMS5hZGRLZXkoY29uZmlybU9ubHlLZXksIHRyYW5zYWN0aW9uXzEuZnVuY3Rpb25DYWxsQWNjZXNzS2V5KGFjY291bnRJZCwgZXhwb3J0cy5NVUxUSVNJR19DT05GSVJNX01FVEhPRFMsIG51bGwpKSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uXzEuZGVwbG95Q29udHJhY3QoY29udHJhY3RCeXRlcyksXG4gICAgICAgIF07XG4gICAgICAgIGlmICgoYXdhaXQgdGhpcy5zdGF0ZSgpKS5jb2RlX2hhc2ggPT09ICcxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMScpIHtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaCh0cmFuc2FjdGlvbl8xLmZ1bmN0aW9uQ2FsbCgnbmV3JywgbmV3QXJncywgZXhwb3J0cy5NVUxUSVNJR19HQVMsIGV4cG9ydHMuTVVMVElTSUdfREVQT1NJVCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdkZXBsb3lpbmcgbXVsdGlzaWcgY29udHJhY3QgZm9yJywgYWNjb3VudElkKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHN1cGVyLnNpZ25BbmRTZW5kVHJhbnNhY3Rpb25XaXRoQWNjb3VudChhY2NvdW50SWQsIGFjdGlvbnMpO1xuICAgIH1cbiAgICBhc3luYyBkaXNhYmxlKGNvbnRyYWN0Qnl0ZXMpIHtcbiAgICAgICAgY29uc3QgeyBhY2NvdW50SWQgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGFjY2Vzc0tleXMgPSBhd2FpdCB0aGlzLmdldEFjY2Vzc0tleXMoKTtcbiAgICAgICAgY29uc3QgbGFrMmZhayA9IGFjY2Vzc0tleXNcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgYWNjZXNzX2tleSB9KSA9PiBhY2Nlc3Nfa2V5LnBlcm1pc3Npb24gIT09ICdGdWxsQWNjZXNzJylcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgYWNjZXNzX2tleSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwZXJtID0gYWNjZXNzX2tleS5wZXJtaXNzaW9uLkZ1bmN0aW9uQ2FsbDtcbiAgICAgICAgICAgIHJldHVybiBwZXJtLnJlY2VpdmVyX2lkID09PSBhY2NvdW50SWQgJiZcbiAgICAgICAgICAgICAgICBwZXJtLm1ldGhvZF9uYW1lcy5sZW5ndGggPT09IDQgJiZcbiAgICAgICAgICAgICAgICBwZXJtLm1ldGhvZF9uYW1lcy5pbmNsdWRlcygnYWRkX3JlcXVlc3RfYW5kX2NvbmZpcm0nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1Pbmx5S2V5ID0ga2V5X3BhaXJfMS5QdWJsaWNLZXkuZnJvbSgoYXdhaXQgdGhpcy5wb3N0U2lnbmVkSnNvbignLzJmYS9nZXRBY2Nlc3NLZXknLCB7IGFjY291bnRJZCB9KSkucHVibGljS2V5KTtcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uXzEuZGVsZXRlS2V5KGNvbmZpcm1Pbmx5S2V5KSxcbiAgICAgICAgICAgIC4uLmxhazJmYWsubWFwKCh7IHB1YmxpY19rZXkgfSkgPT4gdHJhbnNhY3Rpb25fMS5kZWxldGVLZXkoa2V5X3BhaXJfMS5QdWJsaWNLZXkuZnJvbShwdWJsaWNfa2V5KSkpLFxuICAgICAgICAgICAgLi4ubGFrMmZhay5tYXAoKHsgcHVibGljX2tleSB9KSA9PiB0cmFuc2FjdGlvbl8xLmFkZEtleShrZXlfcGFpcl8xLlB1YmxpY0tleS5mcm9tKHB1YmxpY19rZXkpLCBudWxsKSksXG4gICAgICAgICAgICB0cmFuc2FjdGlvbl8xLmRlcGxveUNvbnRyYWN0KGNvbnRyYWN0Qnl0ZXMpLFxuICAgICAgICBdO1xuICAgICAgICBjb25zb2xlLmxvZygnZGlzYWJsaW5nIDJmYSBmb3InLCBhY2NvdW50SWQpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zaWduQW5kU2VuZFRyYW5zYWN0aW9uKHtcbiAgICAgICAgICAgIHJlY2VpdmVySWQ6IGFjY291bnRJZCxcbiAgICAgICAgICAgIGFjdGlvbnNcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHNlbmRDb2RlRGVmYXVsdCgpIHtcbiAgICAgICAgY29uc3QgeyBhY2NvdW50SWQgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgcmVxdWVzdElkIH0gPSB0aGlzLmdldFJlcXVlc3QoKTtcbiAgICAgICAgY29uc3QgbWV0aG9kID0gYXdhaXQgdGhpcy5nZXQyZmFNZXRob2QoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5wb3N0U2lnbmVkSnNvbignLzJmYS9zZW5kJywge1xuICAgICAgICAgICAgYWNjb3VudElkLFxuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgcmVxdWVzdElkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RJZDtcbiAgICB9XG4gICAgYXN5bmMgZ2V0Q29kZURlZmF1bHQobWV0aG9kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgaXMgbm8gZ2V0Q29kZSBjYWxsYmFjayBwcm92aWRlZC4gUGxlYXNlIHByb3ZpZGUgeW91ciBvd24gaW4gQWNjb3VudE11bHRpc2lnIGNvbnN0cnVjdG9yIG9wdGlvbnMuIEl0IGhhcyBhIHBhcmFtZXRlciBtZXRob2Qgd2hlcmUgbWV0aG9kLmtpbmQgaXMgXCJlbWFpbFwiIG9yIFwicGhvbmVcIi4nKTtcbiAgICB9XG4gICAgYXN5bmMgcHJvbXB0QW5kVmVyaWZ5KCkge1xuICAgICAgICBjb25zdCBtZXRob2QgPSBhd2FpdCB0aGlzLmdldDJmYU1ldGhvZCgpO1xuICAgICAgICBjb25zdCBzZWN1cml0eUNvZGUgPSBhd2FpdCB0aGlzLmdldENvZGUobWV0aG9kKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMudmVyaWZ5Q29kZShzZWN1cml0eUNvZGUpO1xuICAgICAgICAgICAgLy8gVE9ETzogUGFyc2UgZXJyb3IgZnJvbSByZXN1bHQgZm9yIHJlYWwgKGxpa2UgaW4gbm9ybWFsIGFjY291bnQuc2lnbkFuZFNlbmRUcmFuc2FjdGlvbilcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyb3IgdmFsaWRhdGluZyBzZWN1cml0eSBjb2RlOicsIGUpO1xuICAgICAgICAgICAgaWYgKGUudG9TdHJpbmcoKS5pbmNsdWRlcygnaW52YWxpZCAyZmEgY29kZSBwcm92aWRlZCcpIHx8IGUudG9TdHJpbmcoKS5pbmNsdWRlcygnMmZhIGNvZGUgbm90IHZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5wcm9tcHRBbmRWZXJpZnkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgdmVyaWZ5Q29kZURlZmF1bHQoc2VjdXJpdHlDb2RlKSB7XG4gICAgICAgIGNvbnN0IHsgYWNjb3VudElkIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5nZXRSZXF1ZXN0KCk7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyByZXF1ZXN0IHBlbmRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHJlcXVlc3RJZCB9ID0gcmVxdWVzdDtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucG9zdFNpZ25lZEpzb24oJy8yZmEvdmVyaWZ5Jywge1xuICAgICAgICAgICAgYWNjb3VudElkLFxuICAgICAgICAgICAgc2VjdXJpdHlDb2RlLFxuICAgICAgICAgICAgcmVxdWVzdElkXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBnZXRSZWNvdmVyeU1ldGhvZHMoKSB7XG4gICAgICAgIGNvbnN0IHsgYWNjb3VudElkIH0gPSB0aGlzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWNjb3VudElkLFxuICAgICAgICAgICAgZGF0YTogYXdhaXQgdGhpcy5wb3N0U2lnbmVkSnNvbignL2FjY291bnQvcmVjb3ZlcnlNZXRob2RzJywgeyBhY2NvdW50SWQgfSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0MmZhTWV0aG9kKCkge1xuICAgICAgICBsZXQgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmdldFJlY292ZXJ5TWV0aG9kcygpO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgZGF0YSA9IGRhdGEuZmluZCgobSkgPT4gbS5raW5kLmluZGV4T2YoJzJmYS0nKSA9PT0gMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkYXRhKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IHsga2luZCwgZGV0YWlsIH0gPSBkYXRhO1xuICAgICAgICByZXR1cm4geyBraW5kLCBkZXRhaWwgfTtcbiAgICB9XG4gICAgYXN5bmMgc2lnbmF0dXJlRm9yKCkge1xuICAgICAgICBjb25zdCB7IGFjY291bnRJZCB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgYmxvY2sgPSBhd2FpdCB0aGlzLmNvbm5lY3Rpb24ucHJvdmlkZXIuYmxvY2soeyBmaW5hbGl0eTogJ2ZpbmFsJyB9KTtcbiAgICAgICAgY29uc3QgYmxvY2tOdW1iZXIgPSBibG9jay5oZWFkZXIuaGVpZ2h0LnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IHNpZ25lZCA9IGF3YWl0IHRoaXMuY29ubmVjdGlvbi5zaWduZXIuc2lnbk1lc3NhZ2UoQnVmZmVyLmZyb20oYmxvY2tOdW1iZXIpLCBhY2NvdW50SWQsIHRoaXMuY29ubmVjdGlvbi5uZXR3b3JrSWQpO1xuICAgICAgICBjb25zdCBibG9ja051bWJlclNpZ25hdHVyZSA9IEJ1ZmZlci5mcm9tKHNpZ25lZC5zaWduYXR1cmUpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgcmV0dXJuIHsgYmxvY2tOdW1iZXIsIGJsb2NrTnVtYmVyU2lnbmF0dXJlIH07XG4gICAgfVxuICAgIGFzeW5jIHBvc3RTaWduZWRKc29uKHBhdGgsIGJvZHkpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHdlYl8xLmZldGNoSnNvbih0aGlzLmhlbHBlclVybCArIHBhdGgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIC4uLmJvZHksXG4gICAgICAgICAgICAuLi4oYXdhaXQgdGhpcy5zaWduYXR1cmVGb3IoKSlcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuQWNjb3VudDJGQSA9IEFjY291bnQyRkE7XG4vLyBoZWxwZXJzXG5jb25zdCB0b1BLID0gKHBrKSA9PiBrZXlfcGFpcl8xLlB1YmxpY0tleS5mcm9tKHBrKTtcbmNvbnN0IGNvbnZlcnRQS0ZvckNvbnRyYWN0ID0gKHBrKSA9PiBway50b1N0cmluZygpLnJlcGxhY2UoJ2VkMjU1MTk6JywgJycpO1xuY29uc3QgY29udmVydEFjdGlvbnMgPSAoYWN0aW9ucywgYWNjb3VudElkLCByZWNlaXZlcklkKSA9PiBhY3Rpb25zLm1hcCgoYSkgPT4ge1xuICAgIGNvbnN0IHR5cGUgPSBhLmVudW07XG4gICAgY29uc3QgeyBnYXMsIHB1YmxpY0tleSwgbWV0aG9kTmFtZSwgYXJncywgZGVwb3NpdCwgYWNjZXNzS2V5LCBjb2RlIH0gPSBhW3R5cGVdO1xuICAgIGNvbnN0IGFjdGlvbiA9IHtcbiAgICAgICAgdHlwZTogdHlwZVswXS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zdWJzdHIoMSksXG4gICAgICAgIGdhczogKGdhcyAmJiBnYXMudG9TdHJpbmcoKSkgfHwgdW5kZWZpbmVkLFxuICAgICAgICBwdWJsaWNfa2V5OiAocHVibGljS2V5ICYmIGNvbnZlcnRQS0ZvckNvbnRyYWN0KHB1YmxpY0tleSkpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgbWV0aG9kX25hbWU6IG1ldGhvZE5hbWUsXG4gICAgICAgIGFyZ3M6IChhcmdzICYmIEJ1ZmZlci5mcm9tKGFyZ3MpLnRvU3RyaW5nKCdiYXNlNjQnKSkgfHwgdW5kZWZpbmVkLFxuICAgICAgICBjb2RlOiAoY29kZSAmJiBCdWZmZXIuZnJvbShjb2RlKS50b1N0cmluZygnYmFzZTY0JykpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgYW1vdW50OiAoZGVwb3NpdCAmJiBkZXBvc2l0LnRvU3RyaW5nKCkpIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgZGVwb3NpdDogKGRlcG9zaXQgJiYgZGVwb3NpdC50b1N0cmluZygpKSB8fCAnMCcsXG4gICAgICAgIHBlcm1pc3Npb246IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIGlmIChhY2Nlc3NLZXkpIHtcbiAgICAgICAgaWYgKHJlY2VpdmVySWQgPT09IGFjY291bnRJZCAmJiBhY2Nlc3NLZXkucGVybWlzc2lvbi5lbnVtICE9PSAnZnVsbEFjY2VzcycpIHtcbiAgICAgICAgICAgIGFjdGlvbi5wZXJtaXNzaW9uID0ge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyX2lkOiBhY2NvdW50SWQsXG4gICAgICAgICAgICAgICAgYWxsb3dhbmNlOiBleHBvcnRzLk1VTFRJU0lHX0FMTE9XQU5DRS50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIG1ldGhvZF9uYW1lczogZXhwb3J0cy5NVUxUSVNJR19DSEFOR0VfTUVUSE9EUyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjY2Vzc0tleS5wZXJtaXNzaW9uLmVudW0gPT09ICdmdW5jdGlvbkNhbGwnKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJlY2VpdmVySWQ6IHJlY2VpdmVyX2lkLCBtZXRob2ROYW1lczogbWV0aG9kX25hbWVzLCBhbGxvd2FuY2UgfSA9IGFjY2Vzc0tleS5wZXJtaXNzaW9uLmZ1bmN0aW9uQ2FsbDtcbiAgICAgICAgICAgIGFjdGlvbi5wZXJtaXNzaW9uID0ge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyX2lkLFxuICAgICAgICAgICAgICAgIGFsbG93YW5jZTogKGFsbG93YW5jZSAmJiBhbGxvd2FuY2UudG9TdHJpbmcoKSkgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG1ldGhvZF9uYW1lc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYWN0aW9uO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29ubmVjdCA9IHZvaWQgMDtcbi8qKlxuICogQ29ubmVjdCB0byBORUFSIHVzaW5nIHRoZSBwcm92aWRlZCBjb25maWd1cmF0aW9uLlxuICpcbiAqIHtAbGluayBDb25uZWN0Q29uZmlnLm5ldHdvcmtJZH0gYW5kIHtAbGluayBDb25uZWN0Q29uZmlnLm5vZGVVcmx9IGFyZSByZXF1aXJlZC5cbiAqXG4gKiBUbyBzaWduIHRyYW5zYWN0aW9ucyB5b3UgY2FuIGFsc28gcGFzczoge0BsaW5rIENvbm5lY3RDb25maWcua2V5U3RvcmV9XG4gKlxuICogQm90aCBhcmUgcGFzc2VkIHRoZXkgYXJlIHByaW9yaXRpemUgaW4gdGhhdCBvcmRlci5cbiAqXG4gKiBAc2VlIHtAbGluayBDb25uZWN0Q29uZmlnfVxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBhc3luYyBmdW5jdGlvbiBpbml0TmVhcigpIHtcbiAqICAgY29uc3QgbmVhciA9IGF3YWl0IGNvbm5lY3Qoe1xuICogICAgICBuZXR3b3JrSWQ6ICd0ZXN0bmV0JyxcbiAqICAgICAgbm9kZVVybDogJ2h0dHBzOi8vcnBjLnRlc3RuZXQubmVhci5vcmcnXG4gKiAgIH0pXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAbW9kdWxlIGJyb3dzZXJDb25uZWN0XG4gKi9cbmNvbnN0IG5lYXJfMSA9IHJlcXVpcmUoXCIuL25lYXJcIik7XG4vKipcbiAqIEluaXRpYWxpemUgY29ubmVjdGlvbiB0byBOZWFyIG5ldHdvcmsuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoY29uZmlnKSB7XG4gICAgcmV0dXJuIG5ldyBuZWFyXzEuTmVhcihjb25maWcpO1xufVxuZXhwb3J0cy5jb25uZWN0ID0gY29ubmVjdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcbn0pIDogZnVuY3Rpb24obywgdikge1xuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcbn0pO1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqIEBoaWRkZW4gQG1vZHVsZSAqL1xuZXhwb3J0cy5rZXlTdG9yZXMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4va2V5X3N0b3Jlcy9icm93c2VyLWluZGV4XCIpKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb21tb24taW5kZXhcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2Jyb3dzZXItY29ubmVjdFwiKSwgZXhwb3J0cyk7XG5yZXF1aXJlKFwiZXJyb3ItcG9seWZpbGxcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLldhbGxldENvbm5lY3Rpb24gPSBleHBvcnRzLldhbGxldEFjY291bnQgPSBleHBvcnRzLkNvbm5lY3RlZFdhbGxldEFjY291bnQgPSBleHBvcnRzLk5lYXIgPSBleHBvcnRzLktleVBhaXIgPSBleHBvcnRzLlNpZ25lciA9IGV4cG9ydHMuSW5NZW1vcnlTaWduZXIgPSBleHBvcnRzLkNvbnRyYWN0ID0gZXhwb3J0cy5Db25uZWN0aW9uID0gZXhwb3J0cy5BY2NvdW50ID0gZXhwb3J0cy5tdWx0aXNpZyA9IGV4cG9ydHMudmFsaWRhdG9ycyA9IGV4cG9ydHMudHJhbnNhY3Rpb25zID0gZXhwb3J0cy51dGlscyA9IGV4cG9ydHMucHJvdmlkZXJzID0gZXhwb3J0cy5hY2NvdW50Q3JlYXRvciA9IHZvaWQgMDtcbi8qKiBAaGlkZGVuIEBtb2R1bGUgKi9cbmNvbnN0IHByb3ZpZGVycyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9wcm92aWRlcnNcIikpO1xuZXhwb3J0cy5wcm92aWRlcnMgPSBwcm92aWRlcnM7XG5jb25zdCB1dGlscyA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi91dGlsc1wiKSk7XG5leHBvcnRzLnV0aWxzID0gdXRpbHM7XG5jb25zdCB0cmFuc2FjdGlvbnMgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdHJhbnNhY3Rpb25cIikpO1xuZXhwb3J0cy50cmFuc2FjdGlvbnMgPSB0cmFuc2FjdGlvbnM7XG5jb25zdCB2YWxpZGF0b3JzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3ZhbGlkYXRvcnNcIikpO1xuZXhwb3J0cy52YWxpZGF0b3JzID0gdmFsaWRhdG9ycztcbmNvbnN0IGFjY291bnRfMSA9IHJlcXVpcmUoXCIuL2FjY291bnRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBY2NvdW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhY2NvdW50XzEuQWNjb3VudDsgfSB9KTtcbmNvbnN0IG11bHRpc2lnID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2FjY291bnRfbXVsdGlzaWdcIikpO1xuZXhwb3J0cy5tdWx0aXNpZyA9IG11bHRpc2lnO1xuY29uc3QgYWNjb3VudENyZWF0b3IgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vYWNjb3VudF9jcmVhdG9yXCIpKTtcbmV4cG9ydHMuYWNjb3VudENyZWF0b3IgPSBhY2NvdW50Q3JlYXRvcjtcbmNvbnN0IGNvbm5lY3Rpb25fMSA9IHJlcXVpcmUoXCIuL2Nvbm5lY3Rpb25cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDb25uZWN0aW9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb25uZWN0aW9uXzEuQ29ubmVjdGlvbjsgfSB9KTtcbmNvbnN0IHNpZ25lcl8xID0gcmVxdWlyZShcIi4vc2lnbmVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU2lnbmVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzaWduZXJfMS5TaWduZXI7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJJbk1lbW9yeVNpZ25lclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2lnbmVyXzEuSW5NZW1vcnlTaWduZXI7IH0gfSk7XG5jb25zdCBjb250cmFjdF8xID0gcmVxdWlyZShcIi4vY29udHJhY3RcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJDb250cmFjdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udHJhY3RfMS5Db250cmFjdDsgfSB9KTtcbmNvbnN0IGtleV9wYWlyXzEgPSByZXF1aXJlKFwiLi91dGlscy9rZXlfcGFpclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIktleVBhaXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGtleV9wYWlyXzEuS2V5UGFpcjsgfSB9KTtcbmNvbnN0IG5lYXJfMSA9IHJlcXVpcmUoXCIuL25lYXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJOZWFyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZWFyXzEuTmVhcjsgfSB9KTtcbi8vIFRPRE86IERlcHJlY2F0ZSBhbmQgcmVtb3ZlIFdhbGxldEFjY291bnRcbmNvbnN0IHdhbGxldF9hY2NvdW50XzEgPSByZXF1aXJlKFwiLi93YWxsZXQtYWNjb3VudFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkNvbm5lY3RlZFdhbGxldEFjY291bnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdhbGxldF9hY2NvdW50XzEuQ29ubmVjdGVkV2FsbGV0QWNjb3VudDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIldhbGxldEFjY291bnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdhbGxldF9hY2NvdW50XzEuV2FsbGV0QWNjb3VudDsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIldhbGxldENvbm5lY3Rpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHdhbGxldF9hY2NvdW50XzEuV2FsbGV0Q29ubmVjdGlvbjsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db25uZWN0aW9uID0gdm9pZCAwO1xuY29uc3QgcHJvdmlkZXJzXzEgPSByZXF1aXJlKFwiLi9wcm92aWRlcnNcIik7XG5jb25zdCBzaWduZXJfMSA9IHJlcXVpcmUoXCIuL3NpZ25lclwiKTtcbi8qKlxuICogQHBhcmFtIGNvbmZpZyBDb250YWlucyBjb25uZWN0aW9uIGluZm8gZGV0YWlsc1xuICogQHJldHVybnMge1Byb3ZpZGVyfVxuICovXG5mdW5jdGlvbiBnZXRQcm92aWRlcihjb25maWcpIHtcbiAgICBzd2l0Y2ggKGNvbmZpZy50eXBlKSB7XG4gICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgY2FzZSAnSnNvblJwY1Byb3ZpZGVyJzogcmV0dXJuIG5ldyBwcm92aWRlcnNfMS5Kc29uUnBjUHJvdmlkZXIoeyAuLi5jb25maWcuYXJncyB9KTtcbiAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHByb3ZpZGVyIHR5cGUgJHtjb25maWcudHlwZX1gKTtcbiAgICB9XG59XG4vKipcbiAqIEBwYXJhbSBjb25maWcgQ29udGFpbnMgY29ubmVjdGlvbiBpbmZvIGRldGFpbHNcbiAqIEByZXR1cm5zIHtTaWduZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldFNpZ25lcihjb25maWcpIHtcbiAgICBzd2l0Y2ggKGNvbmZpZy50eXBlKSB7XG4gICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgY2FzZSAnSW5NZW1vcnlTaWduZXInOiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IHNpZ25lcl8xLkluTWVtb3J5U2lnbmVyKGNvbmZpZy5rZXlTdG9yZSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHNpZ25lciB0eXBlICR7Y29uZmlnLnR5cGV9YCk7XG4gICAgfVxufVxuLyoqXG4gKiBDb25uZWN0cyBhbiBhY2NvdW50IHRvIGEgZ2l2ZW4gbmV0d29yayB2aWEgYSBnaXZlbiBwcm92aWRlclxuICovXG5jbGFzcyBDb25uZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihuZXR3b3JrSWQsIHByb3ZpZGVyLCBzaWduZXIpIHtcbiAgICAgICAgdGhpcy5uZXR3b3JrSWQgPSBuZXR3b3JrSWQ7XG4gICAgICAgIHRoaXMucHJvdmlkZXIgPSBwcm92aWRlcjtcbiAgICAgICAgdGhpcy5zaWduZXIgPSBzaWduZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb25maWcgQ29udGFpbnMgY29ubmVjdGlvbiBpbmZvIGRldGFpbHNcbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbUNvbmZpZyhjb25maWcpIHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBnZXRQcm92aWRlcihjb25maWcucHJvdmlkZXIpO1xuICAgICAgICBjb25zdCBzaWduZXIgPSBnZXRTaWduZXIoY29uZmlnLnNpZ25lcik7XG4gICAgICAgIHJldHVybiBuZXcgQ29ubmVjdGlvbihjb25maWcubmV0d29ya0lkLCBwcm92aWRlciwgc2lnbmVyKTtcbiAgICB9XG59XG5leHBvcnRzLkNvbm5lY3Rpb24gPSBDb25uZWN0aW9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRFRkFVTFRfRlVOQ1RJT05fQ0FMTF9HQVMgPSB2b2lkIDA7XG5jb25zdCBibl9qc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJibi5qc1wiKSk7XG4vLyBEZWZhdWx0IGFtb3VudCBvZiBnYXMgdG8gYmUgc2VudCB3aXRoIHRoZSBmdW5jdGlvbiBjYWxscy4gVXNlZCB0byBwYXkgZm9yIHRoZSBmZWVzXG4vLyBpbmN1cnJlZCB3aGlsZSBydW5uaW5nIHRoZSBjb250cmFjdCBleGVjdXRpb24uIFRoZSB1bnVzZWQgYW1vdW50IHdpbGwgYmUgcmVmdW5kZWQgYmFjayB0b1xuLy8gdGhlIG9yaWdpbmF0b3IuXG4vLyBEdWUgdG8gcHJvdG9jb2wgY2hhbmdlcyB0aGF0IGNoYXJnZSB1cGZyb250IGZvciB0aGUgbWF4aW11bSBwb3NzaWJsZSBnYXMgcHJpY2UgaW5mbGF0aW9uIGR1ZSB0b1xuLy8gZnVsbCBibG9ja3MsIHRoZSBwcmljZSBvZiBtYXhfcHJlcGFpZF9nYXMgaXMgZGVjcmVhc2VkIHRvIGAzMDAgKiAxMCoqMTJgLlxuLy8gRm9yIGRpc2N1c3Npb24gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWFycHJvdG9jb2wvTkVQcy9pc3N1ZXMvNjdcbmV4cG9ydHMuREVGQVVMVF9GVU5DVElPTl9DQUxMX0dBUyA9IG5ldyBibl9qc18xLmRlZmF1bHQoJzMwMDAwMDAwMDAwMDAwJyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29udHJhY3QgPSB2b2lkIDA7XG5jb25zdCBibl9qc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJibi5qc1wiKSk7XG5jb25zdCBkZXBkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRlcGRcIikpO1xuY29uc3QgcHJvdmlkZXJzXzEgPSByZXF1aXJlKFwiLi9wcm92aWRlcnNcIik7XG5jb25zdCBlcnJvcnNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2Vycm9yc1wiKTtcbi8vIE1ha2VzIGBmdW5jdGlvbi5uYW1lYCByZXR1cm4gZ2l2ZW4gbmFtZVxuZnVuY3Rpb24gbmFtZUZ1bmN0aW9uKG5hbWUsIGJvZHkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBbbmFtZV0oLi4uYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIGJvZHkoLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9W25hbWVdO1xufVxuY29uc3QgaXNVaW50OEFycmF5ID0gKHgpID0+IHggJiYgeC5ieXRlTGVuZ3RoICE9PSB1bmRlZmluZWQgJiYgeC5ieXRlTGVuZ3RoID09PSB4Lmxlbmd0aDtcbmNvbnN0IGlzT2JqZWN0ID0gKHgpID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG4vKipcbiAqIERlZmluZXMgYSBzbWFydCBjb250cmFjdCBvbiBORUFSIGluY2x1ZGluZyB0aGUgY2hhbmdlIChtdXRhYmxlKSBhbmQgdmlldyAobm9uLW11dGFibGUpIG1ldGhvZHNcbiAqXG4gKiBAZXhhbXBsZSB7QGxpbmsgaHR0cHM6Ly9kb2NzLm5lYXIub3JnL2RvY3MvZGV2ZWxvcC9mcm9udC1lbmQvbmFqLXF1aWNrLXJlZmVyZW5jZSNjb250cmFjdH1cbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogaW1wb3J0IHsgQ29udHJhY3QgfSBmcm9tICduZWFyLWFwaS1qcyc7XG4gKlxuICogYXN5bmMgZnVuY3Rpb24gY29udHJhY3RFeGFtcGxlKCkge1xuICogICBjb25zdCBtZXRob2RPcHRpb25zID0ge1xuICogICAgIHZpZXdNZXRob2RzOiBbJ2dldE1lc3NhZ2VCeUFjY291bnRJZCddLFxuICogICAgIGNoYW5nZU1ldGhvZHM6IFsnYWRkTWVzc2FnZSddXG4gKiAgIH07XG4gKiAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KFxuICogICAgIHdhbGxldC5hY2NvdW50KCksXG4gKiAgICAgJ2NvbnRyYWN0LWlkLnRlc3RuZXQnLFxuICogICAgIG1ldGhvZE9wdGlvbnNcbiAqICAgKTtcbiAqXG4gKiAgIC8vIHVzZSBhIGNvbnRyYWN0IHZpZXcgbWV0aG9kXG4gKiAgIGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgY29udHJhY3QuZ2V0TWVzc2FnZXMoe1xuICogICAgIGFjY291bnRJZDogJ2V4YW1wbGUtYWNjb3VudC50ZXN0bmV0J1xuICogICB9KTtcbiAqXG4gKiAgIC8vIHVzZSBhIGNvbnRyYWN0IGNoYW5nZSBtZXRob2RcbiAqICAgYXdhaXQgY29udHJhY3QuYWRkTWVzc2FnZSh7XG4gKiAgICAgIG1ldGE6ICdzb21lIGluZm8nLFxuICogICAgICBjYWxsYmFja1VybDogJ2h0dHBzOi8vZXhhbXBsZS5jb20vY2FsbGJhY2snLFxuICogICAgICBhcmdzOiB7IHRleHQ6ICdteSBtZXNzYWdlJyB9LFxuICogICAgICBhbW91bnQ6IDFcbiAqICAgfSlcbiAqIH1cbiAqIGBgYFxuICovXG5jbGFzcyBDb250cmFjdCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGFjY291bnQgTkVBUiBhY2NvdW50IHRvIHNpZ24gY2hhbmdlIG1ldGhvZCB0cmFuc2FjdGlvbnNcbiAgICAgKiBAcGFyYW0gY29udHJhY3RJZCBORUFSIGFjY291bnQgaWQgd2hlcmUgdGhlIGNvbnRyYWN0IGlzIGRlcGxveWVkXG4gICAgICogQHBhcmFtIG9wdGlvbnMgTkVBUiBzbWFydCBjb250cmFjdCBtZXRob2RzIHRoYXQgeW91ciBhcHBsaWNhdGlvbiB3aWxsIHVzZS4gVGhlc2Ugd2lsbCBiZSBhdmFpbGFibGUgYXMgYGNvbnRyYWN0Lm1ldGhvZE5hbWVgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYWNjb3VudCwgY29udHJhY3RJZCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmFjY291bnQgPSBhY2NvdW50O1xuICAgICAgICB0aGlzLmNvbnRyYWN0SWQgPSBjb250cmFjdElkO1xuICAgICAgICBjb25zdCB7IHZpZXdNZXRob2RzID0gW10sIGNoYW5nZU1ldGhvZHMgPSBbXSB9ID0gb3B0aW9ucztcbiAgICAgICAgdmlld01ldGhvZHMuZm9yRWFjaCgobWV0aG9kTmFtZSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG1ldGhvZE5hbWUsIHtcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmFtZUZ1bmN0aW9uKG1ldGhvZE5hbWUsIGFzeW5jIChhcmdzID0ge30sIG9wdGlvbnMgPSB7fSwgLi4uaWdub3JlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWdub3JlZC5sZW5ndGggfHwgIShpc09iamVjdChhcmdzKSB8fCBpc1VpbnQ4QXJyYXkoYXJncykpIHx8ICFpc09iamVjdChvcHRpb25zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IGVycm9yc18xLlBvc2l0aW9uYWxBcmdzRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hY2NvdW50LnZpZXdGdW5jdGlvbih0aGlzLmNvbnRyYWN0SWQsIG1ldGhvZE5hbWUsIGFyZ3MsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoYW5nZU1ldGhvZHMuZm9yRWFjaCgobWV0aG9kTmFtZSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIG1ldGhvZE5hbWUsIHtcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmFtZUZ1bmN0aW9uKG1ldGhvZE5hbWUsIGFzeW5jICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCAmJiAoYXJncy5sZW5ndGggPiAzIHx8ICEoaXNPYmplY3QoYXJnc1swXSkgfHwgaXNVaW50OEFycmF5KGFyZ3NbMF0pKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBlcnJvcnNfMS5Qb3NpdGlvbmFsQXJnc0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSB8fCAhKGFyZ3NbMF0gJiYgYXJnc1swXS5hcmdzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVwcmVjYXRlID0gZGVwZF8xLmRlZmF1bHQoJ2NvbnRyYWN0Lm1ldGhvZE5hbWUoYXJncywgZ2FzLCBhbW91bnQpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXByZWNhdGUoJ3VzZSBgY29udHJhY3QubWV0aG9kTmFtZSh7IGFyZ3MsIGdhcz8sIGFtb3VudD8sIGNhbGxiYWNrVXJsPywgbWV0YT8gfSlgIGluc3RlYWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jaGFuZ2VNZXRob2Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogYXJnc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXM6IGFyZ3NbMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBhcmdzWzJdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2hhbmdlTWV0aG9kKHsgbWV0aG9kTmFtZSwgLi4uYXJnc1swXSB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBfY2hhbmdlTWV0aG9kKHsgYXJncywgbWV0aG9kTmFtZSwgZ2FzLCBhbW91bnQsIG1ldGEsIGNhbGxiYWNrVXJsIH0pIHtcbiAgICAgICAgdmFsaWRhdGVCTkxpa2UoeyBnYXMsIGFtb3VudCB9KTtcbiAgICAgICAgY29uc3QgcmF3UmVzdWx0ID0gYXdhaXQgdGhpcy5hY2NvdW50LmZ1bmN0aW9uQ2FsbCh7XG4gICAgICAgICAgICBjb250cmFjdElkOiB0aGlzLmNvbnRyYWN0SWQsXG4gICAgICAgICAgICBtZXRob2ROYW1lLFxuICAgICAgICAgICAgYXJncyxcbiAgICAgICAgICAgIGdhcyxcbiAgICAgICAgICAgIGF0dGFjaGVkRGVwb3NpdDogYW1vdW50LFxuICAgICAgICAgICAgd2FsbGV0TWV0YTogbWV0YSxcbiAgICAgICAgICAgIHdhbGxldENhbGxiYWNrVXJsOiBjYWxsYmFja1VybFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyc18xLmdldFRyYW5zYWN0aW9uTGFzdFJlc3VsdChyYXdSZXN1bHQpO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29udHJhY3QgPSBDb250cmFjdDtcbi8qKlxuICogVmFsaWRhdGlvbiBvbiBhcmd1bWVudHMgYmVpbmcgYSBiaWcgbnVtYmVyIGZyb20gYm4uanNcbiAqIFRocm93cyBpZiBhbiBhcmd1bWVudCBpcyBub3QgaW4gQk4gZm9ybWF0IG9yIG90aGVyd2lzZSBpbnZhbGlkXG4gKiBAcGFyYW0gYXJnTWFwXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlQk5MaWtlKGFyZ01hcCkge1xuICAgIGNvbnN0IGJuTGlrZSA9ICdudW1iZXIsIGRlY2ltYWwgc3RyaW5nIG9yIEJOJztcbiAgICBmb3IgKGNvbnN0IGFyZ05hbWUgb2YgT2JqZWN0LmtleXMoYXJnTWFwKSkge1xuICAgICAgICBjb25zdCBhcmdWYWx1ZSA9IGFyZ01hcFthcmdOYW1lXTtcbiAgICAgICAgaWYgKGFyZ1ZhbHVlICYmICFibl9qc18xLmRlZmF1bHQuaXNCTihhcmdWYWx1ZSkgJiYgaXNOYU4oYXJnVmFsdWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgZXJyb3JzXzEuQXJndW1lbnRUeXBlRXJyb3IoYXJnTmFtZSwgYm5MaWtlLCBhcmdWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWVyZ2VLZXlTdG9yZSA9IGV4cG9ydHMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlID0gZXhwb3J0cy5Jbk1lbW9yeUtleVN0b3JlID0gZXhwb3J0cy5LZXlTdG9yZSA9IHZvaWQgMDtcbi8qKiBAaGlkZGVuIEBtb2R1bGUgKi9cbmNvbnN0IGtleXN0b3JlXzEgPSByZXF1aXJlKFwiLi9rZXlzdG9yZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIktleVN0b3JlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBrZXlzdG9yZV8xLktleVN0b3JlOyB9IH0pO1xuY29uc3QgaW5fbWVtb3J5X2tleV9zdG9yZV8xID0gcmVxdWlyZShcIi4vaW5fbWVtb3J5X2tleV9zdG9yZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkluTWVtb3J5S2V5U3RvcmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGluX21lbW9yeV9rZXlfc3RvcmVfMS5Jbk1lbW9yeUtleVN0b3JlOyB9IH0pO1xuY29uc3QgYnJvd3Nlcl9sb2NhbF9zdG9yYWdlX2tleV9zdG9yZV8xID0gcmVxdWlyZShcIi4vYnJvd3Nlcl9sb2NhbF9zdG9yYWdlX2tleV9zdG9yZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYnJvd3Nlcl9sb2NhbF9zdG9yYWdlX2tleV9zdG9yZV8xLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZTsgfSB9KTtcbmNvbnN0IG1lcmdlX2tleV9zdG9yZV8xID0gcmVxdWlyZShcIi4vbWVyZ2Vfa2V5X3N0b3JlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiTWVyZ2VLZXlTdG9yZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWVyZ2Vfa2V5X3N0b3JlXzEuTWVyZ2VLZXlTdG9yZTsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Ccm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUgPSB2b2lkIDA7XG5jb25zdCBrZXlzdG9yZV8xID0gcmVxdWlyZShcIi4va2V5c3RvcmVcIik7XG5jb25zdCBrZXlfcGFpcl8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2tleV9wYWlyXCIpO1xuY29uc3QgTE9DQUxfU1RPUkFHRV9LRVlfUFJFRklYID0gJ25lYXItYXBpLWpzOmtleXN0b3JlOic7XG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgdXNlZCB0byBzdG9yZSBrZXlzIGluIHRoZSBicm93c2VycyBsb2NhbCBzdG9yYWdlLlxuICpcbiAqIEBleGFtcGxlIHtAbGluayBodHRwczovL2RvY3MubmVhci5vcmcvZG9jcy9kZXZlbG9wL2Zyb250LWVuZC9uYWotcXVpY2stcmVmZXJlbmNlI2tleS1zdG9yZX1cbiAqIEBleGFtcGxlXG4gKiBgYGBqc1xuICogaW1wb3J0IHsgY29ubmVjdCwga2V5U3RvcmVzIH0gZnJvbSAnbmVhci1hcGktanMnO1xuICpcbiAqIGNvbnN0IGtleVN0b3JlID0gbmV3IGtleVN0b3Jlcy5Ccm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUoKTtcbiAqIGNvbnN0IGNvbmZpZyA9IHtcbiAqICAga2V5U3RvcmUsIC8vIGluc3RhbmNlIG9mIEJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZVxuICogICBuZXR3b3JrSWQ6ICd0ZXN0bmV0JyxcbiAqICAgbm9kZVVybDogJ2h0dHBzOi8vcnBjLnRlc3RuZXQubmVhci5vcmcnLFxuICogICB3YWxsZXRVcmw6ICdodHRwczovL3dhbGxldC50ZXN0bmV0Lm5lYXIub3JnJyxcbiAqICAgaGVscGVyVXJsOiAnaHR0cHM6Ly9oZWxwZXIudGVzdG5ldC5uZWFyLm9yZycsXG4gKiAgIGV4cGxvcmVyVXJsOiAnaHR0cHM6Ly9leHBsb3Jlci50ZXN0bmV0Lm5lYXIub3JnJ1xuICogfTtcbiAqXG4gKiAvLyBpbnNpZGUgYW4gYXN5bmMgZnVuY3Rpb25cbiAqIGNvbnN0IG5lYXIgPSBhd2FpdCBjb25uZWN0KGNvbmZpZylcbiAqIGBgYFxuICovXG5jbGFzcyBCcm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUgZXh0ZW5kcyBrZXlzdG9yZV8xLktleVN0b3JlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gbG9jYWxTdG9yYWdlIGRlZmF1bHRzIHRvIHdpbmRvdy5sb2NhbFN0b3JhZ2VcbiAgICAgKiBAcGFyYW0gcHJlZml4IGRlZmF1bHRzIHRvIGBuZWFyLWFwaS1qczprZXlzdG9yZTpgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobG9jYWxTdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZSwgcHJlZml4ID0gTE9DQUxfU1RPUkFHRV9LRVlfUFJFRklYKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlID0gbG9jYWxTdG9yYWdlO1xuICAgICAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RvcmVzIGEge0BsaW5rIEtleVBhaXJ9IGluIGxvY2FsIHN0b3JhZ2UuXG4gICAgICogQHBhcmFtIG5ldHdvcmtJZCBUaGUgdGFyZ2V0ZWQgbmV0d29yay4gKGV4LiBkZWZhdWx0LCBiZXRhbmV0LCBldGPigKYpXG4gICAgICogQHBhcmFtIGFjY291bnRJZCBUaGUgTkVBUiBhY2NvdW50IHRpZWQgdG8gdGhlIGtleSBwYWlyXG4gICAgICogQHBhcmFtIGtleVBhaXIgVGhlIGtleSBwYWlyIHRvIHN0b3JlIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgKi9cbiAgICBhc3luYyBzZXRLZXkobmV0d29ya0lkLCBhY2NvdW50SWQsIGtleVBhaXIpIHtcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0b3JhZ2VLZXlGb3JTZWNyZXRLZXkobmV0d29ya0lkLCBhY2NvdW50SWQpLCBrZXlQYWlyLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIGEge0BsaW5rIEtleVBhaXJ9IGZyb20gbG9jYWwgc3RvcmFnZVxuICAgICAqIEBwYXJhbSBuZXR3b3JrSWQgVGhlIHRhcmdldGVkIG5ldHdvcmsuIChleC4gZGVmYXVsdCwgYmV0YW5ldCwgZXRj4oCmKVxuICAgICAqIEBwYXJhbSBhY2NvdW50SWQgVGhlIE5FQVIgYWNjb3VudCB0aWVkIHRvIHRoZSBrZXkgcGFpclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEtleVBhaXI+fVxuICAgICAqL1xuICAgIGFzeW5jIGdldEtleShuZXR3b3JrSWQsIGFjY291bnRJZCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdG9yYWdlS2V5Rm9yU2VjcmV0S2V5KG5ldHdvcmtJZCwgYWNjb3VudElkKSk7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBrZXlfcGFpcl8xLktleVBhaXIuZnJvbVN0cmluZyh2YWx1ZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSB7QGxpbmsgS2V5UGFpcn0gZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICogQHBhcmFtIG5ldHdvcmtJZCBUaGUgdGFyZ2V0ZWQgbmV0d29yay4gKGV4LiBkZWZhdWx0LCBiZXRhbmV0LCBldGPigKYpXG4gICAgICogQHBhcmFtIGFjY291bnRJZCBUaGUgTkVBUiBhY2NvdW50IHRpZWQgdG8gdGhlIGtleSBwYWlyXG4gICAgICovXG4gICAgYXN5bmMgcmVtb3ZlS2V5KG5ldHdvcmtJZCwgYWNjb3VudElkKSB7XG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5zdG9yYWdlS2V5Rm9yU2VjcmV0S2V5KG5ldHdvcmtJZCwgYWNjb3VudElkKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGl0ZW1zIHRoYXQgc3RhcnQgd2l0aCBgcHJlZml4YCBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgKi9cbiAgICBhc3luYyBjbGVhcigpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5zdG9yYWdlS2V5cygpKSB7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgodGhpcy5wcmVmaXgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmV0d29yayhzKSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmdbXT59XG4gICAgICovXG4gICAgYXN5bmMgZ2V0TmV0d29ya3MoKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5zdG9yYWdlS2V5cygpKSB7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgodGhpcy5wcmVmaXgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSBrZXkuc3Vic3RyaW5nKHRoaXMucHJlZml4Lmxlbmd0aCkuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICByZXN1bHQuYWRkKHBhcnRzWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShyZXN1bHQudmFsdWVzKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBhY2NvdW50KHMpIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgICAqIEBwYXJhbSBuZXR3b3JrSWQgVGhlIHRhcmdldGVkIG5ldHdvcmsuIChleC4gZGVmYXVsdCwgYmV0YW5ldCwgZXRj4oCmKVxuICAgICAqIEByZXR1cm5ze1Byb21pc2U8c3RyaW5nW10+fVxuICAgICAqL1xuICAgIGFzeW5jIGdldEFjY291bnRzKG5ldHdvcmtJZCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5zdG9yYWdlS2V5cygpKSB7XG4gICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgodGhpcy5wcmVmaXgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSBrZXkuc3Vic3RyaW5nKHRoaXMucHJlZml4Lmxlbmd0aCkuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICBpZiAocGFydHNbMV0gPT09IG5ldHdvcmtJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJ0c1swXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBoaWRkZW5cbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gdG8gcmV0cmlldmUgYSBsb2NhbCBzdG9yYWdlIGtleVxuICAgICAqIEBwYXJhbSBuZXR3b3JrSWQgVGhlIHRhcmdldGVkIG5ldHdvcmsuIChleC4gZGVmYXVsdCwgYmV0YW5ldCwgZXRj4oCmKVxuICAgICAqIEBwYXJhbSBhY2NvdW50SWQgVGhlIE5FQVIgYWNjb3VudCB0aWVkIHRvIHRoZSBzdG9yYWdlIGtleXRoYXQncyBzb3VnaHRcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBBbiBleGFtcGxlIG1pZ2h0IGJlOiBgbmVhci1hcGktanM6a2V5c3RvcmU6bmVhci1mcmllbmQ6ZGVmYXVsdGBcbiAgICAgKi9cbiAgICBzdG9yYWdlS2V5Rm9yU2VjcmV0S2V5KG5ldHdvcmtJZCwgYWNjb3VudElkKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnByZWZpeH0ke2FjY291bnRJZH06JHtuZXR3b3JrSWR9YDtcbiAgICB9XG4gICAgLyoqIEBoaWRkZW4gKi9cbiAgICAqc3RvcmFnZUtleXMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHlpZWxkIHRoaXMubG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlID0gQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkluTWVtb3J5S2V5U3RvcmUgPSB2b2lkIDA7XG5jb25zdCBrZXlzdG9yZV8xID0gcmVxdWlyZShcIi4va2V5c3RvcmVcIik7XG5jb25zdCBrZXlfcGFpcl8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2tleV9wYWlyXCIpO1xuLyoqXG4gKiBTaW1wbGUgaW4tbWVtb3J5IGtleXN0b3JlIGZvciBtYWlubHkgZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gKlxuICogQGV4YW1wbGUge0BsaW5rIGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL2RldmVsb3AvZnJvbnQtZW5kL25hai1xdWljay1yZWZlcmVuY2Uja2V5LXN0b3JlfVxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBpbXBvcnQgeyBjb25uZWN0LCBrZXlTdG9yZXMsIHV0aWxzIH0gZnJvbSAnbmVhci1hcGktanMnO1xuICpcbiAqIGNvbnN0IHByaXZhdGVLZXkgPSAnLi4uLi4uLic7XG4gKiBjb25zdCBrZXlQYWlyID0gdXRpbHMuS2V5UGFpci5mcm9tU3RyaW5nKHByaXZhdGVLZXkpO1xuICpcbiAqIGNvbnN0IGtleVN0b3JlID0gbmV3IGtleVN0b3Jlcy5Jbk1lbW9yeUtleVN0b3JlKCk7XG4gKiBrZXlTdG9yZS5zZXRLZXkoJ3Rlc3RuZXQnLCAnZXhhbXBsZS1hY2NvdW50LnRlc3RuZXQnLCBrZXlQYWlyKTtcbiAqXG4gKiBjb25zdCBjb25maWcgPSB7XG4gKiAgIGtleVN0b3JlLCAvLyBpbnN0YW5jZSBvZiBJbk1lbW9yeUtleVN0b3JlXG4gKiAgIG5ldHdvcmtJZDogJ3Rlc3RuZXQnLFxuICogICBub2RlVXJsOiAnaHR0cHM6Ly9ycGMudGVzdG5ldC5uZWFyLm9yZycsXG4gKiAgIHdhbGxldFVybDogJ2h0dHBzOi8vd2FsbGV0LnRlc3RuZXQubmVhci5vcmcnLFxuICogICBoZWxwZXJVcmw6ICdodHRwczovL2hlbHBlci50ZXN0bmV0Lm5lYXIub3JnJyxcbiAqICAgZXhwbG9yZXJVcmw6ICdodHRwczovL2V4cGxvcmVyLnRlc3RuZXQubmVhci5vcmcnXG4gKiB9O1xuICpcbiAqIC8vIGluc2lkZSBhbiBhc3luYyBmdW5jdGlvblxuICogY29uc3QgbmVhciA9IGF3YWl0IGNvbm5lY3QoY29uZmlnKVxuICogYGBgXG4gKi9cbmNsYXNzIEluTWVtb3J5S2V5U3RvcmUgZXh0ZW5kcyBrZXlzdG9yZV8xLktleVN0b3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rZXlzID0ge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3JlcyBhIHtAS2V5UGFpcn0gaW4gaW4tbWVtb3J5IHN0b3JhZ2UgaXRlbVxuICAgICAqIEBwYXJhbSBuZXR3b3JrSWQgVGhlIHRhcmdldGVkIG5ldHdvcmsuIChleC4gZGVmYXVsdCwgYmV0YW5ldCwgZXRj4oCmKVxuICAgICAqIEBwYXJhbSBhY2NvdW50SWQgVGhlIE5FQVIgYWNjb3VudCB0aWVkIHRvIHRoZSBrZXkgcGFpclxuICAgICAqIEBwYXJhbSBrZXlQYWlyIFRoZSBrZXkgcGFpciB0byBzdG9yZSBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICovXG4gICAgYXN5bmMgc2V0S2V5KG5ldHdvcmtJZCwgYWNjb3VudElkLCBrZXlQYWlyKSB7XG4gICAgICAgIHRoaXMua2V5c1tgJHthY2NvdW50SWR9OiR7bmV0d29ya0lkfWBdID0ga2V5UGFpci50b1N0cmluZygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIGEge0BsaW5rIEtleVBhaXJ9IGZyb20gaW4tbWVtb3J5IHN0b3JhZ2VcbiAgICAgKiBAcGFyYW0gbmV0d29ya0lkIFRoZSB0YXJnZXRlZCBuZXR3b3JrLiAoZXguIGRlZmF1bHQsIGJldGFuZXQsIGV0Y+KApilcbiAgICAgKiBAcGFyYW0gYWNjb3VudElkIFRoZSBORUFSIGFjY291bnQgdGllZCB0byB0aGUga2V5IHBhaXJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxLZXlQYWlyPn1cbiAgICAgKi9cbiAgICBhc3luYyBnZXRLZXkobmV0d29ya0lkLCBhY2NvdW50SWQpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmtleXNbYCR7YWNjb3VudElkfToke25ldHdvcmtJZH1gXTtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleV9wYWlyXzEuS2V5UGFpci5mcm9tU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIHtAbGluayBLZXlQYWlyfSBmcm9tIGluLW1lbW9yeSBzdG9yYWdlXG4gICAgICogQHBhcmFtIG5ldHdvcmtJZCBUaGUgdGFyZ2V0ZWQgbmV0d29yay4gKGV4LiBkZWZhdWx0LCBiZXRhbmV0LCBldGPigKYpXG4gICAgICogQHBhcmFtIGFjY291bnRJZCBUaGUgTkVBUiBhY2NvdW50IHRpZWQgdG8gdGhlIGtleSBwYWlyXG4gICAgICovXG4gICAgYXN5bmMgcmVtb3ZlS2V5KG5ldHdvcmtJZCwgYWNjb3VudElkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmtleXNbYCR7YWNjb3VudElkfToke25ldHdvcmtJZH1gXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwge0BsaW5rIEtleVBhaXJzfSBmcm9tIGluLW1lbW9yeSBzdG9yYWdlXG4gICAgICovXG4gICAgYXN5bmMgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMua2V5cyA9IHt9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5ldHdvcmsocykgZnJvbSBpbi1tZW1vcnkgc3RvcmFnZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ1tdPn1cbiAgICAgKi9cbiAgICBhc3luYyBnZXROZXR3b3JrcygpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmtleXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBrZXkuc3BsaXQoJzonKTtcbiAgICAgICAgICAgIHJlc3VsdC5hZGQocGFydHNbMV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ocmVzdWx0LnZhbHVlcygpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYWNjb3VudChzKSBmcm9tIGluLW1lbW9yeSBzdG9yYWdlXG4gICAgICogQHBhcmFtIG5ldHdvcmtJZCBUaGUgdGFyZ2V0ZWQgbmV0d29yay4gKGV4LiBkZWZhdWx0LCBiZXRhbmV0LCBldGPigKYpXG4gICAgICogQHJldHVybnN7UHJvbWlzZTxzdHJpbmdbXT59XG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWNjb3VudHMobmV0d29ya0lkKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheSgpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmtleXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBrZXkuc3BsaXQoJzonKTtcbiAgICAgICAgICAgIGlmIChwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSA9PT0gbmV0d29ya0lkKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFydHMuc2xpY2UoMCwgcGFydHMubGVuZ3RoIC0gMSkuam9pbignOicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiAnSW5NZW1vcnlLZXlTdG9yZSc7XG4gICAgfVxufVxuZXhwb3J0cy5Jbk1lbW9yeUtleVN0b3JlID0gSW5NZW1vcnlLZXlTdG9yZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5LZXlTdG9yZSA9IHZvaWQgMDtcbi8qKlxuICogS2V5U3RvcmVzIGFyZSBwYXNzZWQgdG8ge0BsaW5rIE5lYXJ9IHZpYSB7QGxpbmsgTmVhckNvbmZpZ31cbiAqIGFuZCBhcmUgdXNlZCBieSB0aGUge0BsaW5rIEluTWVtb3J5U2lnbmVyfSB0byBzaWduIHRyYW5zYWN0aW9ucy5cbiAqXG4gKiBAZXhhbXBsZSB7QGxpbmsgY29ubmVjdH1cbiAqL1xuY2xhc3MgS2V5U3RvcmUge1xufVxuZXhwb3J0cy5LZXlTdG9yZSA9IEtleVN0b3JlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLk1lcmdlS2V5U3RvcmUgPSB2b2lkIDA7XG5jb25zdCBrZXlzdG9yZV8xID0gcmVxdWlyZShcIi4va2V5c3RvcmVcIik7XG5jbGFzcyBNZXJnZUtleVN0b3JlIGV4dGVuZHMga2V5c3RvcmVfMS5LZXlTdG9yZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGtleVN0b3JlcyByZWFkIGNhbGxzIGFyZSBhdHRlbXB0ZWQgZnJvbSBzdGFydCB0byBlbmQgb2YgYXJyYXlcbiAgICAgKiBAcGFyYW0gb3B0aW9ucy53cml0ZUtleVN0b3JlSW5kZXggdGhlIGtleXN0b3JlIGluZGV4IHRoYXQgd2lsbCByZWNlaXZlIGFsbCB3cml0ZSBjYWxsc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGtleVN0b3Jlcywgb3B0aW9ucyA9IHsgd3JpdGVLZXlTdG9yZUluZGV4OiAwIH0pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5rZXlTdG9yZXMgPSBrZXlTdG9yZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3JlIGEge0BsaW5rIEtleVBhaW59IHRvIHRoZSBmaXJzdCBpbmRleCBvZiBhIGtleSBzdG9yZSBhcnJheVxuICAgICAqIEBwYXJhbSBuZXR3b3JrSWQgVGhlIHRhcmdldGVkIG5ldHdvcmsuIChleC4gZGVmYXVsdCwgYmV0YW5ldCwgZXRj4oCmKVxuICAgICAqIEBwYXJhbSBhY2NvdW50SWQgVGhlIE5FQVIgYWNjb3VudCB0aWVkIHRvIHRoZSBrZXkgcGFpclxuICAgICAqIEBwYXJhbSBrZXlQYWlyIFRoZSBrZXkgcGFpciB0byBzdG9yZSBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICovXG4gICAgYXN5bmMgc2V0S2V5KG5ldHdvcmtJZCwgYWNjb3VudElkLCBrZXlQYWlyKSB7XG4gICAgICAgIGF3YWl0IHRoaXMua2V5U3RvcmVzW3RoaXMub3B0aW9ucy53cml0ZUtleVN0b3JlSW5kZXhdLnNldEtleShuZXR3b3JrSWQsIGFjY291bnRJZCwga2V5UGFpcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgYSB7QGxpbmsgS2V5UGFpcn0gZnJvbSB0aGUgYXJyYXkgb2Yga2V5IHN0b3Jlc1xuICAgICAqIEBwYXJhbSBuZXR3b3JrSWQgVGhlIHRhcmdldGVkIG5ldHdvcmsuIChleC4gZGVmYXVsdCwgYmV0YW5ldCwgZXRj4oCmKVxuICAgICAqIEBwYXJhbSBhY2NvdW50SWQgVGhlIE5FQVIgYWNjb3VudCB0aWVkIHRvIHRoZSBrZXkgcGFpclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPEtleVBhaXI+fVxuICAgICAqL1xuICAgIGFzeW5jIGdldEtleShuZXR3b3JrSWQsIGFjY291bnRJZCkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleVN0b3JlIG9mIHRoaXMua2V5U3RvcmVzKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlQYWlyID0gYXdhaXQga2V5U3RvcmUuZ2V0S2V5KG5ldHdvcmtJZCwgYWNjb3VudElkKTtcbiAgICAgICAgICAgIGlmIChrZXlQYWlyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleVBhaXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSB7QGxpbmsgS2V5UGFpcn0gZnJvbSB0aGUgYXJyYXkgb2Yga2V5IHN0b3Jlc1xuICAgICAqIEBwYXJhbSBuZXR3b3JrSWQgVGhlIHRhcmdldGVkIG5ldHdvcmsuIChleC4gZGVmYXVsdCwgYmV0YW5ldCwgZXRj4oCmKVxuICAgICAqIEBwYXJhbSBhY2NvdW50SWQgVGhlIE5FQVIgYWNjb3VudCB0aWVkIHRvIHRoZSBrZXkgcGFpclxuICAgICAqL1xuICAgIGFzeW5jIHJlbW92ZUtleShuZXR3b3JrSWQsIGFjY291bnRJZCkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleVN0b3JlIG9mIHRoaXMua2V5U3RvcmVzKSB7XG4gICAgICAgICAgICBhd2FpdCBrZXlTdG9yZS5yZW1vdmVLZXkobmV0d29ya0lkLCBhY2NvdW50SWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGl0ZW1zIGZyb20gZWFjaCBrZXkgc3RvcmVcbiAgICAgKi9cbiAgICBhc3luYyBjbGVhcigpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXlTdG9yZSBvZiB0aGlzLmtleVN0b3Jlcykge1xuICAgICAgICAgICAgYXdhaXQga2V5U3RvcmUuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG5ldHdvcmsocykgZnJvbSB0aGUgYXJyYXkgb2Yga2V5IHN0b3Jlc1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ1tdPn1cbiAgICAgKi9cbiAgICBhc3luYyBnZXROZXR3b3JrcygpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFNldCgpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleVN0b3JlIG9mIHRoaXMua2V5U3RvcmVzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5ldHdvcmsgb2YgYXdhaXQga2V5U3RvcmUuZ2V0TmV0d29ya3MoKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5hZGQobmV0d29yayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ocmVzdWx0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYWNjb3VudChzKSBmcm9tIHRoZSBhcnJheSBvZiBrZXkgc3RvcmVzXG4gICAgICogQHBhcmFtIG5ldHdvcmtJZCBUaGUgdGFyZ2V0ZWQgbmV0d29yay4gKGV4LiBkZWZhdWx0LCBiZXRhbmV0LCBldGPigKYpXG4gICAgICogQHJldHVybnN7UHJvbWlzZTxzdHJpbmdbXT59XG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWNjb3VudHMobmV0d29ya0lkKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBTZXQoKTtcbiAgICAgICAgZm9yIChjb25zdCBrZXlTdG9yZSBvZiB0aGlzLmtleVN0b3Jlcykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBhY2NvdW50IG9mIGF3YWl0IGtleVN0b3JlLmdldEFjY291bnRzKG5ldHdvcmtJZCkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQuYWRkKGFjY291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHJlc3VsdCk7XG4gICAgfVxuICAgIC8qKiBAaGlkZGVuICovXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgTWVyZ2VLZXlTdG9yZSgke3RoaXMua2V5U3RvcmVzLmpvaW4oJywgJyl9KWA7XG4gICAgfVxufVxuZXhwb3J0cy5NZXJnZUtleVN0b3JlID0gTWVyZ2VLZXlTdG9yZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5OZWFyID0gdm9pZCAwO1xuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWlucyB0aGUgbWFpbiBjbGFzcyBkZXZlbG9wZXJzIHdpbGwgdXNlIHRvIGludGVyYWN0IHdpdGggTkVBUi5cbiAqIFRoZSB7QGxpbmsgTmVhcn0gY2xhc3MgaXMgdXNlZCB0byBpbnRlcmFjdCB3aXRoIHtAbGluayBBY2NvdW50IHwgQWNjb3VudHN9IHRocm91Z2ggdGhlIHtAbGluayBKc29uUnBjUHJvdmlkZXIuSnNvblJwY1Byb3ZpZGVyIHwgSnNvblJwY1Byb3ZpZGVyfS5cbiAqIEl0IGlzIGNvbmZpZ3VyZWQgdmlhIHRoZSB7QGxpbmsgTmVhckNvbmZpZ30uXG4gKlxuICogQGV4YW1wbGUge0BsaW5rIGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL2RldmVsb3AvZnJvbnQtZW5kL25hai1xdWljay1yZWZlcmVuY2UjYWNjb3VudH1cbiAqXG4gKiBAbW9kdWxlIG5lYXJcbiAqL1xuY29uc3QgYm5fanNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYm4uanNcIikpO1xuY29uc3QgYWNjb3VudF8xID0gcmVxdWlyZShcIi4vYWNjb3VudFwiKTtcbmNvbnN0IGNvbm5lY3Rpb25fMSA9IHJlcXVpcmUoXCIuL2Nvbm5lY3Rpb25cIik7XG5jb25zdCBjb250cmFjdF8xID0gcmVxdWlyZShcIi4vY29udHJhY3RcIik7XG5jb25zdCBhY2NvdW50X2NyZWF0b3JfMSA9IHJlcXVpcmUoXCIuL2FjY291bnRfY3JlYXRvclwiKTtcbi8qKlxuICogVGhpcyBpcyB0aGUgbWFpbiBjbGFzcyBkZXZlbG9wZXJzIHNob3VsZCB1c2UgdG8gaW50ZXJhY3Qgd2l0aCBORUFSLlxuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBjb25zdCBuZWFyID0gbmV3IE5lYXIoY29uZmlnKTtcbiAqIGBgYFxuICovXG5jbGFzcyBOZWFyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IGNvbm5lY3Rpb25fMS5Db25uZWN0aW9uLmZyb21Db25maWcoe1xuICAgICAgICAgICAgbmV0d29ya0lkOiBjb25maWcubmV0d29ya0lkLFxuICAgICAgICAgICAgcHJvdmlkZXI6IHsgdHlwZTogJ0pzb25ScGNQcm92aWRlcicsIGFyZ3M6IHsgdXJsOiBjb25maWcubm9kZVVybCwgaGVhZGVyczogY29uZmlnLmhlYWRlcnMgfSB9LFxuICAgICAgICAgICAgc2lnbmVyOiBjb25maWcuc2lnbmVyIHx8IHsgdHlwZTogJ0luTWVtb3J5U2lnbmVyJywga2V5U3RvcmU6IGNvbmZpZy5rZXlTdG9yZSB8fCBjb25maWcuZGVwcy5rZXlTdG9yZSB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY29uZmlnLm1hc3RlckFjY291bnQpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgYmV0dGVyIHdheSBvZiBzcGVjaWZpeWluZyBpbml0aWFsIGJhbGFuY2UuXG4gICAgICAgICAgICAvLyBIYXJkY29kZWQgbnVtYmVyIGJlbG93IG11c3QgYmUgZW5vdWdoIHRvIHBheSB0aGUgZ2FzIGNvc3QgdG8gZGV2LWRlcGxveSB3aXRoIG5lYXItc2hlbGwgZm9yIG11bHRpcGxlIHRpbWVzXG4gICAgICAgICAgICBjb25zdCBpbml0aWFsQmFsYW5jZSA9IGNvbmZpZy5pbml0aWFsQmFsYW5jZSA/IG5ldyBibl9qc18xLmRlZmF1bHQoY29uZmlnLmluaXRpYWxCYWxhbmNlKSA6IG5ldyBibl9qc18xLmRlZmF1bHQoJzUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCcpO1xuICAgICAgICAgICAgdGhpcy5hY2NvdW50Q3JlYXRvciA9IG5ldyBhY2NvdW50X2NyZWF0b3JfMS5Mb2NhbEFjY291bnRDcmVhdG9yKG5ldyBhY2NvdW50XzEuQWNjb3VudCh0aGlzLmNvbm5lY3Rpb24sIGNvbmZpZy5tYXN0ZXJBY2NvdW50KSwgaW5pdGlhbEJhbGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZy5oZWxwZXJVcmwpIHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudENyZWF0b3IgPSBuZXcgYWNjb3VudF9jcmVhdG9yXzEuVXJsQWNjb3VudENyZWF0b3IodGhpcy5jb25uZWN0aW9uLCBjb25maWcuaGVscGVyVXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3VudENyZWF0b3IgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBhY2NvdW50SWQgbmVhciBhY2NvdW50SWQgdXNlZCB0byBpbnRlcmFjdCB3aXRoIHRoZSBuZXR3b3JrLlxuICAgICAqL1xuICAgIGFzeW5jIGFjY291bnQoYWNjb3VudElkKSB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBuZXcgYWNjb3VudF8xLkFjY291bnQodGhpcy5jb25uZWN0aW9uLCBhY2NvdW50SWQpO1xuICAgICAgICByZXR1cm4gYWNjb3VudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIGFjY291bnQgdXNpbmcgdGhlIHtAbGluayBBY2NvdW50Q3JlYXRvcn0uIEVpdGhlcjpcbiAgICAgKiAqIHVzaW5nIGEgbWFzdGVyQWNjb3VudCB3aXRoIHtAbGluayBMb2NhbEFjY291bnRDcmVhdG9yfVxuICAgICAqICogdXNpbmcgdGhlIGhlbHBlclVybCB3aXRoIHtAbGluayBVcmxBY2NvdW50Q3JlYXRvcn1cbiAgICAgKiBAc2VlIHtAbGluayBOZWFyQ29uZmlnLm1hc3RlckFjY291bnR9IGFuZCB7QGxpbmsgTmVhckNvbmZpZy5oZWxwZXJVcmx9LVxuICAgICAqXG4gICAgICogQHBhcmFtIGFjY291bnRJZFxuICAgICAqIEBwYXJhbSBwdWJsaWNLZXlcbiAgICAgKi9cbiAgICBhc3luYyBjcmVhdGVBY2NvdW50KGFjY291bnRJZCwgcHVibGljS2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5hY2NvdW50Q3JlYXRvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHNwZWNpZnkgYWNjb3VudCBjcmVhdG9yLCBlaXRoZXIgdmlhIG1hc3RlckFjY291bnQgb3IgaGVscGVyVXJsIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MuJyk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5hY2NvdW50Q3JlYXRvci5jcmVhdGVBY2NvdW50KGFjY291bnRJZCwgcHVibGljS2V5KTtcbiAgICAgICAgcmV0dXJuIG5ldyBhY2NvdW50XzEuQWNjb3VudCh0aGlzLmNvbm5lY3Rpb24sIGFjY291bnRJZCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgQ29udHJhY3R9IGluc3RlYWQuXG4gICAgICogQHBhcmFtIGNvbnRyYWN0SWRcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgIGFzeW5jIGxvYWRDb250cmFjdChjb250cmFjdElkLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBuZXcgYWNjb3VudF8xLkFjY291bnQodGhpcy5jb25uZWN0aW9uLCBvcHRpb25zLnNlbmRlcik7XG4gICAgICAgIHJldHVybiBuZXcgY29udHJhY3RfMS5Db250cmFjdChhY2NvdW50LCBjb250cmFjdElkLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBBY2NvdW50LnNlbmRNb25leX0gaW5zdGVhZC5cbiAgICAgKiBAcGFyYW0gYW1vdW50XG4gICAgICogQHBhcmFtIG9yaWdpbmF0b3JcbiAgICAgKiBAcGFyYW0gcmVjZWl2ZXJcbiAgICAgKi9cbiAgICBhc3luYyBzZW5kVG9rZW5zKGFtb3VudCwgb3JpZ2luYXRvciwgcmVjZWl2ZXIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCduZWFyLnNlbmRUb2tlbnMgaXMgZGVwcmVjYXRlZC4gVXNlIGB5b3VyQWNjb3VudC5zZW5kTW9uZXlgIGluc3RlYWQuJyk7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBuZXcgYWNjb3VudF8xLkFjY291bnQodGhpcy5jb25uZWN0aW9uLCBvcmlnaW5hdG9yKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYWNjb3VudC5zZW5kTW9uZXkocmVjZWl2ZXIsIGFtb3VudCk7XG4gICAgICAgIHJldHVybiByZXN1bHQudHJhbnNhY3Rpb25fb3V0Y29tZS5pZDtcbiAgICB9XG59XG5leHBvcnRzLk5lYXIgPSBOZWFyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKiogQGhpZGRlbiBAbW9kdWxlICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVycm9yQ29udGV4dCA9IGV4cG9ydHMuVHlwZWRFcnJvciA9IGV4cG9ydHMuZ2V0VHJhbnNhY3Rpb25MYXN0UmVzdWx0ID0gZXhwb3J0cy5GaW5hbEV4ZWN1dGlvblN0YXR1c0Jhc2ljID0gZXhwb3J0cy5Kc29uUnBjUHJvdmlkZXIgPSBleHBvcnRzLlByb3ZpZGVyID0gdm9pZCAwO1xuY29uc3QgcHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUHJvdmlkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHByb3ZpZGVyXzEuUHJvdmlkZXI7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJnZXRUcmFuc2FjdGlvbkxhc3RSZXN1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHByb3ZpZGVyXzEuZ2V0VHJhbnNhY3Rpb25MYXN0UmVzdWx0OyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRmluYWxFeGVjdXRpb25TdGF0dXNCYXNpY1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcHJvdmlkZXJfMS5GaW5hbEV4ZWN1dGlvblN0YXR1c0Jhc2ljOyB9IH0pO1xuY29uc3QganNvbl9ycGNfcHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL2pzb24tcnBjLXByb3ZpZGVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSnNvblJwY1Byb3ZpZGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBqc29uX3JwY19wcm92aWRlcl8xLkpzb25ScGNQcm92aWRlcjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlR5cGVkRXJyb3JcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGpzb25fcnBjX3Byb3ZpZGVyXzEuVHlwZWRFcnJvcjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkVycm9yQ29udGV4dFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4ganNvbl9ycGNfcHJvdmlkZXJfMS5FcnJvckNvbnRleHQ7IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSnNvblJwY1Byb3ZpZGVyID0gZXhwb3J0cy5FcnJvckNvbnRleHQgPSBleHBvcnRzLlR5cGVkRXJyb3IgPSB2b2lkIDA7XG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIHRoZSB7QGxpbmsgSnNvblJwY1Byb3ZpZGVyfSBjbGllbnQgY2xhc3NcbiAqIHdoaWNoIGNhbiBiZSB1c2VkIHRvIGludGVyYWN0IHdpdGggdGhlIE5FQVIgUlBDIEFQSS5cbiAqIEBzZWUge0BsaW5rIHByb3ZpZGVycy9wcm92aWRlcn0gZm9yIGEgbGlzdCBvZiByZXF1ZXN0IGFuZCByZXNwb25zZSB0eXBlc1xuICovXG5jb25zdCBkZXBkXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImRlcGRcIikpO1xuY29uc3QgcHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL3Byb3ZpZGVyXCIpO1xuY29uc3Qgd2ViXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvd2ViXCIpO1xuY29uc3QgZXJyb3JzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZXJyb3JzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiVHlwZWRFcnJvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3JzXzEuVHlwZWRFcnJvcjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkVycm9yQ29udGV4dFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3JzXzEuRXJyb3JDb250ZXh0OyB9IH0pO1xuY29uc3QgYm9yc2hfMSA9IHJlcXVpcmUoXCJib3JzaFwiKTtcbmNvbnN0IGV4cG9uZW50aWFsX2JhY2tvZmZfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vdXRpbHMvZXhwb25lbnRpYWwtYmFja29mZlwiKSk7XG5jb25zdCBycGNfZXJyb3JzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvcnBjX2Vycm9yc1wiKTtcbi8vIERlZmF1bHQgbnVtYmVyIG9mIHJldHJpZXMgYmVmb3JlIGdpdmluZyB1cCBvbiBhIHJlcXVlc3QuXG5jb25zdCBSRVFVRVNUX1JFVFJZX05VTUJFUiA9IDEyO1xuLy8gRGVmYXVsdCB3YWl0IHVudGlsIG5leHQgcmV0cnkgaW4gbWlsbGlzLlxuY29uc3QgUkVRVUVTVF9SRVRSWV9XQUlUID0gNTAwO1xuLy8gRXhwb25lbnRpYWwgYmFjayBvZmYgZm9yIHdhaXRpbmcgdG8gcmV0cnkuXG5jb25zdCBSRVFVRVNUX1JFVFJZX1dBSVRfQkFDS09GRiA9IDEuNTtcbi8vLyBLZWVwIGlkcyB1bmlxdWUgYWNyb3NzIGFsbCBjb25uZWN0aW9ucy5cbmxldCBfbmV4dElkID0gMTIzO1xuLyoqXG4gKiBDbGllbnQgY2xhc3MgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgTkVBUiBSUEMgQVBJLlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL25lYXIvbmVhcmNvcmUvdHJlZS9tYXN0ZXIvY2hhaW4vanNvbnJwY31cbiAqL1xuY2xhc3MgSnNvblJwY1Byb3ZpZGVyIGV4dGVuZHMgcHJvdmlkZXJfMS5Qcm92aWRlciB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbm5lY3Rpb25JbmZvT3JVcmwgQ29ubmVjdGlvbkluZm8gb3IgUlBDIEFQSSBlbmRwb2ludCBVUkwgKGRlcHJlY2F0ZWQpXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29ubmVjdGlvbkluZm9PclVybCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBpZiAoY29ubmVjdGlvbkluZm9PclVybCAhPSBudWxsICYmIHR5cGVvZiBjb25uZWN0aW9uSW5mb09yVXJsID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uSW5mb09yVXJsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVwcmVjYXRlID0gZGVwZF8xLmRlZmF1bHQoJ0pzb25ScGNQcm92aWRlcih1cmw/OiBzdHJpbmcpJyk7XG4gICAgICAgICAgICBkZXByZWNhdGUoJ3VzZSBgSnNvblJwY1Byb3ZpZGVyKGNvbm5lY3Rpb25JbmZvOiBDb25uZWN0aW9uSW5mbylgIGluc3RlYWQnKTtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IHsgdXJsOiBjb25uZWN0aW9uSW5mb09yVXJsIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgUlBDJ3Mgc3RhdHVzXG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kb2NzLm5lYXIub3JnL2RvY3MvZGV2ZWxvcC9mcm9udC1lbmQvcnBjI2dlbmVyYWwtdmFsaWRhdG9yLXN0YXR1c31cbiAgICAgKi9cbiAgICBhc3luYyBzdGF0dXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRKc29uUnBjKCdzdGF0dXMnLCBbXSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgc2lnbmVkIHRyYW5zYWN0aW9uIHRvIHRoZSBSUEMgYW5kIHdhaXRzIHVudGlsIHRyYW5zYWN0aW9uIGlzIGZ1bGx5IGNvbXBsZXRlXG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kb2NzLm5lYXIub3JnL2RvY3MvZGV2ZWxvcC9mcm9udC1lbmQvcnBjI3NlbmQtdHJhbnNhY3Rpb24tYXdhaXR9XG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2lnbmVkVHJhbnNhY3Rpb24gVGhlIHNpZ25lZCB0cmFuc2FjdGlvbiBiZWluZyBzZW50XG4gICAgICovXG4gICAgYXN5bmMgc2VuZFRyYW5zYWN0aW9uKHNpZ25lZFRyYW5zYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gc2lnbmVkVHJhbnNhY3Rpb24uZW5jb2RlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRKc29uUnBjKCdicm9hZGNhc3RfdHhfY29tbWl0JywgW0J1ZmZlci5mcm9tKGJ5dGVzKS50b1N0cmluZygnYmFzZTY0JyldKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2VuZHMgYSBzaWduZWQgdHJhbnNhY3Rpb24gdG8gdGhlIFJQQyBhbmQgaW1tZWRpYXRlbHkgcmV0dXJucyB0cmFuc2FjdGlvbiBoYXNoXG4gICAgICogU2VlIFtkb2NzIGZvciBtb3JlIGluZm9dKGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL2RldmVsb3AvZnJvbnQtZW5kL3JwYyNzZW5kLXRyYW5zYWN0aW9uLWFzeW5jKVxuICAgICAqIEBwYXJhbSBzaWduZWRUcmFuc2FjdGlvbiBUaGUgc2lnbmVkIHRyYW5zYWN0aW9uIGJlaW5nIHNlbnRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaW5hbEV4ZWN1dGlvbk91dGNvbWU+fVxuICAgICAqL1xuICAgIGFzeW5jIHNlbmRUcmFuc2FjdGlvbkFzeW5jKHNpZ25lZFRyYW5zYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gc2lnbmVkVHJhbnNhY3Rpb24uZW5jb2RlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRKc29uUnBjKCdicm9hZGNhc3RfdHhfYXN5bmMnLCBbQnVmZmVyLmZyb20oYnl0ZXMpLnRvU3RyaW5nKCdiYXNlNjQnKV0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgdHJhbnNhY3Rpb24ncyBzdGF0dXMgZnJvbSB0aGUgUlBDXG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kb2NzLm5lYXIub3JnL2RvY3MvZGV2ZWxvcC9mcm9udC1lbmQvcnBjI3RyYW5zYWN0aW9uLXN0YXR1c31cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0eEhhc2ggQSB0cmFuc2FjdGlvbiBoYXNoIGFzIGVpdGhlciBhIFVpbnQ4QXJyYXkgb3IgYSBiYXNlNTggZW5jb2RlZCBzdHJpbmdcbiAgICAgKiBAcGFyYW0gYWNjb3VudElkIFRoZSBORUFSIGFjY291bnQgdGhhdCBzaWduZWQgdGhlIHRyYW5zYWN0aW9uXG4gICAgICovXG4gICAgYXN5bmMgdHhTdGF0dXModHhIYXNoLCBhY2NvdW50SWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0eEhhc2ggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eFN0YXR1c1N0cmluZyh0eEhhc2gsIGFjY291bnRJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eFN0YXR1c1VpbnQ4QXJyYXkodHhIYXNoLCBhY2NvdW50SWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIHR4U3RhdHVzVWludDhBcnJheSh0eEhhc2gsIGFjY291bnRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kSnNvblJwYygndHgnLCBbYm9yc2hfMS5iYXNlRW5jb2RlKHR4SGFzaCksIGFjY291bnRJZF0pO1xuICAgIH1cbiAgICBhc3luYyB0eFN0YXR1c1N0cmluZyh0eEhhc2gsIGFjY291bnRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kSnNvblJwYygndHgnLCBbdHhIYXNoLCBhY2NvdW50SWRdKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyBhIHRyYW5zYWN0aW9uJ3Mgc3RhdHVzIGZyb20gdGhlIFJQQyB3aXRoIHJlY2VpcHRzXG4gICAgICogU2VlIFtkb2NzIGZvciBtb3JlIGluZm9dKGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL2RldmVsb3AvZnJvbnQtZW5kL3JwYyN0cmFuc2FjdGlvbi1zdGF0dXMtd2l0aC1yZWNlaXB0cylcbiAgICAgKiBAcGFyYW0gdHhIYXNoIFRoZSBoYXNoIG9mIHRoZSB0cmFuc2FjdGlvblxuICAgICAqIEBwYXJhbSBhY2NvdW50SWQgVGhlIE5FQVIgYWNjb3VudCB0aGF0IHNpZ25lZCB0aGUgdHJhbnNhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaW5hbEV4ZWN1dGlvbk91dGNvbWU+fVxuICAgICAqL1xuICAgIGFzeW5jIHR4U3RhdHVzUmVjZWlwdHModHhIYXNoLCBhY2NvdW50SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZEpzb25ScGMoJ0VYUEVSSU1FTlRBTF90eF9zdGF0dXMnLCBbYm9yc2hfMS5iYXNlRW5jb2RlKHR4SGFzaCksIGFjY291bnRJZF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBRdWVyeSB0aGUgUlBDIGFzIFtzaG93biBpbiB0aGUgZG9jc10oaHR0cHM6Ly9kb2NzLm5lYXIub3JnL2RvY3MvZGV2ZWxvcC9mcm9udC1lbmQvcnBjI2FjY291bnRzLS1jb250cmFjdHMpXG4gICAgICogUXVlcnkgdGhlIFJQQyBieSBwYXNzaW5nIGFuIHtAbGluayBScGNRdWVyeVJlcXVlc3R9XG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kb2NzLm5lYXIub3JnL2RvY3MvZGV2ZWxvcC9mcm9udC1lbmQvcnBjI2FjY291bnRzLS1jb250cmFjdHN9XG4gICAgICpcbiAgICAgKiBAdHlwZVBhcmFtIFQgdGhlIHNoYXBlIG9mIHRoZSByZXR1cm5lZCBxdWVyeSByZXNwb25zZVxuICAgICAqL1xuICAgIGFzeW5jIHF1ZXJ5KC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCB0aGlzLnNlbmRKc29uUnBjKCdxdWVyeScsIGFyZ3NbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgW3BhdGgsIGRhdGFdID0gYXJncztcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHRoaXMuc2VuZEpzb25ScGMoJ3F1ZXJ5JywgW3BhdGgsIGRhdGFdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IGVycm9yc18xLlR5cGVkRXJyb3IoYFF1ZXJ5aW5nICR7YXJnc30gZmFpbGVkOiAke3Jlc3VsdC5lcnJvcn0uXFxuJHtKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpfWAsIHJwY19lcnJvcnNfMS5nZXRFcnJvclR5cGVGcm9tRXJyb3JNZXNzYWdlKHJlc3VsdC5lcnJvcikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IGZvciBibG9jayBpbmZvIGZyb20gdGhlIFJQQ1xuICAgICAqIHBhc3MgYmxvY2tfaWQgT1IgZmluYWxpdHkgYXMgYmxvY2tRdWVyeSwgbm90IGJvdGhcbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL2RvY3MubmVhci5vcmcvZG9jcy9pbnRlcmFjdGlvbi9ycGMjYmxvY2t9XG4gICAgICpcbiAgICAgKiBAcGFyYW0gYmxvY2tRdWVyeSB7QGxpbmsgQmxvY2tSZWZlcmVuY2V9IChwYXNzaW5nIGEge0BsaW5rIEJsb2NrSWR9IGlzIGRlcHJlY2F0ZWQpXG4gICAgICovXG4gICAgYXN5bmMgYmxvY2soYmxvY2tRdWVyeSkge1xuICAgICAgICBjb25zdCB7IGZpbmFsaXR5IH0gPSBibG9ja1F1ZXJ5O1xuICAgICAgICBsZXQgeyBibG9ja0lkIH0gPSBibG9ja1F1ZXJ5O1xuICAgICAgICBpZiAodHlwZW9mIGJsb2NrUXVlcnkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBkZXByZWNhdGUgPSBkZXBkXzEuZGVmYXVsdCgnSnNvblJwY1Byb3ZpZGVyLmJsb2NrKGJsb2NrSWQpJyk7XG4gICAgICAgICAgICBkZXByZWNhdGUoJ3VzZSBgYmxvY2soeyBibG9ja0lkIH0pYCBvciBgYmxvY2soeyBmaW5hbGl0eSB9KWAgaW5zdGVhZCcpO1xuICAgICAgICAgICAgYmxvY2tJZCA9IGJsb2NrUXVlcnk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZEpzb25ScGMoJ2Jsb2NrJywgeyBibG9ja19pZDogYmxvY2tJZCwgZmluYWxpdHkgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IGNoYW5nZXMgaW4gYmxvY2sgZnJvbSB0aGUgUlBDXG4gICAgICogcGFzcyBibG9ja19pZCBPUiBmaW5hbGl0eSBhcyBibG9ja1F1ZXJ5LCBub3QgYm90aFxuICAgICAqIFNlZSBbZG9jcyBmb3IgbW9yZSBpbmZvXShodHRwczovL2RvY3MubmVhci5vcmcvZG9jcy9kZXZlbG9wL2Zyb250LWVuZC9ycGMjYmxvY2stZGV0YWlscylcbiAgICAgKi9cbiAgICBhc3luYyBibG9ja0NoYW5nZXMoYmxvY2tRdWVyeSkge1xuICAgICAgICBjb25zdCB7IGZpbmFsaXR5IH0gPSBibG9ja1F1ZXJ5O1xuICAgICAgICBjb25zdCB7IGJsb2NrSWQgfSA9IGJsb2NrUXVlcnk7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRKc29uUnBjKCdFWFBFUklNRU5UQUxfY2hhbmdlc19pbl9ibG9jaycsIHsgYmxvY2tfaWQ6IGJsb2NrSWQsIGZpbmFsaXR5IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBRdWVyaWVzIGZvciBkZXRhaWxzIGFib3V0IGEgc3BlY2lmaWMgY2h1bmsgYXBwZW5kaW5nIGRldGFpbHMgb2YgcmVjZWlwdHMgYW5kIHRyYW5zYWN0aW9ucyB0byB0aGUgc2FtZSBjaHVuayBkYXRhIHByb3ZpZGVkIGJ5IGEgYmxvY2tcbiAgICAgKiBAc2VlIHtAbGluayBodHRwczovL2RvY3MubmVhci5vcmcvZG9jcy9pbnRlcmFjdGlvbi9ycGMjY2h1bmt9XG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2h1bmtJZCBIYXNoIG9mIGEgY2h1bmsgSUQgb3Igc2hhcmQgSURcbiAgICAgKi9cbiAgICBhc3luYyBjaHVuayhjaHVua0lkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRKc29uUnBjKCdjaHVuaycsIFtjaHVua0lkXSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFF1ZXJ5IHZhbGlkYXRvcnMgb2YgdGhlIGVwb2NoIGRlZmluZWQgYnkgdGhlIGdpdmVuIGJsb2NrIGlkLlxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL2RldmVsb3AvZnJvbnQtZW5kL3JwYyNkZXRhaWxlZC12YWxpZGF0b3Itc3RhdHVzfVxuICAgICAqXG4gICAgICogQHBhcmFtIGJsb2NrSWQgQmxvY2sgaGFzaCBvciBoZWlnaHQsIG9yIG51bGwgZm9yIGxhdGVzdC5cbiAgICAgKi9cbiAgICBhc3luYyB2YWxpZGF0b3JzKGJsb2NrSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZEpzb25ScGMoJ3ZhbGlkYXRvcnMnLCBbYmxvY2tJZF0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEdldHMgdGhlIGdlbmVzaXMgY29uZmlnIGZyb20gUlBDXG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kb2NzLm5lYXIub3JnL2RvY3MvZGV2ZWxvcC9mcm9udC1lbmQvcnBjI2dlbmVzaXMtY29uZmlnfVxuICAgICAqL1xuICAgIGFzeW5jIGV4cGVyaW1lbnRhbF9nZW5lc2lzQ29uZmlnKCkge1xuICAgICAgICBjb25zdCBkZXByZWNhdGUgPSBkZXBkXzEuZGVmYXVsdCgnSnNvblJwY1Byb3ZpZGVyLmV4cGVyaW1lbnRhbF9wcm90b2NvbENvbmZpZygpJyk7XG4gICAgICAgIGRlcHJlY2F0ZSgndXNlIGBleHBlcmltZW50YWxfcHJvdG9jb2xDb25maWcoeyBzeW5jX2NoZWNrcG9pbnQ6IFxcJ2dlbmVzaXNcXCcgfSlgIHRvIGZldGNoIHRoZSB1cC10by1kYXRlIG9yIGdlbmVzaXMgcHJvdG9jb2wgY29uZmlnIGV4cGxpY2l0bHknKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZEpzb25ScGMoJ0VYUEVSSU1FTlRBTF9wcm90b2NvbF9jb25maWcnLCB7IHN5bmNfY2hlY2twb2ludDogJ2dlbmVzaXMnIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBwcm90b2NvbCBjb25maWcgYXQgYSBibG9jayBmcm9tIFJQQ1xuICAgICAqIEBzZWUge0BsaW5rIH1cbiAgICAgKlxuICAgICAqIEBwYXJhbSBibG9ja1JlZmVyZW5jZSBzcGVjaWZpZXMgdGhlIGJsb2NrIHRvIGdldCB0aGUgcHJvdG9jb2wgY29uZmlnIGZvclxuICAgICAqL1xuICAgIGFzeW5jIGV4cGVyaW1lbnRhbF9wcm90b2NvbENvbmZpZyhibG9ja1JlZmVyZW5jZSkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5zZW5kSnNvblJwYygnRVhQRVJJTUVOVEFMX3Byb3RvY29sX2NvbmZpZycsIGJsb2NrUmVmZXJlbmNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBsaWdodENsaWVudFByb29mfSBpbnN0ZWFkXG4gICAgICovXG4gICAgYXN5bmMgZXhwZXJpbWVudGFsX2xpZ2h0Q2xpZW50UHJvb2YocmVxdWVzdCkge1xuICAgICAgICBjb25zdCBkZXByZWNhdGUgPSBkZXBkXzEuZGVmYXVsdCgnSnNvblJwY1Byb3ZpZGVyLmV4cGVyaW1lbnRhbF9saWdodENsaWVudFByb29mKHJlcXVlc3QpJyk7XG4gICAgICAgIGRlcHJlY2F0ZSgndXNlIGBsaWdodENsaWVudFByb29mYCBpbnN0ZWFkJyk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmxpZ2h0Q2xpZW50UHJvb2YocmVxdWVzdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgYSBsaWdodCBjbGllbnQgZXhlY3V0aW9uIHByb29mIGZvciB2ZXJpZnlpbmcgZXhlY3V0aW9uIG91dGNvbWVzXG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL25lYXJwcm90b2NvbC9ORVBzL2Jsb2IvbWFzdGVyL3NwZWNzL0NoYWluU3BlYy9MaWdodENsaWVudC5tZCNsaWdodC1jbGllbnQtcHJvb2Z9XG4gICAgICovXG4gICAgYXN5bmMgbGlnaHRDbGllbnRQcm9vZihyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnNlbmRKc29uUnBjKCdFWFBFUklNRU5UQUxfbGlnaHRfY2xpZW50X3Byb29mJywgcmVxdWVzdCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgYWNjZXNzIGtleSBjaGFuZ2VzIGZvciBhIGdpdmVuIGFycmF5IG9mIGFjY291bnRJZHNcbiAgICAgKiBTZWUgW2RvY3MgZm9yIG1vcmUgaW5mb10oaHR0cHM6Ly9kb2NzLm5lYXIub3JnL2RvY3MvZGV2ZWxvcC9mcm9udC1lbmQvcnBjI3ZpZXctYWNjZXNzLWtleS1jaGFuZ2VzLWFsbClcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDaGFuZ2VSZXN1bHQ+fVxuICAgICAqL1xuICAgIGFzeW5jIGFjY2Vzc0tleUNoYW5nZXMoYWNjb3VudElkQXJyYXksIGJsb2NrUXVlcnkpIHtcbiAgICAgICAgY29uc3QgeyBmaW5hbGl0eSB9ID0gYmxvY2tRdWVyeTtcbiAgICAgICAgY29uc3QgeyBibG9ja0lkIH0gPSBibG9ja1F1ZXJ5O1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kSnNvblJwYygnRVhQRVJJTUVOVEFMX2NoYW5nZXMnLCB7XG4gICAgICAgICAgICBjaGFuZ2VzX3R5cGU6ICdhbGxfYWNjZXNzX2tleV9jaGFuZ2VzJyxcbiAgICAgICAgICAgIGFjY291bnRfaWRzOiBhY2NvdW50SWRBcnJheSxcbiAgICAgICAgICAgIGJsb2NrX2lkOiBibG9ja0lkLFxuICAgICAgICAgICAgZmluYWxpdHlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgc2luZ2xlIGFjY2VzcyBrZXkgY2hhbmdlcyBmb3IgYSBnaXZlbiBhcnJheSBvZiBhY2Nlc3Mga2V5c1xuICAgICAqIHBhc3MgYmxvY2tfaWQgT1IgZmluYWxpdHkgYXMgYmxvY2tRdWVyeSwgbm90IGJvdGhcbiAgICAgKiBTZWUgW2RvY3MgZm9yIG1vcmUgaW5mb10oaHR0cHM6Ly9kb2NzLm5lYXIub3JnL2RvY3MvZGV2ZWxvcC9mcm9udC1lbmQvcnBjI3ZpZXctYWNjZXNzLWtleS1jaGFuZ2VzLXNpbmdsZSlcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDaGFuZ2VSZXN1bHQ+fVxuICAgICAqL1xuICAgIGFzeW5jIHNpbmdsZUFjY2Vzc0tleUNoYW5nZXMoYWNjZXNzS2V5QXJyYXksIGJsb2NrUXVlcnkpIHtcbiAgICAgICAgY29uc3QgeyBmaW5hbGl0eSB9ID0gYmxvY2tRdWVyeTtcbiAgICAgICAgY29uc3QgeyBibG9ja0lkIH0gPSBibG9ja1F1ZXJ5O1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kSnNvblJwYygnRVhQRVJJTUVOVEFMX2NoYW5nZXMnLCB7XG4gICAgICAgICAgICBjaGFuZ2VzX3R5cGU6ICdzaW5nbGVfYWNjZXNzX2tleV9jaGFuZ2VzJyxcbiAgICAgICAgICAgIGtleXM6IGFjY2Vzc0tleUFycmF5LFxuICAgICAgICAgICAgYmxvY2tfaWQ6IGJsb2NrSWQsXG4gICAgICAgICAgICBmaW5hbGl0eVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyBhY2NvdW50IGNoYW5nZXMgZm9yIGEgZ2l2ZW4gYXJyYXkgb2YgYWNjb3VudElkc1xuICAgICAqIHBhc3MgYmxvY2tfaWQgT1IgZmluYWxpdHkgYXMgYmxvY2tRdWVyeSwgbm90IGJvdGhcbiAgICAgKiBTZWUgW2RvY3MgZm9yIG1vcmUgaW5mb10oaHR0cHM6Ly9kb2NzLm5lYXIub3JnL2RvY3MvZGV2ZWxvcC9mcm9udC1lbmQvcnBjI3ZpZXctYWNjb3VudC1jaGFuZ2VzKVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENoYW5nZVJlc3VsdD59XG4gICAgICovXG4gICAgYXN5bmMgYWNjb3VudENoYW5nZXMoYWNjb3VudElkQXJyYXksIGJsb2NrUXVlcnkpIHtcbiAgICAgICAgY29uc3QgeyBmaW5hbGl0eSB9ID0gYmxvY2tRdWVyeTtcbiAgICAgICAgY29uc3QgeyBibG9ja0lkIH0gPSBibG9ja1F1ZXJ5O1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kSnNvblJwYygnRVhQRVJJTUVOVEFMX2NoYW5nZXMnLCB7XG4gICAgICAgICAgICBjaGFuZ2VzX3R5cGU6ICdhY2NvdW50X2NoYW5nZXMnLFxuICAgICAgICAgICAgYWNjb3VudF9pZHM6IGFjY291bnRJZEFycmF5LFxuICAgICAgICAgICAgYmxvY2tfaWQ6IGJsb2NrSWQsXG4gICAgICAgICAgICBmaW5hbGl0eVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyBjb250cmFjdCBzdGF0ZSBjaGFuZ2VzIGZvciBhIGdpdmVuIGFycmF5IG9mIGFjY291bnRJZHNcbiAgICAgKiBwYXNzIGJsb2NrX2lkIE9SIGZpbmFsaXR5IGFzIGJsb2NrUXVlcnksIG5vdCBib3RoXG4gICAgICogTm90ZTogSWYgeW91IHBhc3MgYSBrZXlQcmVmaXggaXQgbXVzdCBiZSBiYXNlNjQgZW5jb2RlZFxuICAgICAqIFNlZSBbZG9jcyBmb3IgbW9yZSBpbmZvXShodHRwczovL2RvY3MubmVhci5vcmcvZG9jcy9kZXZlbG9wL2Zyb250LWVuZC9ycGMjdmlldy1jb250cmFjdC1zdGF0ZS1jaGFuZ2VzKVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPENoYW5nZVJlc3VsdD59XG4gICAgICovXG4gICAgYXN5bmMgY29udHJhY3RTdGF0ZUNoYW5nZXMoYWNjb3VudElkQXJyYXksIGJsb2NrUXVlcnksIGtleVByZWZpeCA9ICcnKSB7XG4gICAgICAgIGNvbnN0IHsgZmluYWxpdHkgfSA9IGJsb2NrUXVlcnk7XG4gICAgICAgIGNvbnN0IHsgYmxvY2tJZCB9ID0gYmxvY2tRdWVyeTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZEpzb25ScGMoJ0VYUEVSSU1FTlRBTF9jaGFuZ2VzJywge1xuICAgICAgICAgICAgY2hhbmdlc190eXBlOiAnZGF0YV9jaGFuZ2VzJyxcbiAgICAgICAgICAgIGFjY291bnRfaWRzOiBhY2NvdW50SWRBcnJheSxcbiAgICAgICAgICAgIGtleV9wcmVmaXhfYmFzZTY0OiBrZXlQcmVmaXgsXG4gICAgICAgICAgICBibG9ja19pZDogYmxvY2tJZCxcbiAgICAgICAgICAgIGZpbmFsaXR5XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXRzIGNvbnRyYWN0IGNvZGUgY2hhbmdlcyBmb3IgYSBnaXZlbiBhcnJheSBvZiBhY2NvdW50SWRzXG4gICAgICogcGFzcyBibG9ja19pZCBPUiBmaW5hbGl0eSBhcyBibG9ja1F1ZXJ5LCBub3QgYm90aFxuICAgICAqIE5vdGU6IENoYW5nZSBpcyByZXR1cm5lZCBpbiBhIGJhc2U2NCBlbmNvZGVkIFdBU00gZmlsZVxuICAgICAqIFNlZSBbZG9jcyBmb3IgbW9yZSBpbmZvXShodHRwczovL2RvY3MubmVhci5vcmcvZG9jcy9kZXZlbG9wL2Zyb250LWVuZC9ycGMjdmlldy1jb250cmFjdC1jb2RlLWNoYW5nZXMpXG4gICAgICogQHJldHVybnMge1Byb21pc2U8Q2hhbmdlUmVzdWx0Pn1cbiAgICAgKi9cbiAgICBhc3luYyBjb250cmFjdENvZGVDaGFuZ2VzKGFjY291bnRJZEFycmF5LCBibG9ja1F1ZXJ5KSB7XG4gICAgICAgIGNvbnN0IHsgZmluYWxpdHkgfSA9IGJsb2NrUXVlcnk7XG4gICAgICAgIGNvbnN0IHsgYmxvY2tJZCB9ID0gYmxvY2tRdWVyeTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZEpzb25ScGMoJ0VYUEVSSU1FTlRBTF9jaGFuZ2VzJywge1xuICAgICAgICAgICAgY2hhbmdlc190eXBlOiAnY29udHJhY3RfY29kZV9jaGFuZ2VzJyxcbiAgICAgICAgICAgIGFjY291bnRfaWRzOiBhY2NvdW50SWRBcnJheSxcbiAgICAgICAgICAgIGJsb2NrX2lkOiBibG9ja0lkLFxuICAgICAgICAgICAgZmluYWxpdHlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgZ2FzIHByaWNlIGZvciBhIHNwZWNpZmljIGJsb2NrX2hlaWdodCBvciBibG9ja19oYXNoLlxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL2RldmVsb3AvZnJvbnQtZW5kL3JwYyNnYXMtcHJpY2V9XG4gICAgICpcbiAgICAgKiBAcGFyYW0gYmxvY2tJZCBCbG9jayBoYXNoIG9yIGhlaWdodCwgb3IgbnVsbCBmb3IgbGF0ZXN0LlxuICAgICAqL1xuICAgIGFzeW5jIGdhc1ByaWNlKGJsb2NrSWQpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuc2VuZEpzb25ScGMoJ2dhc19wcmljZScsIFtibG9ja0lkXSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpcmVjdGx5IGNhbGwgdGhlIFJQQyBzcGVjaWZ5aW5nIHRoZSBtZXRob2QgYW5kIHBhcmFtc1xuICAgICAqXG4gICAgICogQHBhcmFtIG1ldGhvZCBSUEMgbWV0aG9kXG4gICAgICogQHBhcmFtIHBhcmFtcyBQYXJhbWV0ZXJzIHRvIHRoZSBtZXRob2RcbiAgICAgKi9cbiAgICBhc3luYyBzZW5kSnNvblJwYyhtZXRob2QsIHBhcmFtcykge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGV4cG9uZW50aWFsX2JhY2tvZmZfMS5kZWZhdWx0KFJFUVVFU1RfUkVUUllfV0FJVCwgUkVRVUVTVF9SRVRSWV9OVU1CRVIsIFJFUVVFU1RfUkVUUllfV0FJVF9CQUNLT0ZGLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICBpZDogKF9uZXh0SWQrKyksXG4gICAgICAgICAgICAgICAgICAgIGpzb25ycGM6ICcyLjAnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdlYl8xLmZldGNoSnNvbih0aGlzLmNvbm5lY3Rpb24sIEpTT04uc3RyaW5naWZ5KHJlcXVlc3QpKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZS5lcnJvci5kYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZS5lcnJvci5kYXRhLmVycm9yX21lc3NhZ2UgPT09ICdzdHJpbmcnICYmIHR5cGVvZiByZXNwb25zZS5lcnJvci5kYXRhLmVycm9yX3R5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgZXJyb3IgZGF0YSBoYXMgZXJyb3JfbWVzc2FnZSBhbmQgZXJyb3JfdHlwZSBwcm9wZXJ0aWVzLCB3ZSBjb25zaWRlciB0aGF0IG5vZGUgcmV0dXJuZWQgYW4gZXJyb3IgaW4gdGhlIG9sZCBmb3JtYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXJyb3JzXzEuVHlwZWRFcnJvcihyZXNwb25zZS5lcnJvci5kYXRhLmVycm9yX21lc3NhZ2UsIHJlc3BvbnNlLmVycm9yLmRhdGEuZXJyb3JfdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBycGNfZXJyb3JzXzEucGFyc2VScGNFcnJvcihyZXNwb25zZS5lcnJvci5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGBbJHtyZXNwb25zZS5lcnJvci5jb2RlfV0gJHtyZXNwb25zZS5lcnJvci5tZXNzYWdlfTogJHtyZXNwb25zZS5lcnJvci5kYXRhfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiBBbGwgdGhpcyBoYWNrZXJ5IGlzIGhhcHBlbmluZyBiZWNhdXNlIHN0cnVjdHVyZWQgZXJyb3JzIG5vdCBpbXBsZW1lbnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogRml4IHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL25lYXJwcm90b2NvbC9uZWFyY29yZS9pc3N1ZXMvMTgzOSBnZXRzIHJlc29sdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3IuZGF0YSA9PT0gJ1RpbWVvdXQnIHx8IGVycm9yTWVzc2FnZS5pbmNsdWRlcygnVGltZW91dCBlcnJvcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZXJyb3JNZXNzYWdlLmluY2x1ZGVzKCdxdWVyeSBoYXMgdGltZWQgb3V0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgZXJyb3JzXzEuVHlwZWRFcnJvcihlcnJvck1lc3NhZ2UsICdUaW1lb3V0RXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBlcnJvcnNfMS5UeXBlZEVycm9yKGVycm9yTWVzc2FnZSwgcnBjX2Vycm9yc18xLmdldEVycm9yVHlwZUZyb21FcnJvck1lc3NhZ2UocmVzcG9uc2UuZXJyb3IuZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFN1Y2Nlc3Mgd2hlbiByZXNwb25zZS5lcnJvciBpcyBub3QgZXhpc3RcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IudHlwZSA9PT0gJ1RpbWVvdXRFcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm9jZXNzLmVudlsnTkVBUl9OT19MT0dTJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgUmV0cnlpbmcgcmVxdWVzdCB0byAke21ldGhvZH0gYXMgaXQgaGFzIHRpbWVkIG91dGAsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgeyByZXN1bHQgfSA9IHJlc3BvbnNlO1xuICAgICAgICAvLyBGcm9tIGpzb25ycGMgc3BlYzpcbiAgICAgICAgLy8gcmVzdWx0XG4gICAgICAgIC8vICAgVGhpcyBtZW1iZXIgaXMgUkVRVUlSRUQgb24gc3VjY2Vzcy5cbiAgICAgICAgLy8gICBUaGlzIG1lbWJlciBNVVNUIE5PVCBleGlzdCBpZiB0aGVyZSB3YXMgYW4gZXJyb3IgaW52b2tpbmcgdGhlIG1ldGhvZC5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgZXJyb3JzXzEuVHlwZWRFcnJvcihgRXhjZWVkZWQgJHtSRVFVRVNUX1JFVFJZX05VTUJFUn0gYXR0ZW1wdHMgZm9yIHJlcXVlc3QgdG8gJHttZXRob2R9LmAsICdSZXRyaWVzRXhjZWVkZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbmV4cG9ydHMuSnNvblJwY1Byb3ZpZGVyID0gSnNvblJwY1Byb3ZpZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIE5FQVIgUlBDIEFQSSByZXF1ZXN0IHR5cGVzIGFuZCByZXNwb25zZXNcbiAqIEBtb2R1bGVcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRUcmFuc2FjdGlvbkxhc3RSZXN1bHQgPSBleHBvcnRzLlByb3ZpZGVyID0gZXhwb3J0cy5JZFR5cGUgPSBleHBvcnRzLkZpbmFsRXhlY3V0aW9uU3RhdHVzQmFzaWMgPSBleHBvcnRzLkV4ZWN1dGlvblN0YXR1c0Jhc2ljID0gdm9pZCAwO1xudmFyIEV4ZWN1dGlvblN0YXR1c0Jhc2ljO1xuKGZ1bmN0aW9uIChFeGVjdXRpb25TdGF0dXNCYXNpYykge1xuICAgIEV4ZWN1dGlvblN0YXR1c0Jhc2ljW1wiVW5rbm93blwiXSA9IFwiVW5rbm93blwiO1xuICAgIEV4ZWN1dGlvblN0YXR1c0Jhc2ljW1wiUGVuZGluZ1wiXSA9IFwiUGVuZGluZ1wiO1xuICAgIEV4ZWN1dGlvblN0YXR1c0Jhc2ljW1wiRmFpbHVyZVwiXSA9IFwiRmFpbHVyZVwiO1xufSkoRXhlY3V0aW9uU3RhdHVzQmFzaWMgPSBleHBvcnRzLkV4ZWN1dGlvblN0YXR1c0Jhc2ljIHx8IChleHBvcnRzLkV4ZWN1dGlvblN0YXR1c0Jhc2ljID0ge30pKTtcbnZhciBGaW5hbEV4ZWN1dGlvblN0YXR1c0Jhc2ljO1xuKGZ1bmN0aW9uIChGaW5hbEV4ZWN1dGlvblN0YXR1c0Jhc2ljKSB7XG4gICAgRmluYWxFeGVjdXRpb25TdGF0dXNCYXNpY1tcIk5vdFN0YXJ0ZWRcIl0gPSBcIk5vdFN0YXJ0ZWRcIjtcbiAgICBGaW5hbEV4ZWN1dGlvblN0YXR1c0Jhc2ljW1wiU3RhcnRlZFwiXSA9IFwiU3RhcnRlZFwiO1xuICAgIEZpbmFsRXhlY3V0aW9uU3RhdHVzQmFzaWNbXCJGYWlsdXJlXCJdID0gXCJGYWlsdXJlXCI7XG59KShGaW5hbEV4ZWN1dGlvblN0YXR1c0Jhc2ljID0gZXhwb3J0cy5GaW5hbEV4ZWN1dGlvblN0YXR1c0Jhc2ljIHx8IChleHBvcnRzLkZpbmFsRXhlY3V0aW9uU3RhdHVzQmFzaWMgPSB7fSkpO1xudmFyIElkVHlwZTtcbihmdW5jdGlvbiAoSWRUeXBlKSB7XG4gICAgSWRUeXBlW1wiVHJhbnNhY3Rpb25cIl0gPSBcInRyYW5zYWN0aW9uXCI7XG4gICAgSWRUeXBlW1wiUmVjZWlwdFwiXSA9IFwicmVjZWlwdFwiO1xufSkoSWRUeXBlID0gZXhwb3J0cy5JZFR5cGUgfHwgKGV4cG9ydHMuSWRUeXBlID0ge30pKTtcbi8qKiBAaGlkZGVuICovXG5jbGFzcyBQcm92aWRlciB7XG59XG5leHBvcnRzLlByb3ZpZGVyID0gUHJvdmlkZXI7XG4vKiogQGhpZGRlbiAqL1xuZnVuY3Rpb24gZ2V0VHJhbnNhY3Rpb25MYXN0UmVzdWx0KHR4UmVzdWx0KSB7XG4gICAgaWYgKHR5cGVvZiB0eFJlc3VsdC5zdGF0dXMgPT09ICdvYmplY3QnICYmIHR5cGVvZiB0eFJlc3VsdC5zdGF0dXMuU3VjY2Vzc1ZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IEJ1ZmZlci5mcm9tKHR4UmVzdWx0LnN0YXR1cy5TdWNjZXNzVmFsdWUsICdiYXNlNjQnKS50b1N0cmluZygpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnRzLmdldFRyYW5zYWN0aW9uTGFzdFJlc3VsdCA9IGdldFRyYW5zYWN0aW9uTGFzdFJlc3VsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Jbk1lbW9yeVNpZ25lciA9IGV4cG9ydHMuU2lnbmVyID0gdm9pZCAwO1xuY29uc3QganNfc2hhMjU2XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImpzLXNoYTI1NlwiKSk7XG5jb25zdCBrZXlfcGFpcl8xID0gcmVxdWlyZShcIi4vdXRpbHMva2V5X3BhaXJcIik7XG5jb25zdCBpbl9tZW1vcnlfa2V5X3N0b3JlXzEgPSByZXF1aXJlKFwiLi9rZXlfc3RvcmVzL2luX21lbW9yeV9rZXlfc3RvcmVcIik7XG4vKipcbiAqIEdlbmVyYWwgc2lnbmluZyBpbnRlcmZhY2UsIGNhbiBiZSB1c2VkIGZvciBpbiBtZW1vcnkgc2lnbmluZywgUlBDIHNpbmdpbmcsIGV4dGVybmFsIHdhbGxldCwgSFNNLCBldGMuXG4gKi9cbmNsYXNzIFNpZ25lciB7XG59XG5leHBvcnRzLlNpZ25lciA9IFNpZ25lcjtcbi8qKlxuICogU2lnbnMgdXNpbmcgaW4gbWVtb3J5IGtleSBzdG9yZS5cbiAqL1xuY2xhc3MgSW5NZW1vcnlTaWduZXIgZXh0ZW5kcyBTaWduZXIge1xuICAgIGNvbnN0cnVjdG9yKGtleVN0b3JlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua2V5U3RvcmUgPSBrZXlTdG9yZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNpbmdsZSBhY2NvdW50IFNpZ25lciBpbnN0YW5jZSB3aXRoIGFjY291bnQsIG5ldHdvcmsgYW5kIGtleVBhaXIgcHJvdmlkZWQuXG4gICAgICpcbiAgICAgKiBJbnRlbmRlZCB0byBiZSB1c2VmdWwgZm9yIHRlbXBvcmFyeSBrZXlzIChlLmcuIGNsYWltaW5nIGEgTGlua2Ryb3ApLlxuICAgICAqXG4gICAgICogQHBhcmFtIG5ldHdvcmtJZCBUaGUgdGFyZ2V0ZWQgbmV0d29yay4gKGV4LiBkZWZhdWx0LCBiZXRhbmV0LCBldGPigKYpXG4gICAgICogQHBhcmFtIGFjY291bnRJZCBUaGUgTkVBUiBhY2NvdW50IHRvIGFzc2lnbiB0aGUga2V5IHBhaXIgdG9cbiAgICAgKiBAcGFyYW0ga2V5UGFpciBUaGUga2V5UGFpciB0byB1c2UgZm9yIHNpZ25pbmdcbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgZnJvbUtleVBhaXIobmV0d29ya0lkLCBhY2NvdW50SWQsIGtleVBhaXIpIHtcbiAgICAgICAgY29uc3Qga2V5U3RvcmUgPSBuZXcgaW5fbWVtb3J5X2tleV9zdG9yZV8xLkluTWVtb3J5S2V5U3RvcmUoKTtcbiAgICAgICAgYXdhaXQga2V5U3RvcmUuc2V0S2V5KG5ldHdvcmtJZCwgYWNjb3VudElkLCBrZXlQYWlyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBJbk1lbW9yeVNpZ25lcihrZXlTdG9yZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwdWJsaWMga2V5IGZvciB0aGUgYWNjb3VudCBnaXZlblxuICAgICAqIEBwYXJhbSBhY2NvdW50SWQgVGhlIE5FQVIgYWNjb3VudCB0byBhc3NpZ24gYSBwdWJsaWMga2V5IHRvXG4gICAgICogQHBhcmFtIG5ldHdvcmtJZCBUaGUgdGFyZ2V0ZWQgbmV0d29yay4gKGV4LiBkZWZhdWx0LCBiZXRhbmV0LCBldGPigKYpXG4gICAgICogQHJldHVybnMge1Byb21pc2U8UHVibGljS2V5Pn1cbiAgICAgKi9cbiAgICBhc3luYyBjcmVhdGVLZXkoYWNjb3VudElkLCBuZXR3b3JrSWQpIHtcbiAgICAgICAgY29uc3Qga2V5UGFpciA9IGtleV9wYWlyXzEuS2V5UGFpci5mcm9tUmFuZG9tKCdlZDI1NTE5Jyk7XG4gICAgICAgIGF3YWl0IHRoaXMua2V5U3RvcmUuc2V0S2V5KG5ldHdvcmtJZCwgYWNjb3VudElkLCBrZXlQYWlyKTtcbiAgICAgICAgcmV0dXJuIGtleVBhaXIuZ2V0UHVibGljS2V5KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGV4aXN0aW5nIHB1YmxpYyBrZXkgZm9yIGEgZ2l2ZW4gYWNjb3VudFxuICAgICAqIEBwYXJhbSBhY2NvdW50SWQgVGhlIE5FQVIgYWNjb3VudCB0byBhc3NpZ24gYSBwdWJsaWMga2V5IHRvXG4gICAgICogQHBhcmFtIG5ldHdvcmtJZCBUaGUgdGFyZ2V0ZWQgbmV0d29yay4gKGV4LiBkZWZhdWx0LCBiZXRhbmV0LCBldGPigKYpXG4gICAgICogQHJldHVybnMge1Byb21pc2U8UHVibGljS2V5Pn0gUmV0dXJucyB0aGUgcHVibGljIGtleSBvciBudWxsIGlmIG5vdCBmb3VuZFxuICAgICAqL1xuICAgIGFzeW5jIGdldFB1YmxpY0tleShhY2NvdW50SWQsIG5ldHdvcmtJZCkge1xuICAgICAgICBjb25zdCBrZXlQYWlyID0gYXdhaXQgdGhpcy5rZXlTdG9yZS5nZXRLZXkobmV0d29ya0lkLCBhY2NvdW50SWQpO1xuICAgICAgICBpZiAoa2V5UGFpciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleVBhaXIuZ2V0UHVibGljS2V5KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBtZXNzYWdlIEEgbWVzc2FnZSB0byBiZSBzaWduZWQsIHR5cGljYWxseSBhIHNlcmlhbGl6ZWQgdHJhbnNhY3Rpb25cbiAgICAgKiBAcGFyYW0gYWNjb3VudElkIHRoZSBORUFSIGFjY291bnQgc2lnbmluZyB0aGUgbWVzc2FnZVxuICAgICAqIEBwYXJhbSBuZXR3b3JrSWQgVGhlIHRhcmdldGVkIG5ldHdvcmsuIChleC4gZGVmYXVsdCwgYmV0YW5ldCwgZXRj4oCmKVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFNpZ25hdHVyZT59XG4gICAgICovXG4gICAgYXN5bmMgc2lnbk1lc3NhZ2UobWVzc2FnZSwgYWNjb3VudElkLCBuZXR3b3JrSWQpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IG5ldyBVaW50OEFycmF5KGpzX3NoYTI1Nl8xLmRlZmF1bHQuc2hhMjU2LmFycmF5KG1lc3NhZ2UpKTtcbiAgICAgICAgaWYgKCFhY2NvdW50SWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5NZW1vcnlTaWduZXIgcmVxdWlyZXMgcHJvdmlkZWQgYWNjb3VudCBpZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleVBhaXIgPSBhd2FpdCB0aGlzLmtleVN0b3JlLmdldEtleShuZXR3b3JrSWQsIGFjY291bnRJZCk7XG4gICAgICAgIGlmIChrZXlQYWlyID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEtleSBmb3IgJHthY2NvdW50SWR9IG5vdCBmb3VuZCBpbiAke25ldHdvcmtJZH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ga2V5UGFpci5zaWduKGhhc2gpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBJbk1lbW9yeVNpZ25lcigke3RoaXMua2V5U3RvcmV9KWA7XG4gICAgfVxufVxuZXhwb3J0cy5Jbk1lbW9yeVNpZ25lciA9IEluTWVtb3J5U2lnbmVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNpZ25UcmFuc2FjdGlvbiA9IGV4cG9ydHMuY3JlYXRlVHJhbnNhY3Rpb24gPSBleHBvcnRzLlNDSEVNQSA9IGV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy5TaWduZWRUcmFuc2FjdGlvbiA9IGV4cG9ydHMuVHJhbnNhY3Rpb24gPSBleHBvcnRzLlNpZ25hdHVyZSA9IGV4cG9ydHMuZGVsZXRlQWNjb3VudCA9IGV4cG9ydHMuZGVsZXRlS2V5ID0gZXhwb3J0cy5hZGRLZXkgPSBleHBvcnRzLnN0YWtlID0gZXhwb3J0cy50cmFuc2ZlciA9IGV4cG9ydHMuZnVuY3Rpb25DYWxsID0gZXhwb3J0cy5zdHJpbmdpZnlKc29uT3JCeXRlcyA9IGV4cG9ydHMuZGVwbG95Q29udHJhY3QgPSBleHBvcnRzLmNyZWF0ZUFjY291bnQgPSBleHBvcnRzLkRlbGV0ZUFjY291bnQgPSBleHBvcnRzLkRlbGV0ZUtleSA9IGV4cG9ydHMuQWRkS2V5ID0gZXhwb3J0cy5TdGFrZSA9IGV4cG9ydHMuVHJhbnNmZXIgPSBleHBvcnRzLkZ1bmN0aW9uQ2FsbCA9IGV4cG9ydHMuRGVwbG95Q29udHJhY3QgPSBleHBvcnRzLkNyZWF0ZUFjY291bnQgPSBleHBvcnRzLklBY3Rpb24gPSBleHBvcnRzLmZ1bmN0aW9uQ2FsbEFjY2Vzc0tleSA9IGV4cG9ydHMuZnVsbEFjY2Vzc0tleSA9IGV4cG9ydHMuQWNjZXNzS2V5ID0gZXhwb3J0cy5BY2Nlc3NLZXlQZXJtaXNzaW9uID0gZXhwb3J0cy5GdWxsQWNjZXNzUGVybWlzc2lvbiA9IGV4cG9ydHMuRnVuY3Rpb25DYWxsUGVybWlzc2lvbiA9IHZvaWQgMDtcbmNvbnN0IGpzX3NoYTI1Nl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJqcy1zaGEyNTZcIikpO1xuY29uc3QgZW51bXNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2VudW1zXCIpO1xuY29uc3QgYm9yc2hfMSA9IHJlcXVpcmUoXCJib3JzaFwiKTtcbmNvbnN0IGtleV9wYWlyXzEgPSByZXF1aXJlKFwiLi91dGlscy9rZXlfcGFpclwiKTtcbmNsYXNzIEZ1bmN0aW9uQ2FsbFBlcm1pc3Npb24gZXh0ZW5kcyBlbnVtc18xLkFzc2lnbmFibGUge1xufVxuZXhwb3J0cy5GdW5jdGlvbkNhbGxQZXJtaXNzaW9uID0gRnVuY3Rpb25DYWxsUGVybWlzc2lvbjtcbmNsYXNzIEZ1bGxBY2Nlc3NQZXJtaXNzaW9uIGV4dGVuZHMgZW51bXNfMS5Bc3NpZ25hYmxlIHtcbn1cbmV4cG9ydHMuRnVsbEFjY2Vzc1Blcm1pc3Npb24gPSBGdWxsQWNjZXNzUGVybWlzc2lvbjtcbmNsYXNzIEFjY2Vzc0tleVBlcm1pc3Npb24gZXh0ZW5kcyBlbnVtc18xLkVudW0ge1xufVxuZXhwb3J0cy5BY2Nlc3NLZXlQZXJtaXNzaW9uID0gQWNjZXNzS2V5UGVybWlzc2lvbjtcbmNsYXNzIEFjY2Vzc0tleSBleHRlbmRzIGVudW1zXzEuQXNzaWduYWJsZSB7XG59XG5leHBvcnRzLkFjY2Vzc0tleSA9IEFjY2Vzc0tleTtcbmZ1bmN0aW9uIGZ1bGxBY2Nlc3NLZXkoKSB7XG4gICAgcmV0dXJuIG5ldyBBY2Nlc3NLZXkoeyBub25jZTogMCwgcGVybWlzc2lvbjogbmV3IEFjY2Vzc0tleVBlcm1pc3Npb24oeyBmdWxsQWNjZXNzOiBuZXcgRnVsbEFjY2Vzc1Blcm1pc3Npb24oe30pIH0pIH0pO1xufVxuZXhwb3J0cy5mdWxsQWNjZXNzS2V5ID0gZnVsbEFjY2Vzc0tleTtcbmZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbEFjY2Vzc0tleShyZWNlaXZlcklkLCBtZXRob2ROYW1lcywgYWxsb3dhbmNlKSB7XG4gICAgcmV0dXJuIG5ldyBBY2Nlc3NLZXkoeyBub25jZTogMCwgcGVybWlzc2lvbjogbmV3IEFjY2Vzc0tleVBlcm1pc3Npb24oeyBmdW5jdGlvbkNhbGw6IG5ldyBGdW5jdGlvbkNhbGxQZXJtaXNzaW9uKHsgcmVjZWl2ZXJJZCwgYWxsb3dhbmNlLCBtZXRob2ROYW1lcyB9KSB9KSB9KTtcbn1cbmV4cG9ydHMuZnVuY3Rpb25DYWxsQWNjZXNzS2V5ID0gZnVuY3Rpb25DYWxsQWNjZXNzS2V5O1xuY2xhc3MgSUFjdGlvbiBleHRlbmRzIGVudW1zXzEuQXNzaWduYWJsZSB7XG59XG5leHBvcnRzLklBY3Rpb24gPSBJQWN0aW9uO1xuY2xhc3MgQ3JlYXRlQWNjb3VudCBleHRlbmRzIElBY3Rpb24ge1xufVxuZXhwb3J0cy5DcmVhdGVBY2NvdW50ID0gQ3JlYXRlQWNjb3VudDtcbmNsYXNzIERlcGxveUNvbnRyYWN0IGV4dGVuZHMgSUFjdGlvbiB7XG59XG5leHBvcnRzLkRlcGxveUNvbnRyYWN0ID0gRGVwbG95Q29udHJhY3Q7XG5jbGFzcyBGdW5jdGlvbkNhbGwgZXh0ZW5kcyBJQWN0aW9uIHtcbn1cbmV4cG9ydHMuRnVuY3Rpb25DYWxsID0gRnVuY3Rpb25DYWxsO1xuY2xhc3MgVHJhbnNmZXIgZXh0ZW5kcyBJQWN0aW9uIHtcbn1cbmV4cG9ydHMuVHJhbnNmZXIgPSBUcmFuc2ZlcjtcbmNsYXNzIFN0YWtlIGV4dGVuZHMgSUFjdGlvbiB7XG59XG5leHBvcnRzLlN0YWtlID0gU3Rha2U7XG5jbGFzcyBBZGRLZXkgZXh0ZW5kcyBJQWN0aW9uIHtcbn1cbmV4cG9ydHMuQWRkS2V5ID0gQWRkS2V5O1xuY2xhc3MgRGVsZXRlS2V5IGV4dGVuZHMgSUFjdGlvbiB7XG59XG5leHBvcnRzLkRlbGV0ZUtleSA9IERlbGV0ZUtleTtcbmNsYXNzIERlbGV0ZUFjY291bnQgZXh0ZW5kcyBJQWN0aW9uIHtcbn1cbmV4cG9ydHMuRGVsZXRlQWNjb3VudCA9IERlbGV0ZUFjY291bnQ7XG5mdW5jdGlvbiBjcmVhdGVBY2NvdW50KCkge1xuICAgIHJldHVybiBuZXcgQWN0aW9uKHsgY3JlYXRlQWNjb3VudDogbmV3IENyZWF0ZUFjY291bnQoe30pIH0pO1xufVxuZXhwb3J0cy5jcmVhdGVBY2NvdW50ID0gY3JlYXRlQWNjb3VudDtcbmZ1bmN0aW9uIGRlcGxveUNvbnRyYWN0KGNvZGUpIHtcbiAgICByZXR1cm4gbmV3IEFjdGlvbih7IGRlcGxveUNvbnRyYWN0OiBuZXcgRGVwbG95Q29udHJhY3QoeyBjb2RlIH0pIH0pO1xufVxuZXhwb3J0cy5kZXBsb3lDb250cmFjdCA9IGRlcGxveUNvbnRyYWN0O1xuZnVuY3Rpb24gc3RyaW5naWZ5SnNvbk9yQnl0ZXMoYXJncykge1xuICAgIGNvbnN0IGlzVWludDhBcnJheSA9IGFyZ3MuYnl0ZUxlbmd0aCAhPT0gdW5kZWZpbmVkICYmIGFyZ3MuYnl0ZUxlbmd0aCA9PT0gYXJncy5sZW5ndGg7XG4gICAgY29uc3Qgc2VyaWFsaXplZEFyZ3MgPSBpc1VpbnQ4QXJyYXkgPyBhcmdzIDogQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkoYXJncykpO1xuICAgIHJldHVybiBzZXJpYWxpemVkQXJncztcbn1cbmV4cG9ydHMuc3RyaW5naWZ5SnNvbk9yQnl0ZXMgPSBzdHJpbmdpZnlKc29uT3JCeXRlcztcbi8qKlxuICogQ29uc3RydWN0cyB7QGxpbmsgQWN0aW9ufSBpbnN0YW5jZSByZXByZXNlbnRpbmcgY29udHJhY3QgbWV0aG9kIGNhbGwuXG4gKlxuICogQHBhcmFtIG1ldGhvZE5hbWUgdGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB0byBjYWxsXG4gKiBAcGFyYW0gYXJncyBhcmd1bWVudHMgdG8gcGFzcyB0byBtZXRob2QuIENhbiBiZSBlaXRoZXIgcGxhaW4gSlMgb2JqZWN0IHdoaWNoIGdldHMgc2VyaWFsaXplZCBhcyBKU09OIGF1dG9tYXRpY2FsbHlcbiAqICBvciBgVWludDhBcnJheWAgaW5zdGFuY2Ugd2hpY2ggcmVwcmVzZW50cyBieXRlcyBwYXNzZWQgYXMgaXMuXG4gKiBAcGFyYW0gZ2FzIG1heCBhbW91bnQgb2YgZ2FzIHRoYXQgbWV0aG9kIGNhbGwgY2FuIHVzZVxuICogQHBhcmFtIGRlcG9zaXQgYW1vdW50IG9mIE5FQVIgKGluIHlvY3RvTkVBUikgdG8gc2VuZCB0b2dldGhlciB3aXRoIHRoZSBjYWxsXG4gKiBAcGFyYW0gc3RyaW5naWZ5IENvbnZlcnQgaW5wdXQgYXJndW1lbnRzIGludG8gYnl0ZXMgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbChtZXRob2ROYW1lLCBhcmdzLCBnYXMsIGRlcG9zaXQsIHN0cmluZ2lmeSA9IHN0cmluZ2lmeUpzb25PckJ5dGVzKSB7XG4gICAgcmV0dXJuIG5ldyBBY3Rpb24oeyBmdW5jdGlvbkNhbGw6IG5ldyBGdW5jdGlvbkNhbGwoeyBtZXRob2ROYW1lLCBhcmdzOiBzdHJpbmdpZnkoYXJncyksIGdhcywgZGVwb3NpdCB9KSB9KTtcbn1cbmV4cG9ydHMuZnVuY3Rpb25DYWxsID0gZnVuY3Rpb25DYWxsO1xuZnVuY3Rpb24gdHJhbnNmZXIoZGVwb3NpdCkge1xuICAgIHJldHVybiBuZXcgQWN0aW9uKHsgdHJhbnNmZXI6IG5ldyBUcmFuc2Zlcih7IGRlcG9zaXQgfSkgfSk7XG59XG5leHBvcnRzLnRyYW5zZmVyID0gdHJhbnNmZXI7XG5mdW5jdGlvbiBzdGFrZShzdGFrZSwgcHVibGljS2V5KSB7XG4gICAgcmV0dXJuIG5ldyBBY3Rpb24oeyBzdGFrZTogbmV3IFN0YWtlKHsgc3Rha2UsIHB1YmxpY0tleSB9KSB9KTtcbn1cbmV4cG9ydHMuc3Rha2UgPSBzdGFrZTtcbmZ1bmN0aW9uIGFkZEtleShwdWJsaWNLZXksIGFjY2Vzc0tleSkge1xuICAgIHJldHVybiBuZXcgQWN0aW9uKHsgYWRkS2V5OiBuZXcgQWRkS2V5KHsgcHVibGljS2V5LCBhY2Nlc3NLZXkgfSkgfSk7XG59XG5leHBvcnRzLmFkZEtleSA9IGFkZEtleTtcbmZ1bmN0aW9uIGRlbGV0ZUtleShwdWJsaWNLZXkpIHtcbiAgICByZXR1cm4gbmV3IEFjdGlvbih7IGRlbGV0ZUtleTogbmV3IERlbGV0ZUtleSh7IHB1YmxpY0tleSB9KSB9KTtcbn1cbmV4cG9ydHMuZGVsZXRlS2V5ID0gZGVsZXRlS2V5O1xuZnVuY3Rpb24gZGVsZXRlQWNjb3VudChiZW5lZmljaWFyeUlkKSB7XG4gICAgcmV0dXJuIG5ldyBBY3Rpb24oeyBkZWxldGVBY2NvdW50OiBuZXcgRGVsZXRlQWNjb3VudCh7IGJlbmVmaWNpYXJ5SWQgfSkgfSk7XG59XG5leHBvcnRzLmRlbGV0ZUFjY291bnQgPSBkZWxldGVBY2NvdW50O1xuY2xhc3MgU2lnbmF0dXJlIGV4dGVuZHMgZW51bXNfMS5Bc3NpZ25hYmxlIHtcbn1cbmV4cG9ydHMuU2lnbmF0dXJlID0gU2lnbmF0dXJlO1xuY2xhc3MgVHJhbnNhY3Rpb24gZXh0ZW5kcyBlbnVtc18xLkFzc2lnbmFibGUge1xuICAgIGVuY29kZSgpIHtcbiAgICAgICAgcmV0dXJuIGJvcnNoXzEuc2VyaWFsaXplKGV4cG9ydHMuU0NIRU1BLCB0aGlzKTtcbiAgICB9XG4gICAgc3RhdGljIGRlY29kZShieXRlcykge1xuICAgICAgICByZXR1cm4gYm9yc2hfMS5kZXNlcmlhbGl6ZShleHBvcnRzLlNDSEVNQSwgVHJhbnNhY3Rpb24sIGJ5dGVzKTtcbiAgICB9XG59XG5leHBvcnRzLlRyYW5zYWN0aW9uID0gVHJhbnNhY3Rpb247XG5jbGFzcyBTaWduZWRUcmFuc2FjdGlvbiBleHRlbmRzIGVudW1zXzEuQXNzaWduYWJsZSB7XG4gICAgZW5jb2RlKCkge1xuICAgICAgICByZXR1cm4gYm9yc2hfMS5zZXJpYWxpemUoZXhwb3J0cy5TQ0hFTUEsIHRoaXMpO1xuICAgIH1cbiAgICBzdGF0aWMgZGVjb2RlKGJ5dGVzKSB7XG4gICAgICAgIHJldHVybiBib3JzaF8xLmRlc2VyaWFsaXplKGV4cG9ydHMuU0NIRU1BLCBTaWduZWRUcmFuc2FjdGlvbiwgYnl0ZXMpO1xuICAgIH1cbn1cbmV4cG9ydHMuU2lnbmVkVHJhbnNhY3Rpb24gPSBTaWduZWRUcmFuc2FjdGlvbjtcbi8qKlxuICogQ29udGFpbnMgYSBsaXN0IG9mIHRoZSB2YWxpZCB0cmFuc2FjdGlvbiBBY3Rpb25zIGF2YWlsYWJsZSB3aXRoIHRoaXMgQVBJXG4gKiBAc2VlIHtAbGluayBodHRwczovL25vbWljb24uaW8vUnVudGltZVNwZWMvQWN0aW9ucy5odG1sIHwgQWN0aW9ucyBTcGVjfVxuICovXG5jbGFzcyBBY3Rpb24gZXh0ZW5kcyBlbnVtc18xLkVudW0ge1xufVxuZXhwb3J0cy5BY3Rpb24gPSBBY3Rpb247XG5leHBvcnRzLlNDSEVNQSA9IG5ldyBNYXAoW1xuICAgIFtTaWduYXR1cmUsIHsga2luZDogJ3N0cnVjdCcsIGZpZWxkczogW1xuICAgICAgICAgICAgICAgIFsna2V5VHlwZScsICd1OCddLFxuICAgICAgICAgICAgICAgIFsnZGF0YScsIFs2NF1dXG4gICAgICAgICAgICBdIH1dLFxuICAgIFtTaWduZWRUcmFuc2FjdGlvbiwgeyBraW5kOiAnc3RydWN0JywgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgWyd0cmFuc2FjdGlvbicsIFRyYW5zYWN0aW9uXSxcbiAgICAgICAgICAgICAgICBbJ3NpZ25hdHVyZScsIFNpZ25hdHVyZV1cbiAgICAgICAgICAgIF0gfV0sXG4gICAgW1RyYW5zYWN0aW9uLCB7IGtpbmQ6ICdzdHJ1Y3QnLCBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICBbJ3NpZ25lcklkJywgJ3N0cmluZyddLFxuICAgICAgICAgICAgICAgIFsncHVibGljS2V5Jywga2V5X3BhaXJfMS5QdWJsaWNLZXldLFxuICAgICAgICAgICAgICAgIFsnbm9uY2UnLCAndTY0J10sXG4gICAgICAgICAgICAgICAgWydyZWNlaXZlcklkJywgJ3N0cmluZyddLFxuICAgICAgICAgICAgICAgIFsnYmxvY2tIYXNoJywgWzMyXV0sXG4gICAgICAgICAgICAgICAgWydhY3Rpb25zJywgW0FjdGlvbl1dXG4gICAgICAgICAgICBdIH1dLFxuICAgIFtrZXlfcGFpcl8xLlB1YmxpY0tleSwgeyBraW5kOiAnc3RydWN0JywgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgWydrZXlUeXBlJywgJ3U4J10sXG4gICAgICAgICAgICAgICAgWydkYXRhJywgWzMyXV1cbiAgICAgICAgICAgIF0gfV0sXG4gICAgW0FjY2Vzc0tleSwgeyBraW5kOiAnc3RydWN0JywgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgWydub25jZScsICd1NjQnXSxcbiAgICAgICAgICAgICAgICBbJ3Blcm1pc3Npb24nLCBBY2Nlc3NLZXlQZXJtaXNzaW9uXSxcbiAgICAgICAgICAgIF0gfV0sXG4gICAgW0FjY2Vzc0tleVBlcm1pc3Npb24sIHsga2luZDogJ2VudW0nLCBmaWVsZDogJ2VudW0nLCB2YWx1ZXM6IFtcbiAgICAgICAgICAgICAgICBbJ2Z1bmN0aW9uQ2FsbCcsIEZ1bmN0aW9uQ2FsbFBlcm1pc3Npb25dLFxuICAgICAgICAgICAgICAgIFsnZnVsbEFjY2VzcycsIEZ1bGxBY2Nlc3NQZXJtaXNzaW9uXSxcbiAgICAgICAgICAgIF0gfV0sXG4gICAgW0Z1bmN0aW9uQ2FsbFBlcm1pc3Npb24sIHsga2luZDogJ3N0cnVjdCcsIGZpZWxkczogW1xuICAgICAgICAgICAgICAgIFsnYWxsb3dhbmNlJywgeyBraW5kOiAnb3B0aW9uJywgdHlwZTogJ3UxMjgnIH1dLFxuICAgICAgICAgICAgICAgIFsncmVjZWl2ZXJJZCcsICdzdHJpbmcnXSxcbiAgICAgICAgICAgICAgICBbJ21ldGhvZE5hbWVzJywgWydzdHJpbmcnXV0sXG4gICAgICAgICAgICBdIH1dLFxuICAgIFtGdWxsQWNjZXNzUGVybWlzc2lvbiwgeyBraW5kOiAnc3RydWN0JywgZmllbGRzOiBbXSB9XSxcbiAgICBbQWN0aW9uLCB7IGtpbmQ6ICdlbnVtJywgZmllbGQ6ICdlbnVtJywgdmFsdWVzOiBbXG4gICAgICAgICAgICAgICAgWydjcmVhdGVBY2NvdW50JywgQ3JlYXRlQWNjb3VudF0sXG4gICAgICAgICAgICAgICAgWydkZXBsb3lDb250cmFjdCcsIERlcGxveUNvbnRyYWN0XSxcbiAgICAgICAgICAgICAgICBbJ2Z1bmN0aW9uQ2FsbCcsIEZ1bmN0aW9uQ2FsbF0sXG4gICAgICAgICAgICAgICAgWyd0cmFuc2ZlcicsIFRyYW5zZmVyXSxcbiAgICAgICAgICAgICAgICBbJ3N0YWtlJywgU3Rha2VdLFxuICAgICAgICAgICAgICAgIFsnYWRkS2V5JywgQWRkS2V5XSxcbiAgICAgICAgICAgICAgICBbJ2RlbGV0ZUtleScsIERlbGV0ZUtleV0sXG4gICAgICAgICAgICAgICAgWydkZWxldGVBY2NvdW50JywgRGVsZXRlQWNjb3VudF0sXG4gICAgICAgICAgICBdIH1dLFxuICAgIFtDcmVhdGVBY2NvdW50LCB7IGtpbmQ6ICdzdHJ1Y3QnLCBmaWVsZHM6IFtdIH1dLFxuICAgIFtEZXBsb3lDb250cmFjdCwgeyBraW5kOiAnc3RydWN0JywgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgWydjb2RlJywgWyd1OCddXVxuICAgICAgICAgICAgXSB9XSxcbiAgICBbRnVuY3Rpb25DYWxsLCB7IGtpbmQ6ICdzdHJ1Y3QnLCBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICBbJ21ldGhvZE5hbWUnLCAnc3RyaW5nJ10sXG4gICAgICAgICAgICAgICAgWydhcmdzJywgWyd1OCddXSxcbiAgICAgICAgICAgICAgICBbJ2dhcycsICd1NjQnXSxcbiAgICAgICAgICAgICAgICBbJ2RlcG9zaXQnLCAndTEyOCddXG4gICAgICAgICAgICBdIH1dLFxuICAgIFtUcmFuc2ZlciwgeyBraW5kOiAnc3RydWN0JywgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgWydkZXBvc2l0JywgJ3UxMjgnXVxuICAgICAgICAgICAgXSB9XSxcbiAgICBbU3Rha2UsIHsga2luZDogJ3N0cnVjdCcsIGZpZWxkczogW1xuICAgICAgICAgICAgICAgIFsnc3Rha2UnLCAndTEyOCddLFxuICAgICAgICAgICAgICAgIFsncHVibGljS2V5Jywga2V5X3BhaXJfMS5QdWJsaWNLZXldXG4gICAgICAgICAgICBdIH1dLFxuICAgIFtBZGRLZXksIHsga2luZDogJ3N0cnVjdCcsIGZpZWxkczogW1xuICAgICAgICAgICAgICAgIFsncHVibGljS2V5Jywga2V5X3BhaXJfMS5QdWJsaWNLZXldLFxuICAgICAgICAgICAgICAgIFsnYWNjZXNzS2V5JywgQWNjZXNzS2V5XVxuICAgICAgICAgICAgXSB9XSxcbiAgICBbRGVsZXRlS2V5LCB7IGtpbmQ6ICdzdHJ1Y3QnLCBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICBbJ3B1YmxpY0tleScsIGtleV9wYWlyXzEuUHVibGljS2V5XVxuICAgICAgICAgICAgXSB9XSxcbiAgICBbRGVsZXRlQWNjb3VudCwgeyBraW5kOiAnc3RydWN0JywgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAgWydiZW5lZmljaWFyeUlkJywgJ3N0cmluZyddXG4gICAgICAgICAgICBdIH1dLFxuXSk7XG5mdW5jdGlvbiBjcmVhdGVUcmFuc2FjdGlvbihzaWduZXJJZCwgcHVibGljS2V5LCByZWNlaXZlcklkLCBub25jZSwgYWN0aW9ucywgYmxvY2tIYXNoKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFuc2FjdGlvbih7IHNpZ25lcklkLCBwdWJsaWNLZXksIG5vbmNlLCByZWNlaXZlcklkLCBhY3Rpb25zLCBibG9ja0hhc2ggfSk7XG59XG5leHBvcnRzLmNyZWF0ZVRyYW5zYWN0aW9uID0gY3JlYXRlVHJhbnNhY3Rpb247XG4vKipcbiAqIFNpZ25zIGEgZ2l2ZW4gdHJhbnNhY3Rpb24gZnJvbSBhbiBhY2NvdW50IHdpdGggZ2l2ZW4ga2V5cywgYXBwbGllZCB0byB0aGUgZ2l2ZW4gbmV0d29ya1xuICogQHBhcmFtIHRyYW5zYWN0aW9uIFRoZSBUcmFuc2FjdGlvbiBvYmplY3QgdG8gc2lnblxuICogQHBhcmFtIHNpZ25lciBUaGUge1NpZ25lcn0gb2JqZWN0IHRoYXQgYXNzaXN0cyB3aXRoIHNpZ25pbmcga2V5c1xuICogQHBhcmFtIGFjY291bnRJZCBUaGUgaHVtYW4tcmVhZGFibGUgTkVBUiBhY2NvdW50IG5hbWVcbiAqIEBwYXJhbSBuZXR3b3JrSWQgVGhlIHRhcmdldGVkIG5ldHdvcmsuIChleC4gZGVmYXVsdCwgYmV0YW5ldCwgZXRj4oCmKVxuICovXG5hc3luYyBmdW5jdGlvbiBzaWduVHJhbnNhY3Rpb25PYmplY3QodHJhbnNhY3Rpb24sIHNpZ25lciwgYWNjb3VudElkLCBuZXR3b3JrSWQpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYm9yc2hfMS5zZXJpYWxpemUoZXhwb3J0cy5TQ0hFTUEsIHRyYW5zYWN0aW9uKTtcbiAgICBjb25zdCBoYXNoID0gbmV3IFVpbnQ4QXJyYXkoanNfc2hhMjU2XzEuZGVmYXVsdC5zaGEyNTYuYXJyYXkobWVzc2FnZSkpO1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNpZ25lci5zaWduTWVzc2FnZShtZXNzYWdlLCBhY2NvdW50SWQsIG5ldHdvcmtJZCk7XG4gICAgY29uc3Qgc2lnbmVkVHggPSBuZXcgU2lnbmVkVHJhbnNhY3Rpb24oe1xuICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgc2lnbmF0dXJlOiBuZXcgU2lnbmF0dXJlKHsga2V5VHlwZTogdHJhbnNhY3Rpb24ucHVibGljS2V5LmtleVR5cGUsIGRhdGE6IHNpZ25hdHVyZS5zaWduYXR1cmUgfSlcbiAgICB9KTtcbiAgICByZXR1cm4gW2hhc2gsIHNpZ25lZFR4XTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHNpZ25UcmFuc2FjdGlvbiguLi5hcmdzKSB7XG4gICAgaWYgKGFyZ3NbMF0uY29uc3RydWN0b3IgPT09IFRyYW5zYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IFt0cmFuc2FjdGlvbiwgc2lnbmVyLCBhY2NvdW50SWQsIG5ldHdvcmtJZF0gPSBhcmdzO1xuICAgICAgICByZXR1cm4gc2lnblRyYW5zYWN0aW9uT2JqZWN0KHRyYW5zYWN0aW9uLCBzaWduZXIsIGFjY291bnRJZCwgbmV0d29ya0lkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IFtyZWNlaXZlcklkLCBub25jZSwgYWN0aW9ucywgYmxvY2tIYXNoLCBzaWduZXIsIGFjY291bnRJZCwgbmV0d29ya0lkXSA9IGFyZ3M7XG4gICAgICAgIGNvbnN0IHB1YmxpY0tleSA9IGF3YWl0IHNpZ25lci5nZXRQdWJsaWNLZXkoYWNjb3VudElkLCBuZXR3b3JrSWQpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGNyZWF0ZVRyYW5zYWN0aW9uKGFjY291bnRJZCwgcHVibGljS2V5LCByZWNlaXZlcklkLCBub25jZSwgYWN0aW9ucywgYmxvY2tIYXNoKTtcbiAgICAgICAgcmV0dXJuIHNpZ25UcmFuc2FjdGlvbk9iamVjdCh0cmFuc2FjdGlvbiwgc2lnbmVyLCBhY2NvdW50SWQsIG5ldHdvcmtJZCk7XG4gICAgfVxufVxuZXhwb3J0cy5zaWduVHJhbnNhY3Rpb24gPSBzaWduVHJhbnNhY3Rpb247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXNzaWduYWJsZSA9IGV4cG9ydHMuRW51bSA9IHZvaWQgMDtcbi8qKiBAaGlkZGVuIEBtb2R1bGUgKi9cbmNsYXNzIEVudW0ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbnVtIGNhbiBvbmx5IHRha2Ugc2luZ2xlIHZhbHVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BlcnRpZXNba2V5XTtcbiAgICAgICAgICAgIHRoaXMuZW51bSA9IGtleTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5FbnVtID0gRW51bTtcbmNsYXNzIEFzc2lnbmFibGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BlcnRpZXNba2V5XTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Bc3NpZ25hYmxlID0gQXNzaWduYWJsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2dXYXJuaW5nID0gZXhwb3J0cy5FcnJvckNvbnRleHQgPSBleHBvcnRzLlR5cGVkRXJyb3IgPSBleHBvcnRzLkFyZ3VtZW50VHlwZUVycm9yID0gZXhwb3J0cy5Qb3NpdGlvbmFsQXJnc0Vycm9yID0gdm9pZCAwO1xuY2xhc3MgUG9zaXRpb25hbEFyZ3NFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ0NvbnRyYWN0IG1ldGhvZCBjYWxscyBleHBlY3QgbmFtZWQgYXJndW1lbnRzIHdyYXBwZWQgaW4gb2JqZWN0LCBlLmcuIHsgYXJnTmFtZTE6IGFyZ1ZhbHVlMSwgYXJnTmFtZTI6IGFyZ1ZhbHVlMiB9Jyk7XG4gICAgfVxufVxuZXhwb3J0cy5Qb3NpdGlvbmFsQXJnc0Vycm9yID0gUG9zaXRpb25hbEFyZ3NFcnJvcjtcbmNsYXNzIEFyZ3VtZW50VHlwZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGFyZ05hbWUsIGFyZ1R5cGUsIGFyZ1ZhbHVlKSB7XG4gICAgICAgIHN1cGVyKGBFeHBlY3RlZCAke2FyZ1R5cGV9IGZvciAnJHthcmdOYW1lfScgYXJndW1lbnQsIGJ1dCBnb3QgJyR7SlNPTi5zdHJpbmdpZnkoYXJnVmFsdWUpfSdgKTtcbiAgICB9XG59XG5leHBvcnRzLkFyZ3VtZW50VHlwZUVycm9yID0gQXJndW1lbnRUeXBlRXJyb3I7XG5jbGFzcyBUeXBlZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHR5cGUsIGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGUgfHwgJ1VudHlwZWRFcnJvcic7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxufVxuZXhwb3J0cy5UeXBlZEVycm9yID0gVHlwZWRFcnJvcjtcbmNsYXNzIEVycm9yQ29udGV4dCB7XG4gICAgY29uc3RydWN0b3IodHJhbnNhY3Rpb25IYXNoKSB7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25IYXNoID0gdHJhbnNhY3Rpb25IYXNoO1xuICAgIH1cbn1cbmV4cG9ydHMuRXJyb3JDb250ZXh0ID0gRXJyb3JDb250ZXh0O1xuZnVuY3Rpb24gbG9nV2FybmluZyguLi5hcmdzKSB7XG4gICAgaWYgKCFwcm9jZXNzLmVudlsnTkVBUl9OT19MT0dTJ10pIHtcbiAgICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbn1cbmV4cG9ydHMubG9nV2FybmluZyA9IGxvZ1dhcm5pbmc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmFzeW5jIGZ1bmN0aW9uIGV4cG9uZW50aWFsQmFja29mZihzdGFydFdhaXRUaW1lLCByZXRyeU51bWJlciwgd2FpdEJhY2tvZmYsIGdldFJlc3VsdCkge1xuICAgIC8vIFRPRE86IGppdHRlcj9cbiAgICBsZXQgd2FpdFRpbWUgPSBzdGFydFdhaXRUaW1lO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV0cnlOdW1iZXI7IGkrKykge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRSZXN1bHQoKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBzbGVlcCh3YWl0VGltZSk7XG4gICAgICAgIHdhaXRUaW1lICo9IHdhaXRCYWNrb2ZmO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9uZW50aWFsQmFja29mZjtcbi8vIFNsZWVwIGdpdmVuIG51bWJlciBvZiBtaWxsaXMuXG5mdW5jdGlvbiBzbGVlcChtaWxsaXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1pbGxpcykpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlTmVhckFtb3VudCA9IGV4cG9ydHMuZm9ybWF0TmVhckFtb3VudCA9IGV4cG9ydHMuTkVBUl9OT01JTkFUSU9OID0gZXhwb3J0cy5ORUFSX05PTUlOQVRJT05fRVhQID0gdm9pZCAwO1xuY29uc3QgYm5fanNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYm4uanNcIikpO1xuLyoqXG4gKiBFeHBvbmVudCBmb3IgY2FsY3VsYXRpbmcgaG93IG1hbnkgaW5kaXZpc2libGUgdW5pdHMgYXJlIHRoZXJlIGluIG9uZSBORUFSLiBTZWUge0BsaW5rIE5FQVJfTk9NSU5BVElPTn0uXG4gKi9cbmV4cG9ydHMuTkVBUl9OT01JTkFUSU9OX0VYUCA9IDI0O1xuLyoqXG4gKiBOdW1iZXIgb2YgaW5kaXZpc2libGUgdW5pdHMgaW4gb25lIE5FQVIuIERlcml2ZWQgZnJvbSB7QGxpbmsgTkVBUl9OT01JTkFUSU9OX0VYUH0uXG4gKi9cbmV4cG9ydHMuTkVBUl9OT01JTkFUSU9OID0gbmV3IGJuX2pzXzEuZGVmYXVsdCgnMTAnLCAxMCkucG93KG5ldyBibl9qc18xLmRlZmF1bHQoZXhwb3J0cy5ORUFSX05PTUlOQVRJT05fRVhQLCAxMCkpO1xuLy8gUHJlLWNhbGN1bGF0ZSBvZmZlc3RzIHVzZWQgZm9yIHJvdW5kaW5nIHRvIGRpZmZlcmVudCBudW1iZXIgb2YgZGlnaXRzXG5jb25zdCBST1VORElOR19PRkZTRVRTID0gW107XG5jb25zdCBCTjEwID0gbmV3IGJuX2pzXzEuZGVmYXVsdCgxMCk7XG5mb3IgKGxldCBpID0gMCwgb2Zmc2V0ID0gbmV3IGJuX2pzXzEuZGVmYXVsdCg1KTsgaSA8IGV4cG9ydHMuTkVBUl9OT01JTkFUSU9OX0VYUDsgaSsrLCBvZmZzZXQgPSBvZmZzZXQubXVsKEJOMTApKSB7XG4gICAgUk9VTkRJTkdfT0ZGU0VUU1tpXSA9IG9mZnNldDtcbn1cbi8qKlxuICogQ29udmVydCBhY2NvdW50IGJhbGFuY2UgdmFsdWUgZnJvbSBpbnRlcm5hbCBpbmRpdmlzaWJsZSB1bml0cyB0byBORUFSLiAxIE5FQVIgaXMgZGVmaW5lZCBieSB7QGxpbmsgTkVBUl9OT01JTkFUSU9OfS5cbiAqIEVmZmVjdGl2ZWx5IHRoaXMgZGl2aWRlcyBnaXZlbiBhbW91bnQgYnkge0BsaW5rIE5FQVJfTk9NSU5BVElPTn0uXG4gKlxuICogQHBhcmFtIGJhbGFuY2UgZGVjaW1hbCBzdHJpbmcgcmVwcmVzZW50aW5nIGJhbGFuY2UgaW4gc21hbGxlc3Qgbm9uLWRpdmlzaWJsZSBORUFSIHVuaXRzIChhcyBzcGVjaWZpZWQgYnkge0BsaW5rIE5FQVJfTk9NSU5BVElPTn0pXG4gKiBAcGFyYW0gZnJhY0RpZ2l0cyBudW1iZXIgb2YgZnJhY3Rpb25hbCBkaWdpdHMgdG8gcHJlc2VydmUgaW4gZm9ybWF0dGVkIHN0cmluZy4gQmFsYW5jZSBpcyByb3VuZGVkIHRvIG1hdGNoIGdpdmVuIG51bWJlciBvZiBkaWdpdHMuXG4gKiBAcmV0dXJucyBWYWx1ZSBpbiDik4NcbiAqL1xuZnVuY3Rpb24gZm9ybWF0TmVhckFtb3VudChiYWxhbmNlLCBmcmFjRGlnaXRzID0gZXhwb3J0cy5ORUFSX05PTUlOQVRJT05fRVhQKSB7XG4gICAgY29uc3QgYmFsYW5jZUJOID0gbmV3IGJuX2pzXzEuZGVmYXVsdChiYWxhbmNlLCAxMCk7XG4gICAgaWYgKGZyYWNEaWdpdHMgIT09IGV4cG9ydHMuTkVBUl9OT01JTkFUSU9OX0VYUCkge1xuICAgICAgICAvLyBBZGp1c3QgYmFsYW5jZSBmb3Igcm91bmRpbmcgYXQgZ2l2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICAgICAgICBjb25zdCByb3VuZGluZ0V4cCA9IGV4cG9ydHMuTkVBUl9OT01JTkFUSU9OX0VYUCAtIGZyYWNEaWdpdHMgLSAxO1xuICAgICAgICBpZiAocm91bmRpbmdFeHAgPiAwKSB7XG4gICAgICAgICAgICBiYWxhbmNlQk4uaWFkZChST1VORElOR19PRkZTRVRTW3JvdW5kaW5nRXhwXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmFsYW5jZSA9IGJhbGFuY2VCTi50b1N0cmluZygpO1xuICAgIGNvbnN0IHdob2xlU3RyID0gYmFsYW5jZS5zdWJzdHJpbmcoMCwgYmFsYW5jZS5sZW5ndGggLSBleHBvcnRzLk5FQVJfTk9NSU5BVElPTl9FWFApIHx8ICcwJztcbiAgICBjb25zdCBmcmFjdGlvblN0ciA9IGJhbGFuY2Uuc3Vic3RyaW5nKGJhbGFuY2UubGVuZ3RoIC0gZXhwb3J0cy5ORUFSX05PTUlOQVRJT05fRVhQKVxuICAgICAgICAucGFkU3RhcnQoZXhwb3J0cy5ORUFSX05PTUlOQVRJT05fRVhQLCAnMCcpLnN1YnN0cmluZygwLCBmcmFjRGlnaXRzKTtcbiAgICByZXR1cm4gdHJpbVRyYWlsaW5nWmVyb2VzKGAke2Zvcm1hdFdpdGhDb21tYXMod2hvbGVTdHIpfS4ke2ZyYWN0aW9uU3RyfWApO1xufVxuZXhwb3J0cy5mb3JtYXROZWFyQW1vdW50ID0gZm9ybWF0TmVhckFtb3VudDtcbi8qKlxuICogQ29udmVydCBodW1hbiByZWFkYWJsZSBORUFSIGFtb3VudCB0byBpbnRlcm5hbCBpbmRpdmlzaWJsZSB1bml0cy5cbiAqIEVmZmVjdGl2ZWx5IHRoaXMgbXVsdGlwbGllcyBnaXZlbiBhbW91bnQgYnkge0BsaW5rIE5FQVJfTk9NSU5BVElPTn0uXG4gKlxuICogQHBhcmFtIGFtdCBkZWNpbWFsIHN0cmluZyAocG90ZW50aWFsbHkgZnJhY3Rpb25hbCkgZGVub21pbmF0ZWQgaW4gTkVBUi5cbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgeW9jdG/ik4MgYW1vdW50IG9yIG51bGwgaWYgbm8gYW1vdW50IHdhcyBwYXNzZWQgaW5cbiAqL1xuZnVuY3Rpb24gcGFyc2VOZWFyQW1vdW50KGFtdCkge1xuICAgIGlmICghYW10KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhbXQgPSBjbGVhbnVwQW1vdW50KGFtdCk7XG4gICAgY29uc3Qgc3BsaXQgPSBhbXQuc3BsaXQoJy4nKTtcbiAgICBjb25zdCB3aG9sZVBhcnQgPSBzcGxpdFswXTtcbiAgICBjb25zdCBmcmFjUGFydCA9IHNwbGl0WzFdIHx8ICcnO1xuICAgIGlmIChzcGxpdC5sZW5ndGggPiAyIHx8IGZyYWNQYXJ0Lmxlbmd0aCA+IGV4cG9ydHMuTkVBUl9OT01JTkFUSU9OX0VYUCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBwYXJzZSAnJHthbXR9JyBhcyBORUFSIGFtb3VudGApO1xuICAgIH1cbiAgICByZXR1cm4gdHJpbUxlYWRpbmdaZXJvZXMod2hvbGVQYXJ0ICsgZnJhY1BhcnQucGFkRW5kKGV4cG9ydHMuTkVBUl9OT01JTkFUSU9OX0VYUCwgJzAnKSk7XG59XG5leHBvcnRzLnBhcnNlTmVhckFtb3VudCA9IHBhcnNlTmVhckFtb3VudDtcbi8qKlxuICogUmVtb3ZlcyBjb21tYXMgZnJvbSB0aGUgaW5wdXRcbiAqIEBwYXJhbSBhbW91bnQgQSB2YWx1ZSBvciBhbW91bnQgdGhhdCBtYXkgY29udGFpbiBjb21tYXNcbiAqIEByZXR1cm5zIHN0cmluZyBUaGUgY2xlYW5lZCB2YWx1ZVxuICovXG5mdW5jdGlvbiBjbGVhbnVwQW1vdW50KGFtb3VudCkge1xuICAgIHJldHVybiBhbW91bnQucmVwbGFjZSgvLC9nLCAnJykudHJpbSgpO1xufVxuLyoqXG4gKiBSZW1vdmVzIC4wMDDigKYgZnJvbSBhbiBpbnB1dFxuICogQHBhcmFtIHZhbHVlIEEgdmFsdWUgdGhhdCBtYXkgY29udGFpbiB0cmFpbGluZyB6ZXJvZXMgaW4gdGhlIGRlY2ltYWxzIHBsYWNlXG4gKiBAcmV0dXJucyBzdHJpbmcgVGhlIHZhbHVlIHdpdGhvdXQgdGhlIHRyYWlsaW5nIHplcm9zXG4gKi9cbmZ1bmN0aW9uIHRyaW1UcmFpbGluZ1plcm9lcyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXC4/MCokLywgJycpO1xufVxuLyoqXG4gKiBSZW1vdmVzIGxlYWRpbmcgemVyb2VzIGZyb20gYW4gaW5wdXRcbiAqIEBwYXJhbSB2YWx1ZSBBIHZhbHVlIHRoYXQgbWF5IGNvbnRhaW4gbGVhZGluZyB6ZXJvZXNcbiAqIEByZXR1cm5zIHN0cmluZyBUaGUgdmFsdWUgd2l0aG91dCB0aGUgbGVhZGluZyB6ZXJvZXNcbiAqL1xuZnVuY3Rpb24gdHJpbUxlYWRpbmdaZXJvZXModmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14wKy8sICcnKTtcbiAgICBpZiAodmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiAnMCc7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogUmV0dXJucyBhIGh1bWFuLXJlYWRhYmxlIHZhbHVlIHdpdGggY29tbWFzXG4gKiBAcGFyYW0gdmFsdWUgQSB2YWx1ZSB0aGF0IG1heSBub3QgY29udGFpbiBjb21tYXNcbiAqIEByZXR1cm5zIHN0cmluZyBBIHZhbHVlIHdpdGggY29tbWFzXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdFdpdGhDb21tYXModmFsdWUpIHtcbiAgICBjb25zdCBwYXR0ZXJuID0gLygtP1xcZCspKFxcZHszfSkvO1xuICAgIHdoaWxlIChwYXR0ZXJuLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShwYXR0ZXJuLCAnJDEsJDInKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xufSk7XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5sb2dXYXJuaW5nID0gZXhwb3J0cy5ycGNfZXJyb3JzID0gZXhwb3J0cy5LZXlQYWlyRWQyNTUxOSA9IGV4cG9ydHMuS2V5UGFpciA9IGV4cG9ydHMuUHVibGljS2V5ID0gZXhwb3J0cy5mb3JtYXQgPSBleHBvcnRzLmVudW1zID0gZXhwb3J0cy53ZWIgPSBleHBvcnRzLnNlcmlhbGl6ZSA9IGV4cG9ydHMua2V5X3BhaXIgPSB2b2lkIDA7XG5jb25zdCBrZXlfcGFpciA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9rZXlfcGFpclwiKSk7XG5leHBvcnRzLmtleV9wYWlyID0ga2V5X3BhaXI7XG5jb25zdCBzZXJpYWxpemUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vc2VyaWFsaXplXCIpKTtcbmV4cG9ydHMuc2VyaWFsaXplID0gc2VyaWFsaXplO1xuY29uc3Qgd2ViID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3dlYlwiKSk7XG5leHBvcnRzLndlYiA9IHdlYjtcbmNvbnN0IGVudW1zID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL2VudW1zXCIpKTtcbmV4cG9ydHMuZW51bXMgPSBlbnVtcztcbmNvbnN0IGZvcm1hdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9mb3JtYXRcIikpO1xuZXhwb3J0cy5mb3JtYXQgPSBmb3JtYXQ7XG5jb25zdCBycGNfZXJyb3JzID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JwY19lcnJvcnNcIikpO1xuZXhwb3J0cy5ycGNfZXJyb3JzID0gcnBjX2Vycm9ycztcbmNvbnN0IGtleV9wYWlyXzEgPSByZXF1aXJlKFwiLi9rZXlfcGFpclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlB1YmxpY0tleVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4ga2V5X3BhaXJfMS5QdWJsaWNLZXk7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJLZXlQYWlyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBrZXlfcGFpcl8xLktleVBhaXI7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJLZXlQYWlyRWQyNTUxOVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4ga2V5X3BhaXJfMS5LZXlQYWlyRWQyNTUxOTsgfSB9KTtcbmNvbnN0IGVycm9yc18xID0gcmVxdWlyZShcIi4vZXJyb3JzXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibG9nV2FybmluZ1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZXJyb3JzXzEubG9nV2FybmluZzsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5LZXlQYWlyRWQyNTUxOSA9IGV4cG9ydHMuS2V5UGFpciA9IGV4cG9ydHMuUHVibGljS2V5ID0gZXhwb3J0cy5LZXlUeXBlID0gdm9pZCAwO1xuY29uc3QgdHdlZXRuYWNsXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInR3ZWV0bmFjbFwiKSk7XG5jb25zdCBzZXJpYWxpemVfMSA9IHJlcXVpcmUoXCIuL3NlcmlhbGl6ZVwiKTtcbmNvbnN0IGVudW1zXzEgPSByZXF1aXJlKFwiLi9lbnVtc1wiKTtcbi8qKiBBbGwgc3VwcG9ydGVkIGtleSB0eXBlcyAqL1xudmFyIEtleVR5cGU7XG4oZnVuY3Rpb24gKEtleVR5cGUpIHtcbiAgICBLZXlUeXBlW0tleVR5cGVbXCJFRDI1NTE5XCJdID0gMF0gPSBcIkVEMjU1MTlcIjtcbn0pKEtleVR5cGUgPSBleHBvcnRzLktleVR5cGUgfHwgKGV4cG9ydHMuS2V5VHlwZSA9IHt9KSk7XG5mdW5jdGlvbiBrZXlfdHlwZV90b19zdHIoa2V5VHlwZSkge1xuICAgIHN3aXRjaCAoa2V5VHlwZSkge1xuICAgICAgICBjYXNlIEtleVR5cGUuRUQyNTUxOTogcmV0dXJuICdlZDI1NTE5JztcbiAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGtleSB0eXBlICR7a2V5VHlwZX1gKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJfdG9fa2V5X3R5cGUoa2V5VHlwZSkge1xuICAgIHN3aXRjaCAoa2V5VHlwZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgJ2VkMjU1MTknOiByZXR1cm4gS2V5VHlwZS5FRDI1NTE5O1xuICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24ga2V5IHR5cGUgJHtrZXlUeXBlfWApO1xuICAgIH1cbn1cbi8qKlxuICogUHVibGljS2V5IHJlcHJlc2VudGF0aW9uIHRoYXQgaGFzIHR5cGUgYW5kIGJ5dGVzIG9mIHRoZSBrZXkuXG4gKi9cbmNsYXNzIFB1YmxpY0tleSBleHRlbmRzIGVudW1zXzEuQXNzaWduYWJsZSB7XG4gICAgc3RhdGljIGZyb20odmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBQdWJsaWNLZXkuZnJvbVN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBzdGF0aWMgZnJvbVN0cmluZyhlbmNvZGVkS2V5KSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gZW5jb2RlZEtleS5zcGxpdCgnOicpO1xuICAgICAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFB1YmxpY0tleSh7IGtleVR5cGU6IEtleVR5cGUuRUQyNTUxOSwgZGF0YTogc2VyaWFsaXplXzEuYmFzZV9kZWNvZGUocGFydHNbMF0pIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQdWJsaWNLZXkoeyBrZXlUeXBlOiBzdHJfdG9fa2V5X3R5cGUocGFydHNbMF0pLCBkYXRhOiBzZXJpYWxpemVfMS5iYXNlX2RlY29kZShwYXJ0c1sxXSkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW5jb2RlZCBrZXkgZm9ybWF0LCBtdXN0IGJlIDxjdXJ2ZT46PGVuY29kZWQga2V5PicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYCR7a2V5X3R5cGVfdG9fc3RyKHRoaXMua2V5VHlwZSl9OiR7c2VyaWFsaXplXzEuYmFzZV9lbmNvZGUodGhpcy5kYXRhKX1gO1xuICAgIH1cbiAgICB2ZXJpZnkobWVzc2FnZSwgc2lnbmF0dXJlKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5rZXlUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIEtleVR5cGUuRUQyNTUxOTogcmV0dXJuIHR3ZWV0bmFjbF8xLmRlZmF1bHQuc2lnbi5kZXRhY2hlZC52ZXJpZnkobWVzc2FnZSwgc2lnbmF0dXJlLCB0aGlzLmRhdGEpO1xuICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGtleSB0eXBlICR7dGhpcy5rZXlUeXBlfWApO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5QdWJsaWNLZXkgPSBQdWJsaWNLZXk7XG5jbGFzcyBLZXlQYWlyIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY3VydmUgTmFtZSBvZiBlbGxpcHRpY2FsIGN1cnZlLCBjYXNlLWluc2Vuc2l0aXZlXG4gICAgICogQHJldHVybnMgUmFuZG9tIEtleVBhaXIgYmFzZWQgb24gdGhlIGN1cnZlXG4gICAgICovXG4gICAgc3RhdGljIGZyb21SYW5kb20oY3VydmUpIHtcbiAgICAgICAgc3dpdGNoIChjdXJ2ZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlICdFRDI1NTE5JzogcmV0dXJuIEtleVBhaXJFZDI1NTE5LmZyb21SYW5kb20oKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjdXJ2ZSAke2N1cnZlfWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBmcm9tU3RyaW5nKGVuY29kZWRLZXkpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBlbmNvZGVkS2V5LnNwbGl0KCc6Jyk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgS2V5UGFpckVkMjU1MTkocGFydHNbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgc3dpdGNoIChwYXJ0c1swXS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnRUQyNTUxOSc6IHJldHVybiBuZXcgS2V5UGFpckVkMjU1MTkocGFydHNbMV0pO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcihgVW5rbm93biBjdXJ2ZTogJHtwYXJ0c1swXX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBlbmNvZGVkIGtleSBmb3JtYXQsIG11c3QgYmUgPGN1cnZlPjo8ZW5jb2RlZCBrZXk+Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLktleVBhaXIgPSBLZXlQYWlyO1xuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIGtleSBwYWlyIGZ1bmN0aW9uYWxpdHkgZm9yIEVkMjU1MTkgY3VydmU6XG4gKiBnZW5lcmF0aW5nIGtleSBwYWlycywgZW5jb2Rpbmcga2V5IHBhaXJzLCBzaWduaW5nIGFuZCB2ZXJpZnlpbmcuXG4gKi9cbmNsYXNzIEtleVBhaXJFZDI1NTE5IGV4dGVuZHMgS2V5UGFpciB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0IGFuIGluc3RhbmNlIG9mIGtleSBwYWlyIGdpdmVuIGEgc2VjcmV0IGtleS5cbiAgICAgKiBJdCdzIGdlbmVyYWxseSBhc3N1bWVkIHRoYXQgdGhlc2UgYXJlIGVuY29kZWQgaW4gYmFzZTU4LlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWNyZXRLZXlcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzZWNyZXRLZXkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3Qga2V5UGFpciA9IHR3ZWV0bmFjbF8xLmRlZmF1bHQuc2lnbi5rZXlQYWlyLmZyb21TZWNyZXRLZXkoc2VyaWFsaXplXzEuYmFzZV9kZWNvZGUoc2VjcmV0S2V5KSk7XG4gICAgICAgIHRoaXMucHVibGljS2V5ID0gbmV3IFB1YmxpY0tleSh7IGtleVR5cGU6IEtleVR5cGUuRUQyNTUxOSwgZGF0YToga2V5UGFpci5wdWJsaWNLZXkgfSk7XG4gICAgICAgIHRoaXMuc2VjcmV0S2V5ID0gc2VjcmV0S2V5O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBhIG5ldyByYW5kb20ga2V5cGFpci5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGNvbnN0IGtleVJhbmRvbSA9IEtleVBhaXIuZnJvbVJhbmRvbSgpO1xuICAgICAqIGtleVJhbmRvbS5wdWJsaWNLZXlcbiAgICAgKiAvLyByZXR1cm5zIFtQVUJMSUNfS0VZXVxuICAgICAqXG4gICAgICoga2V5UmFuZG9tLnNlY3JldEtleVxuICAgICAqIC8vIHJldHVybnMgW1NFQ1JFVF9LRVldXG4gICAgICovXG4gICAgc3RhdGljIGZyb21SYW5kb20oKSB7XG4gICAgICAgIGNvbnN0IG5ld0tleVBhaXIgPSB0d2VldG5hY2xfMS5kZWZhdWx0LnNpZ24ua2V5UGFpcigpO1xuICAgICAgICByZXR1cm4gbmV3IEtleVBhaXJFZDI1NTE5KHNlcmlhbGl6ZV8xLmJhc2VfZW5jb2RlKG5ld0tleVBhaXIuc2VjcmV0S2V5KSk7XG4gICAgfVxuICAgIHNpZ24obWVzc2FnZSkge1xuICAgICAgICBjb25zdCBzaWduYXR1cmUgPSB0d2VldG5hY2xfMS5kZWZhdWx0LnNpZ24uZGV0YWNoZWQobWVzc2FnZSwgc2VyaWFsaXplXzEuYmFzZV9kZWNvZGUodGhpcy5zZWNyZXRLZXkpKTtcbiAgICAgICAgcmV0dXJuIHsgc2lnbmF0dXJlLCBwdWJsaWNLZXk6IHRoaXMucHVibGljS2V5IH07XG4gICAgfVxuICAgIHZlcmlmeShtZXNzYWdlLCBzaWduYXR1cmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVibGljS2V5LnZlcmlmeShtZXNzYWdlLCBzaWduYXR1cmUpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGBlZDI1NTE5OiR7dGhpcy5zZWNyZXRLZXl9YDtcbiAgICB9XG4gICAgZ2V0UHVibGljS2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wdWJsaWNLZXk7XG4gICAgfVxufVxuZXhwb3J0cy5LZXlQYWlyRWQyNTUxOSA9IEtleVBhaXJFZDI1NTE5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldEVycm9yVHlwZUZyb21FcnJvck1lc3NhZ2UgPSBleHBvcnRzLmZvcm1hdEVycm9yID0gZXhwb3J0cy5wYXJzZVJlc3VsdEVycm9yID0gZXhwb3J0cy5wYXJzZVJwY0Vycm9yID0gZXhwb3J0cy5TZXJ2ZXJFcnJvciA9IHZvaWQgMDtcbmNvbnN0IG11c3RhY2hlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIm11c3RhY2hlXCIpKTtcbmNvbnN0IHJwY19lcnJvcl9zY2hlbWFfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9nZW5lcmF0ZWQvcnBjX2Vycm9yX3NjaGVtYS5qc29uXCIpKTtcbmNvbnN0IGVycm9yX21lc3NhZ2VzX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vcmVzL2Vycm9yX21lc3NhZ2VzLmpzb25cIikpO1xuY29uc3QgY29tbW9uX2luZGV4XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uLWluZGV4XCIpO1xuY29uc3QgZXJyb3JzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZXJyb3JzXCIpO1xuY29uc3QgbXVzdGFjaGVIZWxwZXJzID0ge1xuICAgIGZvcm1hdE5lYXI6ICgpID0+IChuLCByZW5kZXIpID0+IGNvbW1vbl9pbmRleF8xLnV0aWxzLmZvcm1hdC5mb3JtYXROZWFyQW1vdW50KHJlbmRlcihuKSlcbn07XG5jbGFzcyBTZXJ2ZXJFcnJvciBleHRlbmRzIGVycm9yc18xLlR5cGVkRXJyb3Ige1xufVxuZXhwb3J0cy5TZXJ2ZXJFcnJvciA9IFNlcnZlckVycm9yO1xuY2xhc3MgU2VydmVyVHJhbnNhY3Rpb25FcnJvciBleHRlbmRzIFNlcnZlckVycm9yIHtcbn1cbmZ1bmN0aW9uIHBhcnNlUnBjRXJyb3IoZXJyb3JPYmopIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCBlcnJvckNsYXNzTmFtZSA9IHdhbGtTdWJ0eXBlKGVycm9yT2JqLCBycGNfZXJyb3Jfc2NoZW1hX2pzb25fMS5kZWZhdWx0LnNjaGVtYSwgcmVzdWx0LCAnJyk7XG4gICAgLy8gTk9URTogVGhpcyBhc3N1bWVzIHRoYXQgYWxsIGVycm9ycyBleHRlbmQgVHlwZWRFcnJvclxuICAgIGNvbnN0IGVycm9yID0gbmV3IFNlcnZlckVycm9yKGZvcm1hdEVycm9yKGVycm9yQ2xhc3NOYW1lLCByZXN1bHQpLCBlcnJvckNsYXNzTmFtZSk7XG4gICAgT2JqZWN0LmFzc2lnbihlcnJvciwgcmVzdWx0KTtcbiAgICByZXR1cm4gZXJyb3I7XG59XG5leHBvcnRzLnBhcnNlUnBjRXJyb3IgPSBwYXJzZVJwY0Vycm9yO1xuZnVuY3Rpb24gcGFyc2VSZXN1bHRFcnJvcihyZXN1bHQpIHtcbiAgICBjb25zdCBzZXJ2ZXJfZXJyb3IgPSBwYXJzZVJwY0Vycm9yKHJlc3VsdC5zdGF0dXMuRmFpbHVyZSk7XG4gICAgY29uc3Qgc2VydmVyX3R4X2Vycm9yID0gbmV3IFNlcnZlclRyYW5zYWN0aW9uRXJyb3IoKTtcbiAgICBPYmplY3QuYXNzaWduKHNlcnZlcl90eF9lcnJvciwgc2VydmVyX2Vycm9yKTtcbiAgICBzZXJ2ZXJfdHhfZXJyb3IudHlwZSA9IHNlcnZlcl9lcnJvci50eXBlO1xuICAgIHNlcnZlcl90eF9lcnJvci5tZXNzYWdlID0gc2VydmVyX2Vycm9yLm1lc3NhZ2U7XG4gICAgc2VydmVyX3R4X2Vycm9yLnRyYW5zYWN0aW9uX291dGNvbWUgPSByZXN1bHQudHJhbnNhY3Rpb25fb3V0Y29tZTtcbiAgICByZXR1cm4gc2VydmVyX3R4X2Vycm9yO1xufVxuZXhwb3J0cy5wYXJzZVJlc3VsdEVycm9yID0gcGFyc2VSZXN1bHRFcnJvcjtcbmZ1bmN0aW9uIGZvcm1hdEVycm9yKGVycm9yQ2xhc3NOYW1lLCBlcnJvckRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGVycm9yX21lc3NhZ2VzX2pzb25fMS5kZWZhdWx0W2Vycm9yQ2xhc3NOYW1lXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG11c3RhY2hlXzEuZGVmYXVsdC5yZW5kZXIoZXJyb3JfbWVzc2FnZXNfanNvbl8xLmRlZmF1bHRbZXJyb3JDbGFzc05hbWVdLCB7XG4gICAgICAgICAgICAuLi5lcnJvckRhdGEsXG4gICAgICAgICAgICAuLi5tdXN0YWNoZUhlbHBlcnNcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpO1xufVxuZXhwb3J0cy5mb3JtYXRFcnJvciA9IGZvcm1hdEVycm9yO1xuLyoqXG4gKiBXYWxrcyB0aHJvdWdoIGRlZmluZWQgc2NoZW1hIHJldHVybmluZyBlcnJvcihzKSByZWN1cnNpdmVseVxuICogQHBhcmFtIGVycm9yT2JqIFRoZSBlcnJvciB0byBiZSBwYXJzZWRcbiAqIEBwYXJhbSBzY2hlbWEgQSBkZWZpbmVkIHNjaGVtYSBpbiBKU09OIG1hcHBpbmcgdG8gdGhlIFJQQyBlcnJvcnNcbiAqIEBwYXJhbSByZXN1bHQgQW4gb2JqZWN0IHVzZWQgaW4gcmVjdXJzaW9uIG9yIGNhbGxlZCBkaXJlY3RseVxuICogQHBhcmFtIHR5cGVOYW1lIFRoZSBodW1hbi1yZWFkYWJsZSBlcnJvciB0eXBlIG5hbWUgYXMgZGVmaW5lZCBpbiB0aGUgSlNPTiBtYXBwaW5nXG4gKi9cbmZ1bmN0aW9uIHdhbGtTdWJ0eXBlKGVycm9yT2JqLCBzY2hlbWEsIHJlc3VsdCwgdHlwZU5hbWUpIHtcbiAgICBsZXQgZXJyb3I7XG4gICAgbGV0IHR5cGU7XG4gICAgbGV0IGVycm9yVHlwZU5hbWU7XG4gICAgZm9yIChjb25zdCBlcnJvck5hbWUgaW4gc2NoZW1hKSB7XG4gICAgICAgIGlmIChpc1N0cmluZyhlcnJvck9ialtlcnJvck5hbWVdKSkge1xuICAgICAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGlmIGVycm9yIHR5cGUgaXMgaW4gYSBzY2hlbWFcbiAgICAgICAgICAgIHJldHVybiBlcnJvck9ialtlcnJvck5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09iamVjdChlcnJvck9ialtlcnJvck5hbWVdKSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlcnJvck9ialtlcnJvck5hbWVdO1xuICAgICAgICAgICAgdHlwZSA9IHNjaGVtYVtlcnJvck5hbWVdO1xuICAgICAgICAgICAgZXJyb3JUeXBlTmFtZSA9IGVycm9yTmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc09iamVjdChlcnJvck9iai5raW5kKSAmJiBpc09iamVjdChlcnJvck9iai5raW5kW2Vycm9yTmFtZV0pKSB7XG4gICAgICAgICAgICBlcnJvciA9IGVycm9yT2JqLmtpbmRbZXJyb3JOYW1lXTtcbiAgICAgICAgICAgIHR5cGUgPSBzY2hlbWFbZXJyb3JOYW1lXTtcbiAgICAgICAgICAgIGVycm9yVHlwZU5hbWUgPSBlcnJvck5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXJyb3IgJiYgdHlwZSkge1xuICAgICAgICBmb3IgKGNvbnN0IHByb3Agb2YgT2JqZWN0LmtleXModHlwZS5wcm9wcykpIHtcbiAgICAgICAgICAgIHJlc3VsdFtwcm9wXSA9IGVycm9yW3Byb3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3YWxrU3VidHlwZShlcnJvciwgc2NoZW1hLCByZXN1bHQsIGVycm9yVHlwZU5hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVE9ETzogaXMgdGhpcyB0aGUgcmlnaHQgdGhpbmcgdG8gZG8/XG4gICAgICAgIHJlc3VsdC5raW5kID0gZXJyb3JPYmo7XG4gICAgICAgIHJldHVybiB0eXBlTmFtZTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRFcnJvclR5cGVGcm9tRXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSkge1xuICAgIC8vIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIHJlbW92ZWQgd2hlbiBKU09OIFJQQyBzdGFydHMgcmV0dXJuaW5nIHR5cGVkIGVycm9ycy5cbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSAvXmFjY291bnQgLio/IGRvZXMgbm90IGV4aXN0IHdoaWxlIHZpZXdpbmckLy50ZXN0KGVycm9yTWVzc2FnZSk6XG4gICAgICAgICAgICByZXR1cm4gJ0FjY291bnREb2VzTm90RXhpc3QnO1xuICAgICAgICBjYXNlIC9eQWNjb3VudCAuKj8gZG9lc24ndCBleGlzdCQvLnRlc3QoZXJyb3JNZXNzYWdlKTpcbiAgICAgICAgICAgIHJldHVybiAnQWNjb3VudERvZXNOb3RFeGlzdCc7XG4gICAgICAgIGNhc2UgL15hY2Nlc3Mga2V5IC4qPyBkb2VzIG5vdCBleGlzdCB3aGlsZSB2aWV3aW5nJC8udGVzdChlcnJvck1lc3NhZ2UpOlxuICAgICAgICAgICAgcmV0dXJuICdBY2Nlc3NLZXlEb2VzTm90RXhpc3QnO1xuICAgICAgICBjYXNlIC93YXNtIGV4ZWN1dGlvbiBmYWlsZWQgd2l0aCBlcnJvcjogRnVuY3Rpb25DYWxsRXJyb3JcXChDb21waWxhdGlvbkVycm9yXFwoQ29kZURvZXNOb3RFeGlzdC8udGVzdChlcnJvck1lc3NhZ2UpOlxuICAgICAgICAgICAgcmV0dXJuICdDb2RlRG9lc05vdEV4aXN0JztcbiAgICAgICAgY2FzZSAvVHJhbnNhY3Rpb24gbm9uY2UgXFxkKyBtdXN0IGJlIGxhcmdlciB0aGFuIG5vbmNlIG9mIHRoZSB1c2VkIGFjY2VzcyBrZXkgXFxkKy8udGVzdChlcnJvck1lc3NhZ2UpOlxuICAgICAgICAgICAgcmV0dXJuICdJbnZhbGlkTm9uY2UnO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuICdVbnR5cGVkRXJyb3InO1xuICAgIH1cbn1cbmV4cG9ydHMuZ2V0RXJyb3JUeXBlRnJvbUVycm9yTWVzc2FnZSA9IGdldEVycm9yVHlwZUZyb21FcnJvck1lc3NhZ2U7XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBkZXRlcm1pbmluZyBpZiB0aGUgYXJndW1lbnQgaXMgYW4gb2JqZWN0XG4gKiBAcGFyYW0gbiBWYWx1ZSB0byBjaGVja1xuICovXG5mdW5jdGlvbiBpc09iamVjdChuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiBkZXRlcm1pbmluZyBpZiB0aGUgYXJndW1lbnQgaXMgYSBzdHJpbmdcbiAqIEBwYXJhbSBuIFZhbHVlIHRvIGNoZWNrXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKG4pIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG4pID09PSAnW29iamVjdCBTdHJpbmddJztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJvcnNoXzEgPSByZXF1aXJlKFwiYm9yc2hcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJiYXNlX2VuY29kZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm9yc2hfMS5iYXNlRW5jb2RlOyB9IH0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiYmFzZV9kZWNvZGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJvcnNoXzEuYmFzZURlY29kZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInNlcmlhbGl6ZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm9yc2hfMS5zZXJpYWxpemU7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZXNlcmlhbGl6ZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm9yc2hfMS5kZXNlcmlhbGl6ZTsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJvcnNoRXJyb3JcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJvcnNoXzEuQm9yc2hFcnJvcjsgfSB9KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJpbmFyeVdyaXRlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYm9yc2hfMS5CaW5hcnlXcml0ZXI7IH0gfSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJCaW5hcnlSZWFkZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGJvcnNoXzEuQmluYXJ5UmVhZGVyOyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmZldGNoSnNvbiA9IHZvaWQgMDtcbmNvbnN0IGh0dHBfZXJyb3JzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImh0dHAtZXJyb3JzXCIpKTtcbmNvbnN0IGV4cG9uZW50aWFsX2JhY2tvZmZfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9leHBvbmVudGlhbC1iYWNrb2ZmXCIpKTtcbmNvbnN0IHByb3ZpZGVyc18xID0gcmVxdWlyZShcIi4uL3Byb3ZpZGVyc1wiKTtcbmNvbnN0IGVycm9yc18xID0gcmVxdWlyZShcIi4vZXJyb3JzXCIpO1xuY29uc3QgU1RBUlRfV0FJVF9USU1FX01TID0gMTAwMDtcbmNvbnN0IEJBQ0tPRkZfTVVMVElQTElFUiA9IDEuNTtcbmNvbnN0IFJFVFJZX05VTUJFUiA9IDEwO1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hKc29uKGNvbm5lY3Rpb25JbmZvT3JVcmwsIGpzb24pIHtcbiAgICBsZXQgY29ubmVjdGlvbkluZm8gPSB7IHVybDogbnVsbCB9O1xuICAgIGlmICh0eXBlb2YgKGNvbm5lY3Rpb25JbmZvT3JVcmwpID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25uZWN0aW9uSW5mby51cmwgPSBjb25uZWN0aW9uSW5mb09yVXJsO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29ubmVjdGlvbkluZm8gPSBjb25uZWN0aW9uSW5mb09yVXJsO1xuICAgIH1cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGV4cG9uZW50aWFsX2JhY2tvZmZfMS5kZWZhdWx0KFNUQVJUX1dBSVRfVElNRV9NUywgUkVUUllfTlVNQkVSLCBCQUNLT0ZGX01VTFRJUExJRVIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY29ubmVjdGlvbkluZm8udXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBqc29uID8gJ1BPU1QnIDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgYm9keToganNvbiA/IGpzb24gOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAuLi5jb25uZWN0aW9uSW5mby5oZWFkZXJzLCAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDUwMykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcnNfMS5sb2dXYXJuaW5nKGBSZXRyeWluZyBIVFRQIHJlcXVlc3QgZm9yICR7Y29ubmVjdGlvbkluZm8udXJsfSBhcyBpdCdzIG5vdCBhdmFpbGFibGUgbm93YCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBodHRwX2Vycm9yc18xLmRlZmF1bHQocmVzcG9uc2Uuc3RhdHVzLCBhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgaWYgKGVycm9yLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ0ZldGNoRXJyb3InKSB8fCBlcnJvci50b1N0cmluZygpLmluY2x1ZGVzKCdGYWlsZWQgdG8gZmV0Y2gnKSkge1xuICAgICAgICAgICAgICAgIGVycm9yc18xLmxvZ1dhcm5pbmcoYFJldHJ5aW5nIEhUVFAgcmVxdWVzdCBmb3IgJHtjb25uZWN0aW9uSW5mby51cmx9IGJlY2F1c2Ugb2YgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IHByb3ZpZGVyc18xLlR5cGVkRXJyb3IoYEV4Y2VlZGVkICR7UkVUUllfTlVNQkVSfSBhdHRlbXB0cyBmb3IgJHtjb25uZWN0aW9uSW5mby51cmx9LmAsICdSZXRyaWVzRXhjZWVkZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbn1cbmV4cG9ydHMuZmV0Y2hKc29uID0gZmV0Y2hKc29uO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kaWZmRXBvY2hWYWxpZGF0b3JzID0gZXhwb3J0cy5maW5kU2VhdFByaWNlID0gdm9pZCAwO1xuY29uc3QgYm5fanNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYm4uanNcIikpO1xuY29uc3QgZGVwZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJkZXBkXCIpKTtcbi8qKiBGaW5kcyBzZWF0IHByaWNlIGdpdmVuIHZhbGlkYXRvcnMgc3Rha2VzIGFuZCBudW1iZXIgb2Ygc2VhdHMuXG4gKiAgQ2FsY3VsYXRpb24gZm9sbG93IHRoZSBzcGVjOiBodHRwczovL25vbWljb24uaW8vRWNvbm9taWNzL1JFQURNRS5odG1sI3ZhbGlkYXRvci1zZWxlY3Rpb25cbiAqIEBwYXJhbXMgdmFsaWRhdG9yczogY3VycmVudCBvciBuZXh0IGVwb2NoIHZhbGlkYXRvcnMuXG4gKiBAcGFyYW1zIG1heE51bWJlck9mU2VhdHM6IG1heGltdW0gbnVtYmVyIG9mIHNlYXRzIGluIHRoZSBuZXR3b3JrLlxuICogQHBhcmFtcyBtaW5pbXVtU3Rha2VSYXRpbzogbWluaW11bSBzdGFrZSByYXRpb1xuICogQHBhcmFtcyBwcm90b2NvbFZlcnNpb246IHZlcnNpb24gb2YgdGhlIHByb3RvY29sIGZyb20gZ2VuZXNpcyBjb25maWdcbiAqL1xuZnVuY3Rpb24gZmluZFNlYXRQcmljZSh2YWxpZGF0b3JzLCBtYXhOdW1iZXJPZlNlYXRzLCBtaW5pbXVtU3Rha2VSYXRpbywgcHJvdG9jb2xWZXJzaW9uKSB7XG4gICAgaWYgKHByb3RvY29sVmVyc2lvbiAmJiBwcm90b2NvbFZlcnNpb24gPCA0OSkge1xuICAgICAgICByZXR1cm4gZmluZFNlYXRQcmljZUZvclByb3RvY29sQmVmb3JlNDkodmFsaWRhdG9ycywgbWF4TnVtYmVyT2ZTZWF0cyk7XG4gICAgfVxuICAgIGlmICghbWluaW11bVN0YWtlUmF0aW8pIHtcbiAgICAgICAgY29uc3QgZGVwcmVjYXRlID0gZGVwZF8xLmRlZmF1bHQoJ2ZpbmRTZWF0UHJpY2UodmFsaWRhdG9ycywgbWF4TnVtYmVyT2ZTZWF0cyknKTtcbiAgICAgICAgZGVwcmVjYXRlKCdgdXNlIGBmaW5kU2VhdFByaWNlKHZhbGlkYXRvcnMsIG1heE51bWJlck9mU2VhdHMsIG1pbmltdW1TdGFrZVJhdGlvKWAgaW5zdGVhZCcpO1xuICAgICAgICBtaW5pbXVtU3Rha2VSYXRpbyA9IFsxLCA2MjUwXTsgLy8gaGFyY29kZWQgbWluaW11bVN0YWtlUmF0aW9uIGZyb20gMTIvNy8yMVxuICAgIH1cbiAgICByZXR1cm4gZmluZFNlYXRQcmljZUZvclByb3RvY29sQWZ0ZXI0OSh2YWxpZGF0b3JzLCBtYXhOdW1iZXJPZlNlYXRzLCBtaW5pbXVtU3Rha2VSYXRpbyk7XG59XG5leHBvcnRzLmZpbmRTZWF0UHJpY2UgPSBmaW5kU2VhdFByaWNlO1xuZnVuY3Rpb24gZmluZFNlYXRQcmljZUZvclByb3RvY29sQmVmb3JlNDkodmFsaWRhdG9ycywgbnVtU2VhdHMpIHtcbiAgICBjb25zdCBzdGFrZXMgPSB2YWxpZGF0b3JzLm1hcCh2ID0+IG5ldyBibl9qc18xLmRlZmF1bHQodi5zdGFrZSwgMTApKS5zb3J0KChhLCBiKSA9PiBhLmNtcChiKSk7XG4gICAgY29uc3QgbnVtID0gbmV3IGJuX2pzXzEuZGVmYXVsdChudW1TZWF0cyk7XG4gICAgY29uc3Qgc3Rha2VzU3VtID0gc3Rha2VzLnJlZHVjZSgoYSwgYikgPT4gYS5hZGQoYikpO1xuICAgIGlmIChzdGFrZXNTdW0ubHQobnVtKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0YWtlcyBhcmUgYmVsb3cgc2VhdHMnKTtcbiAgICB9XG4gICAgLy8gYXNzZXJ0IHN0YWtlc1N1bSA+PSBudW1TZWF0c1xuICAgIGxldCBsZWZ0ID0gbmV3IGJuX2pzXzEuZGVmYXVsdCgxKSwgcmlnaHQgPSBzdGFrZXNTdW0uYWRkKG5ldyBibl9qc18xLmRlZmF1bHQoMSkpO1xuICAgIHdoaWxlICghbGVmdC5lcShyaWdodC5zdWIobmV3IGJuX2pzXzEuZGVmYXVsdCgxKSkpKSB7XG4gICAgICAgIGNvbnN0IG1pZCA9IGxlZnQuYWRkKHJpZ2h0KS5kaXYobmV3IGJuX2pzXzEuZGVmYXVsdCgyKSk7XG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICBsZXQgY3VycmVudFN1bSA9IG5ldyBibl9qc18xLmRlZmF1bHQoMCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Rha2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjdXJyZW50U3VtID0gY3VycmVudFN1bS5hZGQoc3Rha2VzW2ldLmRpdihtaWQpKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3VtLmd0ZShudW0pKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IG1pZDtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgcmlnaHQgPSBtaWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxlZnQ7XG59XG4vLyBuZWFyY29yZSByZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9uZWFyL25lYXJjb3JlL2Jsb2IvNWE4YWUyNjNlYzA3OTMwY2QzNGQwZGNmNWJjZWUyNTBjNjdjMDJhYS9jaGFpbi9lcG9jaF9tYW5hZ2VyL3NyYy92YWxpZGF0b3Jfc2VsZWN0aW9uLnJzI0wzMDg7TDMxNVxuZnVuY3Rpb24gZmluZFNlYXRQcmljZUZvclByb3RvY29sQWZ0ZXI0OSh2YWxpZGF0b3JzLCBtYXhOdW1iZXJPZlNlYXRzLCBtaW5pbXVtU3Rha2VSYXRpbykge1xuICAgIGlmIChtaW5pbXVtU3Rha2VSYXRpby5sZW5ndGggIT0gMikge1xuICAgICAgICB0aHJvdyBFcnJvcignbWluaW11bVN0YWtlUmF0aW8gc2hvdWxkIGhhdmUgMiBlbGVtZW50cycpO1xuICAgIH1cbiAgICBjb25zdCBzdGFrZXMgPSB2YWxpZGF0b3JzLm1hcCh2ID0+IG5ldyBibl9qc18xLmRlZmF1bHQodi5zdGFrZSwgMTApKS5zb3J0KChhLCBiKSA9PiBhLmNtcChiKSk7XG4gICAgY29uc3Qgc3Rha2VzU3VtID0gc3Rha2VzLnJlZHVjZSgoYSwgYikgPT4gYS5hZGQoYikpO1xuICAgIGlmICh2YWxpZGF0b3JzLmxlbmd0aCA8IG1heE51bWJlck9mU2VhdHMpIHtcbiAgICAgICAgcmV0dXJuIHN0YWtlc1N1bS5tdWwobmV3IGJuX2pzXzEuZGVmYXVsdChtaW5pbXVtU3Rha2VSYXRpb1swXSkpLmRpdihuZXcgYm5fanNfMS5kZWZhdWx0KG1pbmltdW1TdGFrZVJhdGlvWzFdKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc3Rha2VzWzBdLmFkZChuZXcgYm5fanNfMS5kZWZhdWx0KDEpKTtcbiAgICB9XG59XG4vKiogRGlmZiB2YWxpZGF0b3JzIGJldHdlZW4gY3VycmVudCBhbmQgbmV4dCBlcG9jaC5cbiAqIFJldHVybnMgYWRkaXRpb25zLCBzdWJ0cmFjdGlvbnMgYW5kIGNoYW5nZXMgdG8gdmFsaWRhdG9yIHNldC5cbiAqIEBwYXJhbXMgY3VycmVudFZhbGlkYXRvcnM6IGxpc3Qgb2YgY3VycmVudCB2YWxpZGF0b3JzLlxuICogQHBhcmFtcyBuZXh0VmFsaWRhdG9yczogbGlzdCBvZiBuZXh0IHZhbGlkYXRvcnMuXG4gKi9cbmZ1bmN0aW9uIGRpZmZFcG9jaFZhbGlkYXRvcnMoY3VycmVudFZhbGlkYXRvcnMsIG5leHRWYWxpZGF0b3JzKSB7XG4gICAgY29uc3QgdmFsaWRhdG9yc01hcCA9IG5ldyBNYXAoKTtcbiAgICBjdXJyZW50VmFsaWRhdG9ycy5mb3JFYWNoKHYgPT4gdmFsaWRhdG9yc01hcC5zZXQodi5hY2NvdW50X2lkLCB2KSk7XG4gICAgY29uc3QgbmV4dFZhbGlkYXRvcnNTZXQgPSBuZXcgU2V0KG5leHRWYWxpZGF0b3JzLm1hcCh2ID0+IHYuYWNjb3VudF9pZCkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5ld1ZhbGlkYXRvcnM6IG5leHRWYWxpZGF0b3JzLmZpbHRlcih2ID0+ICF2YWxpZGF0b3JzTWFwLmhhcyh2LmFjY291bnRfaWQpKSxcbiAgICAgICAgcmVtb3ZlZFZhbGlkYXRvcnM6IGN1cnJlbnRWYWxpZGF0b3JzLmZpbHRlcih2ID0+ICFuZXh0VmFsaWRhdG9yc1NldC5oYXModi5hY2NvdW50X2lkKSksXG4gICAgICAgIGNoYW5nZWRWYWxpZGF0b3JzOiBuZXh0VmFsaWRhdG9ycy5maWx0ZXIodiA9PiAodmFsaWRhdG9yc01hcC5oYXModi5hY2NvdW50X2lkKSAmJiB2YWxpZGF0b3JzTWFwLmdldCh2LmFjY291bnRfaWQpLnN0YWtlICE9IHYuc3Rha2UpKVxuICAgICAgICAgICAgLm1hcCh2ID0+ICh7IGN1cnJlbnQ6IHZhbGlkYXRvcnNNYXAuZ2V0KHYuYWNjb3VudF9pZCksIG5leHQ6IHYgfSkpXG4gICAgfTtcbn1cbmV4cG9ydHMuZGlmZkVwb2NoVmFsaWRhdG9ycyA9IGRpZmZFcG9jaFZhbGlkYXRvcnM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29ubmVjdGVkV2FsbGV0QWNjb3VudCA9IGV4cG9ydHMuV2FsbGV0QWNjb3VudCA9IGV4cG9ydHMuV2FsbGV0Q29ubmVjdGlvbiA9IHZvaWQgMDtcbi8qKlxuICogVGhlIGNsYXNzZXMgaW4gdGhpcyBtb2R1bGUgYXJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUge0BsaW5rIEJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZX0uIFRoaXMgbW9kdWxlIGV4cG9zZXMgdHdvIGNsYXNzZXM6XG4gKiAqIHtAbGluayBXYWxsZXRDb25uZWN0aW9ufSB3aGljaCByZWRpcmVjdHMgdXNlcnMgdG8ge0BsaW5rIGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL3Rvb2xzL25lYXItd2FsbGV0IHwgTkVBUiBXYWxsZXR9IGZvciBrZXkgbWFuYWdlbWVudC5cbiAqICoge0BsaW5rIENvbm5lY3RlZFdhbGxldEFjY291bnR9IGlzIGFuIHtAbGluayBBY2NvdW50fSBpbXBsZW1lbnRhdGlvbiB0aGF0IHVzZXMge0BsaW5rIFdhbGxldENvbm5lY3Rpb259IHRvIGdldCBrZXlzXG4gKlxuICogQG1vZHVsZSB3YWxsZXRBY2NvdW50XG4gKi9cbmNvbnN0IGRlcGRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGVwZFwiKSk7XG5jb25zdCBhY2NvdW50XzEgPSByZXF1aXJlKFwiLi9hY2NvdW50XCIpO1xuY29uc3QgdHJhbnNhY3Rpb25fMSA9IHJlcXVpcmUoXCIuL3RyYW5zYWN0aW9uXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuY29uc3QgYm9yc2hfMSA9IHJlcXVpcmUoXCJib3JzaFwiKTtcbmNvbnN0IGJvcnNoXzIgPSByZXF1aXJlKFwiYm9yc2hcIik7XG5jb25zdCBMT0dJTl9XQUxMRVRfVVJMX1NVRkZJWCA9ICcvbG9naW4vJztcbmNvbnN0IE1VTFRJU0lHX0hBU19NRVRIT0QgPSAnYWRkX3JlcXVlc3RfYW5kX2NvbmZpcm0nO1xuY29uc3QgTE9DQUxfU1RPUkFHRV9LRVlfU1VGRklYID0gJ193YWxsZXRfYXV0aF9rZXknO1xuY29uc3QgUEVORElOR19BQ0NFU1NfS0VZX1BSRUZJWCA9ICdwZW5kaW5nX2tleSc7IC8vIGJyb3dzZXIgc3RvcmFnZSBrZXkgZm9yIGEgcGVuZGluZyBhY2Nlc3Mga2V5IChpLmUuIGtleSBoYXMgYmVlbiBnZW5lcmF0ZWQgYnV0IHdlIGFyZSBub3Qgc3VyZSBpdCB3YXMgYWRkZWQgeWV0KVxuLyoqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUge0BsaW5rIEJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZX0uXG4gKiBJdCByZWRpcmVjdHMgdXNlcnMgdG8ge0BsaW5rIGh0dHBzOi8vZG9jcy5uZWFyLm9yZy9kb2NzL3Rvb2xzL25lYXItd2FsbGV0IHwgTkVBUiBXYWxsZXR9IGZvciBrZXkgbWFuYWdlbWVudC5cbiAqXG4gKiBAZXhhbXBsZSB7QGxpbmsgaHR0cHM6Ly9kb2NzLm5lYXIub3JnL2RvY3MvZGV2ZWxvcC9mcm9udC1lbmQvbmFqLXF1aWNrLXJlZmVyZW5jZSN3YWxsZXR9XG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIC8vIGNyZWF0ZSBuZXcgV2FsbGV0Q29ubmVjdGlvbiBpbnN0YW5jZVxuICogY29uc3Qgd2FsbGV0ID0gbmV3IFdhbGxldENvbm5lY3Rpb24obmVhciwgJ215LWFwcCcpO1xuICpcbiAqIC8vIElmIG5vdCBzaWduZWQgaW4gcmVkaXJlY3QgdG8gdGhlIE5FQVIgd2FsbGV0IHRvIHNpZ24gaW5cbiAqIC8vIGtleXMgd2lsbCBiZSBzdG9yZWQgaW4gdGhlIEJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZVxuICogaWYoIXdhbGxldC5pc1NpbmduZWRJbigpKSByZXR1cm4gd2FsbGV0LnJlcXVlc3RTaWduSW4oKVxuICogYGBgXG4gKi9cbmNsYXNzIFdhbGxldENvbm5lY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKG5lYXIsIGFwcEtleVByZWZpeCkge1xuICAgICAgICB0aGlzLl9uZWFyID0gbmVhcjtcbiAgICAgICAgY29uc3QgYXV0aERhdGFLZXkgPSBhcHBLZXlQcmVmaXggKyBMT0NBTF9TVE9SQUdFX0tFWV9TVUZGSVg7XG4gICAgICAgIGNvbnN0IGF1dGhEYXRhID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYXV0aERhdGFLZXkpKTtcbiAgICAgICAgdGhpcy5fbmV0d29ya0lkID0gbmVhci5jb25maWcubmV0d29ya0lkO1xuICAgICAgICB0aGlzLl93YWxsZXRCYXNlVXJsID0gbmVhci5jb25maWcud2FsbGV0VXJsO1xuICAgICAgICBhcHBLZXlQcmVmaXggPSBhcHBLZXlQcmVmaXggfHwgbmVhci5jb25maWcuY29udHJhY3ROYW1lIHx8ICdkZWZhdWx0JztcbiAgICAgICAgdGhpcy5fa2V5U3RvcmUgPSBuZWFyLmNvbm5lY3Rpb24uc2lnbmVyLmtleVN0b3JlO1xuICAgICAgICB0aGlzLl9hdXRoRGF0YSA9IGF1dGhEYXRhIHx8IHsgYWxsS2V5czogW10gfTtcbiAgICAgICAgdGhpcy5fYXV0aERhdGFLZXkgPSBhdXRoRGF0YUtleTtcbiAgICAgICAgaWYgKCF0aGlzLmlzU2lnbmVkSW4oKSkge1xuICAgICAgICAgICAgdGhpcy5fY29tcGxldGVTaWduSW5XaXRoQWNjZXNzS2V5KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlLCBpZiB0aGlzIFdhbGxldEFjY291bnQgaXMgYXV0aG9yaXplZCB3aXRoIHRoZSB3YWxsZXQuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqc1xuICAgICAqIGNvbnN0IHdhbGxldCA9IG5ldyBXYWxsZXRDb25uZWN0aW9uKG5lYXIsICdteS1hcHAnKTtcbiAgICAgKiB3YWxsZXQuaXNTaWduZWRJbigpO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGlzU2lnbmVkSW4oKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuX2F1dGhEYXRhLmFjY291bnRJZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhdXRob3JpemVkIEFjY291bnQgSUQuXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqc1xuICAgICAqIGNvbnN0IHdhbGxldCA9IG5ldyBXYWxsZXRDb25uZWN0aW9uKG5lYXIsICdteS1hcHAnKTtcbiAgICAgKiB3YWxsZXQuZ2V0QWNjb3VudElkKCk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZ2V0QWNjb3VudElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aERhdGEuYWNjb3VudElkIHx8ICcnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdHMgY3VycmVudCBwYWdlIHRvIHRoZSB3YWxsZXQgYXV0aGVudGljYXRpb24gcGFnZS5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBBbiBvcHRpb25hbCBvcHRpb25zIG9iamVjdFxuICAgICAqIEBwYXJhbSBvcHRpb25zLmNvbnRyYWN0SWQgVGhlIE5FQVIgYWNjb3VudCB3aGVyZSB0aGUgY29udHJhY3QgaXMgZGVwbG95ZWRcbiAgICAgKiBAcGFyYW0gb3B0aW9ucy5zdWNjZXNzVXJsIFVSTCB0byByZWRpcmVjdCB1cG9uIHN1Y2Nlc3MuIERlZmF1bHQ6IGN1cnJlbnQgdXJsXG4gICAgICogQHBhcmFtIG9wdGlvbnMuZmFpbHVyZVVybCBVUkwgdG8gcmVkaXJlY3QgdXBvbiBmYWlsdXJlLiBEZWZhdWx0OiBjdXJyZW50IHVybFxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGBqc1xuICAgICAqIGNvbnN0IHdhbGxldCA9IG5ldyBXYWxsZXRDb25uZWN0aW9uKG5lYXIsICdteS1hcHAnKTtcbiAgICAgKiAvLyByZWRpcmVjdHMgdG8gdGhlIE5FQVIgV2FsbGV0XG4gICAgICogd2FsbGV0LnJlcXVlc3RTaWduSW4oeyBjb250cmFjdElkOiAnYWNjb3VudC13aXRoLWRlcGxveS1jb250cmFjdC5uZWFyJyB9KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBhc3luYyByZXF1ZXN0U2lnbkluKGNvbnRyYWN0SWRPck9wdGlvbnMgPSB7fSwgdGl0bGUsIHN1Y2Nlc3NVcmwsIGZhaWx1cmVVcmwpIHtcbiAgICAgICAgbGV0IG9wdGlvbnM7XG4gICAgICAgIGlmICh0eXBlb2YgY29udHJhY3RJZE9yT3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlcHJlY2F0ZSA9IGRlcGRfMS5kZWZhdWx0KCdyZXF1ZXN0U2lnbkluKGNvbnRyYWN0SWQsIHRpdGxlKScpO1xuICAgICAgICAgICAgZGVwcmVjYXRlKCdgdGl0bGVgIGlnbm9yZWQ7IHVzZSBgcmVxdWVzdFNpZ25Jbih7IGNvbnRyYWN0SWQsIG1ldGhvZE5hbWVzLCBzdWNjZXNzVXJsLCBmYWlsdXJlVXJsIH0pYCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICBvcHRpb25zID0geyBjb250cmFjdElkOiBjb250cmFjdElkT3JPcHRpb25zLCBzdWNjZXNzVXJsLCBmYWlsdXJlVXJsIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25zID0gY29udHJhY3RJZE9yT3B0aW9ucztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdXJyZW50VXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGNvbnN0IG5ld1VybCA9IG5ldyBVUkwodGhpcy5fd2FsbGV0QmFzZVVybCArIExPR0lOX1dBTExFVF9VUkxfU1VGRklYKTtcbiAgICAgICAgbmV3VXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3N1Y2Nlc3NfdXJsJywgb3B0aW9ucy5zdWNjZXNzVXJsIHx8IGN1cnJlbnRVcmwuaHJlZik7XG4gICAgICAgIG5ld1VybC5zZWFyY2hQYXJhbXMuc2V0KCdmYWlsdXJlX3VybCcsIG9wdGlvbnMuZmFpbHVyZVVybCB8fCBjdXJyZW50VXJsLmhyZWYpO1xuICAgICAgICBpZiAob3B0aW9ucy5jb250cmFjdElkKSB7XG4gICAgICAgICAgICAvKiBUaHJvd3MgZXhjZXB0aW9uIGlmIGNvbnRyYWN0IGFjY291bnQgZG9lcyBub3QgZXhpc3QgKi9cbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0QWNjb3VudCA9IGF3YWl0IHRoaXMuX25lYXIuYWNjb3VudChvcHRpb25zLmNvbnRyYWN0SWQpO1xuICAgICAgICAgICAgYXdhaXQgY29udHJhY3RBY2NvdW50LnN0YXRlKCk7XG4gICAgICAgICAgICBuZXdVcmwuc2VhcmNoUGFyYW1zLnNldCgnY29udHJhY3RfaWQnLCBvcHRpb25zLmNvbnRyYWN0SWQpO1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzS2V5ID0gdXRpbHNfMS5LZXlQYWlyLmZyb21SYW5kb20oJ2VkMjU1MTknKTtcbiAgICAgICAgICAgIG5ld1VybC5zZWFyY2hQYXJhbXMuc2V0KCdwdWJsaWNfa2V5JywgYWNjZXNzS2V5LmdldFB1YmxpY0tleSgpLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5fa2V5U3RvcmUuc2V0S2V5KHRoaXMuX25ldHdvcmtJZCwgUEVORElOR19BQ0NFU1NfS0VZX1BSRUZJWCArIGFjY2Vzc0tleS5nZXRQdWJsaWNLZXkoKSwgYWNjZXNzS2V5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5tZXRob2ROYW1lcykge1xuICAgICAgICAgICAgb3B0aW9ucy5tZXRob2ROYW1lcy5mb3JFYWNoKG1ldGhvZE5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIG5ld1VybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdtZXRob2ROYW1lcycsIG1ldGhvZE5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihuZXdVcmwudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGFzeW5jIHJlcXVlc3RTaWduVHJhbnNhY3Rpb25zKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnc1swXSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlcHJlY2F0ZSA9IGRlcGRfMS5kZWZhdWx0KCdXYWxsZXRDb25uZWN0aW9uLnJlcXVlc3RTaWduVHJhbnNhY3Rpb25zKHRyYW5zYWN0aW9ucywgY2FsbGJhY2tVcmwsIG1ldGEpJyk7XG4gICAgICAgICAgICBkZXByZWNhdGUoJ3VzZSBgV2FsbGV0Q29ubmVjdGlvbi5yZXF1ZXN0U2lnblRyYW5zYWN0aW9ucyhSZXF1ZXN0U2lnblRyYW5zYWN0aW9uc09wdGlvbnMpYCBpbnN0ZWFkJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdFNpZ25UcmFuc2FjdGlvbnMoe1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uczogYXJnc1swXSxcbiAgICAgICAgICAgICAgICBjYWxsYmFja1VybDogYXJnc1sxXSxcbiAgICAgICAgICAgICAgICBtZXRhOiBhcmdzWzJdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdFNpZ25UcmFuc2FjdGlvbnMoYXJnc1swXSk7XG4gICAgfVxuICAgIGFzeW5jIF9yZXF1ZXN0U2lnblRyYW5zYWN0aW9ucyh7IHRyYW5zYWN0aW9ucywgbWV0YSwgY2FsbGJhY2tVcmwgfSkge1xuICAgICAgICBjb25zdCBjdXJyZW50VXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGNvbnN0IG5ld1VybCA9IG5ldyBVUkwoJ3NpZ24nLCB0aGlzLl93YWxsZXRCYXNlVXJsKTtcbiAgICAgICAgbmV3VXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3RyYW5zYWN0aW9ucycsIHRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgLm1hcCh0cmFuc2FjdGlvbiA9PiBib3JzaF8yLnNlcmlhbGl6ZSh0cmFuc2FjdGlvbl8xLlNDSEVNQSwgdHJhbnNhY3Rpb24pKVxuICAgICAgICAgICAgLm1hcChzZXJpYWxpemVkID0+IEJ1ZmZlci5mcm9tKHNlcmlhbGl6ZWQpLnRvU3RyaW5nKCdiYXNlNjQnKSlcbiAgICAgICAgICAgIC5qb2luKCcsJykpO1xuICAgICAgICBuZXdVcmwuc2VhcmNoUGFyYW1zLnNldCgnY2FsbGJhY2tVcmwnLCBjYWxsYmFja1VybCB8fCBjdXJyZW50VXJsLmhyZWYpO1xuICAgICAgICBpZiAobWV0YSlcbiAgICAgICAgICAgIG5ld1VybC5zZWFyY2hQYXJhbXMuc2V0KCdtZXRhJywgbWV0YSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24obmV3VXJsLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQ29tcGxldGUgc2lnbiBpbiBmb3IgYSBnaXZlbiBhY2NvdW50IGlkIGFuZCBwdWJsaWMga2V5LiBUbyBiZSBpbnZva2VkIGJ5IHRoZSBhcHAgd2hlbiBnZXR0aW5nIGEgY2FsbGJhY2sgZnJvbSB0aGUgd2FsbGV0LlxuICAgICAqL1xuICAgIGFzeW5jIF9jb21wbGV0ZVNpZ25JbldpdGhBY2Nlc3NLZXkoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgY29uc3QgcHVibGljS2V5ID0gY3VycmVudFVybC5zZWFyY2hQYXJhbXMuZ2V0KCdwdWJsaWNfa2V5JykgfHwgJyc7XG4gICAgICAgIGNvbnN0IGFsbEtleXMgPSAoY3VycmVudFVybC5zZWFyY2hQYXJhbXMuZ2V0KCdhbGxfa2V5cycpIHx8ICcnKS5zcGxpdCgnLCcpO1xuICAgICAgICBjb25zdCBhY2NvdW50SWQgPSBjdXJyZW50VXJsLnNlYXJjaFBhcmFtcy5nZXQoJ2FjY291bnRfaWQnKSB8fCAnJztcbiAgICAgICAgLy8gVE9ETzogSGFuZGxlIGVycm9ycyBkdXJpbmcgbG9naW5cbiAgICAgICAgaWYgKGFjY291bnRJZCkge1xuICAgICAgICAgICAgdGhpcy5fYXV0aERhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudElkLFxuICAgICAgICAgICAgICAgIGFsbEtleXNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fYXV0aERhdGFLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMuX2F1dGhEYXRhKSk7XG4gICAgICAgICAgICBpZiAocHVibGljS2V5KSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5fbW92ZUtleUZyb21UZW1wVG9QZXJtYW5lbnQoYWNjb3VudElkLCBwdWJsaWNLZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRVcmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgncHVibGljX2tleScpO1xuICAgICAgICBjdXJyZW50VXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ2FsbF9rZXlzJyk7XG4gICAgICAgIGN1cnJlbnRVcmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgnYWNjb3VudF9pZCcpO1xuICAgICAgICBjdXJyZW50VXJsLnNlYXJjaFBhcmFtcy5kZWxldGUoJ21ldGEnKTtcbiAgICAgICAgY3VycmVudFVybC5zZWFyY2hQYXJhbXMuZGVsZXRlKCd0cmFuc2FjdGlvbkhhc2hlcycpO1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCBjdXJyZW50VXJsLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICogQHBhcmFtIGFjY291bnRJZCBUaGUgTkVBUiBhY2NvdW50IG93bmluZyB0aGUgZ2l2ZW4gcHVibGljIGtleVxuICAgICAqIEBwYXJhbSBwdWJsaWNLZXkgVGhlIHB1YmxpYyBrZXkgYmVpbmcgc2V0IHRvIHRoZSBrZXkgc3RvcmVcbiAgICAgKi9cbiAgICBhc3luYyBfbW92ZUtleUZyb21UZW1wVG9QZXJtYW5lbnQoYWNjb3VudElkLCBwdWJsaWNLZXkpIHtcbiAgICAgICAgY29uc3Qga2V5UGFpciA9IGF3YWl0IHRoaXMuX2tleVN0b3JlLmdldEtleSh0aGlzLl9uZXR3b3JrSWQsIFBFTkRJTkdfQUNDRVNTX0tFWV9QUkVGSVggKyBwdWJsaWNLZXkpO1xuICAgICAgICBhd2FpdCB0aGlzLl9rZXlTdG9yZS5zZXRLZXkodGhpcy5fbmV0d29ya0lkLCBhY2NvdW50SWQsIGtleVBhaXIpO1xuICAgICAgICBhd2FpdCB0aGlzLl9rZXlTdG9yZS5yZW1vdmVLZXkodGhpcy5fbmV0d29ya0lkLCBQRU5ESU5HX0FDQ0VTU19LRVlfUFJFRklYICsgcHVibGljS2V5KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2lnbiBvdXQgZnJvbSB0aGUgY3VycmVudCBhY2NvdW50XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiB3YWxsZXRBY2NvdW50LnNpZ25PdXQoKTtcbiAgICAgKi9cbiAgICBzaWduT3V0KCkge1xuICAgICAgICB0aGlzLl9hdXRoRGF0YSA9IHt9O1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5fYXV0aERhdGFLZXkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGNvbm5lY3RlZCB3YWxsZXQgYWNjb3VudFxuICAgICAqL1xuICAgIGFjY291bnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5fY29ubmVjdGVkQWNjb3VudCkge1xuICAgICAgICAgICAgdGhpcy5fY29ubmVjdGVkQWNjb3VudCA9IG5ldyBDb25uZWN0ZWRXYWxsZXRBY2NvdW50KHRoaXMsIHRoaXMuX25lYXIuY29ubmVjdGlvbiwgdGhpcy5fYXV0aERhdGEuYWNjb3VudElkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fY29ubmVjdGVkQWNjb3VudDtcbiAgICB9XG59XG5leHBvcnRzLldhbGxldENvbm5lY3Rpb24gPSBXYWxsZXRDb25uZWN0aW9uO1xuZXhwb3J0cy5XYWxsZXRBY2NvdW50ID0gV2FsbGV0Q29ubmVjdGlvbjtcbi8qKlxuICoge0BsaW5rIEFjY291bnR9IGltcGxlbWVudGF0aW9uIHdoaWNoIHJlZGlyZWN0cyB0byB3YWxsZXQgdXNpbmcge0BsaW5rIFdhbGxldENvbm5lY3Rpb259IHdoZW4gbm8gbG9jYWwga2V5IGlzIGF2YWlsYWJsZS5cbiAqL1xuY2xhc3MgQ29ubmVjdGVkV2FsbGV0QWNjb3VudCBleHRlbmRzIGFjY291bnRfMS5BY2NvdW50IHtcbiAgICBjb25zdHJ1Y3Rvcih3YWxsZXRDb25uZWN0aW9uLCBjb25uZWN0aW9uLCBhY2NvdW50SWQpIHtcbiAgICAgICAgc3VwZXIoY29ubmVjdGlvbiwgYWNjb3VudElkKTtcbiAgICAgICAgdGhpcy53YWxsZXRDb25uZWN0aW9uID0gd2FsbGV0Q29ubmVjdGlvbjtcbiAgICB9XG4gICAgLy8gT3ZlcnJpZGluZyBBY2NvdW50IG1ldGhvZHNcbiAgICAvKipcbiAgICAgKiBTaWduIGEgdHJhbnNhY3Rpb24gYnkgcmVkaXJlY3RpbmcgdG8gdGhlIE5FQVIgV2FsbGV0XG4gICAgICogQHNlZSB7QGxpbmsgV2FsbGV0Q29ubmVjdGlvbi5yZXF1ZXN0U2lnblRyYW5zYWN0aW9uc31cbiAgICAgKi9cbiAgICBzaWduQW5kU2VuZFRyYW5zYWN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25BbmRTZW5kVHJhbnNhY3Rpb24oeyByZWNlaXZlcklkOiBhcmdzWzBdLCBhY3Rpb25zOiBhcmdzWzFdIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWduQW5kU2VuZFRyYW5zYWN0aW9uKGFyZ3NbMF0pO1xuICAgIH1cbiAgICBhc3luYyBfc2lnbkFuZFNlbmRUcmFuc2FjdGlvbih7IHJlY2VpdmVySWQsIGFjdGlvbnMsIHdhbGxldE1ldGEsIHdhbGxldENhbGxiYWNrVXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWYgfSkge1xuICAgICAgICBjb25zdCBsb2NhbEtleSA9IGF3YWl0IHRoaXMuY29ubmVjdGlvbi5zaWduZXIuZ2V0UHVibGljS2V5KHRoaXMuYWNjb3VudElkLCB0aGlzLmNvbm5lY3Rpb24ubmV0d29ya0lkKTtcbiAgICAgICAgbGV0IGFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuYWNjZXNzS2V5Rm9yVHJhbnNhY3Rpb24ocmVjZWl2ZXJJZCwgYWN0aW9ucywgbG9jYWxLZXkpO1xuICAgICAgICBpZiAoIWFjY2Vzc0tleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBtYXRjaGluZyBrZXkgZm9yIHRyYW5zYWN0aW9uIHNlbnQgdG8gJHtyZWNlaXZlcklkfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbEtleSAmJiBsb2NhbEtleS50b1N0cmluZygpID09PSBhY2Nlc3NLZXkucHVibGljX2tleSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgc3VwZXIuc2lnbkFuZFNlbmRUcmFuc2FjdGlvbih7IHJlY2VpdmVySWQsIGFjdGlvbnMgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdOb3RFbm91Z2hBbGxvd2FuY2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuYWNjZXNzS2V5Rm9yVHJhbnNhY3Rpb24ocmVjZWl2ZXJJZCwgYWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBibG9jayA9IGF3YWl0IHRoaXMuY29ubmVjdGlvbi5wcm92aWRlci5ibG9jayh7IGZpbmFsaXR5OiAnZmluYWwnIH0pO1xuICAgICAgICBjb25zdCBibG9ja0hhc2ggPSBib3JzaF8xLmJhc2VEZWNvZGUoYmxvY2suaGVhZGVyLmhhc2gpO1xuICAgICAgICBjb25zdCBwdWJsaWNLZXkgPSB1dGlsc18xLlB1YmxpY0tleS5mcm9tKGFjY2Vzc0tleS5wdWJsaWNfa2V5KTtcbiAgICAgICAgLy8gVE9ETzogQ2FjaGUgJiBsaXN0ZW4gZm9yIG5vbmNlIHVwZGF0ZXMgZm9yIGdpdmVuIGFjY2VzcyBrZXlcbiAgICAgICAgY29uc3Qgbm9uY2UgPSBhY2Nlc3NLZXkuYWNjZXNzX2tleS5ub25jZSArIDE7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb25fMS5jcmVhdGVUcmFuc2FjdGlvbih0aGlzLmFjY291bnRJZCwgcHVibGljS2V5LCByZWNlaXZlcklkLCBub25jZSwgYWN0aW9ucywgYmxvY2tIYXNoKTtcbiAgICAgICAgYXdhaXQgdGhpcy53YWxsZXRDb25uZWN0aW9uLnJlcXVlc3RTaWduVHJhbnNhY3Rpb25zKHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uczogW3RyYW5zYWN0aW9uXSxcbiAgICAgICAgICAgIG1ldGE6IHdhbGxldE1ldGEsXG4gICAgICAgICAgICBjYWxsYmFja1VybDogd2FsbGV0Q2FsbGJhY2tVcmxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdGYWlsZWQgdG8gcmVkaXJlY3QgdG8gc2lnbiB0cmFuc2FjdGlvbicpKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVE9ETzogQWdncmVnYXRlIG11bHRpcGxlIHRyYW5zYWN0aW9uIHJlcXVlc3Qgd2l0aCBcImRlYm91bmNlXCIuXG4gICAgICAgIC8vIFRPRE86IEludHJvZHVjZSBUcmFzYWN0aW9uUXVldWUgd2hpY2ggYWxzbyBjYW4gYmUgdXNlZCB0byB3YXRjaCBmb3Igc3RhdHVzP1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBnaXZlbiBhY2Nlc3Mga2V5IGFsbG93cyB0aGUgZnVuY3Rpb24gY2FsbCBvciBtZXRob2QgYXR0ZW1wdGVkIGluIHRyYW5zYWN0aW9uXG4gICAgICogQHBhcmFtIGFjY2Vzc0tleSBBcnJheSBvZiB7YWNjZXNzX2tleTogQWNjZXNzS2V5LCBwdWJsaWNfa2V5OiBQdWJsaWNLZXl9IGl0ZW1zXG4gICAgICogQHBhcmFtIHJlY2VpdmVySWQgVGhlIE5FQVIgYWNjb3VudCBhdHRlbXB0aW5nIHRvIGhhdmUgYWNjZXNzXG4gICAgICogQHBhcmFtIGFjdGlvbnMgVGhlIGFjdGlvbihzKSBuZWVkZWQgdG8gYmUgY2hlY2tlZCBmb3IgYWNjZXNzXG4gICAgICovXG4gICAgYXN5bmMgYWNjZXNzS2V5TWF0Y2hlc1RyYW5zYWN0aW9uKGFjY2Vzc0tleSwgcmVjZWl2ZXJJZCwgYWN0aW9ucykge1xuICAgICAgICBjb25zdCB7IGFjY2Vzc19rZXk6IHsgcGVybWlzc2lvbiB9IH0gPSBhY2Nlc3NLZXk7XG4gICAgICAgIGlmIChwZXJtaXNzaW9uID09PSAnRnVsbEFjY2VzcycpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJtaXNzaW9uLkZ1bmN0aW9uQ2FsbCkge1xuICAgICAgICAgICAgY29uc3QgeyByZWNlaXZlcl9pZDogYWxsb3dlZFJlY2VpdmVySWQsIG1ldGhvZF9uYW1lczogYWxsb3dlZE1ldGhvZHMgfSA9IHBlcm1pc3Npb24uRnVuY3Rpb25DYWxsO1xuICAgICAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICAgICBBY2NlcHQgbXVsdGlzaWcgYWNjZXNzIGtleXMgYW5kIGxldCB3YWxsZXRzIGF0dGVtcHQgdG8gc2lnbkFuZFNlbmRUcmFuc2FjdGlvblxuICAgICAgICAgICAgSWYgYW4gYWNjZXNzIGtleSBoYXMgaXRzZWxmIGFzIHJlY2VpdmVySWQgYW5kIG1ldGhvZCBwZXJtaXNzaW9uIGFkZF9yZXF1ZXN0X2FuZF9jb25maXJtLCB0aGVuIGl0IGlzIGJlaW5nIHVzZWQgaW4gYSB3YWxsZXQgd2l0aCBtdWx0aXNpZyBjb250cmFjdDogaHR0cHM6Ly9naXRodWIuY29tL25lYXIvY29yZS1jb250cmFjdHMvYmxvYi82NzFjMDVmMDlhYmVjYWJlN2E3ZTU4ZWZlOTQyNTUwYTM1ZmMzMjkyL211bHRpc2lnL3NyYy9saWIucnMjTDE0OS1MMTUzXG4gICAgICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgICAgIGlmIChhbGxvd2VkUmVjZWl2ZXJJZCA9PT0gdGhpcy5hY2NvdW50SWQgJiYgYWxsb3dlZE1ldGhvZHMuaW5jbHVkZXMoTVVMVElTSUdfSEFTX01FVEhPRCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbGxvd2VkUmVjZWl2ZXJJZCA9PT0gcmVjZWl2ZXJJZCkge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb25zLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IFt7IGZ1bmN0aW9uQ2FsbCB9XSA9IGFjdGlvbnM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uQ2FsbCAmJlxuICAgICAgICAgICAgICAgICAgICAoIWZ1bmN0aW9uQ2FsbC5kZXBvc2l0IHx8IGZ1bmN0aW9uQ2FsbC5kZXBvc2l0LnRvU3RyaW5nKCkgPT09ICcwJykgJiYgLy8gVE9ETzogU2hvdWxkIHN1cHBvcnQgY2hhcmdpbmcgYW1vdW50IHNtYWxsZXIgdGhhbiBhbGxvd2FuY2U/XG4gICAgICAgICAgICAgICAgICAgIChhbGxvd2VkTWV0aG9kcy5sZW5ndGggPT09IDAgfHwgYWxsb3dlZE1ldGhvZHMuaW5jbHVkZXMoZnVuY3Rpb25DYWxsLm1ldGhvZE5hbWUpKTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBIYW5kbGUgY2FzZXMgd2hlbiBhbGxvd2FuY2UgZG9lc24ndCBoYXZlIGVub3VnaCB0byBwYXkgZm9yIGdhc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFRPRE86IFN1cHBvcnQgb3RoZXIgcGVybWlzc2lvbnMgdGhhbiBGdW5jdGlvbkNhbGxcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgZnVuY3Rpb24gcmV0dXJuaW5nIHRoZSBhY2Nlc3Mga2V5IChpZiBpdCBleGlzdHMpIHRvIHRoZSByZWNlaXZlciB0aGF0IGdyYW50cyB0aGUgZGVzaWduYXRlZCBwZXJtaXNzaW9uXG4gICAgICogQHBhcmFtIHJlY2VpdmVySWQgVGhlIE5FQVIgYWNjb3VudCBzZWVraW5nIHRoZSBhY2Nlc3Mga2V5IGZvciBhIHRyYW5zYWN0aW9uXG4gICAgICogQHBhcmFtIGFjdGlvbnMgVGhlIGFjdGlvbihzKSBzb3VnaHQgdG8gZ2FpbiBhY2Nlc3MgdG9cbiAgICAgKiBAcGFyYW0gbG9jYWxLZXkgQSBsb2NhbCBwdWJsaWMga2V5IHByb3ZpZGVkIHRvIGNoZWNrIGZvciBhY2Nlc3NcbiAgICAgKiBAcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgKi9cbiAgICBhc3luYyBhY2Nlc3NLZXlGb3JUcmFuc2FjdGlvbihyZWNlaXZlcklkLCBhY3Rpb25zLCBsb2NhbEtleSkge1xuICAgICAgICBjb25zdCBhY2Nlc3NLZXlzID0gYXdhaXQgdGhpcy5nZXRBY2Nlc3NLZXlzKCk7XG4gICAgICAgIGlmIChsb2NhbEtleSkge1xuICAgICAgICAgICAgY29uc3QgYWNjZXNzS2V5ID0gYWNjZXNzS2V5cy5maW5kKGtleSA9PiBrZXkucHVibGljX2tleS50b1N0cmluZygpID09PSBsb2NhbEtleS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGlmIChhY2Nlc3NLZXkgJiYgYXdhaXQgdGhpcy5hY2Nlc3NLZXlNYXRjaGVzVHJhbnNhY3Rpb24oYWNjZXNzS2V5LCByZWNlaXZlcklkLCBhY3Rpb25zKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2Nlc3NLZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2FsbGV0S2V5cyA9IHRoaXMud2FsbGV0Q29ubmVjdGlvbi5fYXV0aERhdGEuYWxsS2V5cztcbiAgICAgICAgZm9yIChjb25zdCBhY2Nlc3NLZXkgb2YgYWNjZXNzS2V5cykge1xuICAgICAgICAgICAgaWYgKHdhbGxldEtleXMuaW5kZXhPZihhY2Nlc3NLZXkucHVibGljX2tleSkgIT09IC0xICYmIGF3YWl0IHRoaXMuYWNjZXNzS2V5TWF0Y2hlc1RyYW5zYWN0aW9uKGFjY2Vzc0tleSwgcmVjZWl2ZXJJZCwgYWN0aW9ucykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjZXNzS2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29ubmVjdGVkV2FsbGV0QWNjb3VudCA9IENvbm5lY3RlZFdhbGxldEFjY291bnQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBvW2syXSA9IG1ba107XG59KSk7XG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XG59KTtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlc2VyaWFsaXplVW5jaGVja2VkID0gZXhwb3J0cy5kZXNlcmlhbGl6ZSA9IGV4cG9ydHMuc2VyaWFsaXplID0gZXhwb3J0cy5CaW5hcnlSZWFkZXIgPSBleHBvcnRzLkJpbmFyeVdyaXRlciA9IGV4cG9ydHMuQm9yc2hFcnJvciA9IGV4cG9ydHMuYmFzZURlY29kZSA9IGV4cG9ydHMuYmFzZUVuY29kZSA9IHZvaWQgMDtcbmNvbnN0IGJuX2pzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImJuLmpzXCIpKTtcbmNvbnN0IGJzNThfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYnM1OFwiKSk7XG4vLyBUT0RPOiBNYWtlIHN1cmUgdGhpcyBwb2x5ZmlsbCBub3QgaW5jbHVkZWQgd2hlbiBub3QgcmVxdWlyZWRcbmNvbnN0IGVuY29kaW5nID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJ0ZXh0LWVuY29kaW5nLXV0Zi04XCIpKTtcbmNvbnN0IFRleHREZWNvZGVyID0gKHR5cGVvZiBnbG9iYWwuVGV4dERlY29kZXIgIT09ICdmdW5jdGlvbicpID8gZW5jb2RpbmcuVGV4dERlY29kZXIgOiBnbG9iYWwuVGV4dERlY29kZXI7XG5jb25zdCB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigndXRmLTgnLCB7IGZhdGFsOiB0cnVlIH0pO1xuZnVuY3Rpb24gYmFzZUVuY29kZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgKHZhbHVlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFsdWUgPSBCdWZmZXIuZnJvbSh2YWx1ZSwgJ3V0ZjgnKTtcbiAgICB9XG4gICAgcmV0dXJuIGJzNThfMS5kZWZhdWx0LmVuY29kZShCdWZmZXIuZnJvbSh2YWx1ZSkpO1xufVxuZXhwb3J0cy5iYXNlRW5jb2RlID0gYmFzZUVuY29kZTtcbmZ1bmN0aW9uIGJhc2VEZWNvZGUodmFsdWUpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oYnM1OF8xLmRlZmF1bHQuZGVjb2RlKHZhbHVlKSk7XG59XG5leHBvcnRzLmJhc2VEZWNvZGUgPSBiYXNlRGVjb2RlO1xuY29uc3QgSU5JVElBTF9MRU5HVEggPSAxMDI0O1xuY2xhc3MgQm9yc2hFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmZpZWxkUGF0aCA9IFtdO1xuICAgICAgICB0aGlzLm9yaWdpbmFsTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgfVxuICAgIGFkZFRvRmllbGRQYXRoKGZpZWxkTmFtZSkge1xuICAgICAgICB0aGlzLmZpZWxkUGF0aC5zcGxpY2UoMCwgMCwgZmllbGROYW1lKTtcbiAgICAgICAgLy8gTk9URTogTW9kaWZ5aW5nIG1lc3NhZ2UgZGlyZWN0bHkgYXMgamVzdCBkb2Vzbid0IHVzZSAudG9TdHJpbmcoKVxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLm9yaWdpbmFsTWVzc2FnZSArICc6ICcgKyB0aGlzLmZpZWxkUGF0aC5qb2luKCcuJyk7XG4gICAgfVxufVxuZXhwb3J0cy5Cb3JzaEVycm9yID0gQm9yc2hFcnJvcjtcbi8vLyBCaW5hcnkgZW5jb2Rlci5cbmNsYXNzIEJpbmFyeVdyaXRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYnVmID0gQnVmZmVyLmFsbG9jKElOSVRJQUxfTEVOR1RIKTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIH1cbiAgICBtYXliZVJlc2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYnVmLmxlbmd0aCA8IDE2ICsgdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmID0gQnVmZmVyLmNvbmNhdChbdGhpcy5idWYsIEJ1ZmZlci5hbGxvYyhJTklUSUFMX0xFTkdUSCldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3cml0ZVU4KHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF5YmVSZXNpemUoKTtcbiAgICAgICAgdGhpcy5idWYud3JpdGVVSW50OCh2YWx1ZSwgdGhpcy5sZW5ndGgpO1xuICAgICAgICB0aGlzLmxlbmd0aCArPSAxO1xuICAgIH1cbiAgICB3cml0ZVUxNih2YWx1ZSkge1xuICAgICAgICB0aGlzLm1heWJlUmVzaXplKCk7XG4gICAgICAgIHRoaXMuYnVmLndyaXRlVUludDE2TEUodmFsdWUsIHRoaXMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5sZW5ndGggKz0gMjtcbiAgICB9XG4gICAgd3JpdGVVMzIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXliZVJlc2l6ZSgpO1xuICAgICAgICB0aGlzLmJ1Zi53cml0ZVVJbnQzMkxFKHZhbHVlLCB0aGlzLmxlbmd0aCk7XG4gICAgICAgIHRoaXMubGVuZ3RoICs9IDQ7XG4gICAgfVxuICAgIHdyaXRlVTY0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF5YmVSZXNpemUoKTtcbiAgICAgICAgdGhpcy53cml0ZUJ1ZmZlcihCdWZmZXIuZnJvbShuZXcgYm5fanNfMS5kZWZhdWx0KHZhbHVlKS50b0FycmF5KCdsZScsIDgpKSk7XG4gICAgfVxuICAgIHdyaXRlVTEyOCh2YWx1ZSkge1xuICAgICAgICB0aGlzLm1heWJlUmVzaXplKCk7XG4gICAgICAgIHRoaXMud3JpdGVCdWZmZXIoQnVmZmVyLmZyb20obmV3IGJuX2pzXzEuZGVmYXVsdCh2YWx1ZSkudG9BcnJheSgnbGUnLCAxNikpKTtcbiAgICB9XG4gICAgd3JpdGVVMjU2KHZhbHVlKSB7XG4gICAgICAgIHRoaXMubWF5YmVSZXNpemUoKTtcbiAgICAgICAgdGhpcy53cml0ZUJ1ZmZlcihCdWZmZXIuZnJvbShuZXcgYm5fanNfMS5kZWZhdWx0KHZhbHVlKS50b0FycmF5KCdsZScsIDMyKSkpO1xuICAgIH1cbiAgICB3cml0ZVU1MTIodmFsdWUpIHtcbiAgICAgICAgdGhpcy5tYXliZVJlc2l6ZSgpO1xuICAgICAgICB0aGlzLndyaXRlQnVmZmVyKEJ1ZmZlci5mcm9tKG5ldyBibl9qc18xLmRlZmF1bHQodmFsdWUpLnRvQXJyYXkoJ2xlJywgNjQpKSk7XG4gICAgfVxuICAgIHdyaXRlQnVmZmVyKGJ1ZmZlcikge1xuICAgICAgICAvLyBCdWZmZXIuZnJvbSBpcyBuZWVkZWQgYXMgdGhpcy5idWYuc3ViYXJyYXkgY2FuIHJldHVybiBwbGFpbiBVaW50OEFycmF5IGluIGJyb3dzZXJcbiAgICAgICAgdGhpcy5idWYgPSBCdWZmZXIuY29uY2F0KFtCdWZmZXIuZnJvbSh0aGlzLmJ1Zi5zdWJhcnJheSgwLCB0aGlzLmxlbmd0aCkpLCBidWZmZXIsIEJ1ZmZlci5hbGxvYyhJTklUSUFMX0xFTkdUSCldKTtcbiAgICAgICAgdGhpcy5sZW5ndGggKz0gYnVmZmVyLmxlbmd0aDtcbiAgICB9XG4gICAgd3JpdGVTdHJpbmcoc3RyKSB7XG4gICAgICAgIHRoaXMubWF5YmVSZXNpemUoKTtcbiAgICAgICAgY29uc3QgYiA9IEJ1ZmZlci5mcm9tKHN0ciwgJ3V0ZjgnKTtcbiAgICAgICAgdGhpcy53cml0ZVUzMihiLmxlbmd0aCk7XG4gICAgICAgIHRoaXMud3JpdGVCdWZmZXIoYik7XG4gICAgfVxuICAgIHdyaXRlRml4ZWRBcnJheShhcnJheSkge1xuICAgICAgICB0aGlzLndyaXRlQnVmZmVyKEJ1ZmZlci5mcm9tKGFycmF5KSk7XG4gICAgfVxuICAgIHdyaXRlQXJyYXkoYXJyYXksIGZuKSB7XG4gICAgICAgIHRoaXMubWF5YmVSZXNpemUoKTtcbiAgICAgICAgdGhpcy53cml0ZVUzMihhcnJheS5sZW5ndGgpO1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW0gb2YgYXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMubWF5YmVSZXNpemUoKTtcbiAgICAgICAgICAgIGZuKGVsZW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvQXJyYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1Zi5zdWJhcnJheSgwLCB0aGlzLmxlbmd0aCk7XG4gICAgfVxufVxuZXhwb3J0cy5CaW5hcnlXcml0ZXIgPSBCaW5hcnlXcml0ZXI7XG5mdW5jdGlvbiBoYW5kbGluZ1JhbmdlRXJyb3IodGFyZ2V0LCBwcm9wZXJ0eUtleSwgcHJvcGVydHlEZXNjcmlwdG9yKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBwcm9wZXJ0eURlc2NyaXB0b3IudmFsdWU7XG4gICAgcHJvcGVydHlEZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbE1ldGhvZC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBSYW5nZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29kZSA9IGUuY29kZTtcbiAgICAgICAgICAgICAgICBpZiAoWydFUlJfQlVGRkVSX09VVF9PRl9CT1VORFMnLCAnRVJSX09VVF9PRl9SQU5HRSddLmluZGV4T2YoY29kZSkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQm9yc2hFcnJvcignUmVhY2hlZCB0aGUgZW5kIG9mIGJ1ZmZlciB3aGVuIGRlc2VyaWFsaXppbmcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNsYXNzIEJpbmFyeVJlYWRlciB7XG4gICAgY29uc3RydWN0b3IoYnVmKSB7XG4gICAgICAgIHRoaXMuYnVmID0gYnVmO1xuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XG4gICAgfVxuICAgIHJlYWRVOCgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmJ1Zi5yZWFkVUludDgodGhpcy5vZmZzZXQpO1xuICAgICAgICB0aGlzLm9mZnNldCArPSAxO1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIHJlYWRVMTYoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5idWYucmVhZFVJbnQxNkxFKHRoaXMub2Zmc2V0KTtcbiAgICAgICAgdGhpcy5vZmZzZXQgKz0gMjtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZWFkVTMyKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuYnVmLnJlYWRVSW50MzJMRSh0aGlzLm9mZnNldCk7XG4gICAgICAgIHRoaXMub2Zmc2V0ICs9IDQ7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmVhZFU2NCgpIHtcbiAgICAgICAgY29uc3QgYnVmID0gdGhpcy5yZWFkQnVmZmVyKDgpO1xuICAgICAgICByZXR1cm4gbmV3IGJuX2pzXzEuZGVmYXVsdChidWYsICdsZScpO1xuICAgIH1cbiAgICByZWFkVTEyOCgpIHtcbiAgICAgICAgY29uc3QgYnVmID0gdGhpcy5yZWFkQnVmZmVyKDE2KTtcbiAgICAgICAgcmV0dXJuIG5ldyBibl9qc18xLmRlZmF1bHQoYnVmLCAnbGUnKTtcbiAgICB9XG4gICAgcmVhZFUyNTYoKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IHRoaXMucmVhZEJ1ZmZlcigzMik7XG4gICAgICAgIHJldHVybiBuZXcgYm5fanNfMS5kZWZhdWx0KGJ1ZiwgJ2xlJyk7XG4gICAgfVxuICAgIHJlYWRVNTEyKCkge1xuICAgICAgICBjb25zdCBidWYgPSB0aGlzLnJlYWRCdWZmZXIoNjQpO1xuICAgICAgICByZXR1cm4gbmV3IGJuX2pzXzEuZGVmYXVsdChidWYsICdsZScpO1xuICAgIH1cbiAgICByZWFkQnVmZmVyKGxlbikge1xuICAgICAgICBpZiAoKHRoaXMub2Zmc2V0ICsgbGVuKSA+IHRoaXMuYnVmLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJvcnNoRXJyb3IoYEV4cGVjdGVkIGJ1ZmZlciBsZW5ndGggJHtsZW59IGlzbid0IHdpdGhpbiBib3VuZHNgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmJ1Zi5zbGljZSh0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKyBsZW4pO1xuICAgICAgICB0aGlzLm9mZnNldCArPSBsZW47XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHJlYWRTdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHRoaXMucmVhZFUzMigpO1xuICAgICAgICBjb25zdCBidWYgPSB0aGlzLnJlYWRCdWZmZXIobGVuKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIE5PVEU6IFVzaW5nIFRleHREZWNvZGVyIHRvIGZhaWwgb24gaW52YWxpZCBVVEYtOFxuICAgICAgICAgICAgcmV0dXJuIHRleHREZWNvZGVyLmRlY29kZShidWYpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQm9yc2hFcnJvcihgRXJyb3IgZGVjb2RpbmcgVVRGLTggc3RyaW5nOiAke2V9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVhZEZpeGVkQXJyYXkobGVuKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSh0aGlzLnJlYWRCdWZmZXIobGVuKSk7XG4gICAgfVxuICAgIHJlYWRBcnJheShmbikge1xuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLnJlYWRVMzIoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gQXJyYXkoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZm4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5fX2RlY29yYXRlKFtcbiAgICBoYW5kbGluZ1JhbmdlRXJyb3Jcbl0sIEJpbmFyeVJlYWRlci5wcm90b3R5cGUsIFwicmVhZFU4XCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgaGFuZGxpbmdSYW5nZUVycm9yXG5dLCBCaW5hcnlSZWFkZXIucHJvdG90eXBlLCBcInJlYWRVMTZcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBoYW5kbGluZ1JhbmdlRXJyb3Jcbl0sIEJpbmFyeVJlYWRlci5wcm90b3R5cGUsIFwicmVhZFUzMlwiLCBudWxsKTtcbl9fZGVjb3JhdGUoW1xuICAgIGhhbmRsaW5nUmFuZ2VFcnJvclxuXSwgQmluYXJ5UmVhZGVyLnByb3RvdHlwZSwgXCJyZWFkVTY0XCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgaGFuZGxpbmdSYW5nZUVycm9yXG5dLCBCaW5hcnlSZWFkZXIucHJvdG90eXBlLCBcInJlYWRVMTI4XCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgaGFuZGxpbmdSYW5nZUVycm9yXG5dLCBCaW5hcnlSZWFkZXIucHJvdG90eXBlLCBcInJlYWRVMjU2XCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgaGFuZGxpbmdSYW5nZUVycm9yXG5dLCBCaW5hcnlSZWFkZXIucHJvdG90eXBlLCBcInJlYWRVNTEyXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgaGFuZGxpbmdSYW5nZUVycm9yXG5dLCBCaW5hcnlSZWFkZXIucHJvdG90eXBlLCBcInJlYWRTdHJpbmdcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBoYW5kbGluZ1JhbmdlRXJyb3Jcbl0sIEJpbmFyeVJlYWRlci5wcm90b3R5cGUsIFwicmVhZEZpeGVkQXJyYXlcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBoYW5kbGluZ1JhbmdlRXJyb3Jcbl0sIEJpbmFyeVJlYWRlci5wcm90b3R5cGUsIFwicmVhZEFycmF5XCIsIG51bGwpO1xuZXhwb3J0cy5CaW5hcnlSZWFkZXIgPSBCaW5hcnlSZWFkZXI7XG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cbmZ1bmN0aW9uIHNlcmlhbGl6ZUZpZWxkKHNjaGVtYSwgZmllbGROYW1lLCB2YWx1ZSwgZmllbGRUeXBlLCB3cml0ZXIpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBUT0RPOiBIYW5kbGUgbWlzc2luZyB2YWx1ZXMgcHJvcGVybHkgKG1ha2Ugc3VyZSB0aGV5IG5ldmVyIHJlc3VsdCBpbiBqdXN0IHNraXBwZWQgd3JpdGUpXG4gICAgICAgIGlmICh0eXBlb2YgZmllbGRUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgd3JpdGVyW2B3cml0ZSR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGZpZWxkVHlwZSl9YF0odmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZpZWxkVHlwZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkVHlwZVswXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoICE9PSBmaWVsZFR5cGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEJvcnNoRXJyb3IoYEV4cGVjdGluZyBieXRlIGFycmF5IG9mIGxlbmd0aCAke2ZpZWxkVHlwZVswXX0sIGJ1dCBnb3QgJHt2YWx1ZS5sZW5ndGh9IGJ5dGVzYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdyaXRlci53cml0ZUZpeGVkQXJyYXkodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZmllbGRUeXBlLmxlbmd0aCA9PT0gMiAmJiB0eXBlb2YgZmllbGRUeXBlWzFdID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggIT09IGZpZWxkVHlwZVsxXSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQm9yc2hFcnJvcihgRXhwZWN0aW5nIGJ5dGUgYXJyYXkgb2YgbGVuZ3RoICR7ZmllbGRUeXBlWzFdfSwgYnV0IGdvdCAke3ZhbHVlLmxlbmd0aH0gYnl0ZXNgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZFR5cGVbMV07IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVGaWVsZChzY2hlbWEsIG51bGwsIHZhbHVlW2ldLCBmaWVsZFR5cGVbMF0sIHdyaXRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd3JpdGVyLndyaXRlQXJyYXkodmFsdWUsIChpdGVtKSA9PiB7IHNlcmlhbGl6ZUZpZWxkKHNjaGVtYSwgZmllbGROYW1lLCBpdGVtLCBmaWVsZFR5cGVbMF0sIHdyaXRlcik7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZpZWxkVHlwZS5raW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZmllbGRUeXBlLmtpbmQpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdvcHRpb24nOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0ZXIud3JpdGVVOCgwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlci53cml0ZVU4KDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VyaWFsaXplRmllbGQoc2NoZW1hLCBmaWVsZE5hbWUsIHZhbHVlLCBmaWVsZFR5cGUudHlwZSwgd3JpdGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEJvcnNoRXJyb3IoYEZpZWxkVHlwZSAke2ZpZWxkVHlwZX0gdW5yZWNvZ25pemVkYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXJpYWxpemVTdHJ1Y3Qoc2NoZW1hLCB2YWx1ZSwgd3JpdGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgQm9yc2hFcnJvcikge1xuICAgICAgICAgICAgZXJyb3IuYWRkVG9GaWVsZFBhdGgoZmllbGROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXJpYWxpemVTdHJ1Y3Qoc2NoZW1hLCBvYmosIHdyaXRlcikge1xuICAgIGlmICh0eXBlb2Ygb2JqLmJvcnNoU2VyaWFsaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9iai5ib3JzaFNlcmlhbGl6ZSh3cml0ZXIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHN0cnVjdFNjaGVtYSA9IHNjaGVtYS5nZXQob2JqLmNvbnN0cnVjdG9yKTtcbiAgICBpZiAoIXN0cnVjdFNjaGVtYSkge1xuICAgICAgICB0aHJvdyBuZXcgQm9yc2hFcnJvcihgQ2xhc3MgJHtvYmouY29uc3RydWN0b3IubmFtZX0gaXMgbWlzc2luZyBpbiBzY2hlbWFgKTtcbiAgICB9XG4gICAgaWYgKHN0cnVjdFNjaGVtYS5raW5kID09PSAnc3RydWN0Jykge1xuICAgICAgICBzdHJ1Y3RTY2hlbWEuZmllbGRzLm1hcCgoW2ZpZWxkTmFtZSwgZmllbGRUeXBlXSkgPT4ge1xuICAgICAgICAgICAgc2VyaWFsaXplRmllbGQoc2NoZW1hLCBmaWVsZE5hbWUsIG9ialtmaWVsZE5hbWVdLCBmaWVsZFR5cGUsIHdyaXRlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdHJ1Y3RTY2hlbWEua2luZCA9PT0gJ2VudW0nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBvYmpbc3RydWN0U2NoZW1hLmZpZWxkXTtcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgc3RydWN0U2NoZW1hLnZhbHVlcy5sZW5ndGg7ICsraWR4KSB7XG4gICAgICAgICAgICBjb25zdCBbZmllbGROYW1lLCBmaWVsZFR5cGVdID0gc3RydWN0U2NoZW1hLnZhbHVlc1tpZHhdO1xuICAgICAgICAgICAgaWYgKGZpZWxkTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHdyaXRlci53cml0ZVU4KGlkeCk7XG4gICAgICAgICAgICAgICAgc2VyaWFsaXplRmllbGQoc2NoZW1hLCBmaWVsZE5hbWUsIG9ialtmaWVsZE5hbWVdLCBmaWVsZFR5cGUsIHdyaXRlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBCb3JzaEVycm9yKGBVbmV4cGVjdGVkIHNjaGVtYSBraW5kOiAke3N0cnVjdFNjaGVtYS5raW5kfSBmb3IgJHtvYmouY29uc3RydWN0b3IubmFtZX1gKTtcbiAgICB9XG59XG4vLy8gU2VyaWFsaXplIGdpdmVuIG9iamVjdCB1c2luZyBzY2hlbWEgb2YgdGhlIGZvcm06XG4vLy8geyBjbGFzc19uYW1lIC0+IFsgW2ZpZWxkX25hbWUsIGZpZWxkX3R5cGVdLCAuLiBdLCAuLiB9XG5mdW5jdGlvbiBzZXJpYWxpemUoc2NoZW1hLCBvYmosIFdyaXRlciA9IEJpbmFyeVdyaXRlcikge1xuICAgIGNvbnN0IHdyaXRlciA9IG5ldyBXcml0ZXIoKTtcbiAgICBzZXJpYWxpemVTdHJ1Y3Qoc2NoZW1hLCBvYmosIHdyaXRlcik7XG4gICAgcmV0dXJuIHdyaXRlci50b0FycmF5KCk7XG59XG5leHBvcnRzLnNlcmlhbGl6ZSA9IHNlcmlhbGl6ZTtcbmZ1bmN0aW9uIGRlc2VyaWFsaXplRmllbGQoc2NoZW1hLCBmaWVsZE5hbWUsIGZpZWxkVHlwZSwgcmVhZGVyKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWVsZFR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhZGVyW2ByZWFkJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIoZmllbGRUeXBlKX1gXSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZFR5cGUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWVsZFR5cGVbMF0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRlci5yZWFkRml4ZWRBcnJheShmaWVsZFR5cGVbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGZpZWxkVHlwZVsxXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkVHlwZVsxXTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGRlc2VyaWFsaXplRmllbGQoc2NoZW1hLCBudWxsLCBmaWVsZFR5cGVbMF0sIHJlYWRlcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRlci5yZWFkQXJyYXkoKCkgPT4gZGVzZXJpYWxpemVGaWVsZChzY2hlbWEsIGZpZWxkTmFtZSwgZmllbGRUeXBlWzBdLCByZWFkZXIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmllbGRUeXBlLmtpbmQgPT09ICdvcHRpb24nKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSByZWFkZXIucmVhZFU4KCk7XG4gICAgICAgICAgICBpZiAob3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlc2VyaWFsaXplRmllbGQoc2NoZW1hLCBmaWVsZE5hbWUsIGZpZWxkVHlwZS50eXBlLCByZWFkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVzZXJpYWxpemVTdHJ1Y3Qoc2NoZW1hLCBmaWVsZFR5cGUsIHJlYWRlcik7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBCb3JzaEVycm9yKSB7XG4gICAgICAgICAgICBlcnJvci5hZGRUb0ZpZWxkUGF0aChmaWVsZE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlc2VyaWFsaXplU3RydWN0KHNjaGVtYSwgY2xhc3NUeXBlLCByZWFkZXIpIHtcbiAgICBpZiAodHlwZW9mIGNsYXNzVHlwZS5ib3JzaERlc2VyaWFsaXplID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjbGFzc1R5cGUuYm9yc2hEZXNlcmlhbGl6ZShyZWFkZXIpO1xuICAgIH1cbiAgICBjb25zdCBzdHJ1Y3RTY2hlbWEgPSBzY2hlbWEuZ2V0KGNsYXNzVHlwZSk7XG4gICAgaWYgKCFzdHJ1Y3RTY2hlbWEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEJvcnNoRXJyb3IoYENsYXNzICR7Y2xhc3NUeXBlLm5hbWV9IGlzIG1pc3NpbmcgaW4gc2NoZW1hYCk7XG4gICAgfVxuICAgIGlmIChzdHJ1Y3RTY2hlbWEua2luZCA9PT0gJ3N0cnVjdCcpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgICAgIGZvciAoY29uc3QgW2ZpZWxkTmFtZSwgZmllbGRUeXBlXSBvZiBzY2hlbWEuZ2V0KGNsYXNzVHlwZSkuZmllbGRzKSB7XG4gICAgICAgICAgICByZXN1bHRbZmllbGROYW1lXSA9IGRlc2VyaWFsaXplRmllbGQoc2NoZW1hLCBmaWVsZE5hbWUsIGZpZWxkVHlwZSwgcmVhZGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IGNsYXNzVHlwZShyZXN1bHQpO1xuICAgIH1cbiAgICBpZiAoc3RydWN0U2NoZW1hLmtpbmQgPT09ICdlbnVtJykge1xuICAgICAgICBjb25zdCBpZHggPSByZWFkZXIucmVhZFU4KCk7XG4gICAgICAgIGlmIChpZHggPj0gc3RydWN0U2NoZW1hLnZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBCb3JzaEVycm9yKGBFbnVtIGluZGV4OiAke2lkeH0gaXMgb3V0IG9mIHJhbmdlYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgW2ZpZWxkTmFtZSwgZmllbGRUeXBlXSA9IHN0cnVjdFNjaGVtYS52YWx1ZXNbaWR4XTtcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IGRlc2VyaWFsaXplRmllbGQoc2NoZW1hLCBmaWVsZE5hbWUsIGZpZWxkVHlwZSwgcmVhZGVyKTtcbiAgICAgICAgcmV0dXJuIG5ldyBjbGFzc1R5cGUoeyBbZmllbGROYW1lXTogZmllbGRWYWx1ZSB9KTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEJvcnNoRXJyb3IoYFVuZXhwZWN0ZWQgc2NoZW1hIGtpbmQ6ICR7c3RydWN0U2NoZW1hLmtpbmR9IGZvciAke2NsYXNzVHlwZS5jb25zdHJ1Y3Rvci5uYW1lfWApO1xufVxuLy8vIERlc2VyaWFsaXplcyBvYmplY3QgZnJvbSBieXRlcyB1c2luZyBzY2hlbWEuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZShzY2hlbWEsIGNsYXNzVHlwZSwgYnVmZmVyLCBSZWFkZXIgPSBCaW5hcnlSZWFkZXIpIHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgUmVhZGVyKGJ1ZmZlcik7XG4gICAgY29uc3QgcmVzdWx0ID0gZGVzZXJpYWxpemVTdHJ1Y3Qoc2NoZW1hLCBjbGFzc1R5cGUsIHJlYWRlcik7XG4gICAgaWYgKHJlYWRlci5vZmZzZXQgPCBidWZmZXIubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBCb3JzaEVycm9yKGBVbmV4cGVjdGVkICR7YnVmZmVyLmxlbmd0aCAtIHJlYWRlci5vZmZzZXR9IGJ5dGVzIGFmdGVyIGRlc2VyaWFsaXplZCBkYXRhYCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmRlc2VyaWFsaXplID0gZGVzZXJpYWxpemU7XG4vLy8gRGVzZXJpYWxpemVzIG9iamVjdCBmcm9tIGJ5dGVzIHVzaW5nIHNjaGVtYSwgd2l0aG91dCBjaGVja2luZyB0aGUgbGVuZ3RoIHJlYWRcbmZ1bmN0aW9uIGRlc2VyaWFsaXplVW5jaGVja2VkKHNjaGVtYSwgY2xhc3NUeXBlLCBidWZmZXIsIFJlYWRlciA9IEJpbmFyeVJlYWRlcikge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBSZWFkZXIoYnVmZmVyKTtcbiAgICByZXR1cm4gZGVzZXJpYWxpemVTdHJ1Y3Qoc2NoZW1hLCBjbGFzc1R5cGUsIHJlYWRlcik7XG59XG5leHBvcnRzLmRlc2VyaWFsaXplVW5jaGVja2VkID0gZGVzZXJpYWxpemVVbmNoZWNrZWQ7XG4iLCIvKiFcbiAqIGRlcGRcbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlcGRcblxuLyoqXG4gKiBDcmVhdGUgZGVwcmVjYXRlIGZvciBuYW1lc3BhY2UgaW4gY2FsbGVyLlxuICovXG5cbmZ1bmN0aW9uIGRlcGQgKG5hbWVzcGFjZSkge1xuICBpZiAoIW5hbWVzcGFjZSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IG5hbWVzcGFjZSBpcyByZXF1aXJlZCcpXG4gIH1cblxuICBmdW5jdGlvbiBkZXByZWNhdGUgKG1lc3NhZ2UpIHtcbiAgICAvLyBuby1vcCBpbiBicm93c2VyXG4gIH1cblxuICBkZXByZWNhdGUuX2ZpbGUgPSB1bmRlZmluZWRcbiAgZGVwcmVjYXRlLl9pZ25vcmVkID0gdHJ1ZVxuICBkZXByZWNhdGUuX25hbWVzcGFjZSA9IG5hbWVzcGFjZVxuICBkZXByZWNhdGUuX3RyYWNlZCA9IGZhbHNlXG4gIGRlcHJlY2F0ZS5fd2FybmVkID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIGRlcHJlY2F0ZS5mdW5jdGlvbiA9IHdyYXBmdW5jdGlvblxuICBkZXByZWNhdGUucHJvcGVydHkgPSB3cmFwcHJvcGVydHlcblxuICByZXR1cm4gZGVwcmVjYXRlXG59XG5cbi8qKlxuICogUmV0dXJuIGEgd3JhcHBlZCBmdW5jdGlvbiBpbiBhIGRlcHJlY2F0aW9uIG1lc3NhZ2UuXG4gKlxuICogVGhpcyBpcyBhIG5vLW9wIHZlcnNpb24gb2YgdGhlIHdyYXBwZXIsIHdoaWNoIGRvZXMgbm90aGluZyBidXQgY2FsbFxuICogdmFsaWRhdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiB3cmFwZnVuY3Rpb24gKGZuLCBtZXNzYWdlKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBmbiBtdXN0IGJlIGEgZnVuY3Rpb24nKVxuICB9XG5cbiAgcmV0dXJuIGZuXG59XG5cbi8qKlxuICogV3JhcCBwcm9wZXJ0eSBpbiBhIGRlcHJlY2F0aW9uIG1lc3NhZ2UuXG4gKlxuICogVGhpcyBpcyBhIG5vLW9wIHZlcnNpb24gb2YgdGhlIHdyYXBwZXIsIHdoaWNoIGRvZXMgbm90aGluZyBidXQgY2FsbFxuICogdmFsaWRhdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiB3cmFwcHJvcGVydHkgKG9iaiwgcHJvcCwgbWVzc2FnZSkge1xuICBpZiAoIW9iaiB8fCAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iaiAhPT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBvYmogbXVzdCBiZSBvYmplY3QnKVxuICB9XG5cbiAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcClcblxuICBpZiAoIWRlc2NyaXB0b3IpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IGNhbGwgcHJvcGVydHkgb24gb3duZXIgb2JqZWN0JylcbiAgfVxuXG4gIGlmICghZGVzY3JpcHRvci5jb25maWd1cmFibGUpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdwcm9wZXJ0eSBtdXN0IGJlIGNvbmZpZ3VyYWJsZScpXG4gIH1cbn1cbiIsInJlcXVpcmUoXCJjYXBhYmlsaXR5L2VzNVwiKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vbGliXCIpOyIsInZhciBDbGFzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgU291cmNlOiBPYmplY3QsXHJcbiAgICAgICAgY29uZmlnOiB7fSxcclxuICAgICAgICBidWlsZEFyZ3M6IFtdXHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja09wdGlvbihvcHRpb24pIHtcclxuICAgICAgICB2YXIga2V5ID0gXCJjb25maWdcIjtcclxuICAgICAgICBpZiAob3B0aW9uIGluc3RhbmNlb2YgRnVuY3Rpb24pXHJcbiAgICAgICAgICAgIGtleSA9IFwiU291cmNlXCI7XHJcbiAgICAgICAgZWxzZSBpZiAob3B0aW9uIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgIGtleSA9IFwiYnVpbGRBcmdzXCI7XHJcbiAgICAgICAgZWxzZSBpZiAob3B0aW9uIGluc3RhbmNlb2YgT2JqZWN0KVxyXG4gICAgICAgICAgICBrZXkgPSBcImNvbmZpZ1wiO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb25maWd1cmF0aW9uIG9wdGlvbi5cIik7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRHVwbGljYXRlZCBjb25maWd1cmF0aW9uIG9wdGlvbjogXCIgKyBrZXkgKyBcIi5cIik7XHJcbiAgICAgICAgb3B0aW9uc1trZXldID0gb3B0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGluZGV4ID0gMCwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaW5kZXggPCBsZW5ndGg7ICsraW5kZXgpXHJcbiAgICAgICAgY2hlY2tPcHRpb24oYXJndW1lbnRzW2luZGV4XSk7XHJcblxyXG4gICAgdmFyIFNvdXJjZSA9IG9wdGlvbnMuU291cmNlLFxyXG4gICAgICAgIGNvbmZpZyA9IG9wdGlvbnMuY29uZmlnLFxyXG4gICAgICAgIGJ1aWxkQXJncyA9IG9wdGlvbnMuYnVpbGRBcmdzO1xyXG5cclxuICAgIHJldHVybiAoU291cmNlLmV4dGVuZCB8fCBDbGFzcy5leHRlbmQpLmNhbGwoU291cmNlLCBjb25maWcsIGJ1aWxkQXJncyk7XHJcbn07XHJcblxyXG5DbGFzcy5mYWN0b3J5ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIFNvdXJjZSA9IHRoaXM7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmJ1aWxkIGluc3RhbmNlb2YgRnVuY3Rpb24pXHJcbiAgICAgICAgICAgIGluc3RhbmNlLmJ1aWxkLmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5pbml0IGluc3RhbmNlb2YgRnVuY3Rpb24pXHJcbiAgICAgICAgICAgIGluc3RhbmNlLmluaXQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuQ2xhc3MuZXh0ZW5kID0gZnVuY3Rpb24gKGNvbmZpZywgYnVpbGRBcmdzKSB7XHJcbiAgICB2YXIgU291cmNlID0gdGhpcztcclxuICAgIGlmICghY29uZmlnKVxyXG4gICAgICAgIGNvbmZpZyA9IHt9O1xyXG4gICAgdmFyIFN1YmplY3Q7XHJcbiAgICBpZiAoKGNvbmZpZy5wcm90b3R5cGUgaW5zdGFuY2VvZiBPYmplY3QpICYmIGNvbmZpZy5wcm90b3R5cGUuY29uc3RydWN0b3IgIT09IE9iamVjdClcclxuICAgICAgICBTdWJqZWN0ID0gY29uZmlnLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcclxuICAgIGVsc2UgaWYgKGNvbmZpZy5mYWN0b3J5IGluc3RhbmNlb2YgRnVuY3Rpb24pXHJcbiAgICAgICAgU3ViamVjdCA9IGNvbmZpZy5mYWN0b3J5LmNhbGwoU291cmNlKTtcclxuICAgIFN1YmplY3QgPSAoU291cmNlLmNsb25lIHx8IENsYXNzLmNsb25lKS5jYWxsKFNvdXJjZSwgU3ViamVjdCwgYnVpbGRBcmdzKTtcclxuICAgIChTdWJqZWN0Lm1lcmdlIHx8IENsYXNzLm1lcmdlKS5jYWxsKFN1YmplY3QsIGNvbmZpZyk7XHJcbiAgICByZXR1cm4gU3ViamVjdDtcclxufTtcclxuXHJcbkNsYXNzLnByb3RvdHlwZS5leHRlbmQgPSBmdW5jdGlvbiAoY29uZmlnLCBidWlsZEFyZ3MpIHtcclxuICAgIHZhciBzdWJqZWN0ID0gdGhpcztcclxuICAgIHZhciBpbnN0YW5jZSA9IChzdWJqZWN0LmNsb25lIHx8IENsYXNzLnByb3RvdHlwZS5jbG9uZSkuYXBwbHkoc3ViamVjdCwgYnVpbGRBcmdzKTtcclxuICAgIChpbnN0YW5jZS5tZXJnZSB8fCBDbGFzcy5wcm90b3R5cGUubWVyZ2UpLmNhbGwoaW5zdGFuY2UsIGNvbmZpZyk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn07XHJcblxyXG5DbGFzcy5jbG9uZSA9IGZ1bmN0aW9uIChTdWJqZWN0LCBidWlsZEFyZ3MpIHtcclxuICAgIHZhciBTb3VyY2UgPSB0aGlzO1xyXG4gICAgaWYgKCEoU3ViamVjdCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSlcclxuICAgICAgICBTdWJqZWN0ID0gKFNvdXJjZS5mYWN0b3J5IHx8IENsYXNzLmZhY3RvcnkpLmNhbGwoU291cmNlKTtcclxuICAgIFN1YmplY3QucHJvdG90eXBlID0gKFNvdXJjZS5wcm90b3R5cGUuY2xvbmUgfHwgQ2xhc3MucHJvdG90eXBlLmNsb25lKS5hcHBseShTb3VyY2UucHJvdG90eXBlLCBidWlsZEFyZ3MgfHwgW10pO1xyXG4gICAgU3ViamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTdWJqZWN0O1xyXG4gICAgZm9yICh2YXIgc3RhdGljUHJvcGVydHkgaW4gU291cmNlKVxyXG4gICAgICAgIGlmIChzdGF0aWNQcm9wZXJ0eSAhPT0gXCJwcm90b3R5cGVcIilcclxuICAgICAgICAgICAgU3ViamVjdFtzdGF0aWNQcm9wZXJ0eV0gPSBTb3VyY2Vbc3RhdGljUHJvcGVydHldO1xyXG4gICAgcmV0dXJuIFN1YmplY3Q7XHJcbn07XHJcblxyXG5DbGFzcy5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc3ViamVjdCA9IHRoaXM7XHJcbiAgICB2YXIgaW5zdGFuY2UgPSBPYmplY3QuY3JlYXRlKHN1YmplY3QpO1xyXG4gICAgaWYgKGluc3RhbmNlLmJ1aWxkIGluc3RhbmNlb2YgRnVuY3Rpb24pXHJcbiAgICAgICAgaW5zdGFuY2UuYnVpbGQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn07XHJcblxyXG5DbGFzcy5tZXJnZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgIHZhciBTdWJqZWN0ID0gdGhpcztcclxuICAgIGZvciAodmFyIHN0YXRpY1Byb3BlcnR5IGluIGNvbmZpZylcclxuICAgICAgICBpZiAoc3RhdGljUHJvcGVydHkgIT09IFwicHJvdG90eXBlXCIpXHJcbiAgICAgICAgICAgIFN1YmplY3Rbc3RhdGljUHJvcGVydHldID0gY29uZmlnW3N0YXRpY1Byb3BlcnR5XTtcclxuICAgIGlmIChjb25maWcucHJvdG90eXBlIGluc3RhbmNlb2YgT2JqZWN0KVxyXG4gICAgICAgIChTdWJqZWN0LnByb3RvdHlwZS5tZXJnZSB8fCBDbGFzcy5wcm90b3R5cGUubWVyZ2UpLmNhbGwoU3ViamVjdC5wcm90b3R5cGUsIGNvbmZpZy5wcm90b3R5cGUpO1xyXG4gICAgcmV0dXJuIFN1YmplY3Q7XHJcbn07XHJcblxyXG5DbGFzcy5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICB2YXIgc3ViamVjdCA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBjb25maWcpXHJcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9PSBcImNvbnN0cnVjdG9yXCIpXHJcbiAgICAgICAgICAgIHN1YmplY3RbcHJvcGVydHldID0gY29uZmlnW3Byb3BlcnR5XTtcclxuICAgIHJldHVybiBzdWJqZWN0O1xyXG59O1xyXG5cclxuQ2xhc3MuYWJzb3JiID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgdmFyIFN1YmplY3QgPSB0aGlzO1xyXG4gICAgZm9yICh2YXIgc3RhdGljUHJvcGVydHkgaW4gY29uZmlnKVxyXG4gICAgICAgIGlmIChzdGF0aWNQcm9wZXJ0eSAhPT0gXCJwcm90b3R5cGVcIiAmJiAoU3ViamVjdFtzdGF0aWNQcm9wZXJ0eV0gPT09IHVuZGVmaW5lZCB8fCBTdWJqZWN0W3N0YXRpY1Byb3BlcnR5XSA9PT0gRnVuY3Rpb24ucHJvdG90eXBlW3N0YXRpY1Byb3BlcnR5XSkpXHJcbiAgICAgICAgICAgIFN1YmplY3Rbc3RhdGljUHJvcGVydHldID0gY29uZmlnW3N0YXRpY1Byb3BlcnR5XTtcclxuICAgIGlmIChjb25maWcucHJvdG90eXBlIGluc3RhbmNlb2YgT2JqZWN0KVxyXG4gICAgICAgIChTdWJqZWN0LnByb3RvdHlwZS5hYnNvcmIgfHwgQ2xhc3MucHJvdG90eXBlLmFic29yYikuY2FsbChTdWJqZWN0LnByb3RvdHlwZSwgY29uZmlnLnByb3RvdHlwZSk7XHJcbiAgICByZXR1cm4gU3ViamVjdDtcclxufTtcclxuXHJcbkNsYXNzLnByb3RvdHlwZS5hYnNvcmIgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICB2YXIgc3ViamVjdCA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBjb25maWcpXHJcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9PSBcImNvbnN0cnVjdG9yXCIgJiYgKHN1YmplY3RbcHJvcGVydHldID09PSB1bmRlZmluZWQgfHwgc3ViamVjdFtwcm9wZXJ0eV0gPT09IE9iamVjdC5wcm90b3R5cGVbcHJvcGVydHldKSlcclxuICAgICAgICAgICAgc3ViamVjdFtwcm9wZXJ0eV0gPSBjb25maWdbcHJvcGVydHldO1xyXG4gICAgcmV0dXJuIHN1YmplY3Q7XHJcbn07XHJcblxyXG5DbGFzcy5nZXRBbmNlc3RvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBTb3VyY2UgPSB0aGlzO1xyXG4gICAgaWYgKFNvdXJjZSAhPT0gU291cmNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvcilcclxuICAgICAgICByZXR1cm4gU291cmNlLnByb3RvdHlwZS5jb25zdHJ1Y3RvcjtcclxufTtcclxuXHJcbkNsYXNzLm5ld0luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIFN1YmplY3QgPSB0aGlzO1xyXG4gICAgdmFyIGluc3RhbmNlID0gT2JqZWN0LmNyZWF0ZSh0aGlzLnByb3RvdHlwZSk7XHJcbiAgICBTdWJqZWN0LmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpO1xyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDbGFzczsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBDbGFzczogcmVxdWlyZShcIi4vQ2xhc3NcIiksXHJcbiAgICBhYnN0cmFjdE1ldGhvZDogcmVxdWlyZShcIi4vYWJzdHJhY3RNZXRob2RcIilcclxufTsiLCIndXNlIHN0cmljdCdcbi8qIGVzbGludCBuby1wcm90bzogMCAqL1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgPyBzZXRQcm90b09mIDogbWl4aW5Qcm9wZXJ0aWVzKVxuXG5mdW5jdGlvbiBzZXRQcm90b09mIChvYmosIHByb3RvKSB7XG4gIG9iai5fX3Byb3RvX18gPSBwcm90b1xuICByZXR1cm4gb2JqXG59XG5cbmZ1bmN0aW9uIG1peGluUHJvcGVydGllcyAob2JqLCBwcm90bykge1xuICBmb3IgKHZhciBwcm9wIGluIHByb3RvKSB7XG4gICAgaWYgKCFvYmouaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgIG9ialtwcm9wXSA9IHByb3RvW3Byb3BdXG4gICAgfVxuICB9XG4gIHJldHVybiBvYmpcbn1cbiIsIi8qIVxuICogc3RhdHVzZXNcbiAqIENvcHlyaWdodChjKSAyMDE0IEpvbmF0aGFuIE9uZ1xuICogQ29weXJpZ2h0KGMpIDIwMTYgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBjb2RlcyA9IHJlcXVpcmUoJy4vY29kZXMuanNvbicpXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBzdGF0dXNcblxuLy8gc3RhdHVzIGNvZGUgdG8gbWVzc2FnZSBtYXBcbnN0YXR1cy5TVEFUVVNfQ09ERVMgPSBjb2Rlc1xuXG4vLyBhcnJheSBvZiBzdGF0dXMgY29kZXNcbnN0YXR1cy5jb2RlcyA9IHBvcHVsYXRlU3RhdHVzZXNNYXAoc3RhdHVzLCBjb2RlcylcblxuLy8gc3RhdHVzIGNvZGVzIGZvciByZWRpcmVjdHNcbnN0YXR1cy5yZWRpcmVjdCA9IHtcbiAgMzAwOiB0cnVlLFxuICAzMDE6IHRydWUsXG4gIDMwMjogdHJ1ZSxcbiAgMzAzOiB0cnVlLFxuICAzMDU6IHRydWUsXG4gIDMwNzogdHJ1ZSxcbiAgMzA4OiB0cnVlXG59XG5cbi8vIHN0YXR1cyBjb2RlcyBmb3IgZW1wdHkgYm9kaWVzXG5zdGF0dXMuZW1wdHkgPSB7XG4gIDIwNDogdHJ1ZSxcbiAgMjA1OiB0cnVlLFxuICAzMDQ6IHRydWVcbn1cblxuLy8gc3RhdHVzIGNvZGVzIGZvciB3aGVuIHlvdSBzaG91bGQgcmV0cnkgdGhlIHJlcXVlc3RcbnN0YXR1cy5yZXRyeSA9IHtcbiAgNTAyOiB0cnVlLFxuICA1MDM6IHRydWUsXG4gIDUwNDogdHJ1ZVxufVxuXG4vKipcbiAqIFBvcHVsYXRlIHRoZSBzdGF0dXNlcyBtYXAgZm9yIGdpdmVuIGNvZGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwb3B1bGF0ZVN0YXR1c2VzTWFwIChzdGF0dXNlcywgY29kZXMpIHtcbiAgdmFyIGFyciA9IFtdXG5cbiAgT2JqZWN0LmtleXMoY29kZXMpLmZvckVhY2goZnVuY3Rpb24gZm9yRWFjaENvZGUgKGNvZGUpIHtcbiAgICB2YXIgbWVzc2FnZSA9IGNvZGVzW2NvZGVdXG4gICAgdmFyIHN0YXR1cyA9IE51bWJlcihjb2RlKVxuXG4gICAgLy8gUG9wdWxhdGUgcHJvcGVydGllc1xuICAgIHN0YXR1c2VzW3N0YXR1c10gPSBtZXNzYWdlXG4gICAgc3RhdHVzZXNbbWVzc2FnZV0gPSBzdGF0dXNcbiAgICBzdGF0dXNlc1ttZXNzYWdlLnRvTG93ZXJDYXNlKCldID0gc3RhdHVzXG5cbiAgICAvLyBBZGQgdG8gYXJyYXlcbiAgICBhcnIucHVzaChzdGF0dXMpXG4gIH0pXG5cbiAgcmV0dXJuIGFyclxufVxuXG4vKipcbiAqIEdldCB0aGUgc3RhdHVzIGNvZGUuXG4gKlxuICogR2l2ZW4gYSBudW1iZXIsIHRoaXMgd2lsbCB0aHJvdyBpZiBpdCBpcyBub3QgYSBrbm93biBzdGF0dXNcbiAqIGNvZGUsIG90aGVyd2lzZSB0aGUgY29kZSB3aWxsIGJlIHJldHVybmVkLiBHaXZlbiBhIHN0cmluZyxcbiAqIHRoZSBzdHJpbmcgd2lsbCBiZSBwYXJzZWQgZm9yIGEgbnVtYmVyIGFuZCByZXR1cm4gdGhlIGNvZGVcbiAqIGlmIHZhbGlkLCBvdGhlcndpc2Ugd2lsbCBsb29rdXAgdGhlIGNvZGUgYXNzdW1pbmcgdGhpcyBpc1xuICogdGhlIHN0YXR1cyBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gY29kZVxuICogQHJldHVybnMge251bWJlcn1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzdGF0dXMgKGNvZGUpIHtcbiAgaWYgKHR5cGVvZiBjb2RlID09PSAnbnVtYmVyJykge1xuICAgIGlmICghc3RhdHVzW2NvZGVdKSB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgc3RhdHVzIGNvZGU6ICcgKyBjb2RlKVxuICAgIHJldHVybiBjb2RlXG4gIH1cblxuICBpZiAodHlwZW9mIGNvZGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY29kZSBtdXN0IGJlIGEgbnVtYmVyIG9yIHN0cmluZycpXG4gIH1cblxuICAvLyAnNDAzJ1xuICB2YXIgbiA9IHBhcnNlSW50KGNvZGUsIDEwKVxuICBpZiAoIWlzTmFOKG4pKSB7XG4gICAgaWYgKCFzdGF0dXNbbl0pIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBzdGF0dXMgY29kZTogJyArIG4pXG4gICAgcmV0dXJuIG5cbiAgfVxuXG4gIG4gPSBzdGF0dXNbY29kZS50b0xvd2VyQ2FzZSgpXVxuICBpZiAoIW4pIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBzdGF0dXMgbWVzc2FnZTogXCInICsgY29kZSArICdcIicpXG4gIHJldHVybiBuXG59XG4iLCIvKiFcbiAqIHRvaWRlbnRpZmllclxuICogQ29weXJpZ2h0KGMpIDIwMTYgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB0b0lkZW50aWZpZXJcblxuLyoqXG4gKiBUcmFzZm9ybSB0aGUgZ2l2ZW4gc3RyaW5nIGludG8gYSBKYXZhU2NyaXB0IGlkZW50aWZpZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHRvSWRlbnRpZmllciAoc3RyKSB7XG4gIHJldHVybiBzdHJcbiAgICAuc3BsaXQoJyAnKVxuICAgIC5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICByZXR1cm4gdG9rZW4uc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHRva2VuLnNsaWNlKDEpXG4gICAgfSlcbiAgICAuam9pbignJylcbiAgICAucmVwbGFjZSgvW14gXzAtOWEtel0vZ2ksICcnKVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9saWJcIik7IiwidmFyIGNhY2hlID0gZnVuY3Rpb24gKGZuKSB7XHJcbiAgICB2YXIgY2FsbGVkID0gZmFsc2UsXHJcbiAgICAgICAgc3RvcmU7XHJcblxyXG4gICAgaWYgKCEoZm4gaW5zdGFuY2VvZiBGdW5jdGlvbikpIHtcclxuICAgICAgICBjYWxsZWQgPSB0cnVlO1xyXG4gICAgICAgIHN0b3JlID0gZm47XHJcbiAgICAgICAgZm4gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCFjYWxsZWQpIHtcclxuICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgc3RvcmUgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICBmbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9yZTtcclxuICAgIH07XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZWFjaENvbWJpbmF0aW9uKGFsdGVybmF0aXZlc0J5RGltZW5zaW9uLCBjYWxsYmFjaywgY29tYmluYXRpb24pIHtcclxuICAgIGlmICghY29tYmluYXRpb24pXHJcbiAgICAgICAgY29tYmluYXRpb24gPSBbXTtcclxuICAgIGlmIChjb21iaW5hdGlvbi5sZW5ndGggPCBhbHRlcm5hdGl2ZXNCeURpbWVuc2lvbi5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgYWx0ZXJuYXRpdmVzID0gYWx0ZXJuYXRpdmVzQnlEaW1lbnNpb25bY29tYmluYXRpb24ubGVuZ3RoXTtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCBpbiBhbHRlcm5hdGl2ZXMpIHtcclxuICAgICAgICAgICAgY29tYmluYXRpb25bY29tYmluYXRpb24ubGVuZ3RoXSA9IGFsdGVybmF0aXZlc1tpbmRleF07XHJcbiAgICAgICAgICAgIGVhY2hDb21iaW5hdGlvbihhbHRlcm5hdGl2ZXNCeURpbWVuc2lvbiwgY2FsbGJhY2ssIGNvbWJpbmF0aW9uKTtcclxuICAgICAgICAgICAgLS1jb21iaW5hdGlvbi5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGNvbWJpbmF0aW9uKTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGNhY2hlOiByZXF1aXJlKFwiLi9jYWNoZVwiKSxcclxuICAgIGVhY2hDb21iaW5hdGlvbjogcmVxdWlyZShcIi4vZWFjaENvbWJpbmF0aW9uXCIpXHJcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcImRlZWRmMjc2NDZiNjdkNGNjYjZmXCI7IH0iXSwibmFtZXMiOlsiUmVhY3QiLCJJbnRsUHJvdmlkZXIiLCJSb3V0ZSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJTd2l0Y2giLCJGb290ZXIiLCJXYWxsZXRDb25uZWN0aW5nTW9kYWwiLCJXYWxsZXRVcGRhdGVNb2RhbCIsIkhlYWRlciIsIm1lc3NhZ2VzIiwiQWNjb3VudCIsIkJ1aWxkZXIiLCJDcmVhdGVUb2tlbiIsIkN1c3RvbVRva2VuIiwiUGFpcnMiLCJQYWlyIiwiQWRkTGlxdWlkaXR5UG9vbCIsIlN3YXAiLCJFVkVSc3dhcCIsIlRva2VucyIsIlRva2VuIiwiUG9vbHMiLCJQb29sIiwiQnVybkxpcXVpZGl0eSIsIm5vb3AiLCJhcHBSb3V0ZXMiLCJIb21lIiwiQ3JlYXRlRXZlbnRzIiwiRG9uYXRpb24iLCJBdWN0aW9uIiwiUHN5b3B0aW9uIiwiUHN5b3B0aW9uTWludCIsInNlcnZpY2VXb3JrZXIiLCJBcHAiLCJwb29sTGlzdCIsInBhdGgiLCJwb29sUmVtb3ZlTGlxdWlkaXR5IiwicG9vbEl0ZW0iLCJwb29sQ3JlYXRlIiwidG9rZW5MaXN0IiwidG9rZW5JdGVtIiwicGFpckxpc3QiLCJwYWlySXRlbSIsImJ1aWxkZXIiLCJidWlsZGVyQ3JlYXRlIiwiYnVpbGRlckl0ZW0iLCJ1bnJlZ2lzdGVyIiwibmVhckFQSSIsImdldENvbmZpZyIsIndpbmRvdyIsIm5lYXJDb25maWciLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjb25zb2xlIiwibG9nIiwiaW5pdENvbnRyYWN0IiwiY29ubmVjdCIsImRlcHMiLCJrZXlTdG9yZSIsImtleVN0b3JlcyIsIkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSIsIm5lYXIiLCJ3YWxsZXRBY2NvdW50IiwiV2FsbGV0QWNjb3VudCIsImFjY291bnRJZCIsImdldEFjY291bnRJZCIsImxvYWRDb250cmFjdCIsImNvbnRyYWN0TmFtZSIsInZpZXdNZXRob2RzIiwiY2hhbmdlTWV0aG9kcyIsInNlbmRlciIsImNvbnRyYWN0IiwiZG9Xb3JrIiwiaXNTaWduZWRJbiIsInNpZ25lZE91dEZsb3ciLCJzaWduZWRJbkZsb3ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJzdHlsZSIsImRpc3BsYXkiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXF1ZXN0U2lnbkluIiwiaW5uZXJUZXh0Iiwic2F5SGkiLCJ0aGVuIiwidXBkYXRlV2hvU2FpZEhpIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2lnbk91dCIsImxvY2F0aW9uIiwicmVwbGFjZSIsIm9yaWdpbiIsInBhdGhuYW1lIiwic2V0VGltZW91dCIsIndob1NhaWRIaSIsIndobyIsImhyZWYiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiaW5uZXJIVE1MIiwibmVhckluaXRQcm9taXNlIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=