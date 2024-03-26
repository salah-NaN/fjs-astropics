/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_CGSTdcnJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import 'clsx';

function DropdownNavBar({ func: handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return /* @__PURE__ */ jsx("div", { ref: dropdownRef, children: /* @__PURE__ */ jsxs(
    "button",
    {
      className: "relative",
      onClick: () => setIsOpen(!isOpen),
      children: [
        /* @__PURE__ */ jsx("img", { className: "size-6", src: "/button.svg" }),
        /* @__PURE__ */ jsxs("ul", { className: ` absolute top-7 -right-3 w-48 ${isOpen ? "visible" : "hidden"} bg-[#2a2a30] shadow-lg  text-[#eaeaea]`, children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: " block px-2 py-3 w-full transition duration-200 hover:bg-[#34343c]",
              href: "/MyProfile",
              children: [
                /* @__PURE__ */ jsx("img", { className: "inline mr-2 ", src: "/profile-circle.svg" }),
                "My profile"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: ` text-red-500 block px-2 py-2 w-full transition duration-200 hover:bg-[#34343c]`,
              href: "/",
              children: [
                /* @__PURE__ */ jsx("img", { className: "inline mr-2 ", src: "/log-out.svg" }),
                "Log out"
              ]
            }
          )
        ] })
      ]
    }
  ) });
}

const $$Astro$3 = createAstro();
const $$NavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavBar;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class=" fixed z-50 top-0 h-20 w-full flex justify-between items-center pl-10 pr-8 bg-[#2d2e34] shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-70
            md:pl-20 md:pr-16
            lg:pl-24"> <div class="flex justify-center items-center gap-4"> <a href="/Home" class="flex justify-center items-center gap-4 cursor-pointer"> <img class="size-10" src="/logo.svg"> <h1 class="text-2xl font-semibold bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent ">AstroPics</h1> </a> <div class="hidden
                    md:ml-20 md:flex md:gap-10 md:visible">  </div> </div> <div${addAttribute(`${Astro2.cookies.get("token") ? "block" : "hidden"} fixed top-[27px] right-9`, "class")}> ${renderComponent($$result, "DropdownNavBar", DropdownNavBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/components/DropdownNavBar", "client:component-export": "default" })} </div> <!-- <a class={\`\${Astro.cookies.get('token') ? 'block' : 'hidden'}\`}
                href="/MyProfile">
                    <img class=" inline size-7" src={ '/profile-circle.svg'}/>
                </a>

                <a class={\`\${Astro.cookies.get('token') ? 'block' : 'hidden'}\`}
                href="/">
                    <img class=" inline ml-2 size-7" src={ '/log-out.svg'}/>
                </a> --> </nav>`;
}, "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/components/NavBar.astro", void 0);

const $$Astro$2 = createAstro();
const $$General = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$General;
  const { id } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astropics</title>${renderHead()}</head> <body class="mt-24" style="background-color: #222328; color: #eaeaea;"> <!-- navbar --> ${renderComponent($$result, "NavBar", $$NavBar, { "id": id })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/layouts/General.astro", void 0);

const $$Astro$1 = createAstro();
const $$Back = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Back;
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> <a class="cursor-default "${addAttribute(url, "href")}> <img class="size-8 ml-1 cursor-pointer" src="/back.svg" alt=""> </a> </div>`;
}, "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/components/Back.astro", void 0);

const $$Astro = createAstro();
const $$AddPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AddPost;
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
  let alert = false;
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const image = data.get("file");
    const comment = data.get("hashtags");
    const dataSend = new FormData();
    dataSend.append("file", image);
    dataSend.append("hashtags", comment);
    console.log(dataSend);
    try {
      const options = {
        method: "POST",
        body: dataSend,
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      let upload = await fetch(`${URL}/upload`, options);
      upload = await upload.json();
      console.log(upload);
      if (upload.message)
        return Astro2.redirect("/Home");
      if (upload.error)
        alert = true;
    } catch (error) {
      console.log(error);
    }
  }
  return renderTemplate`${renderComponent($$result, "General", $$General, {}, { "default": ($$result2) => renderTemplate`${alert ? renderTemplate`${maybeRenderHead()}<div> <div class=" w-1/2 top-[92px] z-30 left-1/2 -translate-x-1/2 absolute py-2 text-center bg-[#c93636] text-[#fafafa] rounded-lg shadow">
Error to upload image!
</div> </div>` : null}${renderComponent($$result2, "Back", $$Back, { "url": "/Home" })} <form enctype="multipart/form-data" method="POST" class="flex flex-col w-10/12 mx-auto mt-3.5"> <div class="flex flex-col relative items-center h-72 bg-[#383a41] mb-12 rounded-lg border-2 border-purple-500"> <!-- taking the photo --> <label class="w-full mt-12 flex justify-center itmes-start" for="formFile"> <img id="previewImage" class="w-24" src="/camera.svg"> </label> <input type="file" id="formFile" name="file" accept="image/*" capture="environment" class="absolute  w-10/12 top-52 bg-[#675dd3] rounded-lg text-sm">  </div> <label class="mb-2 text-sm" for="hastags">Comment</label> <textarea class="h-20 mb-10 px-3 py-1 bg-[#383a41] rounded-lg focus:outline-none focus:outline-2 focus:outline-purple-500 transition-all duration-75" name="hashtags" id="hashtags"></textarea> <!-- redirect to a confirm page with same input values --> <button type="submit" class="self-end px-3 py-1 border-2 rounded-lg border-purple-500 bg-[#2b2d33] text-purple-500">Continue</button> </form> ` })}`;
}, "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/AddPost.astro", void 0);

const $$file = "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/AddPost.astro";
const $$url = "/AddPost";

const AddPost = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AddPost,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$General as $, AddPost as A, $$Back as a };
