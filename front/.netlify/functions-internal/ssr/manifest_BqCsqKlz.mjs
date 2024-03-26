import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_CGSTdcnJ.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.getElementById(\"formFile\").addEventListener(\"change\",function(t){const n=t.target.files[0],e=new FileReader;e.onload=function(r){document.getElementById(\"previewImage\").setAttribute(\"src\",r.target.result)},e.readAsDataURL(n)});\n"}],"styles":[{"type":"external","src":"/_astro/AddPost.kaUe9FdA.css"}],"routeData":{"route":"/addpost","isIndex":false,"type":"page","pattern":"^\\/AddPost\\/?$","segments":[[{"content":"AddPost","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/AddPost.astro","pathname":"/AddPost","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AddPost.kaUe9FdA.css"}],"routeData":{"route":"/hashtags/[id]","isIndex":false,"type":"page","pattern":"^\\/hashtags\\/([^/]+?)\\/?$","segments":[[{"content":"hashtags","dynamic":false,"spread":false}],[{"content":"Id","dynamic":true,"spread":false}]],"params":["Id"],"component":"src/pages/hashtags/[Id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"function t(){const e=document.querySelectorAll(\".post\");console.log(e);let s=0;try{e.forEach(o=>{if(o.classList.contains(\"hidden\")&&(o.classList.remove(\"hidden\"),console.log(\"test\"),o.classList.add(\"flex\"),s++),s>=10)throw new Error(\"Breaking loop\")})}catch(o){console.log(o)}}window.addEventListener(\"scroll\",()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight&&t()});t();\n"}],"styles":[{"type":"external","src":"/_astro/AddPost.kaUe9FdA.css"}],"routeData":{"route":"/home","isIndex":false,"type":"page","pattern":"^\\/Home\\/?$","segments":[[{"content":"Home","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Home.astro","pathname":"/Home","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AddPost.kaUe9FdA.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/Login\\/?$","segments":[[{"content":"Login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Login.astro","pathname":"/Login","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AddPost.kaUe9FdA.css"}],"routeData":{"route":"/myprofile","isIndex":false,"type":"page","pattern":"^\\/MyProfile\\/?$","segments":[[{"content":"MyProfile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/MyProfile.astro","pathname":"/MyProfile","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AddPost.kaUe9FdA.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/Register\\/?$","segments":[[{"content":"Register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Register.astro","pathname":"/Register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AddPost.kaUe9FdA.css"}],"routeData":{"route":"/users/[id]","isIndex":false,"type":"page","pattern":"^\\/users\\/([^/]+?)\\/?$","segments":[[{"content":"users","dynamic":false,"spread":false}],[{"content":"Id","dynamic":true,"spread":false}]],"params":["Id"],"component":"src/pages/users/[Id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/AddPost.kaUe9FdA.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/AddPost.astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/Home.astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/MyProfile.astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/Register.astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/hashtags/[Id].astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/users/[Id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/Login.astro":"chunks/pages/Login_PzPsmS9J.mjs","/src/pages/MyProfile.astro":"chunks/pages/MyProfile_C9Yz7Apn.mjs","/src/pages/Register.astro":"chunks/pages/Register_C_Vti0No.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Jp9up0Ob.mjs","/src/pages/index.astro":"chunks/pages/index_COPgev_1.mjs","\u0000@astrojs-manifest":"manifest_BqCsqKlz.mjs","/Users/salah/fullStack/enfocaT/fjs-astropics/front/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_Bard33u_.mjs","\u0000@astro-page:src/pages/AddPost@_@astro":"chunks/AddPost_BTj1KwPu.mjs","\u0000@astro-page:src/pages/hashtags/[Id]@_@astro":"chunks/_Id__DrrgNcih.mjs","\u0000@astro-page:src/pages/Home@_@astro":"chunks/Home_Cz2M7Z1r.mjs","\u0000@astro-page:src/pages/Login@_@astro":"chunks/Login_DiXUOo6n.mjs","\u0000@astro-page:src/pages/MyProfile@_@astro":"chunks/MyProfile_B3mPyb86.mjs","\u0000@astro-page:src/pages/Register@_@astro":"chunks/Register_BLYiMqsK.mjs","\u0000@astro-page:src/pages/users/[Id]@_@astro":"chunks/_Id__DBRFevhe.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DzABIOkn.mjs","/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/components/DropdownNavBar":"_astro/DropdownNavBar.BUSG0WdS.js","/astro/hoisted.js?q=0":"_astro/hoisted.yqzL6_jC.js","/astro/hoisted.js?q=1":"_astro/hoisted.BZYDectz.js","@astrojs/react/client.js":"_astro/client.DbokQZWz.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/AddPost.kaUe9FdA.css","/back.svg","/button.svg","/camera.svg","/log-out.svg","/logo.svg","/plus-circle.svg","/profile-circle.svg","/_astro/DropdownNavBar.BUSG0WdS.js","/_astro/client.DbokQZWz.js","/_astro/index.NEDEFKed.js"],"buildFormat":"directory"});

export { manifest };
