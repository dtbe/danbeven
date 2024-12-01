(() => {
var exports = {};
exports.id = 223;
exports.ids = [223];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 4585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport safe */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1__.GlobalError),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

    

    const tree = {
        children: [
        '',
        {
        children: [
        'crisis-monitor',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2090)), "/workspaces/danbeven/app/crisis-monitor/page.tsx"],
          
        }]
      },
        {
          
          
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1921)), "/workspaces/danbeven/app/layout.tsx"],
          
        }
      ]
      }.children;
    const pages = ["/workspaces/danbeven/app/crisis-monitor/page.tsx"];

    

    const originalPathname = "/crisis-monitor/page"
    const __next_app__ = {
      require: __webpack_require__,
      // all modules are in the entry chunk, so we never actually need to load chunks in webpack
      loadChunk: () => Promise.resolve()
    }

    

    // Create and export the route module that will be consumed.
    const options = {"definition":{"kind":"APP_PAGE","page":"/crisis-monitor/page","pathname":"/crisis-monitor","bundlePath":"app/crisis-monitor/page","filename":"","appPaths":[]}}
    const routeModule = new (next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default())({
      ...options,
      userland: {
        loaderTree: tree,
      },
    })
  

/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 2090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CrisisMonitorPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_quest_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6991);
/* harmony import */ var _components_quest_generator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_quest_generator__WEBPACK_IMPORTED_MODULE_1__);


function CrisisMonitorPage() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center p-4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_quest_generator__WEBPACK_IMPORTED_MODULE_1__.QuestGenerator, {})
    });
}


/***/ }),

