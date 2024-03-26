/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_CGSTdcnJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Back, $ as $$General } from './AddPost_CVhhGHGz.mjs';
import { $ as $$AddButton } from './Home_CL4aQKgR.mjs';

const $$Astro$1 = createAstro();
const $$Id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Id$1;
  const { Id: hashtag } = Astro2.params;
  const URL = "https://ricardhernandez.com/api";
  if (!Astro2.cookies.has("token")) {
    return Astro2.redirect("/");
  }
  const token = Astro2.cookies.get("token").value;
  let invalidToken = false;
  await fetch(`${URL}/refresh`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then((res) => res.json()).then((res) => {
    if (res.error)
      invalidToken = true;
  }).catch((err) => console.error(err));
  if (invalidToken) {
    return Astro2.redirect("/");
  }
  let posts = [];
  try {
    let postsByHashtag = await fetch(URL + "/images/hashtag/" + hashtag, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    postsByHashtag = await postsByHashtag.json();
    posts = postsByHashtag.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.log(error);
  }
  await fetch(`${URL}/allUsers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then((res) => res.json()).then((res) => {
  }).catch((err) => console.error(err));
  return renderTemplate`${renderComponent($$result, "General", $$General, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Back", $$Back, { "url": "/Home" })} ${maybeRenderHead()}<div class="flex justify-center items-center gap-24"> <h2 class="text-2xl font-light bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent "> ${"#" + hashtag} </h2> <div class="flex flex-col justify-center items-center"> <p>${posts.length}</p> <p class="font-semibold bg-clip-text bg-gradient-to-r from-[#dadada] to-[#9598a5] text-transparent">publicaciones</p> </div> </div> <ul class="w-11/12 mx-auto"> ${posts && posts.map((post) => renderTemplate`<li class="  flex flex-col justify-end my-7 bg-[#2f3138] rounded-lg shadow-xl"> <div class=" flex-grow shrink-0"> <div class="w-full h-full rounded-lg relative"> <img class=" object-fit size-full rounded-t-lg "${addAttribute(`https://ricardhernandez.com/img/${post.image}`, "src")}> </div> </div> <div class="min-h-24 py-2 px-3"> <a${addAttribute(`/users/${post.userId}`, "href")} class="text-lg font-medium">${post.userName}</a> <p class="text-[15px] truncate line-clamp-2 text-wrap">${post.hashtags.split(" ").map((word) => word.includes("#") ? renderTemplate`<span class="text-[#8e5cf5] text-medium">${word + " "}</span>` : word + " ")}</p> </div> </li>`)} </ul> ${renderComponent($$result2, "AddButton", $$AddButton, {})} ` })}`;
}, "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/hashtags/[Id].astro", void 0);

const $$file$1 = "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/hashtags/[Id].astro";
const $$url$1 = "/hashtags/[Id]";

const _Id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Id$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Id;
  const { Id } = Astro2.params;
  const URL = "https://ricardhernandez.com/api";
  if (!Astro2.cookies.has("token")) {
    return Astro2.redirect("/");
  }
  const token = Astro2.cookies.get("token").value;
  let invalidToken = false;
  await fetch(`${URL}/refresh`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then((res) => res.json()).then((res) => {
    if (res.error)
      invalidToken = true;
  }).catch((err) => console.error(err));
  if (invalidToken) {
    return Astro2.redirect("/");
  }
  let posts = [];
  try {
    let postsByUser = await fetch(URL + "/user/" + Id + "/images", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    postsByUser = await postsByUser.json();
    posts = postsByUser.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.log(error);
  }
  await fetch(`${URL}/allUsers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then((res) => res.json()).then((res) => {
  }).catch((err) => console.error(err));
  function shiftHashtag(hashtag) {
    const array = hashtag.split("");
    array.shift();
    const str = array.join("");
    return str;
  }
  return renderTemplate`${renderComponent($$result, "General", $$General, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Back", $$Back, { "url": "/Home" })} ${maybeRenderHead()}<div class="flex justify-center items-center gap-24"> <h2 class="text-2xl font-light bg-clip-text bg-gradient-to-r from-[#50525e] to-[#dadada] text-transparent"></h2> <div class="flex flex-col justify-center items-center"> <p>${posts.length}</p> <p class="font-semibold bg-clip-text bg-gradient-to-r from-[#dadada] to-[#9598a5] text-transparent">publicaciones</p> </div> </div> <ul class="w-11/12 mx-auto"> ${posts && posts.map((post) => renderTemplate`<li class=" flex flex-col justify-end my-7 bg-[#2f3138] rounded-lg shadow-xl"> <div class=" flex-grow shrink-0"> <div class="w-full h-full rounded-lg relative"> <img class=" object-fit size-full rounded-t-lg "${addAttribute(`https://ricardhernandez.com/img/${post.image}`, "src")}> </div> </div> <div class="min-h-24 py-2 px-3"> <a${addAttribute(`/users/${post.userId}`, "href")} class="text-lg font-medium">${post.userName}</a> <div class="text-[15px] truncate line-clamp-2 text-wrap">${post.hashtags.split(" ").map((word) => word.includes("#") ? renderTemplate`<a class="text-[#8e5cf5] text-medium"${addAttribute(`/hashtags/${word ? shiftHashtag(word) : ""}`, "href")}>${word + " "}</a>` : word + " ")}</div> </div> </li>`)} </ul> ${renderComponent($$result2, "AddButton", $$AddButton, {})} ` })}`;
}, "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/users/[Id].astro", void 0);

const $$file = "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/users/[Id].astro";
const $$url = "/users/[Id]";

const _Id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _Id_$1 as _, _Id_ as a };
