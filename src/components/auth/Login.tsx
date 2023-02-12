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
      <div class="card w-96 bg-base-100 shadow-xl m-auto">
        <div class="card-body">
          <h2 class="card-title text-white font-bold">Login!</h2>
          <input type="text" placeholder="Your name here" class="input input-bordered input-success w-full max-w-xs text-white" />
          <input type="email" placeholder="Your email here" class="input input-bordered input-success w-full max-w-xs text-white" />
          <input type="password" placeholder="**************" class="input input-bordered input-success w-full max-w-xs text-white" />
          <div class="card-actions justify-end">
            <button class="btn btn-accent">{btnName()}</button>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto mt-10">
        <table class="table w-full text-white">
          <thead>
            <tr class=" font-bold">
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Password</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <button class="btn btn-accent">Edit</button>
              </td>
              <td>
                <button class="btn btn-error">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

async function callApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data.slice(0, 5).map((item: any) => item.title));
  return data.slice(0, 5);
}
