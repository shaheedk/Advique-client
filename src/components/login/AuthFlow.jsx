import React, { useState } from "react";
import SignUp from "./SignUp";
import Verify from "./Verify";
import Login from "../../../../../VisioGen/client/src/components/Login";

const AuthFlow = () => {
  const [email, setEmail] = useState(null);

  return (
    <div>
      {!email ? (
        <SignUp onOtpSent={setEmail} />
        // <Login onOtpSent={setEmail}/>

      ) : (
        <Verify email={email} />
       
      )}

    </div>
  );
};

export default AuthFlow;
