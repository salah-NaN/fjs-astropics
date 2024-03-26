/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_CGSTdcnJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Back, $ as $$General } from './AddPost_CVhhGHGz.mjs';
import { $ as $$AddButton } from './Home_CL4aQKgR.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$MyProfile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MyProfile;
  const URL = "https://ricardhernandez.com/api";
  if (!Astro2.cookies.has("token")) {
    return Astro2.redirect("/");
  }
  const token = Astro2.cookies.get("token").value;
  let id = -1;
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
    if (res.id)
      id = res.id;
  }).catch((err) => console.error(err));
  if (invalidToken) {
    return Astro2.redirect("/");
  }
  let posts = [];
  try {
    let postsByUser = await fetch(URL + "/user/" + id + "/images", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    postsByUser = await postsByUser.json();
    posts = postsByUser.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.log(error);
  }
  let allUsers;
  await fetch(`${URL}/allUsers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then((res) => res.json()).then((res) => {
    allUsers = res;
  }).catch((err) => console.error(err));
  function shiftHashtag(hashtag) {
    const array = hashtag.split("");
    array.shift();
    const str = array.join("");
    return str;
  }
  console.log(id);
  return renderTemplate`${renderComponent($$result, "General", $$General, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Back", $$Back, { "url": "/Home" })} ${maybeRenderHead()}<div class="flex justify-center items-center gap-24"> <h2 class="text-2xl font-light bg-clip-text bg-gradient-to-r from-[#50525e] to-[#dadada] text-transparent"> ${allUsers.find((user) => user.id === id).name} </h2> <div class="flex flex-col justify-center items-center"> <p>${posts.length}</p> <p class="font-semibold bg-clip-text bg-gradient-to-r from-[#dadada] to-[#9598a5] text-transparent">
publicaciones
</p> </div> </div> <ul class="w-11/12 mx-auto"> ${posts.map((post) => renderTemplate(_a || (_a = __template(['<li class="relative h-[600px] flex flex-col justify-end my-7 bg-[#2f3138] rounded-lg shadow-xl"> <div class=" flex-grow shrink-0"> <div class="w-full h-full rounded-lg relative"> <img class="absolute inset-0 object-fit size-full rounded-t-lg "', '> </div> </div> <div class="min-h-24 py-2 px-3"> <a', ' class="text-lg "> ', ' </a> <div class="text-[15px] truncate line-clamp-2 text-wrap"> ', ` </div> </div> <div class="absolute top-0 right-0"> <button id="delete">Delete post</button> <button id="update">Edit comment</button> </div> <script>
            const deleteBtn = document.getElementById("delete")
            document.addEventListener('click', ()=> {

            })
          <\/script> </li>`])), addAttribute(`http://localhost:3000/uploads/resized/${post.filename}`, "src"), addAttribute(`/users/${post.userId}`, "href"), allUsers.find((user) => user.id === post.userId).name, post.hashtags.split(" ").map(
    (word) => word.includes("#") ? renderTemplate`<a class="text-[#8e5cf5] text-medium"${addAttribute(`/hashtags/${word ? shiftHashtag(word) : ""}`, "href")}> ${word + " "} </a>` : word + " "
  )))} </ul> ${renderComponent($$result2, "AddButton", $$AddButton, {})} ` })}`;
}, "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/MyProfile.astro", void 0);

const $$file = "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/MyProfile.astro";
const $$url = "/MyProfile";

export { $$MyProfile as default, $$file as file, $$url as url };
