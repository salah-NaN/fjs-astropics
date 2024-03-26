/* empty css                            */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_CGSTdcnJ.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$General } from './AddPost_CVhhGHGz.mjs';
import $$Login from './Login_PzPsmS9J.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const URL = "https://ricardhernandez.com/api";
  let alert = false;
  Astro2.cookies.delete("token");
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const name = data.get("name");
    const password = data.get("password");
    await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ name, password })
    }).then((res) => res.json()).then((res) => {
      if (res.token) {
        console.log(res);
        Astro2.cookies.set("token", res.token);
      }
      console.log(res);
      if (res.error) {
        alert = true;
      }
    }).catch((err) => console.error(err));
    if (Astro2.cookies.has("token")) {
      return Astro2.redirect("/Home");
    }
  }
  return renderTemplate`${renderComponent($$result, "General", $$General, {}, { "default": ($$result2) => renderTemplate`${alert ? renderTemplate`${maybeRenderHead()}<div> <div class=" error w-1/2 top-[108px] left-1/2 -translate-x-1/2 absolute py-2 text-center bg-[#c93636] text-[#fafafa] rounded-lg shadow">
Login error!
</div> </div>` : renderTemplate`<div> <div class=" error hidden w-1/2 top-24 left-1/2 -translate-x-1/2 absolute py-2 text-center bg-[#c93636] text-[#fafafa] rounded-lg shadow  ">
Login error
</div> </div>`} ${renderComponent($$result2, "Login", $$Login, {})}  ` })}`;
}, "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/index.astro", void 0);

const $$file = "/Users/salah/fullStack/enfocaT/fjs-astropics/front/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
