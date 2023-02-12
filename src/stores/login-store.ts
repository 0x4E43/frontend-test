import { createSignal } from "solid-js";

const [authForm, setAuthForm] = createSignal('');

export function getAuthFormSignal() {
    console.log('getAuthFormSignal', authForm());
  return authForm();
}

export function setAuthFormSignal(value: string) {
  setAuthForm(value);
}
