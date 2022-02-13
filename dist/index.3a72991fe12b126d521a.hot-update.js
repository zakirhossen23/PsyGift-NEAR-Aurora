"use strict";
self["webpackHotUpdatepsygift"]("/index",{

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

            window.accountId = window.walletAccount.getAccountId(); // // Initializing our contract APIs by contract name and configuration.
            // window.contract = await window.near.loadContract(nearConfig.contractName, {
            //   // NOTE: This configuration only needed while NEAR is still in development
            //   // View methods are read only. They don't modify the state, but usually return some value.
            //   viewMethods: ['whoSaidHi'],
            //   // Change methods can modify the state. But you don't receive the returned value when called.
            //   changeMethods: ['sayHi'],
            //   // Sender is the account ID to initialize transactions.
            //   sender: window.accountId,
            // });

          case 5:
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
/******/ 	__webpack_require__.h = function() { return "5f7887266e90a4717875"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2luZGV4LjNhNzI5OTFmZTEyYjEyNmQ1MjFhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUFFLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQkYsOENBQVMsQ0FBQ0csYUFBQSxJQUF3QixDQUF6QixDQUE3QjtBQUNBRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosYUFBWixHQUNBOztTQUNlSzs7RUF1QmY7Ozs7Mk1BdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVzQlQsZ0RBQUEsQ0FBZ0IsMkZBQWM7QUFBRVcsY0FBQUEsSUFBSSxFQUFFO0FBQUVDLGdCQUFBQSxRQUFRLEVBQUUsSUFBSVosOEVBQUo7QUFBWjtBQUFSLGFBQWQsRUFBMkZHLFVBQTNGLENBQWhCLENBRnRCOztBQUFBO0FBRUVELFlBQUFBLE1BQU0sQ0FBQ2EsSUFGVDtBQUlFO0FBQ0E7QUFDQWIsWUFBQUEsTUFBTSxDQUFDYyxhQUFQLEdBQXVCLElBQUloQixzREFBSixDQUEwQkUsTUFBTSxDQUFDYSxJQUFqQyxDQUF2QixDQU5GLENBUUU7O0FBQ0FiLFlBQUFBLE1BQU0sQ0FBQ2dCLFNBQVAsR0FBbUJoQixNQUFNLENBQUNjLGFBQVAsQ0FBcUJHLFlBQXJCLEVBQW5CLENBVEYsQ0FXRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7U0F3QmVDOztFQVNmOzs7O3FNQVRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUNBLGdCQUFJLENBQUNsQixNQUFNLENBQUNjLGFBQVAsQ0FBcUJLLFVBQXJCLEVBQUwsRUFBd0M7QUFDdENDLGNBQUFBLGFBQWE7QUFDZCxhQUZELE1BRU87QUFDTEMsY0FBQUEsWUFBWTtBQUNiOztBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBVUEs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LHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BzeWdpZnQvLi9zcmMvbmVhci1jb250cmFjdHMvY29udHJhY3QuanMiLCJ3ZWJwYWNrOi8vcHN5Z2lmdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBuZWFyQVBJIGZyb20gXCJuZWFyLWFwaS1qc1wiXHJcbmltcG9ydCBnZXRDb25maWcgZnJvbSBcIkAvY29uZmlnXCJcclxuXHJcbndpbmRvdy5uZWFyQ29uZmlnID0gZ2V0Q29uZmlnKHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8IFwiZGV2ZWxvcG1lbnRcIik7XHJcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKTtcclxuLy8gSW5pdGlhbGl6aW5nIGNvbnRyYWN0XHJcbmFzeW5jIGZ1bmN0aW9uIGluaXRDb250cmFjdCgpIHtcclxuICAvLyBJbml0aWFsaXppbmcgY29ubmVjdGlvbiB0byB0aGUgTkVBUiBub2RlLlxyXG4gIHdpbmRvdy5uZWFyID0gYXdhaXQgbmVhckFQSS5jb25uZWN0KE9iamVjdC5hc3NpZ24oeyBkZXBzOiB7IGtleVN0b3JlOiBuZXcgbmVhckFQSS5rZXlTdG9yZXMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlKCkgfSB9LCBuZWFyQ29uZmlnKSk7XHJcblxyXG4gIC8vIEluaXRpYWxpemluZyBXYWxsZXQgYmFzZWQgQWNjb3VudC4gSXQgY2FuIHdvcmsgd2l0aCBORUFSIFRlc3ROZXQgd2FsbGV0IHRoYXRcclxuICAvLyBpcyBob3N0ZWQgYXQgaHR0cHM6Ly93YWxsZXQudGVzdG5ldC5uZWFyLm9yZ1xyXG4gIHdpbmRvdy53YWxsZXRBY2NvdW50ID0gbmV3IG5lYXJBUEkuV2FsbGV0QWNjb3VudCh3aW5kb3cubmVhcik7XHJcblxyXG4gIC8vIEdldHRpbmcgdGhlIEFjY291bnQgSUQuIElmIHVuYXV0aG9yaXplZCB5ZXQsIGl0J3MganVzdCBlbXB0eSBzdHJpbmcuXHJcbiAgd2luZG93LmFjY291bnRJZCA9IHdpbmRvdy53YWxsZXRBY2NvdW50LmdldEFjY291bnRJZCgpO1xyXG5cclxuICAvLyAvLyBJbml0aWFsaXppbmcgb3VyIGNvbnRyYWN0IEFQSXMgYnkgY29udHJhY3QgbmFtZSBhbmQgY29uZmlndXJhdGlvbi5cclxuICAvLyB3aW5kb3cuY29udHJhY3QgPSBhd2FpdCB3aW5kb3cubmVhci5sb2FkQ29udHJhY3QobmVhckNvbmZpZy5jb250cmFjdE5hbWUsIHtcclxuICAvLyAgIC8vIE5PVEU6IFRoaXMgY29uZmlndXJhdGlvbiBvbmx5IG5lZWRlZCB3aGlsZSBORUFSIGlzIHN0aWxsIGluIGRldmVsb3BtZW50XHJcbiAgLy8gICAvLyBWaWV3IG1ldGhvZHMgYXJlIHJlYWQgb25seS4gVGhleSBkb24ndCBtb2RpZnkgdGhlIHN0YXRlLCBidXQgdXN1YWxseSByZXR1cm4gc29tZSB2YWx1ZS5cclxuICAvLyAgIHZpZXdNZXRob2RzOiBbJ3dob1NhaWRIaSddLFxyXG4gIC8vICAgLy8gQ2hhbmdlIG1ldGhvZHMgY2FuIG1vZGlmeSB0aGUgc3RhdGUuIEJ1dCB5b3UgZG9uJ3QgcmVjZWl2ZSB0aGUgcmV0dXJuZWQgdmFsdWUgd2hlbiBjYWxsZWQuXHJcbiAgLy8gICBjaGFuZ2VNZXRob2RzOiBbJ3NheUhpJ10sXHJcbiAgLy8gICAvLyBTZW5kZXIgaXMgdGhlIGFjY291bnQgSUQgdG8gaW5pdGlhbGl6ZSB0cmFuc2FjdGlvbnMuXHJcbiAgLy8gICBzZW5kZXI6IHdpbmRvdy5hY2NvdW50SWQsXHJcbiAgLy8gfSk7XHJcbn1cclxuXHJcbi8vIC8vIFVzaW5nIGluaXRpYWxpemVkIGNvbnRyYWN0XHJcbmFzeW5jIGZ1bmN0aW9uIGRvV29yaygpIHtcclxuICAvLyBCYXNlZCBvbiB3aGV0aGVyIHlvdSd2ZSBhdXRob3JpemVkLCBjaGVja2luZyB3aGljaCBmbG93IHdlIHNob3VsZCBnby5cclxuICBpZiAoIXdpbmRvdy53YWxsZXRBY2NvdW50LmlzU2lnbmVkSW4oKSkge1xyXG4gICAgc2lnbmVkT3V0RmxvdygpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzaWduZWRJbkZsb3coKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZ1bmN0aW9uIHRoYXQgaW5pdGlhbGl6ZXMgdGhlIHNpZ25JbiBidXR0b24gdXNpbmcgV2FsbGV0QWNjb3VudFxyXG5mdW5jdGlvbiBzaWduZWRPdXRGbG93KCkge1xyXG4gIC8vIERpc3BsYXlpbmcgdGhlIHNpZ25lZCBvdXQgZmxvdyBjb250YWluZXIuXHJcbiAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lnbmVkLW91dCcpKS5mb3JFYWNoKGVsID0+IGVsLnN0eWxlLmRpc3BsYXkgPSAnJyk7XHJcbiAgLy8gQWRkaW5nIGFuIGV2ZW50IHRvIGEgc2luZy1pbiBidXR0b24uXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ24taW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHdpbmRvdy53YWxsZXRBY2NvdW50LnJlcXVlc3RTaWduSW4oXHJcbiAgICAgIC8vIFRoZSBjb250cmFjdCBuYW1lIHRoYXQgd291bGQgYmUgYXV0aG9yaXplZCB0byBiZSBjYWxsZWQgYnkgdGhlIHVzZXIncyBhY2NvdW50LlxyXG4gICAgICB3aW5kb3cubmVhckNvbmZpZy5jb250cmFjdE5hbWUsXHJcbiAgICAgIC8vIFRoaXMgaXMgdGhlIGFwcCBuYW1lLiBJdCBjYW4gYmUgYW55dGhpbmcuXHJcbiAgICAgICdQc3lHaWZ0JyxcclxuICAgICAgLy8gV2UgY2FuIGFsc28gcHJvdmlkZSBVUkxzIHRvIHJlZGlyZWN0IG9uIHN1Y2Nlc3MgYW5kIGZhaWx1cmUuXHJcbiAgICAgIC8vIFRoZSBjdXJyZW50IFVSTCBpcyB1c2VkIGJ5IGRlZmF1bHQuXHJcbiAgICApO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBNYWluIGZ1bmN0aW9uIGZvciB0aGUgc2lnbmVkLWluIGZsb3cgKGFscmVhZHkgYXV0aG9yaXplZCBieSB0aGUgd2FsbGV0KS5cclxuZnVuY3Rpb24gc2lnbmVkSW5GbG93KCkge1xyXG4gIC8vIERpc3BsYXlpbmcgdGhlIHNpZ25lZCBpbiBmbG93IGNvbnRhaW5lci5cclxuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWduZWQtaW4nKSkuZm9yRWFjaChlbCA9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJycpO1xyXG5cclxuICAvLyBEaXNwbGF5aW5nIGN1cnJlbnQgYWNjb3VudCBuYW1lLlxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NvdW50LWlkJykuaW5uZXJUZXh0ID0gd2luZG93LmFjY291bnRJZDtcclxuXHJcbiAgLy8gQWRkaW5nIGFuIGV2ZW50IHRvIGEgc2F5LWhpIGJ1dHRvbi5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F5LWhpJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBXZSBjYWxsIHNheSBIaSBhbmQgdGhlbiB1cGRhdGUgd2hvIHNhaWQgSGkgbGFzdC5cclxuICAgIHdpbmRvdy5jb250cmFjdC5zYXlIaSgpLnRoZW4odXBkYXRlV2hvU2FpZEhpKTtcclxuICB9KTtcclxuXHJcbiAgLy8gQWRkaW5nIGFuIGV2ZW50IHRvIGEgc2luZy1vdXQgYnV0dG9uLlxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduLW91dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB3YWxsZXRBY2NvdW50LnNpZ25PdXQoKTtcclxuICAgIC8vIEZvcmNpbmcgcmVkaXJlY3QuXHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICB9KTtcclxuXHJcbiAgLy8gZmV0Y2ggd2hvIGxhc3Qgc2FpZCBoaSB3aXRob3V0IHJlcXVpcmluZyBidXR0b24gY2xpY2tcclxuICAvLyBidXQgd2FpdCBhIHNlY29uZCBzbyB0aGUgcXVlc3Rpb24gaXMgbGVnaWJsZVxyXG4gIHNldFRpbWVvdXQodXBkYXRlV2hvU2FpZEhpLCAxMDAwKTtcclxufVxyXG5cclxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIHdobyBzYWlkIGhpXHJcbmZ1bmN0aW9uIHVwZGF0ZVdob1NhaWRIaSgpIHtcclxuICAvLyBKYXZhU2NyaXB0IHRpcDpcclxuICAvLyBUaGlzIGlzIGFub3RoZXIgZXhhbXBsZSBvZiBob3cgdG8gdXNlIHByb21pc2VzLiBTaW5jZSB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBhc3luYyxcclxuICAvLyB3ZSBjYW4ndCBhd2FpdCBmb3IgYGNvbnRyYWN0Lndob1NhaWRIaSgpYCwgaW5zdGVhZCB3ZSBhdHRhY2hpbmcgYSBjYWxsYmFjayBmdW5jdGlvblxyXG4gIC8vIHVzaW4gYC50aGVuKClgLlxyXG4gIGNvbnRyYWN0Lndob1NhaWRIaSgpLnRoZW4oKHdobykgPT4ge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2hvJyk7XHJcbiAgICBlbC5pbm5lclRleHQgPSB3aG8gfHwgJ05vIG9uZSc7XHJcblxyXG4gICAgLy8gb25seSBsaW5rIHRvIHByb2ZpbGUgaWYgdGhlcmUncyBhIHByb2ZpbGUgdG8gbGluayB0b1xyXG4gICAgaWYgKHdobykge1xyXG4gICAgICBlbC5ocmVmID0gJ2h0dHBzOi8vZXhwbG9yZXIudGVzdG5ldC5uZWFyLm9yZy9hY2NvdW50cy8nICsgd2hvO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoYW5nZSB0aGUgPyB0byBhICFcclxuICAgIGNvbnN0IHBhcmVudCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gcGFyZW50LmlubmVySFRNTC5yZXBsYWNlKCc/JywgJyEnKTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gTG9hZHMgbmVhckFQSSBhbmQgdGhpcyBjb250cmFjdCBpbnRvIHdpbmRvdyBzY29wZS5cclxud2luZG93Lm5lYXJJbml0UHJvbWlzZSA9IGluaXRDb250cmFjdCgpXHJcbiAgLnRoZW4oZG9Xb3JrKVxyXG4gIC5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBcIjVmNzg4NzI2NmU5MGE0NzE3ODc1XCI7IH0iXSwibmFtZXMiOlsibmVhckFQSSIsImdldENvbmZpZyIsIndpbmRvdyIsIm5lYXJDb25maWciLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJjb25zb2xlIiwibG9nIiwiaW5pdENvbnRyYWN0IiwiY29ubmVjdCIsImRlcHMiLCJrZXlTdG9yZSIsImtleVN0b3JlcyIsIkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSIsIm5lYXIiLCJ3YWxsZXRBY2NvdW50IiwiV2FsbGV0QWNjb3VudCIsImFjY291bnRJZCIsImdldEFjY291bnRJZCIsImRvV29yayIsImlzU2lnbmVkSW4iLCJzaWduZWRPdXRGbG93Iiwic2lnbmVkSW5GbG93IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwic3R5bGUiLCJkaXNwbGF5IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVxdWVzdFNpZ25JbiIsImNvbnRyYWN0TmFtZSIsImlubmVyVGV4dCIsImNvbnRyYWN0Iiwic2F5SGkiLCJ0aGVuIiwidXBkYXRlV2hvU2FpZEhpIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2lnbk91dCIsImxvY2F0aW9uIiwicmVwbGFjZSIsIm9yaWdpbiIsInBhdGhuYW1lIiwic2V0VGltZW91dCIsIndob1NhaWRIaSIsIndobyIsImhyZWYiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiaW5uZXJIVE1MIiwibmVhckluaXRQcm9taXNlIiwiY2F0Y2giLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=