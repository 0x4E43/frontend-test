import { createSignal } from "solid-js";
export default function Login() {
  const [formMode, setFormMode] = createSignal("signin");

  const changeFormMode = () => {
    setFormMode(formMode() === "signin" ? "signup" : "signin");
    console.log("FUNC: ",formMode());
  };
  console.log(formMode());
  if (formMode() === "signin")
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
                <a href="/login" onClick={changeFormMode}>signup</a>
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
  else
    return (
      <>
        <main class="text-center mx-auto text-gray-300 p-4">
          <div id="signup">
            <div class="card w-3/6 bg-base-100 shadow-xl m-auto content-center">
              <h2 class="max-6-xs text-accent font-thin uppercase m-3 text-left">
                You are Awesome
              </h2>
              <h1 class="max-6-xs text-6xl text-white font-thin m-3 text-left">
                Create new account <span class="font-bold text-accent">.</span>
              </h1>
              <p>
                Already have an account?{" "}
                <span class="text-accent">
                  <a href="/login" onClick={changeFormMode}>login</a>
                </span>
              </p>
              <div class="content-center card-body">
                <h2 class="card-title text-white font-bold m-auto">Login!</h2>
                <input
                  type="text"
                  placeholder="Your name here"
                  class="input input-bordered input-success w-full  max-w-md min-w-md text-white m-auto"
                />
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
                  <button class="btn btn-accent">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
}