/***/ 6991:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-swc-loader.js):\nError: \n  \u001b[31mx\u001b[0m the name `default` is exported multiple times\n    ,-[\u001b[36;1;4m/workspaces/danbeven/components/quest-generator.tsx\u001b[0m:8:1]\n \u001b[2m 8\u001b[0m |       description: 'A collection of magical tools and utilities for wizards and witches',\n \u001b[2m 9\u001b[0m |     }\n \u001b[2m10\u001b[0m |     \n \u001b[2m11\u001b[0m | \u001b[31;1m,\u001b[0m\u001b[31;1m-\u001b[0m\u001b[31;1m>\u001b[0m export default function RootLayout({\n \u001b[2m12\u001b[0m | \u001b[31;1m|\u001b[0m     children,\n \u001b[2m13\u001b[0m | \u001b[31;1m|\u001b[0m   }: {\n \u001b[2m14\u001b[0m | \u001b[31;1m|\u001b[0m     children: React.ReactNode\n \u001b[2m15\u001b[0m | \u001b[31;1m|\u001b[0m   }) {\n \u001b[2m16\u001b[0m | \u001b[31;1m|\u001b[0m     return (\n \u001b[2m17\u001b[0m | \u001b[31;1m|\u001b[0m       <html lang=\"en\">\n \u001b[2m18\u001b[0m | \u001b[31;1m|\u001b[0m         <body className={inter.className}>{children}</body>\n \u001b[2m19\u001b[0m | \u001b[31;1m|\u001b[0m       </html>\n \u001b[2m20\u001b[0m | \u001b[31;1m|\u001b[0m     )\n \u001b[2m21\u001b[0m | \u001b[31;1m|\u001b[0m\u001b[31;1m-\u001b[0m\u001b[31;1m>\u001b[0m }\n    : \u001b[31;1m`\u001b[0m\u001b[31;1m---\u001b[0m\u001b[31;1m-\u001b[0m \u001b[31;1mprevious exported here\u001b[0m\n \u001b[2m22\u001b[0m |     \n \u001b[2m23\u001b[0m |     'use client'\n \u001b[2m24\u001b[0m |     \n \u001b[2m25\u001b[0m |     import { useState, useMemo, useCallback } from 'react'\n \u001b[2m26\u001b[0m |     import { Button } from \"@/components/ui/button\"\n \u001b[2m27\u001b[0m |     import { Card, CardContent, CardHeader, CardTitle } from \"@/components/ui/card\"\n \u001b[2m28\u001b[0m |     import { Checkbox } from \"@/components/ui/checkbox\"\n \u001b[2m29\u001b[0m |     import { Copy, Skull, RefreshCw, X, ArrowDown } from 'lucide-react'\n \u001b[2m30\u001b[0m |     import { Alert, AlertDescription } from \"@/components/ui/alert\"\n \u001b[2m31\u001b[0m |     \n \u001b[2m32\u001b[0m |     const funMessages = [\n \u001b[2m33\u001b[0m |       \"Merlin's beard, we need help! 🧙‍♂️\",\n \u001b[2m34\u001b[0m |       \"Wands at the ready! 🪄\",\n \u001b[2m35\u001b[0m |       \"Mischief needs managing! 🗺️\",\n \u001b[2m36\u001b[0m |       \"Blimey, another magical emergency! 🌟\",\n \u001b[2m37\u001b[0m |       \"Crikey, things are getting wild! 🔮\",\n \u001b[2m38\u001b[0m |       \"Bloody hell, not again! 😱\",\n \u001b[2m39\u001b[0m |       \"Accio help! 🚨\",\n \u001b[2m40\u001b[0m |       \"Lumos! Trouble brewing! 💡\",\n \u001b[2m41\u001b[0m |       \"Great Scott, magical mayhem incoming! 🌪️\",\n \u001b[2m42\u001b[0m |       \"Expecto problem! 🛡️\",\n \u001b[2m43\u001b[0m |       \"Oi, magical chaos alert! 🧨\",\n \u001b[2m44\u001b[0m |       \"Merlin's sparkly socks, we're in trouble! 🧦\",\n \u001b[2m45\u001b[0m |       \"By the Sorting Hat, this is urgent! 🎩\",\n \u001b[2m46\u001b[0m |       \"Sweet Butterbeer, here we go! 🍺\",\n \u001b[2m47\u001b[0m |       \"Galloping gargoyles, brace yourself! 🏰\"\n \u001b[2m48\u001b[0m |     ]\n \u001b[2m49\u001b[0m |     \n \u001b[2m50\u001b[0m | \u001b[33;1m,\u001b[0m\u001b[33;1m-\u001b[0m\u001b[33;1m>\u001b[0m export default function QuestGenerator() {\n \u001b[2m51\u001b[0m | \u001b[33;1m|\u001b[0m     const [quests, setQuests] = useState([])\n \u001b[2m52\u001b[0m | \u001b[33;1m|\u001b[0m     const [selectedLocations, setSelectedLocations] = useState({\n \u001b[2m53\u001b[0m | \u001b[33;1m|\u001b[0m       hogwarts: true,\n \u001b[2m54\u001b[0m | \u001b[33;1m|\u001b[0m       ministry: true,\n \u001b[2m55\u001b[0m | \u001b[33;1m|\u001b[0m       orderOfPhoenix: true,\n \u001b[2m56\u001b[0m | \u001b[33;1m|\u001b[0m       magicalCreatures: true,\n \u001b[2m57\u001b[0m | \u001b[33;1m|\u001b[0m       gringotts: true\n \u001b[2m58\u001b[0m | \u001b[33;1m|\u001b[0m     })\n \u001b[2m59\u001b[0m | \u001b[33;1m|\u001b[0m     const [isGenerating, setIsGenerating] = useState(false)\n \u001b[2m60\u001b[0m | \u001b[33;1m|\u001b[0m     const [feedback, setFeedback] = useState('')\n \u001b[2m61\u001b[0m | \u001b[33;1m|\u001b[0m     const [currentMessage, setCurrentMessage] = useState(funMessages[0])\n \u001b[2m62\u001b[0m | \u001b[33;1m|\u001b[0m   \n \u001b[2m63\u001b[0m | \u001b[33;1m|\u001b[0m     // ... rest of the component implementation remains the same ...\n \u001b[2m64\u001b[0m | \u001b[33;1m|\u001b[0m     \n \u001b[2m65\u001b[0m | \u001b[33;1m|\u001b[0m     return (\n \u001b[2m66\u001b[0m | \u001b[33;1m|\u001b[0m       <Card className=\"w-full max-w-4xl mx-auto bg-gray-800/90 border-0 text-white\">\n \u001b[2m67\u001b[0m | \u001b[33;1m|\u001b[0m         <CardHeader className=\"space-y-4\">\n \u001b[2m68\u001b[0m | \u001b[33;1m|\u001b[0m           <CardTitle className=\"text-2xl md:text-3xl font-bold text-center text-yellow-400\">\n \u001b[2m69\u001b[0m | \u001b[33;1m|\u001b[0m             Wizarding-world Crisis Monitor ⚡📻\n \u001b[2m70\u001b[0m | \u001b[33;1m|\u001b[0m           </CardTitle>\n \u001b[2m71\u001b[0m | \u001b[33;1m|\u001b[0m           {feedback && (\n \u001b[2m72\u001b[0m | \u001b[33;1m|\u001b[0m             <Alert \n \u001b[2m73\u001b[0m | \u001b[33;1m|\u001b[0m               variant={feedback.includes('Please select') ? 'destructive' : 'default'}\n \u001b[2m74\u001b[0m | \u001b[33;1m|\u001b[0m               className={`${\n \u001b[2m75\u001b[0m | \u001b[33;1m|\u001b[0m                 feedback.includes('Please select') \n \u001b[2m76\u001b[0m | \u001b[33;1m|\u001b[0m                   ? 'bg-red-900/50 border-red-500 text-red-500' \n \u001b[2m77\u001b[0m | \u001b[33;1m|\u001b[0m                   : 'bg-green-900/50 border-green-500 text-green-500'\n \u001b[2m78\u001b[0m | \u001b[33;1m|\u001b[0m               }`}\n \u001b[2m79\u001b[0m | \u001b[33;1m|\u001b[0m             >\n \u001b[2m80\u001b[0m | \u001b[33;1m|\u001b[0m               <AlertDescription>{feedback}</AlertDescription>\n \u001b[2m81\u001b[0m | \u001b[33;1m|\u001b[0m             </Alert>\n \u001b[2m82\u001b[0m | \u001b[33;1m|\u001b[0m           )}\n \u001b[2m83\u001b[0m | \u001b[33;1m|\u001b[0m         </CardHeader>\n \u001b[2m84\u001b[0m | \u001b[33;1m|\u001b[0m         \n \u001b[2m85\u001b[0m | \u001b[33;1m|\u001b[0m         {/* Rest of the component JSX remains the same */}\n \u001b[2m86\u001b[0m | \u001b[33;1m|\u001b[0m       </Card>\n \u001b[2m87\u001b[0m | \u001b[33;1m|\u001b[0m     )\n \u001b[2m88\u001b[0m | \u001b[33;1m|\u001b[0m\u001b[33;1m-\u001b[0m\u001b[33;1m>\u001b[0m }\n    : \u001b[33;1m`\u001b[0m\u001b[33;1m---\u001b[0m\u001b[33;1m-\u001b[0m \u001b[33;1mexported more than once\u001b[0m\n    `----\n\nError: \n  \u001b[36m>\u001b[0m Exported identifiers must be unique\n\n  \u001b[31mx\u001b[0m NEXT_RSC_ERR_CLIENT_DIRECTIVE\n    ,-[\u001b[36;1;4m/workspaces/danbeven/components/quest-generator.tsx\u001b[0m:20:1]\n \u001b[2m20\u001b[0m |   )\n \u001b[2m21\u001b[0m | }\n \u001b[2m22\u001b[0m | \n \u001b[2m23\u001b[0m | 'use client'\n    : \u001b[31;1m^^^^^^^^^^^^\u001b[0m\n \u001b[2m24\u001b[0m | \n \u001b[2m25\u001b[0m | import { useState, useMemo, useCallback } from 'react'\n \u001b[2m26\u001b[0m | import { Button } from \"@/components/ui/button\"\n    `----\n\n  \u001b[31mx\u001b[0m NEXT_RSC_ERR_REACT_API: useState\n    ,-[\u001b[36;1;4m/workspaces/danbeven/components/quest-generator.tsx\u001b[0m:22:1]\n \u001b[2m22\u001b[0m | \n \u001b[2m23\u001b[0m | 'use client'\n \u001b[2m24\u001b[0m | \n \u001b[2m25\u001b[0m | import { useState, useMemo, useCallback } from 'react'\n    : \u001b[31;1m         ^^^^^^^^\u001b[0m\n \u001b[2m26\u001b[0m | import { Button } from \"@/components/ui/button\"\n \u001b[2m27\u001b[0m | import { Card, CardContent, CardHeader, CardTitle } from \"@/components/ui/card\"\n \u001b[2m28\u001b[0m | import { Checkbox } from \"@/components/ui/checkbox\"\n    `----\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [750,250], () => (__webpack_exec__(4585)));
module.exports = __webpack_exports__;

})();