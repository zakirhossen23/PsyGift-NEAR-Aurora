"use strict";
self["webpackHotUpdatepsygift"]("/index",{

/***/ "./src/components/App.tsx":
/*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _near_contracts_contract__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @/near-contracts/contract */ "./src/near-contracts/contract.js");

































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

/***/ "./src/near-contracts/contract.js":
/*!****************************************!*\
  !*** ./src/near-contracts/contract.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "3a72991fe12b126d521a"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LmRlZWRmMjc2NDZiNjdkNGNjYjZmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTa0MsR0FBVCxHQUE0QjtBQUMvQixzQkFDSSxpREFBQyxtREFBRDtBQUNJLE9BQUcsRUFBQyxNQURSO0FBRUksVUFBTSxFQUFDLElBRlg7QUFHSSxpQkFBYSxFQUFDLElBSGxCO0FBSUksWUFBUSxFQUFFeEIsZ0RBSmQ7QUFLSSxXQUFPLEVBQUVlLHlDQUFJQTtBQUxqQixrQkFPSSxpREFBQyw0REFBRCxxQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUVJLGlEQUFDLDZEQUFEO0FBQVEsT0FBRyxFQUFDO0FBQVosSUFGSixlQUdJO0FBQU0sYUFBUyxFQUFDO0FBQWhCLGtCQUNJLGlEQUFDLHFEQUFELHFCQUNJLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNJLGlEQUFDLG9EQUFELE9BREosQ0FESixlQUlJLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNJLGlEQUFDLDREQUFELE9BREosQ0FKSixlQU9JLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNJLGlEQUFDLHdEQUFELE9BREosQ0FQSixlQVVJLGlEQUFDLG9EQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDO0FBQWxCLGtCQUNJLGlEQUFDLGdFQUFELE9BREos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QWhCLENBQXdCN0MsTUFBTSxDQUFDNEMsUUFBUCxDQUFnQkUsTUFBaEIsR0FBeUI5QyxNQUFNLENBQUM0QyxRQUFQLENBQWdCRyxRQUFqRTtBQUNELEdBTEQsRUFkc0IsQ0FxQnRCO0FBQ0E7O0FBQ0FDLEVBQUFBLFVBQVUsQ0FBQ1IsZUFBRCxFQUFrQixJQUFsQixDQUFWO0FBQ0QsRUFFRDs7O0FBQ0EsU0FBU0EsZUFBVCxHQUEyQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBakIsRUFBQUEsUUFBUSxDQUFDMEIsU0FBVCxHQUFxQlYsSUFBckIsQ0FBMEIsVUFBQ1csR0FBRCxFQUFTO0FBQ2pDLFFBQU1uQixFQUFFLEdBQUdILFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixLQUF4QixDQUFYO0FBQ0FILElBQUFBLEVBQUUsQ0FBQ00sU0FBSCxHQUFlYSxHQUFHLElBQUksUUFBdEIsQ0FGaUMsQ0FJakM7O0FBQ0EsUUFBSUEsR0FBSixFQUFTO0FBQ1BuQixNQUFBQSxFQUFFLENBQUNvQixJQUFILEdBQVUsZ0RBQWdERCxHQUExRDtBQUNELEtBUGdDLENBU2pDOzs7QUFDQSxRQUFNRSxNQUFNLEdBQUdyQixFQUFFLENBQUNzQixVQUFsQjtBQUNBRCxJQUFBQSxNQUFNLENBQUNFLFNBQVAsR0FBbUJGLE1BQU0sQ0FBQ0UsU0FBUCxDQUFpQlQsT0FBakIsQ0FBeUIsR0FBekIsRUFBOEIsR0FBOUIsQ0FBbkI7QUFDRCxHQVpEO0FBYUQsRUFFRDs7O0FBQ0E3QyxNQUFNLENBQUN1RCxlQUFQLEdBQXlCaEQsWUFBWSxHQUNsQ2dDLElBRHNCLENBQ2pCZixNQURpQixFQUV0QmdDLEtBRnNCLENBRWhCbkQsT0FBTyxDQUFDb0QsS0FGUSxDQUF6Qjs7Ozs7Ozs7VUMzR0EscUNBQXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL3NyYy9jb21wb25lbnRzL0FwcC50c3giLCJ3ZWJwYWNrOi8vcHN5Z2lmdC8uL3NyYy9uZWFyLWNvbnRyYWN0cy9jb250cmFjdC5qcyIsIndlYnBhY2s6Ly9wc3lnaWZ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEludGxQcm92aWRlciB9IGZyb20gJ3JlYWN0LWludGwnXG5pbXBvcnQge1xuICAgIFJlZGlyZWN0LFxuICAgIFJvdXRlLFxuICAgIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxuICAgIFN3aXRjaCxcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL2xheW91dC9Gb290ZXInXG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0aW5nTW9kYWwgfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbW9uL1dhbGxldENvbm5lY3RpbmdNb2RhbCdcbmltcG9ydCB7IFdhbGxldFVwZGF0ZU1vZGFsIH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW1vbi9XYWxsZXRVcGRhdGVNb2RhbCdcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyJ1xuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJ0AvbGFuZy9lbidcbmltcG9ydCB7IEFjY291bnQgfSBmcm9tICdAL21vZHVsZXMvQWNjb3VudCdcbmltcG9ydCBCdWlsZGVyIGZyb20gJ0AvcGFnZXMvYnVpbGRlcidcbmltcG9ydCBDcmVhdGVUb2tlbiBmcm9tICdAL3BhZ2VzL2J1aWxkZXIvY3JlYXRlJ1xuaW1wb3J0IEN1c3RvbVRva2VuIGZyb20gJ0AvcGFnZXMvYnVpbGRlci90b2tlbidcbmltcG9ydCBQYWlycyBmcm9tICdAL3BhZ2VzL3BhaXJzJ1xuaW1wb3J0IFBhaXIgZnJvbSAnQC9wYWdlcy9wYWlycy9pdGVtJ1xuaW1wb3J0IEFkZExpcXVpZGl0eVBvb2wgZnJvbSAnQC9wYWdlcy9wb29sJ1xuaW1wb3J0IFN3YXAgZnJvbSAnQC9wYWdlcy9Td2FwUGFnZSdcbmltcG9ydCBFVkVSc3dhcCBmcm9tICdAL21vZHVsZXMvRVZFUnN3YXAnXG5pbXBvcnQgVG9rZW5zIGZyb20gJ0AvcGFnZXMvdG9rZW5zJ1xuaW1wb3J0IFRva2VuIGZyb20gJ0AvcGFnZXMvdG9rZW5zL2l0ZW0nXG5pbXBvcnQgUG9vbHMgZnJvbSAnQC9wYWdlcy9wb29scydcbmltcG9ydCBQb29sIGZyb20gJ0AvcGFnZXMvcG9vbHMvaXRlbSdcbmltcG9ydCBCdXJuTGlxdWlkaXR5IGZyb20gJ0AvcGFnZXMvcG9vbHMvYnVybi1saXF1aWRpdHknXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7IGFwcFJvdXRlcyB9IGZyb20gJ0Avcm91dGVzJ1xuaW1wb3J0IEhvbWUgZnJvbSAnQC9wYWdlcy9Ib21lJ1xuaW1wb3J0IENyZWF0ZUV2ZW50cyBmcm9tICdAL3BhZ2VzL0NyZWF0ZUV2ZW50cydcbmltcG9ydCBEb25hdGlvbiBmcm9tICdAL3BhZ2VzL2RvbmF0aW9uJ1xuaW1wb3J0IEF1Y3Rpb24gZnJvbSAnQC9wYWdlcy9kb25hdGlvbi9hdWN0aW9uJ1xuaW1wb3J0IFBzeW9wdGlvbiBmcm9tICdAL3BzeW9wdGlvbi9wYWdlcy9pbml0aWFsaXplLW1hcmtldC9pbml0J1xuaW1wb3J0IFBzeW9wdGlvbk1pbnQgZnJvbSAnQC9wc3lvcHRpb24vcGFnZXMvbWludC9taW50J1xuaW1wb3J0ICcuL0FwcC5zY3NzJ1xuaW1wb3J0ICogYXMgc2VydmljZVdvcmtlciBmcm9tIFwiLi9zZXJ2aWNlV29ya2VyXCI7XG5pbXBvcnQgJ0AvbmVhci1jb250cmFjdHMvY29udHJhY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gQXBwKCk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8SW50bFByb3ZpZGVyXG4gICAgICAgICAgICBrZXk9XCJpbnRsXCJcbiAgICAgICAgICAgIGxvY2FsZT1cImVuXCJcbiAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU9XCJlblwiXG4gICAgICAgICAgICBtZXNzYWdlcz17bWVzc2FnZXN9XG4gICAgICAgICAgICBvbkVycm9yPXtub29wfVxuICAgICAgICA+XG4gICAgICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIga2V5PVwiaGVhZGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhvbWUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL0NyZWF0ZUV2ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlRXZlbnRzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9kb25hdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG9uYXRpb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPScvZG9uYXRpb24vYXVjdGlvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdWN0aW9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3N3YXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN3YXAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL3BzeW9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHN5b3B0aW9uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9wc3lvcHRpb24tbWludFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHN5b3B0aW9uTWludCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9FVkVSc3dhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RVZFUnN3YXAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXthcHBSb3V0ZXMucG9vbExpc3QucGF0aH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb29scyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2FwcFJvdXRlcy5wb29sUmVtb3ZlTGlxdWlkaXR5LnBhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnVybkxpcXVpZGl0eSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2FwcFJvdXRlcy5wb29sSXRlbS5wYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvb2wgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXthcHBSb3V0ZXMucG9vbENyZWF0ZS5wYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZExpcXVpZGl0eVBvb2wgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2FwcFJvdXRlcy50b2tlbkxpc3QucGF0aH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb2tlbnMgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPXthcHBSb3V0ZXMudG9rZW5JdGVtLnBhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9rZW4gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2FwcFJvdXRlcy5wYWlyTGlzdC5wYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhaXJzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YXBwUm91dGVzLnBhaXJJdGVtLnBhdGh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFpciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD17YXBwUm91dGVzLmJ1aWxkZXIucGF0aH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdWlsZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD17YXBwUm91dGVzLmJ1aWxkZXJDcmVhdGUucGF0aH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVUb2tlbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2FwcFJvdXRlcy5idWlsZGVySXRlbS5wYXRofT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbVRva2VuIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgICAgICAgICAgPEZvb3RlciBrZXk9XCJmb290ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbGV0c1wiPlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3VudCBrZXk9XCJhY2NvdW50XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFdhbGxldENvbm5lY3RpbmdNb2RhbCAvPlxuICAgICAgICAgICAgICAgICAgICA8V2FsbGV0VXBkYXRlTW9kYWwgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICA8L0ludGxQcm92aWRlcj5cbiAgICApXG5cblxuICAgIHNlcnZpY2VXb3JrZXIudW5yZWdpc3RlcigpO1xuXG59XG4iLCJpbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcclxuXHJcbmltcG9ydCAqIGFzIG5lYXJBUEkgZnJvbSBcIm5lYXItYXBpLWpzXCJcclxuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwiQC9jb25maWdcIlxyXG5cclxud2luZG93Lm5lYXJDb25maWcgPSBnZXRDb25maWcocHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgXCJkZXZlbG9wbWVudFwiKTtcclxuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xyXG4vLyBJbml0aWFsaXppbmcgY29udHJhY3RcclxuYXN5bmMgZnVuY3Rpb24gaW5pdENvbnRyYWN0KCkge1xyXG4gIC8vIEluaXRpYWxpemluZyBjb25uZWN0aW9uIHRvIHRoZSBORUFSIG5vZGUuXHJcbiAgd2luZG93Lm5lYXIgPSBhd2FpdCBuZWFyQVBJLmNvbm5lY3QoT2JqZWN0LmFzc2lnbih7IGRlcHM6IHsga2V5U3RvcmU6IG5ldyBuZWFyQVBJLmtleVN0b3Jlcy5Ccm93c2VyTG9jYWxTdG9yYWdlS2V5U3RvcmUoKSB9IH0sIG5lYXJDb25maWcpKTtcclxuXHJcbiAgLy8gSW5pdGlhbGl6aW5nIFdhbGxldCBiYXNlZCBBY2NvdW50LiBJdCBjYW4gd29yayB3aXRoIE5FQVIgVGVzdE5ldCB3YWxsZXQgdGhhdFxyXG4gIC8vIGlzIGhvc3RlZCBhdCBodHRwczovL3dhbGxldC50ZXN0bmV0Lm5lYXIub3JnXHJcbiAgd2luZG93LndhbGxldEFjY291bnQgPSBuZXcgbmVhckFQSS5XYWxsZXRBY2NvdW50KHdpbmRvdy5uZWFyKTtcclxuXHJcbiAgLy8gR2V0dGluZyB0aGUgQWNjb3VudCBJRC4gSWYgdW5hdXRob3JpemVkIHlldCwgaXQncyBqdXN0IGVtcHR5IHN0cmluZy5cclxuICB3aW5kb3cuYWNjb3VudElkID0gd2luZG93LndhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCk7XHJcblxyXG4gIC8vIEluaXRpYWxpemluZyBvdXIgY29udHJhY3QgQVBJcyBieSBjb250cmFjdCBuYW1lIGFuZCBjb25maWd1cmF0aW9uLlxyXG4gIHdpbmRvdy5jb250cmFjdCA9IGF3YWl0IHdpbmRvdy5uZWFyLmxvYWRDb250cmFjdChuZWFyQ29uZmlnLmNvbnRyYWN0TmFtZSwge1xyXG4gICAgLy8gTk9URTogVGhpcyBjb25maWd1cmF0aW9uIG9ubHkgbmVlZGVkIHdoaWxlIE5FQVIgaXMgc3RpbGwgaW4gZGV2ZWxvcG1lbnRcclxuICAgIC8vIFZpZXcgbWV0aG9kcyBhcmUgcmVhZCBvbmx5LiBUaGV5IGRvbid0IG1vZGlmeSB0aGUgc3RhdGUsIGJ1dCB1c3VhbGx5IHJldHVybiBzb21lIHZhbHVlLlxyXG4gICAgdmlld01ldGhvZHM6IFsnd2hvU2FpZEhpJ10sXHJcbiAgICAvLyBDaGFuZ2UgbWV0aG9kcyBjYW4gbW9kaWZ5IHRoZSBzdGF0ZS4gQnV0IHlvdSBkb24ndCByZWNlaXZlIHRoZSByZXR1cm5lZCB2YWx1ZSB3aGVuIGNhbGxlZC5cclxuICAgIGNoYW5nZU1ldGhvZHM6IFsnc2F5SGknXSxcclxuICAgIC8vIFNlbmRlciBpcyB0aGUgYWNjb3VudCBJRCB0byBpbml0aWFsaXplIHRyYW5zYWN0aW9ucy5cclxuICAgIHNlbmRlcjogd2luZG93LmFjY291bnRJZCxcclxuICB9KTtcclxufVxyXG5cclxuLy8gLy8gVXNpbmcgaW5pdGlhbGl6ZWQgY29udHJhY3RcclxuYXN5bmMgZnVuY3Rpb24gZG9Xb3JrKCkge1xyXG4gIC8vIEJhc2VkIG9uIHdoZXRoZXIgeW91J3ZlIGF1dGhvcml6ZWQsIGNoZWNraW5nIHdoaWNoIGZsb3cgd2Ugc2hvdWxkIGdvLlxyXG4gIGlmICghd2luZG93LndhbGxldEFjY291bnQuaXNTaWduZWRJbigpKSB7XHJcbiAgICBzaWduZWRPdXRGbG93KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNpZ25lZEluRmxvdygpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdGhhdCBpbml0aWFsaXplcyB0aGUgc2lnbkluIGJ1dHRvbiB1c2luZyBXYWxsZXRBY2NvdW50XHJcbmZ1bmN0aW9uIHNpZ25lZE91dEZsb3coKSB7XHJcbiAgLy8gRGlzcGxheWluZyB0aGUgc2lnbmVkIG91dCBmbG93IGNvbnRhaW5lci5cclxuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWduZWQtb3V0JykpLmZvckVhY2goZWwgPT4gZWwuc3R5bGUuZGlzcGxheSA9ICcnKTtcclxuICAvLyBBZGRpbmcgYW4gZXZlbnQgdG8gYSBzaW5nLWluIGJ1dHRvbi5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbi1pbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgd2luZG93LndhbGxldEFjY291bnQucmVxdWVzdFNpZ25JbihcclxuICAgICAgLy8gVGhlIGNvbnRyYWN0IG5hbWUgdGhhdCB3b3VsZCBiZSBhdXRob3JpemVkIHRvIGJlIGNhbGxlZCBieSB0aGUgdXNlcidzIGFjY291bnQuXHJcbiAgICAgIHdpbmRvdy5uZWFyQ29uZmlnLmNvbnRyYWN0TmFtZSxcclxuICAgICAgLy8gVGhpcyBpcyB0aGUgYXBwIG5hbWUuIEl0IGNhbiBiZSBhbnl0aGluZy5cclxuICAgICAgJ1BzeUdpZnQnLFxyXG4gICAgICAvLyBXZSBjYW4gYWxzbyBwcm92aWRlIFVSTHMgdG8gcmVkaXJlY3Qgb24gc3VjY2VzcyBhbmQgZmFpbHVyZS5cclxuICAgICAgLy8gVGhlIGN1cnJlbnQgVVJMIGlzIHVzZWQgYnkgZGVmYXVsdC5cclxuICAgICk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIE1haW4gZnVuY3Rpb24gZm9yIHRoZSBzaWduZWQtaW4gZmxvdyAoYWxyZWFkeSBhdXRob3JpemVkIGJ5IHRoZSB3YWxsZXQpLlxyXG5mdW5jdGlvbiBzaWduZWRJbkZsb3coKSB7XHJcbiAgLy8gRGlzcGxheWluZyB0aGUgc2lnbmVkIGluIGZsb3cgY29udGFpbmVyLlxyXG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZ25lZC1pbicpKS5mb3JFYWNoKGVsID0+IGVsLnN0eWxlLmRpc3BsYXkgPSAnJyk7XHJcblxyXG4gIC8vIERpc3BsYXlpbmcgY3VycmVudCBhY2NvdW50IG5hbWUuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY291bnQtaWQnKS5pbm5lclRleHQgPSB3aW5kb3cuYWNjb3VudElkO1xyXG5cclxuICAvLyBBZGRpbmcgYW4gZXZlbnQgdG8gYSBzYXktaGkgYnV0dG9uLlxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXktaGknKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vIFdlIGNhbGwgc2F5IEhpIGFuZCB0aGVuIHVwZGF0ZSB3aG8gc2FpZCBIaSBsYXN0LlxyXG4gICAgd2luZG93LmNvbnRyYWN0LnNheUhpKCkudGhlbih1cGRhdGVXaG9TYWlkSGkpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBBZGRpbmcgYW4gZXZlbnQgdG8gYSBzaW5nLW91dCBidXR0b24uXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24tb3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHdhbGxldEFjY291bnQuc2lnbk91dCgpO1xyXG4gICAgLy8gRm9yY2luZyByZWRpcmVjdC5cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBmZXRjaCB3aG8gbGFzdCBzYWlkIGhpIHdpdGhvdXQgcmVxdWlyaW5nIGJ1dHRvbiBjbGlja1xyXG4gIC8vIGJ1dCB3YWl0IGEgc2Vjb25kIHNvIHRoZSBxdWVzdGlvbiBpcyBsZWdpYmxlXHJcbiAgc2V0VGltZW91dCh1cGRhdGVXaG9TYWlkSGksIDEwMDApO1xyXG59XHJcblxyXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgd2hvIHNhaWQgaGlcclxuZnVuY3Rpb24gdXBkYXRlV2hvU2FpZEhpKCkge1xyXG4gIC8vIEphdmFTY3JpcHQgdGlwOlxyXG4gIC8vIFRoaXMgaXMgYW5vdGhlciBleGFtcGxlIG9mIGhvdyB0byB1c2UgcHJvbWlzZXMuIFNpbmNlIHRoaXMgZnVuY3Rpb24gaXMgbm90IGFzeW5jLFxyXG4gIC8vIHdlIGNhbid0IGF3YWl0IGZvciBgY29udHJhY3Qud2hvU2FpZEhpKClgLCBpbnN0ZWFkIHdlIGF0dGFjaGluZyBhIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgLy8gdXNpbiBgLnRoZW4oKWAuXHJcbiAgY29udHJhY3Qud2hvU2FpZEhpKCkudGhlbigod2hvKSA9PiB7XHJcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aG8nKTtcclxuICAgIGVsLmlubmVyVGV4dCA9IHdobyB8fCAnTm8gb25lJztcclxuXHJcbiAgICAvLyBvbmx5IGxpbmsgdG8gcHJvZmlsZSBpZiB0aGVyZSdzIGEgcHJvZmlsZSB0byBsaW5rIHRvXHJcbiAgICBpZiAod2hvKSB7XHJcbiAgICAgIGVsLmhyZWYgPSAnaHR0cHM6Ly9leHBsb3Jlci50ZXN0bmV0Lm5lYXIub3JnL2FjY291bnRzLycgKyB3aG87XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hhbmdlIHRoZSA/IHRvIGEgIVxyXG4gICAgY29uc3QgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcclxuICAgIHBhcmVudC5pbm5lckhUTUwgPSBwYXJlbnQuaW5uZXJIVE1MLnJlcGxhY2UoJz8nLCAnIScpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBMb2FkcyBuZWFyQVBJIGFuZCB0aGlzIGNvbnRyYWN0IGludG8gd2luZG93IHNjb3BlLlxyXG53aW5kb3cubmVhckluaXRQcm9taXNlID0gaW5pdENvbnRyYWN0KClcclxuICAudGhlbihkb1dvcmspXHJcbiAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwiM2E3Mjk5MWZlMTJiMTI2ZDUyMWFcIjsgfSJdLCJuYW1lcyI6WyJSZWFjdCIsIkludGxQcm92aWRlciIsIlJvdXRlIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsIlN3aXRjaCIsIkZvb3RlciIsIldhbGxldENvbm5lY3RpbmdNb2RhbCIsIldhbGxldFVwZGF0ZU1vZGFsIiwiSGVhZGVyIiwibWVzc2FnZXMiLCJBY2NvdW50IiwiQnVpbGRlciIsIkNyZWF0ZVRva2VuIiwiQ3VzdG9tVG9rZW4iLCJQYWlycyIsIlBhaXIiLCJBZGRMaXF1aWRpdHlQb29sIiwiU3dhcCIsIkVWRVJzd2FwIiwiVG9rZW5zIiwiVG9rZW4iLCJQb29scyIsIlBvb2wiLCJCdXJuTGlxdWlkaXR5Iiwibm9vcCIsImFwcFJvdXRlcyIsIkhvbWUiLCJDcmVhdGVFdmVudHMiLCJEb25hdGlvbiIsIkF1Y3Rpb24iLCJQc3lvcHRpb24iLCJQc3lvcHRpb25NaW50Iiwic2VydmljZVdvcmtlciIsIkFwcCIsInBvb2xMaXN0IiwicGF0aCIsInBvb2xSZW1vdmVMaXF1aWRpdHkiLCJwb29sSXRlbSIsInBvb2xDcmVhdGUiLCJ0b2tlbkxpc3QiLCJ0b2tlbkl0ZW0iLCJwYWlyTGlzdCIsInBhaXJJdGVtIiwiYnVpbGRlciIsImJ1aWxkZXJDcmVhdGUiLCJidWlsZGVySXRlbSIsInVucmVnaXN0ZXIiLCJuZWFyQVBJIiwiZ2V0Q29uZmlnIiwid2luZG93IiwibmVhckNvbmZpZyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImNvbnNvbGUiLCJsb2ciLCJpbml0Q29udHJhY3QiLCJjb25uZWN0IiwiZGVwcyIsImtleVN0b3JlIiwia2V5U3RvcmVzIiwiQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlIiwibmVhciIsIndhbGxldEFjY291bnQiLCJXYWxsZXRBY2NvdW50IiwiYWNjb3VudElkIiwiZ2V0QWNjb3VudElkIiwibG9hZENvbnRyYWN0IiwiY29udHJhY3ROYW1lIiwidmlld01ldGhvZHMiLCJjaGFuZ2VNZXRob2RzIiwic2VuZGVyIiwiY29udHJhY3QiLCJkb1dvcmsiLCJpc1NpZ25lZEluIiwic2lnbmVkT3V0RmxvdyIsInNpZ25lZEluRmxvdyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsInN0eWxlIiwiZGlzcGxheSIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RTaWduSW4iLCJpbm5lclRleHQiLCJzYXlIaSIsInRoZW4iLCJ1cGRhdGVXaG9TYWlkSGkiLCJlIiwicHJldmVudERlZmF1bHQiLCJzaWduT3V0IiwibG9jYXRpb24iLCJyZXBsYWNlIiwib3JpZ2luIiwicGF0aG5hbWUiLCJzZXRUaW1lb3V0Iiwid2hvU2FpZEhpIiwid2hvIiwiaHJlZiIsInBhcmVudCIsInBhcmVudE5vZGUiLCJpbm5lckhUTUwiLCJuZWFySW5pdFByb21pc2UiLCJjYXRjaCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==