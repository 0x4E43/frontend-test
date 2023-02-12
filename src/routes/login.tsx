import { createSignal } from "solid-js";
import LoginComponent from "~/components/auth/LoginComponent";
import SignupComponent from "~/components/auth/SignupComponent";
import { getAuthFormSignal,setAuthFormSignal } from "~/stores/login-store";
export default function Login() {
  const [formMode, setFormMode] = createSignal("signin");

 
  
  if (getAuthFormSignal() === "signin")
  {
    return (
      <>
      {console.log("LOG: ",getAuthFormSignal())}
       <LoginComponent/> 
      </>
    );
  }
    
  else
    return (
      <>
      
       <SignupComponent/>
      </>
    );
}
