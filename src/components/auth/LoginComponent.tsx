import { stringify } from "postcss";
import { createSignal, For, Signal } from "solid-js";
import { createStore } from "solid-js/store";
import { json } from "solid-start";
import { getAuthFormSignal,setAuthFormSignal } from "~/stores/login-store";
export default function LoginComponent() {
  const [currentForm, setCurrentForm] = createSignal('signin');
    const changeFormMode = () => {
        setCurrentForm(currentForm() === 'signin' ? 'signup' : 'signin');
        setAuthFormSignal(currentForm());
        console.log("FUNC: ",getAuthFormSignal());
      };
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
                  <a href="#" onClick={changeFormMode}>signup</a>
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


