import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { AccountContext } from "./AccountContext";
import { SignUpForm } from "./SignupForm";

//  home page for the sign up sheet
export function AccountBox(props) {
  //sets the active/default state of the page
  const [active, setActive] = useState("signin");

  const switchToSignup = () => {
    setActive("signup");
  };
  const switchToSignin = () => {
    setActive("signin");
  };
  // wraps this conent of AccountContainer to pass props without fully passing props (kind of a cheat)
  const contextValue = { switchToSignin, switchToSignup };
  //whats appearing in the page
  return (
    <AccountContext.Provider value={contextValue}>
      <div className="sign-in-container sign-in-container-img greatprimer-font">
        {/* psuedo links between login and signup to make the active render */}
        {active === "signin" && <LoginForm />}
        {active === "signup" && <SignUpForm />}
      </div>
    </AccountContext.Provider>
  );
}
