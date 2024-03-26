import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BqCsqKlz.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Bard33u_.mjs');
const _page1 = () => import('./chunks/AddPost_BTj1KwPu.mjs');
const _page2 = () => import('./chunks/_Id__DrrgNcih.mjs');
const _page3 = () => import('./chunks/Home_Cz2M7Z1r.mjs');
const _page4 = () => import('./chunks/Login_DiXUOo6n.mjs');
const _page5 = () => import('./chunks/MyProfile_B3mPyb86.mjs');
const _page6 = () => import('./chunks/Register_BLYiMqsK.mjs');
const _page7 = () => import('./chunks/_Id__DBRFevhe.mjs');
const _page8 = () => import('./chunks/index_DzABIOkn.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/AddPost.astro", _page1],
    ["src/pages/hashtags/[Id].astro", _page2],
    ["src/pages/Home.astro", _page3],
    ["src/pages/Login.astro", _page4],
    ["src/pages/MyProfile.astro", _page5],
    ["src/pages/Register.astro", _page6],
    ["src/pages/users/[Id].astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "1d61f4d5-26a8-4832-8778-2fa50ce118d5"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
