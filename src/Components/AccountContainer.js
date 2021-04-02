import React, { useState } from "react";
import { LoginForm } from "./LoginForm";
import { AccountContext } from "./AccountContext";
import { SignUpForm } from "./SignupForm";

export function AccountBox(props) {
  const [active, setActive] = useState("signin");

  const switchToSignup = () => {
    setActive("signup");
  };
  const switchToSignin = () => {
    setActive("signin");
  };

  const contextValue = { switchToSignin, switchToSignup };

  return (
    <AccountContext.Provider value={contextValue}>
      <div className="sign-in-container sign-in-container-img greatprimer-font">
        {active === "signin" && <LoginForm />}
        {active === "signup" && <SignUpForm />}
      </div>
    </AccountContext.Provider>
  );
}
