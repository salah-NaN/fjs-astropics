/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, e as addAttribute } from '../astro_CGSTdcnJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$General } from './AddPost_CVhhGHGz.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$AddButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AddButton;
  return renderTemplate`${maybeRenderHead()}<a href="/AddPost" class=" flex justify-center items-center size-12 fixed bottom-9 right-7 outline-offset-1 rounded-full shadow-2xl bg-[#7942e8] hover:scale-105 hover:bg-[#b453e7]/80 transition-all duration-200 backdrop-filter backdrop-blur-lg bg-opacity-90"> <img class="size-8" src="/plus-circle.svg"> </a>`;
}, "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/components/AddButton.astro", void 0);

const $$Astro = createAstro();
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Home;
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
  let allImages = [];
  await fetch(`${URL}/allimages`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then((res) => res.json()).then((res) => {
    allImages = res.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }).catch((err) => console.error(err));
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
  return renderTemplate`${renderComponent($$result, "General", $$General, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<ul class="w-11/12 mx-auto mt-28"> ${allImages && allImages.map((post) => renderTemplate`<li class="post hidden   flex-col justify-end my-7 bg-[#2f3138] rounded-lg shadow-xl"> <div class=" flex-grow shrink-0"> <div class="w-full h-full rounded-lg relative"> <img class=" object-fit size-full rounded-t-lg "${addAttribute(`https://ricardhernandez.com/img/${post.image}`, "src")}> </div> </div> <div class="min-h-24 py-2 px-3"> <a${addAttribute(`/users/${post.userId}`, "href")} class="text-lg font-medium">${post.userName}</a> <div class="text-[15px] truncate line-clamp-2 text-wrap">${post.hashtags.split(" ").map((word) => word.includes("#") ? renderTemplate`<a class="text-[#8e5cf5] text-medium"${addAttribute(`/hashtags/${word ? shiftHashtag(word) : ""}`, "href")}>${word + " "}</a>` : word + " ")}</div> </div> </li>`)} </ul>    ${renderComponent($$result2, "AddButton", $$AddButton, {})} ` })}`;
}, "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/Home.astro", void 0);

const $$file = "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/Home.astro";
const $$url = "/Home";

const Home = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Home,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$AddButton as $, Home as H };
