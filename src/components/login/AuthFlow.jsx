import React, { useState } from "react";
import SignUp from "./SignUp";
import Verify from "./Verify";

const AuthFlow = () => {
  const [email, setEmail] = useState(null);

  return (
    <div>
      {!email ? (
        <SignUp onOtpSent={setEmail} />
      ) : (
        <Verify email={email} setEmail={setEmail} />
      )}
    </div>
  );
};

export default AuthFlow;
