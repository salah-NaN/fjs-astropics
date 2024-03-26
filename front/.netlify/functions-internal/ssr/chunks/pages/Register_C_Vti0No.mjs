/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_CGSTdcnJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$General } from './AddPost_CVhhGHGz.mjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const URL = "https://ricardhernandez.com/api";
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const name = data.get("name");
    const password = data.get("password");
    await fetch(`${URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ name, password })
    }).then((res) => res.json()).then((res) => console.log(res)).catch((err) => console.error(err));
  }
  return renderTemplate`<!-- sign up / register -->${renderComponent($$result, "General", $$General, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-4/5 mx-auto mt-44 px-7 py-4 bg-[#3d3f47] rounded-lg shadow-xl"> <h2 class="mt-3 mb-9 text-2xl font-semibold">Sign up</h2> <form method="POST" class="flex flex-col"> <label class="mb-2 text-sm" for="name">Name</label> <input class="bg-[#343434] mb-8 py-2 pl-2 rounded-lg focus:outline-none focus:outline-2 focus:outline-purple-500 transition-all duration-75" name="name" type="text"> <label class="mb-2 text-sm" for="password">Password</label> <input class="bg-[#343434] mb-4 rounded-lg py-2 pl-2 focus:outline-none focus:outline-2 focus:outline-purple-500 transition-all duration-75" name="password" type="password"> <a class="self-end w-fit text-[#e8e8e8] text-[13px] mb-4 font-semibold hover:text-purple-500 transition-all duration-200" href="/">Log into your account</a> <button class="mt-3 mb-4 py-1.5 outline-none rounded-lg border-2 border-purple-500 bg-[#2b2d33] text-purple-500 hover:scale-105 transition-all duration-200">Submit</button> </form> </div> ` })}`;
}, "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/Register.astro", void 0);

const $$file = "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/Register.astro";
const $$url = "/Register";

export { $$Register as default, $$file as file, $$url as url };
