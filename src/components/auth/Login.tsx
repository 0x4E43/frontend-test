import { stringify } from "postcss";
import { createSignal, For, Signal } from "solid-js";
import { createStore } from "solid-js/store";
import { json } from "solid-start";

export default function Login() {
  const [cats, setCats] = createSignal([
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ]);

  const [name, setName] = createSignal("");
  const [btnName, setBtnName] = createSignal("");
  const [userDarta, setUserDarta] = createStore([]);

  setBtnName("Add Data");
  return (
    <>
      <main class="text-center mx-auto text-gray-300 p-4">
          <div class="card w-3/6 bg-base-100 shadow-xl m-auto content-center">
            <h2 class="max-6-xs text-accent font-thin uppercase m-3 text-left">
              You are Awesome
            </h2>
            <h1 class="max-6-xs text-6xl text-white font-thin m-3 text-left">
              Create new account <span class="font-bold text-accent">.</span>
            </h1>
            <p>
              Don't have an account?{" "}
              <span class="text-accent">
                {/* TODO: use global state to change form mode */}
                <a href="#signup" >signup</a>
              </span>
            </p>
            <div class="content-center card-body">
              <h2 class="card-title text-white font-bold m-auto">Login!</h2>
              <input
                type="email"
                placeholder="Your email here"
                class="input input-bordered input-success w-full max-w-md text-white m-auto"
              />
              <input
                type="password"
                placeholder="**************"
                class="input input-bordered input-success w-full max-w-md text-white m-auto"
              />
              <div class="card-actions justify-center">
                <button class="btn btn-accent">Login</button>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}


